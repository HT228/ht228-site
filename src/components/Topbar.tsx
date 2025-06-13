"use client";

import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs py-2 px-4 flex justify-between items-center sticky top-0 z-50 text-sm">
      {/* Logo trái */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo_ht228.jpg"
          alt="HT228 Logo"
          width={32}
          height={32}
          className="rounded-sm bg-white p-1"
        />
        <span className="font-bold text-white">Tổng kho HT228</span>
      </div>

      {/* Thông báo giữa */}
      <div className="text-center hidden sm:block italic tracking-wide">
        Miễn phí giao hàng cho đơn từ 1 triệu đồng 🎉
      </div>

      {/* Hotline phải */}
      <div className="text-right font-medium">
        ☎ Hotline: <span className="font-bold">097 525 7980</span>
      </div>
    </div>
  );
}

