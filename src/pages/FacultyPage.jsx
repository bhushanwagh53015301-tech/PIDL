import React from 'react';
import { Award, Briefcase, Users, Star, ArrowRight } from 'lucide-react';
import { facultyData, facultyStats } from '../data/facultyData';

export const FacultyPage = ({ onOpenApply }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header & Combined Experience Stat Bar */}
      <section className="bg-[#111111] text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest bg-[#F7A400]/10 px-3 py-1 rounded-full border border-[#F7A400]/20">
            Active Agency Practitioners
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Learn from the Best in the Industry
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our faculty consists of seasoned professionals actively managing digital campaigns, design direction, and web architecture for Praavi Group’s client portfolio.
          </p>

          {/* Combined Experience Stat Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            {facultyStats.map((st, i) => (
              <div key={i} className="text-center space-y-1">
                <span className="font-display text-3xl font-extrabold text-[#F7A400] block">{st.value}</span>
                <span className="text-xs text-zinc-400 font-medium">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Grid of All 11 Core Faculty Members */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Meet Your Mentors & Consultants
          </h2>
          <p className="text-zinc-600 text-sm">
            11 dedicated specialists guiding your transformation from student to market leader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-64 bg-zinc-900 overflow-hidden">
                  <img
                    src={fac.image}
                    onError={(e) => {
                      if (fac.fallbackImage) e.target.src = fac.fallbackImage;
                    }}
                    alt={fac.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-bold text-xl text-white">{fac.name}</h3>
                    <p className="text-xs text-[#F7A400] font-semibold mt-0.5">{fac.role}</p>
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {fac.bio}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {fac.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-zinc-100 text-zinc-800 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenApply}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-[#F7A400] hover:text-black text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Get Mentored by {fac.name.split(' ')[0]}
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white p-8 sm:p-10 rounded-3xl border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold text-white">Want 1:1 Mentorship in Digital Marketing?</h3>
            <p className="text-xs text-zinc-400">Join our upcoming batch starting {facultyStats[0].value} of agency expertise.</p>
          </div>
          <button
            onClick={onOpenApply}
            className="bg-[#F7A400] text-black font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-[#E09300] transition-colors shadow-lg cursor-pointer whitespace-nowrap"
          >
            Apply for Next Batch
          </button>
        </div>
      </section>

    </div>
  );
};
