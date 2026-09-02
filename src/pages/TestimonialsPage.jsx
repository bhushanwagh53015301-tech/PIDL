import React, { useState } from 'react';
import { Star, Play, TrendingUp, Award, Quote, CheckCircle, ArrowRight } from 'lucide-react';
import { testimonialStats, studentStories, videoTestimonials } from '../data/testimonialsData';
import { StatCounter } from '../components/StatCounter';
import { VideoModal } from '../components/VideoModal';

export const TestimonialsPage = ({ onOpenApply }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header & Stat Dashboard */}
      <section className="bg-[#111111] text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest bg-[#F7A400]/10 px-3 py-1 rounded-full border border-[#F7A400]/20">
            Verified Alumni Results
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Student Reviews & Career Transformations
          </h1>

          <p className="text-zinc-300 text-base max-w-2xl leading-relaxed">
            Real stories from PIDL graduates who transitioned into agency roles, freelancing retainers, and high-paying performance marketing positions.
          </p>

          {/* Stat Dashboard Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            {testimonialStats.map((st, idx) => (
              <StatCounter
                key={idx}
                value={st.value}
                suffix={st.suffix}
                label={st.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Video Testimonial Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
            Watch Student & Mentor Teardowns
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Video Testimonials & Campus Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTestimonials.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-44 bg-zinc-900 overflow-hidden">
                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#F7A400] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {vid.duration}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <h4 className="font-display font-bold text-sm text-[#111111] group-hover:text-[#F7A400] transition-colors">
                  {vid.title}
                </h4>
                <p className="text-[11px] text-zinc-500 leading-normal">{vid.desc}</p>
              </div>

              <div className="p-4 pt-0 text-[10px] font-semibold text-[#F7A400]">
                Watch Video Clips →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 6 Transformation Story Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
            Before → After Success Stories
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Featured Alumni Career Transitions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentStories.map((story) => (
            <div
              key={story.id}
              className="bg-white p-7 rounded-3xl border border-zinc-200 shadow-md flex flex-col justify-between space-y-5 hover:border-[#F7A400]/60 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#111111] text-[#F7A400] text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    {story.hike}
                  </span>
                </div>

                <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 text-xs font-semibold text-zinc-700">
                  <span className="text-zinc-400 block text-[10px]">Transformation Path:</span>
                  {story.transition}
                </div>

                <div className="relative text-xs text-zinc-700 leading-relaxed italic pl-3 border-l-2 border-[#F7A400]">
                  "{story.quote}"
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center gap-3">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-11 h-11 rounded-full object-cover border border-zinc-300"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#111111]">{story.name}</h4>
                  <p className="text-[11px] text-zinc-500 font-medium">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white p-8 sm:p-12 rounded-3xl border border-zinc-800 text-center space-y-6">
          <h2 className="font-display text-3xl font-extrabold">Write Your Own Success Story</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Join the next batch of digital leaders at PIDL Pune and secure your 2-week agency internship.
          </p>
          <button
            onClick={onOpenApply}
            className="bg-[#F7A400] text-black font-bold px-8 py-4 rounded-xl text-base hover:bg-[#E09300] transition-colors shadow-lg cursor-pointer"
          >
            Apply Now for {testimonialStats[0].value} Career Launch
          </button>
        </div>
      </section>

      {/* Video Modal Popup */}
      <VideoModal
        isOpen={selectedVideo !== null}
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title}
        onClose={() => setSelectedVideo(null)}
      />

    </div>
  );
};
