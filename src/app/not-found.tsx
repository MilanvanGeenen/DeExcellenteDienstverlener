import type { Metadata } from "next";
import { KennismakingKnop, PijlLink } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Pagina niet gevonden | de excellente dienstverlener" },
  description: "Deze pagina bestaat niet (meer). Ga terug naar de homepage of plan een kennismaking.",
  robots: { index: false, follow: true },
};

export default function NietGevonden() {
  return (
    <section className="pagina-kop">
      <div className="pagina-kop-gloed" aria-hidden="true" />
      <div className="container py-10 md:py-20">
        <p className="eyebrow">Foutmelding 404</p>
        <h1 className="h1 mt-5 max-w-[40rem]">Deze pagina konden we niet vinden.</h1>
        <p className="lead mt-6 leesbreedte">
          Misschien is de pagina verplaatst of bestaat hij niet meer. Op de homepage vind je ons hele verhaal, of plan
          direct een kennismaking.
        </p>
        <div className="hero-acties">
          <KennismakingKnop />
          <PijlLink href="/">Terug naar de homepage</PijlLink>
        </div>
      </div>
    </section>
  );
}
