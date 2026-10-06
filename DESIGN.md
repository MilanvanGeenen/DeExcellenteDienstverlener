# DESIGN.md — de excellente dienstverlener

> Rustig, licht en doordacht: structuur geeft houvast, mensen brengen beweging.

Dit document is de ontwerpspecificatie van de website. Het beschrijft wat er in de code staat
(`src/app/globals.css` en de componenten in `src/components/`). Wijzig je het ontwerp, pas dan
eerst dit document aan en daarna de code, zodat beide gelijk blijven.

---

## 1. Visuele sfeer

**Stijl**: licht, Scandinavisch-zakelijk, met een voorjaarsfrisse kleurtoets.
**Kernwoorden**: rustig, helder, warm, deskundig, menselijk, licht, precies.
**Toon**: vertrouwd en energiek, NIET stoffig-corporate en NIET schreeuwerig.
**Gevoel**: een opgeruimde werkplaats op een zonnige voorjaarsochtend, met een blik op de
amandelbloesem van Van Gogh.

**Beeldmotief**: het vierkant met de ingeschreven cirkel. Het vierkant (strakke lijn, raster als
een bouwtekening) staat voor structuur; de cirkel (turquoise verloop) voor mensen in beweging. De
cirkel raakt alle vier de zijden: op elk raakpunt staat een van de vier pijlers.

**Interactieniveau**: L2, vloeiend maar ingetogen. Inschuiven bij scrollen, een krimpende
navigatiebalk, een zelftekenende tijdlijn en een rustig schuivende reviewrij.
**Afhankelijkheden**: alleen CSS en een paar kleine React-componenten. Geen animatiebibliotheek.

## 2. Kleuren en rollen

Alle kleuren staan op één plek in `:root` (`src/app/globals.css`). Gebruik in componenten altijd
een variabele, nooit een losse kleurcode. Voor transparantie zijn er RGB-hulpwaarden.

```css
:root {
  --blauw-diep: #0b3f52;     /* donkere vlakken, footer, Over ons-sectie */
  --blauw-logo: #0e5a75;     /* koppen, navigatie, secundaire knoppen */
  --blauw-fris: #2baab2;     /* vlakken, lijnen, iconen, cirkel, hover; NIET voor kleine tekst op licht */
  --turkoois-tekst: #0a7a84; /* links, nummers, eyebrows op lichte achtergrond */
  --blauw-licht: #dceff0;    /* achtergrondvlakken, zoals de reviews-sectie */
  --wit-gebroken: #f7f4ee;   /* hoofdachtergrond */
  --salie: #9bad8a;          /* fijne details: scheidingslijnen, kruimelpad-tekens */
  --antraciet: #1c2b30;      /* bodytekst */
  --accent-energie: #e9a23b; /* alleen de kennismakingsknop en heel kleine highlights */

  /* RGB-hulpwaarden: rgb(var(--blauw-fris-rgb) / 0.3) */
  --blauw-diep-rgb: 11 63 82;
  --blauw-logo-rgb: 14 90 117;
  --blauw-fris-rgb: 43 170 178;
  --blauw-licht-rgb: 220 239 240;
  --wit-gebroken-rgb: 247 244 238;
  --antraciet-rgb: 28 43 48;
  --accent-energie-rgb: 233 162 59;
}
```

**Verdeling**: circa 60% gebroken wit, 30% blauwtinten, 10% accenten. Per pagina hooguit één
donkerblauwe en één licht-turkooise sectie voor ritme.

**Gemeten contrasten** (WCAG AA = 4,5:1 voor gewone tekst):

| Voorgrond | Achtergrond | Contrast |
| --- | --- | --- |
| `--antraciet` | `--wit-gebroken` | 13,3:1 |
| `--blauw-logo` | `--wit-gebroken` | 7,0:1 |
| `--blauw-logo` | `--blauw-licht` | 6,5:1 |
| `--turkoois-tekst` | `--wit-gebroken` | 4,6:1 |
| `--turkoois-tekst` | wit | 5,1:1 |
| `--blauw-diep` | `--accent-energie` | 5,3:1 |
| `--wit-gebroken` | `--blauw-diep` | 10,4:1 |

