import Link from "next/link";
import { ContactBlok } from "@/components/ContactBlok";
import { DienstKaarten, PijlerGrid, WerkwijzeTijdlijn } from "@/components/HomeSecties";
import { Reviews } from "@/components/Reviews";
import { StructuurBeeld } from "@/components/StructuurBeeld";
import { KennismakingKnop, Pijl, PijlLink, Reveal } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "Teamontwikkeling, training & advies | de excellente dienstverlener",
  description:
    "Wij helpen teams en organisaties in Nuenen, Eindhoven en Brabant beter samenwerken met teamontwikkeling, training en advies. Plan een kennismaking.",
});

export default function Home() {
  return (
    <>
      {/* 1. Intro */}
      <section className="hero" aria-labelledby="intro-kop">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">De excellente dienstverlener</p>
            <h1 id="intro-kop" className="h1 mt-5">
              Excellente dienstverlening begint bij mensen.
            </h1>
            <p className="lead mt-6 max-w-[34rem]">
              Wij helpen mensen, teams en organisaties om samen te werken, te groeien en beter te presteren.
            </p>
            <div className="hero-acties">
              <KennismakingKnop />
              <Link href="/diensten/" className="pijl-link">
                Bekijk onze diensten
                <Pijl />
              </Link>
            </div>
          </div>
          <StructuurBeeld />
        </div>
      </section>

      {/* 2. Reviews */}
      <section className="section bg-licht-turkoois" aria-labelledby="reviews-kop">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Ervaringen</p>
            <h2 id="reviews-kop" className="h2 mt-4">
              Wat organisaties over ons zeggen
            </h2>
          </Reveal>
        </div>
        <Reviews />
      </section>

      {/* 3. Werkwijze: het hoe */}
      <section className="section" aria-labelledby="werkwijze-kop">
        <div className="container">
          <Reveal className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Onze werkwijze</p>
              <h2 id="werkwijze-kop" className="h2 mt-4">
                Zo werken wij
              </h2>
              <p className="lead mt-4 font-[family-name:var(--font-manrope)] font-semibold text-turkoois-tekst">
                Luisteren. Begrijpen. Bewegen. Verbeteren.
              </p>
            </div>
            <PijlLink href="/werkwijze/">Bekijk onze werkwijze</PijlLink>
          </Reveal>
          <WerkwijzeTijdlijn />
        </div>
      </section>

      {/* 4. Diensten: het wat */}
      <section className="section pt-0!" aria-labelledby="diensten-kop">
        <div className="container">
          <div className="mb-16 h-px bg-salie/50 md:mb-24" aria-hidden="true" />
          <Reveal>
            <p className="eyebrow">Wat wij doen</p>
            <h2 id="diensten-kop" className="h2 mt-4">
              Onze diensten
            </h2>
          </Reveal>
          <DienstKaarten />
        </div>
      </section>

      {/* 5. Over ons: het waarom */}
      <section className="section bg-donker op-donker" aria-labelledby="over-kop">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Over ons</p>
            <h2 id="over-kop" className="h2 mt-4">
              De werkende wereld een gelukkiger plek maken.
            </h2>
            <p className="subtekst mt-6 leesbreedte">
              Wij zijn dienstverlener, omdat voldoening voortkomt uit de waarde die je voor anderen hebt. En
              excellent, omdat excellentie geen eindpunt is maar een ambitie.
            </p>
            <PijlLink href="/over-ons/" className="mt-8">
              Lees ons verhaal
            </PijlLink>
          </Reveal>
          <PijlerGrid />
        </div>
      </section>

      {/* 6. Contact */}
      <section className="section" aria-labelledby="home-kop">
        <div className="container">
          <ContactBlok
            idPrefix="home"
            titel="Laten we kennismaken."
            tekst="Een eerste gesprek is vrijblijvend en bedoeld om jouw vraagstuk te begrijpen. Bel of mail ons, of laat een bericht achter."
          />
        </div>
      </section>
    </>
  );
}
