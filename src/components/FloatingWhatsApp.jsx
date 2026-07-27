import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, ArrowRight, Activity, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, SYMPTOM_AREAS } from '../data/clinicalData';

const FloatingWhatsApp = ({ onOpenTriage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [patientNote, setPatientNote] = useState('');
  const popoverRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSendWhatsApp = () => {
    const topicText = selectedTopic ? `📍 *Primary Concern:* ${selectedTopic}\n` : '';
    const noteText = patientNote ? `📝 *Note:* "${patientNote}"\n` : '';
    
    const text = `👋 *Hello Dr. Jeni Theresa Rehab Desk,* \n\nI would like to schedule an expert Home Visit physiotherapy session in ${CLINIC_INFO.city} / Online Video Tele-Rehab.\n\n${topicText}${noteText}\nPlease let me know available doctor time slots and fee confirmation. Thank you!`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end" ref={popoverRef}>
      
      {/* Interactive Concierge Popover Sheet */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] rounded-3xl bg-[#FAF8F5] border-2 border-[#0A1C17] shadow-[0_12px_45px_rgba(10,28,23,0.3)] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#0A1C17] text-[#FAF8F5] p-5 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#C2593B]/20 blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between relative z-10 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono-tech uppercase font-bold text-emerald-300 tracking-wider">
                  Live Clinic Concierge
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF8F5] transition-colors cursor-pointer"
                aria-label="Close chat concierge"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-serif-clinical text-xl font-bold tracking-tight text-white mb-1">
              Dr. Jeni Theresa, DPT
            </h3>
            <p className="text-xs font-mono-tech text-white/80 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D2A13E]" />
              <span>Typical WhatsApp reply: <strong className="text-white font-semibold">Under 15 mins</strong></span>
            </p>
          </div>

          {/* Quick Body & Selection Sheet */}
          <div className="p-5 space-y-4">
            <div>
              <label className="block text-xs font-mono-tech font-bold text-[#0A1C17]/80 uppercase tracking-wider mb-2">
                1. What feels clinically restricted?
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Cervical & Neck Stiffness",
                  "Lumbar Back & Disc Pain",
                  "Knee & Patellar Tracking",
                  "Rotator Cuff & Shoulder",
                  "Post-Surgical / Other Rehab"
                ].map((topic) => {
                  const active = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(active ? '' : topic)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                        active 
                          ? 'bg-[#C2593B] text-white border-transparent font-bold shadow-sm' 
                          : 'bg-white text-[#0A1C17]/90 border-[#0A1C17]/15 hover:border-[#0A1C17]/40'
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-tech font-bold text-[#0A1C17]/80 uppercase tracking-wider mb-1.5">
                2. Brief note or symptom (Optional)
              </label>
              <input
                type="text"
                value={patientNote}
                onChange={(e) => setPatientNote(e.target.value)}
                placeholder="e.g., Lower back pain during two-wheeler auto ride..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#0A1C17]/20 text-xs text-[#0A1C17] placeholder:text-[#0A1C17]/40 focus:outline-none focus:ring-2 focus:ring-[#C2593B] transition-shadow"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-[#0A1C17] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 fill-[#0A1C17] text-[#FAF8F5]" />
                <span>Connect Direct on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] font-mono-tech text-[#0A1C17]/80 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C2593B]" />
                <span>🔐 Private Encrypted Booking Line</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#0A1C17]/10 flex items-center justify-between text-xs text-[#0A1C17]/80">
              <span className="font-mono-tech font-semibold">Prefer formal triage?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenTriage) onOpenTriage();
                }}
                className="font-bold text-[#C2593B] underline underline-offset-2 hover:text-[#0A1C17] transition-colors cursor-pointer"
              >
                Launch Triage Wizard &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#0A1C17] hover:bg-[#163029] text-[#FAF8F5] border-2 border-emerald-500/50 shadow-[0_8px_30px_rgba(10,28,23,0.35)] hover:shadow-[0_12px_40px_rgba(194,89,59,0.3)] hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
        aria-label="Open clinical WhatsApp concierge"
      >
        {/* Pulsing online badge */}
        <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] text-[#0A1C17] shadow-sm shrink-0">
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#0A1C17]" />
        </div>

        <div className="flex flex-col items-start text-left pr-1">
          <span className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5 leading-tight">
            Ask Dr. Jeni
          </span>
          <span className="text-[10px] font-mono-tech text-emerald-300 font-semibold leading-tight flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Triage • Bengaluru & Online
          </span>
        </div>
      </button>

    </div>
  );
};

export default FloatingWhatsApp;
