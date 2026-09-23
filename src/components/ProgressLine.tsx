"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressLine({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <span aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px bg-line md:left-6" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute bottom-0 left-5 top-0 w-px origin-top bg-forest md:left-6"
      />
      {children}
    </div>
  );
}
