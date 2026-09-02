import React from 'react';
import { MapPin, Monitor } from 'lucide-react';

export const ModeToggle = ({ activeMode, onChangeMode }) => {
  return (
    <div className="inline-flex p-1.5 rounded-2xl bg-white border border-amber-200 shadow-md max-w-md w-full">
      <button
        onClick={() => onChangeMode("Offline")}
        className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
          activeMode === "Offline"
            ? "bg-[#F7A400] text-black shadow-md shadow-[#F7A400]/25 font-extrabold"
            : "text-zinc-600 hover:text-zinc-900 hover:bg-amber-50/50"
        }`}
      >
        <MapPin className="w-4 h-4 shrink-0 text-zinc-900" />
        <span>Offline Classroom (Pune Campus)</span>
      </button>

      <button
        onClick={() => onChangeMode("Online")}
        className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
          activeMode === "Online"
            ? "bg-[#F7A400] text-black shadow-md shadow-[#F7A400]/25 font-extrabold"
            : "text-zinc-600 hover:text-zinc-900 hover:bg-amber-50/50"
        }`}
      >
        <Monitor className="w-4 h-4 shrink-0 text-zinc-900" />
        <span>Online Live Interactive</span>
      </button>
    </div>
  );
};
