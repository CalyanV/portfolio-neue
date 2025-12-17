/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Temporarily disable CSS minification for Tailwind v4 compatibility
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
