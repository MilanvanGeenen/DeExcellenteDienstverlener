import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const paginas = [
  { path: "/", priority: 1 },
  { path: "/werkwijze/", priority: 0.8 },
  { path: "/diensten/", priority: 0.9 },
  { path: "/teamontwikkeling/", priority: 0.8 },
  { path: "/training-coaching/", priority: 0.8 },
  { path: "/advies/", priority: 0.8 },
  { path: "/over-ons/", priority: 0.7 },
  { path: "/contact/", priority: 0.7 },
  { path: "/privacyverklaring/", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  return paginas.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: nu,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
