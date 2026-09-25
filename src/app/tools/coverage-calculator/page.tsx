import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoverageCalculator } from "@/components/CoverageCalculator";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Wood Adhesive Coverage Calculator — How Much Glue for Laminate & Plywood?",
  description: "Calculate how much wood adhesive you need for laminate pasting, veneer and plywood jobs. Enter 8×4 sheets, sq ft or m² and get an instant kg estimate.",
  path: "/tools/coverage-calculator",
  keywords: ["adhesive coverage calculator", "how much glue for laminate", "wood glue per sheet", "adhesive per square feet", "laminate adhesive quantity"],
});

export default function Page() {
  return (
    <section className="container max-w-5xl py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Tools", path: "/tools" }, { name: "Coverage Calculator", path: "/tools/coverage-calculator" }]} />
      <h1 className="h-section mt-5">How much wood adhesive do I need?</h1>
      <p className="lead mt-3 max-w-2xl">Estimate adhesive quantity for laminate pasting, veneer lamination and joinery — by 8×4 sheet, square feet or square metre.</p>
      <div className="mt-8"><CoverageCalculator /></div>
      <p className="mt-8 text-[15px] text-ink-soft">
        Getting bubbles or edge lift? Read <Link href="/learning-center/laminate-pasting-adhesive-hot-press-cold-press" className="font-semibold text-brand-600 underline">the laminate pasting guide</Link>.
      </p>
    </section>
  );
}
