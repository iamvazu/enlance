import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { leadSchema } from "@/lib/leadSchema";

// Naive in-memory rate limit (per server instance). Replace with Upstash/Redis in production if needed.
const hits = new Map<string, { n: number; t: number }>();
const LIMIT = 8;
const WINDOW = 10 * 60 * 1000;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const h = hits.get(ip);
  if (h && now - h.t < WINDOW && h.n >= LIMIT) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please call or WhatsApp us." }, { status: 429 });
  }
  hits.set(ip, h && now - h.t < WINDOW ? { n: h.n + 1, t: h.t } : { n: 1, t: now });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.issues[0]?.message ?? "Invalid data" }, { status: 422 });
  }
  const { website, ...lead } = parsed.data;
  if (website) return NextResponse.json({ ok: true }); // silently drop bots

  const record = { ...lead, receivedAt: new Date().toISOString(), ip };

  // 1) Forward to webhook (Google Apps Script → Sheet, Zapier, Make, HubSpot, Zoho, etc.)
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(record) });
    } catch (e) {
      console.error("[lead] webhook failed", e);
    }
  }

  // 2) Local log for development (read-only FS on serverless hosts is ignored)
  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(record) + "\n");
  } catch {}
  console.log("[lead]", record.type, record.name, record.phone, record.product ?? "");

  return NextResponse.json({ ok: true });
}
