import React, { useState } from 'react';
import { Instagram, Eye, Filter, ArrowRight } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { LightboxModal } from '../components/LightboxModal';
import { siteConfig } from '../data/siteConfig';

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredItems.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header */}
      <section className="bg-[#111111] text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center md:text-left">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest bg-[#F7A400]/10 px-3 py-1 rounded-full border border-[#F7A400]/20">
            Life at PIDL Campus
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Campus & Activity Gallery
          </h1>
          <p className="text-zinc-300 text-base max-w-2xl">
            Real photos capturing classroom discussions, guest lectures, campaign teardowns, and campus life at Loni Kalbhor, Pune.
          </p>
        </div>
      </section>

      {/* 2. Filterable Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 border-b border-zinc-200 pb-4">
          <span className="text-xs font-semibold text-zinc-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#F7A400] text-black shadow-md"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 shadow-md cursor-pointer aspect-video sm:aspect-square flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Category Badge & Expand Icon */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="bg-[#F7A400] text-black font-bold text-[10px] uppercase px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
                <div className="p-2 rounded-full bg-black/60 text-white group-hover:bg-[#F7A400] group-hover:text-black transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h3 className="font-display font-bold text-sm text-white group-hover:text-[#F7A400] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-300 line-clamp-1 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Instagram Feed CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-900/40 via-zinc-900 to-black p-8 sm:p-12 rounded-3xl border border-purple-800/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-pink-400 text-xs font-bold uppercase">
              <Instagram className="w-4 h-4" />
              <span>Follow Official Handles</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Stay Connected on Instagram @pidlofficial
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg">
              Watch daily reels, student campaign behind-the-scenes, workshop highlights, and live Q&A sessions.
            </p>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#F7A400] hover:bg-[#E09300] text-black font-bold px-8 py-4 rounded-xl text-sm transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @pidlofficial</span>
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={selectedImageIndex !== null}
        image={currentItem?.image}
        title={currentItem?.title}
        desc={currentItem?.desc}
        onClose={() => setSelectedImageIndex(null)}
        onNext={selectedImageIndex < filteredItems.length - 1 ? handleNext : null}
        onPrev={selectedImageIndex > 0 ? handlePrev : null}
      />

    </div>
  );
};
