'use client';
import Image from 'next/image';
import ReactStars from 'react-stars';

export default function ProductCard({ product }) {
  const { name, price, oldPrice, images, rating, discount } = product;

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-1 rounded">
            -{discount}%
          </span>
        )}
        <Image
          src={images[0] || '/placeholder.png'}
          alt={name}
          width={300} height={300}
          className="object-contain"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium mb-1 line-clamp-2">{name}</h3>
        <div className="flex items-center mb-2">
          <ReactStars count={5} size={16} value={rating} edit={false} color2="#ffd700" />
          <span className="text-xs text-gray-500 ml-1">({rating.toFixed(1)})</span>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-red-600 font-bold">
            {price.toLocaleString()}₫
          </span>
          {oldPrice > price && (
            <span className="text-xs text-gray-400 line-through">
              {oldPrice.toLocaleString()}₫
            </span>
          )}
        </div>
        <button
          className="mt-3 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
          onClick={() => alert('Đã thêm sản phẩm vào giỏ!')}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}

