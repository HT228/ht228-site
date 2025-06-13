"use client";

export default function ZaloWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://zalo.me/738042415649016822"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/zalo_oa.jpg"
          alt="Zalo OA"
          width={64}
          height={64}
          className="rounded-full shadow-lg hover:scale-105 transition-transform"
        />
      </a>
    </div>
  );
}

