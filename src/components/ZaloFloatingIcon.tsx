"use client";
import Image from "next/image";

export default function ZaloFloatingIcon() {
  return (
    <a
      href="https://zalo.me/738042415649016822"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Image
        src="/assets/images/zalo_oa.jpg"
        alt="Zalo OA HT228"
        width={56}
        height={56}
        className="rounded-full shadow-lg animate-bounce"
      />
    </a>
  );
}
