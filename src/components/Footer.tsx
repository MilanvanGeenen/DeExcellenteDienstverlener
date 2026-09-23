import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-20">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl tracking-tight">{site.name}</p>
          <p className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-cream/60">{site.brand}</p>
          <p className="mt-6 max-w-xs text-cream/75">
            Geen dikke rapporten, maar direct zichtbaar resultaat.
          </p>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-cream/60">
            Contact
          </h2>
          <ul className="mt-5 space-y-2 text-[1.05rem]">
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-sand-deep">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-sand-deep">
                {site.email}
              </a>
            </li>
            <li className="text-cream/75">{site.location}</li>
          </ul>
        </div>

        <nav aria-label="Footermenu" className="md:col-span-3">
          <h2 className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-cream/60">
            Menu
          </h2>
          <ul className="mt-5 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cream/85 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-cream/60 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.brand}
          </p>
          <p>Zelfstandig sinds april 2024</p>
        </div>
      </div>
    </footer>
  );
}
