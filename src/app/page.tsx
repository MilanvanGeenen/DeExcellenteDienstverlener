import Link from "next/link";
import { Arrow, ButtonLink, TextLink } from "@/components/Button";
import { ContactCTA } from "@/components/ContactCTA";
import { DrawLine } from "@/components/DrawLine";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { LevelsGraphic } from "@/components/LevelsGraphic";
import { Portrait } from "@/components/Portrait";

const roles = [
  { title: "Advies", audience: "voor organisaties" },
  { title: "Training", audience: "voor teams" },
  { title: "Projectleiding", audience: "bij veranderopgaves" },
  { title: "Coaching", audience: "voor leidinggevenden" },
];

const levels = [
  {
    title: "Organisatie",
    focus: "Advies en verandermanagement",
    text: "Heldere werkwijzen en werkafspraken als fundament, zodat duidelijk is wat er van wie verwacht wordt.",
  },
  {
    title: "Teams",
    focus: "Interim leiderschap, training en workshops",
    text: "Teams die samen beter organiseren en uitvoeren, vanuit eigen motivatie en met oog voor elkaar.",
  },
  {
    title: "Individu",
    focus: "Coaching en leiderschapsontwikkeling",
    text: "Leidinggevenden die resultaat en gedrag duurzaam sturen, met de klant als vertrekpunt.",
  },
] as const;

