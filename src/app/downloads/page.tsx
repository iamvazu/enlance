import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DownloadsGate } from "@/components/DownloadsGate";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "TDS & MSDS Downloads — Technical Data Sheets for Emulsions & Enfixx Adhesives",
  description: "Download technical data sheets (TDS) and safety data sheets (MSDS/SDS) for Enlace acrylic emulsions, construction resins, textile binders, coir emulsions and Enfixx wood adhesives.",
  path: "/downloads",
  keywords: ["technical data sheet acrylic emulsion", "wood adhesive TDS", "MSDS synthetic resin adhesive", "Enfixx TDS"],
});

export default function Downloads() {
  return (
    <section className="container py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Downloads", path: "/downloads" }]} />
      <h1 className="h-section mt-5">Technical data sheets & safety data sheets</h1>
      <p className="lead mt-3 max-w-2xl">Typical properties, application guidance, storage and safety information for every Enlace grade.</p>
      <div className="mt-10"><DownloadsGate /></div>
    </section>
  );
}
