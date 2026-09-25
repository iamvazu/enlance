import { Plus } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/seo";

/** Accessible, no-JS accordion + FAQPage schema. */
export function FaqList({ faqs, schema = true }: { faqs: { q: string; a: string }[]; schema?: boolean }) {
  if (!faqs.length) return null;
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {schema && <JsonLd data={faqSchema(faqs)} />}
      {faqs.map((f) => (
        <details key={f.q} className="group px-5 py-1 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <h3 className="text-[16px] font-semibold sm:text-[17px]">{f.q}</h3>
            <Plus className="h-5 w-5 shrink-0 text-brand-600 transition group-open:rotate-45" />
          </summary>
          <p className="pb-5 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
