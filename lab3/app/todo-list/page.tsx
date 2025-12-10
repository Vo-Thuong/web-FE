// app/page.tsx
import { TodoList } from "@/components/ui/todo-list/todo-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Sử dụng component TodoList */}
      <TodoList />
    </main>
  );
}
// Lưu ý: Tôi đã thay thế InputWithButton bằng TodoList vì TodoList đã bao gồm input và button thêm task.
