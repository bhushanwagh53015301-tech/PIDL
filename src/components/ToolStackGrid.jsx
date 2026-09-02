import React from 'react';
import { Cpu, Star, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ToolStackGrid = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-amber-950 uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200 inline-block shadow-sm">
          Udemy-Style Practical Tools Matrix
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111]">
          Industry Tools & Software You Will Master
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
          No hypothetical slides. Gain 100% hands-on campaign execution experience on active agency tool suites.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {siteConfig.toolsStack.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-[#F7A400] transition-all duration-300 space-y-3 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {tool.category}
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  {tool.level}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#111111] group-hover:text-[#E09300] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Live Agency Client Execution & Teardown
                </p>
              </div>

              {/* Udemy Rating Bar */}
              <div className="flex items-center gap-1.5 pt-1 text-xs">
                <span className="font-extrabold text-amber-900">4.9</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-zinc-600 font-medium">(420+ Reviews)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
              <span className="text-[11px] font-bold text-zinc-700 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Practical</span>
              </span>

              <span className="font-extrabold text-[#E09300] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 text-xs">
                <span>Master Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
