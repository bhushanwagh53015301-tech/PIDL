import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const MobileStickyCTA = ({ onOpenApply }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#111111]/95 backdrop-blur-md border-t border-zinc-800 p-2.5 lg:hidden flex items-center gap-2 shadow-2xl">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenApply}
        className="flex-2 bg-[#F7A400] text-black py-2.5 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-lg shadow-[#F7A400]/20 cursor-pointer"
      >
        <span>Apply Now ({siteConfig.fee})</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
