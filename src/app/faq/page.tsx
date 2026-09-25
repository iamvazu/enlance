import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/lib/products";
import { faqSchema, pageMeta } from "@/lib/seo";
import { company } from "@/lib/site";

export const metadata = pageMeta({
  title: "FAQs — Enfixx Wood Adhesives, Acrylic Emulsions, Samples, Dealers & Delivery",
  description: "Answers to common questions about Enfixx D1/D2/D3 wood adhesives, acrylic emulsions, construction resins, textile binders, samples, pricing, dealership and delivery.",
  path: "/faq",
  keywords: ["wood adhesive FAQ", "D3 adhesive questions", "acrylic emulsion FAQ", "Enfixx FAQ"],
});

const general = [
  { q: "How can I get a price quote?", a: "Use the Request a Sample form, call us or WhatsApp us with the product, quantity and delivery location. We respond within one working day." },
  { q: "What areas do you deliver to?", a: "We supply across Kerala, Tamil Nadu, Karnataka and the rest of India. Freight is quoted based on quantity and destination." },
  { q: "Are your products water-based?", a: "Yes. Our emulsions, resins and Enfixx adhesives are water-based, solvent-free systems." },
  { q: "Where is your factory?", a: `Our plant is at ${company.address.full}.` },
  { q: "Can you develop a custom product for us?", a: "Yes. Our R&D team develops custom emulsion grades and additive packages for specific performance targets." },
];

export default function FaqPage() {
  const groups = [{ title: "General", faqs: general }, ...products.filter((p) => p.faqs.length).map((p) => ({ title: p.name, faqs: p.faqs }))];
  return (
    <section className="container max-w-4xl py-10 sm:py-16">
      <JsonLd data={faqSchema(groups.flatMap((g) => g.faqs))} />
      <Breadcrumbs items={[{ name: "FAQs", path: "/faq" }]} />
      <h1 className="h-section mt-5">Frequently asked questions</h1>
      <p className="lead mt-3">Can't find your answer? <Link href="/contact" className="font-semibold text-brand-600 underline">Ask our team</Link>.</p>
      {groups.map((g) => (
        <div key={g.title} className="mt-12">
          <h2 className="text-2xl font-semibold">{g.title}</h2>
          <div className="mt-5"><FaqList faqs={g.faqs} schema={false} /></div>
        </div>
      ))}
    </section>
  );
}
