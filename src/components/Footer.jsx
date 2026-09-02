import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, ExternalLink, Shield, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer = () => {
  return (
    <footer className="bg-[#0B0B0C] text-zinc-400 pt-16 pb-24 md:pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand & Parent Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <img
                  src={siteConfig.logos.footerLogo}
                  alt="PIDL Footer Logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <span className="font-display font-bold text-white text-xl">PIDL</span>
            </div>
            
            <p className="text-xs leading-relaxed text-zinc-400">
              Praavi Institute of Digital Leadership — Pune’s premier 100% practical digital marketing training institute for youth aged 17–28.
            </p>

            <div className="pt-2">
              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                <img src={siteConfig.logos.praaviLogo} alt="Praavi Group" className="h-6 w-auto object-contain bg-white/10 p-0.5 rounded" />
                <div className="text-[11px]">
                  <span className="block font-semibold text-white">Backed by Praavi Group</span>
                  <span className="text-zinc-400">Digital agency managing 50+ active client brands across India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm tracking-wider uppercase mb-4 text-[#F7A400]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About PIDL & Praavi Group</Link></li>
              <li><Link to="/curriculum" className="hover:text-white transition-colors">10-Module Curriculum</Link></li>
              <li><Link to="/faculty" className="hover:text-white transition-colors">Faculty & Mentors (11 Core)</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Campus & Activity Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Student Placement Reviews</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions & Fees</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us & Campus Location</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs & Certification */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm tracking-wider uppercase mb-4 text-[#F7A400]">
              Program Highlights
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#F7A400]" />
                <span>6 Weeks Learning + 2 Weeks Internship</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#F7A400]" />
                <span>Special Fee: {siteConfig.fee} (EMI {siteConfig.emiPlan})</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#F7A400]" />
                <span>3 Live Client Projects Guaranteed</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#F7A400]" />
                <span>10+ Industry Guest Lectures</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#F7A400]" />
                <span>85% Job Placement Rate</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Info */}
          <div>
            <h4 className="font-display text-white font-semibold text-sm tracking-wider uppercase mb-4 text-[#F7A400]">
              Campus Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F7A400] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F7A400] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white font-medium">
                  {siteConfig.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F7A400] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white font-medium">
                  {siteConfig.email}
                </a>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-zinc-900 hover:bg-[#F7A400] hover:text-black rounded-lg border border-zinc-800 transition-colors text-zinc-300 flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-xs font-semibold">{siteConfig.instagram}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} PIDL — Praavi Institute of Digital Leadership. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Designed for PIDLOFFICIAL.ORG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
