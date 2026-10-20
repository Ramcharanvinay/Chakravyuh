import React, { useState, useEffect } from 'react';
import { TRACKS_DATA } from '../data/hackathonData';
import { soundFX } from '../utils/audio';

export default function ChakravyuhWheel({ onSelectTrack, activeTrackId }) {
  const [selectedTrackId, setSelectedTrackId] = useState(activeTrackId || null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    if (activeTrackId !== undefined) {
      setSelectedTrackId(activeTrackId);
    }
  }, [activeTrackId]);

  // Master SVG Coordinate System: 687 x 687 (matching exact dimensions of wheel.png)
  const size = 687;
  const cx = 343.5;
  const cy = 343.5;
  const rIn = 98;    // Center hub outer boundary (sectors start here)
  const rOut = 332;  // Sector perimeter outer boundary
  const rHub = 95;   // Center hub interactive circle (3px clearance from sectors)

  // Calibrated boundary angles for all 5 sectors (matching visible artwork in wheel.png)
  // Gaps between adjacent sectors are exactly 2.0 degrees, ensuring ZERO cross-sector bleed.
  const sectors = [
    {
      id: 'cybersecurity',
      number: '01',
      titleLine1: 'CYBERSECURITY &',
      titleLine2: 'BLOCKCHAIN',
      startDeg: 228.5,
      endDeg: 311.0,
      centerAngle: -90,
      numColor: '#2D9FB0',
      themeColor: '#2fb8ff',
      glow: 'rgba(47, 184, 255, 0.75)',
      icon: 'shield-lock',
      content: {
        number: { x: 343.5, y: 38 },
        icon: { x: 343.5, y: 96 },
        title1: { x: 343.5, y: 152 },
        title2: { x: 343.5, y: 170 },
        arrow: { x: 343.5, y: 212 }
      }
    },
    {
      id: 'spacetech',
      number: '03',
      titleLine1: 'SPACE',
      titleLine2: 'TECHNOLOGY',
      startDeg: 313.0,
      endDeg: 383.0, // 23.0 deg
      centerAngle: -12,
      numColor: '#9F822F',
      themeColor: '#f2b632',
      glow: 'rgba(242, 182, 50, 0.75)',
      icon: 'rocket',
      content: {
        number: { x: 569, y: 171 },
        icon: { x: 566, y: 246 },
        title1: { x: 566, y: 313 },
        title2: { x: 566, y: 333 },
        arrow: { x: 566, y: 375 }
      }
    },
    {
      id: 'quantum',
      number: '05',
      titleLine1: 'QUANTUM',
      titleLine2: 'COMPUTING',
      startDeg: 25.0,
      endDeg: 89.0,
      centerAngle: 57,
      numColor: '#B45D8F',
      themeColor: '#ff3fa4',
      glow: 'rgba(255, 63, 164, 0.75)',
      icon: 'quantum',
      content: {
        number: { x: 466, y: 429 },
        icon: { x: 466, y: 487 },
        title1: { x: 466, y: 534 },
        title2: { x: 466, y: 554 },
        arrow: { x: 466, y: 582 }
      }
    },
    {
      id: 'fintech',
      number: '04',
      titleLine1: 'FINTECH',
      titleLine2: '',
      startDeg: 91.0,
      endDeg: 156.0,
      centerAngle: 123.5,
      numColor: '#C59C40',
      themeColor: '#ff8a1f',
      glow: 'rgba(255, 138, 31, 0.75)',
      icon: 'fintech',
      content: {
        number: { x: 207, y: 425 },
        icon: { x: 204, y: 491 },
        title1: { x: 204, y: 538 },
        title2: null,
        arrow: { x: 204, y: 582 }
      }
    },
    {
      id: 'energy',
      number: '02',
      titleLine1: 'ENERGY AND',
      titleLine2: 'SUSTAINABILITY',
      startDeg: 158.0,
      endDeg: 226.5,
      centerAngle: 192.25,
      numColor: '#18A08B',
      themeColor: '#22d39a',
      glow: 'rgba(34, 211, 154, 0.75)',
      icon: 'shield-leaf',
      content: {
        number: { x: 103, y: 197 },
        icon: { x: 108, y: 268 },
        title1: { x: 108, y: 328 },
        title2: { x: 108, y: 348 },
        arrow: { x: 108, y: 390 }
      }
    }
  ];

  // Mathematically exact sector path generator
  const makeSectorPath = (startDeg, endDeg, r1, r2) => {
    const startRad = (startDeg * Math.PI) / 180;
    const endRad = (endDeg * Math.PI) / 180;

    const x1 = cx + r1 * Math.cos(startRad);
    const y1 = cy + r1 * Math.sin(startRad);
    const x2 = cx + r2 * Math.cos(startRad);
    const y2 = cy + r2 * Math.sin(startRad);
    const x3 = cx + r2 * Math.cos(endRad);
    const y3 = cy + r2 * Math.sin(endRad);
    const x4 = cx + r1 * Math.cos(endRad);
    const y4 = cy + r1 * Math.sin(endRad);

    const angleDiff = ((endDeg - startDeg) % 360 + 360) % 360;
    const largeArcFlag = angleDiff > 180 ? 1 : 0;

    return `M ${x1} ${y1} L ${x2} ${y2} A ${r2} ${r2} 0 ${largeArcFlag} 1 ${x3} ${y3} L ${x4} ${y4} A ${r1} ${r1} 0 ${largeArcFlag} 0 ${x1} ${y1} Z`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-[680px] mx-auto py-2">
      
      {/* Background Volumetric Cyan Halo */}
      <div className="absolute w-[480px] h-[480px] rounded-full bg-cyan-400/20 blur-[100px] -z-10 pointer-events-none animate-pulse" />

      {/* Main Wheel Container with Smooth Floating Animation (Keyframe 'float') */}
      <div 
        className="relative w-full aspect-square max-w-[560px] sm:max-w-[620px] lg:max-w-[670px] cursor-pointer"
        style={{
          animation: 'float 7s ease-in-out infinite'
        }}
      >
        
        {/* 1. Official High-Resolution Transparent Wheel Graphic */}
        <img 
          src="/assets/wheel.png" 
          alt="Chakravyuh Illustrated Tracks Wheel"
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_40px_rgba(60,120,255,0.4)]"
        />

        {/* 2. Precision Interactive SVG Layer: Aligned Directly With Every Wedge */}
        <svg 
          viewBox={`0 0 ${size} ${size}`} 
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'auto' }}
        >
          <defs>
            {/* Exact SVG Clipping Paths for every sector */}
            {sectors.map((s) => (
              <clipPath key={`clip-${s.id}`} id={`clip-${s.id}`}>
                <path d={makeSectorPath(s.startDeg, s.endDeg, rIn, rOut)} />
              </clipPath>
            ))}

            <linearGradient id="center-swirl-gradient" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#c026d3" />
            </linearGradient>
          </defs>

          {/* A. Sector Interactive Highlights and Borders (Exact to Sector Geometry) */}
          {sectors.map((s) => {
            const isHovered = hoveredId === s.id;
            const isSelected = selectedTrackId === s.id;
            const isActive = isHovered || isSelected;
            const track = TRACKS_DATA.find((t) => t.id === s.id);
            const pathD = makeSectorPath(s.startDeg, s.endDeg, rIn, rOut);

            return (
              <g key={`sector-layer-${s.id}`}>
                {/* 1. Default Subtle Border & Active Neon Glow Border */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={isActive ? s.themeColor : 'rgba(255, 255, 255, 0.12)'}
                  strokeWidth={isActive ? 3.5 : 1}
                  strokeLinejoin="round"
                  className="transition-colors duration-200 pointer-events-none"
                  filter={isActive ? `drop-shadow(0 0 16px ${s.glow})` : 'none'}
                />

                {/* 2. Interactive Sector Hit-Target with Illuminated Translucent Fill */}
                <path
                  d={pathD}
                  fill={isActive ? s.themeColor : 'rgba(0,0,0,0.001)'}
                  fillOpacity={isSelected ? 0.28 : (isHovered ? 0.18 : 0.001)}
                  stroke="transparent"
                  strokeWidth={0}
                  className="cursor-pointer transition-all duration-200"
                  style={{ pointerEvents: 'all' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    soundFX.playClick();
                    setSelectedTrackId(s.id);
                    onSelectTrack(track);
                  }}
                  onMouseEnter={() => {
                    soundFX.playHover();
                    setHoveredId(s.id);
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <title>{s.titleLine1} {s.titleLine2} (Click to inspect track)</title>
                </path>
              </g>
            );
          })}

          {/* B. Center Hub Hit-Circle (Concentric circle, r = 95, isolated from sectors) */}
          <circle
            cx={cx}
            cy={cy}
            r={rHub}
            fill={hoveredId === 'center' ? 'rgba(0, 240, 255, 0.22)' : 'rgba(0,0,0,0.001)'}
            stroke={hoveredId === 'center' ? '#00f0ff' : 'transparent'}
            strokeWidth={hoveredId === 'center' ? 3.5 : 0}
            filter={hoveredId === 'center' ? 'drop-shadow(0 0 25px #00f0ff)' : 'none'}
            className="cursor-pointer transition-all duration-200"
            style={{ pointerEvents: 'all' }}
            onClick={(e) => {
              e.stopPropagation();
              soundFX.playClick();
              onSelectTrack(TRACKS_DATA[0]);
            }}
            onMouseEnter={() => {
              soundFX.playHover();
              setHoveredId('center');
            }}
            onMouseLeave={() => setHoveredId(null)}
          >
            <title>Choose Your Track</title>
          </circle>

          {/* C. Sector Content Overlays (Numbers, Icons, Titles, Arrow Badges) */}
          {sectors.map((s) => {
            const isHovered = hoveredId === s.id;
            const isSelected = selectedTrackId === s.id;
            const isActive = isHovered || isSelected;

            return (
              <g 
                key={`content-${s.id}`} 
                className="pointer-events-none"
              >
                {/* 1. Track Number (01, 02, 03, 04, 05) */}
                <text
                  x={s.content.number.x}
                  y={s.content.number.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily="'Poppins', sans-serif"
                  fontWeight="600"
                  fontSize="18"
                  fill={isActive ? '#ffffff' : s.numColor}
                  filter={isActive ? `drop-shadow(0 0 10px ${s.themeColor})` : 'none'}
                  className="transition-colors duration-200"
                >
                  {s.number}
                </text>

                {/* 2. Vector Outline Icon (Shield-Lock, Shield-Leaf, Rocket, Chart, Quantum) */}
                <g 
                  transform={`translate(${s.content.icon.x - 14}, ${s.content.icon.y - 14})`}
                  filter={isActive ? `drop-shadow(0 0 10px ${s.themeColor})` : 'drop-shadow(0 0 4px rgba(0,0,0,0.85))'}
                >
                  {s.icon === 'shield-lock' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <rect x="9" y="11" width="6" height="5" rx="1" fill="#ffffff" fillOpacity="0.28" />
                      <path d="M10 11V9a2 2 0 0 1 4 0v2" />
                    </svg>
                  )}

                  {s.icon === 'shield-leaf' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M12 8a3 3 0 0 1 3 3c0 2-3 5-3 5s-3-3-3-5a3 3 0 0 1 3-3z" fill="#ffffff" fillOpacity="0.28" />
                      <path d="M12 11v5" />
                    </svg>
                  )}

                  {s.icon === 'rocket' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-2.05 9.05A22 22 0 0 1 15 12z" fill="#ffffff" fillOpacity="0.28" />
                      <path d="M9 12H4s.55-3.03 2-4.5c1.45-1.47 4.5-2 4.5-2" />
                      <path d="M12 15v5s3.03-.55 4.5-2c1.47-1.45 2-4.5 2-4.5" />
                    </svg>
                  )}

                  {s.icon === 'fintech' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <rect x="7" y="12" width="3" height="6" rx="0.5" fill="#ffffff" fillOpacity="0.28" />
                      <rect x="13" y="8" width="3" height="10" rx="0.5" fill="#ffffff" fillOpacity="0.28" />
                      <rect x="19" y="5" width="2" height="13" rx="0.5" fill="#ffffff" fillOpacity="0.28" />
                      <path d="m7 11 4-4 4 3 5-5" />
                    </svg>
                  )}

                  {s.icon === 'quantum' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2.8" fill="#ffffff" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(30 12 12)" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(-30 12 12)" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(90 12 12)" />
                    </svg>
                  )}
                </g>

                {/* 3. Category Title Text */}
                {s.content.title2 ? (
                  <>
                    <text
                      x={s.content.title1.x}
                      y={s.content.title1.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontFamily="'Inter', sans-serif"
                      fontWeight="700"
                      fontSize="13.5"
                      fill="#ffffff"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.95))"
                      className="uppercase tracking-wide"
                    >
                      {s.titleLine1}
                    </text>
                    <text
                      x={s.content.title2.x}
                      y={s.content.title2.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontFamily="'Inter', sans-serif"
                      fontWeight="700"
                      fontSize="13.5"
                      fill="#ffffff"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.95))"
                      className="uppercase tracking-wide"
                    >
                      {s.titleLine2}
                    </text>
                  </>
                ) : (
                  <text
                    x={s.content.title1.x}
                    y={s.content.title1.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontFamily="'Inter', sans-serif"
                    fontWeight="700"
                    fontSize="18"
                    fill="#ffffff"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.95))"
                    className="uppercase tracking-wider"
                  >
                    {s.titleLine1}
                  </text>
                )}

                {/* 4. Circular Chevron Badge ( > ) */}
                <g 
                  transform={`translate(${s.content.arrow.x}, ${s.content.arrow.y})`}
                  className="transition-all duration-200"
                >
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="10" 
                    fill={isActive ? s.themeColor : 'rgba(0, 0, 0, 0.55)'}
                    stroke={isActive ? s.themeColor : 'rgba(255, 255, 255, 0.45)'}
                    strokeWidth="1.4"
                    filter={isActive ? `drop-shadow(0 0 10px ${s.themeColor})` : 'none'}
                  />
                  <path 
                    d="M -2.5 -4 L 2.5 0 L -2.5 4" 
                    fill="none" 
                    stroke={isActive ? '#050a1a' : '#ffffff'} 
                    strokeWidth="2.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </g>
              </g>
            );
          })}

          {/* D. Center Hub Vector Overlay ("CHOOSE YOUR TRACK" + Swirl) */}
          <g className="pointer-events-none">
            {/* Inner Cyber Dashed Concentric Track */}
            <circle 
              cx={cx} 
              cy={cy} 
              r={78} 
              fill="none" 
              stroke="#00f0ff" 
              strokeWidth="1.2" 
              strokeDasharray="5 5" 
              opacity="0.35" 
            />

            {/* Swirling Vortex Icon */}
            <g transform={`translate(${cx - 18}, ${cy - 44})`}>
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="42" stroke="#00f0ff" strokeWidth="4" strokeDasharray="6 6" className="opacity-60" />
                <path 
                  d="M50 16 A34 34 0 0 1 84 50 A24 24 0 0 1 60 74 A14 14 0 0 1 50 64" 
                  stroke="url(#center-swirl-gradient)" 
                  strokeWidth="7" 
                  strokeLinecap="round" 
                />
                <circle cx="50" cy="50" r="6" fill="#00f0ff" />
              </svg>
            </g>

            {/* Typography */}
            <text
              x={cx}
              y={cy + 13}
              textAnchor="middle"
              fontFamily="'Inter', sans-serif"
              fontWeight="800"
              fontSize="14.5"
              fill="#ffffff"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))"
              className="uppercase tracking-wider"
            >
              CHOOSE
            </text>
            <text
              x={cx}
              y={cy + 31}
              textAnchor="middle"
              fontFamily="'Inter', sans-serif"
              fontWeight="800"
              fontSize="14.5"
              fill="#ffffff"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.9))"
              className="uppercase tracking-wider"
            >
              YOUR TRACK
            </text>
          </g>
        </svg>

      </div>

      {/* Under-Wheel Subtitle */}
      <div className="mt-4 text-center">
        <div className="font-inter font-bold text-xs sm:text-sm md:text-base tracking-[0.2em] text-[#B1B6BD] uppercase">
          5 THEMES &nbsp;|&nbsp; ONE ARENA &nbsp;|&nbsp; LIMITLESS POSSIBILITIES
        </div>
      </div>

    </div>
  );
}
