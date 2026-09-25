import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { industries } from "@/lib/industries";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Industries — Furniture, Plywood, Paints, Construction Chemicals, Textiles & Coir",
  description: "Polymer emulsions and wood adhesives for furniture makers, plywood & laminate units, paint manufacturers, construction chemical brands, textile printers and the coir industry.",
  path: "/industries",
  keywords: ["polymer solutions by industry", "adhesive for furniture industry", "emulsion for paint industry", "binder for textile industry", "coir industry chemicals"],
});

export default function IndustriesPage() {
  return (
    <>
      <section className="container py-10 sm:py-16">
        <Breadcrumbs items={[{ name: "Industries", path: "/industries" }]} />
        <h1 className="h-section mt-5 max-w-3xl">Polymer solutions for the industries that build South India</h1>
        <p className="lead mt-4 max-w-2xl">Our commitment to innovation and quality makes us a trusted partner across a broad spectrum of industries, helping clients achieve their most ambitious goals.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 0.06}>
              <Link href={`/industries/${ind.slug}`} className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
                <h2 className="text-xl font-semibold">{ind.name}</h2>
                <p className="mt-2 text-[15px] text-ink-soft">{ind.intro}</p>
                <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand-600">See solutions <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
