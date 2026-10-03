import Link from "next/link";
import { site } from "@/lib/site";

// Lang e-mailadres: als het moet afbreken, dan netjes na de @.
export function EmailAdres() {
  const [naam, domein] = site.email.split("@");
  return (
    <>
      {naam}@<wbr />
      {domein}
    </>
  );
}

export function Pijl() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="pijl"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function KennismakingKnop({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/contact/" className={`btn btn-primair ${compact ? "btn-compact" : ""} ${className}`}>
      Plan een kennismaking
    </Link>
  );
}

export function PijlLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`pijl-link ${className}`}>
      {children}
      <Pijl />
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  return (
    <Tag className={`reveal ${className}`} style={delay ? ({ "--vertraging": `${delay}s` } as React.CSSProperties) : undefined}>
      {children}
    </Tag>
  );
}
