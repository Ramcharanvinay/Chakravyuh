import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/hackathonData';
import { soundFX } from '../utils/audio';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    soundFX.playClick();
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[#19e3d4] text-xs font-mono uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-inter font-black text-white tracking-tight mb-4">
            FREQUENTLY <span className="text-[#35a8f0]">ASKED QUESTIONS</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Got questions before jumping into the arena? We've got you covered.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-[#1a2342] transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  onMouseEnter={() => soundFX.playHover()}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-inter font-bold text-white tracking-wide">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-800 text-[#19e3d4] transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-cyan-500/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
