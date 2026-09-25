"use client";
import { motion, useReducedMotion } from "framer-motion";

// The Enlace diamond, rebuilt as four SVG triangles that assemble on load.
const shards = [
  { d: "M4 44 L50 5 L42 46 Z", fill: "#0067ac", from: { x: -40, y: -30, rotate: -25 } },
  { d: "M47 46 L55 3 L97 46 Z", fill: "#0067ac", from: { x: 40, y: -40, rotate: 20 } },
  { d: "M3 53 L40 53 L62 95 Z", fill: "#0067ac", from: { x: -45, y: 40, rotate: 18 } },
  { d: "M56 58 L97 58 L76 90 Z", fill: "#00b7eb", from: { x: 45, y: 35, rotate: -30 } },
];

export function LogoMarkAnimated({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {shards.map((s, i) => (
        <motion.path
          key={i}
          d={s.d}
          fill={s.fill}
          stroke={s.fill}
          strokeWidth={3}
          strokeLinejoin="round"
          initial={reduce ? false : { opacity: 0, ...s.from }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.15 + i * 0.12 }}
          style={{ transformOrigin: "50% 50%" }}
        />
      ))}
    </svg>
  );
}
