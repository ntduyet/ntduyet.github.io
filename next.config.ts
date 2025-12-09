import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

module.exports = nextConfig;
