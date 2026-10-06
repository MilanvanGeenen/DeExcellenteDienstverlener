"use client";

import { useEffect } from "react";

// Zet de muispositie als --mx/--my op de dienstkaart onder de muis, voor het lichtvlak in de CSS.
// Alleen met een muis, en hooguit één update per frame.
export function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    let laatste: PointerEvent | null = null;

    const update = () => {
      frame = 0;
      const e = laatste;
      const kaart = e && (e.target as Element | null)?.closest?.<HTMLElement>(".dienst-kaart");
      if (!e || !kaart) return;
      const r = kaart.getBoundingClientRect();
      kaart.style.setProperty("--mx", `${e.clientX - r.left}px`);
      kaart.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      laatste = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
