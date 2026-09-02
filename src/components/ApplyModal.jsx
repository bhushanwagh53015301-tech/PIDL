import React, { useState } from 'react';
import { X, CheckCircle, Send, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ApplyModal = ({ isOpen, onClose, selectedCourse = "Digital Marketing" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    email: '',
    location: '',
    education: 'Graduate',
    workExperience: 'Fresher',
    courseInterest: selectedCourse,
    referralSource: 'Social Media',
    goals: '',
    agreedTerms: true,
    agreedMarketing: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Auto reset after submission view
    setTimeout(() => {
      // Allow user to read success screen
    }, 500);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#18181B] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-white">
        
        {/* Header */}
        <div className="bg-[#111111] p-6 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#F7A400] text-black text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                Limited Batch
              </span>
              <span className="text-xs text-zinc-400">Next Batch: {siteConfig.nextBatchDate}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Apply for PIDL Digital Leadership Program
            </h3>
          </div>
          <button
            onClick={resetForm}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-800/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F7A400]/20 border border-[#F7A400] text-[#F7A400] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">
                Application Received Successfully!
              </h4>
              <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our academic counseling team will contact you on WhatsApp (<strong>{formData.whatsappNumber}</strong>) within 24 hours to confirm your seat details.
              </p>
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-400 max-w-md mx-auto">
                <span className="block font-semibold text-white mb-1">Next Step in 4-Step Process:</span>
                Step 2 — Counseling Call & Batch Slot Confirmation.
              </div>
              <button
                onClick={resetForm}
                className="mt-6 bg-[#F7A400] text-black font-bold px-8 py-3 rounded-xl hover:bg-[#E09300] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="p-3 bg-zinc-900/90 rounded-xl border border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Calendar className="w-4 h-4 text-[#F7A400]" />
                  <span>Fee: <strong>{siteConfig.fee}</strong> (EMI {siteConfig.emiPlan})</span>
                </div>
                <span className="text-[#F7A400] font-semibold">{siteConfig.seatsRemaining} Seats Remaining</span>
              </div>

              {/* Personal Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Patil"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">City / Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune / Hadapsar / Loni"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  />
                </div>
              </div>

              {/* Select Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Education Level *</label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="12th Pass">12th Pass</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Work Experience *</label>
                  <select
                    value={formData.workExperience}
                    onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="Fresher">Fresher (0 Years)</option>
                    <option value="0-1">0 - 1 Year</option>
                    <option value="1-3">1 - 3 Years</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Course Interested In *</label>
                  <select
                    value={formData.courseInterest}
                    onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="Digital Marketing">Digital Marketing (6 Weeks + 2 Weeks Internship)</option>
                    <option value="Web Development">Web Development Course</option>
                    <option value="German Language">German Language Learning</option>
                    <option value="Japanese Language">Japanese Language Learning</option>
                    <option value="Spoken English">Spoken English & Communication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">How did you hear about us? *</label>
                  <select
                    value={formData.referralSource}
                    onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                  >
                    <option value="Google Search">Google Search</option>
                    <option value="Social Media">Social Media (Instagram/FB)</option>
                    <option value="Friend-Family">Friend / Family Recommendation</option>
                    <option value="Advertisement">Online Advertisement</option>
                    <option value="College-University">College / Campus</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Goals & Expectations (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Tell us what you want to achieve (e.g. get an agency job, start freelancing, upgrade business)..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                ></textarea>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2 pt-2 text-xs text-zinc-400">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreedTerms}
                    onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                    className="mt-0.5 accent-[#F7A400]"
                  />
                  <span>I agree to PIDL's terms of enrollment and counseling privacy guidelines.</span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedMarketing}
                    onChange={(e) => setFormData({ ...formData, agreedMarketing: e.target.checked })}
                    className="mt-0.5 accent-[#F7A400]"
                  />
                  <span>I agree to receive course updates, batch alerts, and brochure PDFs via WhatsApp/Email.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-[#F7A400] hover:bg-[#E09300] text-black font-bold py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-[#F7A400]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Application & Reserve Seat</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
