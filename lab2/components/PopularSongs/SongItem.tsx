// components/PopularSongs/SongItem.tsx
import React from "react";

type SongItemProps = {
  index: number;
  name: string;
};

export default function SongItem({ index, name }: SongItemProps) {
  return (
    <li className="flex items-center justify-between py-3 hover:bg-gray-50">
      {/* Left part */}
      <div className="flex items-center">
        <span className="w-8 text-sm font-semibold text-gray-400">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Avatar placeholder */}
        <div className="mx-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200" />

        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">{name}</span>
          <span className="text-xs text-gray-400">Music</span>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 text-gray-300">
        <button className="p-1 hover:text-pink-500" aria-label="Favorite song">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21s-5.7-3.4-8.4-6.1C1.9 13.1 1 11.7 1 10.1 1 7.6 3 5.5 5.5 5.5c1.4 0 2.8.7 3.6 1.9.8-1.2 2.2-1.9 3.6-1.9C19 5.5 21 7.6 21 10.1c0 1.6-.9 3-2.6 4.8C17.7 17.6 12 21 12 21z" />
          </svg>
        </button>

        <button className="p-1 hover:text-gray-600" aria-label="Download song">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 20h14v-2H5v2zm7-16-5 6h3v4h4v-4h3l-5-6z" />
          </svg>
        </button>

        <button className="p-1 hover:text-gray-600" aria-label="More actions">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </div>
    </li>
  );
}
