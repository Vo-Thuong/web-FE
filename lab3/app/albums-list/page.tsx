import { AlbumsList } from "@/components/ui/albums-list/albums-list";
import React from "react";

// page.tsx (hoặc Home.tsx)
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {/* Sử dụng component AlbumsList */}
      <AlbumsList />
    </main>
  );
}

// Lưu ý: Nội dung gốc của page.tsx bạn cung cấp (InputWithButton) đã được thay thế
// bằng nội dung này để hiển thị AlbumsList theo hình ảnh mới.
