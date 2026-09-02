import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Download, 
  Code, 
  Globe, 
  Languages, 
  MessageSquare,
  ArrowRight,
  FileText
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { curriculumModules, whatYouGetItems, learningMethodology } from '../data/curriculumData';
import { WeeklySchedule } from '../components/WeeklySchedule';
import { ToolStackGrid } from '../components/ToolStackGrid';

export const CurriculumPage = ({ onOpenApply, onDownloadSyllabus }) => {
  const [openModuleId, setOpenModuleId] = useState(1);

  const toggleModule = (id) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  const getOtherCourseIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6 text-[#F7A400]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#F7A400]" />;
      case 'Languages': return <Languages className="w-6 h-6 text-[#F7A400]" />;
      default: return <MessageSquare className="w-6 h-6 text-[#F7A400]" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header with Download Syllabus Action */}
      <section className="bg-[#111111] text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest bg-[#F7A400]/10 px-3 py-1 rounded-full border border-[#F7A400]/20">
                Comprehensive Digital Marketing Syllabus
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mt-2">
                10-Module Practical Curriculum
              </h1>
            </div>

            <button
              onClick={onDownloadSyllabus}
              className="bg-[#F7A400] text-black font-bold px-6 py-3 rounded-xl text-xs hover:bg-[#E09300] transition-colors shadow-lg flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Download Detailed Syllabus PDF</span>
            </button>
          </div>

          <p className="text-zinc-300 text-base max-w-2xl leading-relaxed">
            Master every domain of modern digital marketing with agency-style execution, real tools, and live client campaign audits in both Offline (Pune Campus) and Online Live modes.
          </p>

          {/* Sticky Summary Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-xs">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#F7A400] shrink-0" />
              <div>
                <span className="block text-zinc-400">Duration</span>
                <span className="font-bold text-white">{siteConfig.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#F7A400] shrink-0" />
              <div>
                <span className="block text-zinc-400">Batch Format</span>
                <span className="font-bold text-white">Offline Campus & Online Live</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#F7A400] shrink-0" />
              <div>
                <span className="block text-zinc-400">Certification</span>
                <span className="font-bold text-white">Dual Industry Certificate</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#F7A400] shrink-0" />
              <div>
                <span className="block text-zinc-400">Guest Lectures</span>
                <span className="font-bold text-white">10+ Agency Founders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KGS Style Weekly Batch Timetable */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WeeklySchedule />
      </section>

      {/* 3. 10 Modules Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Explore All 10 Modules
          </h2>
          <p className="text-zinc-600 text-sm">
            Click on any module to view sub-topics covered in detail.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {curriculumModules.map((mod) => {
            const isOpen = openModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#111111] text-white border-zinc-700 shadow-xl"
                    : "bg-white text-[#111111] border-zinc-200 hover:border-zinc-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full p-6 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-2xl font-extrabold px-3 py-1 rounded-xl ${
                        isOpen ? "bg-[#F7A400] text-black" : "bg-zinc-100 text-[#111111]"
                      }`}
                    >
                      {mod.number}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-[#F7A400] uppercase block">
                        {mod.duration}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl">
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-[#F7A400]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-zinc-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-800 text-zinc-300 text-sm animate-fadeIn space-y-3">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                      Sub-Topics & Practical Modules:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {mod.subtopics.map((sub, i) => (
                        <li key={i} className="flex items-center gap-2.5 bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-[#F7A400] shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Udemy Tool Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ToolStackGrid />
      </section>

      {/* 5. What You'll Get */}
      <section className="bg-[#18181B] text-white py-16 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
              Course Deliverables
            </span>
            <h2 className="font-display text-3xl font-extrabold">What You'll Get at PIDL</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGetItems.map((item, idx) => (
              <div key={idx} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#F7A400]/20 text-[#F7A400] flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Learning Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
            4-Point Execution Model
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Our Practical Learning Methodology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningMethodology.map((meth) => (
            <div key={meth.step} className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-lg flex flex-col md:flex-row">
              <div className="md:w-1/2 h-52 md:h-auto overflow-hidden">
                <img src={meth.image} alt={meth.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-6 space-y-3 flex flex-col justify-center">
                <span className="font-display text-2xl font-extrabold text-[#F7A400]">{meth.step}</span>
                <h3 className="font-display font-bold text-lg text-[#111111]">{meth.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{meth.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
