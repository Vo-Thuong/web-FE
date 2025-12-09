// app/page.tsx
"use client";

import React, { useState } from "react";
import AppHeader from "@/components/layout/AppHeader";
import PopularSongs from "@/components/PopularSongs";
import LoginCard from "@/components/LoginCard";
import ProductGallery from "@/components/ProductGallery";

type ExerciseKey = "ex1" | "ex2" | "ex3";

export default function HomePage() {
  const [active, setActive] = useState<ExerciseKey>("ex1");

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader active={active} onChange={setActive} />

      <main className="px-4 pb-10 pt-6">
        {active === "ex1" && <PopularSongs />}
        {active === "ex2" && <LoginCard />}
        {active === "ex3" && <ProductGallery />}
      </main>
    </div>
  );
}
