'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const categories = [
  { id: 'tape',   name: 'Băng dính',   img: '/cats/tape.jpg' },
  { id: 'foam',   name: 'Xốp nổ',      img: '/cats/foam.jpg' },
  { id: 'carton', name: 'Hộp carton',  img: '/cats/carton.jpg' },
  { id: 'bag',    name: 'Túi bóng',     img: '/cats/bag.jpg' },
];

export default function CategoryCarousel() {
  return (
    <Swiper slidesPerView={2.5} spaceBetween={10} breakpoints={{
      640: { slidesPerView: 3 },
      1024:{ slidesPerView: 5 },
    }}>
      {categories.map(cat => (
        <SwiperSlide key={cat.id}>
          <div className="text-center cursor-pointer">
            <Image
              src={cat.img}
              alt={cat.name}
              width={100} height={60}
              className="mx-auto rounded"
            />
            <p className="mt-2 text-sm font-medium">{cat.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

