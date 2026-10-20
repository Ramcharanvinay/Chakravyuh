import React from 'react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../data/hackathonData';
import { soundFX } from '../utils/audio';

export default function TimelineSection({ onOpenRegister }) {
  return (
    <section id="timeline" className="py-24 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[#19e3d4] text-xs font-mono uppercase tracking-widest mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>EVENT TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-inter font-black text-white tracking-tight mb-4">
            THE CHRONICLES OF <span className="text-[#35a8f0]">BATTLE</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Follow the journey from squad formation to the 36-hour physical arena sprint and demo day.
          </p>
        </div>

        {/* Timeline List with Connecting Neon Line */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1d3a50] space-y-10">
          {TIMELINE_DATA.map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => soundFX.playHover()}
              className="relative group"
            >
              {/* Timeline Node */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                item.active 
                  ? 'bg-[#19e3d4] border-white shadow-[0_0_14px_#19e3d4]' 
                  : 'bg-[#050a1a] border-cyan-500'
              }`} />

              {/* Card */}
              <div className={`p-6 rounded-2xl glass-panel ${
                item.active ? 'border-cyan-400/50 shadow-[0_0_25px_rgba(25,227,212,0.2)]' : ''
              }`}>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-[#19e3d4] tracking-wider">
                    {item.date}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                    item.active 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-inter font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                {item.active && (
                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end">
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        onOpenRegister();
                      }}
                      className="text-xs font-inter font-bold text-[#19e3d4] hover:text-cyan-200 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Register for this Phase ↗</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
