import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Enlace Polymers",
    short_name: "Enlace",
    description: "Water-based polymer emulsions, resins & Enfixx wood adhesives",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0067ac",
    icons: [
      { src: "/images/enlace-mark.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
