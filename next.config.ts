import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // ESLint runs separately in CI; don't block production builds
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
}

export default nextConfig
