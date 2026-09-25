import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/sora";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { orgSchema, websiteSchema } from "@/lib/seo";
import { SITE_URL, company } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Enlace Polymers | Acrylic Emulsion, Wood Adhesive & Polymer Resin Manufacturer in Kerala",
    template: "%s | Enlace Polymers",
  },
  description: company.shortPitch,
  applicationName: company.name,
  authors: [{ name: company.legalName }],
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  formatDetection: { telephone: true },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: "#0067ac",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <JsonLd data={[orgSchema(), websiteSchema()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <Analytics />
      </body>
    </html>
  );
}
