"use client";

import React, { useState, useMemo } from "react";

export default function Memoization() {
  const [isHovered, setIsHovered] = useState(false);

  const boxStyle = useMemo(() => {
    console.log("--- Style được tính toán lại ---");
    return {
      backgroundColor: isHovered ? "#ff4d4f" : "#e5e7eb",
      width: "250px",
      height: "250px",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.3s ease",
      cursor: "pointer",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.2rem",
    };
  }, [isHovered]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">
        Exercise 3: Implementing Memoization with a UseMemo Hook
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Di chuột vào box bên dưới để thay đổi màu nền. Style của box được tính
        toán bằng
        <code className="bg-gray-100 px-1 rounded mx-1">useMemo</code>
        để tránh tính toán lại không cần thiết.
      </p>

      <div
        style={boxStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="shadow-md"
      >
        {isHovered ? "Hover Active!" : ""}
      </div>

      <p className="mt-4 text-xs text-gray-400 italic">
        Mở F12 (Console) để xem khi nào style được tính toán lại
      </p>
    </div>
  );
}
