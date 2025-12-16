import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    quality: 90, // Alta qualidade conforme solicitado
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
};

export default nextConfig;
