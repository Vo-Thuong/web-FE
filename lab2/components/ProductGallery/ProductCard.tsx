// components/ProductGallery/ProductCard.tsx
import React from "react";

type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="flex flex-col">
      {/* Image placeholder */}
      <div className="mb-3 h-64 w-full rounded-md bg-gray-100" />

      <span className="text-sm text-gray-700">{name}</span>
      <span className="mt-1 text-sm font-semibold text-gray-900">
        ${price.toFixed(2)}
      </span>
    </div>
  );
}
