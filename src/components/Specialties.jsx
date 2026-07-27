import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bone, Brain, Activity, Baby, ArrowRight, CheckCircle2, MessageCircle, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';
import { useScrollReveal } from '../hooks/useScrollAnimations';

const Specialties = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
  const [expandedCard, setExpandedCard] = useState(null);

  const accentMap = {
    ortho:     { strip: 'bg-emerald-600', icon: 'bg-emerald-50 text-emerald-700', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', hover: 'hover:border-emerald-400', glow: 'group-hover:shadow-emerald-500/10' },
    neuro:     { strip: 'bg-sky-600',     icon: 'bg-sky-50 text-sky-700',         badge: 'bg-sky-50 text-sky-700 border-sky-200',         dot: 'bg-sky-500',     hover: 'hover:border-sky-400',     glow: 'group-hover:shadow-sky-500/10' },
    surgical:  { strip: 'bg-amber-500',   icon: 'bg-amber-50 text-amber-700',     badge: 'bg-amber-50 text-amber-700 border-amber-200',   dot: 'bg-amber-500',   hover: 'hover:border-amber-400',   glow: 'group-hover:shadow-amber-500/10' },
    pediatric: { strip: 'bg-rose-500',    icon: 'bg-rose-50 text-rose-700',       badge: 'bg-rose-50 text-rose-700 border-rose-200',       dot: 'bg-rose-500',    hover: 'hover:border-rose-400',    glow: 'group-hover:shadow-rose-500/10' },
  };

  const specialties = [
    {
      id: "ortho",
      title: "Orthopaedic Rehabilitation",
      subtitle: "Restoring Joint Mechanics & Structural Freedom",
      icon: Bone,
      description: "Targeting the biomechanical root cause of spinal disc friction, postural stiffness, and joint wear — not just masking pain with temporary balms or heat pads.",
      conditions: [
        { name: "Low Back Pain & Lumbar Disc", note: "Pelvic tilt, sciatica & sitting stiffness" },
        { name: "Neck Pain & Cervical Tension", note: "Text-neck stress & nerve root irritation" },
        { name: "Knee Pain & Patellofemoral", note: "Alignment tracking & ligament repair" },
        { name: "Shoulder & Rotator Cuff", note: "Overhead reach & scapular mechanics" },
        { name: "Arthritis Management", note: "Joint lubrication & painless mobility" }
      ],
      whatsappPrompt: "Hi Dr. Jeni, I am seeking Orthopaedic Physiotherapy evaluation for "
    },
    {
      id: "neuro",
      title: "Neurological Rehabilitation",
      subtitle: "Neuroplasticity & Motor Control Recovery",
      icon: Brain,
      description: "Specialized neuromuscular training to rewire brain-to-muscle coordination, rebuild balance confidence, and restore independent mobility after neurological events.",
      conditions: [
        { name: "Stroke Rehab (Hemiplegia)", note: "Gait, balance & limb functional restoration" },
        { name: "Parkinson's Disease", note: "Freezing episodes, rigidity & posture decline" },
        { name: "Balance & Gait Training", note: "Fall prevention & confident locomotion" }
      ],
      whatsappPrompt: "Hi Dr. Jeni, I am inquiring about Neurological Rehabilitation & balance training for "
    },
    {
      id: "surgical",
      title: "Post-Surgical Rehabilitation",
      subtitle: "Pre- & Post-Operative Tissue Recovery",
      icon: Activity,
      description: "Surgery repairs structures — but precise rehabilitation rebuilds neuromuscular strength, tendon flexibility, and full functional capacity for complete recovery.",
      conditions: [
        { name: "Total Knee Replacement (TKR)", note: "Range of motion & stiffening prevention" },
        { name: "Total Hip Replacement (THR)", note: "Glute strengthening & normal gait" },
        { name: "ACL / PCL / Meniscus Repair", note: "Progressive tissue loading & sports return" }
      ],
      whatsappPrompt: "Hi Dr. Jeni, I need dedicated Post-Surgical Physiotherapy guidance following "
    },
    {
      id: "pediatric",
      title: "Pediatric Physiotherapy",
      subtitle: "Gentle Developmental & Nurturing Therapies",
      icon: Baby,
      description: "Compassionate, play-based physical therapy tailored for infants and children to overcome motor milestone delays, build muscle coordination, and nurture independence.",
      conditions: [
        { name: "Developmental Delay", note: "Rolling, sitting, crawling & walking support" },
        { name: "Cerebral Palsy (CP)", note: "Spasticity management & self-reliance skills" },
        { name: "Muscular Dystrophy", note: "Muscle function & respiratory comfort" }
      ],
      whatsappPrompt: "Hi Dr. Jeni, I would like to arrange a consultation regarding Pediatric Physiotherapy for "
    }
  ];

  const handleWhatsAppSpecialty = (prompt) => {
    const text = `${prompt}a dedicated Home Visit assessment across ${CLINIC_INFO.city} / Online Video Tele-Rehab.\n\nCould you confirm your available evaluation timings and procedure?`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={scrollRef} id="specialties" className="py-24 md:py-32 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] text-[#0A1C17] relative overflow-hidden">
      
      {/* Soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1C17] text-[#FAF8F5] text-xs font-mono-tech tracking-widest uppercase font-bold mb-5 shadow-sm border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D2A13E]" />
            <span>4 Clinical Departments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-[#0A1C17] font-sans mb-4">
            Specialist Rehabilitation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2593B] via-emerald-800 to-[#0A1C17]">
              Tailored to Every Life Stage.
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#0A1C17]/70 max-w-2xl font-medium leading-relaxed font-sans">
            Dr. Jeni Theresa structures treatment across four specialized clinical divisions. Every condition receives one-on-one, evidence-based attention — no assembly-line clinics.
          </p>
        </div>

        {/* ── Specialty Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialties.map((spec, idx) => {
            const IconComponent = spec.icon;
            const accent = accentMap[spec.id];
            const isExpanded = expandedCard === spec.id;

            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group relative bg-white rounded-2xl border border-[#0A1C17]/8 ${accent.hover} shadow-sm hover:shadow-xl ${accent.glow} transition-all duration-300 overflow-hidden`}
              >
                {/* Colored accent strip on the left */}
                <div className={`absolute top-0 left-0 w-1 h-full ${accent.strip} rounded-l-2xl`} />

                <div className="pl-6 pr-6 pt-6 pb-5 sm:pl-7 sm:pr-7">
                  
                  {/* ── Card Header ── */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className={`w-10 h-10 rounded-xl ${accent.icon} flex items-center justify-center shrink-0`}>
                          <IconComponent className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <span className={`text-[10px] font-mono-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${accent.badge}`}>
                          Pillar 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0A1C17] leading-tight font-sans">
                        {spec.title}
                      </h3>
                      <p className="text-[11px] font-mono-tech text-[#0A1C17]/50 font-semibold mt-0.5 uppercase tracking-wide">
                        {spec.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* ── Description ── */}
                  <p className="text-sm text-[#0A1C17]/75 leading-relaxed font-sans font-medium mb-5">
                    {spec.description}
                  </p>

                  {/* ── Conditions as compact inline badges ── */}
                  <div className="mb-5">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Shield className="w-3.5 h-3.5 text-[#0A1C17]/40" />
                      <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider text-[#0A1C17]/50">
                        Treated Conditions
                      </span>
                    </div>
                    <div className="space-y-2">
                      {spec.conditions.slice(0, isExpanded ? spec.conditions.length : 3).map((cond, cIdx) => (
                        <div 
                          key={cIdx} 
                          className="flex items-start gap-2.5 py-2 px-3 rounded-xl bg-[#F7F9F8] border border-[#0A1C17]/5 transition-colors hover:bg-[#EFF3F1]"
                        >
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${accent.dot.replace('bg-', 'text-')}`} />
                          <div className="min-w-0">
                            <span className="text-[13px] font-bold text-[#0A1C17] leading-tight block">
                              {cond.name}
                            </span>
                            <span className="text-[11px] text-[#0A1C17]/55 font-medium leading-snug block mt-0.5">
                              {cond.note}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {spec.conditions.length > 3 && (
                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : spec.id)}
                        className="mt-2 text-[11px] font-mono-tech font-bold text-[#0A1C17]/50 hover:text-[#0A1C17] uppercase tracking-wider cursor-pointer transition-colors flex items-center gap-1"
                      >
                        {isExpanded ? '▲ Show less' : `▼ +${spec.conditions.length - 3} more conditions`}
                      </button>
                    )}
                  </div>

                  {/* ── Action Row ── */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-[#0A1C17]/8">
                    <button
                      onClick={() => handleWhatsAppSpecialty(spec.whatsappPrompt)}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-[#0A1C17] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={onOpenTriage}
                      className="py-3 px-5 rounded-xl bg-[#0A1C17] hover:bg-[#C2593B] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                    >
                      Book
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom Assurance Strip ── */}
        <div className="mt-14 py-5 px-6 bg-[#0A1C17] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-white shadow-lg">
          <span className="text-white/80">* Every protocol begins with a comprehensive functional assessment.</span>
          <span className="text-emerald-300 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            100% One-on-One Doctor Attention
          </span>
        </div>

      </div>
    </section>
  );
};

export default Specialties;
