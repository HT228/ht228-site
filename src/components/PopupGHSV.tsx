"use client";
import { useEffect, useState } from "react";

export default function PopupGHSV() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("popupGHSV") === "hidden") {
      setShow(false);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("popupGHSV", "hidden");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xs w-full p-4 flex flex-col items-center animate-pop">
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-10 h-10 text-2xl flex items-center justify-center shadow-lg hover:bg-red-700 transition"
          aria-label="Đóng popup"
        >
          ×
        </button>
        <img
          src="/images/ghsv_ht228.png"
          alt="Ưu đãi GHSV HT228"
          className="w-40 h-40 object-contain mb-2"
          draggable={false}
        />
        <div className="font-bold text-xl text-blue-700 mb-2 text-center">
          🎁 Ưu đãi đặc quyền GHSV
        </div>
        <p className="text-gray-600 text-center text-sm mb-1">
          Hệ sinh thái giao hàng siêu Việt – chỉ dành cho khách hàng thân thiết HT228, hưởng giá NVC, freeship tận nơi!
        </p>
        <a
          href="https://zalo.me/738042415649016822"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 transition"
        >
          Đăng ký nhận ưu đãi
        </a>
      </div>
      <style jsx>{`
        .animate-pop {
          animation: popup-in 0.35s cubic-bezier(0.32, 1.25, 0.53, 1.23);
        }
        @keyframes popup-in {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

