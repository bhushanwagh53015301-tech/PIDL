import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhatsAppFab = () => {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 md:bottom-8 right-5 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      
      {/* Tooltip on Hover */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#111111] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-zinc-800 shadow-xl">
        Chat on WhatsApp (+91 7709110967)
      </span>
    </a>
  );
};
