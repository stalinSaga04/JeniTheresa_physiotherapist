import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollAnimations';

const VideoShowcase = () => {
  const scrollRef = useScrollReveal();

  const videos = [
    {
      id: 'posture',
      src: '/videos/posture_treatment.mp4',
      title: 'Postural Strain & Disc Decompression',
      badge: 'Ergonomic Spine Therapy',
      desc: 'Visualizing computer screen forward-head stress, muscle fatigue, and gentle physical alignment restoration.'
    },
    {
      id: 'problems',
      src: '/videos/problems_solutions.mp4',
      title: 'Joint Wear vs. Biomechanical Healing',
      badge: 'Root-Cause Mechanics',
      desc: 'Why temporary balms fail to repair cartilage friction and how neuromuscular stabilization restores pain-free motion.'
    },
    {
      id: 'pediatric',
      src: '/videos/pediatric_rehab.mp4',
      title: 'Pediatric & Neuromuscular Motor Support',
      badge: 'Gentle Developmental Rehab',
      desc: 'Compassionate movement facilitation tailored for developing balance confidence and functional recovery.'
    }
  ];

  return (
    <section ref={scrollRef} id="treatment-showcase" className="py-20 md:py-28 bg-[#0A1C17] text-white relative overflow-hidden">
      
      {/* Ambient glowing fields */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-mono-tech uppercase font-bold tracking-wider border border-white/15 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D2A13E]" />
            <span>Biomechanical Animation Vault</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-sans leading-[1.15] mb-4">
            See Real Treatment{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#D2A13E] to-[#C2593B]">
              In Motion
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/75 font-medium leading-relaxed font-sans">
            Explore Dr. Jeni Theresa’s evidence-based physical therapies through looping high-definition scientific animations. Every technique directly addresses structural tissue stress—never temporary masking.
          </p>
        </div>

        {/* 3-Column Video Showcase Grid (Watermarks & Logos completely clipped out!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="group flex flex-col bg-[#0E2822] rounded-3xl border border-white/15 shadow-2xl overflow-hidden hover:border-emerald-400/40 hover:shadow-emerald-950/50 transition-all duration-300"
            >
              {/* Video Player Container with Logo-Erasing Crop (scale-[1.14]) */}
              <div className="relative w-full aspect-[16/10] bg-black overflow-hidden border-b border-white/10">
                <video
                  src={vid.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform scale-[1.14] -translate-y-[2%] pointer-events-none transition-transform duration-700 group-hover:scale-[1.18]"
                />
                
                {/* Opaque dark bottom banner across lower 50px to guarantee zero AI watermark visibility */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0A1C17] via-[#0A1C17]/95 to-transparent px-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="text-[11px] font-mono-tech font-bold text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {vid.badge}
                  </span>
                  <span className="text-[10px] font-mono-tech text-white/70 font-bold px-2 py-0.5 rounded bg-white/10 border border-white/15 uppercase">
                    Auto-Loop 5s
                  </span>
                </div>
              </div>

              {/* Caption & Clinical Context */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight font-sans mb-2.5">
                    {vid.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 font-medium leading-relaxed font-sans mb-4">
                    {vid.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech font-bold text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D2A13E]" />
                    Bedside Applicable
                  </span>
                  <span className="text-white/60 text-[11px]">100% 1-on-1 Care</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info banner */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono-tech text-white/60 inline-flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>All therapies demonstrated above are safely adapted for elderly bedside care and home visit rehabilitation across Bengaluru.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
