"use client";

type Product = {
  front: string;
  back: string;
  label: string;
};

const products: Product[] = [
  {
    front: "/images/xop_foam.jpg",
    back: "/images/big_sale.png",
    label: "Xốp nổ & Foam",
  },
  {
    front: "/images/hop_ship_cod.jpg",
    back: "/images/gia_tot.png",
    label: "Hộp ship COD",
  },
  {
    front: "/images/tui_giay_in.jpg",
    back: "/images/m2tui.jpg",
    label: "Túi PE – Giấy in",
  },
  {
    front: "/images/bang_keo_pe.jpg",
    back: "/images/24_7_support.png",
    label: "Băng keo – PE",
  },
];

export default function ProductCircle3D() {
  return (
    <section className="w-full py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Sản phẩm nổi bật</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((item, i) => (
          <div
            key={i}
            className="w-40 h-40 rounded-full perspective group relative"
          >
            <div className="w-full h-full duration-700 transform-style preserve-3d group-hover:rotate-y-180 transition">
              <img
                src={item.front}
                alt={item.label}
                className="absolute w-full h-full object-cover rounded-full backface-hidden"
              />
              <img
                src={item.back}
                alt={item.label}
                className="absolute w-full h-full object-cover rounded-full rotate-y-180 backface-hidden"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

