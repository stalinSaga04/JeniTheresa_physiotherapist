import React from 'react';

/**
 * Animated SVG Spine & Skeleton illustration — a living, breathing anatomical visual.
 * Uses CSS keyframe animations for vertebral node pulsing and nerve path glowing.
 * Pure SVG, zero dependencies, zero external images.
 */
const SpineIllustration = ({ className = '', activeZone = 'lumbar' }) => {
  
  const zoneHighlightColors = {
    cervical: '#C2593B',
    rotator: '#D2A13E',
    lumbar: '#C2593B',
    patellar: '#10B981',
    achilles: '#C2593B',
  };

  const activeColor = zoneHighlightColors[activeZone] || '#C2593B';

  return (
    <svg 
      viewBox="0 0 200 500" 
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Animated anatomical spine illustration"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={activeColor} stopOpacity="0.35" />
          <stop offset="100%" stopColor={activeColor} stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Main spinal column line */}
      <path 
        d="M100 35 Q98 80 100 130 Q102 180 100 230 Q98 280 100 330 Q102 380 100 420"
        fill="none" 
        stroke="rgba(255,255,255,0.2)" 
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Animated glowing nerve path */}
      <path 
        d="M100 35 Q98 80 100 130 Q102 180 100 230 Q98 280 100 330 Q102 380 100 420"
        fill="none" 
        stroke={activeColor}
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-spine-glow"
        filter="url(#softGlow)"
        opacity="0.8"
      />

      {/* === SKULL / HEAD === */}
      <ellipse cx="100" cy="30" rx="22" ry="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

      {/* === CERVICAL VERTEBRAE (C1-C7) === */}
      {[55, 68, 81, 94, 107, 120, 133].map((y, i) => (
        <g key={`c${i}`}>
          <rect 
            x={100 - 14 - i * 1.5} y={y} 
            width={28 + i * 3} height={8} 
            rx="4" 
            fill={activeZone === 'cervical' ? `${activeColor}33` : 'rgba(255,255,255,0.08)'}
            stroke={activeZone === 'cervical' ? activeColor : 'rgba(255,255,255,0.18)'}
            strokeWidth={activeZone === 'cervical' ? 1.5 : 0.8}
          />
          {activeZone === 'cervical' && (
            <circle cx="100" cy={y + 4} r="2.5" fill={activeColor} className="animate-bone-pulse" />
          )}
        </g>
      ))}

      {/* === SHOULDER GIRDLE / CLAVICLE === */}
      <path d="M60 115 Q80 105 100 108 Q120 105 140 115" fill="none" stroke={activeZone === 'rotator' ? activeColor : 'rgba(255,255,255,0.2)'} strokeWidth={activeZone === 'rotator' ? 2 : 1.2} strokeLinecap="round" />
      {/* Shoulder joints */}
      <circle cx="55" cy="118" r={activeZone === 'rotator' ? 8 : 5} fill={activeZone === 'rotator' ? `${activeColor}25` : 'rgba(255,255,255,0.05)'} stroke={activeZone === 'rotator' ? activeColor : 'rgba(255,255,255,0.2)'} strokeWidth="1.2" />
      <circle cx="145" cy="118" r={activeZone === 'rotator' ? 8 : 5} fill={activeZone === 'rotator' ? `${activeColor}25` : 'rgba(255,255,255,0.05)'} stroke={activeZone === 'rotator' ? activeColor : 'rgba(255,255,255,0.2)'} strokeWidth="1.2" />
      {activeZone === 'rotator' && (
        <>
          <circle cx="55" cy="118" r="3" fill={activeColor} className="animate-bone-pulse" />
          <circle cx="145" cy="118" r="3" fill={activeColor} className="animate-bone-pulse" />
        </>
      )}

      {/* === RIB CAGE HINTS === */}
      {[145, 160, 175, 190, 205].map((y, i) => (
        <g key={`rib${i}`}>
          <path d={`M${75 - i * 2} ${y} Q100 ${y + 8 + i} ${125 + i * 2} ${y}`} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        </g>
      ))}

      {/* === THORACIC VERTEBRAE === */}
      {[145, 160, 175, 190, 205, 218].map((y, i) => (
        <rect key={`t${i}`} x={100 - 18} y={y} width={36} height={9} rx="4.5" 
          fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      ))}

      {/* === LUMBAR VERTEBRAE (L1-L5) — THE MONEY ZONE === */}
      {[235, 252, 269, 286, 303].map((y, i) => (
        <g key={`l${i}`}>
          <rect 
            x={100 - 22 - i} y={y} 
            width={44 + i * 2} height={12} 
            rx="6" 
            fill={activeZone === 'lumbar' ? `${activeColor}30` : 'rgba(255,255,255,0.06)'}
            stroke={activeZone === 'lumbar' ? activeColor : 'rgba(255,255,255,0.18)'}
            strokeWidth={activeZone === 'lumbar' ? 1.8 : 0.8}
          />
          {activeZone === 'lumbar' && (
            <circle cx="100" cy={y + 6} r="3" fill={activeColor} className="animate-bone-pulse" 
              style={{ animationDelay: `${i * 0.3}s` }} />
          )}
        </g>
      ))}

      {/* === SACRUM / PELVIS === */}
      <path 
        d="M70 325 Q85 340 100 345 Q115 340 130 325" 
        fill="rgba(255,255,255,0.04)" 
        stroke="rgba(255,255,255,0.18)" 
        strokeWidth="1.2" 
      />
      {/* Iliac crests */}
      <path d="M55 320 Q70 305 85 325" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M145 320 Q130 305 115 325" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* === FEMURS (THIGH BONES) === */}
      <line x1="80" y1="345" x2="70" y2="420" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="120" y1="345" x2="130" y2="420" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" strokeLinecap="round" />

      {/* === KNEE JOINTS === */}
      <circle cx="70" cy="425" r={activeZone === 'patellar' ? 10 : 6} fill={activeZone === 'patellar' ? `${activeColor}20` : 'rgba(255,255,255,0.04)'} stroke={activeZone === 'patellar' ? activeColor : 'rgba(255,255,255,0.18)'} strokeWidth="1.2" />
      <circle cx="130" cy="425" r={activeZone === 'patellar' ? 10 : 6} fill={activeZone === 'patellar' ? `${activeColor}20` : 'rgba(255,255,255,0.04)'} stroke={activeZone === 'patellar' ? activeColor : 'rgba(255,255,255,0.18)'} strokeWidth="1.2" />
      {activeZone === 'patellar' && (
        <>
          <circle cx="70" cy="425" r="3.5" fill={activeColor} className="animate-bone-pulse" />
          <circle cx="130" cy="425" r="3.5" fill={activeColor} className="animate-bone-pulse" />
        </>
      )}

      {/* === TIBIA / SHIN === */}
      <line x1="70" y1="435" x2="72" y2="475" stroke="rgba(255,255,255,0.13)" strokeWidth="2" strokeLinecap="round" />
      <line x1="130" y1="435" x2="128" y2="475" stroke="rgba(255,255,255,0.13)" strokeWidth="2" strokeLinecap="round" />

      {/* === ANKLE / ACHILLES === */}
      <circle cx="72" cy="480" r={activeZone === 'achilles' ? 7 : 4} fill={activeZone === 'achilles' ? `${activeColor}20` : 'rgba(255,255,255,0.04)'} stroke={activeZone === 'achilles' ? activeColor : 'rgba(255,255,255,0.15)'} strokeWidth="1" />
      <circle cx="128" cy="480" r={activeZone === 'achilles' ? 7 : 4} fill={activeZone === 'achilles' ? `${activeColor}20` : 'rgba(255,255,255,0.04)'} stroke={activeZone === 'achilles' ? activeColor : 'rgba(255,255,255,0.15)'} strokeWidth="1" />
      {activeZone === 'achilles' && (
        <>
          <circle cx="72" cy="480" r="2.5" fill={activeColor} className="animate-bone-pulse" />
          <circle cx="128" cy="480" r="2.5" fill={activeColor} className="animate-bone-pulse" />
        </>
      )}

      {/* Active zone glow overlay */}
      {activeZone === 'cervical' && <circle cx="100" cy="95" r="55" fill="url(#glow)" className="animate-float-organic" />}
      {activeZone === 'rotator' && <circle cx="100" cy="118" r="65" fill="url(#glow)" className="animate-float-organic" />}
      {activeZone === 'lumbar' && <circle cx="100" cy="270" r="65" fill="url(#glow)" className="animate-float-organic" />}
      {activeZone === 'patellar' && <circle cx="100" cy="425" r="55" fill="url(#glow)" className="animate-float-organic" />}
      {activeZone === 'achilles' && <circle cx="100" cy="480" r="45" fill="url(#glow)" className="animate-float-organic" />}

    </svg>
  );
};

export default SpineIllustration;