const results = [
  "Rust en grip op het (team)werk",
  "Sterke samenwerking binnen en tussen teams",
  "Medewerkers die floreren in hun kwaliteiten",
  "Structureel hoge klanttevredenheid",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <div className="container-page pt-10 md:pt-16 lg:pt-20">
          <FadeIn>
            <h1 className="text-[clamp(2.35rem,1.2rem+4.6vw,6rem)] leading-[1.05] tracking-[-0.025em]">
              Sterke teams, tevreden klanten,{" "}
              <span className="italic text-forest lg:block">blijvend resultaat.</span>
            </h1>
          </FadeIn>
        </div>

        <div className="container-page pb-16 lg:pb-24">
          <div className="mt-10 grid gap-14 border-t border-line pt-10 md:mt-14 md:pt-12 lg:grid-cols-12 lg:gap-12 lg:pt-14">
            <div className="lg:col-span-8">
              <FadeIn delay={0.2}>
                <p className="max-w-[40rem] font-serif text-[clamp(1.3rem,1rem+1vw,1.6rem)] font-light leading-snug text-ink/85">
                  <span className="lg:block">Advies dat verder kijkt dan het rapport.</span>{" "}
                  <span className="lg:block">Leiderschap dat resultaat en gedrag samenbrengt.</span>
                </p>
              </FadeIn>
              <FadeIn delay={0.4} className="mt-8 md:mt-10">
                <p className="max-w-[34rem] text-lead text-ink-soft">
                  Ik help organisaties grip te krijgen op het werk, met teams die goed samenwerken en
                  klanten die dat merken. Geen dikke rapporten, maar direct zichtbaar resultaat.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
                  <ButtonLink href="/contact">Plan een gesprek</ButtonLink>
                  <TextLink href="/aanpak">Bekijk mijn aanpak</TextLink>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} className="lg:col-span-4">
              {/* Vak = ware grootte van de foto (242px), zodat hij niet wordt opgerekt. */}
              <figure className="w-fit lg:ml-auto lg:mr-3">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-3 left-4 top-4 rounded-[2rem] border border-forest/25"
                  />
                  <Portrait
                    src="/images/thijs.png"
                    alt="Portret van Thijs van Geenen"
                    priority
                    sizes="242px"
                    className="aspect-square w-[242px]"
                  />
                </div>
                <figcaption className="mt-7">
                  <p className="font-serif text-xl leading-tight">Thijs van Geenen</p>
                  <p className="mt-1 text-sm text-ink-soft">Nuenen · zelfstandig sinds 2024</p>
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>

        {/* Rollen */}
        <div className="container-page">
          <FadeIn delay={0.2}>
            <ul aria-label="Waar ik je mee help" className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
              {roles.map((role, i) => (
                <li
                  key={role.title}
                  className={`py-6 lg:px-8 lg:py-9 lg:first:pl-0 lg:not-first:border-l lg:not-first:border-line ${
                    i % 2 === 1 ? "max-lg:border-l max-lg:border-line max-lg:pl-5" : "max-lg:pr-5"
                  } ${i < 2 ? "max-lg:border-b max-lg:border-line" : ""}`}
                >
                  <p className="font-serif text-[1.35rem] leading-tight md:text-2xl">{role.title}</p>
                  <p className="mt-1 text-sm text-ink-soft md:text-[0.95rem]">{role.audience}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Drie niveaus */}
      <section className="section-y">
        <div className="container-page">
          <FadeIn className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Werkwijze</Eyebrow>
              <h2 className="mt-6 text-h2">Drie niveaus die in elkaar overlopen</h2>
            </div>
            <p className="max-w-prose text-lead text-ink-soft lg:col-span-5">
              Duurzame verbetering vraagt aandacht op elk niveau. Wat in de organisatie wordt
              afgesproken, moet in teams landen en door mensen worden gedragen.
            </p>
          </FadeIn>

          <ol className="mt-16 grid grid-cols-[minmax(0,1fr)] gap-10 md:mt-20 lg:grid-cols-3 lg:gap-8">
            {levels.map((level, i) => (
              <li key={level.title} className="relative pl-16 sm:pl-20 lg:pl-0 lg:pt-20">
                {i < levels.length - 1 && (
                  <>
                    <DrawLine axis="y" className="absolute -bottom-10 left-6 top-12 w-px bg-line lg:hidden" />
                    <DrawLine
                      axis="x"
                      delay={0.15 + i * 0.2}
                      className="absolute -right-8 left-12 top-6 hidden h-px bg-line lg:block"
                    />
                  </>
                )}
                <FadeIn delay={i * 0.12} className="h-full">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-full border border-forest/40 bg-cream font-serif text-lg text-forest"
                  >
                    {i + 1}
                  </span>
                  <Link
                    href={`/aanpak#niveau-${i + 1}`}
                    className="group flex h-full flex-col rounded-[1.75rem] bg-sand p-7 transition-[transform,box-shadow,background-color] duration-500 ease-soft hover:-translate-y-1 hover:bg-sand-deep/60 hover:shadow-[0_24px_50px_-28px_rgba(43,42,40,0.4)] motion-reduce:hover:translate-y-0 md:p-9"
                  >
                    <LevelsGraphic active={i as 0 | 1 | 2} className="size-20" />
                    <h3 className="mt-8 text-h3">{level.title}</h3>
                    <p className="mt-2 font-medium text-forest">{level.focus}</p>
                    <p className="mt-4 text-ink-soft">{level.text}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.95rem] font-medium text-forest">
                      Meer over dit niveau
                      <Arrow />
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Resultaten */}
      <section className="section-y bg-forest text-cream">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Eyebrow light>Wat het oplevert</Eyebrow>
              <h2 className="mt-6 text-h2">Resultaat dat je merkt, in het team én bij de klant.</h2>
              <p className="mt-6 max-w-prose text-lead text-cream/75">
                Geen plan dat in een la verdwijnt, maar verandering die je terugziet in het dagelijkse
                werk.
              </p>
            </div>
          </FadeIn>

          <ul className="border-b border-cream/15 lg:col-span-7">
            {results.map((result, i) => (
              <li key={result}>
                <FadeIn
                  delay={i * 0.1}
                  className="flex items-start gap-5 border-t border-cream/15 py-7 md:gap-8 md:py-9"
                >
                  <span className="mt-1.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-cream/25 md:mt-2 md:size-9">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 text-cream/85"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <span className="font-serif text-[clamp(1.5rem,1.2rem+1.3vw,2.4rem)] leading-tight">
                    {result}
                  </span>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kennismaking */}
      <section className="section-y pb-0!">
        <FadeIn className="container-page">
          <figure className="mx-auto max-w-4xl text-center">
            <Eyebrow className="justify-center">Over Thijs</Eyebrow>
            <blockquote className="mt-8 font-serif text-[clamp(1.75rem,1.3rem+1.9vw,3rem)] italic leading-[1.25] text-forest">
              “Excellente dienstverlening is geen toeval. Het ontstaat waar structuur, betrokken
              mensen en de klant samenkomen.”
            </blockquote>
            <figcaption className="mt-10 flex flex-col items-center gap-5">
              <span className="text-ink-soft">
                <span className="block font-medium text-ink sm:inline">Thijs van Geenen</span>
                <span aria-hidden="true" className="hidden sm:inline"> · </span>
                eigenaar <span className="whitespace-nowrap">‘de excellente dienstverlener’</span>
              </span>
              <TextLink href="/over-thijs">Lees mijn verhaal</TextLink>
            </figcaption>
          </figure>
        </FadeIn>
      </section>

      <ContactCTA />
    </>
  );
}
