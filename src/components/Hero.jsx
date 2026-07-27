import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, HeartPulse, MapPin, Star, Sparkles, Navigation, Activity, Layers } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../hooks/useScrollAnimations';

const Hero = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [activeTab, setActiveTab] = useState('homeVisit');
  const [activeHotspot, setActiveHotspot] = useState('assessment');

  const handleMouseMove = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setTilt({ rotateX: -y / 20, rotateY: x / 20, scale: 1.02 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Counter refs
  const counterRef1 = useCountUp(99, 2200);
  const counterRef2 = useCountUp(0, 800);
  const counterRef3 = useCountUp(5, 1200);

  const tabs = [
    {
      id: 'homeVisit',
      label: '🏡 100% Home & Bedside Care',
      title: 'Zero Bangalore Traffic Exhaustion.',
      description: 'When you are suffering from acute spinal or joint pain, driving through heavy Bengaluru traffic causes further inflammation. Dr. Jeni Theresa brings specialized diagnostic evaluations directly to your bedside across Bommasandra, Electronic City, and South Bengaluru.',
      badge: 'Location: Bommasandra & Bengaluru'
    },
    {
      id: 'science',
      label: '🔬 True Movement Science',
      title: 'No Temporary Pain Pills or Mills.',
      description: 'We reject generic boilerplate machine routines. Every session focuses on precise biomechanical realignment, nerve gliding, posture correction, and kinetic core strengthening tailored specifically to your body anatomy.',
      badge: 'Evidence-Based Orthopedic Care'
    },
    {
      id: 'expertise',
      label: '👩‍⚕️ DPT Clinical Excellence',
      title: '5+ Years of Dedicated Patient Mastery.',
      description: 'Architected by Dr. Jeni Theresa, Doctor of Physical Therapy (DPT). Experiencing consistent 4.9/5 star functional outcomes in post-surgical knee rehab, neurological stroke recovery, and severe occupational ergonomics.',
      badge: 'Verified DPT Accreditation'
    }
  ];

  return (
    <section ref={scrollRef} className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      
      {/* Subtle modern ambient background gradient */}
      <div className="absolute -top-40 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-emerald-900/10 via-[#C2593B]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-[#D2A13E]/10 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-clinical-grid opacity-50 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Modern Live Status Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1C17] text-[#FAF8F5] mb-8 shadow-sm border border-emerald-500/30"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 font-mono-tech">
            <MapPin className="w-3.5 h-3.5 text-[#D2A13E]" />
            <span>Home Visits & Tele-Rehab • Bommasandra, Bengaluru</span>
          </span>
        </motion.div>

        {/* Master Interactive Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: Clean SaaS/Biotech Typography + Interactive Tab Deck */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight text-[#0A1C17] leading-[1.05] mb-5 font-sans">
              Clinical Physical Therapy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2593B] via-[#0A1C17] to-emerald-800 font-extrabold">
                Delivered to Your Bedside.
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#0A1C17]/80 font-medium mb-8 max-w-2xl leading-relaxed font-sans">
              Experience private, 100% one-on-one personalized recovery without leaving your living room. Eliminate orthopedic pain, nerve compression, and post-surgery stiffness with real biomechanical science.
            </p>

            {/* Interactive Clinical Briefing Deck (Replaces traditional boring newspaper text!) */}
            <div className="w-full bg-white rounded-3xl p-5 sm:p-6 border border-[#0A1C17]/10 shadow-xl mb-10 transition-all">
              <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#0A1C17]/10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === tab.id
                        ? 'bg-[#0A1C17] text-white shadow-md scale-[1.02]'
                        : 'bg-[#0A1C17]/5 text-[#0A1C17]/70 hover:bg-[#0A1C17]/10 hover:text-[#0A1C17]'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="pt-4"
                >
                  <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-800 font-mono-tech text-[11px] font-bold uppercase mb-2">
                    {tabs.find(t => t.id === activeTab)?.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A1C17] mb-2 font-sans">
                    {tabs.find(t => t.id === activeTab)?.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0A1C17]/80 leading-relaxed font-normal">
                    {tabs.find(t => t.id === activeTab)?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* High-Impact Call To Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenTriage}
                className="h-14 px-8 rounded-2xl bg-[#0A1C17] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:bg-[#C2593B] hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <HeartPulse className="w-5 h-5 text-[#D2A13E] group-hover:scale-125 transition-transform shrink-0" />
                <span>Book Home Assessment</span>
                <ArrowRight className="w-4 h-4 text-[#D2A13E] group-hover:translate-x-1.5 transition-transform shrink-0" />
              </button>

              <button
                onClick={() => scrollToSection('#symptom-map')}
                className="h-14 px-7 rounded-2xl bg-white border-2 border-[#0A1C17]/15 text-[#0A1C17] font-bold text-sm hover:border-[#0A1C17] hover:bg-[#0A1C17]/5 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Activity className="w-4 h-4 text-[#C2593B]" />
                <span>Explore Interactive Body Map</span>
              </button>
            </div>

          </div>

          {/* Right Column: 3D Interactive Biomechanical Showcase (Interactive Hotspots!) */}
          <div className="lg:col-span-5 relative perspective-1000 my-auto">
            
            {/* Ambient glowing atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-emerald-600/30 via-[#C2593B]/20 to-[#D2A13E]/30 rounded-full blur-[70px] -z-10 animate-pulse" />

            {/* Interactive Tilt Capsule */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
                scale: tilt.scale
              }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              className="relative cursor-pointer z-20 mx-auto max-w-[420px]"
            >
              <div className="relative rounded-[40px] overflow-hidden p-2 bg-gradient-to-b from-white via-emerald-500/20 to-[#0A1C17] shadow-[0_20px_60px_rgba(10,28,23,0.3)] hover:shadow-[0_25px_80px_rgba(194,89,59,0.35)] transition-all">
                
                <div className="relative rounded-[32px] overflow-hidden bg-[#0A1C17]">
                  {/* Doctor Portrait Image */}
                  <img
                    src="/images/dr-jeni-portrait.png"
                    alt="Dr. Jeni Theresa, DPT — 3D Clinical Showcase"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-top transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/images/dr-jeni-clinical.jpg';
                    }}
                  />
                  
                  {/* Dark gradient overlay for typography clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C17] via-[#0A1C17]/30 to-transparent opacity-95 pointer-events-none" />

                  {/* Top Interactive Hotspot Buttons (User can click to inspect!) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-30">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveHotspot('assessment'); }}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shadow-md ${
                        activeHotspot === 'assessment' ? 'bg-emerald-400 text-[#0A1C17] ring-2 ring-white' : 'bg-black/70 text-white hover:bg-black'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-900 animate-ping" />
                      <span>Bedside Triage</span>
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveHotspot('credentials'); }}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-mono-tech font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shadow-md ${
                        activeHotspot === 'credentials' ? 'bg-[#D2A13E] text-[#0A1C17] ring-2 ring-white' : 'bg-black/70 text-white hover:bg-black'
                      }`}
                    >
                      <Award className="w-3 h-3 text-emerald-900" />
                      <span>5+ Yrs Exp.</span>
                    </button>
                  </div>

                  {/* Interactive Hotspot Display Card Inside Picture */}
                  <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-[#0A1C17]/90 backdrop-blur-md border border-white/15 text-white shadow-2xl z-30">
                    <AnimatePresence mode="wait">
                      {activeHotspot === 'assessment' ? (
                        <motion.div
                          key="assessment"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-emerald-400 font-mono-tech uppercase flex items-center gap-1">
                              <Navigation className="w-3.5 h-3.5" /> Direct Home Visits
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/90 font-mono">Bommasandra Area</span>
                          </div>
                          <h4 className="text-base font-black text-white mb-1">One-on-One Bedside Care</h4>
                          <p className="text-xs text-white/80 leading-relaxed font-normal mb-3">
                            No crowded waiting rooms or automated heat machines. Personalized physical therapy focused entirely on your functional range.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="credentials"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-[#D2A13E] font-mono-tech uppercase flex items-center gap-1">
                              <Award className="w-3.5 h-3.5" /> DPT Accredited
                            </span>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#D2A13E] text-[#D2A13E]" />)}
                            </div>
                          </div>
                          <h4 className="text-base font-black text-white mb-1">Dr. Jeni Theresa, PT, DPT</h4>
                          <p className="text-xs text-white/80 leading-relaxed font-normal mb-3">
                            Specializing in Orthopedics, Neurological Rehabilitation, Sports Medicine, and Pediatric Ergonomics with verified 4.9/5 star feedback.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono-tech text-white/70">
                      <span>💡 Click top badges to switch view</span>
                      <button onClick={onOpenTriage} className="text-[#D2A13E] font-bold hover:underline">Connect via WhatsApp →</button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Clean Modern Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-[#0A1C17]/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#0A1C17]/10 shadow-sm hover:border-emerald-600/30 transition-all">
            <p className="text-3xl font-black text-[#0A1C17] mb-1 font-sans">
              <span ref={counterRef1}>0</span>%
            </p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Functional Range Returned</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#0A1C17]/10 shadow-sm hover:border-emerald-600/30 transition-all">
            <p className="text-3xl font-black text-[#C2593B] mb-1 font-sans">
              <span ref={counterRef2}>0</span>%
            </p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Passive Boilerplate Care</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#0A1C17]/10 shadow-sm hover:border-emerald-600/30 transition-all">
            <p className="text-3xl font-black text-[#0A1C17] mb-1 font-sans">4–6 Wks</p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Average Discharge Target</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#0A1C17]/10 shadow-sm hover:border-emerald-600/30 transition-all">
            <p className="text-3xl font-black text-emerald-800 mb-1 font-sans">
              <span ref={counterRef3}>0</span>+ Yrs
            </p>
            <p className="text-xs font-mono-tech text-[#0A1C17]/75 font-semibold uppercase tracking-wider">Clinical Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
