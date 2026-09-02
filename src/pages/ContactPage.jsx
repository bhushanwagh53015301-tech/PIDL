import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Bus, 
  Train, 
  Car, 
  MessageCircle, 
  Navigation, 
  ChevronDown, 
  ChevronUp, 
  Send,
  CheckCircle
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const contactFaqs = [
    {
      q: "What is the fee and payment breakdown?",
      a: `Fee is ${siteConfig.fee} only (regular fee ${siteConfig.originalFee}). Payable in easy EMI of ${siteConfig.emiPlan} via Google Pay, PhonePe, or UPI.`
    },
    {
      q: "What are the exact class timings?",
      a: "Main Batch: Monday to Friday 6:00 PM – 8:00 PM. Weekend Batch & Doubt Sessions: Saturday to Sunday 9:00 AM – 12:00 PM."
    },
    {
      q: "Can I visit the campus before enrolling?",
      a: "Yes! Campus visits are open Monday to Saturday from 9:00 AM to 7:00 PM. You can meet our faculty, tour the computer lab, and attend a counseling session."
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest bg-[#F7A400]/10 px-3 py-1 rounded-full border border-[#F7A400]/20">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact PIDL Pune Campus
          </h1>
          <p className="text-zinc-300 text-base max-w-2xl">
            Have questions about course fees, batch timings, or campus visits? Reach out to our counseling team anytime.
          </p>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-[#F7A400] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#111111]">Phone & Hotline</h3>
            <a href={`tel:${siteConfig.phone}`} className="text-xs font-semibold text-[#111111] hover:text-[#F7A400] block">
              {siteConfig.formattedPhone}
            </a>
            <p className="text-[11px] text-zinc-500">Mon–Sat 9:00 AM – 7:00 PM</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <h3 className="font-display font-bold text-base text-[#111111]">WhatsApp Support</h3>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#25D366] hover:underline block">
              Chat 24/7 on WhatsApp
            </a>
            <p className="text-[11px] text-zinc-500">Instant counselor response</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-[#F7A400] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#111111]">Email Address</h3>
            <a href={`mailto:${siteConfig.email}`} className="text-xs font-semibold text-[#111111] hover:text-[#F7A400] block">
              {siteConfig.email}
            </a>
            <p className="text-[11px] text-zinc-500">Official inquiries & support</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-[#F7A400] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#111111]">Campus Hours</h3>
            <span className="text-xs font-semibold text-[#111111] block">Mon–Sat: 9 AM – 7 PM</span>
            <p className="text-[11px] text-zinc-500">Sunday closed (except doubt sessions)</p>
          </div>

        </div>
      </section>

      {/* 3. Location, Directions & Map Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Directions & Address (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold text-[#F7A400] uppercase tracking-widest block mb-1">
                  Campus Address
                </span>
                <h3 className="font-display text-xl font-bold text-[#111111]">
                  PIDL — Praavi Institute of Digital Leadership
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                  {siteConfig.fullAddress}
                </p>
              </div>

              {/* Transit Guide */}
              <div className="space-y-3 pt-4 border-t border-zinc-100">
                <h4 className="font-display font-bold text-sm text-[#111111] flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#F7A400]" />
                  <span>How to Reach PIDL Campus</span>
                </h4>

                <div className="space-y-2 text-xs text-zinc-600">
                  <div className="flex items-center gap-2.5 bg-zinc-50 p-2.5 rounded-lg">
                    <Bus className="w-4 h-4 text-[#111111] shrink-0" />
                    <span><strong>Bus (PMPML):</strong> Buses available every 15–20 min from Swargate/Hadapsar to Loni Kalbhor.</span>
                  </div>

                  <div className="flex items-center gap-2.5 bg-zinc-50 p-2.5 rounded-lg">
                    <Train className="w-4 h-4 text-[#111111] shrink-0" />
                    <span><strong>Train:</strong> Loni Junction Railway Station is just <strong>200 meters (2-min walk)</strong> from campus.</span>
                  </div>

                  <div className="flex items-center gap-2.5 bg-zinc-50 p-2.5 rounded-lg">
                    <Car className="w-4 h-4 text-[#111111] shrink-0" />
                    <span><strong>Car / Two-Wheeler:</strong> Ample free dedicated parking available on campus premises.</span>
                  </div>
                </div>
              </div>

              {/* Landmarks */}
              <div className="pt-4 border-t border-zinc-100 space-y-2 text-xs">
                <span className="font-semibold text-zinc-800 block">Nearby Landmarks:</span>
                <ul className="grid grid-cols-1 gap-1.5 text-zinc-600">
                  <li>• Loni Kalbhor Bus Stand (2 min walk)</li>
                  <li>• Loni Kalbhor Market (5 min walk)</li>
                  <li>• Government Hospital (10 min walk)</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Interactive Google Map (Right) */}
          <div className="lg:col-span-7 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl relative min-h-[400px]">
            <iframe
              title="PIDL Pune Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.092789178385!2d74.0205!3d18.4795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1d355555555%3A0x123456789abcdef!2sLoni%20Kalbhor%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 4. Quick Contact Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#18181B] text-white p-8 sm:p-10 rounded-3xl border border-zinc-800 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="font-display text-2xl font-bold">Send Quick Message / Inquiry</h3>
            <p className="text-xs text-zinc-400">Ask us anything about course modules, fees, or class schedules.</p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-[#F7A400] mx-auto" />
              <h4 className="font-display font-bold text-lg">Inquiry Sent Successfully!</h4>
              <p className="text-xs text-zinc-400">Our Pune team will reply to {formData.phone} shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
                />
              </div>

              <textarea
                rows="3"
                placeholder="Write your question or message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7A400]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#F7A400] text-black font-bold py-3.5 rounded-xl text-sm hover:bg-[#E09300] transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Counselor</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 5. Contact FAQs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="font-display font-bold text-xl text-[#111111] text-center">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {contactFaqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-4 text-left font-display font-bold text-sm text-[#111111] flex justify-between items-center cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#F7A400]" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-2">
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
