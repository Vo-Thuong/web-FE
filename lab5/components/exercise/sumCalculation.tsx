"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

export default function SumCalculation() {
  const [items, setItems] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Hàm xử lý thêm số vào danh sách
  const handleAddItem = () => {
    const num = parseFloat(inputValue);
    if (!isNaN(num)) {
      setItems([...items, num]);
      setInputValue("");
    }
  };

  // Hàm xử lý xóa một số khỏi danh sách
  const handleDeleteItem = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const totalSum = useMemo(() => {
    console.log("Đang tính toán lại tổng...");
    return items.reduce((acc, curr) => acc + curr, 0);
  }, [items]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">
        Exercise 4: Sum Calculation with useMemo
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Nhập số và nhấn Enter để thêm vào danh sách. Tổng các số sẽ được tính
        toán tự động bằng
        <code>useMemo</code> để tránh tính toán lại không cần thiết.
      </p>

      <div className="flex w-full max-w-sm items-center space-x-2 mb-6">
        <Input
          type="number"
          placeholder="Nhập số..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddItem()}
          className="flex-1"
        />
        <Button
          onClick={handleAddItem}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Thêm
        </Button>
      </div>

      <div className="space-y-2 mb-6 max-w-sm">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border rounded-lg bg-white shadow-sm"
          >
            <span className="font-medium text-gray-700">Số {item}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDeleteItem(index)}
              className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              Xóa
            </Button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50 border border-dashed rounded-lg max-w-sm">
        <div className="text-lg font-bold">
          Tổng: <span className="text-blue-600">{totalSum}</span>
        </div>
        <p className="text-xs text-gray-400 mt-1 italic">
          (Mở console để xem khi nào tổng được tính toán lại)
        </p>
      </div>
    </div>
  );
}
