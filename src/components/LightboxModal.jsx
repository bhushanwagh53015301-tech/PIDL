import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({ isOpen, image, title, desc, onClose, onNext, onPrev }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#F7A400] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="relative bg-[#111111] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl max-h-[75vh] flex items-center justify-center">
          <img
            src={image}
            alt={title || "PIDL Gallery Image"}
            className="max-h-[75vh] w-auto object-contain"
          />

          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#F7A400] hover:text-black text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#F7A400] hover:text-black text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white max-w-xl">
          <h4 className="font-display font-bold text-lg text-white">{title}</h4>
          {desc && <p className="text-xs text-zinc-400 mt-1">{desc}</p>}
        </div>

      </div>
    </div>
  );
};
