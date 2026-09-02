import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  HelpCircle,
  Video,
  Calculator
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ModeToggle } from '../components/ModeToggle';
import { BatchCard } from '../components/BatchCard';

export const AdmissionsPage = ({ onOpenApply, onOpenDemo, onDownloadSyllabus }) => {
  const [activeMode, setActiveMode] = useState("Offline");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    email: '',
    location: '',
    education: 'Graduate',
    workExperience: 'Fresher',
    courseInterest: 'Digital Marketing',
    preferredMode: activeMode,
    referralSource: 'Social Media',
    goals: '',
    agreedTerms: true,
    agreedMarketing: true
  });

  const filteredBatches = siteConfig.batches.filter(b => 
    b.mode === activeMode || b.mode === "Hybrid"
  );

  const admissionSteps = [
    {
      step: "01",
      title: "Submit Application",
      desc: "Fill out the online application form with your background details & course preference."
    },
    {
      step: "02",
      title: "Counseling Call",
      desc: "Our academic counselor will contact you via WhatsApp/call within 24 hours to discuss your career goals."
    },
    {
      step: "03",
      title: "Payment & Confirmation",
      desc: "Pay the course fee of ₹9,999 (or 1st EMI of ₹4,999 via GPay/UPI) to secure your seat slot."
    },
    {
      step: "04",
      title: "Pre-Course Material",
      desc: "Receive access to initial orientation guides, tool setup links, and WhatsApp batch group."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header */}
      <section className="bg-[#111111] text-white py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest bg-[#F7A400]/10 px-3 py-1 rounded-full border border-[#F7A400]/20">
            PIDL Official Admissions Portal
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Enroll in Upcoming Batches
          </h1>

          <p className="text-zinc-300 text-base max-w-2xl leading-relaxed">
            Choose between <strong className="text-white">Offline Classroom (Loni Kalbhor Pune)</strong> or <strong className="text-white">Online Live Interactive</strong> modes with guaranteed 2-week agency internship.
          </p>

          <div className="pt-2">
            <ModeToggle activeMode={activeMode} onChangeMode={setActiveMode} />
          </div>
        </div>
      </section>

      {/* 2. PW/KGS Style Batch Card Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
            Seat Capacity Tracker
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            Active {activeMode} Batches
          </h2>
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

      {/* 3. Transparent Fee Calculator Breakdown */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-[#F7A400] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-[#111111]">Transparent Fee Structure Breakdown</h3>
              <p className="text-xs text-zinc-500">No hidden costs. Includes training, tools, materials, dual diploma & internship.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
              <span className="text-xs text-zinc-500 font-semibold block">Regular Course Fee</span>
              <span className="text-xl font-display font-bold text-zinc-400 line-through">{siteConfig.originalFee}</span>
            </div>

            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
              <span className="text-xs text-amber-800 font-semibold block">Early Bird Discount</span>
              <span className="text-xl font-display font-bold text-amber-900">{siteConfig.discountAmount}</span>
            </div>

            <div className="bg-zinc-900 text-white p-4 rounded-2xl">
              <span className="text-xs text-[#F7A400] font-semibold block">Net Payable Fee</span>
              <span className="text-2xl font-display font-extrabold text-white">{siteConfig.fee}</span>
              <span className="text-[10px] text-zinc-400 block mt-0.5">EMI: {siteConfig.emiPlan}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4-Step Admission Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">
            Hassle-Free Enrollment
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">
            4-Step Admission Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((s) => (
            <div key={s.step} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3 relative">
              <span className="font-display text-3xl font-extrabold text-[#F7A400]">{s.step}</span>
              <h3 className="font-display font-bold text-lg text-[#111111]">{s.title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Application Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18181B] text-white p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-2xl space-y-8">
          
          <div className="text-center space-y-2">
            <span className="bg-[#F7A400] text-black text-[10px] font-bold px-3 py-1 rounded uppercase">
              Official Enrollment Form
            </span>
            <h2 className="font-display text-3xl font-extrabold">PIDL Student Application Form</h2>
            <p className="text-xs text-zinc-400">Fill in all details. Select Offline Pune or Online Live mode.</p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F7A400]/20 border border-[#F7A400] text-[#F7A400] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Application Submitted Successfully!</h3>
              <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you <strong>{formData.fullName}</strong>. We have logged your application for <strong>{formData.courseInterest} ({formData.preferredMode} Mode)</strong>. Our counselor will reach out to <strong>{formData.whatsappNumber}</strong> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Location / City *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Loni Kalbhor / Hadapsar / Pune"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Learning Mode *</label>
                  <select
                    value={formData.preferredMode}
                    onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="Offline">Offline Classroom (Pune Campus)</option>
                    <option value="Online">Online Live Interactive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Education Level *</label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="12th Pass">12th Pass</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Work Experience *</label>
                  <select
                    value={formData.workExperience}
                    onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="Fresher">Fresher</option>
                    <option value="0-1">0 - 1 Year</option>
                    <option value="1-3">1 - 3 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Goals & Expectations</label>
                <textarea
                  rows="3"
                  placeholder="Tell us what you hope to achieve through this course..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                ></textarea>
              </div>

              <div className="space-y-3 text-xs text-zinc-400">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreedTerms}
                    onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                    className="mt-1 accent-[#F7A400]"
                  />
                  <span>I agree to PIDL terms and enrollment policies.</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedMarketing}
                    onChange={(e) => setFormData({ ...formData, agreedMarketing: e.target.checked })}
                    className="mt-1 accent-[#F7A400]"
                  />
                  <span>Opt-in for WhatsApp batch updates and curriculum materials.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F7A400] hover:bg-[#E09300] text-black font-bold py-4 rounded-xl text-base transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Application & Confirm Seat ({siteConfig.fee})</span>
              </button>

            </form>
          )}

        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest">Got Questions?</span>
          <h2 className="font-display text-3xl font-extrabold text-[#111111]">Admissions FAQ</h2>
        </div>

        <div className="space-y-4">
          {siteConfig.admissionsFaqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center cursor-pointer font-display font-bold text-base text-[#111111]"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#F7A400]" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
