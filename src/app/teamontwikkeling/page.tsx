import { JsonLd } from "@/components/JsonLd";
import { BlokLijst, FaqLijst, KennismakingBand, PaginaKop, StapGrid, TekstSectie, VerderLezen } from "@/components/Pagina";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const beschrijving =
  "Teamontwikkeling voor teams die vastlopen of verder willen: wij werken aan vertrouwen, eigenaarschap en samenwerking in teams. Plan een kennismaking.";

export const metadata = pageMetadata({
  path: "/teamontwikkeling/",
  title: "Teamontwikkeling in Brabant | de excellente dienstverlener",
  description: beschrijving,
});

const faqs = [
  {
    question: "Is dit hetzelfde als een teambuildingsdag?",
    answer:
      "Nee. Een teambuildingsdag kan onderdeel zijn van een traject. Teamontwikkeling richt zich op blijvende verandering in hoe een team samenwerkt.",
  },
  {
    question: "Hoe lang duurt een traject?",
    answer:
      "Dat verschilt per situatie. Sommige vraagstukken vragen om een kort en gericht traject van enkele sessies, andere om begeleiding over meerdere maanden. Dit bepalen we samen na de eerste kennismaking.",
  },
  {
    question: "Werken jullie met modellen of testen?",
    answer:
      "Waar het waarde toevoegt, gebruiken we bewezen modellen en inzichten. Een model is voor ons een hulpmiddel: we gebruiken alleen wat aansluit bij het vraagstuk.",
  },
  {
    question: "Kan dit naast de dagelijkse werkzaamheden?",
    answer:
      "Ja. De meeste trajecten worden zo vormgegeven dat ze passen binnen de bestaande agenda, met sessies die aansluiten op het werkritme van het team.",
  },
];

export default function Teamontwikkeling() {
  return (
    <>
      <PaginaKop
        kruimels={[
          { name: "Home", path: "/" },
          { name: "Diensten", path: "/diensten/" },
          { name: "Teamontwikkeling", path: "/teamontwikkeling/" },
        ]}
        eyebrow="Teamontwikkeling"
        titel="Een sterk team ontstaat niet vanzelf."
        lead="Sommige teams lopen soepel. Andere werken hard, maar blijven onder hun kunnen presteren, door onduidelijke rollen, gedoe onder de oppervlakte of het ontbreken van een gezamenlijke focus. Met teamontwikkeling brengen we daar verandering in."
      />

      <TekstSectie eyebrow="Herkenbaar" titel="Waar lopen teams vaak tegenaan?" id="knelpunten">
        <p className="subtekst">Elk team is anders. Deze knelpunten zien we vaak terugkomen:</p>
        <BlokLijst
          kolommen={2}
          items={[
            "Miscommunicatie en aannames die niet worden uitgesproken",
            "Gebrek aan onderling vertrouwen",
            "Onduidelijke rollen en verantwoordelijkheden",
            "Weinig eigenaarschap voor het gezamenlijke resultaat",
            "Terugkerende conflicten of onderhuidse spanning",
            "Weerstand tegen verandering",
            "Eilandjes binnen de organisatie",
            "Het ontbreken van een gezamenlijke focus",
          ]}
        />
      </TekstSectie>

      <TekstSectie eyebrow="Aanleiding" titel="Wanneer is teamontwikkeling relevant?" id="aanleiding" achtergrond="turkoois">
        <p className="lead">
          Ook teams die niet vastlopen hebben er baat bij. Bij groei, een nieuwe leidinggevende, een fusie van afdelingen of een verandertraject loont het om bewust te investeren in samenwerking in teams.
        </p>
        <BlokLijst
          items={[
            "Een team dat wordt samengevoegd of van samenstelling wisselt",
            "Een nieuwe leidinggevende of teamstructuur",
            "Aanhoudende spanningen die het werk beïnvloeden",
            "Groei die vraagt om andere samenwerkingsafspraken",
            "Klantgerichtheid die onder druk staat door interne frictie",
          ]}
        />
      </TekstSectie>

      <StapGrid
        eyebrow="Aanpak"
        titel="Hoe ziet een traject eruit?"
        stappen={[
          { titel: "Verkennen", tekst: "We starten met gesprekken over wat er speelt, vanuit meerdere perspectieven binnen het team." },
          { titel: "Analyseren", tekst: "We brengen patronen, dynamiek en knelpunten in kaart en zoeken uit waardoor ze ontstaan." },
          { titel: "Interventie op maat", tekst: "Daarna stellen we een aanpak samen: workshops, teamsessies, coaching on the job of een combinatie." },
          { titel: "Evalueren en verankeren", tekst: "We toetsen wat werkt en zorgen dat nieuwe afspraken en gedrag blijven, ook als wij er niet meer bij zijn." },
        ]}
      />

      <TekstSectie eyebrow="Resultaat" titel="Wat levert het op?" id="resultaat">
        <p className="subtekst">
          Het doel is een blijvende verbetering in hoe het team samenwerkt. Dit zijn de verschuivingen die we in de praktijk terugzien:
        </p>
        <ul className="resultaat-lijst">
          <li>Meer vertrouwen</li>
          <li>Meer eigenaarschap</li>
          <li>Betere samenwerking</li>
          <li>Meer klantgerichtheid</li>
        </ul>
      </TekstSectie>

      <TekstSectie eyebrow="Voor wie" titel="Voor wie is teamontwikkeling bedoeld?" id="voor-wie" lijn>
        <p className="lead">
          Voor uiteenlopende teams: van managementteams die strategische keuzes maken tot uitvoerende teams die dagelijks
          met klanten werken.
        </p>
        <p className="subtekst">
          We werken zowel met teams die vastlopen als met teams die goed functioneren maar naar een volgend niveau
          willen.
        </p>
      </TekstSectie>

      <FaqLijst faqs={faqs} />

      <VerderLezen
        items={[
          {
            eyebrow: "Volgende stap",
            titel: "Training & Coaching",
            tekst: "Wil je ook op individueel niveau werken aan vaardigheden en gedrag binnen het team?",
            href: "/training-coaching/",
            linkTekst: "Meer over training & coaching",
          },
          {
            eyebrow: "Onze methode",
            titel: "Onze werkwijze",
            tekst: "Benieuwd hoe we van vraagstuk naar resultaat komen, stap voor stap?",
            href: "/werkwijze/",
            linkTekst: "Bekijk onze werkwijze",
          },
        ]}
      />

      <KennismakingBand
        titel="Bespreek jouw teamvraagstuk."
        tekst="In een vrijblijvend gesprek denken we mee over wat er speelt en welke aanpak daarbij past."
      />

      <JsonLd data={serviceJsonLd({ name: "Teamontwikkeling", description: beschrijving, path: "/teamontwikkeling/" })} />
    </>
  );
}
