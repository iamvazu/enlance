import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/lib/products";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ p }: { p: ProductCategory }) {
  return (
    <Link href={`/products/${p.slug}`} className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
      <ProductVisual icon={p.icon} label={p.name} className="h-40 transition duration-500 group-hover:scale-[1.03]" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <p className="mt-2 text-[15px] text-ink-soft">{p.short}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.grades.slice(0, 3).map((g) => <span key={g.name} className="chip">{g.name}</span>)}
        </div>
        <span className="mt-auto flex items-center gap-1 pt-6 text-sm font-semibold text-brand-600">
          Explore range <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
