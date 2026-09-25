"use client";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ArticleMeta } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";

export function LearningExplorer({
  articles,
  categories,
}: {
  articles: ArticleMeta[];
  categories: readonly { slug: string; name: string }[];
}) {
  const params = useSearchParams();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  useEffect(() => {
    const initial = params.get("q");
    if (initial) setQ(initial);
  }, [params]);

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return articles.filter((a) => {
      if (cat !== "all" && a.category !== cat) return false;
      if (!terms.length) return true;
      const hay = `${a.title} ${a.description} ${a.keywords.join(" ")}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [articles, q, cat]);

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-4 bg-white/90 px-4 py-4 backdrop-blur-lg sm:mx-0 sm:rounded-2xl sm:px-0 lg:top-[72px]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-mute" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            type="search"
            placeholder="Search: D3 adhesive, styrene acrylic, MFFT, laminate bubbling…"
            className="input !rounded-full !py-3.5 pl-12 pr-12"
            aria-label="Search the learning center"
          />
          {q && (
            <button onClick={() => setQ("")} className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full hover:bg-slate-100" aria-label="Clear search">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none]">
          {[{ slug: "all", name: "All topics" }, ...categories].map((c) => (
            <button
              key={c.slug}
              onClick={() => setCat(c.slug)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                cat === c.slug ? "border-brand-600 bg-brand-600 text-white" : "border-slate-200 bg-white text-ink-soft hover:border-brand-300"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm text-ink-mute" aria-live="polite">{results.length} article{results.length === 1 ? "" : "s"}</p>
      <motion.div layout className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {results.map((a) => (
            <motion.div key={a.slug} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}>
              <ArticleCard a={a} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {!results.length && (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <p className="font-semibold">No articles match “{q}”.</p>
          <p className="mt-1 text-ink-soft">Ask our technical team directly — we answer formulation questions every day.</p>
          <a href="/contact" className="btn-primary mt-5">Ask an expert</a>
        </div>
      )}
    </div>
  );
}
