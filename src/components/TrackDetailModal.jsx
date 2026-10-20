import React from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Code, Trophy } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function TrackDetailModal({ track, onClose, onRegisterForTrack }) {
  if (!track) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090e21] border border-cyan-500/40 shadow-[0_0_50px_rgba(0,210,255,0.25)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: track.color }}
        />

        {/* Close Button */}
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border"
            style={{ 
              borderColor: track.color, 
              color: track.color,
              backgroundColor: `${track.color}15`
            }}
          >
            TRACK {track.number}
          </span>
          <span className="text-xs font-mono text-slate-400">
            CHAKRAVYUH 2026
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-orbitron font-black text-white mb-3">
          {track.title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-sans">
          {track.description}
        </p>

        {/* Track Prize */}
        <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Track Bounty</div>
              <div className="text-lg font-orbitron font-extrabold text-white">{track.prize}</div>
            </div>
          </div>
        </div>

        {/* Problem Statements / Challenges */}
        <div className="mb-6">
          <h4 className="text-xs font-orbitron font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Featured Challenge Themes
          </h4>
          <div className="space-y-2.5">
            {track.challenges.map((c, i) => (
              <div 
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 text-xs sm:text-sm font-sans"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Toolkits / Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-orbitron font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Code className="w-4 h-4 text-purple-400" />
            Suggested Tech Stacks & Toolkits
          </h4>
          <div className="flex flex-wrap gap-2">
            {track.techStack.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-lg bg-slate-800/80 text-cyan-300 border border-cyan-500/20 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              soundFX.playClick();
              onRegisterForTrack(track);
            }}
            className="w-full sm:flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all cursor-pointer active:scale-95"
          >
            <span>Register in {track.shortTitle}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="w-full sm:w-auto py-3 px-6 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
