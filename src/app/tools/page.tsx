import Link from "next/link";
import { Calculator, FileText, Wand2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Free Tools — Wood Adhesive Selector & Coverage Calculator",
  description: "Free tools for carpenters and manufacturers: find the right D1/D2/D3 wood adhesive in 30 seconds and estimate adhesive quantity per job.",
  path: "/tools",
});

export default function Tools() {
  const tools = [
    { I: Wand2, t: "Wood Adhesive Selector", d: "Answer three questions and get the right Enfixx grade for your job.", href: "/tools/adhesive-selector" },
    { I: Calculator, t: "Adhesive Coverage Calculator", d: "Estimate kilograms of adhesive for sheets, sq ft or m².", href: "/tools/coverage-calculator" },
    { I: FileText, t: "TDS & MSDS Library", d: "Technical and safety data sheets for every grade.", href: "/downloads" },
  ];
  return (
    <section className="container py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Tools", path: "/tools" }]} />
      <h1 className="h-section mt-5">Free tools</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {tools.map(({ I, t, d, href }) => (
          <Link key={href} href={href} className="card p-7 transition hover:-translate-y-1 hover:shadow-lift">
            <I className="h-8 w-8 text-brand-600" />
            <h2 className="mt-4 text-xl font-semibold">{t}</h2>
            <p className="mt-2 text-ink-soft">{d}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
