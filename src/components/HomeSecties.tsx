import { FotoPlek } from "@/components/FotoPlek";
import { PijlLink, Reveal } from "@/components/ui";
import { pillars, services, workSteps } from "@/lib/site";

export function WerkwijzeTijdlijn() {
  return (
    <Reveal as="div" className="tijdlijn">
      <span className="tijdlijn-spoor" aria-hidden="true" />
      <span className="tijdlijn-lijn" aria-hidden="true" />
      <ol className="tijdlijn-stappen">
        {workSteps.map((step, i) => (
          <li key={step.title} className="tijdlijn-stap">
            <span className="tijdlijn-punt" aria-hidden="true">
              {i + 1}
            </span>
            <h3>
              <span className="sr-only">Stap {i + 1}: </span>
              {step.title}
            </h3>
            <p className="subtekst">{step.short}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export function DienstKaarten({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Kop = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="dienst-grid">
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={i * 0.08} className="dienst-kaart">
          <div className="dienst-beeld">
            <FotoPlek label={s.title} />
          </div>
          <div className="dienst-inhoud">
            <span className="dienst-nummer" aria-hidden="true">
              0{i + 1}
            </span>
            <Kop className="h3">{s.title}</Kop>
            <p className="subtekst">{s.summary}</p>
            <PijlLink href={s.href}>{s.linkLabel}</PijlLink>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

export function PijlerGrid({ className = "" }: { className?: string }) {
  return (
    <ol className={`pijler-grid ${className}`}>
      {pillars.map((p, i) => (
        <Reveal as="li" key={p.title} delay={i * 0.06} className="pijler">
          <span className="pijler-nummer" aria-hidden="true">
            0{i + 1}
          </span>
          <h3>{p.title}</h3>
          <p className="subtekst">{p.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
