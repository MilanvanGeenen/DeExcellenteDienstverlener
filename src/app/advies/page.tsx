import { JsonLd } from "@/components/JsonLd";
import { BlokLijst, FaqLijst, KennismakingBand, PaginaKop, StapGrid, TekstSectie, VerderLezen } from "@/components/Pagina";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const beschrijving =
  "Advies over klantgerichtheid, medewerkerstevredenheid en werkprocessen. Wij luisteren, analyseren en adviseren samen met jouw organisatie.";

export const metadata = pageMetadata({
  path: "/advies/",
  title: "Advies over klantgerichtheid | de excellente dienstverlener",
  description: beschrijving,
});

const faqs = [
  {
    question: "Blijven jullie ook betrokken bij de uitvoering?",
    answer:
      "Ja, dat kan. We denken ook mee bij de uitvoering: we begeleiden het implementatietraject of trainen de betrokken medewerkers.",
  },
  {
    question: "Is dit alleen voor grote organisaties?",
    answer:
      "Nee. We werken met organisaties van uiteenlopende omvang. De aanpak schalen we altijd naar wat past bij de organisatie en het vraagstuk.",
  },
  {
    question: "Hoe snel kunnen jullie starten?",
    answer:
      "Dat bespreken we in het eerste gesprek. Bij urgente vraagstukken proberen we altijd op korte termijn een eerste stap te zetten.",
  },
  {
    question: "Leveren jullie ook een schriftelijk advies of rapport op?",
    answer:
      "Waar dat waarde toevoegt wel, maar nooit als doel op zich. Belangrijker dan een dik rapport vinden we een aanpak die de organisatie verder helpt.",
  },
];

export default function Advies() {
  return (
    <>
      <PaginaKop
        kruimels={[
          { name: "Home", path: "/" },
          { name: "Diensten", path: "/diensten/" },
          { name: "Advies", path: "/advies/" },
        ]}
        eyebrow="Advies"
        titel="Van vraagstuk naar een aanpak die werkt."
        lead="Sommige vraagstukken zijn groter dan één team of één vaardigheid. Dan kijken we verder: naar de organisatie als geheel, de processen en de manier van samenwerken."
      />

      <TekstSectie eyebrow="Onderwerpen" titel="Waar organisaties ons voor vragen." id="onderwerpen">
        <BlokLijst
          kolommen={2}
          items={[
            "Klantgerichtheid",
            "Medewerkerstevredenheid",
            "Samenwerking tussen teams en afdelingen",
            "Werkprocessen",
            "Effectiviteit",
            "Organisatieontwikkeling",
            "Verbeteren van dienstverlening",
            "Cultuur en gedrag",
            "Slimmer samenwerken",
          ]}
        />
      </TekstSectie>

      <TekstSectie eyebrow="Uitgangspunt" titel="Samen, niet vanaf de zijlijn." id="uitgangspunt" achtergrond="turkoois">
        <p className="lead">Advies betekent bij ons niet dat we van buitenaf vertellen hoe het moet.</p>
        <p className="subtekst">
          Wij kennen de context niet zo goed als de mensen die er dagelijks werken, en zij kennen de valkuilen van een
          aanpak niet altijd zo goed als wij. Samen komen we tot een advies dat doordacht én uitvoerbaar is.
        </p>
      </TekstSectie>

      <StapGrid
        eyebrow="Proces"
        titel="Hoe een adviestraject verloopt."
        stappen={[
          { titel: "Luisteren", tekst: "We beginnen met goed luisteren naar wat er speelt, vanuit verschillende invalshoeken binnen de organisatie." },
          { titel: "Analyseren", tekst: "We brengen de situatie, de oorzaken en de mogelijke aanpakken helder in kaart." },
          { titel: "Adviseren", tekst: "We komen met een concreet, onderbouwd advies, afgestemd op wat haalbaar is binnen de organisatie." },
          { titel: "Uitvoeren", tekst: "Waar gewenst blijven we betrokken bij de uitvoering, zodat het advies in de praktijk landt." },
          { titel: "Evalueren", tekst: "We toetsen het resultaat en stellen bij waar nodig, zodat de verbetering doorgaat." },
        ]}
      />

      <TekstSectie eyebrow="Voor wie" titel="Voor wie is advies bedoeld?" id="voor-wie">
        <p className="lead">Ons advieswerk is niet voorbehouden aan grote organisaties.</p>
        <p className="subtekst">
          We werken met mkb-bedrijven, non-profitorganisaties en teams binnen grotere organisaties die behoefte hebben
          aan een frisse, onafhankelijke blik. En aan een aanpak die in de praktijk wordt uitgevoerd, in plaats van een rapport dat in een la verdwijnt.
        </p>
      </TekstSectie>

      <FaqLijst faqs={faqs} />

      <VerderLezen
        items={[
          {
            eyebrow: "Ons verhaal",
            titel: "Over ons",
            tekst: "Benieuwd waar de excellente dienstverlener voor staat, en waarom?",
            href: "/over-ons/",
            linkTekst: "Lees ons verhaal",
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
        titel="Speelt er een vraagstuk in jouw organisatie?"
        tekst="In een vrijblijvend gesprek verkennen we samen waar de meeste winst te behalen valt."
      />

      <JsonLd data={serviceJsonLd({ name: "Advies", description: beschrijving, path: "/advies/" })} />
    </>
  );
}
