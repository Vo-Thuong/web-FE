"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCounter } from "@/hook/useCounter";
import { Minus, Plus, RefreshCcw } from "lucide-react";

const CounterHook = () => {
  const { count, increment, decrement, reset, min, max } = useCounter(0);

  const isMin = count <= min;
  const isMax = count >= max;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Exercise 1: Creating and Using a Counter Hook
      </h2>
      <p className="mb-6 text-sm text-gray-500">
        Sử dụng custom hook useCounter để quản lý state của counter.
      </p>

      <div className="flex flex-col items-center space-y-4">
        {/* Vùng hiển thị giá trị đếm */}
        <div className="flex items-center justify-center space-x-6">
          <Button
            onClick={decrement}
            disabled={isMin}
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 w-28"
          >
            <Minus className="h-4 w-4" />
            <span>Giảm</span>
          </Button>

          <span className="text-6xl font-extrabold tabular-nonum">{count}</span>

          <Button
            onClick={increment}
            disabled={isMax}
            size="lg"
            className="flex items-center space-x-2 w-28"
          >
            <Plus className="h-4 w-4" />
            <span>Tăng</span>
          </Button>
        </div>

        <Button
          onClick={reset}
          variant="secondary"
          className="flex items-center space-x-2 w-28"
        >
          <RefreshCcw className="h-4 w-4" />
          <span>Reset</span>
        </Button>
      </div>

      <div className="text-center mt-6 text-sm text-gray-400">
        Giới hạn: {min} đến {max}
      </div>
    </div>
  );
};
export default CounterHook;
