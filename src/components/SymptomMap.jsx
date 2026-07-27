import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SYMPTOM_AREAS, CLINIC_INFO } from '../data/clinicalData';
import { Activity, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight, Clock, Sparkles, Flame, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollAnimations';

const SymptomMap = ({ onSelectSymptomForTriage }) => {
  const [selectedArea, setSelectedArea] = useState(SYMPTOM_AREAS[0]);
  const scrollRef = useScrollReveal();

  const handleWhatsAppConsult = (areaName) => {
    const text = `👋 *Hi Dr. Jeni Theresa Rehab Desk,* \n\nI experienced symptoms related to *${areaName}*. I would like to check available timings and fee details for a dedicated Home Visit in ${CLINIC_INFO.city} / Online Video Rehab.\n\nPlease let me know your consultation schedule!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={scrollRef} id="symptom-map" className="py-24 md:py-32 bg-gradient-to-b from-[#FAF8F5] via-[#F0F5F2] to-[#FAF8F5] text-[#0A1C17] relative overflow-hidden">
      
      {/* Delicate ambient backdrop glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-clinical-grid opacity-40 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Section Heading & SEO Intro */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1C17] text-[#FAF8F5] text-xs font-mono-tech uppercase font-bold tracking-wider mb-4 shadow-sm border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D2A13E]" />
            <span>Interactive Biomechanical Diagnostic Vault</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0A1C17] mb-4 leading-tight font-sans">
            Where Is Your Body Signaling <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2593B] via-[#0A1C17] to-emerald-800">
              Mechanical Friction & Pain?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0A1C17]/80 max-w-2xl mx-auto font-medium leading-relaxed font-sans">
            Select an orthopedic problem below to inspect the anatomical science behind your pain, discover why generic surface balms fail, and explore Dr. Jeni's specialized home recovery solution.
          </p>
        </div>

        {/* TOP INTERACTIVE TAB CARDS (Cohesive, high-contrast, tactile theme) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 mb-12">
          {SYMPTOM_AREAS.map((area, idx) => {
            const active = selectedArea.id === area.id;
            return (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border-2 cursor-pointer relative overflow-hidden ${
                  active 
                    ? 'bg-[#0A1C17] text-white border-emerald-500 shadow-[0_12px_35px_rgba(10,28,23,0.25)] -translate-y-1.5' 
                    : 'bg-white text-[#0A1C17]/85 border-[#0A1C17]/10 hover:border-[#0A1C17]/30 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono-tech font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    active ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-[#0A1C17]/5 text-[#0A1C17]/70'
                  }`}>
                    Zone 0{idx + 1}
                  </span>
                  {active && <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />}
                </div>
                <div>
                  <h3 className={`text-sm md:text-base font-extrabold leading-tight font-sans ${active ? 'text-white' : 'text-[#0A1C17]'}`}>
                    {area.name.split('&')[0]}
                  </h3>
                  <span className={`text-[11px] font-mono-tech font-medium line-clamp-1 mt-1 block ${active ? 'text-emerald-300/90' : 'text-[#0A1C17]/60'}`}>
                    {area.tagline.split('&')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* DYNAMIC TWO-COLUMN DIAGNOSTIC SHOWCASE CARD */}
        <div className="bg-white border-2 border-[#0A1C17]/10 rounded-3xl p-6 sm:p-9 md:p-12 shadow-[0_20px_65px_rgba(10,28,23,0.08)] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArea.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-11 items-start"
            >
              
              {/* Left Column: Scientific Biomedical Artwork & Fast Estimate */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative h-[340px] sm:h-[420px] rounded-3xl overflow-hidden border border-[#0A1C17]/10 shadow-lg bg-[#0A1C17]">
                  <img 
                    src={selectedArea.image || "/images/biomech_spine.png"} 
                    alt={selectedArea.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C17] via-transparent to-black/40 pointer-events-none" />
                  
                  {/* Floating diagnostic overlay pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-xl bg-[#0A1C17]/90 backdrop-blur-md text-white font-mono-tech font-bold text-xs border border-white/15 shadow">
                      🔬 Focus: {selectedArea.name}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0A1C17]/95 backdrop-blur-md border border-white/15 text-xs text-white space-y-1 shadow-lg">
                    <div className="flex items-center justify-between text-emerald-300 font-mono-tech font-bold uppercase text-[11px]">
                      <span>Recommended Horizon:</span>
                      <span>🏠 Home Bedside Care</span>
                    </div>
                    <p className="font-sans font-extrabold text-sm text-white">
                      {selectedArea.sessionEstimate}
                    </p>
                  </div>
                </div>

                {/* Direct Urgency advice card */}
                <div className="p-4.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5 text-xs">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0A1C17] font-sans font-bold text-sm block mb-0.5">Clinical Guidance & Precaution:</strong>
                    <span className="text-[#0A1C17]/80 leading-relaxed font-medium">{selectedArea.urgencyLevel}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean, Highly Readable Clinical Profile */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Header Profile */}
                <div className="pb-5 border-b border-[#0A1C17]/10">
                  <span className="text-xs font-mono-tech uppercase font-bold text-emerald-700 tracking-wider block mb-1">
                    Complete Clinical Profile • South Bengaluru
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1C17] tracking-tight font-sans">
                    {selectedArea.name}
                  </h3>
                  <p className="text-sm text-[#0A1C17]/80 font-medium mt-3 leading-relaxed bg-[#0A1C17]/[0.03] p-4 rounded-2xl border border-[#0A1C17]/10 italic font-sans">
                    "{selectedArea.symptomSummary}"
                  </p>
                </div>

                {/* 1. Why You Feel Pain (Real Mechanical Causes) */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono-tech uppercase font-bold text-[#0A1C17] tracking-wider flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#C2593B]" />
                    <span>1. Why You Are Feeling This Pain (Real Mechanical Causes):</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedArea.rootCauses.map((cause, cIdx) => (
                      <div key={cIdx} className="p-4 rounded-2xl bg-[#F2F7F4] border border-[#0A1C17]/10 flex items-center gap-3 text-xs sm:text-sm text-[#0A1C17] font-bold">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0A1C17] shrink-0" />
                        <span>{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Why Band-Aid Ointments & Machines Fail */}
                <div className="p-5 rounded-2xl bg-[#C2593B]/10 border border-[#C2593B]/30 text-xs sm:text-sm text-[#0A1C17]/90 leading-relaxed font-medium">
                  <strong className="text-[#C2593B] font-mono-tech font-bold uppercase block text-xs mb-1.5">
                    ⚠️ Why Heat Pads & Painkiller Balms Don't Cure It:
                  </strong>
                  {selectedArea.commonMistakes}
                </div>

                {/* 3. Dr. Jeni's Bedside Active Healing Solution */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono-tech uppercase font-bold text-emerald-800 tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>2. Dr. Jeni Theresa's Active Home Visit Healing Protocol:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedArea.jeniTreatment.map((item, idx) => (
                      <div key={idx} className="p-4.5 rounded-2xl bg-[#0A1C17] text-white border border-emerald-500/30 text-xs font-medium leading-relaxed flex flex-col justify-between shadow-sm">
                        <span className="text-white/95 font-semibold text-sm">{item}</span>
                        <span className="mt-3 text-[11px] font-mono-tech font-bold text-emerald-300 uppercase tracking-wider block pt-2 border-t border-white/10">
                          Phase 0{idx + 1} • Bedside Rehab
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Controls */}
                <div className="pt-6 border-t border-[#0A1C17]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono-tech text-[#0A1C17]/85">
                    <span>💡 <strong>Transparent Fee Guidance:</strong> Initial Home Assessment ₹850</span>
                    <span className="block text-emerald-700 font-bold text-[11px]">No Bangalore clinic travel required • Bedside recovery</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleWhatsAppConsult(selectedArea.name)}
                      className="flex-1 sm:flex-initial px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-[#0A1C17] font-extrabold text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Check Timings & Fees</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onOpenTriage && onOpenTriage()}
                      className="px-5 py-3.5 rounded-2xl bg-[#0A1C17] hover:bg-[#C2593B] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer hidden md:inline-flex shadow-md"
                    >
                      Triage Form &rarr;
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SymptomMap;

