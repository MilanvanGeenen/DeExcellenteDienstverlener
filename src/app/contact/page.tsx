import { ContactGegevens } from "@/components/ContactBlok";
import { ContactForm } from "@/components/ContactForm";
import { PaginaKop, SectieKop } from "@/components/Pagina";
import { Reveal } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/contact/",
  title: "Contact en kennismaking | de excellente dienstverlener",
  description:
    "Plan een vrijblijvende kennismaking. Bel ons op 06 48 78 18 09, mail ons of vul het formulier in: wij reageren binnen twee werkdagen. Gevestigd in Nuenen.",
});

export default function Contact() {
  return (
    <>
      <PaginaKop
        kruimels={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
        eyebrow="Contact"
        titel="Laten we kennismaken."
        lead="Een eerste gesprek is vrijblijvend en bedoeld om jouw vraagstuk te begrijpen, niet om meteen een traject te verkopen. Vul het formulier in of neem rechtstreeks contact met ons op."
      />

      <section className="section pt-0!" aria-labelledby="gegevens-kop">
        <div className="container contact-grid">
          <Reveal>
            <SectieKop eyebrow="Rechtstreeks" titel="Contactgegevens" id="gegevens-kop" />
            <p className="subtekst mt-6 leesbreedte">Bel of mail gerust. We reageren binnen twee werkdagen.</p>
            <ContactGegevens />
            <p className="mt-8 text-[0.975rem] subtekst">
              Gevestigd in {site.city}, {site.region}. Actief in Eindhoven, Brabant en de rest van Nederland.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="formulier-kaart">
            <h2 className="h3">Stuur ons een bericht</h2>
            <div className="mt-6">
              <ContactForm idPrefix="contact" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
