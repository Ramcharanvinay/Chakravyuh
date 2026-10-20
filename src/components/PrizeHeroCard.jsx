import React from 'react';
import { Trophy, Rocket, Users, Globe, ArrowUpRight } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function PrizeHeroCard({ onOpenRegister, onNavigate }) {
  const highlights = [
    {
      icon: Rocket,
      title: '5 INNOVATION TRACKS',
      subtitle: 'Explore. Build. Innovate.',
      action: () => onNavigate('themes')
    },
    {
      icon: Users,
      title: 'BUILD WITH YOUR TEAM',
      subtitle: 'Up to 4 members.',
      action: () => onNavigate('rules')
    },
    {
      icon: Globe,
      title: 'REAL-WORLD IMPACT',
      subtitle: 'Solve. Create. Make a difference.',
      action: () => onNavigate('about')
    }
  ];

  return (
    <div className="relative group w-full max-w-[340px] sm:max-w-[370px] rounded-3xl p-6 sm:p-7 bg-[#060c22]/85 border border-cyan-500/25 shadow-[0_0_40px_rgba(0,140,255,0.22)] backdrop-blur-2xl flex flex-col justify-between">
      
      {/* Corner Ambient Glows */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />

      <div>
        {/* Header: Trophy + Label */}
        <div className="flex items-center gap-2.5 mb-2">
          <Trophy className="w-5 h-5 text-cyan-300" />
          <span className="font-cantarell text-xs sm:text-sm font-normal tracking-wider text-slate-200 uppercase">
            TOTAL PRIZE POOL
          </span>
        </div>

        {/* Prize Pool Big Stat */}
        <div className="my-2">
          <div className="text-3xl sm:text-4xl font-inter font-black text-white tracking-tight drop-shadow-[0_0_18px_rgba(0,210,255,0.7)]">
            ₹ 7,00,000
          </div>
        </div>

        {/* Thin Divider */}
        <div className="w-full h-px bg-cyan-500/20 my-4" />

        {/* 3 Highlight Items (exact to Figma) */}
        <div className="space-y-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => {
                  soundFX.playClick();
                  item.action();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="flex items-start gap-3.5 group/item cursor-pointer"
              >
                <div className="mt-0.5 text-[#35ACE7] group-hover/item:text-cyan-300 transition-colors">
                  <Icon className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-xs font-inter font-bold text-white group-hover/item:text-[#35ACE7] transition-colors tracking-wide">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Primary CTA Button: Gradient from Cyan to Purple (exact to Figma screenshot) */}
      <div className="mt-7 pt-1">
        <button
          onClick={() => {
            soundFX.playClick();
            onOpenRegister();
          }}
          onMouseEnter={() => soundFX.playHover()}
          className="w-full relative group/btn py-3 px-5 rounded-full bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#c084fc] hover:from-[#38bdf8] hover:to-[#e879f9] text-slate-950 font-inter font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.7)] hover:shadow-[0_0_35px_rgba(192,132,252,0.9)] transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          <span>REGISTER NOW</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
}
