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
    /* Anti-Leakage Height Containment: md:max-h-[900px] ensures zooming out never causes vertical stretching or empty green voids! */
    <section ref={scrollRef} className="relative min-h-[100svh] md:min-h-0 md:h-[90svh] md:max-h-[900px] lg:max-h-[920px] bg-[#07130F] overflow-hidden flex flex-col justify-center">
      
      {/* Subtle ambient studio lighting on left side */}
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0A1C17] via-[#0A1C17]/60 to-transparent pointer-events-none z-10" />

      {/* Master Anti-Leakage Canvas: Keeps text and studio portrait anchored together at all zoom levels! */}
      <div className="max-w-[1550px] w-full mx-auto relative flex-1 flex flex-col justify-center md:h-full">
        
        {/* ── DESKTOP & WIDESCREEN PANORAMIC PORTRAIT BACKDROP (Restored exact Image 1 pristine studio atmosphere without any smudges on her neck or hair!) ── */}
        <div className="absolute top-0 right-0 bottom-0 w-[60%] sm:w-[58%] md:w-[56%] lg:w-[55%] z-0 hidden md:block overflow-hidden bg-[#07130F]">
          
          {/* Radiant champagne studio backdrop light illuminating behind Dr. Jeni Theresa's silhouette */}
          <div className="absolute top-[10%] right-[5%] w-[650px] h-[750px] rounded-full bg-gradient-to-tr from-[#E6DECF]/35 via-[#F9F5EB]/65 to-white/75 blur-[130px] opacity-95 pointer-events-none" />

          <img
            src="/images/dr-jeni-portrait.png"
            alt="Dr. Jeni Theresa — Doctor of Physical Therapy"
            className="w-full h-full object-cover object-[45%_top] lg:object-[42%_top] scale-[1.03] transform-gpu transition-transform duration-700"
            onError={(e) => { e.target.src = '/images/dr-jeni-clinical.jpg'; }}
          />
          
          {/* ── EXACT IMAGE 1 CLEAN CURVING CONTOURS (No straight vertical lines & ZERO dark smudges over her face or neck!) ── */}
          {/* 1. Base contour spine mask spanning only the leftmost 25% boundary so Dr. Jeni's face & ambient background remain brilliantly exposed */}
          <div className="absolute inset-y-0 left-0 w-[26%] bg-gradient-to-r from-[#07130F] from-0% via-[#0A1C17]/95 via-[45%] via-[#0A1C17]/40 via-[75%] to-transparent pointer-events-none" />
          
          {/* 2. Upper Curving Arc (Rotate -15deg): Angled elliptical shadow cushioning the main Clinical Therapy Headline and badges */}
          <div className="absolute top-[5%] -left-[340px] w-[640px] h-[400px] rounded-[50%] bg-[#0A1C17] rotate-[-15deg] blur-[95px] opacity-95 pointer-events-none" />
          
          {/* 3. Middle Bending Contour (Rotate +14deg): Curves inward gracefully around the silhouette of the interactive glassmorphism treatment card */}
          <div className="absolute top-[38%] -left-[290px] w-[570px] h-[370px] rounded-[50%] bg-[#0A1C17] rotate-[14deg] blur-[105px] opacity-95 pointer-events-none" />

          {/* 4. Lower Swelling Arc (Rotate -18deg): Swoops out at the base to cradle the Book Home Assessment buttons and 4.9/5 patient credentials */}
          <div className="absolute bottom-[4%] -left-[310px] w-[600px] h-[380px] rounded-[50%] bg-[#0A1C17] rotate-[-18deg] blur-[100px] opacity-90 pointer-events-none" />
          
          {/* 5. Subtle Inner Curvature Aura: Deepens the studio atmosphere along the joint curve without darkening her face */}
          <div className="absolute top-[26%] -left-[220px] w-[350px] h-[460px] rounded-full bg-gradient-to-tr from-[#0A1C17] via-[#0A1C17]/80 to-emerald-800/20 rotate-[10deg] blur-[115px] opacity-80 pointer-events-none" />
          
          {/* Seamless top and bottom viewport transitions */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A1C17] via-[#0A1C17]/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A1C17] via-[#0A1C17]/60 to-transparent pointer-events-none" />
        </div>

        {/* ── Main Content Container (Generous pt-40 spacing beneath floating Navbar to eliminate Image 2 collision!) ── */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-5 md:px-10 pt-32 pb-16 md:pt-40 md:pb-24 my-auto">
        
        {/* ── MOBILE VIEW ONLY (Hidden on Desktop & Laptop screens): Edge-to-Edge Top Organic Showcase ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto mb-8 md:hidden rounded-3xl overflow-hidden relative border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-[#0E2822] mt-2"
        >
          <div className="relative h-[370px] sm:h-[450px] w-full bg-[#0A1C17]">
            <img
              src="/images/dr-jeni-portrait.png"
              alt="Dr. Jeni Theresa — Doctor of Physical Therapy"
              className="w-full h-full object-cover object-[center_12%]"
              onError={(e) => { e.target.src = '/images/dr-jeni-clinical.jpg'; }}
            />
            {/* Elegant bottom clinical nameplate inside mobile display */}
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

        {/* ── LEFT COLUMN TYPOGRAPHY (Strictly Confined to Left 50% Width!) ── */}
        <div className="w-full max-w-2xl mx-auto md:mx-0">
          
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

          {/* ── New Slogan Headline: "Bend, Don't Break." ── */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-white leading-[1.06] mb-4 font-sans"
          >
            Bend,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#E8CAA4] to-[#D2A13E] font-editorial italic font-normal">
              Don't Break.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-[18px] text-white/90 font-normal mb-7 leading-relaxed font-sans max-w-xl"
          >
            Strength isn't measured by how hard you stand—it's revealed by how gracefully you bend, heal, and rise again. Private, one-on-one recovery without leaving your home.
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

      {/* End Master Anti-Leakage Canvas */}
      </div>
    </section>
  );
};

export default Hero;
