import { Suspense } from "react";
import Link from "next/link";
import { BookOpen, Calculator, Wand2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LearningExplorer } from "@/components/LearningExplorer";
import { PolymerCanvas } from "@/components/PolymerCanvas";
import { CtaBand } from "@/components/CtaBand";
import { categories, getArticleMetas } from "@/lib/articles";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Learning Center — Wood Adhesive, Acrylic Emulsion, Waterproofing & Textile Binder Guides",
  description:
    "Technical guides from Enlace Polymers' R&D team: D1–D4 wood adhesive classes, laminate pasting, styrene acrylic vs pure acrylic, MFFT & Tg, polymer-modified mortar, pigment printing binders, coir emulsions and more.",
  path: "/learning-center",
  keywords: ["wood adhesive guide", "acrylic emulsion guide", "paint formulation basics", "waterproofing polymer guide", "textile binder guide", "coir binder", "polymer emulsion knowledge"],
});

export default function LearningCenter() {
  const articles = getArticleMetas();
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <PolymerCanvas className="absolute inset-0 h-full w-full opacity-60" density={0.8} />
        <div className="container relative py-12 sm:py-20">
          <Breadcrumbs dark items={[{ name: "Learning Center", path: "/learning-center" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-[32px] font-semibold leading-tight text-white sm:text-5xl">The polymer & adhesive learning center</h1>
          <p className="mt-5 max-w-2xl text-[17px] text-white/75">
            {articles.length} practical guides written by chemists — for carpenters, furniture makers, paint formulators, waterproofing contractors, textile printers and coir manufacturers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/learning-center/glossary" className="btn-ghost-dark"><BookOpen className="h-5 w-5" /> Glossary of terms</Link>
            <Link href="/tools/adhesive-selector" className="btn-ghost-dark"><Wand2 className="h-5 w-5" /> Adhesive selector</Link>
            <Link href="/tools/coverage-calculator" className="btn-ghost-dark"><Calculator className="h-5 w-5" /> Coverage calculator</Link>
          </div>
        </div>
      </section>
      <section className="container py-8 sm:py-12">
        <Suspense>
          <LearningExplorer articles={articles} categories={categories} />
        </Suspense>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.slug} href={`/learning-center/category/${c.slug}`} className="rounded-2xl border border-slate-200 p-5 transition hover:border-brand-300 hover:bg-brand-50">
              <h2 className="font-semibold">{c.name}</h2>
              <p className="mt-1 text-sm text-ink-soft">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand title="Can't find your answer?" text="Our chemists answer formulation and application questions every day. Ask us directly — no sales pressure." primary={{ label: "Ask a technical question", href: "/contact" }} />
    </>
  );
}
