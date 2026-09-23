import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan een vrijblijvend gesprek met Thijs van Geenen. Bel, mail of stuur een bericht.",
};

export default function Contact() {
  return (
    <section className="pb-24 pt-10 md:pb-32 md:pt-16 lg:pb-40 lg:pt-20">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 text-h1">Laten we kennismaken.</h1>
          <p className="mt-6 max-w-prose text-lead text-ink-soft">
            Loop je ergens tegenaan in je organisatie, of wil je eens sparren over hoe het beter kan?
            Ik hoor graag van je. Bel me gerust, stuur een mail of laat een bericht achter. Een
            eerste gesprek is altijd vrijblijvend.
          </p>

          <dl className="mt-12 space-y-8 border-t border-line pt-10">
            <div>
              <dt className="text-sm text-ink-soft">Telefoon</dt>
              <dd className="mt-1">
                <a
                  href={site.phoneHref}
                  className="font-serif text-[clamp(1.6rem,1.3rem+1.2vw,2.25rem)] leading-tight transition-colors duration-300 hover:text-forest"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-soft">E-mail</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="break-all font-serif text-[clamp(1.6rem,1.3rem+1.2vw,2.25rem)] leading-tight transition-colors duration-300 hover:text-forest"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-soft">Gevestigd in</dt>
              <dd className="mt-1 text-lg">{site.location}</dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={0.15} className="lg:col-span-7">
          <div className="rounded-[2rem] border border-line bg-white/50 p-6 md:p-10 lg:p-12">
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
