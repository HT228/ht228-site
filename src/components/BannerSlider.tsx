"use client";
import { useEffect, useState } from "react";

const banners = [
  "/images/banner1_new.png",
  "/images/banner2.png",
  "/images/banner3.png",
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto relative overflow-hidden rounded-2xl shadow-lg">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] transition-all duration-700">
        {banners.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner ${i + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            } transition`}
            aria-label={`Chuyển tới banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

