"use client";

import { Input } from "@/components/ui/input";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState, useRef } from "react";

interface ListItem {
  id: number;
  text: string;
}

export default function Exercise4KeyboardEvents() {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      const text = inputRef.current.value.trim();
      if (text) {
        setListItems((prevItems) => [
          ...prevItems,
          { id: Date.now(), text: text },
        ]);
        inputRef.current.value = "";
      }
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Exercise 4: Handling Keyboard Events
        </CardTitle>
        <CardDescription>
          Nhập text và nhấn Enter để thêm vào danh sách
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Input
          ref={inputRef}
          onKeyDown={handleKeyDown}
          placeholder="Nhập text và nhấn Enter..."
        />
        <div className="border rounded-lg p-3 min-h-[50px]">
          <ul className="list-none space-y-1 p-0 m-0">
            {listItems.map((item, index) => (
              <li
                key={item.id}
                className="text-base py-1 border-b last:border-b-0"
              >
                {index + 1} {item.text}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </>
  );
}
