import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
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

      {/* 2. Grid of Core Faculty Members */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Meet Your Mentors & Consultants
          </h2>
          <p className="text-zinc-600 text-sm">
            {facultyData.length} dedicated specialists guiding your transformation from student to market leader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((fac) => (
            <div
              key={fac.id}
              className={`bg-white rounded-[2rem] overflow-hidden transition-all duration-300 group flex flex-col justify-between ${
                fac.highlight
                  ? 'border-2 border-[#F7A400] shadow-xl'
                  : 'border border-zinc-200/90 shadow-sm hover:shadow-xl'
              }`}
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-72 sm:h-80 bg-zinc-950 overflow-hidden">
                  <img
                    src={fac.image}
                    onError={(e) => {
                      if (fac.fallbackImage) e.target.src = fac.fallbackImage;
                    }}
                    alt={fac.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Social Icons Overlay */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/40 z-10">
                    {fac.socials?.linkedin && (
                      <a
                        href={fac.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#F7A400] hover:bg-amber-500 text-black font-extrabold text-[11px] flex items-center justify-center transition-colors shadow-sm"
                        title="LinkedIn"
                      >
                        in
                      </a>
                    )}
                    {fac.socials?.twitter && (
                      <a
                        href={fac.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#F7A400] hover:bg-amber-500 text-black flex items-center justify-center transition-colors shadow-sm"
                        title="Twitter / X"
                      >
                        <Twitter className="w-3.5 h-3.5 fill-current" />
                      </a>
                    )}
                    {fac.socials?.instagram && (
                      <a
                        href={fac.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full bg-[#F7A400] hover:bg-amber-500 text-black flex items-center justify-center transition-colors shadow-sm"
                        title="Instagram"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-extrabold text-2xl text-zinc-900 tracking-tight">
                    {fac.name}
                  </h3>
                  
                  <p className="text-sm font-extrabold text-[#F7A400] leading-snug">
                    {fac.role}
                  </p>

                  <p className="text-xs text-zinc-600 leading-relaxed font-normal pt-1">
                    {fac.bio}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3 font-extrabold text-xs text-zinc-900">
                    {fac.tags.map((tag, idx) => (
                      <span key={idx} className="whitespace-nowrap">
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
                  className="w-full py-3 bg-zinc-900 hover:bg-[#F7A400] hover:text-black text-white text-xs font-extrabold rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
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
            <p className="text-xs text-zinc-400">Join our upcoming batch starting with 35+ years of combined agency expertise.</p>
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
