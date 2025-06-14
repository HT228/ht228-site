"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const trustIcons = [
  {
    front: "/assets/images/shipping_1.svg",
    back: "/assets/images/mat2vanchuyen.jpg",
    label: "Giao vận chuyên nghiệp",
    desc: "Ship toàn quốc – An toàn – Nhanh chóng",
  },
  {
    front: "/assets/images/check.svg",
    back: "/assets/images/mat2kiemtra.png",
    label: "Kiểm tra 2 lớp",
    desc: "Đóng gói tiêu chuẩn – Chống bom hàng",
  },
  {
    front: "/assets/images/quality.svg",
    back: "/assets/images/mat2chatluong.png",
    label: "Chất lượng đảm bảo",
    desc: "Cam kết chuẩn HT228 – Đổi trả 1-1",
  },
];

export default function TrustCircle3D() {
  const [flipped, setFlipped] = useState([false, false, false]);
  const handleFlip = (idx: number) => {
    setFlipped(f => f.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="py-10" aria-label="Khối lý do khách chọn HT228">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-700 drop-shadow">
        Vì sao khách chọn HT228?
      </h2>
      <div className="flex justify-center gap-8 flex-row flex-nowrap overflow-x-auto">
        {trustIcons.map((t, i) => (
          <div
            key={i}
            className="group cursor-pointer select-none"
            onMouseEnter={() => handleFlip(i)}
            onMouseLeave={() => handleFlip(i)}
            style={{ perspective: 1200, width: 230, height: 270 }}
            aria-label={`Lý do ${i + 1}: ${t.label}`}
          >
            <motion.div
              className="relative w-full h-full rounded-3xl glassmorphism border-4 border-white shadow-2xl group-hover:shadow-blue-400 transition-all duration-700"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: flipped[i]
                  ? "0 0 70px 28px #42a5f5, 0 0 34px 9px #ffd700"
                  : "0 12px 44px 0 #42a5f5, 0 3px 12px #9575cd",
                background:
                  "linear-gradient(120deg,rgba(255,255,255,0.74),#e3f0ff 82%)",
                border: flipped[i]
                  ? "4px solid #42a5f5"
                  : "4px solid #fff",
              }}
              animate={{
                rotateY: flipped[i] ? 180 : 0,
                scale: flipped[i] ? 1.11 : 1,
                filter: flipped[i]
                  ? "drop-shadow(0 0 44px #42a5f5) brightness(1.19)"
                  : "none",
              }}
              whileHover={{
                scale: 1.13,
                boxShadow: "0 0 92px 29px #42a5f5, 0 0 44px 12px #ffd700",
              }}
            >
              {/* Mặt trước */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-white/80 shadow-xl border-2 border-indigo-400 flex items-center justify-center group-hover:shadow-glow mb-2">
                  <img src={t.front} alt={t.label} className="w-20 h-20 object-contain" />
                </div>
                <span className="font-bold text-blue-800 text-xl mt-2 mb-1 text-center">
                  {t.label}
                </span>
                <span className="text-sm text-center text-gray-500 font-medium">
                  {t.desc}
                </span>
              </div>
              {/* Mặt sau */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  filter: "drop-shadow(0 0 38px #42a5f5) blur(0.7px)",
                }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl bg-white flex items-center justify-center mb-3 border-2 border-indigo-400">
                  <img src={t.back} alt={`Mặt sau - ${t.label}`} className="w-20 h-20 object-cover transition-transform duration-500" />
                </div>
                {/* CHỮ KHÔNG BỊ NGƯỢC */}
                <span
                  className="text-base text-blue-700 font-semibold mt-2 animate-fadeIn text-center"
                  style={{
                    transform: "rotateY(180deg)",
                    display: "block",
                    maxWidth: 170,
                  }}
                >
                  Uy tín – bảo hành chính hãng
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      {/* Hiệu ứng custom bóng glow */}
      <style>{`
        .glassmorphism {
          background: rgba(255,255,255,0.70);
          box-shadow: 0 7px 40px rgba(34,150,243,0.18), 0 2.5px 12px #ffd70036;
          backdrop-filter: blur(11px);
        }
        .shadow-glow {
          box-shadow: 0 0 40px 13px #42a5f5, 0 0 24px 8px #ffd700;
        }
        @media (max-width: 900px) {
          .glassmorphism {
            min-width:180px;
            min-height:220px;
          }
        }
      `}</style>
    </section>
  );
}

