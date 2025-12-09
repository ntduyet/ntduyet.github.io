import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ntduyet.github.io",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
