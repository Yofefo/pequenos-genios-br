/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração mínima absoluta
  experimental: {
    optimizeCss: true,
  },
  
  // Compressão básica
  compress: true,
  
  // PWA básico
  async rewrites() {
    return [
      {
        source: '/sw.js',
        destination: '/_next/static/sw.js'
      }
    ]
  },
};

module.exports = nextConfig;