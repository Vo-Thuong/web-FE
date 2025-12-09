// components/ProductGallery/index.tsx
"use client";

import React, { useState } from "react";
import { products } from "./products.data";
import ProductCard from "./ProductCard";

export default function ProductGallery() {
  const [maxPrice, setMaxPrice] = useState(100);

  return (
    <div className="mx-auto mt-8 flex w-full max-w-6xl gap-8">
      {/* Left: products grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter((p) => p.price <= maxPrice)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
        </div>
      </div>

      {/* Right: sidebar filter */}
      <aside className="w-56 text-sm text-gray-700">
        {/* Category group */}
        <div className="mb-6 space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Category
          </h3>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-3 w-3 rounded border-gray-300" />
            <span>Kids</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-3 w-3 rounded border-gray-300" />
            <span>Mens</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-3 w-3 rounded border-gray-300" />
            <span>Womens</span>
          </label>
        </div>

        {/* Price filter */}
        <div className="mb-6">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Filter
          </h3>
          <input
            type="range"
            min={0}
            max={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
          <div className="mt-2 text-sm text-gray-700">${maxPrice}</div>
        </div>

        {/* Color group */}
        <div className="mb-6 space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Color
          </h3>
          {["Black", "Blue", "Gray", "Green", "Red"].map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input type="checkbox" className="h-3 w-3 rounded border-gray-300" />
              <span>{c}</span>
            </label>
          ))}
        </div>

        {/* Brand group */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Brand
          </h3>
          {["Adidas", "Balenciaga", "Balkin", "Burberry", "Chloe"].map((b) => (
            <label key={b} className="flex items-center gap-2">
              <input type="checkbox" className="h-3 w-3 rounded border-gray-300" />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </aside>
    </div>
  );
}
