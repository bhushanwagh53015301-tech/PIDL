import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Monitor, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WeeklySchedule = () => {
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);
  const currentWeek = siteConfig.weeklySchedule[activeWeekIndex];

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-lg space-y-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-100 pb-4">
        <div>
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-wider block">
            Official Live Batch Timetable
          </span>
          <h3 className="font-display text-2xl font-bold text-[#111111]">
            Weekly Class & Lab Schedule
          </h3>
        </div>

        {/* Week Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-zinc-100 p-1.5 rounded-xl border border-zinc-200">
          {siteConfig.weeklySchedule.map((w, idx) => (
            <button
              key={idx}
              onClick={() => setActiveWeekIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeWeekIndex === idx
                  ? "bg-[#F7A400] text-black shadow-sm"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              {w.week}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Week Detail Card */}
      <div className="bg-zinc-900 text-white p-6 rounded-2xl space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-bold text-[#F7A400] uppercase">{currentWeek.week} Focus</span>
            <h4 className="font-display text-xl font-bold text-white">{currentWeek.focus}</h4>
          </div>
          <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
            Active Batch Schedule
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          
          <div className="bg-zinc-800/80 p-4 rounded-xl space-y-1.5 border border-zinc-700">
            <div className="flex items-center gap-2 text-[#F7A400] font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Offline Campus Class</span>
            </div>
            <p className="text-white font-bold text-sm">{currentWeek.offlineClass}</p>
            <p className="text-zinc-400 text-[11px]">PIDL Campus, Loni Kalbhor, Pune</p>
          </div>

          <div className="bg-zinc-800/80 p-4 rounded-xl space-y-1.5 border border-zinc-700">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Monitor className="w-4 h-4" />
              <span>Online Live Class</span>
            </div>
            <p className="text-white font-bold text-sm">{currentWeek.onlineClass}</p>
            <p className="text-zinc-400 text-[11px]">Zoom HD Interactive Studio Stream</p>
          </div>

          <div className="bg-zinc-800/80 p-4 rounded-xl space-y-1.5 border border-zinc-700">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Clock className="w-4 h-4" />
              <span>Computer Lab & Doubt Hours</span>
            </div>
            <p className="text-white font-bold text-sm">{currentWeek.labHours}</p>
            <p className="text-zinc-400 text-[11px]">1:1 Faculty Mentorship Desk</p>
          </div>

        </div>
      </div>

    </div>
  );
};
