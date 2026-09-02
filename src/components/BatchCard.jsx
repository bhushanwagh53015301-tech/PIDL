import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Download, 
  ArrowRight, 
  Video, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

export const BatchCard = ({ batch, onOpenApply, onOpenDemo, onDownloadSyllabus }) => {
  const filledPercent = Math.round((batch.filledSeats / batch.totalSeats) * 100);
  const seatsLeft = batch.totalSeats - batch.filledSeats;

  return (
    <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-lg hover:shadow-2xl hover:border-[#F7A400]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden relative group">
      
      {/* Top Banner Accent */}
      {batch.isFillingFast && (
        <div className="bg-amber-500 text-black text-[10px] font-extrabold uppercase py-1 px-3 tracking-wider text-center flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>Filling Fast — Only {seatsLeft} Seats Remaining</span>
        </div>
      )}

      <div className="p-6 space-y-5">
        
        {/* Header Info */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1.5 ${
              batch.mode === "Offline" 
                ? "bg-amber-100 text-amber-900 border border-amber-300"
                : "bg-blue-100 text-blue-900 border border-blue-300"
            }`}>
              {batch.badge}
            </span>
            <h3 className="font-display font-bold text-lg text-[#111111] group-hover:text-[#F7A400] transition-colors leading-snug">
              {batch.name}
            </h3>
          </div>
        </div>

        {/* Timings & Location */}
        <div className="space-y-2 text-xs text-zinc-600 bg-zinc-50 p-3.5 rounded-xl border border-zinc-100">
          <div className="flex items-center gap-2 text-zinc-800">
            <Calendar className="w-4 h-4 text-[#F7A400] shrink-0" />
            <span>Starts: <strong>{batch.startDate}</strong></span>
          </div>

          <div className="flex items-center gap-2 text-zinc-800">
            <Clock className="w-4 h-4 text-[#F7A400] shrink-0" />
            <span>Schedule: <strong>{batch.timings}</strong></span>
          </div>

          <div className="flex items-center gap-2 text-zinc-800">
            {batch.mode === "Offline" ? (
              <MapPin className="w-4 h-4 text-[#F7A400] shrink-0" />
            ) : (
              <Video className="w-4 h-4 text-blue-600 shrink-0" />
            )}
            <span className="truncate">{batch.location}</span>
          </div>
        </div>

        {/* Seat Fill Progress Bar (EdTech Style) */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-zinc-500">Seat Capacity</span>
            <span className="text-zinc-900 font-bold">{batch.filledSeats} / {batch.totalSeats} Enrolled</span>
          </div>
          <div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden border border-zinc-200">
            <div
              className="bg-gradient-to-r from-[#F7A400] to-amber-500 h-full transition-all duration-500 rounded-full"
              style={{ width: `${filledPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Bullet Features */}
        <ul className="space-y-1.5 pt-1 text-xs text-zinc-600">
          {batch.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="line-clamp-1">{f}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* Pricing & Actions Footer */}
      <div className="p-6 pt-0 border-t border-zinc-100 space-y-4 bg-zinc-50/50">
        
        <div className="flex items-baseline justify-between pt-4">
          <div>
            <span className="text-2xl font-display font-extrabold text-[#111111]">{batch.fee}</span>
            <span className="text-xs text-zinc-400 line-through ml-2">{batch.originalFee}</span>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              EMI {batch.emi}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => onOpenApply(batch.name)}
            className="w-full bg-[#F7A400] hover:bg-[#E09300] text-black font-bold py-3 rounded-xl text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Enroll Now in this Batch</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenDemo(batch.name)}
              className="py-2.5 px-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-[11px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <Video className="w-3.5 h-3.5 text-[#F7A400]" />
              <span>Book Demo Class</span>
            </button>

            <button
              onClick={onDownloadSyllabus}
              className="py-2.5 px-2 bg-white hover:bg-zinc-100 text-zinc-800 font-semibold rounded-lg text-[11px] border border-zinc-300 transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-zinc-600" />
              <span>Syllabus PDF</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
