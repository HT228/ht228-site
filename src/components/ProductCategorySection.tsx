"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const productCategories = [
  {
    name: "Xốp nổ",
    frontImg: "/assets/images/xop_foam.jpg",
    backImg: "/assets/images/24_7_support.png",
    link: "https://zalo.me/738042415649016822",
    desc: "Chống sốc tối ưu, nhẹ, tiết kiệm phí ship."
  },
  {
    name: "Băng keo PE",
    frontImg: "/assets/images/bang_keo_pe.jpg",
    backImg: "/assets/images/big_sale1.png", // Đổi sang big_sale1.png
    link: "https://zalo.me/738042415649016822",
    desc: "Dán chắc chắn, giá tốt, đa dạng kích thước."
  },
  {
    name: "Thùng carton",
    frontImg: "/assets/images/hop_ship_cod.jpg",
    backImg: "/assets/images/gia_tot.png",
    link: "https://zalo.me/738042415649016822",
    desc: "Cứng cáp, nhiều size, nhận in logo."
  },
  {
    name: "Túi đóng hàng",
    frontImg: "/assets/images/tui_giay_in.jpg",
    backImg: "/assets/images/m2tui.jpg",
    link: "https://zalo.me/738042415649016822",
    desc: "Chống thấm, dẻo dai, bảo vệ hàng hóa."
  }
];

export default function ProductCategorySection() {
  const [flipped, setFlipped] = useState([false, false, false, false]);
  const handleFlip = idx => {
    setFlipped(f => f.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">Sản phẩm chủ lực</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {productCategories.map((cat, idx) => (
          <div
            key={cat.name}
            className="group cursor-pointer select-none"
            onMouseEnter={() => handleFlip(idx)}
            onMouseLeave={() => handleFlip(idx)}
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="relative w-44 h-56 rounded-3xl bg-gradient-to-br from-purple-100 via-white to-pink-100 transition-transform border-4 border-transparent group-hover:border-indigo-400 shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.7s cubic-bezier(.23,2,.5,.9)",
                boxShadow: flipped[idx]
                  ? "0 0 60px 20px #9575cd, 0 0 18px 4px #e1bee7"
                  : "0 2px 16px 0 #90caf9"
              }}
              animate={{
                rotateY: flipped[idx] ? 180 : 0,
                scale: flipped[idx] ? 1.07 : 1,
                boxShadow: flipped[idx]
                  ? "0 0 60px 20px #9575cd, 0 0 18px 4px #e1bee7"
                  : "0 2px 16px 0 #90caf9"
              }}
              whileHover={{
                scale: 1.10,
                boxShadow: "0 0 80px 22px #42a5f5, 0 0 20px 8px #ce93d8"
              }}
            >
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
                style={{ backfaceVisibility: 'hidden' }}>
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl border-2 border-indigo-400 bg-white flex items-center justify-center group-hover:shadow-glow">
                  <img src={cat.frontImg} alt={cat.name} className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="font-bold text-blue-800 text-lg mt-4 mb-1 drop-shadow">{cat.name}</span>
                <span className="text-xs text-center text-gray-500 font-normal">{cat.desc}</span>
              </div>
              {/* Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-3xl"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                <img src={cat.backImg} alt={cat.name + '-back'} className="w-24 h-24 mb-4 drop-shadow-lg rounded-xl" />
                <a
                  href={cat.link}
                  className="mt-2 text-indigo-600 underline font-semibold text-sm hover:text-pink-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Liên hệ Zalo OA
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <style>{`
        .shadow-glow {
          box-shadow: 0 0 30px 7px #42a5f5, 0 0 18px 4px #ce93d8;
        }
      `}</style>
    </section>
  );
}

