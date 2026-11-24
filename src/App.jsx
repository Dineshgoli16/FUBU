import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpotlightShowcase from './components/SpotlightShowcase';
import DialogueWall from './components/DialogueWall';
import OdysseyMap from './components/OdysseyMap';
import PhotoVault from './components/PhotoVault';
import StalwartsWheel from './components/StalwartsWheel';
import BatchQuiz from './components/BatchQuiz';
import DoctorModal from './components/DoctorModal';
import Footer from './components/Footer';

export default function App() {
  const [isHostelMode, setIsHostelMode] = useState(false);
  const [bgmActive, setBgmActive] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      isHostelMode ? 'bg-[#090d18] text-slate-100' : 'bg-slate-950 text-slate-100'
    }`}>
      
      {/* Top Sticky Navigation with Equalizer & Mode Switch */}
      <Navbar 
        isHostelMode={isHostelMode} 
        setIsHostelMode={setIsHostelMode}
        bgmActive={bgmActive}
        setBgmActive={setBgmActive}
      />

      {/* Hero Section with Cinematic Presentation */}
      <Hero isHostelMode={isHostelMode} />

      {/* The 9 Stalwarts Character-Select Spotlight Showcase */}
      <SpotlightShowcase 
        isHostelMode={isHostelMode}
        onSelectDoctor={(doc) => setSelectedDoctor(doc)}
      />

      {/* Hostel Soundboard & Authentic Telugu Dialogue Wall */}
      <DialogueWall />

      {/* The Stalwarts Odyssey Interactive Map */}
      <OdysseyMap isHostelMode={isHostelMode} />

      {/* Polaroid Scrapbook Photo Vault with Washi Tape */}
      <PhotoVault isHostelMode={isHostelMode} />

      {/* Spin the Stalwarts Wheel Party Game */}
      <StalwartsWheel />

      {/* Batch Superlatives Party Quiz */}
      <BatchQuiz isHostelMode={isHostelMode} />

      {/* Memorial Tribute Footer */}
      <Footer isHostelMode={isHostelMode} />

      {/* Detailed Doctor Dossier Modal */}
      {selectedDoctor && (
        <DoctorModal 
          doctor={selectedDoctor}
          isHostelMode={isHostelMode}
          onClose={() => setSelectedDoctor(null)}
        />
      )}

    </div>
  );
}
