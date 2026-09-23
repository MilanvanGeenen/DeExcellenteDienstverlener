import Image from "next/image";

type PortraitProps = {
  alt: string;
  src?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function Portrait({
  alt,
  src,
  priority = false,
  className = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: PortraitProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-sand-deep ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 bg-[linear-gradient(160deg,#ede3d4_0%,#dcc8ae_100%)]"
        >
          <div className="absolute left-1/2 top-[24%] aspect-square w-[32%] -translate-x-1/2 rounded-full bg-cream/55" />
          <div className="absolute bottom-0 left-1/2 h-[36%] w-[74%] -translate-x-1/2 rounded-t-full bg-cream/55" />
          <p className="absolute left-6 top-6 text-xs uppercase tracking-[0.16em] text-ink-soft/70">
            Foto van Thijs
          </p>
        </div>
      )}
    </div>
  );
}
