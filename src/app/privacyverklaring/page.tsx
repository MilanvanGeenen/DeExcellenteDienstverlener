import { PaginaKop } from "@/components/Pagina";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { EmailAdres } from "@/components/ui";

export const metadata = pageMetadata({
  path: "/privacyverklaring/",
  title: "Privacyverklaring | de excellente dienstverlener",
  description:
    "Lees hoe wij omgaan met de gegevens die je via onze website en het contactformulier met ons deelt: welke gegevens, waarvoor en wat je rechten zijn.",
});

// Concepttekst: laat deze voor publicatie controleren op de eigen situatie.
export default function Privacyverklaring() {
  return (
    <>
      <PaginaKop
        kruimels={[
          { name: "Home", path: "/" },
          { name: "Privacyverklaring", path: "/privacyverklaring/" },
        ]}
        eyebrow="Privacy"
        titel="Privacyverklaring"
        lead="Wij gaan zorgvuldig om met de gegevens die je met ons deelt. Hieronder lees je welke gegevens dat zijn en wat we ermee doen."
      />

      <section className="section pt-0!">
        <div className="container">
          <div className="prose-blok leesbreedte">
            <h2 className="h3">Wie zijn wij</h2>
            <p>
              {site.name} is gevestigd in {site.city}, {site.region}. Je bereikt ons via{" "}
              <a href={`mailto:${site.email}`} className="text-turkoois-tekst underline underline-offset-4">
                <EmailAdres />
              </a>{" "}
              of {site.phone}.
            </p>

            <h2 className="h3">Welke gegevens we verwerken</h2>
            <p>
              Als je het contactformulier invult, ontvangen we de gegevens die je zelf opgeeft: je naam, organisatie,
              e-mailadres, telefoonnummer en je bericht. We gebruiken deze gegevens alleen om contact met je op te nemen
              over je vraag.
            </p>

            <h2 className="h3">Hoe het formulier wordt verstuurd</h2>
            <p>
              Berichten via het contactformulier worden verstuurd met de dienst FormSubmit, die ze doorstuurt naar onze
              mailbox. Bel of mail je ons liever rechtstreeks, dan kan dat natuurlijk ook.
            </p>

            <h2 className="h3">Hoe lang we gegevens bewaren</h2>
            <p>
              We bewaren je gegevens niet langer dan nodig is om je vraag af te handelen, of zolang er een
              samenwerking loopt.
            </p>

            <h2 className="h3">Cookies</h2>
            <p>Deze website gebruikt geen tracking- of advertentiecookies.</p>

            <h2 className="h3">Jouw rechten</h2>
            <p>
              Je kunt ons altijd vragen welke gegevens we van je hebben, en vragen om ze aan te passen of te
              verwijderen. Stuur daarvoor een mail naar{" "}
              <a href={`mailto:${site.email}`} className="text-turkoois-tekst underline underline-offset-4">
                <EmailAdres />
              </a>
              . Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit
              Persoonsgegevens.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
