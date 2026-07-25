import React, { useState } from 'react';
import { CheckCircle2, XCircle, ShieldCheck, Clock, Activity, Award, UserCheck, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollAnimations';
import { CLINIC_INFO } from '../data/clinicalData';

const ClinicalTransparency = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
  const [activeStep, setActiveStep] = useState(0);

  const roadmapSteps = [
    {
      step: "01",
      title: "Detailed Physical & Posture Assessment",
      duration: "25 Mins • Structural Diagnostics",
      icon: Activity,
      desc: "We examine your joint mobility, posture, and daily body movements to locate exactly where your pain originates. Clear diagnosis, zero guesswork.",
      deliverable: "Clear explanation of your pain root cause."
    },
    {
      step: "02",
      title: "Personalized Hands-On Treatment",
      duration: "20 Mins • Dedicated Doctor Care",
      icon: Zap,
      desc: "Direct hands-on manual physiotherapy, joint mobilization, or targeted muscle release to safely ease stiffness and relieve discomfort.",
      deliverable: "Immediate improvement in mobility and reduced pain."
    },
    {
      step: "03",
      title: "Your Custom Home Exercise Plan",
      duration: "10 Mins • Sent Directly to WhatsApp",
      icon: UserCheck,
      desc: "Before you leave, Dr. Jeni prepares a simple 5-minute home exercise routine sent straight to your WhatsApp with easy guidance.",
      deliverable: "Your personal daily physical recovery routine."
    }
  ];

  return (
    <section ref={scrollRef} id="clinical-transparency" className="py-20 md:py-28 bg-[#FAF8F5] text-[#0A1C17] relative border-b border-[#0A1C17]/10 overflow-hidden">
      
      {/* Soft aesthetic background glows */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Sleek Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1C17]/5 text-xs font-mono-tech tracking-wider uppercase mb-4 text-[#0A1C17] font-bold border border-[#0A1C17]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#C2593B]" />
            <span>Honest Care & Patient Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-clinical font-black tracking-tight mb-4 leading-tight text-[#0A1C17]">
            Transparent Physiotherapy: <br />
            <span className="italic font-editorial font-normal text-[#C2593B]">Who We Serve & What To Expect.</span>
          </h2>
          <p className="text-base md:text-lg text-[#0A1C17]/80 font-normal leading-relaxed font-sans">
            To achieve lasting recovery, we maintain complete clarity about our medical methods. Here is what makes our one-on-one treatment practice special in {CLINIC_INFO.city}.
          </p>
        </div>

        {/* Matrix Card: Who We Are For vs NOT For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* WHO WE ARE FOR */}
          <div className="bg-[#163029] text-[#FAF8F5] p-7 md:p-9 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between border border-[#FAF8F5]/10 hover:shadow-2xl transition-all">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-tech text-xs font-bold mb-6 border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IDEAL FIT IF YOU WANT:</span>
              </div>
              
              <ul className="space-y-4 text-sm md:text-base text-[#FAF8F5]/90 font-sans">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>To solve the <strong>real root cause</strong> of your joint or nerve pain instead of relying on temporary painkillers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>100% one-on-one consultation directly with Dr. Jeni Theresa</strong> with dedicated personal medical attention.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>To spend 5 to 10 minutes a day on simple, practical home exercises that keep your body flexible and pain-free.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>Evidence-based orthopedic, neurological, or post-surgical physiotherapy designed for lasting physical independence.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/80 font-mono-tech">
              <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                <Award className="w-4 h-4 text-emerald-400" />
                Personalized Clinical Quality
              </span>
              <span>100% Doctor Time</span>
            </div>
          </div>

          {/* WHO WE ARE NOT FOR */}
          <div className="bg-white text-[#0A1C17] p-7 md:p-9 rounded-3xl shadow-lg border border-[#0A1C17]/15 flex flex-col justify-between relative overflow-hidden hover:shadow-xl transition-all">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C2593B]/15 text-[#C2593B] font-mono-tech text-xs font-bold mb-6 border border-[#C2593B]/20">
                <XCircle className="w-4 h-4 text-[#C2593B] shrink-0" />
                <span>NOT THE RIGHT MATCH IF:</span>
              </div>
              
              <ul className="space-y-4 text-sm md:text-base text-[#0A1C17]/85 font-sans">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C2593B] mt-2 shrink-0" />
                  <span>You are looking for a casual spa relaxation massage without thorough medical diagnostic examination.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C2593B] mt-2 shrink-0" />
                  <span>You prefer crowded hospital halls where patients are simply attached to passive heating pads without doctor interaction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C2593B] mt-2 shrink-0" />
                  <span>You prefer quick temporary fixes over steady functional rehabilitation of your affected muscles and ligaments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C2593B] mt-2 shrink-0" />
                  <span>You are unable to spend 5 minutes a day practicing basic guided physical recovery exercises at home.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0A1C17]/10 flex items-center justify-between text-xs text-[#0A1C17]/70 font-mono-tech font-medium">
              <span className="text-[#C2593B] font-bold">Our Philosophy:</span>
              <span>True recovery requires active joint movement.</span>
            </div>
          </div>

        </div>

        {/* What To Expect Roadmap */}
        <div className="bg-[#0A1C17] text-[#FAF8F5] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono-tech text-[#D2A13E] uppercase font-bold tracking-widest block mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Your First Clinic Visit</span>
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-clinical font-black text-white">
              What Happens During Your Initial Appointment?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-2 font-normal font-sans">
              A straightforward 3-step structured consultation designed for comfort, clarity, and rapid symptom relief.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {roadmapSteps.map((item, index) => {
              const StepIcon = item.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive 
                      ? 'bg-[#163029] border-[#D2A13E] shadow-2xl scale-[1.01]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-2xl font-serif-clinical font-black ${isActive ? 'text-[#D2A13E]' : 'text-white/60'}`}>
                        Step {item.step}
                      </span>
                      <div className={`p-3 rounded-xl ${isActive ? 'bg-[#D2A13E]/20 text-[#D2A13E]' : 'bg-white/10 text-white'}`}>
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-serif-clinical font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h4>
                    
                    <span className="inline-block text-[11px] font-mono-tech uppercase font-bold text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded border border-emerald-500/20 mb-4">
                      {item.duration}
                    </span>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-normal mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs font-mono-tech flex items-center gap-2 text-[#FAF8F5]/90">
                    <span className="text-[#D2A13E] font-bold">Deliverable:</span>
                    <span className="truncate">{item.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs md:text-sm font-sans text-white/80 text-center sm:text-left">
              Ready to start your structured recovery journey with Dr. Jeni Theresa?
            </span>
            <button
              onClick={onOpenTriage}
              className="px-8 py-4 rounded-2xl bg-[#C2593B] hover:bg-[#A84528] text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer shrink-0 flex items-center gap-2"
            >
              <span>Book Your Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClinicalTransparency;
