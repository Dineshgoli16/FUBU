import React, { useState } from 'react';
import { Stethoscope, Beer, Volume2, VolumeX, Menu, X, Award, Sparkles, MapPin, Camera, HelpCircle, MessageSquare, Flame } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Navbar({ isHostelMode, setIsHostelMode, bgmActive, setBgmActive }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleModeToggle = () => {
    const nextMode = !isHostelMode;
    setIsHostelMode(nextMode);
    sounds.playModeSwitch(nextMode);
  };

  const handleBgmToggle = () => {
    sounds.toggleBGM((active) => {
      setBgmActive(active);
    });
  };

  return (
    <header className="sticky top-0 z-50 transition-colors duration-500 backdrop-blur-xl border-b border-white/10 bg-slate-950/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Title */}
          <a href="#" className="flex items-center gap-3 group" onClick={() => sounds.playPop()}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
              isHostelMode 
                ? 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-rose-500/25 group-hover:scale-105' 
                : 'bg-gradient-to-tr from-teal-500 to-cyan-600 shadow-teal-500/25 group-hover:scale-105'
            }`}>
              {isHostelMode ? (
                <Beer className="w-6 h-6 text-white animate-bounce-subtle" />
              ) : (
                <Stethoscope className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black tracking-tight text-lg sm:text-xl text-white">
                  SERENE STALWARTS
                </span>
                <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full transition-colors ${
                  isHostelMode ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                }`}>
                  '08
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {isHostelMode ? "🍺 Backbencher Hostel Mode" : "🩺 Inaugural MBBS Batch • RIMS Srikakulam"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5">
            <a 
              href="#stalwarts" 
              onClick={() => sounds.playPop()}
              className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-teal-400" />
              The 10 Stalwarts
            </a>
            <a 
              href="#dialogues" 
              onClick={() => sounds.playPop()}
              className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
              Dialogue Wall
            </a>
            <a 
              href="#odyssey" 
              onClick={() => sounds.playPop()}
              className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Odyssey Map
            </a>
            <a 
              href="#vault" 
              onClick={() => sounds.playPop()}
              className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              Polaroid Scrapbook
            </a>
            <a 
              href="#wheel" 
              onClick={() => sounds.playPop()}
              className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              Spin Wheel
            </a>
            <a 
              href="#quiz" 
              onClick={() => sounds.playPop()}
              className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              Quiz
            </a>
          </nav>

          {/* Action Controls: Music Equalizer & Mode Switcher */}
          <div className="flex items-center gap-3">
            
            {/* Audio Toggle with Live Equalizer Bars */}
            <button
              onClick={handleBgmToggle}
              className={`px-3 py-2 rounded-2xl border transition-all duration-300 flex items-center gap-2 text-xs font-bold ${
                bgmActive 
                  ? 'bg-rose-500/20 border-rose-500/60 text-rose-300 shadow-lg shadow-rose-500/20'
                  : 'bg-slate-900 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
              title={bgmActive ? "Mute Lo-Fi Campus Beat" : "Play Lo-Fi Campus Beat"}
            >
              {bgmActive ? (
                <div className="flex items-end gap-0.5 h-4 w-4">
                  <span className="w-1 bg-rose-400 rounded-full animate-[pulse_0.4s_infinite_alternate] h-full" />
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.7s_infinite_alternate] h-2/3" />
                  <span className="w-1 bg-teal-400 rounded-full animate-[pulse_0.5s_infinite_alternate] h-4/5" />
                </div>
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">{bgmActive ? "Beats On" : "Music"}</span>
            </button>

            {/* The Master Flip Mode Switch */}
            <button
              onClick={handleModeToggle}
              className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all duration-500 shadow-md ${
                isHostelMode
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-rose-500/30 hover:shadow-rose-500/50 scale-105'
                  : 'bg-gradient-to-r from-teal-500 to-cyan-600 text-slate-950 shadow-teal-500/25 hover:shadow-teal-500/40'
              }`}
            >
              {isHostelMode ? (
                <>
                  <Beer className="w-4 h-4" />
                  <span>Hostel Mode</span>
                  <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
                </>
              ) : (
                <>
                  <Stethoscope className="w-4 h-4" />
                  <span>White Coat</span>
                  <span className="w-2 h-2 rounded-full bg-teal-800 animate-pulse" />
                </>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button 
              className="xl:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-white/10 space-y-2 animate-fadeIn bg-slate-950/95">
            <a 
              href="#stalwarts" 
              onClick={() => { sounds.playPop(); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 font-medium text-sm"
            >
              🩺 The 10 Stalwarts
            </a>
            <a 
              href="#dialogues" 
              onClick={() => { sounds.playPop(); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 font-medium text-sm"
            >
              🗣️ Hostel Dialogue Wall
            </a>
            <a 
              href="#odyssey" 
              onClick={() => { sounds.playPop(); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 font-medium text-sm"
            >
              🗺️ The Odyssey Map
            </a>
            <a 
              href="#vault" 
              onClick={() => { sounds.playPop(); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 font-medium text-sm"
            >
              📸 Polaroid Scrapbook
            </a>
            <a 
              href="#wheel" 
              onClick={() => { sounds.playPop(); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 font-medium text-sm"
            >
              🎡 Spin the Stalwarts Wheel
            </a>
            <a 
              href="#quiz" 
              onClick={() => { sounds.playPop(); setMobileMenuOpen(false); }}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 font-medium text-sm"
            >
              🎉 Batch Superlatives Quiz
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
