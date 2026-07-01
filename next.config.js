/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // commented out for `next dev` — re-enable before production build
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
