import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, services, site } from "@/lib/site";
import { EmailAdres } from "@/components/ui";

// Het jaartal wordt bij het bouwen in de HTML gezet, dus het klopt ook zonder JavaScript.
const jaar = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="inline-block">
            <Logo variant="donker" height={40} alt="de excellente dienstverlener, naar de homepage" />
          </Link>
          <p className="mt-6 max-w-xs">
            Wij helpen mensen, teams en organisaties samenwerken, groeien en beter presteren.
          </p>
        </div>

        <nav aria-label="Footermenu">
          <p className="footer-kop">Menu</p>
          <ul className="footer-lijst">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Diensten">
          <p className="footer-kop">Diensten</p>
          <ul className="footer-lijst">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="footer-kop">Contact</p>
          <ul className="footer-lijst">
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <EmailAdres />
              </a>
            </li>
            <li className="footer-gedempt">
              {site.city}, {site.region}
            </li>
            <li>
              <a href={site.linkedin} rel="noopener" target="_blank">
                LinkedIn<span className="sr-only"> (opent in nieuw venster)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer-onder">
          <p>
            © {jaar} {site.name}
          </p>
          <Link href="/privacyverklaring/">Privacyverklaring</Link>
        </div>
      </div>
    </footer>
  );
}
