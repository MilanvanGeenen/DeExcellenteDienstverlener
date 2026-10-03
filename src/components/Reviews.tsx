"use client";

import { useRef, useState } from "react";
import reviews from "@/content/reviews.json";

type Review = { organisatie: string; quote: string };

// Een quote tussen blokhaken is nog een placeholder: dan tonen we skeleton-lijnen, geen nep-tekst.
const isPlaceholder = (quote: string) => /^\[.*\]$/.test(quote.trim());

function Kaart({ review, kopie = false }: { review: Review; kopie?: boolean }) {
  const placeholder = isPlaceholder(review.quote);
  return (
    <li className={`review-kaart ${kopie ? "kopie" : ""}`} aria-hidden={kopie || undefined}>
      <span className="review-teken" aria-hidden="true">
        “
      </span>
      {placeholder ? (
        <div className="review-skelet" aria-hidden="true">
          <span style={{ width: "94%" }} />
          <span style={{ width: "80%" }} />
          <span style={{ width: "56%" }} />
        </div>
      ) : (
        <blockquote className="review-quote">
          <p>{review.quote}</p>
        </blockquote>
      )}
      <p className="review-org">
        {placeholder && <span className="sr-only">Ervaring volgt binnenkort: </span>}
        {review.organisatie}
      </p>
    </li>
  );
}

export function Reviews() {
  const [gepauzeerd, setGepauzeerd] = useState(false);
  const venster = useRef<HTMLDivElement>(null);
  const items = reviews as Review[];

  const schuif = (richting: 1 | -1) => {
    const el = venster.current;
    if (!el) return;
    const kaart = el.querySelector<HTMLElement>(".review-kaart");
    el.scrollBy({ left: richting * ((kaart?.offsetWidth ?? 320) + 24), behavior: "smooth" });
  };

  return (
    <div className="reviews" data-gepauzeerd={gepauzeerd}>
      <div ref={venster} className="reviews-venster" tabIndex={0} role="region" aria-label="Ervaringen van organisaties">
        <ul className="reviews-spoor" style={{ "--duur": `${items.length * 14}s` } as React.CSSProperties}>
          {items.map((r) => (
            <Kaart key={r.organisatie} review={r} />
          ))}
          {[1, 2].map((set) => items.map((r) => <Kaart key={`${set}-${r.organisatie}`} review={r} kopie />))}
        </ul>
      </div>
      <div className="reviews-bediening container">
        <button
          type="button"
          className="ronde-knop alleen-bij-beweging"
          onClick={() => setGepauzeerd((v) => !v)}
        >
          {gepauzeerd ? (
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M5 3.5v9l7-4.5-7-4.5Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M4.5 3h2.5v10H4.5zM9 3h2.5v10H9z" />
            </svg>
          )}
          {gepauzeerd ? "Afspelen" : "Pauzeren"}
        </button>
        <button type="button" className="ronde-knop alleen-bij-stilstand" aria-label="Vorige ervaring" onClick={() => schuif(-1)}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
          </svg>
        </button>
        <button type="button" className="ronde-knop alleen-bij-stilstand" aria-label="Volgende ervaring" onClick={() => schuif(1)}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
