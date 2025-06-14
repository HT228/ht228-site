// app/layout.tsx

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata cho SEO toàn site – Next.js tự render <title>, <meta>...
export const metadata: Metadata = {
  title: 'HT228.vn - Tổng kho vận chuyển & đóng gói thông minh',
  description:
    'HT228 – Tổng kho xốp nổ, hộp carton, băng keo, giải pháp đóng gói tiết kiệm, an toàn, freeship cho shop online Hà Nội, Bắc Bộ.',
  keywords: [
    'HT228', 'đóng gói', 'xốp nổ', 'hộp carton', 'vận chuyển', 'shop online', 'tiết kiệm', 'Hà Nội', 'Bắc Bộ'
  ],
  openGraph: {
    title: 'HT228 – Tổng kho đóng gói thông minh',
    description:
      'Chuyên xốp nổ, hộp carton, băng keo giá tốt – Giao hàng nhanh, freeship toàn miền Bắc',
    url: 'https://ht228.vn',
    siteName: 'HT228.vn',
    images: [
      {
        url: 'https://ht228.vn/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HT228 Tổng kho đóng gói thông minh',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

