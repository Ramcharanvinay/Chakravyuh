import React from 'react';
import { Target, Users, Flame, ShieldCheck } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function AboutSection({ onNavigate, onOpenRegister }) {
  const stats = [
    { label: 'Innovation Tracks', value: '5', sub: 'Themes', color: 'text-[#2fb8ff]' },
    { label: 'Max Team Size', value: '4', sub: 'Members', color: 'text-[#22d39a]' },
    { label: 'Total Prize Pool', value: '₹7L', sub: 'Bounties', color: 'text-[#f2b632]' },
    { label: 'Expected Hackers', value: '1,500+', sub: 'Innovators', color: 'text-[#ff3fa4]' },
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[#19e3d4] text-xs font-mono uppercase tracking-widest mb-3">
            <span>ABOUT CHAKRAVYUH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-inter font-black text-white tracking-tight mb-4">
            BREAK THE MAZE. <span className="text-[#35a8f0]">CONQUER THE CODE.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A multi-track hackathon where teams enter the arena, pick a theme, collaborate with brilliant minds, and build solutions that matter.
          </p>
        </div>

        {/* Stats Grid matching Downloaded Site */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((s, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => soundFX.playHover()}
              className="p-6 rounded-2xl glass-panel text-center relative overflow-hidden"
            >
              <div className={`text-3xl sm:text-4xl font-inter font-extrabold mb-1 ${s.color}`}>
                {s.value}
              </div>
              <div className="text-xs font-mono text-white font-semibold uppercase tracking-wider">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Story Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-purple-950/30 border border-cyan-500/20 rounded-3xl p-8 sm:p-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-inter font-bold text-white mb-4">
              WHY CHAKRAVYUH?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Inspired by the legendary strategic multi-tier formation, Chakravyuh Hackathon challenges participants to engineer scalable, resilient architectures across 5 mission-critical technological verticals.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Whether you are architecting zero-knowledge privacy protocols or simulating quantum annealing algorithms, you will be paired with seasoned architects from premier engineering hubs.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onNavigate('themes');
                }}
                className="px-5 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-[#19e3d4] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Explore 5 Tracks ↗
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenRegister();
                }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-[0_0_15px_rgba(25,227,212,0.4)]"
              >
                Register Team ↗
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-[#19e3d4] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-inter font-bold text-white mb-1">Uncompromising Engineering</h4>
                <p className="text-xs text-slate-400">Mentorship checkpoints and architecture review throughout the 36-hour sprint.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-purple-500/20 text-[#ff3fa4] shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-inter font-bold text-white mb-1">Direct Industry Incubation</h4>
                <p className="text-xs text-slate-400">Winning projects receive direct seed introductions, grants, and fast-track hiring referrals.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
