import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GradePack } from "@/components/GradePack";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/FaqList";
import { enfixxGrades, getGrade, getProduct } from "@/lib/products";
import { pageMeta, productSchema } from "@/lib/seo";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return enfixxGrades.map((g) => ({ grade: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const g = getGrade(grade);
  if (!g) return {};
  return pageMeta({ title: g.metaTitle, description: g.metaDescription, path: `/products/enfixx/${g.slug}`, keywords: [...g.keywords] });
}

const compare = [
  { label: "EN 204 durability class", sd: "D1", hd: "D2", marino: "D3" },
  { label: "Dry interior joinery", sd: true, hd: true, marino: true },
  { label: "Occasional humidity / splashes", sd: false, hd: true, marino: true },
  { label: "Kitchens, bathrooms, wet zones", sd: false, hd: false, marino: true },
  { label: "Coastal & high-humidity regions", sd: false, hd: false, marino: true },
  { label: "Laminate & veneer pasting", sd: "Light duty", hd: true, marino: true },
  { label: "Edge banding & panel joinery", sd: false, hd: true, marino: true },
  { label: "Positioning", sd: "Economical", hd: "Professional", marino: "Premium" },
];

export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const g = getGrade(grade);
  if (!g) notFound();
  const family = getProduct("enfixx-wood-adhesives")!;
  const others = enfixxGrades.filter((o) => o.slug !== g.slug);

  return (
    <>
      <JsonLd data={productSchema({ name: `${g.name} ${g.dClass} Wood Adhesive`, description: g.metaDescription, path: `/products/enfixx/${g.slug}`, category: "Wood adhesive", brand: "Enfixx" })} />
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container py-10 sm:py-14">
          <Breadcrumbs items={[{ name: "Products", path: "/products" }, { name: "Enfixx", path: "/products/enfixx-wood-adhesives" }, { name: g.name, path: `/products/enfixx/${g.slug}` }]} />
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
            <Reveal className="relative mx-auto w-56 sm:w-72">
              <div className="absolute inset-6 rounded-full blur-3xl" style={{ background: `${g.colour}55` }} />
              <GradePack {...g} className="relative w-full animate-floaty" />
            </Reveal>
            <div>
              <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: g.colour }}>{g.dClass} · EN 204</span>
              <h1 className="h-section mt-4">{g.name} — {g.tagline}</h1>
              <p className="lead mt-4">{g.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/request-sample?product=${encodeURIComponent(g.name)}`} className="btn-primary">Get free trial pack <ArrowRight className="h-5 w-5" /></Link>
                <a href={waLink(`Hi, please share price and pack sizes for ${g.name} (${g.dClass}).`)} target="_blank" rel="noopener" className="btn-ghost"><MessageCircle className="h-5 w-5" /> Price on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-12 py-12 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold sm:text-3xl">Key applications</h2>
          <ul className="mt-6 space-y-3">
            {g.applications.map((a) => (
              <li key={a} className="flex gap-3 text-[16px]"><Check className="mt-1 h-5 w-5 shrink-0 text-emerald-500" /> {a}</li>
            ))}
          </ul>
          <p className="mt-6 flex gap-3 rounded-2xl bg-amber-50 p-4 text-[15px] text-amber-900"><AlertTriangle className="h-5 w-5 shrink-0" /> {g.notFor}</p>

          <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">How to apply {g.name}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Prepare", "Surfaces must be clean, dry, dust-free and free of oil or wax. Wood moisture ideally 8–12%."],
              ["Spread", "Apply a thin, uniform layer by brush, spreader, roller or glue-spreader machine."],
              ["Press", "Close the joint within open time and clamp or press evenly across the surface."],
              ["Cure", "Allow curing time according to temperature and humidity before machining or loading."],
            ].map(([t, d], i) => (
              <li key={t} className="card p-5">
                <span className="font-display text-3xl font-semibold text-brand-200">0{i + 1}</span>
                <h3 className="mt-1 font-semibold">{t}</h3>
                <p className="mt-1 text-[15px] text-ink-soft">{d}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">Compare Enfixx grades</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[560px] text-left text-[15px]">
              <thead className="bg-brand-950 text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  {enfixxGrades.map((x) => (
                    <th key={x.slug} className={`px-4 py-3 font-semibold ${x.slug === g.slug ? "bg-brand-700" : ""}`}>{x.name.replace("Enfixx ", "")}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={row.label} className={i % 2 ? "bg-slate-50" : ""}>
                    <td className="px-4 py-3 font-medium">{row.label}</td>
                    {(["sd", "hd", "marino"] as const).map((k) => {
                      const v = row[k];
                      return (
                        <td key={k} className={`px-4 py-3 ${k === g.slug ? "bg-brand-50 font-semibold" : ""}`}>
                          {v === true ? <Check className="h-5 w-5 text-emerald-500" /> : v === false ? <span className="text-slate-300">—</span> : v}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">Enfixx FAQs</h2>
          <div className="mt-6"><FaqList faqs={family.faqs} /></div>

          <h2 className="mt-14 text-2xl font-semibold">Other Enfixx grades</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/products/enfixx/${o.slug}`} className="card flex items-center gap-4 p-4 transition hover:shadow-lift">
                <GradePack {...o} className="w-20 shrink-0" />
                <div><p className="font-semibold">{o.name} ({o.dClass})</p><p className="text-sm text-ink-soft">{o.tagline}</p></div>
              </Link>
            ))}
          </div>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">Order {g.name}</h2>
            <p className="mt-1 text-sm text-ink-soft">Bulk, project and dealer pricing available.</p>
            <div className="mt-5"><EnquiryForm type="sample" compact defaultProduct={`${g.name} (${g.dClass}) wood adhesive`} /></div>
          </div>
        </aside>
      </section>
    </>
  );
}
