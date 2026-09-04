import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  Download, 
  CheckCircle2, 
  Calendar, 
  Award, 
  Users, 
  Briefcase, 
  Star,
  Sparkles,
  CheckSquare,
  Activity,
  Cpu,
  UserCheck,
  Zap,
  MapPin,
  Monitor,
  Video,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ModeToggle } from '../components/ModeToggle';
import { BatchCard } from '../components/BatchCard';
import { CareerQuiz } from '../components/CareerQuiz';
import { ToolStackGrid } from '../components/ToolStackGrid';
import { PWBannerSection } from '../components/PWBannerSection';
import { VideoModal } from '../components/VideoModal';
import { studentStories } from '../data/testimonialsData';

export const HomePage = ({ onOpenApply, onOpenDemo, onDownloadSyllabus }) => {
  const [activeMode, setActiveMode] = useState("Offline");
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);
  const [selectedHeroVideo, setSelectedHeroVideo] = useState(null);

  // High-Resolution Authentic Cover Banners
  const coverSlides = [
    {
      img: "/images/Banner 1.jpg",
      title: "Agency Live Campaign Execution",
      tag: "Praavi Group Ecosystem",
      desc: "Students auditing live Google Ads & Meta ad spend for 50+ clients."
    },
    {
      img: "/images/home page.jpg",
      title: "Modern Pune Campus Workstation Lab",
      tag: "Loni Kalbhor Pune",
      desc: "Fully equipped computer lab with high-speed internet & 1:1 faculty desk access."
    },
    {
      img: "/images/Banner 1 (1).jpg",
      title: "100% Practical Digital Leadership",
      tag: "6 Weeks + 2 Weeks Internship",
      desc: "Master exact ad tools, SEO dashboards, and sales funnels."
    },
    {
      img: "/images/breadcrub.png",
      title: "Backed by Praavi Group Digital Agency",
      tag: "50+ Active Client Brands",
      desc: "Guaranteed 2-week agency internship & dual industry diploma certificate."
    }
  ];

  // Auto-slide cover images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCoverIndex((prev) => (prev + 1) % coverSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [coverSlides.length]);

  const handleNextCover = () => {
    setCurrentCoverIndex((prev) => (prev + 1) % coverSlides.length);
  };

  const handlePrevCover = () => {
    setCurrentCoverIndex((prev) => (prev === 0 ? coverSlides.length - 1 : prev - 1));
  };

  const filteredBatches = siteConfig.batches.filter(b => 
    b.mode === activeMode || b.mode === "Hybrid"
  );

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Calendar': return <Calendar className="w-6 h-6 text-[#F7A400]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#F7A400]" />;
      case 'CheckSquare': return <CheckSquare className="w-6 h-6 text-[#F7A400]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#F7A400]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#F7A400]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#F7A400]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#F7A400]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#F7A400]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#F7A400]" />;
      default: return <Sparkles className="w-6 h-6 text-[#F7A400]" />;
    }
  };

  const currentCover = coverSlides[currentCoverIndex];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Fresh Interactive Hero Cover Page Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-br from-amber-50/60 via-slate-50 to-orange-50/40 text-zinc-900 border-b border-amber-200/80">
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7A400]/15 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Mode Switcher Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 shadow-md">
            <div className="flex items-center gap-3 text-xs">
              <span className="bg-[#F7A400] text-black font-extrabold px-2.5 py-1 rounded text-[10px] uppercase shadow-sm">
                Select Format
              </span>
              <span className="text-zinc-700 font-semibold">
                Offline Classroom (Pune Campus) & Online Live Interactive Batches Available
              </span>
            </div>

            <ModeToggle activeMode={activeMode} onChangeMode={setActiveMode} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-950 border border-amber-200 text-xs font-bold shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#E09300] animate-pulse"></span>
                <span className="text-amber-900 font-extrabold">Praavi Group Backed</span>
                <span className="text-amber-400">•</span>
                <span className="text-zinc-700">50+ Agency Client Accounts</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-zinc-900">
                From <span className="text-[#E09300]">Scroll</span> to <span className="text-zinc-900">Skill</span> to <span className="text-[#E09300]">Success</span>.
              </h1>

              <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl">
                Become <strong className="text-zinc-900 font-semibold">Job-Ready in 60 Days</strong>. Learn Digital Marketing through 100% practical execution in <strong className="text-[#E09300]">{activeMode === "Offline" ? "Offline Classroom (Pune Campus)" : "Online Live Interactive Studio"}</strong> with guaranteed agency internship support.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-zinc-700">
                <span className="bg-white border border-amber-200 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E09300]" />
                  <span>{siteConfig.duration}</span>
                </span>
                <span className="bg-white border border-amber-200 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E09300]" />
                  <span>Fee: {siteConfig.fee} (Save {siteConfig.discountAmount})</span>
                </span>
                <span className="bg-white border border-amber-200 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E09300]" />
                  <span>{activeMode === "Offline" ? "Loni Kalbhor Pune Campus" : "Pan-India Online Live Studio"}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenApply(`${activeMode} Batch`)}
                  className="bg-[#F7A400] hover:bg-[#E09300] text-black font-extrabold px-8 py-4 rounded-2xl text-base transition-all duration-200 shadow-xl shadow-[#F7A400]/25 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Apply Now for {activeMode} Batch ({siteConfig.fee})</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={onOpenDemo}
                  className="bg-white hover:bg-amber-50 text-zinc-800 font-bold px-6 py-4 rounded-2xl text-base border border-zinc-300 hover:border-[#F7A400] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Video className="w-5 h-5 text-[#E09300]" />
                  <span>Book Free Demo Class</span>
                </button>
              </div>

              {/* Rating Proof */}
              <div className="pt-2 flex items-center gap-4 text-xs text-zinc-600">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm" src="/images/faculty/1.png" alt="Student" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm" src="/images/faculty/2.png" alt="Student" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm" src="/images/faculty/3.png" alt="Student" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm" src="/images/faculty/4.png" alt="Student" />
                </div>
                <div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="ml-1.5 font-extrabold text-zinc-900 text-sm">4.8 / 5</span>
                  </div>
                  <span className="text-zinc-600 font-medium">Rated by 500+ PIDL Graduates</span>
                </div>
              </div>

            </div>

            {/* Right Media Column: Interactive Hero Cover Page Slider Frame */}
            <div className="lg:col-span-5 relative">
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-200/90 shadow-2xl bg-white group aspect-[4/3] sm:aspect-[16/11]">
                
                {/* Cover Image */}
                <img
                  src={currentCover.img}
                  alt={currentCover.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

                {/* Cover Slide Arrows */}
                <button
                  onClick={handlePrevCover}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#F7A400] hover:text-black text-zinc-800 p-2 rounded-full transition-colors z-20 shadow-md cursor-pointer"
                  aria-label="Previous Cover Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNextCover}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#F7A400] hover:text-black text-zinc-800 p-2 rounded-full transition-colors z-20 shadow-md cursor-pointer"
                  aria-label="Next Cover Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Campus Video Play Trigger Button (Top Right) */}
                <button
                  onClick={() => setSelectedHeroVideo({
                    videoUrl: "/videos/4.mp4",
                    title: "PIDL Pune Campus & Student Workstation Tour"
                  })}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-[#F7A400] text-zinc-900 hover:text-black px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 border border-zinc-200 z-20 cursor-pointer shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#E09300]" />
                  <span>Watch Campus Video</span>
                </button>

                {/* Light Glassmorphism Bottom Overlay Info Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/90 text-zinc-900 space-y-2 z-10 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#E09300] uppercase tracking-wider">
                      {currentCover.tag}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      100% Practical
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-zinc-900">{currentCover.title}</h3>
                  <p className="text-[11px] text-zinc-600 line-clamp-1">{currentCover.desc}</p>
                  
                  {/* Pagination Dots */}
                  <div className="pt-1 flex items-center justify-center space-x-1.5">
                    {coverSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentCoverIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentCoverIndex === idx ? "w-6 bg-[#F7A400]" : "w-1.5 bg-zinc-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>



        </div>
      </section>

      {/* 2. PhysicsWallah Signature Banner Section */}
      <PWBannerSection onOpenApply={onOpenApply} onOpenDemo={onOpenDemo} />

      {/* 3. Interactive Batch Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest bg-[#F7A400]/10 px-3 py-1 rounded-full border border-[#F7A400]/20">
            Interactive Batch Explorer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Upcoming Offline & Online Batches
          </h2>
          <p className="text-zinc-600 text-sm">
            Select your preferred batch schedule. Limited to 50 students per batch for 1:1 mentor attention.
          </p>

          <div className="pt-2 flex justify-center">
            <ModeToggle activeMode={activeMode} onChangeMode={setActiveMode} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatches.map((batch) => (
            <BatchCard
              key={batch.id}
              batch={batch}
              onOpenApply={onOpenApply}
              onOpenDemo={onOpenDemo}
              onDownloadSyllabus={onDownloadSyllabus}
            />
          ))}
        </div>
      </section>

      {/* 4. Codecademy Style Career Path Finder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CareerQuiz onOpenApply={onOpenApply} />
      </section>

      {/* 5. Udemy Style Software & Tools Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ToolStackGrid />
      </section>

      {/* 6. Why Choose PIDL Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
            Agency Advantage
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Why Students & Employers Choose PIDL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-white p-7 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-[#F7A400]/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-[#F7A400] transition-colors">
                  <div className="group-hover:text-black transition-colors">
                    {getIconComponent(feat.icon)}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-[#111111] group-hover:text-[#F7A400] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonial Preview Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
              Alumni Success
            </span>
            <h2 className="font-display text-3xl font-extrabold text-[#111111]">
              Student Transformation Stories
            </h2>
          </div>
          <Link to="/testimonials" className="text-sm font-bold text-[#111111] hover:text-[#F7A400] flex items-center gap-1">
            <span>View All Reviews</span> <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentStories.slice(0, 3).map((story) => (
            <div key={story.id} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-[#F7A400]/20 text-[#111111] rounded">
                  {story.category}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {story.hike}
                </span>
              </div>
              <p className="text-xs text-zinc-700 italic">"{story.quote}"</p>
              <div className="pt-3 border-t border-zinc-100 flex items-center gap-3">
                <img src={story.avatar} alt={story.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-xs text-[#111111]">{story.name}</h4>
                  <p className="text-[10px] text-zinc-500">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white p-8 sm:p-12 rounded-3xl border border-zinc-800 text-center space-y-6 shadow-2xl">
          <span className="bg-[#F7A400]/20 text-[#F7A400] text-xs font-bold uppercase px-3 py-1 rounded-full">
            Starts {siteConfig.nextBatchDate}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
            Reserve Your Seat for Offline Campus or Online Live Batch
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Fee: <strong>{siteConfig.fee}</strong> (Save {siteConfig.discountAmount}) with guaranteed 2-week agency internship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenApply("Digital Marketing")}
              className="w-full sm:w-auto bg-[#F7A400] text-black font-bold px-8 py-4 rounded-xl text-base hover:bg-[#E09300] transition-colors cursor-pointer"
            >
              Enroll Now ({siteConfig.fee})
            </button>
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto bg-zinc-900 text-white font-semibold px-6 py-4 rounded-xl text-base border border-zinc-700 hover:bg-zinc-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Video className="w-5 h-5 text-[#F7A400]" />
              <span>Book Free Demo Class</span>
            </button>
          </div>
        </div>
      </section>

      {/* Hero Campus Video Modal Popup */}
      <VideoModal
        isOpen={selectedHeroVideo !== null}
        videoUrl={selectedHeroVideo?.videoUrl}
        title={selectedHeroVideo?.title}
        onClose={() => setSelectedHeroVideo(null)}
      />

    </div>
  );
};
