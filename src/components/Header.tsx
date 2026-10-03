"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { KennismakingKnop, EmailAdres } from "@/components/ui";
import { navLinks, site } from "@/lib/site";

const isActief = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [gescrold, setGescrold] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setGescrold(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia("(min-width: 64rem)");
    const sluit = () => setMenuOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && sluit();
    const onResize = () => desktop.matches && sluit();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!submenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSubmenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [submenuOpen]);

  const sluitAlles = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <>
      <header className="site-header" data-gescrold={gescrold || menuOpen}>
        <div className="container header-rij">
          <Link href="/" className="logo-link" onClick={sluitAlles}>
            <Logo alt="de excellente dienstverlener, naar de homepage" priority />
          </Link>

          <nav aria-label="Hoofdmenu" className="hoofdmenu">
            <ul className="menu-lijst">
              {navLinks.map((link) =>
                link.children ? (
                  <li
                    key={link.href}
                    className="menu-item"
                    data-open={submenuOpen}
                    onMouseLeave={() => setSubmenuOpen(false)}
                  >
                    <span className="inline-flex items-center">
                      <Link
                        href={link.href}
                        className="menu-link"
                        aria-current={pathname === link.href ? "page" : undefined}
                        data-actief={link.children.some((c) => isActief(pathname, c.href)) || isActief(pathname, link.href)}
                        onClick={sluitAlles}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        className="submenu-knop"
                        aria-expanded={submenuOpen}
                        aria-controls="submenu-diensten"
                        aria-label="Submenu Diensten tonen"
                        onClick={() => setSubmenuOpen((v) => !v)}
                      >
                        <Chevron />
                      </button>
                    </span>
                    <ul id="submenu-diensten" className="submenu">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            onClick={sluitAlles}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="menu-link"
                      aria-current={isActief(pathname, link.href) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <KennismakingKnop compact />
          </nav>

          <button
            type="button"
            className="menu-knop"
            aria-expanded={menuOpen}
            aria-controls="mobiel-menu"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-knop-lijnen" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div id="mobiel-menu" className="mobiel-menu" data-open={menuOpen} inert={!menuOpen}>
        <nav aria-label="Mobiel menu" className="container mobiel-menu-binnen">
          <ul className="mobiel-menu-lijst">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hoofd"
                  aria-current={isActief(pathname, link.href) && pathname === link.href ? "page" : undefined}
                  onClick={sluitAlles}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="mobiel-sub">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={sluitAlles}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-6">
            <Link href="/contact/" className="btn btn-primair" onClick={sluitAlles}>
              Plan een kennismaking
            </Link>
            <div className="grid gap-1 text-[1.05rem]">
              <a href={site.phoneHref} className="font-semibold text-blauw-logo">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="text-blauw-logo">
                <EmailAdres />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
