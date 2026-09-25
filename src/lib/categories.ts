// Client-safe (no fs) — shared by server pages and client components.
export const categories = [
  { slug: "wood-adhesives", name: "Wood Adhesives", desc: "D1–D4 classes, laminate pasting, application and troubleshooting." },
  { slug: "paint-emulsions", name: "Paint Emulsions", desc: "Binder chemistry, MFFT, Tg, PVC and paint formulation." },
  { slug: "construction-chemicals", name: "Construction Chemicals", desc: "Polymer-modified mortar, waterproofing and tile adhesive." },
  { slug: "textiles", name: "Textile Binders", desc: "Pigment printing, fastness and compliance." },
  { slug: "coir-natural-fibre", name: "Coir & Natural Fibre", desc: "Latex vs emulsion, mats, sheets and geotextiles." },
  { slug: "buying-guides", name: "Buying Guides", desc: "Supplier evaluation, sourcing and storage." },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;
