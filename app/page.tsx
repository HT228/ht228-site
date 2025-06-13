// app/page.tsx
"use client";

import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import BannerSlider from "@/components/BannerSlider";
import FlashDeal from "@/components/FlashDeal";
import TrustIcons from "@/components/TrustIcons";
import ProductCategorySection from "@/components/ProductCategorySection";
import ZaloFloatingIcon from "@/components/ZaloFloatingIcon";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 space-y-16">
        <SearchBar />
        <BannerSlider />
        <FlashDeal />
        <TrustIcons />
        <ProductCategorySection />
      </main>
      <ZaloFloatingIcon />
    </>
  );
}

