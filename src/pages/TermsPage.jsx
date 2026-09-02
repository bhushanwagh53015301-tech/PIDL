import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-zinc-800">
      <div className="space-y-3 border-b border-zinc-200 pb-6">
        <span className="text-xs font-bold text-[#F7A400] uppercase tracking-wider bg-[#F7A400]/10 px-3 py-1 rounded-full">
          Enrollment Terms
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111]">
          Terms & Conditions
        </h1>
        <p className="text-xs text-zinc-500">Effective: February 2026 | PIDL Official Guidelines</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-zinc-700">
        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-[#111111]">1. Course Fee & EMI Payment Terms</h2>
          <p>
            Enrollment in the Digital Leadership Program requires payment of the promotional fee ({siteConfig.fee}) or the first installment of {siteConfig.emiPlan} prior to batch commencement. Fees cover training sessions, course materials, dual certification, and 2-week agency internship allocation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-[#111111]">2. Attendance & Certification Eligibility</h2>
          <p>
            Students must maintain minimum 80% attendance across live lectures and submit mandatory practical assignments to qualify for course completion certification and the 2-week Praavi Group internship recommendation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-[#111111]">3. Intellectual Property Rights</h2>
          <p>
            All course materials, strategy frameworks, presentation teardowns, and proprietary templates provided by PIDL and Praavi Group remain copyrighted intellectual property. Reproduction or commercial resale without written authorization is strictly prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-[#111111]">4. Code of Conduct</h2>
          <p>
            Students are expected to maintain professional behavior in classroom sessions, online batch groups, and during client project execution.
          </p>
        </section>
      </div>
    </div>
  );
};
