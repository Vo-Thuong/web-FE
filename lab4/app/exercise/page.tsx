"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Exercise1SimpleButton from "@/components/exercises/Exercise1SimpleButton";
import Exercise2InputHandling from "@/components/exercises/Exercise2InputHandling";
import Exercise3MouseEvents from "@/components/exercises/Exercise3MouseEvents";
import Exercise4KeyboardEvents from "@/components/exercises/Exercise4KeyboardEvents";
import Exercise5Counter from "@/components/exercises/Exercise5Counter";

export default function Page() {
  return (
    <div className="flex w-full justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <Tabs defaultValue="simple-button">
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="simple-button">Simple Button</TabsTrigger>
            <TabsTrigger value="input-handling">Input Handling</TabsTrigger>
            <TabsTrigger value="mouse-events">Mouse Events</TabsTrigger>
            <TabsTrigger value="keyboard-events">Keyboard Events</TabsTrigger>
            <TabsTrigger value="counter">Counter</TabsTrigger>
          </TabsList>

          {/* --- Exercise 1 --- */}
          <TabsContent value="simple-button" className="mt-4">
            <Card className="shadow-lg">
              <Exercise1SimpleButton />
            </Card>
          </TabsContent>

          {/* --- Exercise 2 --- */}
          <TabsContent value="input-handling" className="mt-4">
            <Card className="shadow-lg">
              <Exercise2InputHandling />
            </Card>
          </TabsContent>

          {/* --- Exercise 3 --- */}
          <TabsContent value="mouse-events" className="mt-4">
            <Card className="shadow-lg">
              <Exercise3MouseEvents />
            </Card>
          </TabsContent>

          {/* --- Exercise 4 --- */}
          <TabsContent value="keyboard-events" className="mt-4">
            <Card className="shadow-lg">
              <Exercise4KeyboardEvents />
            </Card>
          </TabsContent>

          {/* --- Exercise 5 --- */}
          <TabsContent value="counter" className="mt-4">
            <Card className="shadow-lg">
              <Exercise5Counter />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
