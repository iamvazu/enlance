import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export function Breadcrumbs({ items, dark = false }: { items: { name: string; path: string }[]; dark?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className={`text-[13px] ${dark ? "text-white/60" : "text-ink-mute"}`}>
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((it, i) => (
            <li key={it.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />}
              {i === all.length - 1 ? (
                <span aria-current="page" className={dark ? "text-white/90" : "text-ink"}>{it.name}</span>
              ) : (
                <Link href={it.path} className="hover:underline">{it.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
