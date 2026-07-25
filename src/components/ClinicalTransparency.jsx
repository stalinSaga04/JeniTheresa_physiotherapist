import React, { useState } from 'react';
import { CheckCircle2, XCircle, ShieldCheck, Clock, Activity, Award, UserCheck, ArrowRight, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollAnimations';
import { CLINIC_INFO } from '../data/clinicalData';

const ClinicalTransparency = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
  const [activeStep, setActiveStep] = useState(0);

  const expectations = [
    {
      step: "01",
      title: "Deep Kinetic Mapping & Root Diagnostic",
      duration: "30 Mins • In-Person or Tele-Triage",
      icon: Activity,
      desc: "We never just look at where it hurts. If your lower back aches after auto commutes or office sessions, we analyze your hip flexion, pelvic tilt, and lumbar kinetic chain using systematic joint tracking. No assumptions, zero guessing.",
      deliverable: "Complete orthopedic root-cause identification card."
    },
    {
      step: "02",
      title: "Applied Medical Intervention & Release",
      duration: "20 Mins • Hands-on Doctor Time",
      icon: Zap,
      desc: "Direct hands-on joint manual articulation, evidence-based Trigger Point Dry Needling (TDN), or fascial plane decompression (IASTM). We calm protective neuromuscular spasm without uncomfortable forcing.",
      deliverable: "Immediate localized pain modulation and range gain."
    },
    {
      step: "03",
      title: "Your Custom Digital Armor Blueprint",
      duration: "10 Mins • Delivered on WhatsApp",
      icon: UserCheck,
      desc: "You never leave empty-handed or confused. Before you step out, Dr. Jeni records and sends your concise 5-minute home or desk structural remodeling exercises directly to your WhatsApp with video reminders.",
      deliverable: "Independent personal physical self-reliance protocol."
    }
  ];

  return (
    <section ref={scrollRef} id="clinical-transparency" className="py-20 md:py-28 bg-[#FAF8F5] text-[#0A1C17] relative border-b border-[#0A1C17]/10">
      
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Editorial Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A1C17]/5 text-xs font-mono-tech tracking-widest uppercase mb-4 text-[#0A1C17] font-bold border border-[#0A1C17]/15">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C2593B]" />
            <span>Honest Clinical Practice Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-clinical font-bold tracking-tight mb-5 leading-tight text-[#0A1C17]">
            Demystifying Orthopedic Care: <br />
            <span className="italic font-editorial font-normal text-[#C2593B]">Who We Are For & What To Expect.</span>
          </h2>
          <p className="text-base md:text-lg text-[#0A1C17]/80 font-normal leading-relaxed">
            In an industry dominated by rushed passive therapies and repetitive treatments, Dr. Jeni Theresa operates on absolute scientific transparency. We want you fully aligned on how we cure pain before you ever step into our {CLINIC_INFO.city} practice.
          </p>
        </div>

        {/* Matrix Card: Who We Are For vs NOT For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* WHO WE ARE FOR */}
          <div className="bg-[#163029] text-[#FAF8F5] p-7 md:p-9 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between border border-[#FAF8F5]/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-tech text-xs font-bold mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WE ARE THE EXACT MATCH IF YOU:</span>
              </div>
              
              <ul className="space-y-4 text-sm md:text-base text-[#FAF8F5]/90">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>Want to discover and eliminate the true **biomechanical root cause** of recurring orthopedic pain rather than just numbing symptoms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>Are ready to invest 5 to 10 minutes a day in targeted **progressive neuromuscular home exercises** tailored to your IT desk or sports routine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>Value **100% one-on-one Doctor of Physical Therapy attention** with zero delegating to untrained junior clinic staff or general gym trainers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>Seek evidence-based Western orthopedic science (Manual therapy, Medical Dry Needling, Gait rehab) for lasting athletic resilience.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-white/80 font-mono-tech">
              <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <Award className="w-4 h-4 text-emerald-400" />
                Durable Symptom Freedom Guaranteed
              </span>
              <span>100% Doctor Care</span>
            </div>
          </div>

          {/* WHO WE ARE NOT FOR */}
          <div className="bg-[#FAF8F5] text-[#0A1C17] p-7 md:p-9 rounded-3xl shadow-lg border-2 border-[#0A1C17]/15 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C2593B]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C2593B]/15 text-[#C2593B] font-mono-tech text-xs font-bold mb-6">
                <XCircle className="w-4 h-4 text-[#C2593B] shrink-0" />
                <span>WE ARE LIKELY NOT A FIT IF YOU:</span>
              </div>
              
              <ul className="space-y-4 text-sm md:text-base text-[#0A1C17]/85">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C2593B] mt-2 shrink-0" />
                  <span>Are looking for a generic 10-minute relaxation massage or spa-style temporary passive pampering without biomechanical diagnosis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C2593B] mt-2 shrink-0" />
                  <span>Prefer multi-patient clinic environments where patients are hooked up to passive heat pads or ultrasound machines for 30 minutes while staff attend to others.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C2593B] mt-2 shrink-0" />
                  <span>Want a temporary painkiller fix without making simple ergonomic adjustments to your seating posture or daily structural habits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C2593B] mt-2 shrink-0" />
                  <span>Are unwilling to perform simple daily physical stretches or guided postural resets at home between clinical sessions.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A1C17]/10 flex items-center justify-between text-xs text-[#0A1C17]/70 font-mono-tech font-medium">
              <span className="text-[#C2593B] font-bold">Why this honesty?</span>
              <span>Because real orthopedic recovery requires active cooperation.</span>
            </div>
          </div>

        </div>

        {/* What To Expect Roadmap */}
        <div className="bg-[#0A1C17] text-[#FAF8F5] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono-tech text-[#D2A13E] uppercase font-bold tracking-widest block mb-2">
              Your First Clinical Appointment
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-clinical font-black text-white">
              What Happens During Your Initial Evaluation?
            </h3>
            <p className="text-xs md:text-sm font-mono-tech text-white/70 mt-2">
              No confusion, zero jargon. Here is how Dr. Jeni engineers your personalized orthopedic recovery plan in 60 minutes or less.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {expectations.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activeStep === idx;
              return (
                <div 
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative ${
                    isSelected 
                      ? 'bg-[#163029] border-[#C2593B] shadow-[0_0_30px_rgba(194,89,59,0.25)] -translate-y-1' 
                      : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-serif-clinical font-black text-[#D2A13E]">
                        {item.step}
                      </span>
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#C2593B] text-white' : 'bg-white/10 text-[#C2593B]'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-serif-clinical font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <span className="inline-block text-[11px] font-mono-tech text-[#D2A13E] mb-3 font-semibold uppercase tracking-wider">
                      {item.duration}
                    </span>
                    <p className="text-xs md:text-sm text-[#FAF8F5]/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono-tech text-emerald-300 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Footer inside box */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-sm font-bold text-white block">Ready to start with Step 01?</span>
              <span className="text-xs text-white/60 font-mono-tech">Consultations available at Central Medical Plaza, Anna Nagar, {CLINIC_INFO.city} or online via WhatsApp.</span>
            </div>
            
            <button
              onClick={onOpenTriage}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#C2593B] hover:bg-[#A84528] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 group"
            >
              <span>Schedule Initial Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClinicalTransparency;
