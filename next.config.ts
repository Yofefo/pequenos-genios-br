import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configurações para o projeto brasileiro */
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configurações específicas para o Brasil
  env: {
    PROJECT_COUNTRY: 'BR',
    PROJECT_NAME: 'pequenos-genios-br',
  },
};

export default nextConfig;