import Image from "next/image";
import { asset } from "@/lib/site";

// Verhouding van logo.svg (breedte : hoogte = 7.15 : 1).
export function Logo({
  variant = "licht",
  height = 44,
  alt,
  priority = false,
}: {
  variant?: "licht" | "donker";
  height?: number;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={asset(variant === "donker" ? "/logo-donker.svg" : "/logo.svg")}
      alt={alt}
      width={Math.round(height * 7.15)}
      height={height}
      priority={priority}
      unoptimized
    />
  );
}
