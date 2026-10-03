import { ContactForm } from "@/components/ContactForm";
import { Reveal, EmailAdres } from "@/components/ui";
import { site } from "@/lib/site";

export function ContactGegevens() {
  return (
    <dl className="contact-gegevens">
      <div>
        <dt className="contact-label">Bel ons</dt>
        <dd>
          <a href={site.phoneHref} className="contact-waarde">
            {site.phone}
          </a>
        </dd>
      </div>
      <div>
        <dt className="contact-label">Mail ons</dt>
        <dd>
          <a href={`mailto:${site.email}`} className="contact-waarde">
            <EmailAdres />
          </a>
        </dd>
      </div>
    </dl>
  );
}

export function ContactBlok({
  titel,
  tekst,
  kopNiveau = 2,
  idPrefix,
}: {
  titel: string;
  tekst: string;
  kopNiveau?: 1 | 2;
  idPrefix: string;
}) {
  const Kop = kopNiveau === 1 ? "h1" : "h2";
  return (
    <div className="contact-grid">
      <Reveal>
        <p className="eyebrow">Kennismaken</p>
        <Kop id={`${idPrefix}-kop`} className={`${kopNiveau === 1 ? "h1" : "h2"} mt-4`}>
          {titel}
        </Kop>
        <p className="lead mt-6 leesbreedte">{tekst}</p>
        <ContactGegevens />
      </Reveal>
      <Reveal delay={0.1} className="formulier-kaart">
        <ContactForm idPrefix={idPrefix} />
      </Reveal>
    </div>
  );
}
