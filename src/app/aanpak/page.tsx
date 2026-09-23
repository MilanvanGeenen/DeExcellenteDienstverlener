import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { LevelsGraphic } from "@/components/LevelsGraphic";
import { ProgressLine } from "@/components/ProgressLine";

export const metadata: Metadata = {
  title: "Aanpak",
  description:
    "Van organisatie naar team naar individu: een doordacht raamwerk voor betere team- en klantresultaten.",
};

const levels = [
  {
    title: "Organisatie",
    roles: [
      {
        role: "Advies",
        text: "Ik adviseer organisaties over het verbeteren van team- en klantprestaties.",
      },
    ],
    basis: {
      title: "Structuur",
      text: "Structuur, werkwijzen en werkafspraken als fundament.",
    },
  },
  {
    title: "Teams",
    roles: [
      {
        role: "Training",
        text: "Ik help teams in hun ontwikkeling naar beter organiseren en uitvoeren.",
      },
      {
        role: "Projectleider",
        text: "Ik begeleid veranderopgaves waarin processen, systemen en het gedragscomponent van medewerkers elkaar ontmoeten op een duurzame manier.",
      },
    ],
    basis: {
      title: "Betrokken teams",
      text: "Betrokken teams die vanuit intrinsieke motivatie het verschil maken.",
    },
  },
  {
    title: "Individu",
    roles: [
      {
        role: "Coaching",
        text: "Ik coach leidinggevenden om resultaat en gedrag duurzaam te sturen.",
      },
    ],
    basis: {
      title: "Klantgedreven werken",
      text: "Klantgedreven werken, met de klant als vertrekpunt.",
    },
  },
] as const;

const levelNames = ["Organisatie", "Team", "Individu"];

export default function Aanpak() {
  return (
    <>
      {/* Intro */}
      <section>
        <div className="container-page pb-20 pt-10 md:pt-16 lg:pb-28 lg:pt-20">
          <FadeIn className="max-w-4xl">
            <Eyebrow>Aanpak</Eyebrow>
            <h1 className="mt-6 text-[clamp(1.9rem,1.35rem+2.2vw,3.5rem)] leading-[1.15] tracking-[-0.015em]">
              Ik help organisaties naar betere team- en klantresultaten door{" "}
              <em className="text-forest">structuur</em>, <em className="text-forest">betrokken teams</em>{" "}
              en <em className="text-forest">klantgedreven werken</em> te combineren en optimaliseren.
            </h1>
            <p className="mt-8 max-w-prose text-lead text-ink-soft">
              Geen menukaart met losse diensten, maar drie niveaus die op elkaar voortbouwen. Van de
              organisatie, via teams, naar de mensen die het elke dag waarmaken.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Drie niveaus */}
      <section className="border-t border-line pt-20 md:pt-28 lg:pt-36">
        <div className="container-page">
          <ProgressLine>
            {levels.map((level, i) => (
              <article
                key={level.title}
                aria-labelledby={`niveau-${i + 1}`}
                className="relative pb-24 pl-16 last:pb-4 md:pb-32 md:pl-24 md:last:pb-8 lg:pb-40 lg:last:pb-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-forest bg-cream font-serif text-lg text-forest md:size-12"
                >
                  {i + 1}
                </span>

                <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-12 lg:grid-cols-2 lg:gap-20">
                  <FadeIn className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <p className="text-sm text-ink-soft">Niveau {i + 1}</p>
                    <h2 id={`niveau-${i + 1}`} className="mt-1 scroll-mt-32 text-h2">
                      {level.title}
                    </h2>

                    <div className="mt-10 space-y-10">
                      {level.roles.map((r) => (
                        <div key={r.role}>
                          <p className="inline-flex rounded-full bg-forest-soft px-3.5 py-1 text-sm font-medium text-forest">
                            {r.role}
                          </p>
                          <p className="mt-4 max-w-prose font-serif text-[clamp(1.3rem,1.15rem+0.6vw,1.65rem)] leading-snug">
                            {r.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 border-l-2 border-forest/40 pl-5">
                      <p className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
                        Vertrekpunt · {level.basis.title}
                      </p>
                      <p className="mt-2 max-w-prose text-ink">{level.basis.text}</p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.15} className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex flex-col items-center rounded-[2rem] bg-sand px-8 py-12 md:py-16">
                      <LevelsGraphic active={i as 0 | 1 | 2} className="w-full max-w-[16rem]" />
                      <ol className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm" aria-label="Niveaus">
                        {levelNames.map((name, j) => (
                          <li key={name} className="flex items-center gap-3">
                            <span className={j === i ? "font-medium text-forest" : "text-ink-soft/70"}>{name}</span>
                            {j < levelNames.length - 1 && (
                              <span aria-hidden="true" className="text-ink-soft/40">
                                →
                              </span>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </FadeIn>
                </div>
              </article>
            ))}
          </ProgressLine>
        </div>
      </section>

      <ContactCTA
        title="Nieuwsgierig? Laten we verkennen of ik iets voor je kan betekenen."
        text="In een eerste, vrijblijvend gesprek kijken we samen waar jouw organisatie staat en op welk niveau de meeste winst te halen is."
      />
    </>
  );
}
