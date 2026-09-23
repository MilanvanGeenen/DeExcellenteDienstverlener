type LevelsGraphicProps = {
  active: 0 | 1 | 2;
  className?: string;
};

const teamDots = Array.from({ length: 6 }, (_, i) => {
  const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
  return { cx: 100 + Math.cos(angle) * 60, cy: 100 + Math.sin(angle) * 60 };
});

const muted = "rgba(43, 42, 40, 0.18)";

// Drie concentrische ringen: organisatie (buiten), team (midden), individu (kern).
export function LevelsGraphic({ active, className }: LevelsGraphicProps) {
  const stroke = (level: number) => (level === active ? "var(--color-forest)" : muted);
  const width = (level: number) => (level === active ? 1.75 : 1);

  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <circle
        cx="100"
        cy="100"
        r="92"
        fill={active === 0 ? "var(--color-forest-soft)" : "transparent"}
        stroke={stroke(0)}
        strokeWidth={width(0)}
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="100"
        cy="100"
        r="60"
        fill={active === 1 ? "var(--color-forest-soft)" : "var(--color-cream)"}
        stroke={stroke(1)}
        strokeWidth={width(1)}
        vectorEffect="non-scaling-stroke"
      />
      {teamDots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="7" fill={active === 1 ? "var(--color-forest)" : muted} />
      ))}
      <circle
        cx="100"
        cy="100"
        r="26"
        fill={active === 2 ? "var(--color-forest)" : "var(--color-cream)"}
        stroke={stroke(2)}
        strokeWidth={width(2)}
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="100" cy="100" r="7" fill={active === 2 ? "var(--color-cream)" : muted} />
    </svg>
  );
}
