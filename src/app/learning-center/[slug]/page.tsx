import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock, FlaskConical } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/FaqList";
import { ArticleCard } from "@/components/ArticleCard";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareBar } from "@/components/ShareBar";
import { EnquiryForm } from "@/components/EnquiryForm";
import { categoryName, getAllArticles, getArticle } from "@/lib/articles";
import { getProduct } from "@/lib/products";
import { articleSchema, pageMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMeta({ title: a.title, description: a.description, path: `/learning-center/${a.slug}`, keywords: a.keywords, type: "article", publishedTime: a.date });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const all = getAllArticles();
  const related = all.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3);
  const more = related.length < 3 ? all.filter((x) => x.slug !== a.slug && !related.includes(x)).slice(0, 3 - related.length) : [];
  const prods = (a.products ?? []).map(getProduct).filter(Boolean);
  const path = `/learning-center/${a.slug}`;
  const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return (
    <>
      <ReadingProgress />
      <JsonLd data={articleSchema({ title: a.title, description: a.description, path, date: a.date, updated: a.updated, keywords: a.keywords })} />
      <header className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container max-w-4xl py-10 sm:py-14">
          <Breadcrumbs items={[{ name: "Learning Center", path: "/learning-center" }, { name: categoryName(a.category), path: `/learning-center/category/${a.category}` }, { name: a.title, path }]} />
          <Link href={`/learning-center/category/${a.category}`} className="chip mt-6">{categoryName(a.category)}</Link>
          <h1 className="mt-4 text-[30px] font-semibold leading-[1.15] sm:text-[42px]">{a.title}</h1>
          <p className="lead mt-4">{a.description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-mute">
              <span className="flex items-center gap-1.5"><FlaskConical className="h-4 w-4 text-brand-600" /> Enlace R&D Team</span>
              <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {fmt(a.updated ?? a.date)}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {a.readMinutes} min read</span>
            </div>
            <ShareBar url={`${SITE_URL}${path}`} title={a.title} />
          </div>
        </div>
      </header>

      <div className="container grid max-w-6xl gap-12 pb-16 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          {a.toc.length > 2 && (
            <nav className="sticky top-28 text-sm" aria-label="Table of contents">
              <p className="font-semibold uppercase tracking-widest text-ink-mute">On this page</p>
              <ol className="mt-4 space-y-2.5 border-l border-slate-200">
                {a.toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-ink-soft hover:border-brand-500 hover:text-brand-700">{t.text}</a></li>
                ))}
              </ol>
            </nav>
          )}
        </aside>
        <div className="min-w-0 max-w-3xl">
          {a.toc.length > 2 && (
            <details className="mb-6 rounded-2xl border border-slate-200 p-4 lg:hidden">
              <summary className="cursor-pointer font-semibold">On this page</summary>
              <ol className="mt-3 space-y-2 text-[15px]">
                {a.toc.map((t) => <li key={t.id}><a href={`#${t.id}`} className="text-brand-700">{t.text}</a></li>)}
              </ol>
            </details>
          )}
          <article className="prose-enlace" dangerouslySetInnerHTML={{ __html: a.html }} />

          {a.faqs && a.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
              <div className="mt-5"><FaqList faqs={a.faqs} /></div>
            </section>
          )}

          {prods.length > 0 && (
            <section className="mt-14 rounded-3xl bg-brand-950 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-accent">Products mentioned</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {prods.map((p) => (
                  <Link key={p!.slug} href={`/products/${p!.slug}`} className="group rounded-2xl border border-white/15 p-4 transition hover:bg-white/5">
                    <p className="font-semibold text-white">{p!.name}</p>
                    <p className="mt-1 text-sm text-white/65">{p!.short}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-sky-accent">View <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="card mt-14 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Talk to our technical team</h2>
            <p className="mt-2 text-ink-soft">Questions about this topic or your formulation? Get expert advice and a free sample.</p>
            <div className="mt-6"><EnquiryForm type="sample" /></div>
          </section>
        </div>
      </div>

      <section className="bg-slate-50 py-14">
        <div className="container">
          <h2 className="text-2xl font-semibold">Keep reading</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{[...related, ...more].map((r) => <ArticleCard key={r.slug} a={r} />)}</div>
        </div>
      </section>
    </>
  );
}