**Kleurregels**
- Tekst in `--turkoois-tekst` haalt op `--blauw-licht` geen 4,5:1; gebruik daar `--blauw-logo`.
- Kleine nummers op `--blauw-diep` in `--blauw-licht`, niet in `--blauw-fris` (4,1:1).
- Amber alleen als vulling van de primaire knop, nooit voor grote vlakken of tekst.
- Kleurverlopen in `oklab` voor een egale overgang zonder grauw midden.

## 3. Typografie

Beide lettertypes worden bij het bouwen door `next/font` zelf gehost (`font-display: swap`).
Alleen Manrope wordt vooraf geladen: daarin staan de koppen en dus de grootste zichtbare tekst.

| Rol | Font | Grootte | Gewicht | Regelhoogte | Letterafstand |
| --- | --- | --- | --- | --- | --- |
| Hero H1 | Manrope | clamp(2,35rem → 3,85rem) | 700 | 1,1 | −0,02em |
| Pagina H1 | Manrope | clamp(2,35rem → 4,25rem) | 700 | 1,1 | −0,02em |
| Sectie H2 | Manrope | clamp(1,85rem → 3rem) | 700 | 1,1 | −0,02em |
| H3 | Manrope | clamp(1,2rem → 1,4rem) | 700 | 1,25 | −0,02em |
| Lead | Inter | clamp(1,125rem → 1,3rem) | 400 | 1,6 | — |
| Body | Inter | 17px (mobiel) / 18px (desktop) | 400 | 1,65 | — |
| Eyebrow | Manrope | 13px, hoofdletters | 600 | — | 0,12em |

**Regels**
- Bodytekst maximaal 65 tekens per regel (klasse `leesbreedte`).
- Koppen met `text-wrap: balance`, beschrijvingen met `text-wrap: pretty`.
- Geen schreefletter. Geen lettergewicht onder 400 in tekst kleiner dan 18px.
- Invoervelden minimaal 16px, anders zoomt iOS in.
- **Nooit gebruiken**: serif-fonts, systeemfonts als ontwerpkeuze, meer dan twee families.

## 4. Componenten

### Knoppen
```css
.btn { padding: 14px 28px; border-radius: 999px; font: 700 1rem Manrope;
  transition: background-color .2s ease, box-shadow .2s ease, transform .16s var(--ease-uit); }
.btn-primair { background: var(--accent-energie); color: var(--blauw-diep); box-shadow: var(--schaduw-klein); }
@media (hover: hover) and (pointer: fine) {
  .btn-primair:hover { background: var(--accent-energie-hover); transform: translateY(-2px); box-shadow: var(--schaduw-zacht); }
}
.btn:active { transform: scale(0.97); }          /* indruk-feedback */
:focus-visible { outline: 2px solid var(--blauw-logo); outline-offset: 3px; }
.btn:disabled { cursor: progress; }               /* tijdens versturen: tekst blijft, met laadicoon */
```
Eén primaire knop per beeld: "Plan een kennismaking". Secundaire acties zijn pijl-links.

### Pijl-links
Manrope 700 in `--turkoois-tekst`; de pijl schuift 4px naar rechts bij hover (alleen met muis).
Linkteksten beschrijven de bestemming: "Meer over teamontwikkeling", nooit "Lees meer".

### Kaarten
- Wit vlak, `--schaduw-zacht`, hoeken 24px (dienstkaart) of 16px (overige).
- Geneste hoeken sluiten aan: buitenradius = binnenradius + binnenruimte (24 = 12 + 12).
- Een klikbare kaart gebruikt één echte link die de hele kaart bedekt; de focusring valt om de kaart.
- Hover (alleen met muis): 3–4px optillen, sterkere schaduw. Kaarten zonder link tillen niet op.
- Dienstkaarten krijgen een zacht turquoise lichtvlak dat de muis volgt.

### Navigatie
Sticky. Bij scrollen krimpt de balk (96 → 72px) en krijgt hij een lichte achtergrond met zachte
schaduw. Logo 44px (desktop) / 34px (mobiel). Mobiel: volledig-scherm menu buiten de header.

### Formulier
Labels altijd boven het veld; placeholders zijn geen labels. Valideren bij versturen en bij
verlaten van een veld; foutmelding met icoon en `aria-describedby`, focus naar het eerste fout.
Bij succes: vijf amberkleurige sterren uit het logo lichten één voor één op.

## 5. Layout

