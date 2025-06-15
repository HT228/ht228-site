"use client";
export default function NewsPromo() {
  // Mẫu data (bạn có thể fetch API hoặc lấy động sau)
  const promos = [
    {
      title: "Tặng dao cắt carton đơn từ 500K",
      link: "/khuyen-mai/tang-dao-cat-carton",
    },
    {
      title: "Freeship toàn bộ đơn nội thành Hà Nội",
      link: "/khuyen-mai/freeship-hn",
    },
    {
      title: "Ưu đãi độc quyền GHSV – giá sỉ, NVC",
      link: "/khuyen-mai/ghsv",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-2">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 py-2 px-4 rounded-xl shadow flex flex-col gap-2 md:flex-row md:gap-6 items-center">
        {promos.map((promo) => (
          <a
            href={promo.link}
            key={promo.title}
            className="text-yellow-800 font-semibold hover:underline hover:text-orange-600 transition"
          >
            <span className="mr-2">🎉</span>
            {promo.title}
          </a>
        ))}
      </div>
    </div>
  );
}

