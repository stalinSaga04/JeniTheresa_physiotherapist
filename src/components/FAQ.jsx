import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CreditCard, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Activity } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollAnimations';

const FAQ = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
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
    },
    {
      q: "What types of conditions respond best to Dr. Jeni's hands-on protocols?",
      a: "We specialize in resolving acute and chronic biomechanical stress: prolonged office posture neck strain, herniated disc sciatica, shoulder rotator cuff impingement, ligament rehabilitation (ACL/meniscus), joint replacement recovery (TKR/THR), neurological balance disorders (stroke/Parkinson's), and pediatric developmental motor delay."
    }
  ];

  return (
    <section ref={scrollRef} id="faq" className="py-20 md:py-28 bg-[#FAF8F5] text-[#0A1C17] relative border-t border-[#0A1C17]/15 overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#D2A13E]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Ethical Medical Fee Structure */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D2A13E]/15 text-[#9A7326] font-mono-tech text-xs font-bold mb-4 border border-[#D2A13E]/30">
              <CreditCard className="w-3.5 h-3.5 text-[#C2593B]" />
              <span>Ethical Clinical Billing Policy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight text-[#0A1C17] mb-4">
              How Are Clinical Consultation{' '}
              <span className="text-[#C2593B]">Fees Structured?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#0A1C17]/80 leading-relaxed font-sans font-medium">
              We believe financial clarity is just as critical as medical diagnosis. Here is how Dr. Jeni Theresa ensures transparent, ethical professional healthcare without surprise costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Box 1 */}
            <div className="p-7 md:p-8 rounded-3xl bg-white border border-[#0A1C17]/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#0A1C17] text-[#FAF8F5] flex items-center justify-center font-extrabold text-sm mb-5 shadow-sm group-hover:scale-105 transition-transform">
                  01
                </div>
                <h3 className="text-xl font-sans font-extrabold text-[#0A1C17] mb-2">Initial Diagnostic Evaluation</h3>
                <p className="text-xs font-mono-tech text-[#C2593B] font-extrabold uppercase tracking-wider mb-4">45 Mins • 100% Doctor Time</p>
                <p className="text-xs sm:text-sm text-[#0A1C17]/80 leading-relaxed font-sans font-normal">
                  An intensive orthopedic, neurological, or pediatric clinical evaluation. Dr. Jeni performs precise physical tests to identify nerve compression and muscle imbalances before initiating immediate pain-relief therapy.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#0A1C17]/10 flex items-center gap-2 text-xs font-mono-tech font-bold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent quote via WhatsApp</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="p-7 md:p-8 rounded-3xl bg-white border border-[#0A1C17]/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#C2593B] text-white flex items-center justify-center font-extrabold text-sm mb-5 shadow-sm group-hover:scale-105 transition-transform">
                  02
                </div>
                <h3 className="text-xl font-sans font-extrabold text-[#0A1C17] mb-2">All-Inclusive Follow-Up Care</h3>
                <p className="text-xs font-mono-tech text-emerald-700 font-extrabold uppercase tracking-wider mb-4">Zero Extra Modality Upsells</p>
                <p className="text-xs sm:text-sm text-[#0A1C17]/80 leading-relaxed font-sans font-normal">
                  Unlike commercial clinic chains that charge extra fees for each needle or equipment used, follow-up rehab sessions cover whatever intervention your recovery requires—including precision dry needling and manual joint mobilization—at one steady fee.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#0A1C17]/10 flex items-center gap-2 text-xs font-mono-tech font-bold text-[#0A1C17]/75">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Structured recovery plans available</span>
              </div>
            </div>

            {/* Box 3 - Highlight */}
            <div className="p-7 md:p-8 rounded-3xl bg-[#163029] text-white border-2 border-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#D2A13E] text-[#0A1C17] flex items-center justify-center font-extrabold text-sm mb-5 shadow-sm group-hover:scale-105 transition-transform">
                  03
                </div>
                <h3 className="text-xl font-sans font-extrabold text-white mb-2">Flexible Consultation Modes</h3>
                <p className="text-xs font-mono-tech text-emerald-300 font-extrabold uppercase tracking-wider mb-4">Home Visits & Tele-Rehab</p>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-normal">
                  Whether booking a dedicated Home Visit across Bommasandra & Electronic City, Bengaluru or an Online Video Tele-Rehabilitation session from across India, appointment timings and direct payment instructions (UPI/Cards) are confirmed clearly via our secure WhatsApp triage desk.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono-tech font-bold text-[#D2A13E]">
                <Sparkles className="w-4 h-4 text-[#D2A13E] shrink-0" />
                <span>100% Guaranteed 1-on-1 Doctor Time</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="pt-12 border-t border-[#0A1C17]/15">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1C17]/5 text-[#0A1C17] font-mono-tech text-xs font-bold mb-3 border border-[#0A1C17]/10">
              <HelpCircle className="w-3.5 h-3.5 text-[#C2593B]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight text-[#0A1C17]">
              Everything You Need To Know Before{' '}
              <span className="text-[#C2593B]">Choosing Dr. Jeni Theresa.</span>
            </h2>
            <p className="text-sm text-[#0A1C17]/75 font-medium mt-2 font-sans">
              Have a clinical question about your MRI or recovery timeline that isn't answered here? Ask Dr. Jeni directly on our live WhatsApp concierge line.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'bg-white border-[#0A1C17] shadow-xl' : 'bg-white/70 border-[#0A1C17]/15 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 md:p-6 font-sans font-extrabold text-base md:text-lg text-[#0A1C17] flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className={`p-2 rounded-xl transition-transform duration-300 shrink-0 ${isOpen ? 'bg-[#0A1C17] text-white rotate-180' : 'bg-[#0A1C17]/5 text-[#0A1C17]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#0A1C17]/85 font-sans font-medium leading-relaxed border-t border-[#0A1C17]/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Booking Action Prompt */}
          <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#0A1C17] to-[#163029] text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/15">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[11px] font-mono-tech text-emerald-300 uppercase tracking-widest font-bold flex items-center justify-center sm:justify-start gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#D2A13E]" />
                <span>Direct Clinical Access</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white">
                Ready to restore your physical strength without temporary band-aids?
              </h3>
              <p className="text-xs sm:text-sm text-white/75 font-sans font-medium">
                Reserve your Initial Comprehensive Assessment directly with Dr. Jeni Theresa, DPT today.
              </p>
            </div>

            <button
              onClick={onOpenTriage}
              className="px-8 py-4 rounded-2xl bg-[#C2593B] hover:bg-[#A84528] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(194,89,59,0.4)] hover:shadow-xl transition-all flex items-center gap-2 shrink-0 group cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
