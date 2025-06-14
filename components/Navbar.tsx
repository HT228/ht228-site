"use client";
export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b py-3 flex space-x-8 px-4">
      <a href="/">Trang chủ</a>
      <a href="/san-pham">Sản phẩm</a>
      <a href="/gioi-thieu">Giới thiệu</a>
      <a href="/tin-tuc">Tin tức</a>
      <a href="/khuyen-mai">Khuyến mãi</a>
    </nav>
  );
}

