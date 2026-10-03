import type { Metadata } from "next";
import { Doorverwijzing } from "@/components/Doorverwijzing";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Over ons | de excellente dienstverlener" },
  alternates: { canonical: absoluteUrl("/over-ons/") },
  robots: { index: false, follow: true },
};

export default function OudeOverPagina() {
  return <Doorverwijzing naar="/over-ons/" naam="Over ons" />;
}
