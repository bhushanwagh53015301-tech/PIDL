import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-zinc-800">
      <div className="space-y-3 border-b border-zinc-200 pb-6">
        <span className="text-xs font-bold text-[#F7A400] uppercase tracking-wider bg-[#F7A400]/10 px-3 py-1 rounded-full">
          Legal & Privacy
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111]">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-500">Last updated: February 2026 | PIDL — Praavi Institute of Digital Leadership</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-zinc-700">
        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-[#111111]">1. Information Collection</h2>
          <p>
            PIDL collects personal details provided voluntarily by students and prospective applicants during course inquiry, registration, or counseling interactions. This information includes full name, WhatsApp phone number, email address, educational background, and location.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-[#111111]">2. Use of Information</h2>
          <p>
            Your information is used exclusively to facilitate academic counseling, process admissions, deliver course study materials, coordinate batch schedules, issue certificates, and provide job placement / internship support through Praavi Group.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-[#111111]">3. Data Security & Confidentiality</h2>
          <p>
            PIDL maintains industry-standard security protocols to protect student data against unauthorized access, disclosure, or alteration. We do not sell, rent, or trade student personal records to third-party marketing entities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display font-bold text-lg text-[#111111]">4. Contact Privacy Officer</h2>
          <p>
            If you have questions regarding data privacy or wish to update your contact preferences, please email us at <a href={`mailto:${siteConfig.email}`} className="text-[#F7A400] font-semibold">{siteConfig.email}</a> or write to PIDL, Loni Kalbhor, Pune, Maharashtra 412201.
          </p>
        </section>
      </div>
    </div>
  );
};
