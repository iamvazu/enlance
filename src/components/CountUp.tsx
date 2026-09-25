"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CountUp({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  // Render the final value on the server so crawlers and no-JS users never see "0"
  const [val, setVal] = useState(to);
  useEffect(() => {
    if (!inView) return;
    setVal(0);
    const c = animate(0, to, { duration, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
