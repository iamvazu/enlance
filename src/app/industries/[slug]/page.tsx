import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ArticleCard } from "@/components/ArticleCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PolymerCanvas } from "@/components/PolymerCanvas";
import { industries, getIndustry } from "@/lib/industries";
import { getArticleMetas } from "@/lib/articles";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return pageMeta({ title: ind.metaTitle, description: ind.metaDescription, path: `/industries/${ind.slug}`, keywords: ind.keywords });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();
  const arts = getArticleMetas().filter((a) => ind.articles.includes(a.slug));
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <PolymerCanvas className="absolute inset-0 h-full w-full opacity-50" density={0.6} />
        <div className="container relative py-12 sm:py-20">
          <Breadcrumbs dark items={[{ name: "Industries", path: "/industries" }, { name: ind.name, path: `/industries/${ind.slug}` }]} />
          <h1 className="mt-6 max-w-3xl font-display text-[30px] font-semibold leading-tight text-white sm:text-5xl">{ind.h1}</h1>
          <p className="mt-5 max-w-2xl text-[17px] text-white/75">{ind.intro}</p>
          <a href="#enquire" className="btn-accent mt-8">{ind.cta} <ArrowRight className="h-5 w-5" /></a>
        </div>
      </section>
      <section className="container py-14 sm:py-20">
        <h2 className="text-2xl font-semibold sm:text-3xl">Problems we solve</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {ind.pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="rounded-2xl bg-slate-50 p-6">
              <AlertCircle className="h-6 w-6 text-brand-600" />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-[15px] text-ink-soft">{p.text}</p>
            </Reveal>
          ))}
        </div>
        <h2 className="mt-14 text-2xl font-semibold sm:text-3xl">Recommended products</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {ind.solutions.map((s) => (
            <Link key={s.product} href={s.href} className="card group p-6 transition hover:shadow-lift">
              <h3 className="text-lg font-semibold group-hover:text-brand-700">{s.product}</h3>
              <p className="mt-1.5 text-[15px] text-ink-soft">{s.why}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">View product <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
      {arts.length > 0 && (
        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold sm:text-3xl">Guides for {ind.name.toLowerCase()}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{arts.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
          </div>
        </section>
      )}
      <section id="enquire" className="container scroll-mt-24 py-14 sm:py-20">
        <div className="card mx-auto max-w-3xl p-6 sm:p-10">
          <h2 className="text-2xl font-semibold">{ind.cta}</h2>
          <p className="mt-2 text-ink-soft">Tell us about your operation and we'll recommend the right grade.</p>
          <div className="mt-6"><EnquiryForm type="sample" /></div>
        </div>
      </section>
    </>
  );
}
