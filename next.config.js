/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  // Configurações de imagens atualizadas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.github.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Configurações de segurança
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
      ],
    },
  ],

  // Configuração turbopack correta
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js']
  },

  // Configuração experimental corrigida
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;