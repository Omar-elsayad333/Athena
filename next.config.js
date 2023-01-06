/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // unoptimized: false,
    domains: ['athena.linkers.at']
  },
}

module.exports = nextConfig
