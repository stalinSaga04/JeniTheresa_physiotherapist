import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Calendar, MessageCircle, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, Download, Sparkles, FileText } from 'lucide-react';

const TriageBooking = ({ isOpen, onClose, initialSymptom }) => {
  const [step, setStep] = useState(1);
  const [symptomArea, setSymptomArea] = useState(initialSymptom || "Cervical Spine & Neck Tension");
  const [duration, setDuration] = useState("Chronic (Over 3 months)");
  const [painLevel, setPainLevel] = useState(6);
  const [imagingStatus, setImagingStatus] = useState("No MRI or X-Ray taken yet");
  const [preferredModality, setPreferredModality] = useState("In-Person Clinic Assessment (Recommended)");
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
  };

  const generateWhatsAppMessage = () => {
    const msg = `🏥 *New Clinical Triage Request — Dr. Jeni Theresa, PT, DPT*\n\n` +
      `👤 *Patient:* ${patientName || 'Not specified'}\n` +
      `📞 *Phone/Contact:* ${patientPhone || 'Direct via WhatsApp'}\n` +
      `📍 *Target Symptom Area:* ${symptomArea}\n` +
      `⏱️ *Symptom Duration:* ${duration}\n` +
      `🔥 *Pain & Limitation Scale:* ${painLevel} / 10\n` +
      `🩺 *Imaging Status:* ${imagingStatus}\n` +
      `📅 *Preferred Consultation:* ${preferredModality}\n\n` +
      `📝 *Clinical Notes:* ${notes || 'None provided in wizard'}\n\n` +
      `_Requested via interactive digital diagnostic clinic._`;
    
    return encodeURIComponent(msg);
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/919876543210?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  const downloadBrief = () => {
    const txt = `DR. JENI THERESA, PT, DPT — PATIENT TRIAGE & CLINICAL SUMMARY\n=======================================================\n\n` +
      `Patient Name: ${patientName || 'Not specified'}\n` +
      `Phone/Contact: ${patientPhone || 'Not specified'}\n` +
      `Target Symptom Area: ${symptomArea}\n` +
      `Symptom Duration: ${duration}\n` +
      `Reported Pain Scale: ${painLevel} / 10\n` +
      `Prior Diagnostic Imaging: ${imagingStatus}\n` +
      `Preferred Appointment Format: ${preferredModality}\n` +
      `Additional Clinical Notes: ${notes || 'None provided'}\n\n` +
      `Please present this brief during your one-on-one evaluation with Dr. Jeni Theresa.`;
    
    const blob = new Blob([txt], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Dr_Jeni_Theresa_Triage_Brief_${Date.now()}.txt`;
    link.click();
  };

  const symptomOptions = [
    "Cervical Spine & Neck Tension",
    "Rotator Cuff & Shoulder Impingement",
    "Lumbar Spine & Deep Sacral Core",
    "Patellofemoral Knee & Anterior Tracking",
    "Achilles & Plantar Fascial Chain",
    "Post-Surgical / Other Athletic Rehabilitation"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      
      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-[#FAF8F5] text-[#0A1C17] w-full max-w-2xl rounded-3xl shadow-2xl border-2 border-[#0A1C17] overflow-hidden relative"
      >
        {/* Top Clinical Header Bar */}
        <div className="bg-[#0A1C17] text-[#FAF8F5] p-6 sm:px-8 flex items-center justify-between border-b border-white/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C2593B] text-white flex items-center justify-center font-bold font-mono-tech shadow-md">
              DPT
            </div>
            <div>
              <h3 className="text-xl font-serif-clinical font-bold text-white leading-none">
                Clinical Triage & Concierge
              </h3>
              <p className="text-xs font-mono-tech text-emerald-300 mt-1 uppercase tracking-wider font-semibold">
                Dr. Jeni Theresa • One-on-One Assessment Setup
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker (if not yet submitted) */}
        {!isSubmitted && (
          <div className="bg-[#0A1C17]/5 px-6 sm:px-8 py-3.5 border-b border-[#0A1C17]/10 flex items-center justify-between text-xs font-mono-tech font-bold uppercase">
            <span className="text-[#0A1C17]">Step 0{step} of 04 • {step === 1 ? 'Primary Target' : step === 2 ? 'Symptom Timeline' : step === 3 ? 'Diagnostics & Preferences' : 'Patient Verification'}</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`w-6 h-1.5 rounded-full transition-all ${i === step ? 'bg-[#C2593B]' : i < step ? 'bg-[#0A1C17]' : 'bg-[#0A1C17]/20'}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          
          {/* SUCCESS VIEW AFTER COMPLETION */}
          {isSubmitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-serif-clinical font-black text-[#0A1C17]">
                  Triage Brief Generated!
                </h4>
                <p className="text-sm text-[#0A1C17]/80 font-normal mt-2 max-w-md mx-auto">
                  Your structural assessment parameters have been compiled. Connect instantly with Dr. Jeni Theresa via WhatsApp or download your printed brief below.
                </p>
              </div>

              {/* Formatted preview box */}
              <div className="bg-white border-2 border-[#0A1C17]/15 rounded-2xl p-5 text-left font-mono-tech text-xs space-y-2 shadow-inner">
                <div className="text-[#C2593B] font-bold uppercase pb-2 border-b border-[#0A1C17]/10">
                  ⚡ CLINICAL TRIAGE SUMMARY
                </div>
                <div><strong>Patient:</strong> {patientName || 'Confidential Patient'} ({patientPhone || 'No phone entered'})</div>
                <div><strong>Symptom Focus:</strong> {symptomArea}</div>
                <div><strong>Duration & Severity:</strong> {duration} • Pain {painLevel}/10</div>
                <div><strong>Prior Imaging:</strong> {imagingStatus}</div>
                <div><strong>Format Requested:</strong> {preferredModality}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm tracking-wide shadow-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Direct To Dr. Jeni (WhatsApp)</span>
                </button>

                <button
                  onClick={downloadBrief}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#0A1C17]/10 hover:bg-[#0A1C17]/20 text-[#0A1C17] font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download TXT Brief</span>
                </button>
              </div>

              <button
                onClick={() => { setIsSubmitted(false); setStep(1); }}
                className="text-xs font-mono-tech text-[#0A1C17]/60 hover:text-[#0A1C17] uppercase underline font-semibold mt-2 cursor-pointer inline-block"
              >
                Reset Triage Wizard
              </button>
            </div>
          ) : (
            /* WIZARD STEPS FORM */
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: TARGET SYMPTOM AREA */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-serif-clinical font-bold text-[#0A1C17] mb-1">
                      1. Select Your Primary Symptom or Injury Focus
                    </label>
                    <p className="text-xs font-mono-tech text-[#0A1C17]/70 font-semibold">
                      This allows Dr. Jeni to prepare appropriate biomechanical assessment templates.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {symptomOptions.map((item, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSymptomArea(item)}
                        className={`p-4 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer border-2 flex items-center justify-between ${
                          symptomArea === item
                            ? 'bg-[#0A1C17] text-[#FAF8F5] border-[#0A1C17] shadow-md'
                            : 'bg-white text-[#0A1C17] border-[#0A1C17]/15 hover:border-[#0A1C17]/40'
                        }`}
                      >
                        <span className="leading-snug">{item}</span>
                        {symptomArea === item && <CheckCircle2 className="w-4 h-4 text-[#C2593B] shrink-0 ml-2" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: TIMELINE & PAIN SCALE */}
              {step === 2 && (
                <div className="space-y-7">
                  <div>
                    <label className="block text-lg font-serif-clinical font-bold text-[#0A1C17] mb-2">
                      2. Symptom Chronology & Severity
                    </label>
                    <p className="text-xs sm:text-sm text-[#0A1C17]/80 font-normal">
                      How long has this functional limitation been persisting?
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                      {["Acute (< 2 weeks)", "Sub-acute (2–12 wks)", "Chronic (> 3 months)"].map((opt, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setDuration(opt)}
                          className={`py-3 px-4 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer border ${
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

                  <div className="pt-4 border-t border-[#0A1C17]/10">
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-[#0A1C17]">Current Functional Impairment / Pain Scale</span>
                      <span className="font-mono-tech font-bold text-[#C2593B] text-base">{painLevel} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={painLevel}
                      onChange={(e) => setPainLevel(Number(e.target.value))}
                      className="w-full h-2.5 bg-[#0A1C17]/15 rounded-lg appearance-none cursor-pointer accent-[#C2593B]"
                    />
                    <div className="flex justify-between text-[11px] font-mono-tech text-[#0A1C17]/60 mt-1 font-bold">
                      <span>1 (Minor ache)</span>
                      <span>5 (Limits activity)</span>
                      <span>10 (Severe inability)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: DIAGNOSIS IMAGING & MODALITY PREFERENCE */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base sm:text-lg font-serif-clinical font-bold text-[#0A1C17] mb-2">
                      3. Diagnostic Imaging Status
                    </label>
                    <div className="space-y-2">
                      {[
                        "No MRI or X-Ray taken yet (Need evaluation)",
                        "MRI / X-Ray completed (Will bring images/report)",
                        "Post-surgical protocol (Doctor referral available)"
                      ].map((img, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setImagingStatus(img)}
                          className={`w-full p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
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
                    <label className="block text-base sm:text-lg font-serif-clinical font-bold text-[#0A1C17] mb-2">
                      Preferred Appointment Format
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "In-Person Clinic Assessment (Recommended)",
                        "Virtual Tele-Rehab Triage (Video Call)"
                      ].map((fmt, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setPreferredModality(fmt)}
                          className={`p-4 rounded-2xl text-xs font-mono-tech font-bold text-left transition-all cursor-pointer border-2 ${
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
                <div className="space-y-5">
                  <div>
                    <label className="block text-lg font-serif-clinical font-bold text-[#0A1C17] mb-1">
                      4. Patient Details & Additional Clinical Notes
                    </label>
                    <p className="text-xs font-mono-tech text-[#0A1C17]/70 font-semibold">
                      Your details remain strictly confidential under HIPAA / clinical privacy standards.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech font-bold uppercase text-[#0A1C17] mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Sarah Jenkins"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white border border-[#0A1C17]/20 text-sm focus:outline-none focus:border-[#C2593B] transition-colors font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-tech font-bold uppercase text-[#0A1C17] mb-1">
                        Phone Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g., +91 98765 43210"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white border border-[#0A1C17]/20 text-sm focus:outline-none focus:border-[#C2593B] transition-colors font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech font-bold uppercase text-[#0A1C17] mb-1">
                      Brief Description of Sport, Daily Demand or Symptoms (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="e.g., Pain intensifies during mile 3 of running, or sitting during Zoom calls..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl bg-white border border-[#0A1C17]/20 text-sm focus:outline-none focus:border-[#C2593B] transition-colors resize-none font-medium"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* NAVIGATION CONTROLS */}
              <div className="mt-8 pt-6 border-t border-[#0A1C17]/15 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-6 py-3 rounded-xl bg-white text-[#0A1C17] border border-[#0A1C17]/20 hover:bg-[#0A1C17]/5 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3.5 rounded-xl bg-[#0A1C17] hover:bg-[#C2593B] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-9 py-4 rounded-2xl bg-[#C2593B] hover:bg-[#A84528] text-white font-black text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center gap-2.5"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Generate Clinical Triage Brief</span>
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
