"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import các bài tập
import CounterHook from "@/components/exercise/counterHook";
import UserInput from "@/components/exercise/userInput";
import Memoization from "@/components/exercise/memoization";
import SumCalculation from "@/components/exercise/sumCalculation";
import SearchDebounce from "@/components/exercise/searchDebounce";

export default function Page() {
  return (
    <div className="flex w-full justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <Tabs defaultValue="counter-hook">
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="counter-hook">Counter Hook</TabsTrigger>
            <TabsTrigger value="user-input">User Input</TabsTrigger>
            <TabsTrigger value="memoization">Memoization</TabsTrigger>
            <TabsTrigger value="sum-calculation">Sum Calculation</TabsTrigger>
            <TabsTrigger value="search-debounce">Search Debounce</TabsTrigger>
          </TabsList>

          {/* --- Exercise 1 --- */}
          <TabsContent value="counter-hook" className="mt-4">
            <Card className="shadow-lg">
              <CounterHook />
            </Card>
          </TabsContent>

          {/* --- Exercise 2 --- */}
          <TabsContent value="user-input" className="mt-4">
            <Card className="shadow-lg">
              <UserInput />
            </Card>
          </TabsContent>

          {/* --- Exercise 3 --- */}
          <TabsContent value="memoization" className="mt-4">
            <Card className="shadow-lg">
              <Memoization />
            </Card>
          </TabsContent>

          {/* --- Exercise 4 --- */}
          <TabsContent value="sum-calculation" className="mt-4">
            <Card className="shadow-lg">
              <SumCalculation />
            </Card>
          </TabsContent>

          {/* --- Exercise 5 --- */}
          <TabsContent value="search-debounce" className="mt-4">
            <Card className="shadow-lg">
              <SearchDebounce />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
