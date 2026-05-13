import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Fail-safe: surface real TS errors but don't block if minor type issues remain
    ignoreBuildErrors: false,
  },
  // nodemailer uses Node.js streams – keep it server-side only, never bundled for client
  serverExternalPackages: ['nodemailer'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
}

export default nextConfig
