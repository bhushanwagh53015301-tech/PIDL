import React from 'react';
import { siteConfig } from '../data/siteConfig';

export const WhatsAppFab = () => {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 md:bottom-22 right-5 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group ring-4 ring-[#25D366]/20"
    >
      {/* Official WhatsApp Brand SVG */}
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.399.637-1.157 4.228 4.321-1.133.58.335zm9.815-5.309c-.294-.147-1.743-.86-2.012-.958-.27-.098-.466-.147-.663.147-.196.294-.76.958-.932 1.153-.171.196-.343.221-.637.074-.294-.147-1.242-.457-2.367-1.46-.875-.78-1.465-1.744-1.637-2.038-.172-.294-.018-.453.129-.6.133-.133.294-.343.441-.515.147-.171.196-.294.294-.49.098-.196.049-.368-.025-.515-.074-.147-.662-1.594-.907-2.181-.239-.572-.482-.494-.662-.503-.171-.009-.368-.009-.564-.009-.196 0-.515.074-.784.368-.27.294-1.03 1.006-1.03 2.454 0 1.448 1.054 2.846 1.201 3.042.147.196 2.074 3.168 5.026 4.444.702.304 1.25.486 1.677.622.705.224 1.347.193 1.854.117.565-.085 1.743-.712 1.988-1.4.245-.687.245-1.276.172-1.4-.074-.124-.27-.197-.564-.344z" />
      </svg>
      
      {/* Tooltip on Hover */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#111111] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-zinc-800 shadow-xl">
        Chat on WhatsApp (+91 7709110967)
      </span>
    </a>
  );
};
