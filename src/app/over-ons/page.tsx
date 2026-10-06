import { PijlerGrid } from "@/components/HomeSecties";
import { KennismakingBand, PaginaKop, SectieKop, TekstSectie, VerderLezen } from "@/components/Pagina";
import { PijlLink, Reveal } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/over-ons/",
  title: "Over ons: waarom wij dit doen | de excellente dienstverlener",
  description:
    "Wij willen de werkende wereld een gelukkiger plek maken. Lees waarom wij dienstverlener zijn, waarom excellent, en welke vier pijlers ons werk dragen.",
});

const overtuigingen = [
  { kop: "Werkgeluk.", tekst: "Mensen die met plezier en betrokkenheid werken, presteren structureel beter." },
  { kop: "Klantgeluk.", tekst: "Een goede klantervaring begint bij een organisatie die intern goed is afgestemd." },
  { kop: "Betere samenwerking.", tekst: "De meeste vraagstukken in organisaties zijn uiteindelijk samenwerkingsvraagstukken." },
  { kop: "Betere dienstverlening.", tekst: "Kleine verbeteringen in hoe mensen met elkaar en met klanten omgaan, hebben grote impact." },
  { kop: "Betere resultaten.", tekst: "Samen vormen ze de basis voor betere resultaten." },
];

export default function OverOns() {
  return (
    <>
      <PaginaKop
        kruimels={[
          { name: "Home", path: "/" },
          { name: "Over ons", path: "/over-ons/" },
        ]}
        eyebrow="Over ons: waarom wij dit doen"
        titel="De werkende wereld een gelukkiger plek maken."
        lead="Daarom bestaat de excellente dienstverlener. Het is ook de maatstaf waarmee we ons eigen werk beoordelen."
      />

      <TekstSectie eyebrow="Waarom dienstverlener" titel="Omdat voldoening voortkomt uit waarde voor anderen." id="dienstverlener" lijn>
        <p className="lead">We noemen onszelf bewust dienstverlener, niet adviesbureau of trainingsinstituut.</p>
        <p className="subtekst">
          Onze voldoening zit in het effect van ons werk: een
          team dat weer beter samenwerkt, een medewerker die met meer plezier naar het werk gaat, een organisatie die
          haar klanten beter kan bedienen. Dienstverlening betekent voor ons: ertoe doen voor de mensen en
          organisaties waarmee we werken.
        </p>
      </TekstSectie>

      <TekstSectie eyebrow="Waarom excellent" titel="Excellentie is geen eindpunt, maar een ambitie." id="excellent" achtergrond="turkoois">
        <p className="lead">We gaan er nooit van uit dat we het antwoord al hebben voordat we goed hebben geluisterd.</p>
        <p className="subtekst">
          En we zijn nooit klaar met leren. Net zoals we organisaties vragen om continu te verbeteren, houden we onszelf
          aan diezelfde maatstaf: kritisch kijken naar ons eigen werk, openstaan voor feedback, en een aanpak durven
          bijstellen wanneer de praktijk daarom vraagt.
        </p>
      </TekstSectie>

      <section className="section" aria-labelledby="pijlers-kop">
        <div className="container">
          <Reveal className="max-w-[44rem]">
            <SectieKop eyebrow="Waar ons werk op rust" titel="De vier pijlers van excellente dienstverlening" id="pijlers-kop" />
          </Reveal>
          <PijlerGrid className="op-licht mt-12 lg:grid-cols-4" />
        </div>
      </section>

      <TekstSectie eyebrow="Overtuiging" titel="Waar we in geloven." id="geloven" lijn>
        <ul className="grid gap-5">
          {overtuigingen.map((o) => (
            <li key={o.kop} className="border-b border-[var(--lijn)] pb-5">
              <strong className="font-[family-name:var(--font-manrope)] font-bold text-blauw-logo">{o.kop}</strong>{" "}
              <span className="subtekst">{o.tekst}</span>
            </li>
          ))}
        </ul>
      </TekstSectie>

      <section className="section bg-donker op-donker" aria-labelledby="praktijk-kop">
        <div className="container twee-kolom">
          <Reveal>
            <SectieKop eyebrow="In de praktijk" titel="Hoe dat terugkomt in ons werk." id="praktijk-kop" />
          </Reveal>
          <Reveal delay={0.08} className="prose-blok">
            <p className="lead text-wit-gebroken">
              Altijd eerst goed luisteren en begrijpen, voordat we een aanpak voorstellen.
            </p>
            <p className="subtekst">
              Elke aanpak stemmen we af op de organisatie, de mensen en het vraagstuk. En we letten op wat er nodig is om verandering te laten beklijven, ook als het traject is afgerond.
            </p>
            <PijlLink href="/werkwijze/">Bekijk onze werkwijze</PijlLink>
          </Reveal>
        </div>
      </section>

      <VerderLezen
        items={[
          {
            eyebrow: "Wat wij doen",
            titel: "Onze diensten",
            tekst: "Teamontwikkeling, training & coaching en advies: ontdek wat bij jouw vraagstuk past.",
            href: "/diensten/",
            linkTekst: "Bekijk onze diensten",
          },
          {
            eyebrow: "Kennismaken",
            titel: "Contact",
            tekst: "Benieuwd wat we voor jouw team of organisatie kunnen betekenen?",
            href: "/contact/",
            linkTekst: "Neem contact met ons op",
          },
        ]}
      />

      <KennismakingBand
        titel="Wil je kennismaken?"
        tekst="Benieuwd wat de excellente dienstverlener voor jouw team of organisatie kan betekenen? We denken graag vrijblijvend mee."
      />
    </>
  );
}
