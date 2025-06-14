// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ht228.vn",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

