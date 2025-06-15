"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b py-3 flex space-x-8 px-4">
      <Link href="/">Trang chủ</Link>
      <Link href="/san-pham">Sản phẩm</Link>
      <Link href="/gioi-thieu">Giới thiệu</Link>
      <Link href="/tin-tuc">Tin tức</Link>
      <Link href="/khuyen-mai">Khuyến mãi</Link>
    </nav>
  );
}

