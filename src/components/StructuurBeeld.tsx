import { pillars } from "@/lib/site";

const plekken = ["boven", "rechts", "onder", "links"] as const;
const raster = [50, 100, 150, 250, 300, 350];

// Vierkant = structuur (bouwtekening), ingeschreven cirkel = mensen in beweging,
// die alle vier de zijden raakt: op elk raakpunt staat een pijler.
// De cirkel is een HTML-element, zodat de ademing door de grafische kaart wordt gedaan.
export function StructuurBeeld() {
  return (
    <figure className="structuur">
      <div className="structuur-gloed" aria-hidden="true" />
      <div className="structuur-vlak">
        <svg className="structuur-laag teken-raster" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
          <g stroke="var(--blauw-logo)" fill="none">
            <g strokeOpacity="0.09">
              {raster.map((p) => (
                <g key={p}>
                  <line x1={p} y1="0" x2={p} y2="400" vectorEffect="non-scaling-stroke" />
                  <line x1="0" y1={p} x2="400" y2={p} vectorEffect="non-scaling-stroke" />
                </g>
              ))}
            </g>
            <g strokeOpacity="0.2" strokeDasharray="4 6">
              <line x1="200" y1="0" x2="200" y2="400" vectorEffect="non-scaling-stroke" />
              <line x1="0" y1="200" x2="400" y2="200" vectorEffect="non-scaling-stroke" />
            </g>
            <g strokeOpacity="0.07">
              <line x1="0" y1="0" x2="400" y2="400" vectorEffect="non-scaling-stroke" />
              <line x1="400" y1="0" x2="0" y2="400" vectorEffect="non-scaling-stroke" />
            </g>
            <path
              strokeOpacity="0.45"
              strokeWidth="1.5"
              d="M-22 0h12M0 -22v12M422 0h-12M400 -22v12M-22 400h12M0 422v-12M422 400h-12M400 422v-12"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>

        <div className="structuur-laag cirkel-vul" aria-hidden="true">
          <div className="cirkel" />
        </div>

        <svg className="structuur-laag" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
          <rect
            className="teken-vierkant"
            x="0.75"
            y="0.75"
            width="398.5"
            height="398.5"
            fill="none"
            stroke="var(--blauw-logo)"
            strokeWidth="1.5"
            pathLength={1}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {pillars.map((p, i) => (
          <span
            key={p.title}
            className="structuur-label"
            data-plek={plekken[i]}
            style={{ "--label-vertraging": `${1.9 + i * 0.12}s` } as React.CSSProperties}
          >
            {p.title}
          </span>
        ))}
      </div>
      <figcaption className="structuur-onderschrift">Mensen. Teams. Organisaties. In beweging.</figcaption>
    </figure>
  );
}
