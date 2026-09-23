import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "outlineLight";

const variants: Record<Variant, string> = {
  primary: "bg-terracotta text-cream hover:bg-terracotta-deep",
  secondary: "bg-forest text-cream hover:bg-forest-deep",
  outline: "border border-ink/20 text-ink hover:border-forest hover:bg-forest hover:text-cream",
  outlineLight: "border border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-forest",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return [
    "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5",
    "text-[0.975rem] font-medium tracking-[0.01em]",
    "transition-[background-color,color,border-color,transform] duration-300 ease-soft",
    "hover:scale-[1.03] active:scale-[0.99] motion-reduce:transform-none",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className,
  ].join(" ");
}

export function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4 transition-transform duration-300 ease-soft group-hover:translate-x-1 motion-reduce:transform-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
};

export function ButtonLink({ href, children, variant = "primary", className, arrow = true, onClick }: ButtonLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={buttonClasses(variant, className)}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-medium text-forest underline decoration-forest/30 underline-offset-[6px] transition-colors duration-300 hover:decoration-forest"
    >
      {children}
      <Arrow />
    </Link>
  );
}
