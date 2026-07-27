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
      
      {/* ── DESKTOP WIDE VIEW ONLY (md:block activates at 768px+ & Desktop Site mode!): Unified Full-Screen Canvas with Organic Gradient ── */}
      <div className="absolute inset-0 z-0 bg-[#0A1C17] hidden md:block overflow-hidden">
        <img
          src="/images/dr-jeni-portrait.png"
          alt="Dr. Jeni Theresa — Clinical Physiotherapist"
          className="w-full h-full object-cover object-[88%_top] lg:object-[93%_top] xl:object-[98%_top] translate-x-4 sm:translate-x-6 lg:translate-x-10 scale-[1.04] transform-gpu"
          onError={(e) => { e.target.src = '/images/dr-jeni-clinical.jpg'; }}
        />
        {/* Organic, ultra-smooth gradient so text reads perfectly on left WITHOUT feeling like two disconnected split-screen boxes! */}
        <div className="absolute inset-y-0 left-0 w-[64%] sm:w-[60%] lg:w-[56%] bg-gradient-to-r from-[#0A1C17] via-[#0A1C17]/92 to-transparent pointer-events-none" />
        {/* Soft top gradient to ensure navbar links sit over a clean background */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A1C17] via-[#0A1C17]/70 to-transparent pointer-events-none" />
        {/* Soft bottom gradient to transition cleanly into the Video Vault */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A1C17] via-[#0A1C17]/50 to-transparent pointer-events-none" />
      </div>

      {/* ── Main Content Overlay: Centered directly in the Middle-Left (Left Mid) as requested! ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-16 md:pt-36 md:pb-20 flex flex-col justify-center my-auto min-h-[100svh] md:min-h-[92vh]">
        
        {/* ── MOBILE ONLY (Hidden on md and Desktop Mode): Prominent, Unobscured Doctor Portrait Card at Top of Screen ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto mb-8 md:hidden rounded-3xl overflow-hidden relative border-2 border-emerald-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-[#0E2822] mt-2"
        >
          <div className="relative h-[370px] sm:h-[450px] w-full bg-[#0A1C17]">
            <img
              src="/images/dr-jeni-portrait.png"
              alt="Dr. Jeni Theresa — Doctor of Physical Therapy"
              className="w-full h-full object-cover object-[center_15%]"
              onError={(e) => { e.target.src = '/images/dr-jeni-clinical.jpg'; }}
            />
            {/* Soft bottom clinical nameplate, leaving Dr. Jeni's face 100% brightly illuminated and completely unobstructed! */}
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0A1C17] via-[#0A1C17]/95 to-transparent pt-16 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 w-fit">
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
        </motion.div>

        {/* Left Content Wrapper for Headline & Action Controls */}
        <div className="w-full max-w-2xl">
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
