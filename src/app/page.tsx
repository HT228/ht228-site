// src/app/page.tsx
"use client";

import SearchBar from "../components/Header/SearchBar";
import BannerSlider from "../components/BannerSlider";
import FlashDeal from "../components/FlashDeal";
import TrustCircle3D from "../components/TrustCircle3D";
import ProductCircle3D from "../components/ProductCircle3D";
import NewsPromo from "../components/NewsPromo";
import FeaturedArticles from "../components/FeaturedArticles";
import PopupGHSV from "../components/PopupGHSV";
import CallToAction from "../components/CallToAction";
import HookIntro from "../components/HookIntro";

export const metadata = {
  title: "HT228 – Tổng kho đóng gói thông minh | Giải pháp tối ưu cho shop online",
  description: "Cung cấp xốp nổ, hộp carton, băng keo… freeship cho shop online Hà Nội, Bắc Bộ.",
  metadataBase: new URL("https://ht228.vn"),
  openGraph: {
    url: "https://ht228.vn",
    title: "HT228 – Tổng kho đóng gói thông minh",
    description: "Cung cấp xốp nổ, hộp carton, băng keo… freeship cho shop online Hà Nội, Bắc Bộ.",
    images: [{ url: "https://ht228.vn/og-image.png", width: 1200, height: 630 }],
    siteName: "HT228",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HT228vn",
  },
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 py-6">
      <SearchBar />
      <BannerSlider />
      <FlashDeal />
      <TrustCircle3D />
      <ProductCircle3D />
      <NewsPromo />
      <FeaturedArticles />
      <PopupGHSV />
      <CallToAction />
      <HookIntro />
    </div>
  );
}

