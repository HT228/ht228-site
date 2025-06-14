/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'], // chỉ định đúng định dạng được Next hỗ trợ
  },
  experimental: {
    appDir: false, // tránh cảnh báo appDir
  },
};

module.exports = nextConfig;

