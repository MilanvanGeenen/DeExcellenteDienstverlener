import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { Portrait } from "@/components/Portrait";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over Thijs",
  description:
    "Thijs van Geenen helpt organisaties naar excellente dienstverlening door structuur, betrokken teams en klantgedreven werken samen te brengen.",
};

const foundations = [
  {
    title: "Structuur",
    text: "Heldere werkwijzen en werkafspraken vormen het fundament. Ze geven rust, voorkomen ruis en maken ruimte voor waar het echt om gaat.",
  },
  {
    title: "Betrokken teams",
    text: "Teams die vanuit intrinsieke motivatie het verschil maken. Ik investeer in samenwerking, eigenaarschap en plezier in het werk.",
  },
  {
    title: "Klantgedreven werken",
    text: "Met de klant als vertrekpunt. Elke verbetering toets ik aan één vraag: merkt de klant het verschil?",
  },
];

export default function OverThijs() {
  return (
    <>
      {/* Intro */}
      <section>
        <div className="container-page grid items-center gap-14 pb-20 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-20">
          <FadeIn className="lg:col-span-6">
            <Eyebrow>Over Thijs</Eyebrow>
            <h1 className="mt-6 text-h1">Hoi, ik ben Thijs van Geenen.</h1>
            <p className="mt-6 max-w-prose text-lead text-ink-soft">
              Adviseur, trainer, projectleider en coach uit Nuenen. Met ‘de excellente
              dienstverlener’ help ik organisaties waar mensen, werk en klant samenkomen.
            </p>

            <figure className="mt-12 border-l-2 border-forest/40 pl-6 md:mt-14 md:pl-8">
              <blockquote className="font-serif text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] italic leading-snug text-forest">
                “Excellente dienstverlening is geen toeval. Het ontstaat waar structuur, betrokken
                mensen en de klant samenkomen.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-soft">Thijs van Geenen</figcaption>
            </figure>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-6">
            <Portrait alt="Portret van Thijs van Geenen" priority className="aspect-[4/5] lg:aspect-[5/6]" />
          </FadeIn>
        </div>
      </section>

      {/* Verhaal */}
      <section className="section-y border-t border-line">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow>Mijn verhaal</Eyebrow>
              <h2 className="mt-6 text-h2">Waarom ik dit werk doe</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="max-w-prose space-y-6 text-[1.125rem] leading-[1.8] text-ink/90">
              <p className="font-serif text-[1.5rem] leading-snug text-ink md:text-[1.75rem]">
                Ik zie het vaak gebeuren: goede mensen die hard werken, maar vastlopen in onduidelijke
                afspraken, losse eilandjes en klanten die net niet krijgen wat ze nodig hebben.
              </p>
              <p>
                Niet door onwil, maar omdat het fundament ontbreekt. En juist daar valt zoveel te
                winnen. Als werkwijzen helder zijn, teams zich eigenaar voelen en iedereen de klant als
                vertrekpunt neemt, ontstaat er iets moois: rust in het werk, plezier in de samenwerking
                en klanten die dat merken.
              </p>
              <p>
                Mijn overtuiging is eenvoudig. Efficiënter werken, werkgeluk en klantgerichtheid
                versterken elkaar. Laat je er één liggen, dan blijft het resultaat achter. Breng je ze
                samen, dan ontstaat excellente dienstverlening.
              </p>
              <p>
                Daarom werk ik niet met dikke rapporten die in een la verdwijnen. Ik sta naast je
                mensen, dicht op het werk, en stuur op resultaat dat je direct terugziet. Nuchter,
                betrokken en met oog voor wat er al goed gaat.
              </p>
              <p>
                Sinds april 2024 doe ik dat als zelfstandige, vanuit Nuenen, onder de naam ‘de
                excellente dienstverlener’.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="section-y bg-sand">
        <div className="container-page">
          <FadeIn className="max-w-3xl">
            <Eyebrow>Werkwijze</Eyebrow>
            <h2 className="mt-6 text-h2">Drie fundamenten onder alles wat ik doe</h2>
            <p className="mt-6 max-w-prose text-lead text-ink-soft">
              Ze bouwen op elkaar voort. Structuur geeft houvast, betrokken teams geven energie en de
              klant geeft richting.
            </p>
          </FadeIn>

          <ol className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-3 lg:gap-0">
            {foundations.map((item, i) => (
              <li key={item.title} className="lg:border-l lg:border-sand-deep lg:px-10 lg:first:border-l-0 lg:first:pl-0">
                <FadeIn delay={i * 0.12}>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-[3.5rem] italic leading-none text-forest/80">{i + 1}</span>
                    {i < foundations.length - 1 && (
                      <span aria-hidden="true" className="hidden h-px flex-1 bg-forest/20 lg:block" />
                    )}
                  </div>
                  <h3 className="mt-6 text-h3">{item.title}</h3>
                  <p className="mt-3 max-w-prose text-ink-soft">{item.text}</p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ervaring */}
      <section className="section-y pb-0!">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <Eyebrow>Ervaring</Eyebrow>
            <h2 className="mt-6 text-h2">Waar ik nu sta</h2>
          </FadeIn>
          <div className="lg:col-span-7 lg:col-start-6">
            <Timeline items={experience} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
