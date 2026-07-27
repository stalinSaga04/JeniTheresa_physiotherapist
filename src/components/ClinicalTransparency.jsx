import React, { useState } from 'react';
import { CheckCircle2, XCircle, ShieldCheck, Clock, Activity, Award, UserCheck, ArrowRight, Zap, Sparkles, HelpCircle, ChevronDown, ChevronUp, CreditCard, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollAnimations';
import { CLINIC_INFO } from '../data/clinicalData';

const ClinicalTransparency = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How does Dr. Jeni Theresa structure consultation & rehabilitation fees?",
      a: "Our fee structure is clear, ethical, and based directly on expert clinical evaluation and session duration—never on confusing equipment add-ons. During your Initial Comprehensive Assessment, Dr. Jeni conducts thorough postural, range-of-motion, and neurological diagnostics to identify your injury's true root cause. Follow-up therapies are offered either per-visit or through structured recovery packages (such as 5-session or 10-session personalized plans) for complex post-surgical, orthopedic, or stroke rehabilitation."
    },
    {
      q: "Are there any hidden charges for dry needling or specialized manual treatments?",
      a: "Zero hidden charges. Unlike automated clinic chains that bill separately for every procedure or machine used, we maintain an all-inclusive medical care ethic. Whatever evidence-based therapy your condition requires during your reserved one-on-one session—whether precision dry needling, joint mobilization, or athletic taping—is included without surprise fees."
    },
    {
      q: "How do Home Visit Physiotherapy and Online Tele-Rehabilitation appointments work?",
      a: "Both consultation modes guarantee 100% direct one-on-one doctor attention with Dr. Jeni Theresa. Our Premium Home Visit service covers Bommasandra, Electronic City, and surrounding Bengaluru corridors, bringing clinical-grade physical assessments and bedside therapy directly to the safety and comfort of your home without traumatic traffic stress. Online Video Tele-Rehabilitation sessions are available across India, focused on ergonomic posture transformation, live movement evaluation, and structured recovery. All timing slots and fee confirmations are securely handled via our encrypted private WhatsApp desk."
    },
    {
      q: "Do I need a hospital referral or surgical prescription to schedule a consultation?",
      a: "No prior prescription is required for an orthopedic or neurological physiotherapy diagnosis with Dr. Jeni Theresa (PT, DPT). If you possess recent MRIs, X-rays, or post-surgical discharge reports, you can easily attach or forward them via our direct WhatsApp consultation line."
    }
  ];

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

        {/* NEW: Ethical Medical Fee Structure & Consultation Principles */}
        <div className="mt-20 pt-16 border-t border-[#0A1C17]/15">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D2A13E]/15 text-[#9A7326] font-mono-tech text-xs font-bold mb-4 border border-[#D2A13E]/30">
              <CreditCard className="w-3.5 h-3.5 text-[#C2593B]" />
              <span>Ethical Clinical Billing Policy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-clinical font-black tracking-tight text-[#0A1C17] mb-3">
              How Are Clinical Consultation Fees Structured?
            </h3>
            <p className="text-sm sm:text-base text-[#0A1C17]/80 leading-relaxed font-sans font-normal">
              We believe financial clarity is just as critical as medical diagnosis. Here is how Dr. Jeni Theresa ensures transparent, ethical professional healthcare without surprise costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="p-7 rounded-3xl bg-white border border-[#0A1C17]/15 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#0A1C17] text-[#FAF8F5] flex items-center justify-center font-bold mb-5 shadow-sm">
                  01
                </div>
                <h4 className="text-lg font-serif-clinical font-black text-[#0A1C17] mb-2">Initial Comprehensive Diagnostic Eval</h4>
                <p className="text-xs font-mono-tech text-[#C2593B] font-bold uppercase tracking-wider mb-4">45 Mins • 100% Doctor Time</p>
                <p className="text-xs sm:text-sm text-[#0A1C17]/80 leading-relaxed font-sans font-normal">
                  An intensive deep-dive orthopedic, neurological, or pediatric clinical evaluation. Dr. Jeni performs precise physical tests to identify nerve compression and muscle imbalances before initiating immediate pain-relief therapy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A1C17]/10 flex items-center gap-2 text-[11px] font-mono-tech font-bold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Transparent estimate given on WhatsApp</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#0A1C17]/15 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#C2593B] text-white flex items-center justify-center font-bold mb-5 shadow-sm">
                  02
                </div>
                <h4 className="text-lg font-serif-clinical font-black text-[#0A1C17] mb-2">All-Inclusive Follow-Up Care</h4>
                <p className="text-xs font-mono-tech text-emerald-700 font-bold uppercase tracking-wider mb-4">Zero Extra Modality Upsells</p>
                <p className="text-xs sm:text-sm text-[#0A1C17]/80 leading-relaxed font-sans font-normal">
                  Unlike commercial clinic chains that charge extra fees for each needle or equipment used, follow-up rehab sessions cover whatever intervention your recovery requires—including precision dry needling and manual joint mobilization—at one steady fee.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0A1C17]/10 flex items-center gap-2 text-[11px] font-mono-tech font-bold text-[#0A1C17]/75">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Individual & structured packages available</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#163029] text-white border border-[#0A1C17] shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#D2A13E] text-[#0A1C17] flex items-center justify-center font-bold mb-5 shadow-sm">
                  03
                </div>
                <h4 className="text-lg font-serif-clinical font-black text-white mb-2">Flexible Consultation Modes</h4>
                <p className="text-xs font-mono-tech text-emerald-300 font-bold uppercase tracking-wider mb-4">Home Visits & Video Tele-Rehab</p>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-normal">
                  Whether booking a dedicated Home Visit across Bommasandra & Electronic City, Bengaluru or an Online Video Tele-Rehabilitation session from across India, appointment timings and direct payment instructions (UPI/Cards) are confirmed clearly via our secure WhatsApp triage desk.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono-tech font-bold text-[#D2A13E]">
                <Sparkles className="w-4 h-4 text-[#D2A13E]" />
                <span>100% Guaranteed 1-on-1 Doctor Time</span>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Interactive SEO FAQ Accordion */}
        <div className="pt-10 border-t border-[#0A1C17]/15">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1C17]/5 text-[#0A1C17] font-mono-tech text-xs font-bold mb-3 border border-[#0A1C17]/10">
              <HelpCircle className="w-3.5 h-3.5 text-[#C2593B]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-clinical font-black text-[#0A1C17]">
              Everything You Need To Know Before Choosing Dr. Jeni Theresa.
            </h3>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'bg-white border-[#0A1C17] shadow-xl' : 'bg-white/60 border-[#0A1C17]/15 hover:bg-white/90'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 md:p-6 font-serif-clinical font-bold text-base md:text-lg text-[#0A1C17] flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${isOpen ? 'bg-[#0A1C17] text-white rotate-180' : 'bg-[#0A1C17]/5 text-[#0A1C17]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 pt-1 text-xs md:text-sm text-[#0A1C17]/85 font-sans leading-relaxed border-t border-[#0A1C17]/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClinicalTransparency;
