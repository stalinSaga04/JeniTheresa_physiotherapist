import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE_STAGES } from '../data/clinicalData';
import { TrendingUp, ShieldAlert, Check, RefreshCw, Zap, Award } from 'lucide-react';

const TimelineSimulator = ({ onOpenTriage }) => {
  const [activeTab, setActiveTab] = useState(0);
  const stage = TIMELINE_STAGES[activeTab];

  return (
    <section id="timeline" className="py-24 md:py-32 bg-[#FAF8F5] text-[#0A1C17] border-b border-[#0A1C17]/10 relative">
      
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1C17]/5 border border-[#0A1C17]/15 text-xs font-mono-tech tracking-widest uppercase mb-4 text-[#0A1C17] font-bold">
            <RefreshCw className="w-3.5 h-3.5 text-[#C2593B]" />
            <span>Honest Patient Education • Recovery Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-clinical font-black tracking-tight text-[#0A1C17] mb-5">
            The <span className="italic font-editorial font-normal text-[#C2593B]">Honest Recovery</span> Curve: <br />
            Quick Fixes vs. Structural Resilience
          </h2>
          <p className="text-base md:text-lg text-[#0A1C17]/80 leading-relaxed font-normal">
            We believe in transparent expectations. While conventional clinics trap patients in recurring weekly visits with temporary passive numbing, our structured clinical load timeline rebuilds real cellular tissue tolerance.
          </p>
        </div>

        {/* Phase Timeline Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-4xl mx-auto">
          {TIMELINE_STAGES.map((item, index) => {
            const isCurrent = activeTab === index;
            return (
              <button
                key={item.week}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  isCurrent 
                    ? 'bg-[#0A1C17] text-[#FAF8F5] border-[#0A1C17] shadow-xl scale-[1.03]' 
                    : 'bg-white text-[#0A1C17]/80 border-[#0A1C17]/15 hover:border-[#0A1C17]/40 hover:bg-[#0A1C17]/5'
                }`}
              >
                <span className={`text-xs font-mono-tech uppercase font-bold tracking-wider mb-1 ${isCurrent ? 'text-[#C2593B]' : 'text-[#0A1C17]/60'}`}>
                  Phase 0{index + 1}
                </span>
                <span className="text-base md:text-lg font-serif-clinical font-bold leading-tight">
                  {item.week}
                </span>
              </button>
            );
          })}
        </div>

        {/* Master Phase Comparison Dashboard */}
        <div className="bg-white border-2 border-[#0A1C17]/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden max-w-5xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              
              {/* Phase Headline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0A1C17]/10 pb-6">
                <div>
                  <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#C2593B]">
                    Current Simulation Range • {stage.week}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-clinical font-black text-[#0A1C17] mt-1">
                    {stage.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6 self-start sm:self-center shrink-0">
                  <div>
                    <span className="block text-[10px] font-mono-tech uppercase font-bold text-[#0A1C17]/60">Tissue Resilience</span>
                    <span className="text-2xl font-bold font-mono-tech text-emerald-800">{stage.tissueAdaptation}%</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono-tech uppercase font-bold text-[#0A1C17]/60">Residual Pain</span>
                    <span className="text-2xl font-bold font-mono-tech text-[#C2593B]">{stage.painLevel}/10</span>
                  </div>
                </div>
              </div>

              {/* Real vs Fake Care Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Conventional Passive Approach (The Trap) */}
                <div className="p-6 rounded-2xl bg-red-50/70 border-2 border-red-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-red-800 font-mono-tech text-xs font-bold uppercase tracking-wider mb-4">
                      <ShieldAlert className="w-4 h-4 shrink-0 text-red-700" />
                      <span>Conventional Passive Care (The Band-Aid)</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xs font-mono-tech font-bold text-[#0A1C17]/60 uppercase">Clinic Actions Taken:</span>
                      <p className="text-sm font-semibold text-[#0A1C17] mt-1">{stage.passiveApproach.action}</p>
                    </div>
                    <div>
                      <span className="text-xs font-mono-tech font-bold text-[#0A1C17]/60 uppercase">Real Biological Reality:</span>
                      <p className="text-sm text-[#0A1C17]/85 font-normal leading-relaxed mt-1 bg-white p-3 rounded-xl border border-red-100 italic font-serif">
                        "{stage.passiveApproach.result}"
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-red-200 text-[11px] font-mono-tech text-red-800 font-bold uppercase flex items-center justify-between">
                    <span>Long-term result: Dependency & Relapse</span>
                    <span>❌ Low Value</span>
                  </div>
                </div>

                {/* Dr. Jeni's Active Mechanical Approach */}
                <div className="p-6 rounded-2xl bg-[#163029] text-white border-2 border-[#163029] shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-400 font-mono-tech text-xs font-bold uppercase tracking-wider mb-4">
                      <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span>Dr. Jeni Theresa's Kinetic Protocol</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-xs font-mono-tech font-bold text-white/60 uppercase">Targeted Clinical Action:</span>
                      <p className="text-sm font-bold text-white mt-1">{stage.honestApproach.action}</p>
                    </div>
                    <div>
                      <span className="text-xs font-mono-tech font-bold text-white/60 uppercase">Cellular Adaptation Achieved:</span>
                      <p className="text-sm text-[#FAF8F5]/95 font-normal leading-relaxed mt-1 bg-white/10 p-3 rounded-xl border border-white/15 font-serif italic">
                        "{stage.honestApproach.result}"
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/15 text-[11px] font-mono-tech text-emerald-400 font-bold uppercase flex items-center justify-between">
                    <span>Long-term result: Autonomous Strength</span>
                    <span>✓ Durable Mastery</span>
                  </div>
                </div>

              </div>

              {/* Interactive Visual Progress Bars */}
              <div className="bg-[#0A1C17]/5 p-5 rounded-2xl border border-[#0A1C17]/10">
                <div className="flex items-center justify-between text-xs font-mono-tech font-bold text-[#0A1C17]/80 uppercase mb-2">
                  <span>Structural Collagen Adaptation Curve (Dr. Jeni's Method)</span>
                  <span>{stage.tissueAdaptation}% Capacity</span>
                </div>
                <div className="w-full h-3 rounded-full bg-white border border-[#0A1C17]/15 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.tissueAdaptation}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-[#C2593B]"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#0A1C17]/60 mt-2">
                  <span>Week 1 (Acute inflammation)</span>
                  <span>Week 12+ (Total Orthopedic Freedom)</span>
                </div>
              </div>

              {/* Bottom Callout to Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs sm:text-sm font-mono-tech text-[#0A1C17]/80 text-center sm:text-left font-semibold">
                  Ready to break free from temporary relief loops and begin genuine kinetic remodeling?
                </p>
                <button
                  onClick={onOpenTriage}
                  className="px-6 py-3 rounded-xl bg-[#0A1C17] hover:bg-[#C2593B] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md"
                >
                  Start Phase 01 Assessment
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default TimelineSimulator;
