import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { ArticleMeta } from "@/lib/articles";
import { categoryName } from "@/lib/categories";

export function ArticleCard({ a }: { a: ArticleMeta }) {
  return (
    <Link href={`/learning-center/${a.slug}`} className="card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-center justify-between gap-3">
        <span className="chip">{categoryName(a.category)}</span>
        <span className="flex items-center gap-1 text-xs text-ink-mute"><Clock className="h-3.5 w-3.5" /> {a.readMinutes} min</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-brand-700">{a.title}</h3>
      <p className="mt-2 line-clamp-3 text-[15px] text-ink-soft">{a.description}</p>
      <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand-600">
        Read article <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
