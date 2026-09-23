export const site = {
  name: "Thijs van Geenen",
  brand: "de excellente dienstverlener",
  location: "Nuenen, Noord-Brabant",
  // TODO: vervang door het echte telefoonnummer en e-mailadres van Thijs
  phone: "06 12 34 56 78",
  phoneHref: "tel:+31612345678",
  email: "thijs@voorbeeld.nl",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/over-thijs", label: "Over Thijs" },
  { href: "/aanpak", label: "Aanpak" },
  { href: "/contact", label: "Contact" },
] as const;

export type ExperienceItem = {
  period: string;
  role: string;
  organisation: string;
  location?: string;
  description?: string;
};

// Nieuwe rollen bovenaan toevoegen; de tijdlijn toont ze in deze volgorde.
export const experience: ExperienceItem[] = [
  {
    period: "April 2024 – heden",
    role: "Eigenaar",
    organisation: "de excellente dienstverlener",
    location: "Nuenen",
    description:
      "Zelfstandig adviseur, trainer, projectleider en coach. Ik help organisaties grip te krijgen op het werk, met teams die goed samenwerken en klanten die dat merken.",
  },
];
