import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SYMPTOM_AREAS } from '../data/clinicalData';
import { AlertTriangle, CheckCircle2, XCircle, Activity, ChevronRight, HelpCircle, Sparkles, ArrowUpRight } from 'lucide-react';

const SymptomMap = ({ onSelectSymptomForTriage }) => {
  const [selectedArea, setSelectedArea] = useState(SYMPTOM_AREAS[0]);

  // Anatomical hotspots mapping for interactive schematic illustration
  const hotspots = [
    { id: 'cervical', name: 'Cervical Neck', y: '16%', x: '50%', label: 'Cervical Spine' },
    { id: 'rotator', name: 'Shoulder Capsule', y: '28%', x: '66%', label: 'Rotator Cuff' },
    { id: 'lumbar', name: 'Lumbar Spine & Core', y: '46%', x: '50%', label: 'Lumbar & Core' },
    { id: 'patellar', name: 'Patellar Knee', y: '71%', x: '60%', label: 'Patellofemoral' },
    { id: 'achilles', name: 'Achilles & Plantar', y: '91%', x: '62%', label: 'Achilles & Ankle' },
  ];

  return (
    <section id="symptom-map" className="py-24 md:py-32 bg-[#163029] text-[#FAF8F5] relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0A1C17] blur-[140px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#C2593B]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-mono-tech tracking-widest uppercase mb-4 text-emerald-300 font-semibold border border-white/15">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Biomechanical Diagnostic Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-clinical font-bold tracking-tight mb-5 leading-tight text-white">
            Where Is Your Body Signifying <br />
            <span className="italic font-editorial font-normal text-[#C2593B]">Mechanical Compensation?</span>
          </h2>
          <p className="text-base md:text-lg text-[#FAF8F5]/80 font-normal leading-relaxed">
            Select an anatomical friction zone below. Explore the genuine orthopedic catalysts behind recurring soreness, why temporary treatments fail, and how Dr. Jeni Theresa engineers long-term tissue load resilience.
          </p>
        </div>

        {/* Diagnostic Layout: Interactive Map vs Clinical Analysis Vault */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left / Center Column: Anatomy Schematic & Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Schematic Anatomical Hotspot Selector */}
            <div className="relative bg-[#0A1C17] border border-white/15 rounded-3xl p-6 h-[480px] flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-clinical-grid opacity-20 pointer-events-none" />
              
              {/* Abstract Human Kinetic Figure Silhouette */}
              <div className="relative w-48 h-full flex flex-col items-center justify-between py-6">
                
                {/* Visual abstract spine and core lines */}
                <div className="absolute w-[2px] h-[84%] bg-gradient-to-b from-emerald-500 via-[#C2593B] to-transparent top-6 left-1/2 -translate-x-1/2 opacity-40" />
                <div className="absolute w-24 h-[1px] bg-white/20 top-[28%] left-1/2 -translate-x-1/2" />
                <div className="absolute w-20 h-[1px] bg-white/20 top-[46%] left-1/2 -translate-x-1/2" />
                <div className="absolute w-16 h-[1px] bg-white/20 top-[71%] left-1/2 -translate-x-1/2" />
                
                {/* Hotspot Markers */}
                {hotspots.map((spot) => {
                  const isSelected = selectedArea.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => {
                        const target = SYMPTOM_AREAS.find(s => s.id === spot.id);
                        if (target) setSelectedArea(target);
                      }}
                      style={{ top: spot.y, left: spot.x }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group flex items-center gap-2 transition-all cursor-pointer z-20 ${
                        isSelected ? 'scale-110 z-30' : 'hover:scale-105 opacity-85 hover:opacity-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                        isSelected ? 'bg-[#C2593B] text-white ring-4 ring-[#C2593B]/40 animate-bounce' : 'bg-[#FAF8F5] text-[#0A1C17] hover:bg-emerald-400'
                      }`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-white' : 'bg-[#0A1C17]'}`} />
                      </div>
                      <span className={`px-3 py-1.5 rounded-xl font-mono-tech text-xs font-bold whitespace-nowrap shadow-md border ${
                        isSelected ? 'bg-[#C2593B] text-white border-white/30' : 'bg-[#0A1C17]/90 text-[#FAF8F5] border-white/20 group-hover:border-white/50'
                      }`}>
                        {spot.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="absolute bottom-4 left-4 text-[11px] font-mono-tech text-white/50 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                👆 TAP HOTSPOTS TO EXAMINE
              </div>
            </div>

            {/* Quick List Selector (Mobile friendly fallback) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SYMPTOM_AREAS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedArea(item)}
                  className={`p-3 rounded-2xl font-mono-tech text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer border ${
                    selectedArea.id === item.id 
                      ? 'bg-[#C2593B] text-white border-white/30 shadow-md' 
                      : 'bg-[#0A1C17]/60 text-[#FAF8F5]/80 border-white/10 hover:bg-[#0A1C17] hover:text-white'
                  }`}
                >
                  <span className="truncate">{item.name.split(' ')[0]}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${selectedArea.id === item.id ? 'text-white' : 'text-[#C2593B]'}`} />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Dynamic Deep-Dive Clinical Analysis Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0A1C17] border border-white/15 rounded-3xl p-6 md:p-9 shadow-2xl relative"
              >
                {/* Top header & urgency level */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-xs font-mono-tech uppercase text-[#C2593B] font-bold tracking-wider">
                      Target Area #0{SYMPTOM_AREAS.findIndex(i => i.id === selectedArea.id) + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif-clinical font-black text-white mt-1">
                      {selectedArea.name}
                    </h3>
                    <p className="text-xs font-mono-tech text-emerald-300 mt-1">
                      {selectedArea.tagline}
                    </p>
                  </div>
                  
                  <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono-tech text-white/90 font-semibold self-start sm:self-center shrink-0 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D2A13E]" />
                    <span>{selectedArea.sessionEstimate}</span>
                  </div>
                </div>

                {/* Symptom profile */}
                <div className="mb-6">
                  <p className="text-sm md:text-base text-[#FAF8F5]/90 font-normal leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/10 italic font-serif">
                    "{selectedArea.symptomSummary}"
                  </p>
                </div>

                {/* Root Biomechanical Catalysts */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono-tech uppercase text-[#FAF8F5]/60 font-bold tracking-widest mb-3 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>True Mechanical Catalysts (Why it occurs)</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedArea.rootCauses.map((cause, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span className="text-sm font-medium text-white/95 leading-snug">{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Passive Care / Band-Aids Fail */}
                <div className="mb-8 bg-[#C2593B]/10 border border-[#C2593B]/40 rounded-2xl p-5 relative">
                  <div className="flex items-center gap-2 text-[#C2593B] font-bold text-xs uppercase tracking-wider font-mono-tech mb-2">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>The "Band-Aid" Mistake (What Conventional Mills Do)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#FAF8F5]/90 leading-relaxed font-normal">
                    {selectedArea.commonMistakes}
                  </p>
                </div>

                {/* Dr. Jeni Theresa's Active Protocol */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono-tech uppercase text-emerald-400 font-bold tracking-widest mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dr. Jeni Theresa's Active Kinetic Solution</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedArea.jeniTreatment.map((item, index) => (
                      <div key={index} className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-white/95 font-medium leading-relaxed flex flex-col justify-between">
                        <span>{item}</span>
                        <span className="mt-2 text-[10px] font-mono-tech text-emerald-400 uppercase font-bold">Phase 0{index + 1} Step</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Urgency warning & action button */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-amber-300/90 font-mono-tech">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Clinical Guidance:</strong> {selectedArea.urgencyLevel}</span>
                  </div>
                  
                  <button
                    onClick={() => onSelectSymptomForTriage(selectedArea.name)}
                    className="px-6 py-3 rounded-xl bg-[#C2593B] hover:bg-[#A84528] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer shrink-0 flex items-center justify-center gap-2 group"
                  >
                    <span>Book Triage For This Area</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SymptomMap;
