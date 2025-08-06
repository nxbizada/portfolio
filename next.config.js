/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Removed LinkedIn domain since we're using local images now
      // Add other external domains here if needed in the future
    ],
  },
}

module.exports = nextConfig 