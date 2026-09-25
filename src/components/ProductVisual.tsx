import Image from "next/image";
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

export function ProductVisual({
  icon,
  image,
  className = "",
  label,
  priority = false,
}: {
  icon: ProductCategory["icon"];
  image?: string;
  className?: string;
  label?: string;
  priority?: boolean;
}) {
  const Icon = icons[icon];
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${grads[icon]} ${className}`} role="img" aria-label={label}>
      {image ? (
        <>
          <Image
            src={image}
            alt={label || "Product visual"}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent" />
        </>
      ) : (
        <>
          <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
              <pattern id={`tri-${icon}`} width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M0 24 L12 4 L24 24 Z" fill="none" stroke="white" strokeWidth=".6" />
              </pattern>
            </defs>
            <rect width="200" height="120" fill={`url(#tri-${icon})`} />
          </svg>
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        </>
      )}
      <div className="absolute bottom-3.5 left-3.5 grid h-11 w-11 place-items-center rounded-xl bg-brand-950/80 backdrop-blur-md ring-1 ring-white/25 shadow-md">
        <Icon className="h-5 w-5 text-sky-accent" />
      </div>
    </div>
  );
}

