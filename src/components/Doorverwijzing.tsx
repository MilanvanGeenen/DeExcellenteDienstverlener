import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

// Statische site zonder server: verwijzen met een meta-refresh (werkt zonder JavaScript).
export function Doorverwijzing({ naar, naam }: { naar: string; naam: string }) {
  return (
    <section className="pagina-kop">
      <meta httpEquiv="refresh" content={`0; url=${absoluteUrl(naar)}`} />
      <div className="container py-10 md:py-20">
        <h1 className="h2">Deze pagina is verhuisd.</h1>
        <p className="lead mt-6">
          Je vindt de inhoud nu op <Link href={naar} className="text-turkoois-tekst underline underline-offset-4">{naam}</Link>.
        </p>
      </div>
    </section>
  );
}
