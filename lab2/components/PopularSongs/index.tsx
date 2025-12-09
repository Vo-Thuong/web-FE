// components/PopularSongs/index.tsx
import React from "react";
import { songs } from "./songs.data";
import SongItem from "./SongItem";

export default function PopularSongs() {
  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Popular Songs</h2>
        <button className="text-sm font-medium text-gray-400 hover:text-gray-600">
          See All
        </button>
      </div>

      {/* List */}
      <ol className="divide-y divide-gray-100">
        {songs.map((song, i) => (
          <SongItem key={song.id} index={i} name={song.name} />
        ))}
      </ol>
    </div>
  );
}
