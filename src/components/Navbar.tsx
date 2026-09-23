"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";
import { ButtonLink } from "@/components/Button";
import { softEase } from "@/components/FadeIn";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
          scrolled || open ? "border-line bg-cream/90 backdrop-blur-md" : "border-transparent bg-cream"
        }`}
      >
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
        >
          Naar de inhoud
        </a>

        <nav aria-label="Hoofdmenu" className="container-page flex h-[4.5rem] items-center justify-between md:h-20">
          <Link href="/" onClick={() => setOpen(false)} className="flex flex-col leading-none">
            <span className="font-serif text-[1.2rem] tracking-tight md:text-[1.35rem]">{site.name}</span>
            <span className="mt-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-ink-soft">{site.brand}</span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-2 text-[0.95rem] transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-forest after:transition-transform after:duration-500 after:ease-soft ${
                        active
                          ? "text-ink after:scale-x-100"
                          : "text-ink-soft after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ButtonLink href="/contact" arrow={false} className="px-6 py-3 text-[0.925rem]">
              Plan een gesprek
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobiel-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            className="-mr-2 flex size-11 items-center justify-center rounded-full transition-colors hover:bg-sand lg:hidden"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ease-soft ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ease-soft ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Buiten de header: backdrop-blur zou anders het fixed menu insluiten. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobiel-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: softEase }}
            className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-cream md:top-20 lg:hidden"
          >
            <div className="container-page flex min-h-full flex-col justify-between gap-12 pb-10 pt-8">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: softEase, delay: 0.05 + i * 0.06 }}
                      className="border-b border-line"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between py-5 font-serif text-[2rem] leading-tight ${
                          active ? "text-forest" : "text-ink"
                        }`}
                      >
                        {link.label}
                        {active && <span aria-hidden="true" className="size-2 rounded-full bg-forest" />}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: softEase, delay: 0.3 }}
                className="flex flex-col gap-6"
              >
                <ButtonLink href="/contact" onClick={() => setOpen(false)} className="w-full">
                  Plan een gesprek
                </ButtonLink>
                <div className="flex flex-col gap-1 text-ink-soft">
                  <a href={site.phoneHref} className="hover:text-forest">
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="hover:text-forest">
                    {site.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
