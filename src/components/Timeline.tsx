import type { ExperienceItem } from "@/lib/site";
import { FadeIn } from "@/components/FadeIn";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative ml-1.5 border-l border-line">
      {items.map((item, i) => (
        <li key={`${item.period}-${item.role}`} className="relative pb-12 pl-10 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute -left-[7px] top-2 size-3.5 rounded-full ring-[5px] ring-cream ${
              i === 0 ? "bg-forest" : "bg-sand-deep"
            }`}
          />
          <FadeIn delay={i * 0.08}>
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-forest">{item.period}</p>
            <h3 className="mt-3 text-h3">
              {item.role} <span className="italic">‘{item.organisation}’</span>
            </h3>
            {item.location && <p className="mt-2 text-ink-soft">{item.location}</p>}
            {item.description && <p className="mt-4 max-w-prose text-ink-soft">{item.description}</p>}
          </FadeIn>
        </li>
      ))}
    </ol>
  );
}
