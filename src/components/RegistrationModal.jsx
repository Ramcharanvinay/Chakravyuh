import React, { useState } from 'react';
import { X, Sparkles, Plus, Trash2, Check, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRACKS_DATA } from '../data/hackathonData';
import { soundFX } from '../utils/audio';

export default function RegistrationModal({ isOpen, onClose, preselectedTrackId }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    college: '',
    trackId: preselectedTrackId || 'cybersecurity',
    pitch: '',
    members: ['']
  });

  if (!isOpen) return null;

  const handleAddMember = () => {
    if (formData.members.length < 3) {
      soundFX.playClick();
      setFormData(prev => ({ ...prev, members: [...prev.members, ''] }));
    }
  };

  const handleRemoveMember = (index) => {
    soundFX.playClick();
    setFormData(prev => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index)
    }));
  };

  const handleMemberChange = (index, value) => {
    const updated = [...formData.members];
    updated[index] = value;
    setFormData(prev => ({ ...prev, members: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFX.playSuccess();
    setSubmitted(true);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 250);
    } catch {
      // Confetti fallback
    }
  };

  const selectedTrack = TRACKS_DATA.find(t => t.id === formData.trackId) || TRACKS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl my-8 rounded-3xl bg-[#080d1f] border border-cyan-500/40 shadow-[0_0_60px_rgba(0,210,255,0.3)] p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Screen & Digital Hacker Pass */
          <div className="text-center py-6">
            <div className="inline-flex p-4 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 mb-4 animate-bounce">
              <ShieldCheck className="w-12 h-12" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-orbitron font-black text-white mb-2">
              YOU'RE IN THE ARENA!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 font-sans">
              Welcome to Chakravyuh Hackathon 2026. A confirmation packet has been dispatched to <span className="text-cyan-400 font-mono">{formData.leadEmail || 'your email'}</span>.
            </p>

            {/* Futuristic Digital Hacker Pass */}
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#040817] border-2 border-cyan-400/50 shadow-[0_0_35px_rgba(0,240,255,0.25)] text-left relative overflow-hidden mb-6">
              <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-slate-950 font-mono font-black text-[10px] tracking-wider rounded-bl-lg">
                OFFICIAL BADGE
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-orbitron font-bold text-cyan-300 text-lg">
                  Ω
                </div>
                <div>
                  <div className="font-orbitron font-extrabold text-white text-base">
                    {formData.teamName || 'CYBER_LEGION'}
                  </div>
                  <div className="text-xs text-cyan-400 font-mono">
                    ID: CHK-2026-{Math.floor(1000 + Math.random() * 9000)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs border-t border-slate-800 pt-3">
                <div>
                  <span className="text-slate-500 font-mono block">TEAM LEAD</span>
                  <span className="text-slate-200 font-semibold">{formData.leadName || 'Alex Vance'}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block">TRACK</span>
                  <span className="text-cyan-300 font-semibold">{selectedTrack.shortTitle}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block">ORGANIZATION</span>
                  <span className="text-slate-200 font-semibold truncate block">{formData.college || 'Tech Institute'}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block">TEAM SIZE</span>
                  <span className="text-slate-200 font-semibold">{1 + formData.members.filter(m => m.trim().length > 0).length} Members</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onClose();
                  setSubmitted(false);
                }}
                className="py-3 px-8 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-orbitron font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] cursor-pointer"
              >
                Done & Return to Arena
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                Free Registration • Total Prize ₹7,00,000
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-orbitron font-black text-white mb-2">
              JOIN THE CHAKRAVYUH
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 font-sans">
              Step into the arena. Form your team of 1–4 hackers and compete for innovation glory.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Team Name */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Team Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Quantum Pioneers"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition-colors"
                />
              </div>

              {/* Leader Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Team Leader Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.leadName}
                    onChange={(e) => setFormData({ ...formData, leadName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Leader Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.leadEmail}
                    onChange={(e) => setFormData({ ...formData, leadEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.leadPhone}
                    onChange={(e) => setFormData({ ...formData, leadPhone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    College / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="IIT, NIT, or Tech Company"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Track Selection */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Select Innovation Track *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TRACKS_DATA.map((t) => {
                    const isSelected = formData.trackId === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => {
                          soundFX.playClick();
                          setFormData({ ...formData, trackId: t.id });
                        }}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-cyan-400">{t.number}</span>
                          <span className="text-xs font-medium">{t.shortTitle}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Additional Team Members */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    Additional Team Members (Up to 3 more)
                  </label>
                  {formData.members.length < 3 && (
                    <button
                      type="button"
                      onClick={handleAddMember}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Member
                    </button>
                  )}
                </div>
                <div className="space-y-2">
                  {formData.members.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder={`Member ${idx + 2} Full Name & Email`}
                        value={member}
                        onChange={(e) => handleMemberChange(idx, e.target.value)}
                        className="flex-1 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-700 focus:border-cyan-400 text-white text-xs outline-none"
                      />
                      {formData.members.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(idx)}
                          className="p-2 rounded-lg bg-red-950/40 border border-red-500/30 text-red-400 hover:bg-red-900/50 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pitch Brief */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Project Concept / One-Liner Pitch
                </label>
                <textarea
                  rows="2"
                  placeholder="Briefly describe what your team plans to build..."
                  value={formData.pitch}
                  onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-cyan-400 text-white text-xs outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-orbitron font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all cursor-pointer active:scale-98"
                >
                  <span>CONFIRM & GET HACKER PASS</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
