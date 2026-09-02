import React, { useState } from 'react';
import { X, CheckCircle, Video, MapPin, Calendar, Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const DemoClassModal = ({ isOpen, onClose, defaultBatchName = "Offline Classroom Batch" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [demoData, setDemoData] = useState({
    name: '',
    phone: '',
    email: '',
    mode: 'Offline',
    preferredDate: 'Upcoming Saturday'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#18181B] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="bg-[#111111] p-5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#F7A400] text-black flex items-center justify-center font-bold">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Book Free Demo Class</h3>
              <p className="text-[11px] text-zinc-400">Experience PIDL's practical teaching before enrolling</p>
            </div>
          </div>
          <button onClick={resetAndClose} className="p-2 text-zinc-400 hover:text-white bg-zinc-800 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-[#F7A400] mx-auto" />
              <h4 className="font-display font-bold text-xl text-white">Demo Slot Reserved!</h4>
              <p className="text-xs text-zinc-300 max-w-xs mx-auto leading-relaxed">
                Thank you <strong>{demoData.name}</strong>. We have saved your <strong>{demoData.mode} Demo Class</strong> slot. Our team will send access details to WhatsApp <strong>{demoData.phone}</strong>.
              </p>
              <button
                onClick={resetAndClose}
                className="mt-4 bg-[#F7A400] text-black font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={demoData.name}
                  onChange={(e) => setDemoData({ ...demoData, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={demoData.phone}
                  onChange={(e) => setDemoData({ ...demoData, phone: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={demoData.email}
                  onChange={(e) => setDemoData({ ...demoData, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Demo Mode *</label>
                  <select
                    value={demoData.mode}
                    onChange={(e) => setDemoData({ ...demoData, mode: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="Offline">Offline Pune Campus</option>
                    <option value="Online">Online Live Zoom Stream</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Preferred Slot *</label>
                  <select
                    value={demoData.preferredDate}
                    onChange={(e) => setDemoData({ ...demoData, preferredDate: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="Upcoming Saturday">Upcoming Saturday (9 AM)</option>
                    <option value="Upcoming Sunday">Upcoming Sunday (9 AM)</option>
                    <option value="Weekday Evening">Weekday Evening (6 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#F7A400] hover:bg-[#E09300] text-black font-bold py-3.5 rounded-xl text-sm transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Free Demo Class Booking</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
