import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RevealObserver } from "@/components/RevealObserver";
import { organizationJsonLd } from "@/lib/seo";
import { asset, SITE_URL } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Alleen Manrope (koppen, en daarmee de grootste zichtbare tekst) wordt voorgeladen.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  applicationName: "de excellente dienstverlener",
  icons: {
    icon: [
      { url: asset("/icoon.svg"), type: "image/svg+xml" },
      { url: asset("/favicon-32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: asset("/apple-touch-icon.png"), sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Animaties bij scrollen alleen inschakelen als JavaScript draait. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#inhoud"
          className="sr-only-focusable fixed left-4 top-4 z-[60] rounded-full bg-blauw-diep px-5 py-3 font-semibold text-wit-gebroken"
        >
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <RevealObserver />
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
