import type { NextConfig } from "next";

// Op GitHub Pages staat de site in een submap (/<repo-naam>); lokaal blijft dit leeg.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
