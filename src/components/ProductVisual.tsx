import { Brush, Building2, Droplets, FlaskConical, Layers, Shirt } from "lucide-react";
import type { ProductCategory } from "@/lib/products";

const icons = { adhesive: Layers, paint: Brush, construction: Building2, textile: Shirt, coir: Droplets, additive: FlaskConical };
const grads: Record<ProductCategory["icon"], string> = {
  adhesive: "from-brand-700 via-brand-600 to-sky-accent",
  paint: "from-brand-900 via-brand-600 to-sky-300",
  construction: "from-slate-800 via-brand-800 to-brand-500",
  textile: "from-brand-950 via-brand-700 to-cyan-400",
  coir: "from-amber-900 via-brand-800 to-brand-500",
  additive: "from-brand-950 via-brand-800 to-sky-accent",
};

/** Branded placeholder art. Replace with real product/plant photography via next/image when available. */
export function ProductVisual({ icon, className = "", label }: { icon: ProductCategory["icon"]; className?: string; label?: string }) {
  const Icon = icons[icon];
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${grads[icon]} ${className}`} role="img" aria-label={label}>
      <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <pattern id={`tri-${icon}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M0 24 L12 4 L24 24 Z" fill="none" stroke="white" strokeWidth=".6" />
          </pattern>
        </defs>
        <rect width="200" height="120" fill={`url(#tri-${icon})`} />
      </svg>
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/25">
        <Icon className="h-7 w-7 text-white" />
      </div>
    </div>
  );
}
