import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../data/clinicalData';
import { Award, CheckCircle2, TrendingUp, UserCheck, ArrowRight } from 'lucide-react';

const CaseVault = ({ onOpenTriage }) => {
  return (
    <section id="case-vault" className="py-24 md:py-32 bg-[#FAF8F5] text-[#0A1C17] border-t border-[#0A1C17]/10 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1C17]/5 border border-[#0A1C17]/15 text-xs font-mono-tech tracking-widest uppercase mb-4 text-[#0A1C17] font-bold">
            <UserCheck className="w-3.5 h-3.5 text-[#C2593B]" />
            <span>Documented Clinical Outcomes • Zero Vague Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-clinical font-black tracking-tight text-[#0A1C17] mb-5 leading-tight">
            The <span className="italic font-editorial font-normal text-[#C2593B]">Evidence-Based</span> Case Vault
          </h2>
          <p className="text-base md:text-lg text-[#0A1C17]/80 font-normal leading-relaxed">
            We measure clinical success through quantitative orthopedic performance restoration—not anonymous star ratings. Review real patient diagnostic journeys from recurrent frustration to durable physical autonomy.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border-2 border-[#0A1C17]/15 rounded-3xl p-7 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#0A1C17]/40 transition-all"
            >
              <div>
                {/* Top metric tag */}
                <div className="flex items-center justify-between border-b border-[#0A1C17]/10 pb-4 mb-5">
                  <span className="text-[11px] font-mono-tech uppercase font-bold text-[#0A1C17]/60">
                    CASE PROTOCOL #0{index + 1}
                  </span>
                  <div className="px-2.5 py-1 rounded-lg bg-emerald-600/10 text-emerald-900 text-[11px] font-mono-tech font-bold uppercase border border-emerald-600/30 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-800" />
                    <span>{study.metric}</span>
                  </div>
                </div>

                {/* Patient profile */}
                <h3 className="text-xl font-serif-clinical font-black text-[#0A1C17] mb-1">
                  {study.patient}
                </h3>
                <p className="text-xs font-mono-tech font-bold text-[#C2593B] mb-6 uppercase tracking-wide">
                  ⚡ Diagnosis: {study.injury}
                </p>

                {/* Previous failed treatment */}
                <div className="mb-5 bg-red-50/70 border border-red-200 rounded-2xl p-4">
                  <span className="text-[11px] font-mono-tech font-bold text-red-800 uppercase block mb-1">
                    ❌ Prior Conventional Failed Care:
                  </span>
                  <p className="text-xs sm:text-sm text-[#0A1C17]/85 font-normal leading-normal">
                    {study.previousFailedTx}
                  </p>
                </div>

                {/* Dr. Jeni intervention */}
                <div className="mb-6 bg-[#0A1C17]/5 border border-[#0A1C17]/10 rounded-2xl p-4">
                  <span className="text-[11px] font-mono-tech font-bold text-emerald-800 uppercase block mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 inline" />
                    <span>Dr. Jeni Theresa's Kinetic Intervention:</span>
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0A1C17] leading-normal">
                    {study.jeniIntervention}
                  </p>
                </div>

              </div>

              {/* Final Verified Outcome */}
              <div className="mt-4 pt-5 border-t border-[#0A1C17]/15 bg-[#163029] text-[#FAF8F5] -mx-7 -mb-7 p-6 rounded-b-3xl">
                <span className="text-[10px] font-mono-tech font-bold text-[#C2593B] uppercase tracking-widest block mb-1">
                  Verified Discharge Outcome:
                </span>
                <p className="text-sm font-serif italic text-white/95 leading-relaxed font-medium">
                  "{study.outcome}"
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm font-mono-tech text-[#0A1C17]/80 font-bold uppercase mb-4">
            Are you currently trapped in a passive therapy stall?
          </p>
          <button
            onClick={onOpenTriage}
            className="px-10 py-4 rounded-2xl bg-[#0A1C17] text-[#FAF8F5] font-bold text-sm tracking-wider uppercase hover:bg-[#C2593B] shadow-xl hover:shadow-2xl transition-all cursor-pointer inline-flex items-center gap-3 group"
          >
            <span>Initiate Your Case Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CaseVault;
