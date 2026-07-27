import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, HeartPulse, MapPin, Star } from 'lucide-react';
import { CREDENTIALS, CLINIC_INFO } from '../data/clinicalData';
import SpineIllustration from './SpineIllustration';
import { useScrollReveal, useCountUp } from '../hooks/useScrollAnimations';

const Hero = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setTilt({ rotateX: -y / 16, rotateY: x / 16, scale: 1.02 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

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
  const counterRef3 = useCountUp(5, 1200);

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
            Home Visits & Tele-Rehab • Bommasandra, Bengaluru
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
              className="text-base sm:text-lg md:text-xl text-[#0A1C17]/85 font-normal leading-relaxed max-w-2xl mb-10 font-sans"
            >
              Led by <strong className="text-[#0A1C17] font-bold">Dr. Jeni Theresa, PT, DPT</strong> across <strong>Bommasandra, Electronic City & Bengaluru</strong>, our specialized practice brings clinical-grade physical therapy directly to the comfort and privacy of your home or bedside, alongside high-definition video tele-rehab across India. Why suffer through exhausting Bangalore traffic when in acute pain? We deliver 100% one-on-one doctor care in your living room without temporary pain pills or crowded machine mills.
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
                className="magnetic-btn h-14 px-7 rounded-2xl bg-[#C2593B] text-white font-bold text-sm tracking-wide shadow-lg hover:bg-[#A84528] hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2.5 group"
              >
                <HeartPulse className="w-5 h-5 group-hover:scale-125 transition-transform duration-300 shrink-0" />
                <span>Explore Interactive Body Map</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </button>

              <button
                onClick={onOpenTriage}
                className="magnetic-btn h-14 px-7 rounded-2xl bg-[#0A1C17]/5 border border-[#0A1C17]/20 text-[#0A1C17] font-bold text-sm hover:bg-[#0A1C17] hover:text-[#FAF8F5] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Home Visit or Tele-Rehab</span>
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
                <span>100% Dedicated Home Visit Doctor Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Zero Bangalore Traffic Stress</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Encrypted & Private Triage Desk</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 360° 3D Interactive Bio-Kinetic Holo-Sphere (No conventional square frame!) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -12 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative perspective-1000 my-auto"
          >
            {/* 360° Ethereal Kinetic Glowing Atmosphere & Rotating Orbital Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-[#0A1C17]/40 via-[#C2593B]/25 to-[#D2A13E]/30 rounded-full blur-[80px] -z-10 animate-pulse" />
            
            {/* Outer Animated 360 Kinetic Orbital Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-dashed border-[#C2593B]/30 animate-[spin_25s_linear_infinite] pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-dotted border-[#D2A13E]/40 animate-[spin_35s_linear_infinite_reverse] pointer-events-none -z-10" />

            {/* Interactive 3D Kinetic Tilt Container */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
                scale: tilt.scale
              }}
              transition={{ type: "spring", damping: 20, stiffness: 250 }}
              className="relative cursor-pointer z-20 mx-auto max-w-[420px]"
            >
              {/* Frameless Floating Portrait Capsule (Futuristic Curved Silhouette) */}
              <div className="relative rounded-[48px] overflow-hidden p-1.5 bg-gradient-to-b from-[#FAF8F5] via-[#D2A13E]/40 to-[#0A1C17] shadow-[0_25px_70px_rgba(10,28,23,0.35)] transition-shadow duration-500 hover:shadow-[0_30px_90px_rgba(194,89,59,0.35)]">
                
                <div className="relative rounded-[42px] overflow-hidden bg-[#163029]">
                  {/* Doctor Portrait Image with glowing ambient lighting */}
                  <img
                    src="/images/dr-jeni-portrait.png"
                    alt="Dr. Jeni Theresa, DPT — 360 3D Clinical Showcase"
                    className="w-full h-[350px] sm:h-[410px] object-cover object-top transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/images/dr-jeni-clinical.jpg';
                    }}
                  />
                  
                  {/* Holo-gradient overlay & energetic lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C17] via-[#0A1C17]/20 to-transparent opacity-90 pointer-events-none" />

                  {/* Top Floating Telemetry Badges (In 3D depth) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#0A1C17]/90 text-white border border-white/20 text-[11px] font-mono-tech uppercase font-bold tracking-wider backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>360° Clinical Profile</span>
                    </span>

                    <span className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5]/95 text-[#0A1C17] font-mono-tech text-[11px] font-bold shadow-lg border border-[#0A1C17]/10 flex items-center gap-1.5 backdrop-blur-md">
                      <Award className="w-3.5 h-3.5 text-[#C2593B]" />
                      <span>5+ Years Exp.</span>
                    </span>
                  </div>

                  {/* Doctor Profile Dock Inside the Capsule Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A1C17] via-[#0A1C17]/95 to-transparent text-white">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif-clinical font-black tracking-tight text-white flex items-center gap-2">
                          <span>Dr. Jeni Theresa</span>
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        </h3>
                        <p className="text-xs font-mono-tech text-[#D2A13E] font-bold">Doctor of Physical Therapy (DPT) • Founder</p>
                      </div>

                      {/* Review Badge */}
                      <div className="flex flex-col items-end shrink-0 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-xs font-mono-tech font-bold">
                        <div className="flex gap-0.5 mb-0.5">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#D2A13E] text-[#D2A13E]" />)}
                        </div>
                        <span className="text-[#FAF8F5]/90 text-[11px]">4.9 / 5.0 Star Rating</span>
                      </div>
                    </div>

                    <p className="text-xs text-white/85 line-clamp-2 italic mb-4 font-serif leading-relaxed">
                      "Dedicated in-home orthopedic and stroke bedside recovery across Bengaluru without relying on pain pills or general machine mills."
                    </p>

                    {/* Action trigger button */}
                    <button
                      onClick={() => scrollToSection('#specialties')}
                      className="w-full py-3 bg-[#C2593B] hover:bg-[#D2A13E] hover:text-[#0A1C17] text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <span>Explore Our 4 Rehab Divisions</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
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
