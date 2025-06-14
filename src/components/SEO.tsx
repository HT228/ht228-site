// src/components/SEO.tsx
import Head from "next/head";

type SEOProps = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

export default function SEO({
  title,
  description = "Tổng kho HT228 – Giải pháp đóng gói, vận chuyển tối ưu.",
  keywords = "HT228, đóng gói, vận chuyển, xốp nổ, carton, băng keo",
  image = "https://ht228.vn/og-image.png",
  url = "https://ht228.vn",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
