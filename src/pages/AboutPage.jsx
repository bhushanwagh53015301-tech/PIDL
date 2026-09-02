import React from 'react';
import { 
  Target, 
  Eye, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { StatCounter } from '../components/StatCounter';
import { PWBannerSection } from '../components/PWBannerSection';

export const AboutPage = ({ onOpenApply, onOpenDemo }) => {
  const approaches = [
    {
      step: "01",
      title: "Learn by Doing",
      desc: "No static slides. Students immediately execute ad setups, keyword research, and landing page builds."
    },
    {
      step: "02",
      title: "Industry Mentorship",
      desc: "Direct 1:1 guidance from active digital marketers, agency directors, and performance specialists."
    },
    {
      step: "03",
      title: "Real Client Work",
      desc: "Students work on real brand accounts from Praavi Group's active portfolio of 50+ pan-India clients."
    },
    {
      step: "04",
      title: "Career Preparation",
      desc: "Mock interviews, resume ATS optimization, portfolio building, and guaranteed 2-week agency internship."
    }
  ];

  const studentReasons = [
    "Job-Ready Practical Skills",
    "Direct Industry Agency Connections",
    "Fast-Track Learning (6 Weeks)",
    "Affordable Fees (₹9,999 with EMI)",
    "Dual Certification & Internship (2 Weeks)",
    "Ongoing Lifetime Alumni Support"
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Header Banner */}
      <section className="bg-[#111111] text-white py-16 border-b border-zinc-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A400]/20 text-[#F7A400] text-xs font-bold uppercase tracking-wider">
            About Praavi Institute of Digital Leadership
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">
            Youth-First, Practical Learning Institute
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            PIDL is a youth-first, practical learning institute in Pune focused on Digital Marketing, Strategy & Leadership for students aged 17–28.
          </p>

          {/* Stats Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800">
            <StatCounter value="50" suffix="+" label="Real Agency Client Projects" />
            <StatCounter value="100" suffix="+" label="Students Trained" />
            <StatCounter value="8" suffix=" Weeks" label="Intensive Program" />
            <StatCounter value="100" suffix="%" label="Practical Hands-On Learning" />
          </div>
        </div>
      </section>

      {/* 2. PhysicsWallah Signature Carousel Banner Section */}
      <PWBannerSection onOpenApply={onOpenApply} onOpenDemo={onOpenDemo} />

      {/* 3. Mission & Vision Editorial Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F7A400] text-black flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest block">
              Our Mission
            </span>
            <h2 className="font-display text-2xl font-bold text-[#111111]">
              Bridge Academic Gaps in 60 Days
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              To make students confidently market-ready in 60 days through practical, hands-on learning that bridges academic knowledge and real industry requirements.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#111111] text-white p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-[#F7A400] flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest block">
              Our Vision
            </span>
            <h2 className="font-display text-2xl font-bold text-white">
              Create Next-Gen Marketing Leaders
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A generation of skilled youth ready to create, consult, and lead in the digital marketing landscape with real execution confidence.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Powered by Praavi Group Section */}
      <section className="bg-[#111111] text-white py-16 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <img src={siteConfig.logos.praaviLogo} alt="Praavi Logo" className="h-8 w-auto bg-white p-1 rounded" />
              <span className="font-display font-bold text-xl text-white">Praavi Group Affiliation</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white">
              Powered by Praavi Group Digital Agency
            </h2>
            <p className="text-zinc-400 text-sm">
              Our parent organisation brings real agency accounts directly into the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {siteConfig.parentGroup.highlights.map((h, i) => (
              <div key={i} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 text-center space-y-2">
                <CheckCircle className="w-6 h-6 text-[#F7A400] mx-auto" />
                <span className="text-xs font-semibold text-zinc-200 block">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Unique Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
            Methodology
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Our Unique 4-Step Learning Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((app) => (
            <div key={app.step} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3 relative">
              <span className="font-display text-3xl font-extrabold text-[#F7A400]">
                {app.step}
              </span>
              <h3 className="font-display font-bold text-lg text-[#111111]">{app.title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Campus & Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
            Pune Learning Hub
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Campus & Infrastructure (Loni Kalbhor, Pune)
          </h2>
          <p className="text-zinc-600 text-sm">
            Modern, student-friendly facilities equipped for digital learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {siteConfig.campusFacilities.map((fac, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm space-y-3">
              <div className="h-36 overflow-hidden">
                <img src={fac.image} alt={fac.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-display font-bold text-sm text-[#111111]">{fac.name}</h4>
                <p className="text-[11px] text-zinc-500 leading-normal">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
