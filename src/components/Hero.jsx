import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, HeartPulse, MapPin, Star, Activity, Award, Navigation } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../hooks/useScrollAnimations';

const Hero = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState('homeVisit');

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const counterRef1 = useCountUp(99, 2200);
  const counterRef2 = useCountUp(0, 800);
  const counterRef3 = useCountUp(5, 1200);

  const tabs = [
    {
      id: 'homeVisit',
      label: '🏡 Home Care',
      title: 'Zero Bangalore Traffic Exhaustion.',
      description: 'When you are suffering from acute joint pain, driving through heavy traffic worsens inflammation. Dr. Jeni brings specialized care directly to your bedside across Bommasandra, Electronic City & South Bengaluru.',
      badge: 'Bommasandra & Bengaluru'
    },
    {
      id: 'science',
      label: '🔬 Movement Science',
      title: 'No Temporary Pain Pills.',
      description: 'Every session focuses on precise joint realignment, nerve gliding, posture correction, and core strengthening — tailored specifically to your body, not generic machine routines.',
      badge: 'Evidence-Based Care'
    },
    {
      id: 'expertise',
      label: '👩‍⚕️ DPT Expert',
      title: '5+ Years of Clinical Excellence.',
      description: 'Dr. Jeni Theresa (DPT) delivers consistent 4.9★ functional outcomes in post-surgical knee rehab, neurological stroke recovery, and occupational ergonomics.',
      badge: 'Verified DPT'
    }
  ];

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <section ref={scrollRef} className="relative min-h-[100svh] md:min-h-[90vh] bg-[#0A1C17] overflow-hidden">
      
      {/* Subtle background ambient studio atmosphere & warm radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2A13E]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A1C17] via-[#0A1C17]/60 to-transparent pointer-events-none" />

      {/* ── Main Responsive Studio Grid Architecture (No Unnatural Zooming, No Vertical Gradient Split Lines!) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-16 md:pt-36 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center min-h-[100svh] md:min-h-[90vh]">
        
        {/* ── LEFT COLUMN (7 Cols): Typography, Badges, Tab Cards, & CTAs ── */}
        <div className="md:col-span-7 lg:col-span-7 w-full max-w-2xl mx-auto md:mx-0">
          
          {/* Live Status Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white mb-6 border border-white/20 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 font-mono-tech">
              <MapPin className="w-3.5 h-3.5 text-[#D2A13E]" />
              <span>Home Visits • Bommasandra, Bengaluru</span>
            </span>
          </motion.div>

          {/* ── Headline ── */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-black tracking-tight text-white leading-[1.08] mb-5 font-sans"
          >
            Clinical Physical Therapy.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#D2A13E] to-[#C2593B]">
              Delivered to Your Bedside.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-white/85 font-medium mb-8 leading-relaxed font-sans"
          >
            Private, one-on-one recovery without leaving your home. Eliminate joint pain, nerve compression & post-surgery stiffness with real biomechanical science.
          </motion.p>

          {/* ── Interactive Tab Briefing (Glassmorphism) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/15 shadow-2xl mb-8"
          >
            <div className="flex items-center gap-2 pb-3 border-b border-white/10 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-[#0A1C17] shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="pt-3.5"
              >
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-400/20 text-emerald-300 font-mono-tech text-[10px] font-bold uppercase mb-2">
                  {activeTabData?.badge}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white mb-1.5 font-sans">
                  {activeTabData?.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  {activeTabData?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── CTA Row ── */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10"
          >
            <button
              onClick={onOpenTriage}
              className="h-13 px-7 rounded-2xl bg-white text-[#0A1C17] font-black text-sm uppercase tracking-wider shadow-lg hover:bg-[#D2A13E] hover:text-white hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3 group"
            >
              <HeartPulse className="w-5 h-5 text-[#C2593B] group-hover:text-white group-hover:scale-110 transition-all shrink-0" />
              <span>Book Home Assessment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <button
              onClick={() => scrollToSection('#symptom-map')}
              className="h-13 px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Activity className="w-4 h-4 text-emerald-300" />
              <span>Explore Pain Map</span>
            </button>
          </motion.div>

          {/* ── Compact Credential Strip ── */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 text-xs text-white/75 font-mono-tech font-bold"
          >
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#D2A13E]" />
              DPT Accredited
            </span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              Bommasandra Home Visits
            </span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#D2A13E] text-[#D2A13E]" />)}
              <span className="ml-1">4.9/5</span>
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN (5 Cols): Dedicated Architectural Clinical Portrait Showcase ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-5 lg:col-span-5 w-full max-w-md md:max-w-none mx-auto relative flex items-center justify-center my-4 md:my-0"
        >
          {/* Soft aesthetic background aura */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/30 via-[#D2A13E]/30 to-[#C2593B]/25 rounded-[2.5rem] blur-2xl opacity-80" />
          
          {/* Main Proportional Studio Frame */}
          <div className="relative w-full rounded-[2.2rem] overflow-hidden border-2 border-white/20 bg-[#0E2822] shadow-[0_25px_80px_rgba(0,0,0,0.65)] transform-gpu hover:shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all duration-500 group">
            <div className="relative h-[390px] sm:h-[460px] md:h-[540px] lg:h-[600px] w-full bg-[#0A1C17] overflow-hidden">
              <img
                src="/images/dr-jeni-portrait.png"
                alt="Dr. Jeni Theresa — Doctor of Physical Therapy"
                className="w-full h-full object-cover object-[center_12%] sm:object-[center_10%] transform-gpu group-hover:scale-[1.02] transition-transform duration-700"
                onError={(e) => { e.target.src = '/images/dr-jeni-clinical.jpg'; }}
              />
              
              {/* Elegant bottom clinical nameplate inside the frame — leaving her entire face brightly lit and free of gradient shadows! */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-[#0A1C17] via-[#0A1C17]/95 via-[80%] to-transparent pt-20 flex flex-col justify-end border-t border-white/5">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-sm">
                    Verified DPT Specialist
                  </span>
                </div>
                <p className="text-white font-black text-xl sm:text-2xl font-sans leading-tight">
                  Dr. Jeni Theresa, <span className="text-[#D2A13E]">DPT</span>
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-medium mt-0.5 font-sans">
                  Senior Bedside & Orthopedic Physiotherapist
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── Metrics Strip (outside the hero background) ── */}
      <div className="relative z-10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#0A1C17]/10 shadow-sm">
              <p className="text-2xl md:text-3xl font-black text-[#0A1C17] mb-1 font-sans">
                <span ref={counterRef1}>0</span>%
              </p>
              <p className="text-[10px] md:text-xs font-mono-tech text-[#0A1C17]/70 font-semibold uppercase tracking-wider">Range Restored</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#0A1C17]/10 shadow-sm">
              <p className="text-2xl md:text-3xl font-black text-[#C2593B] mb-1 font-sans">
                <span ref={counterRef2}>0</span>%
              </p>
              <p className="text-[10px] md:text-xs font-mono-tech text-[#0A1C17]/70 font-semibold uppercase tracking-wider">Passive Care</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#0A1C17]/10 shadow-sm">
              <p className="text-2xl md:text-3xl font-black text-[#0A1C17] mb-1 font-sans">4–6 Wks</p>
              <p className="text-[10px] md:text-xs font-mono-tech text-[#0A1C17]/70 font-semibold uppercase tracking-wider">Avg Discharge</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#0A1C17]/10 shadow-sm">
              <p className="text-2xl md:text-3xl font-black text-emerald-800 mb-1 font-sans">
                <span ref={counterRef3}>0</span>+ Yrs
              </p>
              <p className="text-[10px] md:text-xs font-mono-tech text-[#0A1C17]/70 font-semibold uppercase tracking-wider">Experience</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
