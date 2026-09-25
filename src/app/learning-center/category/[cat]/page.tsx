import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { categories, getArticleMetas } from "@/lib/articles";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((c) => ({ cat: c.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const c = categories.find((x) => x.slug === cat);
  if (!c) return {};
  return pageMeta({ title: `${c.name} Guides & Articles`, description: `${c.desc} Expert ${c.name.toLowerCase()} articles from Enlace Polymers' R&D team.`, path: `/learning-center/category/${c.slug}` });
}
export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const c = categories.find((x) => x.slug === cat);
  if (!c) notFound();
  const list = getArticleMetas().filter((a) => a.category === c.slug);
  return (
    <section className="container py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Learning Center", path: "/learning-center" }, { name: c.name, path: `/learning-center/category/${c.slug}` }]} />
      <h1 className="h-section mt-5">{c.name} guides</h1>
      <p className="lead mt-3 max-w-2xl">{c.desc}</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
    </section>
  );
}
