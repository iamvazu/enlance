import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
  images: { formats: ["image/avif", "image/webp"] },
  // 301s from the old WordPress URLs so existing Google rankings & backlinks carry over
  async redirects() {
    return [
      { source: "/products/enfixx", destination: "/products/enfixx-wood-adhesives", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/faqs", destination: "/faq", permanent: true },
      { source: "/paint-coatings-emulsions", destination: "/products/paint-coatings-emulsions", permanent: true },
      { source: "/construction-resins", destination: "/products/construction-resins", permanent: true },
      { source: "/additives", destination: "/products/additives", permanent: true },
      { source: "/enfixx-adhesives", destination: "/products/enfixx-wood-adhesives", permanent: true },
      { source: "/enfixx-sd", destination: "/products/enfixx/sd", permanent: true },
      { source: "/enfixx-hd", destination: "/products/enfixx/hd", permanent: true },
      { source: "/enfixx-marino", destination: "/products/enfixx/marino", permanent: true },
      { source: "/emulsion-for-coir-related-industries", destination: "/products/coir-emulsions", permanent: true },
      { source: "/textile-binders-emulsions", destination: "/products/textile-binders", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};
export default nextConfig;
