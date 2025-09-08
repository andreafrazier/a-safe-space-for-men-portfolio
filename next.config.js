/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime }) => {
    // Fix path resolution for TypeScript aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    };

    // Ensure proper module resolution
    config.resolve.modules = [
      path.join(__dirname, 'src'),
      'node_modules'
    ];

    // Force case-sensitive path resolution (important for Netlify)
    config.resolve.symlinks = false;

    return config;
  },

  // Image optimization
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
};

module.exports = nextConfig;