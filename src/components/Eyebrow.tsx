type EyebrowProps = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

export function Eyebrow({ children, light = false, className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] ${
        light ? "text-cream/70" : "text-forest"
      } ${className}`}
    >
      <span aria-hidden="true" className={`h-px w-8 ${light ? "bg-cream/40" : "bg-forest/40"}`} />
      {children}
    </p>
  );
}
