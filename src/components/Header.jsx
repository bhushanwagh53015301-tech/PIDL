import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, Calendar, Video } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Header = ({ onOpenApply, onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Faculty", path: "/faculty" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Admissions & Fees", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Banner Alert (PW / KGS Style) */}
      <div className="bg-[#111111] text-white py-2 px-4 text-xs font-medium border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="bg-[#F7A400] text-black px-2 py-0.5 rounded font-bold text-[10px] uppercase tracking-wider">
              Offline & Online Weekend Batches
            </span>
            <span>Next Batch Starts <strong>{siteConfig.nextBatchDate}</strong> — <strong>{siteConfig.seatsRemaining} Seats Remaining</strong>!</span>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={onOpenDemo}
              className="text-[#F7A400] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Book Free Demo Class</span>
            </button>
            <span className="text-zinc-600">|</span>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-[#F7A400] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F7A400]" />
              <span>{siteConfig.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-header py-3 shadow-2xl border-b border-white/10"
            : "bg-[#111111] py-4 border-b border-zinc-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 bg-white p-1 rounded-lg flex items-center justify-center border border-zinc-700 shadow-md">
              <img
                src={siteConfig.logos.blackHeader}
                alt="PIDL Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-lg tracking-tight leading-none group-hover:text-[#F7A400] transition-colors">
                PIDL
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase">
                Praavi Institute of Digital Leadership
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#F7A400] bg-white/5 font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-4 py-2.5 rounded-lg text-xs border border-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Video className="w-3.5 h-3.5 text-[#F7A400]" />
              <span>Free Demo</span>
            </button>

            <button
              onClick={() => onOpenApply("Digital Marketing")}
              className="bg-[#F7A400] hover:bg-[#E09300] text-black font-semibold px-5 py-2.5 rounded-lg text-xs transition-all duration-200 shadow-lg shadow-[#F7A400]/20 flex items-center gap-1.5 hover:translate-y-[-1px] cursor-pointer font-bold"
            >
              <span>Apply Now ({siteConfig.fee})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenApply("Digital Marketing")}
              className="bg-[#F7A400] text-black text-xs font-bold px-3 py-2 rounded-md"
            >
              Apply
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] z-30 bg-[#111111]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 animate-fadeIn border-t border-zinc-800">
          <div className="flex flex-col space-y-2">
            <div className="p-3 mb-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#F7A400]" />
                Next Batch: <strong>{siteConfig.nextBatchDate}</strong>
              </span>
              <span className="bg-[#F7A400]/20 text-[#F7A400] px-2 py-0.5 rounded text-[10px] font-bold">
                {siteConfig.seatsRemaining} Seats Left
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`p-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#F7A400] text-black font-semibold"
                      : "text-zinc-200 hover:bg-zinc-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full bg-zinc-800 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm border border-zinc-700"
            >
              <Video className="w-4 h-4 text-[#F7A400]" />
              <span>Book Free Demo Class</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenApply("Digital Marketing");
              }}
              className="w-full bg-[#F7A400] text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
            >
              <span>Apply Now ({siteConfig.fee})</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
