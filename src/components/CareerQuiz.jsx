import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, RefreshCw, Briefcase, UserCheck, TrendingUp } from 'lucide-react';

export const CareerQuiz = ({ onOpenApply }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    mode: '',
    timeCommitment: ''
  });

  const goals = [
    { id: "job", title: "Get High-Paying Agency Job", desc: "Target 85% placement rate, performance ad roles, and interview prep.", icon: "Briefcase" },
    { id: "freelance", title: "Start Independent Freelancing", desc: "Build ₹50K+/month retainer client pipeline and proposal frameworks.", icon: "UserCheck" },
    { id: "business", title: "Scale My Business / Startup", desc: "Master ROAS optimization, lead funnels, and political/brand marketing.", icon: "TrendingUp" }
  ];

  const modes = [
    { id: "Offline", title: "Offline Classroom (Pune Campus)", desc: "In-person computer lab access, 1:1 faculty desk guidance." },
    { id: "Online", title: "Online Live Interactive", desc: "Live 2-way HD sessions from anywhere with recorded portal." }
  ];

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ goal: '', mode: '', timeCommitment: '' });
  };

  return (
    <div className="bg-[#111111] text-white p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden space-y-6">
      
      {/* Quiz Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-[#F7A400] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Career Path Finder</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white">Find Your Ideal PIDL Learning Track</h3>
        </div>

        {step > 1 && (
          <button
            onClick={resetQuiz}
            className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restart Quiz</span>
          </button>
        )}
      </div>

      {/* Quiz Body */}
      {step === 1 && (
        <div className="space-y-4 animate-fadeIn">
          <span className="text-xs font-semibold text-zinc-400 block">Step 1 of 2: What is your primary career objective?</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {goals.map((g) => (
              <div
                key={g.id}
                onClick={() => {
                  setAnswers({ ...answers, goal: g.title });
                  setStep(2);
                }}
                className="bg-zinc-900 hover:bg-[#F7A400] hover:text-black p-6 rounded-2xl border border-zinc-800 transition-all duration-200 cursor-pointer group space-y-3"
              >
                <h4 className="font-display font-bold text-base text-white group-hover:text-black">{g.title}</h4>
                <p className="text-xs text-zinc-400 group-hover:text-zinc-900 leading-relaxed">{g.desc}</p>
                <span className="text-xs font-bold text-[#F7A400] group-hover:text-black flex items-center gap-1 pt-2">
                  Select Goal <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-fadeIn">
          <span className="text-xs font-semibold text-zinc-400 block">Step 2 of 2: Preferred class attendance format?</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modes.map((m) => (
              <div
                key={m.id}
                onClick={() => {
                  setAnswers({ ...answers, mode: m.id });
                  setStep(3);
                }}
                className="bg-zinc-900 hover:bg-[#F7A400] hover:text-black p-6 rounded-2xl border border-zinc-800 transition-all duration-200 cursor-pointer group space-y-3"
              >
                <h4 className="font-display font-bold text-base text-white group-hover:text-black">{m.title}</h4>
                <p className="text-xs text-zinc-400 group-hover:text-zinc-900 leading-relaxed">{m.desc}</p>
                <span className="text-xs font-bold text-[#F7A400] group-hover:text-black flex items-center gap-1 pt-2">
                  Choose Format <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-zinc-900/90 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase px-3 py-1 rounded">
              Recommended Track Found
            </span>
            <h4 className="font-display text-2xl font-bold text-white">
              PIDL Digital Leadership — {answers.mode} Track
            </h4>
            <p className="text-xs text-zinc-300">
              Tailored focus: <strong>{answers.goal}</strong> via <strong>{answers.mode} learning</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
            <div className="flex items-center gap-2 bg-black/40 p-3 rounded-lg border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-[#F7A400] shrink-0" />
              <span>Full 10-Module Practical Curriculum</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 p-3 rounded-lg border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-[#F7A400] shrink-0" />
              <span>3 Live Praavi Group Client Campaigns</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 p-3 rounded-lg border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-[#F7A400] shrink-0" />
              <span>Guaranteed 2-Week Agency Internship</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 p-3 rounded-lg border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-[#F7A400] shrink-0" />
              <span>Dual Industry Diploma Certificate</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenApply(`${answers.mode} Batch`)}
              className="bg-[#F7A400] hover:bg-[#E09300] text-black font-bold px-8 py-3.5 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Enroll in Recommended Track (₹9,999)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={resetQuiz}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
