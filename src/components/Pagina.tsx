import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { KennismakingKnop, PijlLink, Reveal } from "@/components/ui";
import { breadcrumbJsonLd, faqJsonLd, type Crumb } from "@/lib/seo";
import type { Faq } from "@/lib/site";

export function PaginaKop({
  kruimels,
  eyebrow,
  titel,
  lead,
}: {
  kruimels: Crumb[];
  eyebrow: string;
  titel: string;
  lead: string;
}) {
  return (
    <section className="pagina-kop">
      <div className="pagina-kop-gloed" aria-hidden="true" />
      <div className="container">
        <nav aria-label="Kruimelpad" className="kruimelpad">
          <ol>
            {kruimels.map((k, i) =>
              i < kruimels.length - 1 ? (
                <li key={k.path}>
                  <Link href={k.path}>{k.name}</Link>
                </li>
              ) : (
                <li key={k.path} aria-current="page">
                  {k.name}
                </li>
              ),
            )}
          </ol>
        </nav>
        <div className="mt-10 max-w-[52rem] md:mt-14">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1 mt-5">{titel}</h1>
          <p className="lead mt-6 leesbreedte">{lead}</p>
        </div>
      </div>
      <JsonLd data={breadcrumbJsonLd(kruimels)} />
    </section>
  );
}

export function SectieKop({ eyebrow, titel, id }: { eyebrow?: string; titel: string; id?: string }) {
  return (
    <div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className={`h2 ${eyebrow ? "mt-4" : ""}`}>
        {titel}
      </h2>
    </div>
  );
}

export function TekstSectie({
  eyebrow,
  titel,
  id,
  achtergrond = "licht",
  lijn = false,
  children,
}: {
  eyebrow: string;
  titel: string;
  id: string;
  achtergrond?: "licht" | "turkoois";
  lijn?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`section ${achtergrond === "turkoois" ? "bg-licht-turkoois" : ""} ${lijn ? "pt-0!" : ""}`} aria-labelledby={id}>
      <div className="container">
        {lijn && <div className="mb-16 h-px bg-salie/50 md:mb-24" aria-hidden="true" />}
        <div className="twee-kolom">
          <Reveal>
            <SectieKop eyebrow={eyebrow} titel={titel} id={id} />
          </Reveal>
          <Reveal delay={0.08} className="prose-blok">
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function BlokLijst({ items, kolommen = 1 }: { items: readonly string[]; kolommen?: 1 | 2 | 3 }) {
  return (
    <ul className="blok-lijst" data-kolommen={kolommen}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function StapGrid({ titel, eyebrow, stappen }: { titel: string; eyebrow: string; stappen: { titel: string; tekst: string }[] }) {
  return (
    <section className="section bg-donker op-donker">
      <div className="container">
        <Reveal>
          <SectieKop eyebrow={eyebrow} titel={titel} />
        </Reveal>
        <ol className="stap-grid" data-aantal={stappen.length}>
          {stappen.map((s, i) => (
            <Reveal as="li" key={s.titel} delay={i * 0.05} className="stap">
              <span className="stap-nummer" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{s.titel}</h3>
              <p>{s.tekst}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FaqLijst({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="section pt-0!" aria-labelledby="faq-kop">
      <div className="container">
        <div className="mb-16 h-px bg-salie/50 md:mb-24" aria-hidden="true" />
      </div>
      <div className="container twee-kolom">
        <Reveal>
          <SectieKop eyebrow="Vragen" titel="Veelgestelde vragen" id="faq-kop" />
        </Reveal>
        <Reveal className="faq">
          {faqs.map((f) => (
            <details key={f.question}>
              <summary>
                <h3>{f.question}</h3>
                <span className="faq-icoon" aria-hidden="true" />
              </summary>
              <p className="subtekst">{f.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
      <JsonLd data={faqJsonLd(faqs)} />
    </section>
  );
}

export type VerderItem = { eyebrow: string; titel: string; tekst: string; href: string; linkTekst: string };

export function VerderLezen({ items, achtergrond = "licht" }: { items: VerderItem[]; achtergrond?: "licht" | "turkoois" }) {
  return (
    <section className={`section ${achtergrond === "turkoois" ? "bg-licht-turkoois" : "pt-0!"}`} aria-labelledby="verder-kop">
      <div className="container">
        {achtergrond === "licht" && <div className="mb-16 h-px bg-salie/50 md:mb-24" aria-hidden="true" />}
        <h2 id="verder-kop" className="sr-only">
          Verder lezen
        </h2>
        <ul className="verder-grid" style={{ "--kolommen": items.length } as React.CSSProperties}>
          {items.map((item, i) => (
            <Reveal as="li" key={item.href} delay={i * 0.06} className="flex">
              <div className="verder-kaart flex-1">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3 className="h3">{item.titel}</h3>
                <p className="subtekst">{item.tekst}</p>
                <PijlLink href={item.href}>{item.linkTekst}</PijlLink>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function KennismakingBand({ titel, tekst }: { titel: string; tekst: string }) {
  return (
    <section className="section bg-licht-turkoois" aria-labelledby="band-kop">
      <div className="container">
        <Reveal className="cta-band">
          <div>
            <h2 id="band-kop" className="h2">
              {titel}
            </h2>
            <p className="lead mt-5 leesbreedte">{tekst}</p>
          </div>
          <div>
            <KennismakingKnop />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
