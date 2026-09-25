import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Request a Free Sample & Quote — Acrylic Emulsions, Resins & Enfixx Wood Adhesive",
  description: "Request a free sample and price quote for Enlace acrylic emulsions, construction resins, textile binders, coir emulsions or Enfixx wood adhesives. Samples ship with TDS.",
  path: "/request-sample",
  keywords: ["free sample acrylic emulsion", "wood adhesive sample", "emulsion price quote", "Enfixx trial pack"],
});

export default async function RequestSample({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product = "" } = await searchParams;
  return (
    <section className="container py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Request a Sample", path: "/request-sample" }]} />
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h1 className="h-section">Request a free sample & quote</h1>
          <p className="lead mt-4">Tell us about your application. Our technical team will recommend the right grade, send a sample with its technical data sheet, and share pricing for your volume.</p>
          <ul className="mt-8 space-y-4">
            {["Grade recommendation from our R&D team", "Sample dispatched with TDS & MSDS", "Volume-based pricing, freight to your location", "Trial support on your line"].map((t) => (
              <li key={t} className="flex gap-3"><CheckCircle2 className="h-6 w-6 shrink-0 text-sky-accent" /> <span className="text-[16px]">{t}</span></li>
            ))}
          </ul>
        </div>
        <div className="card p-6 sm:p-8"><EnquiryForm type="sample" defaultProduct={product} /></div>
      </div>
    </section>
  );
}
