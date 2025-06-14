"use client";
import { useEffect, useState, useRef } from "react";

const banners = [
  { img: "/images/ht228-banner-1.webp", alt: "Xốp nổ HT228 bảo vệ hàng hóa tuyệt đối" },
  { img: "/images/ht228-banner-2.webp", alt: "Kho đóng gói HT228 – Hộp carton siêu bền" },
  { img: "/images/ht228-banner-3.webp", alt: "HT228 – Băng keo, PE, freeship cho shop Hà Nội" }
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto chuyển slide, dừng khi hover
  useEffect(() => {
    if (isHover) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isHover]);

  // Chuyển slide
  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  const next = () => setCurrent((prev) => (prev + 1) % banners.length);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto mt-6 mb-10 rounded-3xl shadow-2xl bg-white/80 border border-blue-100 backdrop-blur-xl transition-all duration-500"
      style={{ zIndex: 10, boxShadow: "0 12px 36px 0 #1e40af33, 0 2px 4px 0 #1e40af11" }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Ảnh banner */}
      <img
        src={banners[current].img}
        alt={banners[current].alt}
        className="w-full object-cover h-56 md:h-80 transition-all duration-700 scale-105 hover:scale-110 rounded-3xl select-none"
        draggable={false}
        loading="eager"
        fetchpriority="high"
      />
      {/* Nút prev/next */}
      <button
        aria-label="Trước"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-600 hover:text-white text-blue-800 shadow-xl rounded-full p-2 z-20 transition-all border border-blue-300"
        style={{ boxShadow: "0 4px 16px #0001" }}
        onClick={prev}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M15 6l-6 6 6 6"/></svg>
      </button>
      <button
        aria-label="Sau"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-600 hover:text-white text-blue-800 shadow-xl rounded-full p-2 z-20 transition-all border border-blue-300"
        style={{ boxShadow: "0 4px 16px #0001" }}
        onClick={next}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 6l6 6-6 6"/></svg>
      </button>
      {/* Dãy chấm chuyển nhanh */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {banners.map((b, idx) => (
          <button
            aria-label={`Chọn banner ${idx + 1}`}
            key={b.img}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border border-blue-600 transition-colors duration-300 ${
              idx === current ? "bg-blue-600 shadow-lg scale-125" : "bg-white"
            }`}
          />
        ))}
      </div>
      {/* Caption alt nổi bật */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs md:text-sm px-4 py-1 rounded-full shadow-xl">
        {banners[current].alt}
      </div>
    </div>
  );
}

