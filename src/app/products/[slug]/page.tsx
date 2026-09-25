import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Download, FileText, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductVisual } from "@/components/ProductVisual";
import { Reveal } from "@/components/Reveal";
import { FaqList } from "@/components/FaqList";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ArticleCard } from "@/components/ArticleCard";
import { GradePack } from "@/components/GradePack";
import { JsonLd } from "@/components/JsonLd";
import { products, getProduct, enfixxGrades } from "@/lib/products";
import { getIndustry } from "@/lib/industries";
import { getArticleMetas } from "@/lib/articles";
import { pageMeta, productSchema } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return pageMeta({ title: p.metaTitle, description: p.metaDescription, path: `/products/${p.slug}`, keywords: p.keywords });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const isEnfixx = p.slug === "enfixx-wood-adhesives";
  const related = getArticleMetas().filter((a) => p.articles.includes(a.slug));

  return (
    <>
      <JsonLd data={productSchema({ name: p.name, description: p.metaDescription, path: `/products/${p.slug}`, category: p.name, brand: isEnfixx ? "Enfixx" : undefined })} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <ProductVisual icon={p.icon} image={p.image} priority className="absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/40" />
        <div className="container relative py-10 sm:py-16 lg:py-20">
          <Breadcrumbs dark items={[{ name: "Products", path: "/products" }, { name: p.name, path: `/products/${p.slug}` }]} />
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h1 className="font-display text-[30px] font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{p.h1}</h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/75">{p.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/request-sample?product=${encodeURIComponent(p.name)}`} className="btn-accent">Request sample & price <ArrowRight className="h-5 w-5" /></Link>
                <Link href="/downloads" className="btn-ghost-dark"><Download className="h-5 w-5" /> Download TDS</Link>
              </div>
            </div>
            {isEnfixx ? (
              <div className="hidden justify-center gap-2 lg:flex">
                {enfixxGrades.map((g, i) => (
                  <Reveal key={g.slug} delay={0.1 * i} y={40}><GradePack {...g} className="w-36" /></Reveal>
                ))}
              </div>
            ) : (
              <Reveal className="hidden lg:block" y={30}>
                <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[.06] backdrop-blur-md shadow-2xl">
                  <div className="relative h-44 w-full">
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-950/80 px-2.5 py-1 text-xs font-semibold text-sky-accent backdrop-blur-md ring-1 ring-white/20">
                        <Sparkles className="h-3 w-3" /> In-house Resin
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-sky-accent">Available grades</p>
                    <ul className="mt-3 space-y-2.5">
                      {p.grades.map((g) => (
                        <li key={g.name} className="flex gap-3 rounded-xl bg-white/[.05] p-3 text-sm">
                          <span className="mt-1 h-2 w-2 shrink-0 rotate-45 bg-sky-accent" />
                          <span>
                            <span className="block font-semibold text-white">{g.name}</span>
                            <span className="block text-xs text-white/60">{g.bestFor.slice(0, 3).join(" · ")}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Body + sticky form */}
      <section className="container grid gap-12 py-14 lg:grid-cols-[1fr_380px] lg:py-20">
        <div className="min-w-0">
          {/* Featured Application Photography Banner */}
          <Reveal>
            <div className="relative mb-10 h-64 sm:h-80 lg:h-96 w-full overflow-hidden rounded-3xl border border-slate-200 shadow-lift">
              <Image
                src={p.image}
                alt={`${p.name} manufacturing and application`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-white">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-accent/20 px-3 py-1 text-xs font-semibold text-sky-accent backdrop-blur-md ring-1 ring-sky-accent/30">
                    <Sparkles className="h-3.5 w-3.5" /> Polymer Chemistry & Application
                  </span>
                  <p className="mt-1.5 text-lg font-semibold text-white sm:text-xl">{p.name}</p>
                  <p className="text-xs text-white/80 sm:text-sm">{p.short}</p>
                </div>
                <span className="rounded-xl bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                  KINFRA Petrochemical Park, Kochi
                </span>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {p.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          {/* Grades */}
          <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">{isEnfixx ? "Enfixx product series" : `${p.name} range`}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {p.grades.map((g, i) => {
              const inner = (
                <>
                  <h3 className="text-lg font-semibold">{g.name}</h3>
                  <p className="mt-2 text-[15px] text-ink-soft">{g.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{g.bestFor.map((b) => <span key={b} className="chip">{b}</span>)}</div>
                  {g.slug && <span className="mt-4 inline-block text-sm font-semibold text-brand-600">View {g.name} →</span>}
                </>
              );
              return (
                <Reveal key={g.name} delay={i * 0.05}>
                  {g.slug ? (
                    <Link href={`/products/enfixx/${g.slug}`} className="card block h-full p-6 transition hover:border-brand-300 hover:shadow-lift">{inner}</Link>
                  ) : (
                    <div className="card h-full p-6">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Benefits */}
          <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">Why choose Enlace {isEnfixx ? "Enfixx" : p.name.toLowerCase()}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {p.benefits.map((b) => (
              <div key={b.title} className="flex gap-3 rounded-2xl bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-accent" />
                <div><h3 className="font-semibold">{b.title}</h3><p className="mt-1 text-[15px] text-ink-soft">{b.text}</p></div>
              </div>
            ))}
          </div>

          {/* Applications */}
          <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">Applications</h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {p.applications.map((a) => (
              <li key={a} className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-[15px]">
                <span className="h-2 w-2 rotate-45 bg-brand-500" /> {a}
              </li>
            ))}
          </ul>

          {/* Specs */}
          <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">Typical properties</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-[15px]">
              <tbody>
                {p.specs.map((s, i) => (
                  <tr key={s.label} className={i % 2 ? "bg-slate-50" : ""}>
                    <th className="w-2/5 px-4 py-3 font-medium text-ink">{s.label}</th>
                    <td className="px-4 py-3 text-ink-soft">
                      {s.value === "On TDS" ? <Link href="/downloads" className="inline-flex items-center gap-1 font-medium text-brand-600"><FileText className="h-4 w-4" /> See technical data sheet</Link> : s.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Industries */}
          <div className="mt-10 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-ink">Industries:</span>
            {p.industries.map((s) => {
              const ind = getIndustry(s);
              return ind ? <Link key={s} href={`/industries/${s}`} className="chip hover:bg-brand-100">{ind.name}</Link> : null;
            })}
          </div>

          {/* FAQ */}
          {p.faqs.length > 0 && (
            <>
              <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">{p.name} — FAQs</h2>
              <div className="mt-6"><FaqList faqs={p.faqs} /></div>
            </>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <h2 className="text-xl font-semibold">Get price & free sample</h2>
            <p className="mt-1 text-sm text-ink-soft">Response within one working day.</p>
            <div className="mt-5"><EnquiryForm type="sample" compact defaultProduct="" /></div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold sm:text-3xl">Learn more about {p.name.toLowerCase()}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => <ArticleCard key={a.slug} a={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
