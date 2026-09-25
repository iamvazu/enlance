import { Breadcrumbs } from "@/components/Breadcrumbs";
import { company } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Privacy Policy", description: `How ${company.legalName} collects, uses and protects your information.`, path: "/privacy-policy" });

// TODO(legal): have this reviewed by counsel for compliance with India's Digital Personal Data Protection Act, 2023.
export default function Privacy() {
  return (
    <section className="container max-w-3xl py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <h1 className="h-section mt-5">Privacy Policy</h1>
      <div className="prose-enlace mt-8">
        <p>This policy explains how {company.legalName} (&ldquo;Enlace&rdquo;, &ldquo;we&rdquo;) handles personal information submitted through this website.</p>
        <h2>Information we collect</h2>
        <p>When you submit an enquiry, sample request, dealer application or download request, we collect the details you provide — such as your name, company, phone number, email address, city and product interest — along with basic technical data (page visited, referring source and campaign parameters).</p>
        <h2>How we use it</h2>
        <ul>
          <li>To respond to your enquiry, send samples, quotations and technical documents.</li>
          <li>To contact you by phone, WhatsApp or email about your request.</li>
          <li>To understand which pages and campaigns are useful, and improve the website.</li>
        </ul>
        <h2>Sharing</h2>
        <p>We do not sell your personal information. We may share it with service providers who help us operate the website, CRM and communications, under confidentiality obligations, or where required by law.</p>
        <h2>Analytics & cookies</h2>
        <p>We may use Google Analytics to understand website usage. You can block cookies in your browser settings.</p>
        <h2>Your choices</h2>
        <p>You may request access to, correction of, or deletion of your personal information by emailing <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        <h2>Contact</h2>
        <p>{company.legalName}, {company.address.full}. Email: {company.email}. Phone: {company.phone}.</p>
      </div>
    </section>
  );
}
