import Image from 'next/image';

export default function BannerSlider() {
  return (
    <div>
      <Image src="/banner.jpg" alt="Banner" width={800} height={400} />
    </div>
  );
}