- **Container**: max. 75rem, binnenruimte 20px (mobiel) / 32px (tablet) / 40px (desktop).
- **Secties**: 72px (mobiel), 96px (tablet), 120px (desktop) boven en onder.
- **Groeperen met ruimte**: de afstand tussen groepen is minstens twee keer de afstand binnen een groep.
- **Twee kolommen**: kop links (0,8fr), inhoud rechts (1,2fr) vanaf 64rem.
- Opeenvolgende lichte secties worden gescheiden door een dunne saliegroene lijn.

## 6. Diepte en schaduw

Schaduwen zijn neutraal en gelaagd, zonder kleurtint.

| Niveau | Token | Gebruik |
| --- | --- | --- |
| Plat | geen | tekstblokken, secties |
| Klein | `--schaduw-klein` | knop, labels rond de cirkel |
| Zacht | `--schaduw-zacht` | kaarten, formulier, reviews |
| Opgetild | `--schaduw-op` | kaart bij hover of focus |

## 7. Beweging en interactie

**Filosofie**: beweging dient begrip, nooit decoratie op veelgebruikte interacties. Alleen
`transform` en `opacity` animeren. UI-overgangen duren 100–250ms; inschuiven bij scrollen 600ms.

- **Inschuiven bij scrollen**: 16px van onder, 0,6s ease-out, kleine vertraging per item (60–120ms).
- **Intro**: het vierkant tekent zich (1,2s), de cirkel vult zich, daarna verschijnen de vier
  labels; daarna alleen een nauwelijks zichtbare ademing van de cirkel.
- **Reviews**: rij die langzaam van rechts naar links schuift; pauzeert bij hover, focus en met de pauzeknop.
- **Tijdlijn werkwijze**: de lijn tekent zich in zodra hij in beeld komt.
- **Hover**: alleen met een muis (`@media (hover: hover) and (pointer: fine)`), anders blijft
  het effect na een tik hangen.

```css
@media (prefers-reduced-motion: reduce) {
  /* Geen verschuiving of schuivende rij: alleen een korte fade.
     Reviews worden een rij die je zelf veegt of met pijlknoppen bedient. */
  .js .reveal { opacity: 0; transition: opacity .4s ease; }
  .js .reveal.is-zichtbaar { opacity: 1; }
}
```

## 8. Doen en niet doen

### Doen
- Wij-vorm in alle teksten; de bezoeker spreken we aan met je/jouw.
- Eén boodschap per sectie, hooguit één korte alinea en één link of knop.
- Elke kleur via een variabele; transparantie via de RGB-hulpwaarden.
- Elk klikbaar element heeft een hover- én een focusstijl.
- Vertrouwenssignalen dicht bij de knop: "Vrijblijvend. We reageren binnen twee werkdagen."
- Gestructureerde data altijd gelijk aan de zichtbare tekst.

### Niet doen
- ❌ Amber voor grote vlakken of als tekstkleur.
- ❌ Turquoise (`--blauw-fris`) voor kleine tekst op een lichte achtergrond.
- ❌ Schreefletters, of een derde lettertype.
- ❌ Losse kleurcodes in componenten.
- ❌ `filter: blur()` op bewegende elementen, of een `mask` op een schuivend vlak (kost rekenkracht).
- ❌ Hover-effecten die op touchapparaten blijven hangen.
- ❌ Kaarten die optillen terwijl ze niet klikbaar zijn.
- ❌ Verzonnen quotes, cijfers of klantlogo's. Placeholders tonen we als grijze balkjes.
- ❌ Vulwoorden ("echt", "gewoon") en formules als "niet X, maar Y" waar een directe zin volstaat.
- ❌ Review- of AggregateRating-markup voor quotes over onszelf.

## 9. Responsief gedrag

| Naam | Breedte | Belangrijkste veranderingen |
| --- | --- | --- |
| Desktop | ≥ 64rem (1024px) | volledige navigatie, twee kolommen, horizontale tijdlijn |
| Tablet | 48–64rem | hamburgermenu, kaarten naast elkaar, verticale tijdlijn |
| Mobiel | < 48rem | alles onder elkaar, beeld met cirkel onder de tekst |

**Aanraakvlakken**: minimaal 44×44px voor menu- en bedieningsknoppen; tekstlinks krijgen extra
verticale ruimte op touch.
**Inklappen**: navigatie wordt een volledig-scherm menu; de cirkel-labels breken over twee regels
(minimaal 12px); niets loopt horizontaal buiten beeld vanaf 320px breed.
