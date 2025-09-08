/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  
  // Force webpack to resolve TypeScript paths properly
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ensure proper path resolution for TypeScript aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/data': path.resolve(__dirname, 'src/data'),
      '@/lib': path.resolve(__dirname, 'src/lib'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
    };

    return config;
  },

  // Image configuration
  images: {
    domains: ['api.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;