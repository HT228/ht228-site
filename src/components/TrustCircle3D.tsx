"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const trustIcons = [
  {
    front: "/assets/images/shipping_1.svg",
    back: "/assets/images/mat2vanchuyen.jpg",
    label: "Giao vận chuyên nghiệp",
    desc: "Ship toàn quốc – An toàn – Nhanh chóng",
    aura: "from-blue-400 via-cyan-200 to-emerald-200",
  },
  {
    front: "/assets/images/check.svg",
    back: "/assets/images/mat2kiemtra.png",
    label: "Kiểm tra 2 lớp",
    desc: "Đóng gói tiêu chuẩn – Chống bom hàng",
    aura: "from-violet-400 via-pink-200 to-orange-200",
  },
  {
    front: "/assets/images/quality.svg",
    back: "/assets/images/mat2chatluong.png",
    label: "Chất lượng đảm bảo",
    desc: "Cam kết chuẩn HT228 – Đổi trả 1-1",
    aura: "from-yellow-300 via-orange-200 to-pink-200",
  },
];

export default function TrustCircle3D() {
  const [flipped, setFlipped] = useState([false, false, false]);
  const handleFlip = (idx: number) => {
    setFlipped(f => f.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="py-12 px-2 md:px-0" aria-label="Khối lý do khách chọn HT228">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-700 drop-shadow-lg tracking-wide">
        Vì sao khách chọn HT228?
      </h2>
      <div className="flex justify-center gap-8 flex-nowrap overflow-x-auto">
        {trustIcons.map((t, i) => (
          <div
            key={i}
            className="group cursor-pointer select-none relative"
            onMouseEnter={() => handleFlip(i)}
            onMouseLeave={() => handleFlip(i)}
            style={{ perspective: 1300, minWidth: 220, height: 285 }}
            aria-label={`Lý do ${i + 1}: ${t.label}`}
          >
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-60 z-0 transition duration-700 scale-110 pointer-events-none bg-gradient-to-br ${t.aura}`}></div>
            <motion.div
              className="relative w-full h-full rounded-3xl glassmorphism border-4 border-white shadow-2xl group-hover:shadow-blue-400 transition-all duration-700 z-10"
              style={{
                transformStyle: "preserve-3d",
                background: "linear-gradient(120deg,rgba(255,255,255,0.85),#e3f0ff 88%)",
                border: flipped[i] ? "4px solid #42a5f5" : "4px solid #fff",
              }}
              animate={{
                rotateY: flipped[i] ? 180 : 0,
                scale: flipped[i] ? 1.13 : 1,
                filter: flipped[i] ? "drop-shadow(0 0 50px #42a5f5) brightness(1.17)" : "none",
              }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 110px 32px #42a5f5, 0 0 50px 16px #ffd700",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ backfaceVisibility: "hidden" }}>
                <div className="w-28 h-28 rounded-full overflow-hidden bg-white/80 shadow-2xl border-2 border-indigo-400 flex items-center justify-center mb-2 animate-spin-slow relative">
                  <img src={t.front} alt={t.label} className="w-24 h-24 object-contain drop-shadow-lg" />
                  <span className="absolute w-14 h-14 bg-white/20 left-2 top-2 rounded-full blur-2xl opacity-60 animate-pulse"></span>
                </div>
                <span className="font-bold text-blue-800 text-lg mt-3 mb-1 text-center tracking-tight drop-shadow">{t.label}</span>
                <span className="text-[15px] text-center text-gray-600 font-medium">{t.desc}</span>
              </div>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", filter: "drop-shadow(0 0 38px #42a5f5) blur(0.8px)" }}
              >
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-2xl bg-white flex items-center justify-center mb-3 border-2 border-indigo-400 relative">
                  <img src={t.back} alt={`Mặt sau - ${t.label}`} className="w-24 h-24 object-cover" />
                  <span className="absolute w-12 h-12 bg-blue-400/20 right-3 bottom-1 rounded-full blur-2xl opacity-50 animate-pulse"></span>
                </div>
                <span className="text-xs text-blue-700 mt-1 font-semibold tracking-wide">Uy tín – bảo hành chính hãng</span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <style>{`
        .glassmorphism {
          background: rgba(255,255,255,0.69);
          box-shadow: 0 6px 36px rgba(34,150,243,0.16), 0 1.5px 12px #ffd70044;
          backdrop-filter: blur(10px);
        }
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(18deg); } }
        .animate-spin-slow { animation: spin-slow 7.5s linear infinite; }
      `}</style>
    </section>
  );
}

