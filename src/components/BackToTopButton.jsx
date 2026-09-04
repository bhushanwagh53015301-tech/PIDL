import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-5 z-40 bg-zinc-900/90 hover:bg-[#F7A400] text-white hover:text-black p-3.5 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-md border border-zinc-700/80 hover:scale-110 flex items-center justify-center cursor-pointer group"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      
      {/* Tooltip on Hover */}
      <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#111111] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-zinc-800 shadow-xl">
        Back to Top
      </span>
    </button>
  );
};
