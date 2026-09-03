import React from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Settings, 
  Search, 
  Filter, 
  Target, 
  Gauge, 
  FileText, 
  Edit3, 
  Share2, 
  ShieldCheck, 
  BarChart3, 
  Play, 
  Tv, 
  LayoutList, 
  Mail, 
  Palette, 
  UserCheck, 
  Users
} from 'lucide-react';

export const SkillsGridSection = () => {
  const skills = [
    {
      id: 1,
      title: "AI & Automation Skills",
      tag: "AI",
      desc: "Master the use of AI in marketing & automate tasks for efficiency.",
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      bgClass: "bg-purple-50/70 border-purple-100/80 hover:border-purple-300"
    },
    {
      id: 2,
      title: "Performance Marketing",
      tag: "ADS",
      desc: "Learn how to run ROI-driven campaigns across various paid platforms.",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      bgClass: "bg-blue-50/70 border-blue-100/80 hover:border-blue-300"
    },
    {
      id: 3,
      title: "Programmatic Advertising",
      tag: "ADS",
      desc: "Understand how to automate ad buying for targeting the right audience.",
      icon: <Settings className="w-5 h-5 text-slate-600" />,
      bgClass: "bg-slate-100/60 border-slate-200/80 hover:border-slate-300"
    },
    {
      id: 4,
      title: "Search Engine Optimization",
      tag: "ORGANIC",
      desc: "Rank on Google with on-page SEO strategies and gain organic traffic.",
      icon: <Search className="w-5 h-5 text-emerald-600" />,
      bgClass: "bg-emerald-50/70 border-emerald-100/80 hover:border-emerald-300"
    },
    {
      id: 5,
      title: "Lead Generation",
      tag: "STRATEGY",
      desc: "Develop effective funnels that convert users into qualified leads.",
      icon: <Filter className="w-5 h-5 text-amber-600" />,
      bgClass: "bg-amber-50/70 border-amber-100/80 hover:border-amber-300"
    },
    {
      id: 6,
      title: "Conversion Rate Optimization",
      tag: "STRATEGY",
      desc: "Learn how to optimize landing pages for maximum user engagement.",
      icon: <Target className="w-5 h-5 text-rose-500" />,
      bgClass: "bg-rose-50/70 border-rose-100/80 hover:border-rose-300"
    },
    {
      id: 7,
      title: "Search Engine Marketing",
      tag: "ADS",
      desc: "Manage Google Ads campaigns that drive quick, cost-effective traffic.",
      icon: <Gauge className="w-5 h-5 text-indigo-600" />,
      bgClass: "bg-indigo-50/70 border-indigo-100/80 hover:border-indigo-300"
    },
    {
      id: 8,
      title: "Content Marketing",
      tag: "CONTENT",
      desc: "Make high-quality content that interests and engages users.",
      icon: <FileText className="w-5 h-5 text-orange-500" />,
      bgClass: "bg-orange-50/70 border-orange-100/80 hover:border-orange-300"
    },
    {
      id: 9,
      title: "Copywriting & Creative",
      tag: "CONTENT",
      desc: "Learn to write decisive copy that enhances engagement and sales.",
      icon: <Edit3 className="w-5 h-5 text-teal-600" />,
      bgClass: "bg-teal-50/70 border-teal-100/80 hover:border-teal-300"
    },
    {
      id: 10,
      title: "Social Media Marketing",
      tag: "SOCIAL",
      desc: "Find out how to build a committed audience on social media.",
      icon: <Share2 className="w-5 h-5 text-pink-500" />,
      bgClass: "bg-pink-50/70 border-pink-100/80 hover:border-pink-300"
    },
    {
      id: 11,
      title: "Generative Engine Optimization",
      tag: "AI",
      desc: "How to optimize content to rank on different AI search engines.",
      icon: <Sparkles className="w-5 h-5 text-violet-600" />,
      bgClass: "bg-violet-50/70 border-violet-100/80 hover:border-violet-300"
    },
    {
      id: 12,
      title: "Brand Marketing",
      tag: "STRATEGY",
      desc: "Understand how to build a solid brand voice & presence.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      bgClass: "bg-indigo-50/90 border-2 border-indigo-500/80 hover:border-indigo-600 shadow-sm"
    },
    {
      id: 13,
      title: "Analytics & Data",
      tag: "DATA",
      desc: "Analyze complex data to help in informed marketing decision-making.",
      icon: <BarChart3 className="w-5 h-5 text-cyan-600" />,
      bgClass: "bg-cyan-50/70 border-cyan-100/80 hover:border-cyan-300"
    },
    {
      id: 14,
      title: "Youtube optimisation",
      tag: "ORGANIC",
      desc: "Optimize your YouTube presence to increase visibility, engagement, and organic growth.",
      icon: <Play className="w-5 h-5 text-amber-600" />,
      bgClass: "bg-amber-50/80 border-amber-200/80 hover:border-amber-400"
    },
    {
      id: 15,
      title: "ORM",
      tag: "INFLUENCER",
      desc: "Shape a positive online image that drives trust, & business growth.",
      icon: <Tv className="w-5 h-5 text-rose-500" />,
      bgClass: "bg-rose-50/80 border-rose-200/80 hover:border-rose-400"
    },
    {
      id: 16,
      title: "Native Ads",
      tag: "ADS",
      desc: "Learn to integrate ads within content to boost user engagement.",
      icon: <LayoutList className="w-5 h-5 text-slate-600" />,
      bgClass: "bg-slate-100/70 border-slate-200/80 hover:border-slate-400"
    },
    {
      id: 17,
      title: "Email Marketing",
      tag: "MARKETING",
      desc: "Excel in drip campaigns, list building, and marketing automation workflows.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      bgClass: "bg-blue-50/80 border-blue-200/80 hover:border-blue-400"
    },
    {
      id: 18,
      title: "Graphic Designing",
      tag: "DESIGN",
      desc: "Make impressive social media creatives using Canva.",
      icon: <Palette className="w-5 h-5 text-purple-600" />,
      bgClass: "bg-purple-50/80 border-purple-200/80 hover:border-purple-400"
    },
    {
      id: 19,
      title: "CV & Interview Prep",
      tag: "CAREER",
      desc: "Strengthen your resume and excel in top marketing interviews.",
      icon: <UserCheck className="w-5 h-5 text-sky-600" />,
      bgClass: "bg-sky-50/80 border-sky-200/80 hover:border-sky-400"
    },
    {
      id: 20,
      title: "Interpersonal Skills",
      tag: "PROFESSIONAL",
      desc: "Build soft skills - leadership, communication, and professional behaviour.",
      icon: <Users className="w-5 h-5 text-slate-600" />,
      bgClass: "bg-slate-50 border-slate-200/80 hover:border-slate-400"
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold text-amber-950 uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200 inline-block shadow-sm">
          20 Core Specialization Skills
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111]">
          Comprehensive Digital Leadership Skills Matrix
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
          Master every crucial skill set required by top agencies, startups, and global brands in our 60-day practical program.
        </p>
      </div>

      {/* 4-Column Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`p-6 rounded-3xl border ${skill.bgClass} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4`}
          >
            <div className="space-y-3">
              {/* Circular Icon */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                {skill.icon}
              </div>

              {/* Title & Tag */}
              <div>
                <h3 className="font-display font-extrabold text-[#111111] text-base leading-snug">
                  {skill.title}
                </h3>
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-zinc-400 block mt-1">
                  {skill.tag}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
