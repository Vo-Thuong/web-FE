"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Search } from "lucide-react";

export default function SearchDebounce() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayResult, setDisplayResult] = useState("");

  // Hàm xử lý tìm kiếm (giả lập gọi API)
  const performSearch = useCallback((query: string) => {
    if (query) {
      console.log(`--- Đang tìm kiếm: ${query} ---`);
      setDisplayResult(query);
    } else {
      setDisplayResult("");
    }
  }, []);

  // Logic Debounce: Đợi người dùng dừng gõ 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, performSearch]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Exercise 5: Debouncing Search with useCallback
      </h2>

      <div className="relative mb-6">
        <input
          type="text"
          className="w-full p-3 border rounded-md pr-10 outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Nhập từ khóa tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute right-3 top-3 text-gray-400" size={20} />
      </div>

      <div className="text-center py-10 border-t border-dashed">
        {!searchTerm && (
          <p className="text-gray-400">Nhập từ khóa để xem kết quả tìm kiếm</p>
        )}

        {searchTerm && displayResult !== searchTerm && (
          <p className="text-blue-500 animate-pulse">Đang đợi bạn dừng gõ...</p>
        )}

        {searchTerm && displayResult === searchTerm && (
          <div>
            <p className="text-green-600 font-bold">Đã thực hiện tìm kiếm!</p>
            <p className="text-gray-700">
              Kết quả cho: <span className="italic">"{displayResult}"</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
