import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdhesiveSelector } from "@/components/AdhesiveSelector";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Wood Adhesive Selector — Which Wood Glue Should I Use? (D1, D2 or D3)",
  description: "Which wood adhesive is right for your job? Answer three quick questions to choose between D1, D2 and D3 synthetic resin wood glue for kitchens, laminates, veneer and furniture.",
  path: "/tools/adhesive-selector",
  keywords: ["which wood glue to use", "best wood adhesive for kitchen", "D1 vs D2 vs D3", "wood adhesive selector", "choose wood glue"],
});

export default function Page() {
  return (
    <section className="container max-w-3xl py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Tools", path: "/tools" }, { name: "Adhesive Selector", path: "/tools/adhesive-selector" }]} />
      <h1 className="h-section mt-5">Which wood adhesive should I use?</h1>
      <p className="lead mt-3">Three questions. Thirty seconds. The right Enfixx grade for your job — based on EN 204 durability classes.</p>
      <div className="mt-8"><AdhesiveSelector /></div>
      <p className="mt-8 text-[15px] text-ink-soft">
        Want the theory? Read <Link href="/learning-center/d1-d2-d3-d4-wood-adhesive-classes-en-204-explained" className="font-semibold text-brand-600 underline">D1, D2, D3 & D4 wood adhesive classes explained</Link>.
      </p>
    </section>
  );
}
