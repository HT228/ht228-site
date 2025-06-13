"use client";

import Topbar                   from "@/components/Topbar";
import Navbar                   from "@/components/Navbar";
import SearchBar                from "@/components/SearchBar";
import BannerSlider             from "@/components/BannerSlider";
import FlashDeal                from "@/components/FlashDeal";
import TrustIcons               from "@/components/TrustIcons";
import ProductCategorySection   from "@/components/ProductCategorySection";
// import TrustCircle3D          from "@/components/TrustCircle3D"; // ← Đã loại bỏ khối 3D cuối
import ZaloFloatingIcon         from "@/components/ZaloFloatingIcon";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />

      <main className="min-h-screen bg-white text-gray-900 space-y-16">
        {/* Tìm kiếm */}
        <SearchBar />

        {/* Banner */}
        <BannerSlider />

        {/* Flash Deal */}
        <FlashDeal />

        {/* Các icon uy tín */}
        <TrustIcons />

        {/* Sản phẩm chủ lực */}
        <ProductCategorySection />

        {/*
          Khối 3D cuối đã bị loại bỏ:
          <TrustCircle3D />
        */}
      </main>

      {/* Nút Zalo OA nổi */}
      <ZaloFloatingIcon />
    </>
  );
}

