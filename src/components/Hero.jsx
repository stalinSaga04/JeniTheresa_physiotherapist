import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, HeartPulse, MapPin, Star } from 'lucide-react';
import { CREDENTIALS, CLINIC_INFO } from '../data/clinicalData';
import SpineIllustration from './SpineIllustration';
import { useScrollReveal, useCountUp } from '../hooks/useScrollAnimations';

const Hero = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Staggered text reveal 
  const wordVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 40, filter: 'blur(6px)' },
    visible: (i) => ({
      opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)',
      transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const headlineWords = ["Physical", "Therapy", "Without", "Band-Aids."];
  const sublineWords = ["Just", "True", "Movement", "Science."];

  // Counter refs
  const counterRef1 = useCountUp(99, 2200);
  const counterRef2 = useCountUp(0, 800);
  const counterRef3 = useCountUp(12, 1800);

  return (
    <section ref={scrollRef} className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden noise-overlay">
      
      {/* === ORGANIC LIVING BACKGROUND BLOBS === */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#0A1C17]/8 to-[#163029]/5 blur-[100px] animate-float-organic pointer-events-none" />
      <div className="absolute bottom-20 -left-24 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#C2593B]/10 to-[#D2A13E]/5 blur-[90px] animate-float-organic-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-[#163029]/3 blur-[120px] animate-float-organic-slow pointer-events-none" />
      
      {/* Subtle clinical grid underlay */}
      <div className="absolute inset-0 bg-clinical-grid opacity-60 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Editorial Status Tag with location */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#0A1C17] flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C2593B]" />
            Accepting Patients • {CLINIC_INFO.city}, {CLINIC_INFO.state}
          </span>
        </motion.div>

        {/* Master Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Clinical Copy with staggered text reveal */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" style={{ perspective: '1200px' }}>
            
            {/* Headline with per-word 3D reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-clinical font-black tracking-tight text-[#0A1C17] leading-[1.08] mb-2">
              <span className="flex flex-wrap gap-x-3">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    className={i === 3 ? "italic font-editorial font-normal text-[#C2593B]" : ""}
                    style={{ display: 'inline-block' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-clinical font-black tracking-tight text-[#0A1C17] leading-[1.08] mb-6">
              <span className="flex flex-wrap gap-x-3">
                {sublineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i + headlineWords.length}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                    style={{ display: 'inline-block' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-[#0A1C17]/80 font-normal leading-relaxed max-w-2xl mb-10 font-['Plus_Jakarta_Sans']"
            >
              Led by <strong className="text-[#0A1C17] font-bold">Dr. Jeni Theresa, PT, DPT</strong> in <strong>{CLINIC_INFO.city}</strong>, our practice systematically dismantles chronic structural orthopedic pain. We reject standard passive routine heat-packs in favor of precise <span className="underline decoration-[#C2593B] decoration-2 underline-offset-4">manual biomechanical joint mechanics</span> and progressive clinical load tolerance.
            </motion.p>

            {/* Call To Actions with magnetic hover */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={() => scrollToSection('#symptom-map')}
                className="magnetic-btn px-8 py-4 rounded-2xl bg-[#C2593B] text-white font-bold text-sm tracking-wide shadow-lg hover:bg-[#A84528] hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <HeartPulse className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                <span>Launch Interactive Pain Mapper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onOpenTriage}
                className="magnetic-btn px-8 py-4 rounded-2xl bg-[#0A1C17]/5 border-2 border-[#0A1C17]/20 text-[#0A1C17] font-bold text-sm hover:bg-[#0A1C17] hover:text-[#FAF8F5] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Clinical Triage & Evaluation</span>
              </button>
            </motion.div>

            {/* Quick Validation Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
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

          {/* Right Column: 3D Doctor Card with animated SVG Spine behind */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative perspective-container"
          >
            {/* Floating animated spine SVG behind card */}
            <div className="absolute -inset-8 md:-inset-12 opacity-40 pointer-events-none z-0">
              <SpineIllustration activeZone="lumbar" />
            </div>
            
            {/* Geometric offset shadow (3D depth illusion) */}
            <div className="absolute inset-0 bg-[#0A1C17] rounded-3xl translate-x-3 translate-y-3 opacity-90 shadow-xl z-10" />
            
            <div className="card-3d-tilt relative bg-[#FAF8F5] border-2 border-[#0A1C17] rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl flex flex-col justify-between z-20">
              
              {/* Doctor Header Banner */}
              <div className="flex items-center justify-between border-b border-[#0A1C17]/15 pb-5 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A1C17] text-[#FAF8F5] font-mono-tech text-[11px] mb-2 font-bold uppercase">
                    <Award className="w-3.5 h-3.5 text-[#C2593B]" />
                    <span>Clinical Director</span>
                  </div>
                  <h3 className="text-2xl font-serif-clinical font-black text-[#0A1C17]">Dr. Jeni Theresa</h3>
                  <p className="text-xs font-mono-tech text-[#0A1C17]/70 font-semibold">Doctor of Physical Therapy, DPT</p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-[#0A1C17]/70">
                    <MapPin className="w-3 h-3 text-[#C2593B]" />
                    <span className="font-mono-tech font-semibold">{CLINIC_INFO.city}, {CLINIC_INFO.state}</span>
                  </div>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#163029] text-white flex flex-col items-center justify-center p-2 text-center shrink-0 border border-[#0A1C17]/20 shadow-inner">
                  <span className="text-xl font-bold font-serif-clinical text-[#C2593B] leading-none">12+</span>
                  <span className="text-[10px] font-mono-tech uppercase mt-1 text-[#FAF8F5]/80">Years Exp.</span>
                </div>
              </div>

              {/* Google Review Stars Hint (Social Proof for Indian audience) */}
              <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-[#D2A13E]/10 border border-[#D2A13E]/30 text-xs font-mono-tech text-[#0A1C17] font-semibold">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#D2A13E] text-[#D2A13E]" />)}
                </div>
                <span>4.9/5 Google Reviews • {CLINIC_INFO.city}</span>
              </div>

              {/* Core Diagnostic Philosophy Quote */}
              <div className="bg-[#163029] text-[#FAF8F5] p-5 rounded-2xl mb-6 shadow-md relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 text-[#C2593B]/15 select-none pointer-events-none font-serif text-7xl leading-none">"</div>
                <p className="font-serif italic text-sm md:text-base leading-relaxed text-[#FAF8F5]/95 relative z-10">
                  "Pain is rarely an isolated defect; it is your skeletal nervous system shouting that your kinetic chain is compensating. Our objective is never simply to silence the alarm, but to repair the structural loading pattern that caused it."
                </p>
                <p className="text-[11px] font-mono-tech text-[#C2593B] mt-3 uppercase tracking-widest font-bold">
                  — Dr. Jeni Theresa's Clinical Standard
                </p>
              </div>

              {/* Credentials */}
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

        {/* Editorial Metrics Banner with animated counters */}
        <div className="scroll-reveal mt-20 pt-10 border-t border-[#0A1C17]/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="p-5 rounded-2xl glass-panel shadow-md hover:-translate-y-1 transition-transform">
            <p className="text-3xl md:text-4xl font-serif-clinical font-bold text-[#0A1C17] mb-1">
              <span ref={counterRef1}>0</span>%
            </p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Functional Range Returned</p>
          </div>
          <div className="p-5 rounded-2xl glass-panel shadow-md hover:-translate-y-1 transition-transform">
            <p className="text-3xl md:text-4xl font-serif-clinical font-bold text-[#C2593B] mb-1">
              <span ref={counterRef2}>0</span>%
            </p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Passive Boilerplate Care</p>
          </div>
          <div className="p-5 rounded-2xl glass-panel shadow-md hover:-translate-y-1 transition-transform">
            <p className="text-3xl md:text-4xl font-serif-clinical font-bold text-[#0A1C17] mb-1">4–6 Wks</p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Average Discharge Target</p>
          </div>
          <div className="p-5 rounded-2xl glass-panel shadow-md hover:-translate-y-1 transition-transform">
            <p className="text-3xl md:text-4xl font-serif-clinical font-bold text-emerald-800 mb-1">
              <span ref={counterRef3}>0</span>+ Yrs
            </p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Clinical Experience</p>
          </div>
        </div>

      </div>

      {/* Organic wave divider at bottom */}
      <div className="wave-divider z-20">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,20 C300,60 900,0 1200,25 L1200,60 L0,60 Z" fill="#163029" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;
