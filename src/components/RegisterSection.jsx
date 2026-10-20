import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRACKS_DATA } from '../data/hackathonData';
import { soundFX } from '../utils/audio';

export default function RegisterSection({ onOpenFullModal }) {
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [track, setTrack] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!teamName.trim() || !email.trim() || !track) {
      setError('Please fill every field with a valid email.');
      return;
    }
    setError('');
    setSubmitted(true);
    soundFX.playSuccess();
    try {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.8 } });
    } catch {}
  };

  return (
    <section id="register" className="py-24 relative z-10 border-t border-cyan-500/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[#19e3d4] text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE ARENA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-inter font-black text-white tracking-tight mb-4">
          Ready to <span className="text-[#35a8f0]">Enter?</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mb-8">
          Lock in your squad's slot for Chakravyuh Hackathon 2026. Free registration.
        </p>

        {submitted ? (
          <div className="p-8 rounded-3xl glass-panel border border-[#19e3d4]/50 shadow-[0_0_35px_rgba(25,227,212,0.3)] text-center">
            <CheckCircle2 className="w-12 h-12 text-[#19e3d4] mx-auto mb-3" />
            <h3 className="text-xl font-inter font-bold text-white mb-2">
              Registration Received, {teamName}!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-5">
              We have dispatched your confirmation ticket to <span className="text-[#19e3d4] font-mono">{email}</span>.
            </p>
            <button
              onClick={() => onOpenFullModal(track)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950 font-inter font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(25,227,212,0.4)]"
            >
              Add Teammates & View Hacker Pass ↗
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass-panel border border-[#1a2342] text-left space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Team Name
              </label>
              <input
                type="text"
                placeholder="e.g. Cyber Prowlers"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0a1226] border border-[#1d2c52] focus:border-[#19e3d4] text-white text-sm outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Lead Email
              </label>
              <input
                type="email"
                placeholder="lead@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0a1226] border border-[#1d2c52] focus:border-[#19e3d4] text-white text-sm outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Select Innovation Track
              </label>
              <select
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0a1226] border border-[#1d2c52] focus:border-[#19e3d4] text-white text-sm outline-none transition-colors cursor-pointer"
              >
                <option value="">Choose a Track...</option>
                {TRACKS_DATA.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.number} - {t.title}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-xs text-red-400 font-mono">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#10e6ee] via-[#7b5cf0] to-[#b07cf5] hover:opacity-95 text-slate-950 font-inter font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,230,238,0.5)] transition-all cursor-pointer active:scale-98"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
