import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ERGO_TIPS } from '../data/clinicalData';
import { Cpu, CheckSquare, Sparkles, AlertCircle, ArrowRight, Activity, RotateCcw } from 'lucide-react';

const ErgoCalculator = ({ onOpenTriage }) => {
  const [deskHours, setDeskHours] = useState(8);
  const [exerciseFreq, setExerciseFreq] = useState(2);
  const [painLevel, setPainLevel] = useState(4);
  const [postureStress, setPostureStress] = useState(3);

  // Compute live mechanical vulnerability index (0 to 100%)
  const calculateScore = () => {
    let score = (deskHours * 4.5) + (painLevel * 6) + (postureStress * 5) - (exerciseFreq * 4);
    if (score > 100) score = 98;
    if (score < 5) score = 12;
    return Math.round(score);
  };

  const score = calculateScore();

  // Determine risk category from clinicalData presets
  const getTipGroup = () => {
    if (score >= 65) return ERGO_TIPS.highRisk;
    if (score >= 40) return ERGO_TIPS.medRisk;
    return ERGO_TIPS.lowRisk;
  };

  const tip = getTipGroup();

  const resetDefaults = () => {
    setDeskHours(6);
    setExerciseFreq(3);
    setPainLevel(2);
    setPostureStress(2);
  };

  return (
    <section id="ergo-lab" className="py-24 md:py-32 bg-[#FAF8F5] text-[#0A1C17] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1C17]/5 border border-[#0A1C17]/15 text-xs font-mono-tech tracking-widest uppercase mb-4 text-[#0A1C17] font-bold">
            <Cpu className="w-3.5 h-3.5 text-[#C2593B]" />
            <span>Interactive Biomechanical Assessment Widget</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-clinical font-black tracking-tight text-[#0A1C17] mb-5 leading-tight">
            Calculate Your Live <br />
            <span className="italic font-editorial font-normal text-[#C2593B]">Postural & Athletic Strain Index</span>
          </h2>
          <p className="text-base md:text-lg text-[#0A1C17]/80 font-normal leading-relaxed">
            Sedentary repetitive strain is an insidious structural tax. Adjust your daily kinetic metrics below to reveal your orthopedic overload percentage and unlock an instant custom relief prescription from Dr. Jeni Theresa.
          </p>
        </div>

        {/* Master Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left / Center Column: Interactive Sliders */}
          <div className="lg:col-span-6 bg-white border-2 border-[#0A1C17]/15 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#0A1C17]/10 pb-4 mb-6">
                <h3 className="text-xl font-serif-clinical font-bold text-[#0A1C17] flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#C2593B]" />
                  <span>Daily Kinetic Variables</span>
                </h3>
                <button
                  onClick={resetDefaults}
                  title="Reset variables"
                  className="text-xs font-mono-tech font-bold text-[#0A1C17]/60 hover:text-[#C2593B] uppercase flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              <div className="space-y-7">
                
                {/* Slider 1: Desk Hours */}
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-[#0A1C17]">Daily Sedentary Screen / Desk Hours</span>
                    <span className="font-mono-tech font-bold text-[#C2593B] text-base">{deskHours} Hours / day</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="16"
                    step="1"
                    value={deskHours}
                    onChange={(e) => setDeskHours(Number(e.target.value))}
                    className="w-full h-2.5 bg-[#0A1C17]/10 rounded-lg appearance-none cursor-pointer accent-[#0A1C17]"
                  />
                  <div className="flex justify-between text-[11px] font-mono-tech text-[#0A1C17]/50 mt-1 font-semibold">
                    <span>0h (Active Worker)</span>
                    <span>8h (Standard Desk)</span>
                    <span>16h+ (Intense Marathon)</span>
                  </div>
                </div>

                {/* Slider 2: Weekly Sport/Exercise */}
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-[#0A1C17]">Weekly Active Mobility & Strength Hours</span>
                    <span className="font-mono-tech font-bold text-emerald-700 text-base">{exerciseFreq} Hours / week</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="14"
                    step="1"
                    value={exerciseFreq}
                    onChange={(e) => setExerciseFreq(Number(e.target.value))}
                    className="w-full h-2.5 bg-[#0A1C17]/10 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                  />
                  <div className="flex justify-between text-[11px] font-mono-tech text-[#0A1C17]/50 mt-1 font-semibold">
                    <span>0h (Sedentary)</span>
                    <span>5h (Balanced Athlete)</span>
                    <span>14h+ (High Training)</span>
                  </div>
                </div>

                {/* Slider 3: Current Ambient Discomfort Scale */}
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-[#0A1C17]">Current Ambient Discomfort / Stiffness</span>
                    <span className="font-mono-tech font-bold text-[#C2593B] text-base">{painLevel} / 10 Scale</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={painLevel}
                    onChange={(e) => setPainLevel(Number(e.target.value))}
                    className="w-full h-2.5 bg-[#0A1C17]/10 rounded-lg appearance-none cursor-pointer accent-[#C2593B]"
                  />
                  <div className="flex justify-between text-[11px] font-mono-tech text-[#0A1C17]/50 mt-1 font-semibold">
                    <span>0 (Total Comfort)</span>
                    <span>5 (Nagging Ache)</span>
                    <span>10 (Acute Impairment)</span>
                  </div>
                </div>

                {/* Slider 4: Work Stress & Muscle Guarding Tone */}
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-[#0A1C17]">Shoulder Holding Tone / Mental Work Stress</span>
                    <span className="font-mono-tech font-bold text-[#0A1C17] text-base">Level {postureStress} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={postureStress}
                    onChange={(e) => setPostureStress(Number(e.target.value))}
                    className="w-full h-2.5 bg-[#0A1C17]/10 rounded-lg appearance-none cursor-pointer accent-[#0A1C17]"
                  />
                  <div className="flex justify-between text-[11px] font-mono-tech text-[#0A1C17]/50 mt-1 font-semibold">
                    <span>1 (Relaxed Shoulders)</span>
                    <span>3 (Moderate Tense)</span>
                    <span>5 (Rigid Elevation)</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A1C17]/10 flex items-center justify-between text-xs font-mono-tech text-[#0A1C17]/70 font-semibold">
              <span>*Calculation based on ergonomic kinetic shearing models</span>
              <span>LIVE DIAGNOSTIC WIDGET</span>
            </div>
          </div>

          {/* Right Column: Computed Score & Custom Clinical Prescription */}
          <div className="lg:col-span-6 bg-[#0A1C17] text-[#FAF8F5] rounded-3xl p-6 md:p-9 shadow-2xl flex flex-col justify-between border-2 border-[#0A1C17] relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#C2593B]/10 rounded-full blur-[90px] pointer-events-none" />

            <div>
              {/* Score Meter Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono-tech uppercase text-emerald-400 font-bold tracking-wider">
                    Calculated Mechanical Strain
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl md:text-5xl font-mono-tech font-black text-white">
                      {score}%
                    </span>
                    <span className="text-xs text-white/70 uppercase font-semibold">Vulnerability Score</span>
                  </div>
                </div>

                <div className={`px-4 py-2 rounded-2xl font-mono-tech text-xs font-black uppercase border tracking-wide shrink-0 shadow-md ${tip.color}`}>
                  {tip.status}
                </div>
              </div>

              {/* Diagnostic Interpretation */}
              <div className="mb-6">
                <h4 className="text-xs font-mono-tech uppercase text-white/60 font-bold tracking-widest mb-2">Clinical Interpretation</h4>
                <p className="text-sm md:text-base text-[#FAF8F5]/90 leading-relaxed font-serif italic bg-white/5 p-4 rounded-2xl border border-white/10 font-normal">
                  "{tip.summary}"
                </p>
              </div>

              {/* Immediate Prescription Protocol */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-emerald-300 font-bold uppercase tracking-wider">
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dr. Jeni Theresa's Instant Decompression Protocol</span>
                </div>

                <div className="space-y-2.5">
                  {tip.prescription.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-white/95">
                      <span className="w-6 h-6 rounded-lg bg-[#C2593B] text-white flex items-center justify-center text-xs font-mono-tech font-bold shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span className="leading-snug pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct consultation callout */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono-tech text-[#FAF8F5]/80 font-semibold">
                Want a personalized full biomechanical workup?
              </div>
              <button
                onClick={onOpenTriage}
                className="px-6 py-3 rounded-xl bg-[#C2593B] hover:bg-[#A84528] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-colors cursor-pointer flex items-center justify-center gap-2 group shrink-0"
              >
                <span>Book Orthopedic Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ErgoCalculator;
