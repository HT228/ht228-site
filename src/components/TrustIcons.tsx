"use client";

import Image from "next/image";

const items = [
  {
    front: "/images/trust/check.svg",
    back: "/images/trust/mat2chatluong.png",
  },
  {
    front: "/images/trust/quality.svg",
    back: "/images/trust/mat2kiemtra.png",
  },
  {
    front: "/images/trust/shipping.svg",
    back: "/images/trust/mat2vanchuyen.jpg",
  },
];

export default function TrustIcons() {
  return (
    <section className="my-12">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
        Vì sao khách chọn HT228?
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="relative w-32 h-32 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden rounded-full overflow-hidden ring-2 ring-white shadow-xl">
                <Image
                  src={item.front}
                  alt={`front-${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-full overflow-hidden border-2 border-gray-200 shadow-inner">
                <Image
                  src={item.back}
                  alt={`back-${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

