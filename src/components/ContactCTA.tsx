import { site } from "@/lib/site";
import { ButtonLink } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";

type ContactCTAProps = {
  title?: string;
  text?: string;
};

export function ContactCTA({
  title = "Benieuwd wat ik voor jouw organisatie kan betekenen?",
  text = "Een eerste gesprek is vrijblijvend. We verkennen samen waar je tegenaan loopt en of ik je daarbij kan helpen.",
}: ContactCTAProps) {
  return (
    <section className="section-y">
      <div className="container-page">
        <FadeIn>
          <div className="grid gap-12 rounded-[2rem] bg-sand px-6 py-14 md:px-14 md:py-20 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <Eyebrow>Kennismaken</Eyebrow>
              <h2 className="mt-6 text-h2">{title}</h2>
              <p className="mt-6 max-w-prose text-lead text-ink-soft">{text}</p>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-5 lg:pl-6">
              <ButtonLink href="/contact" className="self-start">
                Plan een gesprek
              </ButtonLink>
              <dl className="grid gap-5 border-t border-sand-deep pt-8 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <dt className="text-sm text-ink-soft">Bel direct</dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="font-serif text-2xl transition-colors duration-300 hover:text-forest"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-soft">Of mail</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all font-serif text-2xl transition-colors duration-300 hover:text-forest"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
