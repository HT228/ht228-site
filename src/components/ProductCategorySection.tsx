"use client";

import Image from "next/image";

const categories = [
  {
    name: "Xốp nổ",
    frontImg: "/assets/images/xop_foam.jpg",
    backImg: "/assets/images/24_7_support.png",
    href: "https://zalo.me/738042415649016822",
  },
  {
    name: "Băng keo PE",
    frontImg: "/assets/images/bang_keo_pe.jpg",
    backImg: "/assets/images/big_sale.png",
    href: "https://zalo.me/738042415649016822",
  },
  {
    name: "Thùng carton",
    frontImg: "/assets/images/hop_ship_cod.jpg",
    backImg: "/assets/images/gia_tot.png",
    href: "https://zalo.me/738042415649016822",
  },
  {
    name: "Túi đóng hàng",
    frontImg: "/assets/images/tubong.png",
    backImg: "/assets/images/m2tui.jpg",
    href: "https://zalo.me/738042415649016822",
  },
];

export default function ProductCategorySection() {
  return (
    <section
      aria-labelledby="product-category-heading"
      className="py-8 px-4"
    >
      <h3
        id="product-category-heading"
        className="text-2xl font-bold mb-6 text-center"
      >
        Sản phẩm chủ lực
      </h3>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.name} className="group perspective w-64 h-64">
            <div className="relative w-full h-full duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front side */}
              <a
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4 backface-hidden"
              >
                <div className="w-24 h-24 mb-4">
                  <Image
                    src={cat.frontImg}
                    alt={cat.name}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-center">
                  {cat.name}
                </h4>
              </a>
              {/* Back side */}
              <div className="absolute inset-0 bg-white rounded-lg shadow-lg flex items-center justify-center p-4 rotate-y-180 backface-hidden">
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-300 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-pink-600 animate-spin"></div>
                  <Image
                    src={cat.backImg}
                    alt={`${cat.name} feature`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

