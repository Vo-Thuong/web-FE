"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UserInput() {
  const [inputValue, setInputValue] = useState("");

  const handleShowValue = () => {
    alert(`Giá trị hiện tại: ${inputValue}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">
        Exercise 2: Managing User Input with State Hook
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Sử dụng <code>useState</code> để quản lý giá trị input
      </p>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập nội dung..."
          className="flex-1"
        />
        <Button
          onClick={handleShowValue}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Hiển thị
        </Button>
      </div>
    </div>
  );
}
