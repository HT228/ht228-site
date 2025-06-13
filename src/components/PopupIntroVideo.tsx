"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PopupIntroVideo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 relative max-w-md w-full">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <Image
          src="/images/ghsv_ht228.png"
          alt="Popup hệ sinh thái HT228"
          width={500}
          height={300}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}

