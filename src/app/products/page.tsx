import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { products } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Products — Acrylic Emulsions, Construction Resins, Textile Binders & Wood Adhesives",
  description:
    "Explore Enlace Polymers' water-based product range: styrene acrylic and pure acrylic emulsions, construction resins, specialty additives, textile binders, coir emulsions and Enfixx D1/D2/D3 wood adhesives.",
  path: "/products",
  keywords: ["polymer emulsion products", "acrylic emulsion range", "wood adhesive range", "construction chemical polymers", "textile binders India"],
});

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container py-10 sm:py-16">
          <Breadcrumbs items={[{ name: "Products", path: "/products" }]} />
          <h1 className="h-section mt-5 max-w-3xl">Water-based polymer emulsions, resins & wood adhesives</h1>
          <p className="lead mt-4 max-w-2xl">
            Our extensive product range is meticulously developed to address specific industry needs, ensuring optimal results for every application —
            all manufactured from in-house resin at KINFRA Petrochemical Park, Kochi.
          </p>
        </div>
      </section>
      <section className="container pb-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 0.06}><ProductCard p={p} /></Reveal>)}
        </div>
        <p className="mt-10 text-center text-ink-soft">
          Not sure which product fits? <Link href="/contact" className="font-semibold text-brand-600 underline">Ask our technical team</Link>.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
