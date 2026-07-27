import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, RotateCw } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollAnimations';

const VideoShowcase = () => {
  const scrollRef = useScrollReveal();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(true);

  // Auto-restart video every 5 seconds (for short clips)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // If video is longer than 5 seconds, restart at 5-second mark
      if (video.duration > 5 && video.currentTime >= 5) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    const handleEnded = () => {
      // Auto replay on end regardless
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section ref={scrollRef} className="py-16 md:py-24 bg-[#0A1C17] text-white relative overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* Section label */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-mono-tech uppercase font-bold tracking-wider border border-white/15 mb-4">
            <Play className="w-3.5 h-3.5 text-[#D2A13E]" />
            Clinical Practice Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-sans">
            See Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-[#D2A13E]">
              Treatment in Action
            </span>
          </h2>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-black aspect-video"
        >
          {hasVideo ? (
            <>
              <video
                ref={videoRef}
                src="/videos/clinic-showcase.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onError={() => setHasVideo(false)}
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                    </button>
                  </div>
                  <span className="text-xs font-mono-tech text-white/60 flex items-center gap-1.5">
                    <RotateCw className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
                    Auto-replay every 5s
                  </span>
                </div>
              </div>
            </>
          ) : (
            /* Placeholder when no video file exists yet */
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#163029] text-center p-8">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-5 border border-white/15">
                <Play className="w-8 h-8 text-[#D2A13E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-sans">Clinical Video Coming Soon</h3>
              <p className="text-sm text-white/60 max-w-md font-medium">
                Dr. Jeni Theresa's treatment showcase video will appear here. 
                Place your <code className="text-emerald-300">.mp4</code> file as <code className="text-emerald-300">public/videos/clinic-showcase.mp4</code>
              </p>
            </div>
          )}
        </motion.div>

        {/* Caption */}
        <p className="text-center text-xs text-white/50 font-mono-tech mt-4">
          🎥 Real clinical physiotherapy sessions • Bommasandra, Bengaluru
        </p>

      </div>
    </section>
  );
};

export default VideoShowcase;
