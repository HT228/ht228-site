"use client";
import Image from "next/image";

export default function ZaloFloatingIcon() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://zalo.me/738042415649016822"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-14 h-14 bg-white rounded-full shadow-xl hover:scale-110 transition transform duration-200 ease-in-out p-1"
      >
        <Image
          src="/images/zalo_oa.jpg"
          alt="Chat Zalo OA"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
      </a>
    </div>
  );
}

