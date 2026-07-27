import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Calendar, MessageCircle, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, Sparkles, PhoneCall } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';

const TriageBooking = ({ isOpen, onClose, initialSymptom = null }) => {
  const [step, setStep] = useState(1);
  const [symptomArea, setSymptomArea] = useState(initialSymptom || "Lower Back Pain & Sciatica (Lumbar Strain)");
  const [duration, setDuration] = useState("Chronic (Over 3 months)");
  const [painLevel, setPainLevel] = useState(6);
  const [imagingStatus, setImagingStatus] = useState("No MRI or X-Ray taken yet");
  const [preferredModality, setPreferredModality] = useState("Dedicated Home Visit Therapy (Bengaluru & Bommasandra - Recommended)");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 85,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0A1C17', '#C2593B', '#10B981', '#D2A13E']
    });
    // Immediately open WhatsApp to connect patient without any confusing downloads or delays
    openWhatsApp();
  };

  // Security Sanitization to prevent XSS, malformed URL parameters, or excessive script strings in medical transmission
  const sanitizeInput = (str, maxLen = 300) => {
    if (!str) return "";
    return str.toString().trim().replace(/[<>"{}\\]/g, "").slice(0, maxLen);
  };

  const generateWhatsAppMessage = () => {
    const safeName = sanitizeInput(patientName, 100) || 'Not specified';
    const safePhone = sanitizeInput(patientPhone, 50) || 'Direct via WhatsApp';
    const safeNotes = sanitizeInput(notes, 400) || 'None provided';

    const msg = `🏥 *New Consultation Request — Dr. Jeni Theresa, PT, DPT*\n\n` +
      `👤 *Patient:* ${safeName}\n` +
      `📞 *Phone/Contact:* ${safePhone}\n` +
      `📍 *Condition Focus:* ${symptomArea}\n` +
      `⏱️ *Symptom Duration:* ${duration}\n` +
      `🔥 *Pain & Limitation Scale:* ${painLevel} / 10\n` +
      `🩺 *Imaging Status:* ${imagingStatus}\n` +
      `📅 *Preferred Appointment:* ${preferredModality}\n\n` +
      `📝 *Additional Notes:* ${safeNotes}\n\n` +
      `_Submitted securely via interactive Dr. Jeni clinical assessment._`;
    
    return encodeURIComponent(msg);
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const symptomOptions = [
    "Lower Back Pain & Sciatica (Lumbar Strain)",
    "Neck & Shoulder Pain (Cervical Tension / Impingement)",
    "Knee Pain & Joint Arthritis (Patellar Tracking / Osteopathy)",
    "Stroke / Neurological & Balance Rehabilitation",
    "Post-Surgical Rehab (Knee / Hip Replacement & Ligament)",
    "Pediatric Physiotherapy (Developmental Delay / CP)"
  ];

  return (
    /* Bulletproof mobile overlay with overscroll lock and safe area screen margins */
    <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 sm:py-8 overscroll-contain">
      
      {/* Viewport-bounded Modal Container: Prevents header clipping on small smartphones! */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="bg-[#FAF8F5] text-[#0A1C17] w-full max-w-2xl max-h-[92svh] sm:max-h-[88svh] rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] border sm:border-2 border-[#0A1C17] flex flex-col overflow-hidden relative sm:my-auto"
      >
        {/* Top Clinical Header Bar (Pinned & Never Clipped!) */}
        <div className="bg-[#0A1C17] text-[#FAF8F5] p-4 sm:p-6 sm:px-8 flex-shrink-0 flex items-center justify-between border-b border-white/15 z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C2593B] text-white flex items-center justify-center font-bold text-xs sm:text-sm font-mono-tech shadow-md">
              DPT
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-serif-clinical font-bold text-white leading-tight">
                Clinical Triage & Concierge
              </h3>
              <p className="text-[10px] sm:text-xs font-mono-tech text-emerald-300 mt-0.5 sm:mt-1 uppercase tracking-wider font-semibold">
                Dr. Jeni Theresa • Private Assessment Setup
              </p>
            </div>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Tracker (Pinned immediately below header!) */}
        {!isSubmitted && (
          <div className="bg-[#0A1C17]/5 px-4 sm:px-8 py-2.5 sm:py-3.5 flex-shrink-0 border-b border-[#0A1C17]/10 flex items-center justify-between text-[11px] sm:text-xs font-mono-tech font-bold uppercase z-20">
            <span className="text-[#0A1C17] truncate max-w-[200px] sm:max-w-none">Step 0{step} of 04 • {step === 1 ? 'Primary Target' : step === 2 ? 'Symptom Timeline' : step === 3 ? 'Diagnostics' : 'Verification'}</span>
            <div className="flex gap-1 sm:gap-1.5 shrink-0 ml-2">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`w-4 sm:w-6 h-1.5 rounded-full transition-all ${i === step ? 'bg-[#C2593B]' : i < step ? 'bg-[#0A1C17]' : 'bg-[#0A1C17]/20'}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ZERO SCROLLING Internal Form Body with min-h-0 flex containment so footer buttons never get pushed off screen! */}
        <div className="overflow-hidden flex-1 flex flex-col justify-between min-h-0">
          
          {/* SUCCESS VIEW AFTER COMPLETION */}
          {isSubmitted ? (
            <div className="text-center p-4 sm:p-6 py-4 space-y-4 my-auto overflow-y-auto">
              <div className="w-14 h-14 bg-[#25D366] text-[#0A1C17] rounded-full flex items-center justify-center mx-auto shadow-xl animate-bounce">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-serif-clinical font-black text-[#0A1C17]">
                  Consultation Details Ready!
                </h4>
                <p className="text-xs sm:text-sm text-[#0A1C17]/80 font-normal mt-1 max-w-md mx-auto">
                  We have launched WhatsApp with your personalized recovery profile to connect directly with Dr. Jeni Theresa.
                </p>
              </div>

              {/* Formatted preview box */}
              <div className="bg-white border border-[#0A1C17]/15 rounded-2xl p-4 text-left font-sans text-xs sm:text-sm space-y-1.5 shadow-inner text-[#0A1C17]">
                <div className="text-[#C2593B] font-bold uppercase pb-1.5 border-b border-[#0A1C17]/10 flex items-center gap-1.5 font-mono-tech">
                  <Sparkles className="w-3.5 h-3.5 text-[#D2A13E]" />
                  <span>Your Booking Summary</span>
                </div>
                <div><strong>Patient Name:</strong> {patientName || 'Confidential Patient'}</div>
                <div><strong>Phone/WhatsApp:</strong> {patientPhone || 'Connected via WhatsApp'}</div>
                <div><strong>Condition Focus:</strong> {symptomArea}</div>
                <div><strong>Duration & Severity:</strong> {duration} • Pain {painLevel}/10</div>
                <div><strong>Appointment Mode:</strong> {preferredModality}</div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-[#0A1C17] font-black text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>📲 Reopen WhatsApp Chat with Dr. Jeni</span>
                </button>
                
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full py-2.5 rounded-xl bg-white border border-[#0A1C17]/20 hover:bg-[#0A1C17]/5 text-[#0A1C17] font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C2593B]" />
                  <span>Or Call Clinic Direct: {CLINIC_INFO.phone}</span>
                </a>
              </div>

              <button
                onClick={() => { setIsSubmitted(false); setStep(1); }}
                className="text-[11px] font-mono-tech text-[#0A1C17]/60 hover:text-[#0A1C17] uppercase underline font-semibold mt-1 cursor-pointer inline-block"
              >
                Reset Triage Wizard
              </button>
            </div>
          ) : (
            /* WIZARD STEPS FORM (min-h-0 prevents navigation controls from disappearing on mobile!) */
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 justify-between overflow-hidden min-h-0">
              
              {/* Middle option space: flex-1 and min-h-0 guarantee it sits neatly between top header and bottom Next button! */}
              <div className="space-y-4 my-auto p-4 sm:p-6 sm:px-7 overflow-y-auto overscroll-contain flex-1 min-h-0">
                {/* STEP 1: TARGET SYMPTOM AREA */}
                {step === 1 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-base sm:text-lg font-serif-clinical font-bold text-[#0A1C17]">
                        1. Select Your Primary Symptom or Injury Focus
                      </label>
                      <p className="text-[11px] sm:text-xs font-mono-tech text-[#0A1C17]/70 font-semibold mt-0.5">
                        This allows Dr. Jeni to prepare appropriate biomechanical assessment templates.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {symptomOptions.map((item, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setSymptomArea(item)}
                          className={`p-2.5 sm:p-3 rounded-xl text-left text-xs sm:text-[13px] font-semibold transition-all cursor-pointer border-2 flex items-center justify-between ${
                            symptomArea === item
                              ? 'bg-[#0A1C17] text-[#FAF8F5] border-[#0A1C17] shadow-md'
                              : 'bg-white text-[#0A1C17] border-[#0A1C17]/15 hover:border-[#0A1C17]/40'
                          }`}
                        >
                          <span className="leading-tight">{item}</span>
                          {symptomArea === item && <CheckCircle2 className="w-4 h-4 text-[#C2593B] shrink-0 ml-1.5" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: TIMELINE & PAIN SCALE */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-base sm:text-lg font-serif-clinical font-bold text-[#0A1C17] mb-1">
                        2. Symptom Chronology & Severity
                      </label>
                      <p className="text-xs text-[#0A1C17]/80 font-normal">
                        How long has this functional limitation been persisting?
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2.5">
                        {["Acute (< 2 weeks)", "Sub-acute (2–12 wks)", "Chronic (> 3 months)"].map((opt, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setDuration(opt)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer border ${
                              duration === opt
                                ? 'bg-[#C2593B] text-white border-[#C2593B] shadow-md'
                                : 'bg-white text-[#0A1C17] border-[#0A1C17]/20 hover:border-[#0A1C17]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#0A1C17]/10">
                      <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1.5">
                        <span className="text-[#0A1C17]">Current Functional Impairment / Pain Scale</span>
                        <span className="font-mono-tech font-bold text-[#C2593B] text-sm sm:text-base">{painLevel} / 10</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={painLevel}
                        onChange={(e) => setPainLevel(Number(e.target.value))}
                        className="w-full h-2 bg-[#0A1C17]/15 rounded-lg appearance-none cursor-pointer accent-[#C2593B]"
                      />
                      <div className="flex justify-between text-[10px] font-mono-tech text-[#0A1C17]/60 mt-1 font-bold">
                        <span>1 (Minor ache)</span>
                        <span>5 (Limits activity)</span>
                        <span>10 (Severe inability)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: DIAGNOSIS IMAGING & MODALITY PREFERENCE */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm sm:text-base font-serif-clinical font-bold text-[#0A1C17] mb-1.5">
                        3. Diagnostic Imaging Status
                      </label>
                      <div className="space-y-1.5">
                        {[
                          "No MRI or X-Ray taken yet (Need evaluation)",
                          "MRI / X-Ray completed (Will bring images/report)",
                          "Post-surgical protocol (Doctor referral available)"
                        ].map((img, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setImagingStatus(img)}
                            className={`w-full p-2.5 rounded-xl text-left text-xs sm:text-[13px] font-semibold transition-all cursor-pointer border ${
                              imagingStatus === img
                                ? 'bg-[#0A1C17] text-white border-[#0A1C17] shadow-md'
                                : 'bg-white text-[#0A1C17] border-[#0A1C17]/20 hover:bg-[#0A1C17]/5'
                            }`}
                          >
                            {img}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm sm:text-base font-serif-clinical font-bold text-[#0A1C17] mb-1.5">
                        Preferred Appointment Format
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {[
                          "Dedicated Home Visit Therapy (Bengaluru & Bommasandra)",
                          "High-Def Online Video Tele-Rehab (All India)"
                        ].map((fmt, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => setPreferredModality(fmt)}
                            className={`p-3 rounded-xl text-xs font-mono-tech font-bold text-left transition-all cursor-pointer border-2 ${
                              preferredModality === fmt
                                ? 'bg-[#C2593B] text-white border-[#C2593B] shadow-md'
                                : 'bg-white text-[#0A1C17] border-[#0A1C17]/20 hover:border-[#0A1C17]'
                            }`}
                          >
                            {fmt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: PATIENT IDENTIFICATION & FINAL NOTES */}
                {step === 4 && (
                  <div className="space-y-3 sm:space-y-3.5">
                    <div>
                      <label className="block text-base sm:text-lg font-serif-clinical font-bold text-[#0A1C17] mb-0.5">
                        4. Patient Details & Clinical Notes
                      </label>
                      <p className="text-[11px] font-mono-tech text-[#0A1C17]/70 font-semibold">
                        Strictly confidential under Medical Ethics standards.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono-tech font-bold uppercase text-[#0A1C17] mb-1">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Karthik Narayanan"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          className="w-full p-2.5 sm:p-3 rounded-xl bg-white border border-[#0A1C17]/20 text-xs sm:text-sm focus:outline-none focus:border-[#C2593B] transition-colors font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono-tech font-bold uppercase text-[#0A1C17] mb-1">
                          Phone Number / WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g., +91 98840 12345"
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          className="w-full p-2.5 sm:p-3 rounded-xl bg-white border border-[#0A1C17]/20 text-xs sm:text-sm focus:outline-none focus:border-[#C2593B] transition-colors font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tech font-bold uppercase text-[#0A1C17] mb-1">
                        Brief Description of Symptoms (Optional)
                      </label>
                      <textarea
                        rows="2"
                        placeholder="e.g., Severe lower back ache during commute, or neck stiffness..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full p-2.5 sm:p-3 rounded-xl bg-white border border-[#0A1C17]/20 text-xs sm:text-sm focus:outline-none focus:border-[#C2593B] transition-colors resize-none font-medium"
                      ></textarea>
                    </div>

                    {/* Transparent Fee Assurance */}
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-[11px] font-mono-tech font-bold uppercase text-emerald-950 tracking-wide">100% Ethical Medical Fee Guarantee & Private Triage</h5>
                        <p className="text-[11px] text-[#0A1C17]/85 leading-tight font-sans mt-0.5 font-normal">
                          No online prepayment required. Your consultation format, doctor timing, and professional fee will be verified via WhatsApp prior to your session.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* NAVIGATION CONTROLS (Permanently docked at the bottom of every smartphone screen without ever disappearing!) */}
              <div className="p-3.5 px-4 sm:px-7 sm:py-4 border-t border-[#0A1C17]/15 flex items-center justify-between flex-shrink-0 z-30 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-[#0A1C17] border border-[#0A1C17]/20 hover:bg-[#0A1C17]/5 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-[#0A1C17] hover:bg-[#C2593B] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-[#0A1C17] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>📲 Confirm & Book on WhatsApp</span>
                  </button>
                )}
              </div>

            </form>
          )}

        </div>

      </motion.div>

    </div>
  );
};

export default TriageBooking;
