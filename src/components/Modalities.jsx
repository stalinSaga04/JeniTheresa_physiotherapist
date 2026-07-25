import React from 'react';
import { motion } from 'framer-motion';
import { MODALITIES } from '../data/clinicalData';
import { Zap, Activity, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

const Modalities = ({ onOpenTriage }) => {
  const getIcon = (name) => {
    switch(name) {
      case 'Activity': return <Activity className="w-6 h-6 text-[#C2593B]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#C2593B]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#C2593B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C2593B]" />;
      default: return <Activity className="w-6 h-6 text-[#C2593B]" />;
    }
  };

  return (
    <section id="modalities" className="py-24 md:py-32 bg-[#163029] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-clinical-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-mono-tech tracking-widest uppercase mb-4 text-emerald-300 font-semibold border border-white/15">
            <Zap className="w-3.5 h-3.5 text-[#C2593B]" />
            <span>Transparent Medical Science • What We Actually Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-clinical font-bold tracking-tight mb-5 leading-tight text-white">
            Evidence-Based <br />
            <span className="italic font-editorial font-normal text-[#C2593B]">Orthopedic Intervention Modalities</span>
          </h2>
          <p className="text-base md:text-lg text-[#FAF8F5]/80 font-normal leading-relaxed">
            We operate at the forefront of modern musculoskeletal physical therapy. Explore our core clinical interventions, explained without mystical jargon or pseudoconsensus filler.
          </p>
        </div>

        {/* Modality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MODALITIES.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0A1C17] border border-white/15 rounded-3xl p-7 sm:p-9 shadow-xl hover:border-white/35 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header icon and sequence badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3.5 shadow-md group-hover:bg-white/10 transition-colors">
                    {getIcon(mod.iconName)}
                  </div>
                  <span className="text-xs font-mono-tech text-white/50 font-bold uppercase tracking-wider">
                    MODALITY #0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-serif-clinical font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs font-mono-tech text-[#C2593B] font-bold mb-5 uppercase tracking-wide">
                  {mod.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-[#FAF8F5]/85 font-normal leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                  {mod.description}
                </p>
              </div>

              {/* Why It Works section */}
              <div className="mt-4 pt-5 border-t border-white/10">
                <span className="text-[11px] font-mono-tech uppercase font-bold text-emerald-400 block mb-1.5">
                  ⚡ Biomechanical Rationale (Why It Works)
                </span>
                <p className="text-xs sm:text-sm text-[#FAF8F5]/90 italic font-serif leading-normal bg-white/5 p-3.5 rounded-xl border border-white/5">
                  "{mod.whyItWorks}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee Strip */}
        <div className="mt-16 bg-[#0A1C17] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <h4 className="text-lg md:text-xl font-serif-clinical font-bold text-white">
              No Assistants. No Double-Booked Overload. 100% Doctor Care.
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-normal">
              Every appointment with Dr. Jeni Theresa is a dedicated 60-minute one-on-one session. You will never be dumped on an exercise bike while the practitioner tends to three other patients.
            </p>
          </div>
          
          <button
            onClick={onOpenTriage}
            className="px-8 py-4 rounded-xl bg-[#C2593B] hover:bg-[#A84528] text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-lg cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Reserve One-on-One Session</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Modalities;
