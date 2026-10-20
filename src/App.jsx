import React, { useState, useEffect } from 'react';
import WaveBackground from './components/WaveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ThemesSection from './components/ThemesSection';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import RulesSection from './components/RulesSection';
import FAQSection from './components/FAQSection';
import RegisterSection from './components/RegisterSection';
import Footer from './components/Footer';
import TrackDetailModal from './components/TrackDetailModal';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerTrackId, setRegisterTrackId] = useState('cybersecurity');

  // Smooth navigation handler
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track selection from the wheel or theme cards
  const handleSelectTrack = (track) => {
    setSelectedTrack(track);
  };

  // Direct registration trigger for a specific track
  const handleRegisterForTrack = (track) => {
    setRegisterTrackId(track.id);
    setSelectedTrack(null);
    setIsRegisterOpen(true);
  };

  // General registration modal opener
  const handleOpenGeneralRegister = (trackId) => {
    setRegisterTrackId(trackId || 'cybersecurity');
    setIsRegisterOpen(true);
  };

  // Intersection observer to automatically update active nav while scrolling
  useEffect(() => {
    const sectionIds = ['home', 'about', 'themes', 'timeline', 'prizes', 'rules', 'faq', 'register'];
    const handleScrollObserver = () => {
      const scrollY = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver);
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050a1a] text-slate-100 overflow-x-hidden selection:bg-[#19e3d4] selection:text-slate-950">
      
      {/* Official Background + High-DPI Real-Time Wave Ribbons */}
      <WaveBackground />

      {/* Main Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        onOpenRegister={() => handleOpenGeneralRegister('cybersecurity')}
      />

      {/* Main Page Flow organized in clean order */}
      <main className="relative z-10">
        <Hero 
          onSelectTrack={handleSelectTrack}
          activeTrackId={selectedTrack?.id}
          onOpenRegister={() => handleOpenGeneralRegister('cybersecurity')}
          onNavigate={handleNavigate}
        />

        <AboutSection 
          onNavigate={handleNavigate}
          onOpenRegister={() => handleOpenGeneralRegister('cybersecurity')}
        />

        <ThemesSection 
          onSelectTrack={handleSelectTrack}
          onRegisterForTrack={handleRegisterForTrack}
        />

        <TimelineSection 
          onOpenRegister={() => handleOpenGeneralRegister('cybersecurity')}
        />

        <PrizesSection 
          onOpenRegister={() => handleOpenGeneralRegister('cybersecurity')}
        />

        <RulesSection 
          onOpenRegister={() => handleOpenGeneralRegister('cybersecurity')}
        />

        <FAQSection />

        <RegisterSection 
          onOpenFullModal={(trackId) => handleOpenGeneralRegister(trackId)}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Track Detail Inspection Modal */}
      <TrackDetailModal 
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        onRegisterForTrack={handleRegisterForTrack}
      />

      {/* Interactive Full Registration & Hacker Badge Modal */}
      <RegistrationModal 
        isOpen={isRegisterOpen}
        preselectedTrackId={registerTrackId}
        onClose={() => setIsRegisterOpen(false)}
      />

    </div>
  );
}
