import React from 'react';
import { Trophy, Award, Gift, Check, Sparkles } from 'lucide-react';
import { PRIZES_DATA } from '../data/hackathonData';
import { soundFX } from '../utils/audio';

export default function PrizesSection({ onOpenRegister }) {
  return (
    <section id="prizes" className="py-24 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[#19e3d4] text-xs font-mono uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span>PRIZES & REWARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-inter font-black text-white tracking-tight mb-4">
            TOTAL POOL <span className="text-[#35a8f0]">₹ 7,00,000</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In addition to cash rewards, finalists receive institutional incubation offers, cloud credits, hardware kits, and investor intros.
          </p>
        </div>

        {/* Podium Layout matching Downloaded Site */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-16 max-w-4xl mx-auto">
          
          {/* 2nd Place: Runner-Up (₹2,00,000) */}
          <div 
            onMouseEnter={() => soundFX.playHover()}
            className="p-6 rounded-3xl glass-panel border border-cyan-400/40 text-center order-2 md:order-1 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 text-[#2fb8ff] flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6" />
            </div>
            <small className="text-xs font-mono uppercase text-[#2fb8ff] font-bold tracking-widest block mb-1">
              RUNNER-UP
            </small>
            <div className="text-3xl font-inter font-black text-white my-2">
              ₹ 2,00,000
            </div>
            <p className="text-xs text-slate-400 mb-4">Silver Trophy, Cloud credits worth $5,000 & Accelerator interview</p>
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenRegister();
              }}
              className="w-full py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Compete for this
            </button>
          </div>

          {/* 1st Place: Winner / Grand Champion (₹3,00,000) - Elevated Podium */}
          <div 
            onMouseEnter={() => soundFX.playHover()}
            className="p-8 rounded-3xl glass-panel border-2 border-yellow-400/60 shadow-[0_0_35px_rgba(242,182,50,0.25)] text-center order-1 md:order-2 md:-translate-y-4 transition-all duration-300 hover:-translate-y-6"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              ★ GRAND CHAMPION ★
            </div>
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center mb-3">
              <Trophy className="w-8 h-8" />
            </div>
            <small className="text-xs font-mono uppercase text-yellow-400 font-bold tracking-widest block mb-1">
              WINNER
            </small>
            <div className="text-4xl font-inter font-black text-white my-3 drop-shadow-[0_0_15px_rgba(242,182,50,0.5)]">
              ₹ 3,00,000
            </div>
            <p className="text-xs text-slate-300 mb-6 font-sans">
              Grand Champion Trophy, $10,000 cloud credits, direct seed funding pitch & fast-track interviews
            </p>
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenRegister();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-inter font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(242,182,50,0.5)]"
            >
              Aim for Grand Title ↗
            </button>
          </div>

          {/* 3rd Place: Second Runner-Up (₹1,00,000) */}
          <div 
            onMouseEnter={() => soundFX.playHover()}
            className="p-6 rounded-3xl glass-panel border border-purple-400/40 text-center order-3 md:order-3 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/20 text-[#ff3fa4] flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6" />
            </div>
            <small className="text-xs font-mono uppercase text-[#ff3fa4] font-bold tracking-widest block mb-1">
              SECOND RUNNER-UP
            </small>
            <div className="text-3xl font-inter font-black text-white my-2">
              ₹ 1,00,000
            </div>
            <p className="text-xs text-slate-400 mb-4">Bronze Trophy, exclusive tech swag kit, $2,500 cloud credits</p>
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenRegister();
              }}
              className="w-full py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-400 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Compete for this
            </button>
          </div>

        </div>

        {/* Remaining ₹1,00,000 for Track & Special Awards */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900/70 to-cyan-950/40 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-purple-500/20 text-[#ff3fa4] shrink-0">
              <Gift className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-inter font-bold text-white mb-1">
                ₹ 1,00,000 Category & Track Awards
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                ₹ 20,000 for each of the 5 Tracks • Best All-Women Team • Best Freshman Debut • Best UI/UX Experience
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenRegister();
            }}
            className="px-6 py-2.5 rounded-full bg-[#19e3d4] hover:bg-cyan-300 text-slate-950 font-inter font-bold text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer shadow-[0_0_20px_rgba(25,227,212,0.4)]"
          >
            Claim Your Spot ↗
          </button>
        </div>

      </div>
    </section>
  );
}
