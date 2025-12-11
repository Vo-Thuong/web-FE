"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

export default function Exercise3MouseEvents() {
  const [isHovering, setIsHovering] = useState(false);

  const boxColor = isHovering ? "#F97316" : "#2563EB";
  const boxText = isHovering ? "Hover!" : "Hover me!";

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Exercise 3: Handling Mouse Events
        </CardTitle>
        <CardDescription>
          Di chuột vào box bên dưới để thay đổi **màu nền và nội dung chữ**
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="w-48 h-48 rounded-lg flex items-center justify-center text-white font-semibold shadow-xl cursor-pointer"
          style={{
            backgroundColor: boxColor,
            transition: "background-color 0.3s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {boxText}
        </div>
      </CardContent>
    </>
  );
}
