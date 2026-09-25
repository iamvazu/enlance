import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", md: "1.5rem", lg: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        // Sampled directly from the Enlace logo
        brand: {
          50: "#eef6fc",
          100: "#d6eaf7",
          200: "#aed4ef",
          300: "#7ab8e3",
          400: "#3d93cf",
          500: "#0f78bd",
          600: "#0067ac", // logo primary blue
          700: "#00558f",
          800: "#064673",
          900: "#0b3a5e",
          950: "#06223a",
        },
        sky: { accent: "#00b7eb" }, // logo accent cyan
        ink: { DEFAULT: "#0f1720", soft: "#3b4654", mute: "#667085" },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        display: ['"Sora Variable"', '"Inter Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px -8px rgba(6,34,58,.12)",
        lift: "0 2px 4px rgba(16,24,40,.06), 0 24px 48px -12px rgba(6,34,58,.25)",
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
