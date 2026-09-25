"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Download, Loader2, MessageCircle, Send } from "lucide-react";
import type { LeadType } from "@/lib/leadSchema";
import { waLink } from "@/lib/site";
import { getAttribution, track } from "@/lib/track";

const productOptions = [
  "Enfixx MARINO (D3) wood adhesive",
  "Enfixx HD (D2) wood adhesive",
  "Enfixx SD (D1) wood adhesive",
  "Styrene acrylic emulsion (paints)",
  "Pure acrylic emulsion (paints)",
  "Specialty acrylic emulsion",
  "Construction resin / waterproofing polymer",
  "Textile binder",
  "Coir / natural fibre emulsion",
  "Additives",
  "Not sure — need advice",
];

const volumes = ["Trial / sample only", "< 100 kg / month", "100–500 kg / month", "500 kg – 2 t / month", "2–10 t / month", "> 10 t / month"];

const copy: Record<LeadType, { button: string; success: string }> = {
  enquiry: { button: "Send Enquiry", success: "Thanks! Our team will call you back within one working day." },
  sample: { button: "Request Free Sample & Quote", success: "Request received. A technical sales specialist will contact you to confirm the grade and dispatch your sample." },
  dealer: { button: "Apply to Become a Dealer", success: "Thank you for your interest in Enfixx. Our channel team will call you to discuss territory and margins." },
  tds: { button: "Unlock Downloads", success: "Thanks! Your technical documents are ready below. We'll also email them to you." },
};

export function EnquiryForm({
  type = "enquiry",
  defaultProduct = "",
  compact = false,
  onUnlocked,
}: {
  type?: LeadType;
  defaultProduct?: string;
  compact?: boolean;
  onUnlocked?: () => void;
}) {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [summary, setSummary] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const payload = { ...data, type, page: pathname, attribution: getAttribution() };
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Something went wrong");
      track("generate_lead", { lead_type: type, product: data.product });
      setSummary(
        `Hi Enlace, I just submitted a ${type} request on your website.\nName: ${data.name}\n${data.company ? `Company: ${data.company}\n` : ""}${data.product ? `Product: ${data.product}\n` : ""}${data.city ? `City: ${data.city}\n` : ""}`
      );
      setState("done");
      onUnlocked?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {state === "done" ? (
        <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-6 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
          <h3 className="mt-4 text-xl font-semibold">Request received</h3>
          <p className="mx-auto mt-2 max-w-md text-ink-soft">{copy[type].success}</p>
          <a href={waLink(summary)} target="_blank" rel="noopener" onClick={() => track("click_whatsapp", { place: "form_success" })} className="btn mt-6 bg-[#25D366] text-white hover:brightness-105">
            <MessageCircle className="h-5 w-5" /> Continue on WhatsApp for a faster reply
          </a>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
          {/* honeypot */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
            <Field label="Your name" name="name" required autoComplete="name" />
            <Field label="Phone / WhatsApp" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="+91 98xxx xxxxx" />
            {type !== "dealer" && <Field label="Company" name="company" autoComplete="organization" />}
            {type === "dealer" && <Field label="Shop / business name" name="company" required />}
            <Field label="Email" name="email" type="email" autoComplete="email" required={type === "tds"} />
            {(type === "sample" || type === "dealer") && <Field label="City / District" name="city" required={type === "dealer"} />}
            {type !== "dealer" && (
              <div className={compact ? "" : "sm:col-span-1"}>
                <label className="label" htmlFor="product">Product of interest</label>
                <select id="product" name="product" defaultValue={defaultProduct} className="input">
                  <option value="">Select a product</option>
                  {(defaultProduct && !productOptions.includes(defaultProduct) ? [defaultProduct, ...productOptions] : productOptions).map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            )}
            {(type === "sample" || type === "dealer") && (
              <div>
                <label className="label" htmlFor="volume">{type === "dealer" ? "Expected monthly sales" : "Expected monthly volume"}</label>
                <select id="volume" name="volume" className="input" defaultValue="">
                  <option value="">Select</option>
                  {volumes.map((v) => <option key={v}>{v}</option>)}
                </select>
              </div>
            )}
            {type === "sample" && <Field label="Application (e.g. exterior paint, kitchen cabinets)" name="application" className={compact ? "" : "sm:col-span-2"} />}
          </div>
          {type !== "tds" && (
            <div>
              <label className="label" htmlFor="message">{type === "dealer" ? "Brands you currently sell (optional)" : "Message (optional)"}</label>
              <textarea id="message" name="message" rows={compact ? 3 : 4} className="input resize-y" />
            </div>
          )}
          {state === "error" && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>}
          <button type="submit" disabled={state === "loading"} className="btn-primary w-full sm:w-auto">
            {state === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : type === "tds" ? <Download className="h-5 w-5" /> : <Send className="h-5 w-5" />}
            {copy[type].button}
          </button>
          <p className="text-xs text-ink-mute">
            We respond within one working day. Your details are used only to respond to your request — see our{" "}
            <a href="/privacy-policy" className="underline">privacy policy</a>.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, className = "", ...rest }: { label: string; name: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="label" htmlFor={name}>
        {label} {rest.required && <span className="text-red-500">*</span>}
      </label>
      <input id={name} name={name} className="input" {...rest} />
    </div>
  );
}
