"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FlashDeal() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdown);
          return prev;
        }
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            hours = Math.max(hours - 1, 0);
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section
      className="
        bg-gradient-to-r from-pink-500 to-yellow-400
        text-white rounded-lg
        px-8 py-2 my-4
        shadow-md
        w-full max-w-7xl mx-auto
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold leading-tight">
            🔥 Flash Deal Đặc Biệt!<br />
            Tặng dao cắt cho đơn hàng 500K trở lên 🎁
          </h2>
          <p className="text-sm mt-1">Còn lại:</p>
          <div className="text-2xl font-mono mt-1 tracking-wider">
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
        </div>

        <Link
          href="https://zalo.me/738042415649016822"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            aria-label="Mua ngay qua Zalo"
            className="
              mt-4 md:mt-0
              bg-white text-pink-600 font-semibold
              px-6 py-2
              rounded-full
              shadow-lg shadow-pink-600/50
              transition-transform duration-200 ease-in-out
              hover:scale-105
              hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]
            "
          >
            Mua ngay
          </button>
        </Link>
      </div>
    </section>
  );
}

