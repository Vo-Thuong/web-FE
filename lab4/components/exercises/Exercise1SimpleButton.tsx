"use client";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function Exercise1SimpleButton() {
  const handleSimpleButtonClick = () => {
    alert("Button đã được click!");
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Exercise 1: Simple Button Click
        </CardTitle>
        <CardDescription>
          Click vào button bên dưới để hiển thị thông báo alert
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleSimpleButtonClick}>Click Me!</Button>
      </CardContent>
    </>
  );
}
