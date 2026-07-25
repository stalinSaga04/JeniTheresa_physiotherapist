import React from 'react';
import { Activity, MapPin, Phone, Mail, ShieldAlert, ArrowUp } from 'lucide-react';
import { CREDENTIALS, CLINIC_INFO } from '../data/clinicalData';

const Footer = ({ onOpenTriage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1C17] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/15">
          
          {/* Column 1 & 2: Practice Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C2593B] text-white flex items-center justify-center shadow-lg">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-clinical font-bold text-2xl text-white block leading-none">
                  Dr. Jeni Theresa
                </span>
                <span className="text-[11px] font-mono-tech text-emerald-300 uppercase tracking-widest block mt-0.5 font-bold">
                  PT, DPT • Clinical Sports Medicine
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FAF8F5]/80 font-normal leading-relaxed max-w-sm">
              We specialize in complex orthopedic problem solving, sports kinetic rehabilitation, and evidence-based structural movement restoration. Dedicated one-on-one DPT attention guaranteed for every consultation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenTriage}
                className="px-6 py-3 rounded-xl bg-[#C2593B] hover:bg-[#A84528] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Book Consultation
              </button>
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer flex items-center justify-center border border-white/10"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <span className="text-xs font-mono-tech uppercase font-bold text-[#C2593B] tracking-wider block mb-5">
              Clinical Portal
            </span>
            <ul className="space-y-3 font-semibold text-sm text-[#FAF8F5]/80">
              <li><a href="#symptom-map" className="hover:text-white transition-colors">Symptom Diagnostic Map</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Honest Recovery Timeline</a></li>
              <li><a href="#ergo-lab" className="hover:text-white transition-colors">Ergonomic Strain Calculator</a></li>
              <li><a href="#modalities" className="hover:text-white transition-colors">Medical Modalities</a></li>
              <li><a href="#case-vault" className="hover:text-white transition-colors">Evidence Case Vault</a></li>
            </ul>
          </div>

          {/* Column 4: Credentials */}
          <div>
            <span className="text-xs font-mono-tech uppercase font-bold text-emerald-400 tracking-wider block mb-5">
              Accreditation & Specialty
            </span>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/80 font-medium leading-relaxed">
              {CREDENTIALS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2593B] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Location & Timing */}
          <div className="space-y-4">
            <span className="text-xs font-mono-tech uppercase font-bold text-[#D2A13E] tracking-wider block mb-1">
              Clinic Contact & Triage
            </span>
            <div className="space-y-2.5 text-xs text-[#FAF8F5]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C2593B] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C2593B] shrink-0" />
                <span className="font-mono-tech font-bold">{CLINIC_INFO.phone} (Direct WhatsApp Triage)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C2593B] shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono-tech text-white/90">
              <strong>HOURS:</strong> {CLINIC_INFO.hours} <br />
              <span className="text-emerald-300 font-bold">● {CLINIC_INFO.teleRehabHours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#FAF8F5]/50 gap-4">
          <p>© {new Date().getFullYear()} Dr. Jeni Theresa, PT, DPT. All clinical rights reserved. Architected with high orthopedic integrity.</p>
          <div className="flex items-center gap-1.5 text-amber-300/80">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Emergency Note: For severe acute trauma or loss of sensation, visit an ER immediately.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
