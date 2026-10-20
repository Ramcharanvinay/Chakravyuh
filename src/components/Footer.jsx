import React from 'react';
import { ArrowUp, Globe, MessageSquare, Share2, Code2 } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate('home');
  };

  const socials = [
    { icon: MessageSquare, href: '#discord', label: 'Discord Community' },
    { icon: Code2, href: '#github', label: 'GitHub Repository' },
    { icon: Share2, href: '#twitter', label: 'X / Twitter' },
    { icon: Globe, href: '#web', label: 'Global Portal' },
  ];

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 bg-[#02050f] py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                <span className="font-orbitron font-black text-cyan-300 text-sm">Ω</span>
              </div>
              <span className="font-orbitron font-black text-xl text-white tracking-wider">
                CHAKRAVYUH HACKATHON
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-6 font-sans leading-relaxed">
              India's premier 36-hour competitive engineering arena. 5 multi-tier technological tracks, ₹7,00,000 prize pool, and limitless innovation possibilities.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    title={social.label}
                    onClick={() => soundFX.playClick()}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 text-slate-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {['Home', 'About', 'Themes', 'Timeline', 'Prizes', 'Rules', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      onNavigate(link.toLowerCase());
                    }}
                    className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                  >
                    → {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-orbitron font-bold text-white uppercase tracking-wider mb-4">
              Arena Headquarters
            </h4>
            <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">
              For sponsor queries, partnerships, and campus ambassador applications:
            </p>
            <div className="text-xs font-mono text-cyan-400 mb-6">
              arena@chakravyuh-hackathon.org
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © 2026 Chakravyuh Hackathon. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            Engineered for high-impact innovation
          </div>
        </div>

      </div>
    </footer>
  );
}
