import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bone, Brain, Activity, Baby, ArrowRight, CheckCircle2, MessageCircle, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';
import { useScrollReveal } from '../hooks/useScrollAnimations';

const Specialties = ({ onOpenTriage }) => {
  const scrollRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  // Dr. Jeni's exact 4-Pillar clinical specialty structure designed for clear patient understanding
  const specialties = [
    {
      id: "ortho",
      title: "Orthopaedic Rehabilitation",
      subtitle: "Restoring Joint Mechanics & Structural Freedom",
      icon: Bone,
      image: "/images/biomech_spine.png",
      color: "from-emerald-500/20 to-emerald-900/40",
      border: "border-emerald-500/30 text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      description: "Whether dealing with spinal disc friction or postural stiffness from intensive work routines, our approach targets the biomechanical root cause rather than relying on temporary pain-relief protocols.",
      conditions: [
        { name: "Low Back Pain & Lumbar Disc Strain", note: "Targeting pelvic tilt, sciatica & prolonged sitting stiffness" },
        { name: "Neck Pain & Cervical Tension", note: "Resolving text-neck postural stress & nerve root irritation" },
        { name: "Knee Pain & Patellofemoral Disorder", note: "Tracking alignment & ligament strain repair" },
        { name: "Shoulder Pain & Rotator Cuff Impingement", note: "Restoring overhead reach and scapular biomechanics" },
        { name: "Arthritis & Osteoarthritic Joint Management", note: "Preserving joint lubrication & painless mobility" }
      ],
      whatsappPrompt: "Hi Dr. Jeni, I am seeking Orthopaedic Physiotherapy evaluation for "
    },
    {
      id: "neuro",
      title: "Neurological Rehabilitation",
      subtitle: "Neuroplasticity & Motor Control Recovery",
      icon: Brain,
      image: "/images/neuro_stroke.png",
      color: "from-teal-500/20 to-teal-900/40",
      border: "border-teal-500/30 text-teal-400",
      badgeBg: "bg-teal-500/10 text-teal-300 border-teal-500/20",
      description: "Specialized neuromuscular training designed to rewire brain-to-muscle coordination, rebuild balance confidence, and restore independent mobility following neurological events.",
      conditions: [
        { name: "Stroke Rehabilitation (Hemiplegia & Paresis)", note: "Progressive gait, balance & limb functional restoration" },
        { name: "Parkinson's Disease Management", note: "Overcoming freezing episodes, rigidity & posture decline" },
        { name: "Balance & Gait Training", note: "Preventing falls and re-establishing confident locomotion" }
      ],
      whatsappPrompt: "Hi Dr. Jeni, I am inquiring about Neurological Rehabilitation & balance training for "
    },
    {
      id: "surgical",
      title: "Post-Surgical Rehabilitation",
      subtitle: "Accelerated Pre- & Post-Operative Tissue Recovery",
      icon: Activity,
      image: "/images/post_surgical.png",
      color: "from-amber-500/20 to-amber-900/40",
      border: "border-amber-500/30 text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      description: "Surgery successfully repairs anatomical structures, but precise rehabilitation rebuilds neuromuscular strength, tendon flexibility, and full functional capacity.",
      conditions: [
        { name: "Total Knee Replacement (TKR) Rehab", note: "Re-establishing range of motion & preventing stiffening" },
        { name: "Total Hip Replacement (THR) Rehab", note: "Strengthening stabilizing glutes & restoring normal gait" },
        { name: "Ligament Repair (ACL / PCL / Meniscus)", note: "Progressive functional tissue loading & sports return" }
      ],
      whatsappPrompt: "Hi Dr. Jeni, I need dedicated Post-Surgical Physiotherapy guidance following "
    },
    {
      id: "pediatric",
      title: "Pediatric Physiotherapy",
      subtitle: "Gentle, Developmental & Nurturing Child Therapies",
      icon: Baby,
      image: "/images/pediatric_rehab.png",
      color: "from-[#C2593B]/20 to-[#A84528]/40",
      border: "border-[#C2593B]/40 text-[#C2593B]",
      badgeBg: "bg-[#C2593B]/15 text-[#C2593B] border-[#C2593B]/30",
      description: "Compassionate, play-based physical therapy tailored specifically for infants and children to overcome motor milestones delays and build muscle coordination.",
      conditions: [
        { name: "Developmental Conditions & Delay", note: "Supporting independent rolling, sitting, crawling & walking" },
        { name: "Cerebral Palsy (CP) Rehab", note: "Managing spasticity, improving tone & self-reliance skills" },
        { name: "Muscular Dystrophy Management", note: "Maintaining muscle function & functional respiratory comfort" }
      ],
      whatsappPrompt: "Hi Dr. Jeni, I would like to arrange a consultation regarding Pediatric Physiotherapy for "
    }
  ];

  const handleWhatsAppSpecialty = (specialtyTitle, prompt) => {
    const text = `${prompt}a dedicated Home Visit assessment across ${CLINIC_INFO.city} / Online Video Tele-Rehab.\n\nCould you confirm your available doctor evaluation timings and procedure?`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={scrollRef} id="specialties" className="py-24 md:py-32 bg-[#0A1C17] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Subtle organic gradient backgrounds */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-[#C2593B]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Header section with Doctor's clinical badge */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 border-b border-white/15 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-mono-tech tracking-widest uppercase mb-4 text-emerald-300 font-bold border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#D2A13E]" />
              <span>Comprehensive Clinical Departments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-clinical font-black tracking-tight leading-tight text-white">
              Specialist Rehabilitation <br />
              <span className="font-editorial italic font-normal text-[#D2A13E]">Tailored to Every Life Stage.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#FAF8F5]/80 max-w-2xl font-normal leading-relaxed">
              To ensure absolute diagnostic clarity for our patients, Dr. Jeni Theresa structures treatment across four specialized clinical divisions. Each condition is addressed with one-on-one medical expertise.
            </p>
          </div>

          {/* Mini clinical supervisor profile badge */}
          <div className="flex items-center gap-4 bg-[#163029] p-3.5 pr-6 rounded-2xl border border-white/15 shadow-xl shrink-0">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-[#D2A13E]/50 shrink-0">
              <img 
                src="/images/dr-jeni-clinical.jpg" 
                alt="Dr. Jeni Theresa Clinical Director" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0A1C17]" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech uppercase text-[#D2A13E] font-bold block tracking-wider">
                Clinical Specialist & Lead
              </span>
              <h4 className="font-serif-clinical font-bold text-sm text-white leading-tight">
                Dr. Jeni Theresa, DPT
              </h4>
              <span className="text-xs font-mono-tech text-white/80">
                Bommasandra • {CLINIC_INFO.city} (Home Visits)
              </span>
            </div>
          </div>
        </div>

        {/* Desktop & Mobile Interactive Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialties.map((spec, idx) => {
            const IconComponent = spec.icon;
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-[#163029]/80 border-2 border-white/10 hover:border-[#D2A13E]/60 p-7 md:p-9 shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Background glow overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Title Bar */}
                  <div className="flex items-start justify-between gap-4 mb-5 relative z-10">
                    <div>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech font-bold uppercase border mb-3 ${spec.badgeBg}`}>
                        <span>Pillar 0{idx + 1}</span>
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif-clinical font-black text-white group-hover:text-[#D2A13E] transition-colors leading-tight">
                        {spec.title}
                      </h3>
                      <span className="text-xs font-mono-tech text-white/70 block mt-1 font-medium">
                        {spec.subtitle}
                      </span>
                    </div>
                    <div className={`p-4 rounded-2xl bg-[#0A1C17] border shadow-inner shrink-0 ${spec.border} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Scientific Biomedical Visualization Banner */}
                  <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-white/15 bg-[#0A1C17] shadow-inner">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#163029] via-transparent to-transparent opacity-90 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono-tech text-emerald-300 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10">
                      🔬 Evidence-Based Kinetic Protocol
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-[#FAF8F5]/80 leading-relaxed mb-7 relative z-10 font-normal">
                    {spec.description}
                  </p>

                  {/* Conditions Breakdown (As instructed by Dr. Jeni: "Idhula ovvoru condition ku under multiple condition irukku") */}
                  <div className="space-y-3 relative z-10 mb-8">
                    <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#D2A13E] flex items-center gap-1.5 border-b border-white/10 pb-2">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Primary Treated Conditions in this Division:</span>
                    </span>
                    
                    <div className="grid grid-cols-1 gap-2.5">
                      {spec.conditions.map((cond, cIdx) => (
                        <div 
                          key={cIdx} 
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div className="flex flex-col">
                            <span className="text-xs md:text-sm font-bold text-white leading-tight">
                              {cond.name}
                            </span>
                            <span className="text-[11px] font-mono-tech text-white/70 font-normal mt-0.5">
                              {cond.note}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 relative z-10">
                  <button
                    onClick={() => handleWhatsAppSpecialty(spec.title, spec.whatsappPrompt)}
                    className="flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-[#0A1C17] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#0A1C17] text-[#FAF8F5]" />
                    <span>Inquire via WhatsApp</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenTriage}
                    className="px-5 py-3.5 rounded-xl bg-[#0A1C17] hover:bg-white/10 text-white font-mono-tech text-xs font-bold uppercase tracking-wider border border-white/15 transition-colors text-center cursor-pointer"
                  >
                    Book Evaluation
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-white/15 text-center flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-white/70">
          <span>*Every treatment protocol begins with a comprehensive functional assessment.</span>
          <span className="text-emerald-300 font-semibold mt-2 sm:mt-0">⚡ 100% One-on-One Doctor Attention Guaranteed</span>
        </div>

      </div>
    </section>
  );
};

export default Specialties;
