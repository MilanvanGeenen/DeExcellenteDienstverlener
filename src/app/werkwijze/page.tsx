import { KennismakingBand, PaginaKop, SectieKop } from "@/components/Pagina";
import { PijlLink, Reveal } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { services, workSteps } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/werkwijze/",
  title: "Onze werkwijze in zes stappen | de excellente dienstverlener",
  description:
    "Zo werken wij: verkennen, begrijpen, richting bepalen, in beweging komen, toepassen en verbeteren. De basis onder teamontwikkeling, training en advies.",
});

const toepassing = [
  "Deze werkwijze toegepast op samenwerking binnen teams.",
  "Deze werkwijze toegepast op persoonlijke en professionele ontwikkeling.",
  "Deze werkwijze toegepast op vraagstukken van de hele organisatie.",
];

export default function Werkwijze() {
  return (
    <>
      <PaginaKop
        kruimels={[
          { name: "Home", path: "/" },
          { name: "Werkwijze", path: "/werkwijze/" },
        ]}
        eyebrow="Onze werkwijze"
        titel="Van vraagstuk naar blijvende verandering."
        lead="Dit is hoe wij werken, onder al onze diensten. Een vaste manier van kijken en werken die we per situatie invullen, van de eerste kennismaking tot en met de evaluatie."
      />

      <section className="section pt-0!" aria-labelledby="stappen-kop">
        <div className="container">
          <div className="twee-kolom">
            <Reveal>
              <SectieKop eyebrow="Zes stappen" titel="Luisteren. Begrijpen. Bewegen. Verbeteren." id="stappen-kop" />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead leesbreedte">
                Elk traject doorloopt dezelfde zes stappen. Zo grijpen we niet te snel naar een oplossing en begrijpen we eerst het vraagstuk.
              </p>
            </Reveal>
          </div>

          <ol className="mt-14 md:mt-20">
            {workSteps.map((step, i) => (
              <Reveal as="li" key={step.title} className="werkstap">
                <span className="werkstap-nummer" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="h3">
                    <span className="sr-only">Stap {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="werkstap-vraag">{step.question}</p>
                  <p className="subtekst mt-2 leesbreedte">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-donker op-donker" aria-labelledby="basis-kop">
        <div className="container">
          <Reveal className="max-w-[44rem]">
            <SectieKop eyebrow="In de praktijk" titel="De basis onder al onze diensten." id="basis-kop" />
            <p className="subtekst mt-6">
              Binnen teamontwikkeling, training & coaching en advies werken we op dezelfde manier. De nadruk en de vorm
              verschillen per situatie, de manier van denken niet.
            </p>
          </Reveal>
          <ul className="verder-grid mt-12" style={{ "--kolommen": 3 } as React.CSSProperties}>
            {services.map((s, i) => (
              <Reveal as="li" key={s.href} delay={i * 0.06} className="flex">
                <div className="verder-kaart flex-1">
                  <p className="eyebrow">0{i + 1}</p>
                  <h3 className="h3">{s.title}</h3>
                  <p className="subtekst">{toepassing[i]}</p>
                  <PijlLink href={s.href}>{s.linkLabel}</PijlLink>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <KennismakingBand
        titel="Klaar om deze werkwijze te ervaren?"
        tekst="De eerste stap is een vrijblijvend gesprek waarin we samen verkennen wat er speelt."
      />
    </>
  );
}
