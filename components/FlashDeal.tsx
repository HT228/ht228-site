"use client";
import { useEffect, useState } from "react";

export default function FlashDeal() {
  // Countdown đến hết ngày
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    // Đếm ngược tới 23:59:59 hôm nay
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const diff = Math.max(0, end.getTime() - now.getTime());
    const h = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
    const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-4 rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white">
        <div className="flex items-center gap-3 text-lg md:text-xl font-bold">
          <span role="img" aria-label="deal">🔥</span>
          Flash Deal Đặc Biệt!
          <span role="img" aria-label="gift">🎁</span>
        </div>
        <a href="/khuyen-mai" className="bg-white text-pink-600 font-semibold px-4 py-1 rounded-xl shadow hover:scale-105 transition">
          Mua ngay
        </a>
      </div>
      <div className="bg-gradient-to-r from-pink-200 via-yellow-100 to-yellow-50 px-6 py-3 flex justify-between items-center">
        <div className="font-semibold text-pink-700 text-base md:text-lg">
          Tặng dao cắt cho đơn hàng 500K trở lên
        </div>
        <div className="flex items-center gap-2 text-pink-700 text-base md:text-lg font-bold">
          <span>Còn lại:</span>
          <span className="bg-white text-pink-600 px-2 py-1 rounded shadow font-mono tracking-widest">{timeLeft}</span>
        </div>
      </div>
    </div>
  );
}

