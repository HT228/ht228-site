"use client";
import SEO from "../components/SEO";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BannerSlider from "../components/BannerSlider";
import FlashDeal from "../components/FlashDeal";
import TrustCircle3D from "../components/TrustCircle3D";
import ProductCategorySection from "../components/ProductCategorySection";
import Footer from "../components/Footer";
import ZaloFloatingIcon from "../components/ZaloFloatingIcon";

export default function Home() {
  return (
    <>
      <SEO
        title="HT228 – Tổng kho đóng gói thông minh | Giải pháp tối ưu cho shop online"
        description="Tổng kho HT228 – Cung cấp xốp nổ, hộp carton, băng keo, giải pháp đóng gói tiết kiệm, an toàn, freeship cho shop online Hà Nội, Bắc Bộ."
        keywords="HT228, đóng gói, xốp nổ, hộp carton, vận chuyển, tiết kiệm, shop online, Hà Nội, Bắc Bộ"
        image="https://ht228.vn/og-image.png"
        url="https://ht228.vn"
      />
      <Topbar />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 pb-32">
        <div className="max-w-6xl mx-auto space-y-10">
          <SearchBar />
          <BannerSlider />
          <FlashDeal />
          <TrustCircle3D />
          <ProductCategorySection />
        </div>
      </main>
      <Footer />
      <ZaloFloatingIcon />
    </>
  );
}

