// Voorlopige, gestileerde plek voor een foto. Vervangen door een echte foto (WebP) zodra die er is.
export function FotoPlek({ label }: { label: string }) {
  return (
    <div className="foto-plek" role="img" aria-label={`Plek voor foto: ${label}`}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="var(--blauw-logo)" strokeOpacity="0.12">
          <rect x="130" y="80" width="140" height="140" />
          <circle cx="200" cy="150" r="70" />
          <path d="M0 150h400M200 0v300" strokeDasharray="3 6" />
        </g>
      </svg>
      <span aria-hidden="true">Foto {label}</span>
    </div>
  );
}
