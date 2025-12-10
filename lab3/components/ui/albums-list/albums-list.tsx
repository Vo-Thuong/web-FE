"use client";

import React from "react";
import { AlbumItem } from "./albums-item";

// Định nghĩa kiểu dữ liệu
interface Product {
  id: number;
  imageSrc: string; // Đường dẫn ảnh: /images/tenfile.jpg
  name: string;
  price: string;
  rating: number;
}

interface Category {
  name: string;
  products: Product[];
}

// Dữ liệu đã cập nhật, sử dụng tên file ảnh từ thư mục public/images/
const DUMMY_DATA: Category[] = [
  {
    name: "Biscuit Snacks",
    products: [
      {
        id: 1,
        imageSrc: "/images/Croissant.jpg",
        name: "Miko Wooden Bluetooth Speaker",
        price: "$31.00",
        rating: 4.5,
      },
      {
        id: 2,
        imageSrc: "/images/Donuts.jpg",
        name: "Gorgeous Wooden Gloves",
        price: "$31.00",
        rating: 3.5,
      }, // Giả định sticks.png là Donuts.jpg
      {
        id: 3,
        imageSrc: "/images/Donut.jpg",
        name: "Pinkol Enormous Granite Bottle",
        price: "$31.00",
        rating: 4.0,
      }, // Giả định fries.png là Donut.jpg
      {
        id: 4,
        imageSrc: "/images/cake.jpg",
        name: "Gorgeous Aluminum Table",
        price: "$31.00",
        rating: 4.5,
      }, // Giả định cupcake.png là cake.jpg
    ],
  },
  {
    name: "Chocolate",
    products: [
      {
        id: 5,
        imageSrc: "/images/banhcuon.jpg",
        name: "Evo Lightweight Granite Shirt",
        price: "$31.00",
        rating: 4.5,
      }, // Giả định honey.png là banhcuon.jpg
      {
        id: 6,
        imageSrc: "/images/maxresdefault.jpg",
        name: "CLC0. Incredible Paper Car",
        price: "$31.00",
        rating: 3.5,
      }, // Giả định butter.png là maxresdefault.jpg
      {
        id: 7,
        imageSrc: "/images/porkcake.jpg",
        name: "Miko Wooden Bluetooth Speaker",
        price: "$31.00",
        rating: 4.0,
      }, // Giả định biscuits.png là porkcake.jpg
      {
        id: 8,
        imageSrc: "/images/Palais.jpg",
        name: "Progash Durable Granite Hat",
        price: "$31.00",
        rating: 3.0,
      }, // Giả định croissant2.png là Palais.jpg
    ],
  },
  {
    name: "Shakes Biscuit",
    products: [
      {
        id: 9,
        imageSrc: "/images/Savor.jpg",
        name: "Miko Wooden Bluetooth Speaker",
        price: "$31.00",
        rating: 4.5,
      }, // Giả định shake.png là Savor.jpg
      {
        id: 10,
        imageSrc: "/images/mooncake.jpg",
        name: "Pinkol Enormous Granite Bottle",
        price: "$31.00",
        rating: 3.5,
      }, // Giả định cookies.png là mooncake.jpg
      {
        id: 11,
        imageSrc: "/images/shoecake.jpg",
        name: "Progash Durable Granite Hat",
        price: "$31.00",
        rating: 4.0,
      }, // Giả định snackbox.png là shoecake.jpg
      {
        id: 12,
        imageSrc: "/images/tiramisu.jpg",
        name: "Miko Wooden Bluetooth Speaker",
        price: "$31.00",
        rating: 4.5,
      }, // Giả định wrapped.png là tiramisu.jpg
    ],
  },
];

export const AlbumsList: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-white shadow-xl rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DUMMY_DATA.map((category) => (
          <div key={category.name} className="flex flex-col space-y-4">
            {/* Tiêu đề Danh mục */}
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
              {category.name}
            </h2>

            {/* Danh sách Sản phẩm trong Danh mục */}
            <div className="space-y-4">
              {category.products.map((product) => (
                <AlbumItem key={product.id} item={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
