"use client";

import { useRef, useState } from "react";
import { Pijl, EmailAdres } from "@/components/ui";
import { site } from "@/lib/site";

type Velden = {
  naam: string;
  organisatie: string;
  email: string;
  telefoon: string;
  onderwerp: string;
  bericht: string;
};
type Veld = keyof Velden;
type Fouten = Partial<Record<Veld, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const verplicht: Veld[] = ["naam", "email", "bericht"];
const onderwerpen = ["Teamontwikkeling", "Training & Coaching", "Advies", "Iets anders"];

// Hetzelfde formulierdienst-adres als in het prototype (FormSubmit). De eerste inzending
// stuurt een activatiemail naar het ontvangstadres; die moet één keer worden bevestigd.
const VERZEND_URL = `https://formsubmit.co/ajax/${site.email}`;

function controleer(v: Velden): Fouten {
  const f: Fouten = {};
  if (!v.naam.trim()) f.naam = "Vul je naam in.";
  if (!v.email.trim()) f.email = "Vul je e-mailadres in.";
  else if (!EMAIL.test(v.email.trim())) f.email = "Dit e-mailadres lijkt niet te kloppen.";
  if (!v.bericht.trim()) f.bericht = "Vertel ons kort waar we je mee kunnen helpen.";
  return f;
}

function FoutIcoon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.75v3.75M8 11h.01" strokeLinecap="round" />
    </svg>
  );
}

export function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const [waarden, setWaarden] = useState<Velden>({
    naam: "",
    organisatie: "",
    email: "",
    telefoon: "",
    onderwerp: onderwerpen[0],
    bericht: "",
  });
  const [aangeraakt, setAangeraakt] = useState<Partial<Record<Veld, boolean>>>({});
  const [status, setStatus] = useState<"invullen" | "versturen" | "verzonden" | "fout">("invullen");
  const formRef = useRef<HTMLFormElement>(null);
  const bedanktRef = useRef<HTMLHeadingElement>(null);

  const fouten = controleer(waarden);
  const toonFout = (v: Veld) => (aangeraakt[v] ? fouten[v] : undefined);
  const id = (v: Veld) => `${idPrefix}-${v}`;

  const veldProps = (v: Veld) => ({
    id: id(v),
    name: v,
    value: waarden[v],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setWaarden((w) => ({ ...w, [v]: e.target.value })),
    onBlur: () => setAangeraakt((a) => ({ ...a, [v]: true })),
    "aria-invalid": toonFout(v) ? true : undefined,
    "aria-describedby": toonFout(v) ? `${id(v)}-fout` : undefined,
  });

  const foutTekst = (v: Veld) =>
    toonFout(v) && (
      <p id={`${id(v)}-fout`} className="veld-fout">
        <FoutIcoon />
        {toonFout(v)}
      </p>
    );

  async function verstuur(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAangeraakt({ naam: true, email: true, bericht: true });
    const eerste = verplicht.find((v) => fouten[v]);
    if (eerste) {
      formRef.current?.querySelector<HTMLElement>(`#${id(eerste)}`)?.focus();
      return;
    }

    const honing = new FormData(e.currentTarget).get("_honey");
    if (honing) return;

    setStatus("versturen");
    try {
      const res = await fetch(VERZEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Naam: waarden.naam.trim(),
          Organisatie: waarden.organisatie.trim(),
          "E-mail": waarden.email.trim(),
          Telefoon: waarden.telefoon.trim(),
          Onderwerp: waarden.onderwerp,
          Bericht: waarden.bericht.trim(),
          _subject: `Kennismaking via de website: ${waarden.naam.trim()}`,
          _replyto: waarden.email.trim(),
          _template: "table",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      if (!res.ok || String(data.success) !== "true") throw new Error("Versturen mislukt");
      setStatus("verzonden");
      requestAnimationFrame(() => bedanktRef.current?.focus());
    } catch {
      setStatus("fout");
    }
  }

  if (status === "verzonden") {
    return (
      <div className="bedankt" role="status">
        {/* De vijf sterren uit het logo: een excellente eerste stap. */}
        <span className="bedankt-sterren" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2Q13.2 10.8 22 12Q13.2 13.2 12 22Q10.8 13.2 2 12Q10.8 10.8 12 2Z" />
            </svg>
          ))}
        </span>
        <h2 ref={bedanktRef} tabIndex={-1} className="h3 outline-none">
          Bedankt voor je bericht.
        </h2>
        <p className="subtekst leesbreedte">
          We nemen binnen twee werkdagen contact met je op. Heb je haast? Bel ons gerust op{" "}
          <a href={site.phoneHref} className="font-semibold text-turkoois-tekst underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} className="formulier" noValidate onSubmit={verstuur}>
      <div className="formulier-rij">
        <div className="veld">
          <label htmlFor={id("naam")}>Naam</label>
          <input type="text" autoComplete="name" placeholder="Je naam" {...veldProps("naam")} />
          {foutTekst("naam")}
        </div>
        <div className="veld">
          <label htmlFor={id("organisatie")}>
            Organisatie <span className="optioneel">optioneel</span>
          </label>
          <input type="text" autoComplete="organization" placeholder="Je organisatie" {...veldProps("organisatie")} />
        </div>
      </div>

      <div className="formulier-rij">
        <div className="veld">
          <label htmlFor={id("email")}>E-mail</label>
          <input type="email" autoComplete="email" inputMode="email" placeholder="naam@organisatie.nl" {...veldProps("email")} />
          {foutTekst("email")}
        </div>
        <div className="veld">
          <label htmlFor={id("telefoon")}>
            Telefoon <span className="optioneel">optioneel</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="06 12345678" {...veldProps("telefoon")} />
        </div>
      </div>

      <div className="veld">
        <label htmlFor={id("onderwerp")}>Waar kunnen we je mee helpen?</label>
        <select {...veldProps("onderwerp")}>
          {onderwerpen.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="veld">
        <label htmlFor={id("bericht")}>Bericht</label>
        <textarea rows={5} placeholder="Vertel kort waar je tegenaan loopt of wat je zoekt." {...veldProps("bericht")} />
        {foutTekst("bericht")}
      </div>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {status === "fout" && (
        <p role="alert" className="formulier-melding" data-soort="fout">
          Het versturen is niet gelukt. Probeer het opnieuw, of mail ons via{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
            <EmailAdres />
          </a>
          .
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
        <button type="submit" className="btn btn-primair" disabled={status === "versturen"} aria-busy={status === "versturen"}>
          Plan een kennismaking
          {status === "versturen" ? <span className="btn-laden" aria-hidden="true" /> : <Pijl />}
        </button>
        <span className="sr-only" role="status">
          {status === "versturen" ? "We versturen je bericht." : ""}
        </span>
        <p className="text-[0.9rem] subtekst">Vrijblijvend. We reageren binnen twee werkdagen.</p>
      </div>
    </form>
  );
}
