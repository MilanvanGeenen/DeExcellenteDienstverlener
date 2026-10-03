import type { Metadata } from "next";
import { Doorverwijzing } from "@/components/Doorverwijzing";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Onze werkwijze | de excellente dienstverlener" },
  alternates: { canonical: absoluteUrl("/werkwijze/") },
  robots: { index: false, follow: true },
};

export default function OudeAanpakPagina() {
  return <Doorverwijzing naar="/werkwijze/" naam="Onze werkwijze" />;
}
