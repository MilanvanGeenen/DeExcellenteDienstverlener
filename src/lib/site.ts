import { BASE_PATH, SITE_URL } from "@/lib/siteUrl";

export { SITE_URL };

export const site = {
  name: "de excellente dienstverlener",
  tagline: "Teamontwikkeling, training, coaching en advies voor mensen en organisaties.",
  phone: "06 48 78 18 09",
  phoneHref: "tel:+31648781809",
  phoneIntl: "+31648781809",
  email: "info@deexcellentedienstverlener.nl",
  city: "Nuenen",
  region: "Noord-Brabant",
  linkedin: "https://www.linkedin.com/in/thijsvangeenen/",
} as const;

// Pad binnen de site (met basispad), voor bestanden in /public.
export const asset = (path: string) => `${BASE_PATH}${path}`;

// Volledige URL van een pagina, voor canonical, Open Graph en gestructureerde data.
export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

export type NavLink = { href: string; label: string; children?: NavLink[] };

export const services = [
  {
    slug: "teamontwikkeling",
    href: "/teamontwikkeling/",
    title: "Teamontwikkeling",
    linkLabel: "Meer over teamontwikkeling",
    summary: "Van gedoe naar vertrouwen, eigenaarschap en resultaat.",
  },
  {
    slug: "training-coaching",
    href: "/training-coaching/",
    title: "Training & Coaching",
    linkLabel: "Meer over training & coaching",
    summary: "Vaardigheden en gedrag die ook na de training blijven hangen.",
  },
  {
    slug: "advies",
    href: "/advies/",
    title: "Advies",
    linkLabel: "Meer over advies",
    summary: "Van vraagstuk naar een aanpak die de organisatie verder helpt.",
  },
] as const;

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/werkwijze/", label: "Werkwijze" },
  {
    href: "/diensten/",
    label: "Diensten",
    children: services.map((s) => ({ href: s.href, label: s.title })),
  },
  { href: "/over-ons/", label: "Over ons" },
  { href: "/contact/", label: "Contact" },
];

// Zelfde volgorde als de labels rond de cirkel in de intro.
export const pillars = [
  { title: "Klantgerichtheid", text: "Ken je klanten. Begrijp hun behoeften, wensen en verlangens." },
  { title: "Communicatie", text: "De sleutel tot een goede klantbeleving en samenwerking." },
  { title: "Slimmer samenwerken", text: "Organiseer werk efficiënt en effectief." },
  { title: "Continu leren & verbeteren", text: "Blijf jezelf ontwikkelen, zodat diensten relevant blijven." },
] as const;

export const workSteps = [
  {
    title: "Verkennen",
    short: "Wat speelt er werkelijk?",
    question: "Wat speelt er werkelijk?",
    text: "Voordat we conclusies trekken, gaan we in gesprek: met de opdrachtgever, maar ook met de mensen die er middenin zitten. Wat is de vraag zoals die wordt gesteld, en wat zit daar mogelijk nog achter?",
  },
  {
    title: "Begrijpen",
    short: "Waar komt het vraagstuk vandaan?",
    question: "Waar komt het vraagstuk vandaan?",
    text: "We kijken naar de context: de geschiedenis, de cultuur, de structuur en de patronen die maken dat een vraagstuk is ontstaan zoals het is. Pas met dat begrip kiezen we een aanpak die verder gaat dan symptoombestrijding.",
  },
  {
    title: "Richting bepalen",
    short: "Wat willen we samen bereiken?",
    question: "Wat willen we bereiken?",
    text: "We maken concreet wat succes betekent voor deze specifieke situatie: welk gedrag, welke resultaten en welke verandering we samen nastreven.",
  },
  {
    title: "In beweging komen",
    short: "Welke aanpak past hierbij?",
    question: "Welke interventie past?",
    text: "Op basis van de vorige stappen kiezen we de vorm die het beste past: een teamtraject, een training, coaching, advies of een combinatie. Altijd maatwerk.",
  },
  {
    title: "Toepassen",
    short: "Het geleerde landt in de praktijk.",
    question: "Hoe komt het geleerde in de praktijk terecht?",
    text: "Inzicht alleen is niet genoeg. We zorgen dat mensen nieuwe afspraken, vaardigheden en gedrag toepassen in hun dagelijkse werk, ook buiten de trainingsruimte.",
  },
  {
    title: "Verbeteren",
    short: "Wat werkt, houden we vast.",
    question: "Wat werkt, wat kan beter, wat houden we vast?",
    text: "We evalueren samen wat het traject heeft opgeleverd, en zorgen dat waardevolle inzichten en gewoontes blijven bestaan, ook nadat wij niet meer betrokken zijn.",
  },
] as const;

export type Faq = { question: string; answer: string };
