import { JsonLd } from "@/components/JsonLd";
import { BlokLijst, FaqLijst, KennismakingBand, PaginaKop, SectieKop, StapGrid, TekstSectie, VerderLezen } from "@/components/Pagina";
import { Reveal } from "@/components/ui";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

const beschrijving =
  "Training en coaching op maat voor medewerkers en leidinggevenden: slimmer werken, klantgerichtheid, communicatie en feedback. Wij maken het passend.";

export const metadata = pageMetadata({
  path: "/training-coaching/",
  title: "Training en coaching op maat | de excellente dienstverlener",
  description: beschrijving,
});

const faqs = [
  {
    question: "Is dit ook geschikt voor één persoon, of alleen voor teams?",
    answer:
      "Beide. Coaching is per definitie individueel. Trainingen geven we zowel aan complete teams als aan groepen medewerkers uit verschillende afdelingen met een vergelijkbare ontwikkelvraag.",
  },
  {
    question: "Hoe bepalen jullie welke training nodig is?",
    answer:
      "Op basis van een intakegesprek waarin we de vraag, de context en het gewenste resultaat helder krijgen. Pas daarna stellen we een programma samen, nooit andersom.",
  },
  {
    question: "Wordt dit incompany gegeven?",
    answer:
      "Ja. Trainingen en coaching vinden plaats bij de organisatie zelf of op een externe locatie, afhankelijk van wat het beste past bij de groep en het onderwerp.",
  },
  {
    question: "Is één sessie genoeg, of is dit altijd een traject?",
    answer:
      "Dat hangt van de vraag af. Een gerichte vaardigheid kan in één of enkele bijeenkomsten worden opgepakt; duurzame gedragsverandering vraagt meestal om een traject met meerdere sessies en toepassing in de praktijk ertussen.",
  },
];

export default function TrainingCoaching() {
  return (
    <>
      <PaginaKop
        kruimels={[
          { name: "Home", path: "/" },
          { name: "Diensten", path: "/diensten/" },
          { name: "Training & Coaching", path: "/training-coaching/" },
        ]}
        eyebrow="Training & Coaching"
        titel="Ontwikkeling die niet stopt zodra de training voorbij is."
        lead="Een goede training geeft inzicht. Blijvende verandering ontstaat pas wanneer nieuw gedrag ook wordt toegepast, getoetst en bijgesteld in de dagelijkse praktijk."
      />

      <section className="section pt-0!" aria-labelledby="vormen">
        <div className="container">
          <Reveal>
            <SectieKop eyebrow="Twee vormen" titel="Training of coaching?" id="vormen" />
          </Reveal>
          <ul className="verder-grid mt-10">
            <Reveal as="li" className="verder-kaart">
              <h3 className="h3">Training</h3>
              <p className="subtekst">
                Praktische ontwikkeling van vaardigheden en gedrag, rond een concreet thema zoals effectiever
                communiceren of prioriteiten stellen. Je oefent met herkenbare situaties uit je eigen praktijk en gaat
                naar huis met direct toepasbare handvatten.
              </p>
            </Reveal>
            <Reveal as="li" delay={0.06} className="verder-kaart">
              <h3 className="h3">Coaching</h3>
              <p className="subtekst">
                Persoonlijke begeleiding bij professionele ontwikkeling. In een individueel traject werk je met onze
                begeleiding aan een eigen vraagstuk, van effectiever leidinggeven tot meer balans in het werk.
              </p>
            </Reveal>
          </ul>
        </div>
      </section>

      <TekstSectie eyebrow="Onderwerpen" titel="Onderwerpen die aansluiten bij de praktijk." id="onderwerpen" achtergrond="turkoois">
        <p className="subtekst">
          We stellen trainingen en coachtrajecten altijd op maat samen. Onderwerpen die vaak terugkomen:
        </p>
        <BlokLijst
          kolommen={2}
          items={[
            "Slimmer werken en prioriteiten stellen",
            "Effectief communiceren",
            "Klantgerichtheid",
            "Samenwerken",
            "Persoonlijke effectiviteit",
            "Feedback geven en ontvangen",
            "Omgaan met weerstand",
            "Eigenaarschap",
            "Professionele ontwikkeling",
          ]}
        />
      </TekstSectie>

      <StapGrid
        eyebrow="Proces"
        titel="Van vraagstuk tot blijvend resultaat."
        stappen={[
          { titel: "Vraagstuk", tekst: "Wat speelt er precies, en bij wie? We brengen de vraag achter de vraag in kaart." },
          { titel: "Doel", tekst: "We bepalen samen wat succes betekent: welk gedrag of resultaat willen we zien?" },
          { titel: "Training of coaching", tekst: "We ontwerpen en verzorgen het traject dat bij de vraag en de deelnemers past." },
          { titel: "Toepassen", tekst: "Deelnemers oefenen het geleerde direct in hun eigen werksituatie." },
          { titel: "Evalueren", tekst: "We toetsen wat werkt in de praktijk en wat nog schuurt." },
          { titel: "Verbeteren", tekst: "Op basis daarvan stellen we bij, zodat de ontwikkeling ook na afloop doorgaat." },
        ]}
      />

      <TekstSectie eyebrow="Voor wie" titel="Voor wie zijn training en coaching bedoeld?" id="voor-wie">
        <p className="lead">Voor medewerkers, leidinggevenden én complete teams.</p>
        <p className="subtekst">
          Van iemand die net een leidinggevende rol op zich neemt tot een team dat samen klantgerichter wil
          communiceren. Omdat elk traject op maat is, bepalen we vooraf samen wie er aan tafel zit en wat de beste vorm
          is.
        </p>
      </TekstSectie>

      <FaqLijst faqs={faqs} />

      <VerderLezen
        items={[
          {
            eyebrow: "Breder vraagstuk?",
            titel: "Advies",
            tekst: "Speelt er meer dan alleen vaardigheden, bijvoorbeeld in processen of organisatiestructuur?",
            href: "/advies/",
            linkTekst: "Meer over advies",
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
        titel="Benieuwd wat jouw team of organisatie nodig heeft?"
        tekst="In een kort gesprek denken we vrijblijvend mee over de beste vorm van training of coaching."
      />

      <JsonLd data={serviceJsonLd({ name: "Training en coaching", description: beschrijving, path: "/training-coaching/" })} />
    </>
  );
}
