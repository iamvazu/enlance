import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { glossary, termSlug } from "@/lib/glossary";
import { pageMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "Glossary — Polymer Emulsion, Paint & Wood Adhesive Terms Explained",
  description: "Plain-English definitions of polymer, paint and adhesive terms: acrylic emulsion, MFFT, Tg, PVC, CPVC, D1–D4, EN 204, open time, pigment printing, SBR, rubberised coir and more.",
  path: "/learning-center/glossary",
  keywords: ["what is MFFT", "what is acrylic emulsion", "D3 meaning adhesive", "PVC CPVC paint", "polymer glossary", "adhesive terminology"],
});

export default function Glossary() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  const letters = Array.from(new Set(sorted.map((t) => t.term[0].toUpperCase())));
  return (
    <section className="container max-w-4xl py-10 sm:py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Enlace Polymers Glossary",
          url: `${SITE_URL}/learning-center/glossary`,
          hasDefinedTerm: sorted.map((t) => ({ "@type": "DefinedTerm", name: t.term, description: t.def, url: `${SITE_URL}/learning-center/glossary#${termSlug(t.term)}` })),
        }}
      />
      <Breadcrumbs items={[{ name: "Learning Center", path: "/learning-center" }, { name: "Glossary", path: "/learning-center/glossary" }]} />
      <h1 className="h-section mt-5">Polymer, paint & adhesive glossary</h1>
      <p className="lead mt-3">{sorted.length} terms every formulator, carpenter and buyer should know.</p>
      <nav className="sticky top-16 z-10 -mx-4 mt-8 flex gap-1 overflow-x-auto bg-white/90 px-4 py-3 backdrop-blur lg:top-[72px]" aria-label="Glossary letters">
        {letters.map((l) => (
          <a key={l} href={`#letter-${l}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-semibold text-brand-700 hover:bg-brand-50">{l}</a>
        ))}
      </nav>
      <dl className="mt-6">
        {letters.map((l) => (
          <div key={l} id={`letter-${l}`} className="scroll-mt-32">
            <p className="mt-8 font-display text-3xl font-semibold text-brand-200">{l}</p>
            {sorted.filter((t) => t.term[0].toUpperCase() === l).map((t) => (
              <div key={t.term} id={termSlug(t.term)} className="scroll-mt-32 border-b border-slate-100 py-5">
                <dt className="text-lg font-semibold">{t.term}</dt>
                <dd className="mt-1.5 text-[16px] leading-relaxed text-ink-soft">
                  {t.def} {t.related && <Link href={t.related} className="font-medium text-brand-600 underline">Learn more →</Link>}
                </dd>
              </div>
            ))}
          </div>
        ))}
      </dl>
    </section>
  );
}
