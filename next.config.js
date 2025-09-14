/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Enable static export for Netlify Forms compatibility
  output: 'export',
  
  // React settings
  reactStrictMode: true,
  
  // Handle trailing slashes for static export
  trailingSlash: true,
  
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

  // Updated image optimization for static export
  images: {
    unoptimized: true, // Required for static export
    domains: [], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://asafespaceformen.netlify.app',
  },
  
  // Disable server-side features for static export
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;