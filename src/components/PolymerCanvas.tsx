"use client";
import { useEffect, useRef } from "react";

/**
 * Animated "polymer network" — particles (monomers) drift and link into chains when close.
 * Pure canvas, ~2KB, pauses when off-screen, respects reduced motion.
 */
export function PolymerCanvas({ className = "", density = 1 }: { className?: string; density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let pts: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, (w * h) / 14000) * density);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 1.2,
        c: Math.random() > 0.8 ? "0,183,235" : "150,200,240",
      }));
    };

    const LINK = 120;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(120,190,240,${(1 - d / LINK) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(${p.c},0.9)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (visible && !reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    const ro = new ResizeObserver(() => { resize(); if (reduce) draw(); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [density]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
