"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <h3 className="font-bold mb-2">HT228</h3>
          <p>Kho đóng gói thông minh</p>
          <p>Hotline: 0975 257 980</p>
          <p>Email: ceo@tongkhoht228.com</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Điều hướng</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Trang chủ</a></li>
            <li><a href="/san-pham" className="hover:underline">Sản phẩm</a></li>
            <li><a href="/tin-tuc" className="hover:underline">Tin tức</a></li>
            <li><a href="/lien-he" className="hover:underline">Liên hệ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Theo dõi chúng tôi</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Tongkhoxopnohopshipcodbangkeo?locale=vi_VN" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href="https://www.youtube.com/@Giaiphapdonggoitietkiem" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
            <a href="#" className="hover:text-white">Zalo</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">© 2025 HT228. Bảo lưu mọi quyền.</div>
    </footer>
  );
}
