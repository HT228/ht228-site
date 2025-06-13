"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopupGHSV() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 relative max-w-xl w-full">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl"
        >
          ✕
        </button>
        <Image
          src="/images/ghsv_ht228.png"
          alt="Ưu đãi hệ sinh thái HT228"
          width={600}
          height={350}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}

