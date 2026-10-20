import React from 'react';
import { Users, Code, FileCheck, Award, AlertCircle } from 'lucide-react';
import { RULES_DATA } from '../data/hackathonData';
import { soundFX } from '../utils/audio';

const iconMap = {
  Users,
  Code,
  FileCheck,
  Award
};

export default function RulesSection({ onOpenRegister }) {
  return (
    <section id="rules" className="py-24 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[#19e3d4] text-xs font-mono uppercase tracking-widest mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>RULES & ELIGIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-inter font-black text-white tracking-tight mb-4">
            PROTOCOLS OF THE <span className="text-[#35a8f0]">ARENA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every hacker in the arena abides by these protocols to ensure a transparent, fair, and high-impact engineering marathon.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {RULES_DATA.map((rule, idx) => {
            const Icon = iconMap[rule.iconName] || Code;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-[#19e3d4]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-inter font-bold text-white">
                    {rule.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {rule.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#19e3d4] mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Fast Action CTA */}
        <div className="p-6 rounded-2xl bg-[#0a1226] border border-[#1a2342] text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-inter font-bold text-white">Ready with your squad?</div>
            <div className="text-xs text-slate-400">Teams of 1 to 4 members are eligible to register now.</div>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenRegister();
            }}
            className="px-6 py-2.5 rounded-full bg-[#19e3d4] hover:bg-cyan-300 text-slate-950 font-inter font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(25,227,212,0.4)]"
          >
            Form a Team ↗
          </button>
        </div>

      </div>
    </section>
  );
}
