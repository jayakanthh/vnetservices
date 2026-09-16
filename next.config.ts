import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vnetservices",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
