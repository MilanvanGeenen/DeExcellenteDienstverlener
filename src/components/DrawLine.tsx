"use client";

import { motion } from "framer-motion";
import { softEase } from "@/components/FadeIn";

export function DrawLine({ axis, className, delay = 0 }: { axis: "x" | "y"; className: string; delay?: number }) {
  const scale = axis === "x" ? "scaleX" : "scaleY";
  return (
    <motion.span
      aria-hidden="true"
      className={`${axis === "x" ? "origin-left" : "origin-top"} ${className}`}
      initial={{ [scale]: 0 }}
      whileInView={{ [scale]: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.2, ease: softEase, delay }}
    />
  );
}
