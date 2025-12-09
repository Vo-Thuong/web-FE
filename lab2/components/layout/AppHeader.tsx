// components/layout/AppHeader.tsx
"use client";

import React from "react";

type ExerciseKey = "ex1" | "ex2" | "ex3";

type AppHeaderProps = {
  active: ExerciseKey;
  onChange: (key: ExerciseKey) => void;
};

const tabs: { key: ExerciseKey; label: string }[] = [
  { key: "ex1", label: "Bài 1 - Popular Songs" },
  { key: "ex2", label: "Bài 2 - Login" },
  { key: "ex3", label: "Bài 3 - Products" },
];

export default function AppHeader({ active, onChange }: AppHeaderProps) {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <span className="text-lg font-semibold text-gray-800">
          Tailwind Practice
        </span>

        <nav className="flex gap-2">
          {tabs.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => onChange(tab.key)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
