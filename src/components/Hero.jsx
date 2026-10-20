import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ChakravyuhWheel from './ChakravyuhWheel';
import PrizeHeroCard from './PrizeHeroCard';
import { soundFX } from '../utils/audio';

export default function Hero({ onSelectTrack, onOpenRegister, onNavigate, activeTrackId }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        
        {/* 3-Column Desktop Grid (4-5-3 = 12 cols, balanced hero typography & centered wheel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 xl:gap-6 items-center">
          
          {/* Left Column: Typography matching exact Figma & reference design tokens */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-20">
            
            {/* Tagline: INNOVATE · COLLABORATE · CREATE (Single line on desktop) */}
            <div className="font-inika text-xs sm:text-sm text-[#286880] tracking-[0.22em] uppercase font-semibold mb-3.5 whitespace-nowrap">
              INNOVATE · COLLABORATE · CREATE
            </div>

            {/* Bold Headline: Exact 3 Lines */}
            <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] text-[#E7E7E8] tracking-tight leading-[1.08] mb-4">
              <span className="whitespace-nowrap">TURN IDEAS</span>
              <br />
              <span>INTO</span>
              <br />
              <span className="text-[#35ACE7] drop-shadow-[0_0_25px_rgba(53,172,231,0.8)]">
                IMPACT.
              </span>
            </h1>

            {/* Subtitle Description: 3 Balanced Lines */}
            <p className="font-inika text-xs sm:text-sm md:text-[15px] text-[#E7E7E8] leading-relaxed max-w-[390px] mb-6 opacity-90">
              Build innovative solutions for real-world<br className="hidden sm:inline" />{' '}
              challenges, collaborate with brilliant minds<br className="hidden sm:inline" />{' '}
              and create a better tomorrow.
            </p>

            {/* CTA Button: EXPLORE THEMES ↗ */}
            <div>
              <button
                onClick={() => {
                  soundFX.playClick();
                  onNavigate('themes');
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="group px-6 py-2.5 rounded-full bg-[#1D1D1D]/90 hover:bg-[#252525] border border-cyan-500/40 hover:border-cyan-400 text-[#F5F5F5] font-roboto-mono text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.6)] active:scale-95"
              >
                <span>EXPLORE THEMES</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#35ACE7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Center Column: Chakravyuh Radial Wheel (Centered across 5 columns) */}
          <div className="lg:col-span-5 flex justify-center items-center z-20">
            <ChakravyuhWheel onSelectTrack={onSelectTrack} activeTrackId={activeTrackId} />
          </div>

          {/* Right Column: Prize Pool Card (3 columns) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end z-20">
            <PrizeHeroCard onOpenRegister={onOpenRegister} onNavigate={onNavigate} />
          </div>

        </div>

      </div>
    </section>
  );
}
