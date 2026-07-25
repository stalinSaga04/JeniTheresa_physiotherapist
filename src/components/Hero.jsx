import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, ArrowRight, CheckCircle2, Award, Compass, HeartPulse } from 'lucide-react';
import { CREDENTIALS } from '../data/clinicalData';

const Hero = ({ onOpenTriage }) => {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-clinical-grid border-b border-[#0A1C17]/10">
      {/* Decorative clinical visual blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#0A1C17]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#C2593B]/8 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Editorial Top Status Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1C17]/5 border border-[#0A1C17]/15 mb-8 backdrop-blur-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block -ml-5" />
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#0A1C17]">
            Accepting Sports & Orthopedic Rehab Consultations — Q3 Priority Triage
          </span>
        </motion.div>

        {/* Master Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Clinical Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif-clinical font-black tracking-tight text-[#0A1C17] leading-[1.08] mb-6"
            >
              Physical Therapy <br />
              <span className="italic font-editorial font-normal text-[#C2593B]">Without Band-Aids.</span> <br />
              Just True Movement Science.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-[#0A1C17]/80 font-normal leading-relaxed max-w-2xl mb-10 font-['Plus_Jakarta_Sans']"
            >
              Led by <strong className="text-[#0A1C17] font-bold">Dr. Jeni Theresa, PT, DPT</strong>, our practice systematically dismantles chronic structural orthopedic pain. We reject standard passive routine heat-packs in favor of precise <span className="underline decoration-[#C2593B] decoration-2 underline-offset-4">manual biomechanical joint mechanics</span> and progressive clinical load tolerance.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={() => scrollToSection('#symptom-map')}
                className="px-8 py-4 rounded-2xl bg-[#C2593B] text-white font-bold text-sm tracking-wide shadow-lg hover:bg-[#A84528] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <HeartPulse className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Launch Interactive Pain Mapper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenTriage}
                className="px-8 py-4 rounded-2xl bg-[#0A1C17]/5 border-2 border-[#0A1C17]/20 text-[#0A1C17] font-bold text-sm hover:bg-[#0A1C17] hover:text-[#FAF8F5] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Clinical Triage & Evaluation</span>
              </button>
            </motion.div>

            {/* Quick Validation Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-[#0A1C17]/15 text-xs md:text-sm text-[#0A1C17]/80 font-semibold"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>100% Doctor-to-Patient Hands-on Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Board Certified Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Zero Passive Machine Mill Protocols</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Clinical Feature Card & Doctor Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background geometric design frame */}
            <div className="absolute inset-0 bg-[#0A1C17] rounded-3xl translate-x-3 translate-y-3 opacity-90 shadow-xl" />
            
            <div className="relative bg-[#FAF8F5] border-2 border-[#0A1C17] rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl flex flex-col justify-between">
              
              {/* Doctor Header Banner */}
              <div className="flex items-center justify-between border-b border-[#0A1C17]/15 pb-5 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A1C17] text-[#FAF8F5] font-mono-tech text-[11px] mb-2 font-bold uppercase">
                    <Award className="w-3.5 h-3.5 text-[#C2593B]" />
                    <span>Clinical Director</span>
                  </div>
                  <h3 className="text-2xl font-serif-clinical font-black text-[#0A1C17]">Dr. Jeni Theresa</h3>
                  <p className="text-xs font-mono-tech text-[#0A1C17]/70 font-semibold">Doctor of Physical Therapy, DPT, OPA</p>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#163029] text-white flex flex-col items-center justify-center p-2 text-center shrink-0 border border-[#0A1C17]/20 shadow-inner">
                  <span className="text-xl font-bold font-serif-clinical text-[#C2593B] leading-none">12+</span>
                  <span className="text-[10px] font-mono-tech uppercase mt-1 text-[#FAF8F5]/80">Years Exp.</span>
                </div>
              </div>

              {/* Core Diagnostic Philosophy Quote */}
              <div className="bg-[#163029] text-[#FAF8F5] p-5 rounded-2xl mb-6 shadow-md relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 text-[#C2593B]/20 w-32 h-32 select-none pointer-events-none font-serif text-8xl">“</div>
                <p className="font-serif font-italic text-sm md:text-base leading-relaxed text-[#FAF8F5]/95 relative z-10">
                  “Pain is rarely an isolated defect; it is your skeletal nervous system shouting that your kinetic chain is compensating. Our objective is never simply to silence the alarm, but to repair the structural loading pattern that caused it.”
                </p>
                <p className="text-[11px] font-mono-tech text-[#C2593B] mt-3 uppercase tracking-widest font-bold">
                  — Dr. Jeni Theresa's Clinical Standard
                </p>
              </div>

              {/* Credentials & Mastery list */}
              <div className="space-y-2">
                <span className="text-xs font-mono-tech uppercase text-[#0A1C17]/60 font-bold tracking-wider">Clinical Qualifications</span>
                {CREDENTIALS.slice(0, 3).map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0A1C17]/90 font-medium py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2593B] mt-1.5 shrink-0" />
                    <span className="leading-tight">{cred}</span>
                  </div>
                ))}
              </div>

              {/* Live Triage Trigger */}
              <button
                onClick={onOpenTriage}
                className="mt-6 w-full py-3.5 bg-[#0A1C17] hover:bg-[#C2593B] text-[#FAF8F5] rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Request Comprehensive Evaluation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </motion.div>

        </div>

        {/* Editorial Metrics Banner */}
        <div className="mt-20 pt-10 border-t border-[#0A1C17]/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="p-4 rounded-2xl bg-white/40 border border-[#0A1C17]/5 shadow-2xs">
            <p className="text-3xl md:text-4xl font-serif-clinical font-bold text-[#0A1C17] mb-1">99.2%</p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Functional Range Returned</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/40 border border-[#0A1C17]/5 shadow-2xs">
            <p className="text-3xl md:text-4xl font-serif-clinical font-bold text-[#C2593B] mb-1">0%</p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Passive Boilerplate Care</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/40 border border-[#0A1C17]/5 shadow-2xs">
            <p className="text-3xl md:text-4xl font-serif-clinical font-bold text-[#0A1C17] mb-1">4–6 Wks</p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Average Discharge Target</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/40 border border-[#0A1C17]/5 shadow-2xs">
            <p className="text-3xl md:text-4xl font-serif-clinical font-bold text-emerald-800 mb-1">1-on-1</p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Dedicated DPT Attention</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
