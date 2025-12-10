import React from "react";

// Giả định kiểu dữ liệu cho một sản phẩm (Album Item)
interface AlbumItemData {
  id: number;
  imageSrc: string; // Đường dẫn ảnh đã có: /images/tenfile.jpg
  name: string;
  price: string;
  rating: number; // Từ 1 đến 5
}

interface AlbumItemProps {
  item: AlbumItemData;
}

// Hàm render sao dựa trên rating (Giữ nguyên)
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="text-red-500">
        ★
      </span>
    );
  }
  for (let i = fullStars; i < 5; i++) {
    stars.push(
      <span key={`empty-${i}`} className="text-gray-300">
        ★
      </span>
    );
  }
  return <div className="flex text-lg">{stars}</div>;
};

export const AlbumItem: React.FC<AlbumItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-start space-y-2 p-2 w-full hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200">
      {/* Khối Ảnh và Thông tin cơ bản */}
      <div className="flex items-start space-x-3 w-full">
        {/* Ảnh Sản phẩm - ĐÃ CẬP NHẬT DÙNG THẺ <img> */}
        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
          <img
            src={item.imageSrc}
            alt={item.name}
            className="w-full h-full object-cover"
            // object-cover để đảm bảo ảnh không bị méo và lấp đầy khung
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="flex flex-col justify-center">
          {/* Rating (Sao) */}
          {renderStars(item.rating)}

          {/* Tên sản phẩm */}
          <p className="text-gray-800 text-sm font-semibold mt-1 leading-tight">
            {item.name}
          </p>

          {/* Giá */}
          <p className="text-gray-900 text-base font-bold mt-1">{item.price}</p>
        </div>
      </div>
    </div>
  );
};
