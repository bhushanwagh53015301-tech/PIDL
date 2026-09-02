import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Video, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Users, 
  Play,
  Building2,
  Laptop
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import RotatingText from './RotatingText';

export const PWBannerSection = ({ onOpenApply, onOpenDemo }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      badge: "Praavi Group Backed",
      titlePrefix: "Choose ",
      rotatingTexts: ["Offline Pune Campus", "Online Live Studio", "Hybrid Batches", "Flexible Classes"],
      titleSuffix: " for Practical Learning",
      subhead: "Master digital marketing in our Loni Kalbhor Pune computer lab with 1:1 desk mentorship or stream 2-way live HD classes from anywhere.",
      metrics: [
        { label: "Agency Internship", val: "Guaranteed" },
        { label: "Live Client Budgets", val: "50+ Brands" },
        { label: "Course Duration", val: "60 Days" }
      ],
      facultyQuote: "Every student builds real campaigns, audits live ad spend, and gains real agency work experience before graduating.",
      ctaText: "Explore Batches",
      facultyImg: "/images/malhar pandey.jpg"
    },
    {
      id: 1,
      badge: "100% Practical Training",
      titlePrefix: "Execute Real ",
      rotatingTexts: ["Agency Client Accounts", "3 Live Projects", "Meta & Google Ads", "SEO & Funnel Audits"],
      titleSuffix: " with Real Ad Budgets",
      subhead: "Gain hands-on experience managing live performance campaigns backed by Praavi Group's active portfolio of 50+ clients across India.",
      metrics: [
        { label: "Live Ad Spend", val: "₹15L+ Managed" },
        { label: "Real Campaigns", val: "3 Mandates" },
        { label: "Practical Ratio", val: "100% Execution" }
      ],
      facultyQuote: "No boring theory slides. You learn by spending real budget, optimizing ROI, and tracking live conversion funnels.",
      ctaText: "Enroll in Live Projects",
      facultyImg: "/images/malhar pandey.jpg"
    },
    {
      id: 2,
      badge: "Pune's #1 Rated Institute",
      titlePrefix: "Unlock ",
      rotatingTexts: ["High-Paying Jobs", "Agency Freelancing", "Business Growth", "Digital Leadership"],
      titleSuffix: " with Industry Diploma",
      subhead: "Get dual certification, 100% placement assistance, resume building, and mock interviews from industry performance marketers.",
      metrics: [
        { label: "Hiring Partners", val: "120+ Companies" },
        { label: "Course Fee", val: `${siteConfig.fee} (EMI Available)` },
        { label: "Certification", val: "Dual Industry" }
      ],
      facultyQuote: "Our mission is simple: transform ambitious students into high-earning digital marketers in just 60 days.",
      ctaText: "Get Started Now",
      facultyImg: "/images/malhar pandey.jpg"
    }
  ];

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeSlide];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-amber-50/40 to-zinc-50 text-zinc-900 py-12 md:py-16 border-y border-amber-200/60 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7A400]/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Top Slide Tab Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-200/80 pb-4 flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#F7A400] animate-pulse"></span>
            <span className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
              PIDL Interactive Banner Highlights
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeSlide === idx
                    ? "bg-[#F7A400] text-black shadow-md shadow-[#F7A400]/25"
                    : "bg-white/80 hover:bg-white text-zinc-600 border border-zinc-200"
                }`}
              >
                {slide.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Content & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-200 text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E09300]" />
              <span>{currentSlide.badge}</span>
            </div>

            {/* Headline with RotatingText */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.25] flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span>{currentSlide.titlePrefix}</span>
              <RotatingText
                key={currentSlide.id}
                texts={currentSlide.rotatingTexts}
                mainClassName="px-3 py-1 bg-[#F7A400] text-black font-extrabold rounded-xl overflow-hidden inline-flex items-center shadow-md shadow-[#F7A400]/30"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2200}
              />
              <span>{currentSlide.titleSuffix}</span>
            </h2>

            {/* Subhead */}
            <p className="text-zinc-600 text-base sm:text-lg max-w-xl leading-relaxed">
              {currentSlide.subhead}
            </p>

            {/* Interactive Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                <Building2 className="w-4 h-4 text-[#E09300] shrink-0" />
                <span className="text-xs font-bold text-zinc-800">Pune Campus Lab</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                <Laptop className="w-4 h-4 text-[#E09300] shrink-0" />
                <span className="text-xs font-bold text-zinc-800">2-Way Live HD Studio</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-zinc-200/80 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#E09300] shrink-0" />
                <span className="text-xs font-bold text-zinc-800">Guaranteed Internship</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={() => onOpenApply("Digital Marketing")}
                className="bg-[#F7A400] hover:bg-[#E09300] text-black font-extrabold px-8 py-4 rounded-2xl text-sm transition-all duration-200 shadow-xl shadow-[#F7A400]/25 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
              >
                <span>{currentSlide.ctaText} ({siteConfig.fee})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="bg-white hover:bg-amber-50 text-zinc-800 font-semibold px-6 py-4 rounded-2xl text-sm border border-zinc-300 hover:border-[#F7A400] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Video className="w-4 h-4 text-[#E09300]" />
                <span>Book Free Demo Class</span>
              </button>
            </div>

          </div>

          {/* Right Column: Modern Split Feature Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-3xl p-6 shadow-2xl space-y-6 relative overflow-hidden group">
              
              {/* Subtle top bar accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#F7A400] via-amber-400 to-[#F7A400] absolute top-0 left-0"></div>

              {/* Card Header with Founder */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={currentSlide.facultyImg}
                    alt="Malhar Pandey"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#F7A400] shadow-md"
                  />
                  <div>
                    <h3 className="text-sm font-extrabold text-zinc-900">Malhar Pandey</h3>
                    <p className="text-[11px] text-zinc-500 font-medium">Founder & Head Mentor, PIDL</p>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                  Live Agency Desk
                </span>
              </div>

              {/* Metric Highlights Grid */}
              <div className="grid grid-cols-3 gap-2 bg-zinc-50 p-3.5 rounded-2xl border border-zinc-200/70">
                {currentSlide.metrics.map((m, i) => (
                  <div key={i} className="text-center space-y-0.5">
                    <p className="text-[10px] font-semibold text-zinc-500 uppercase">{m.label}</p>
                    <p className="text-sm font-extrabold text-zinc-900">{m.val}</p>
                  </div>
                ))}
              </div>

              {/* Faculty Quote Block */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                  <TrendingUp className="w-3.5 h-3.5 text-[#E09300]" />
                  <span>Practical Execution Blueprint</span>
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed italic">
                  "{currentSlide.facultyQuote}"
                </p>
              </div>

              {/* Action Banner inside card */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="/images/faculty/2.png" className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Student" />
                    <img src="/images/faculty/4.png" className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Student" />
                    <img src="/images/faculty/8.png" className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="Student" />
                  </div>
                  <span className="text-[11px] font-bold text-zinc-700">Join 500+ Alumni</span>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="text-xs font-extrabold text-[#E09300] hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Watch Demo</span>
                  <Play className="w-3 h-3 fill-current" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
