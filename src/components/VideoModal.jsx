import React from 'react';
import { X, Play } from 'lucide-react';

export const VideoModal = ({ isOpen, videoUrl, title, onClose }) => {
  if (!isOpen || !videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-[#18181B] rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-[#111111] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-[#F7A400] fill-current" />
            <h4 className="font-display font-semibold text-white text-sm">{title}</h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            controls
            autoPlay
            src={videoUrl}
            className="w-full h-full object-contain"
          >
            Your browser does not support playing HTML5 video.
          </video>
        </div>

      </div>
    </div>
  );
};
