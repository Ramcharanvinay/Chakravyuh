import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function Navbar({ activeSection, onNavigate, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Themes', id: 'themes' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Prizes', id: 'prizes' },
    { label: 'Rules', id: 'rules' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (id) => {
    soundFX.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2.5 bg-[#050a1a]/90 backdrop-blur-md border-b border-cyan-500/15' : 'py-5 bg-transparent'}`}>
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand with Official favicon.svg */}
        <button 
          onClick={() => handleNavClick('home')}
          onMouseEnter={() => soundFX.playHover()}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <img 
            src="/favicon.svg" 
            alt="Chakravyuh Logo" 
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(25,227,212,0.4)]" 
          />

          <div className="leading-tight">
            <div className="font-inter font-extrabold text-base sm:text-lg text-[#F7F8FC] tracking-wider">
              CHAKRAVYUH
            </div>
            <div className="font-inter font-bold text-[10px] sm:text-xs text-[#19e3d4] tracking-[0.15em] uppercase">
              HACKATHON
            </div>
          </div>
        </button>

        {/* Center Navigation Pill matching Downloaded Site & Figma */}
        <nav className="hidden lg:flex items-center bg-[#14161c]/90 border border-slate-700/60 backdrop-blur-xl rounded-[16px] px-7 py-2.5 shadow-[0_0_25px_rgba(0,0,0,0.7)] gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => soundFX.playHover()}
                className={`text-sm sm:text-base font-normal tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive 
                    ? 'text-[#19e3d4] font-semibold drop-shadow-[0_0_10px_rgba(25,227,212,0.6)]' 
                    : 'text-white hover:text-[#19e3d4]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Register Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Register Now Pill Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenRegister();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="px-6 py-2 rounded-full font-semibold text-xs sm:text-sm tracking-wide text-white border border-[#19e3d4] bg-gradient-to-r from-[rgba(25,227,212,0.2)] to-[rgba(139,107,255,0.55)] hover:shadow-[0_0_25px_rgba(25,227,212,0.6)] transition-all duration-300 flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-cyan-400 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0a1226]/95 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                activeSection === item.id 
                  ? 'bg-cyan-500/20 text-[#19e3d4] font-semibold border border-cyan-500/30' 
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              handleNavClick('home');
              onOpenRegister();
            }}
            className="mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-center flex items-center justify-center gap-1.5"
          >
            Register Now ↗
          </button>
        </div>
      )}
    </header>
  );
}
