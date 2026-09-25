"use client";
import { useState } from "react";
import { FileText, Lock, Unlock } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";

// Add PDFs to /public/docs and set available: true to make them downloadable after unlock.
const docs = [
  { name: "Enfixx MARINO (D3) — Technical Data Sheet", file: "enfixx-marino-tds.pdf", group: "Enfixx", available: false },
  { name: "Enfixx HD (D2) — Technical Data Sheet", file: "enfixx-hd-tds.pdf", group: "Enfixx", available: false },
  { name: "Enfixx SD (D1) — Technical Data Sheet", file: "enfixx-sd-tds.pdf", group: "Enfixx", available: false },
  { name: "Enfixx range — Safety Data Sheet (MSDS)", file: "enfixx-msds.pdf", group: "Enfixx", available: false },
  { name: "Styrene Acrylic Emulsions — TDS", file: "styrene-acrylic-tds.pdf", group: "Emulsions", available: false },
  { name: "Pure Acrylic Emulsions — TDS", file: "pure-acrylic-tds.pdf", group: "Emulsions", available: false },
  { name: "Construction Resins — TDS", file: "construction-resins-tds.pdf", group: "Emulsions", available: false },
  { name: "Textile Binders — TDS", file: "textile-binders-tds.pdf", group: "Emulsions", available: false },
  { name: "Coir Emulsions — TDS", file: "coir-emulsions-tds.pdf", group: "Emulsions", available: false },
  { name: "Company Profile & ISO Certificate", file: "enlace-company-profile.pdf", group: "Company", available: false },
];

export function DownloadsGate() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <ul className="grid gap-3">
        {docs.map((d) => (
          <li key={d.file} className="card flex items-center justify-between gap-4 p-4">
            <span className="flex items-center gap-3">
              <FileText className="h-6 w-6 shrink-0 text-brand-600" />
              <span>
                <span className="block font-medium">{d.name}</span>
                <span className="text-xs text-ink-mute">{d.group} · PDF</span>
              </span>
            </span>
            {unlocked ? (
              d.available ? (
                <a href={`/docs/${d.file}`} download className="btn-primary !min-h-[40px] !px-4 !py-2 text-sm">Download</a>
              ) : (
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-600"><Unlock className="h-4 w-4" /> Emailed to you</span>
              )
            ) : (
              <Lock className="h-5 w-5 shrink-0 text-slate-400" aria-label="Locked" />
            )}
          </li>
        ))}
      </ul>
      <div className="card h-fit p-6 sm:p-8 lg:sticky lg:top-24">
        <h2 className="text-xl font-semibold">Unlock all documents</h2>
        <p className="mt-1 text-sm text-ink-soft">One quick form — instant access to every TDS and MSDS.</p>
        <div className="mt-5"><EnquiryForm type="tds" compact onUnlocked={() => setUnlocked(true)} /></div>
      </div>
    </div>
  );
}
