"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TodoItem } from "./todo-item";
// Lưu ý: Đảm bảo TodoItem được import đúng từ file todo-item.tsx

// Định nghĩa kiểu dữ liệu (Giữ nguyên)
interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

export const TodoList: React.FC = () => {
  // Trạng thái danh sách công việc ban đầu (Giữ nguyên)
  const [todos, setTodos] = useState<Todo[]>([]);

  // Trạng thái cho input nhập công việc mới (Giữ nguyên)
  const [newTask, setNewTask] = useState("");

  // LOGIC TÍNH TOÁN BỘ ĐẾM (Giữ nguyên)
  const { totalTasks, incompleteTasks } = useMemo(() => {
    const total = todos.length;
    const incomplete = todos.filter((todo) => !todo.isCompleted).length;
    return { totalTasks: total, incompleteTasks: incomplete };
  }, [todos]);

  // Hàm thêm công việc mới (Giữ nguyên)
  const handleAddTask = useCallback(() => {
    if (newTask.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      task: newTask.trim(),
      isCompleted: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setNewTask("");
  }, [newTask]);

  // Hàm toggle trạng thái hoàn thành (Giữ nguyên)
  const handleToggleTask = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  // Hàm xóa công việc (Giữ nguyên)
  const handleDeleteTask = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-50 rounded-xl shadow-2xl">
      {/* Khối Input và Button thêm task (Giữ nguyên) */}
      <div className="flex w-full items-center gap-2 mb-4">
        <Input
          type="text"
          placeholder="Add a task here..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
          className="flex-1 p-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <Button
          type="submit"
          onClick={handleAddTask}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 h-auto rounded-lg"
          aria-label="Add task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Button>
      </div>

      {/* Danh sách các mục công việc (Giữ nguyên) */}
      <div className="space-y-2 mb-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>

      {/* *** HIỂN THỊ BỘ ĐẾM MỚI (Đã cập nhật) *** */}
      <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-600 flex justify-between items-center">
        {/* Căn trái */}
        <p>
          Total Tasks Created:{" "}
          <span className="font-bold text-gray-800">{totalTasks}</span>
        </p>

        {/* Căn phải */}
        <p>
          Tasks Left to Do:{" "}
          <span className="font-bold text-red-500">{incompleteTasks}</span>
        </p>
      </div>
      {/* ***************************** */}
    </div>
  );
};
