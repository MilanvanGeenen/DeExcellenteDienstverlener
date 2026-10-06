import { BlokLijst, KennismakingBand, PaginaKop, SectieKop } from "@/components/Pagina";
import { PijlLink, Reveal } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/diensten/",
  title: "Diensten: teamontwikkeling, training en advies",
  description:
    "Teamontwikkeling, training en coaching, en advies over klantgerichtheid: wij bieden maatwerk voor teams en organisaties in Brabant. Ontdek wat bij je past.",
});

const herkenbaar = [
  "Samenwerking binnen het team loopt stroef.",
  "Communicatie zorgt regelmatig voor misverstanden.",
  "Afspraken worden gemaakt, maar niet altijd nagekomen.",
  "Medewerkers zijn betrokken, maar missen richting of eigenaarschap.",
  "Klanten verwachten meer dan de organisatie nu kan bieden.",
  "Er wordt hard gewerkt, maar niet altijd effectief.",
  "Er is behoefte aan ontwikkeling, maar niet aan nóg een standaardtraining.",
];

const diensten = [
  {
    nummer: "01",
    titel: "Teamontwikkeling",
    kern: "Samenwerking, vertrouwen, communicatie, eigenaarschap en resultaat.",
    tekst: "Een team dat goed functioneert, ontstaat niet vanzelf. Zeker niet wanneer de druk toeneemt, rollen wijzigen of de onderlinge verhoudingen onder spanning staan. Wij kijken naar wat een team nodig heeft om weer effectief samen te werken: meer vertrouwen, heldere afspraken, eigenaarschap en een gezamenlijke focus op het resultaat dat telt voor de organisatie én de klant.",
    punten: ["Vertrouwen en veiligheid", "Rolduidelijkheid en eigenaarschap", "Communicatie en feedback", "Gezamenlijke focus op resultaat"],
    href: "/teamontwikkeling/",
    link: "Meer over teamontwikkeling",
  },
  {
    nummer: "02",
    titel: "Training & Coaching",
    kern: "Persoonlijke en professionele ontwikkeling, slimmer werken, klantgerichtheid en effectiviteit.",
    tekst: "Soms zit de sleutel tot verandering in de vaardigheden en het gedrag van medewerkers en leidinggevenden. Met training werken we aan concrete vaardigheden; met coaching begeleiden we mensen persoonlijk in hun ontwikkeling. Beide stellen we op maat samen.",
    punten: ["Slimmer werken en prioriteiten stellen", "Klantgericht communiceren", "Feedback geven en ontvangen", "Persoonlijke effectiviteit"],
    href: "/training-coaching/",
    link: "Meer over training & coaching",
  },
  {
    nummer: "03",
    titel: "Advies",
    kern: "Organisatieontwikkeling, klantgerichtheid, medewerkerstevredenheid en verbetering.",
    tekst: "Wanneer een vraagstuk breder is dan één team of één vaardigheid, is advies vaak het beste startpunt. Denk aan het klantgerichter maken van de organisatie, het verhogen van de medewerkerstevredenheid of het effectiever inrichten van werkprocessen. We werken daarbij altijd samen mét de organisatie, niet als externe partij die van bovenaf vertelt hoe het moet.",
    punten: ["Klantgerichtheid en dienstverlening", "Medewerkerstevredenheid", "Werkprocessen en effectiviteit", "Organisatieontwikkeling"],
    href: "/advies/",
    link: "Meer over advies",
  },
];

export default function Diensten() {
  return (
    <>
      <PaginaKop
        kruimels={[
          { name: "Home", path: "/" },
          { name: "Diensten", path: "/diensten/" },
        ]}
        eyebrow="Diensten"
        titel="Diensten die mensen, teams en organisaties in beweging brengen."
        lead="Ieder vraagstuk is anders. Daarom bepalen we pas na een goed gesprek welke aanpak het beste past: teamontwikkeling, training, coaching, advies of een combinatie daarvan."
      />

      <section className="section bg-licht-turkoois" aria-labelledby="herken-kop">
        <div className="container twee-kolom">
          <Reveal>
            <SectieKop eyebrow="Herkenbaar?" titel="Herken je dit?" id="herken-kop" />
            <p className="subtekst mt-6 leesbreedte">
              Dit zijn geen uitzonderingen. Het zijn signalen die in vrijwel elke organisatie voorkomen, en die vaak
              vragen om een andere aanpak dan nóg een training of een reorganisatie.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <BlokLijst items={herkenbaar} kolommen={2} />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Onze drie diensten">
        <div className="container">
          <Reveal className="leesbreedte">
            <p className="lead">
              Sommige organisaties weten precies waar ze hulp bij nodig hebben. Andere merken vooral dát er iets moet
              veranderen. Beide zijn een goed startpunt.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-16 md:mt-20 md:gap-20">
            {diensten.map((d) => (
              <Reveal key={d.href} as="article" className="grid gap-8 border-t border-[var(--lijn)] pt-12 lg:grid-cols-[4rem_minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12">
                <span className="dienst-nummer text-[1.1rem]" aria-hidden="true">
                  {d.nummer}
                </span>
                <div>
                  <h2 className="h2">{d.titel}</h2>
                  <p className="mt-4 font-[family-name:var(--font-manrope)] text-[1.15rem] font-semibold text-blauw-logo">{d.kern}</p>
                  <p className="subtekst mt-4 leesbreedte">{d.tekst}</p>
                </div>
                <div>
                  <BlokLijst items={d.punten} />
                  <PijlLink href={d.href} className="mt-6">
                    {d.link}
                  </PijlLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <KennismakingBand
        titel="Nog niet zeker wat jouw organisatie nodig heeft?"
        tekst="Geen probleem, en ook geen ongebruikelijke vraag. De meeste trajecten beginnen met een gesprek waarin we samen bepalen waar de meeste winst te behalen valt."
      />
    </>
  );
}
