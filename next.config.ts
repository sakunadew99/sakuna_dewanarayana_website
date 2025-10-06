import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRITICAL: Enable standalone output for Docker
  output: 'standalone',
  
  // Optional: Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;