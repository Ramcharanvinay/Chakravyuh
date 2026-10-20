import React from 'react';
import { ShieldAlert, Zap, Rocket, TrendingUp, Atom, ArrowUpRight, Trophy } from 'lucide-react';
import { TRACKS_DATA } from '../data/hackathonData';
import { soundFX } from '../utils/audio';

const iconMap = {
  ShieldAlert,
  Zap,
  Rocket,
  TrendingUp,
  Atom
};

export default function ThemesSection({ onSelectTrack, onRegisterForTrack }) {
  return (
    <section id="themes" className="py-24 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[#19e3d4] text-xs font-mono uppercase tracking-widest mb-3">
            <span>5 INNOVATION TRACKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-inter font-black text-white tracking-tight mb-4">
            CHOOSE YOUR <span className="text-[#35a8f0]">BATTLEGROUND</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every track offers dedicated domain mentors, sponsor problem statements, and an exclusive track prize in addition to the grand championship!
          </p>
        </div>

        {/* 5 Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS_DATA.map((track) => {
            const Icon = iconMap[track.iconName] || ShieldAlert;

            return (
              <div
                key={track.id}
                onMouseEnter={() => soundFX.playHover()}
                onClick={() => {
                  soundFX.playClick();
                  onSelectTrack(track);
                }}
                className="group relative rounded-3xl p-6 glass-panel border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
                style={{
                  boxShadow: `0 8px 30px -10px ${track.color}25`
                }}
              >
                {/* Glow accent in corner */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-35 transition-opacity pointer-events-none"
                  style={{ backgroundColor: track.color }}
                />

                <div>
                  {/* Top Row: Track Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest border"
                      style={{ 
                        borderColor: track.color, 
                        color: track.color,
                        backgroundColor: `${track.color}15`
                      }}
                    >
                      TRACK {track.number}
                    </span>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${track.color}20`,
                        color: track.color,
                        boxShadow: `0 0 15px ${track.color}35`
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-inter font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5 line-clamp-3">
                    {track.description}
                  </p>

                  {/* Featured Challenges Preview */}
                  <div className="space-y-1.5 mb-5">
                    <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      Key Challenges:
                    </div>
                    {track.challenges.slice(0, 2).map((c, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span style={{ color: track.color }}>•</span>
                        <span className="line-clamp-1">{c}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {track.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold" style={{ color: track.color }}>
                    <Trophy className="w-3.5 h-3.5" />
                    <span>{track.prize}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-inter font-bold text-white group-hover:text-cyan-300 transition-colors">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
