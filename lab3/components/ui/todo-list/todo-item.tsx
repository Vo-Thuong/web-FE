import React from "react";

// Giả định kiểu dữ liệu cho một mục công việc
interface TodoItemData {
  id: number;
  task: string;
  isCompleted: boolean;
}

// Giả định props cho component TodoItem
interface TodoItemProps {
  item: TodoItemData;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// Giả định các icon (dùng để mô phỏng)
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-x"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onToggle,
  onDelete,
}) => {
  // Class name để mô phỏng trạng thái "hoàn thành" (màu xanh đậm) và "chưa hoàn thành" (màu trắng)
  const itemClassName = item.isCompleted
    ? "bg-blue-600 text-white shadow-lg"
    : "bg-white border border-gray-200 text-gray-800 shadow-sm";

  // *** Đã xóa line-through class ở đây ***

  return (
    <div
      className={`flex items-center justify-between p-4 my-2 rounded-lg transition-all duration-200 ${itemClassName}`}
      onClick={() => onToggle(item.id)} // Cho phép click vào toàn bộ item để toggle
    >
      {/* Không còn class line-through */}
      <span className="flex-1 truncate">{item.task}</span>

      <div className="flex space-x-2 ml-4">
        {/* Nút Đánh dấu hoàn thành */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Ngăn sự kiện toggle lan truyền lên div cha
            onToggle(item.id);
          }}
          className={`p-1 rounded-full ${
            item.isCompleted
              ? "bg-white text-blue-600"
              : "text-gray-400 hover:text-green-500"
          }`}
          aria-label={
            item.isCompleted ? "Mark as Incomplete" : "Mark as Complete"
          }
        >
          <CheckIcon />
        </button>

        {/* Nút Xóa */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Ngăn sự kiện toggle lan truyền lên div cha
            onDelete(item.id);
          }}
          className={`p-1 rounded-full ${
            item.isCompleted
              ? "text-white hover:text-red-300"
              : "text-gray-400 hover:text-red-500"
          }`}
          aria-label="Delete task"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};
