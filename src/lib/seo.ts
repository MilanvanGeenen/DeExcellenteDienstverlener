import type { Metadata } from "next";
import { absoluteUrl, site, type Faq } from "@/lib/site";

export const ORG_ID = absoluteUrl("/#organisatie");
const ogImage = { url: absoluteUrl("/og-image.jpg"), width: 1200, height: 630, alt: "de excellente dienstverlener" };

type PageMeta = { path: string; title: string; description: string; noindex?: boolean };

export function pageMetadata({ path, title, description, noindex }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "nl_NL",
      siteName: site.name,
      url,
      title,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: site.name,
  description: site.tagline,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/logo.png"),
  image: ogImage.url,
  telephone: site.phoneIntl,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "NL",
  },
  areaServed: { "@type": "Country", name: "Nederland" },
  sameAs: [site.linkedin],
};

export type Crumb = { name: string; path: string };

export const breadcrumbJsonLd = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

export const serviceJsonLd = (s: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.name,
  description: s.description,
  url: absoluteUrl(s.path),
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "Nederland" },
});

export const faqJsonLd = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});
