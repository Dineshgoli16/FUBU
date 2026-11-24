import React, { useState } from 'react';
import { STALWARTS } from '../data/stalwarts';
import { Sparkles, RotateCw, MapPin, Building, Award, MessageSquare, ChevronRight, Stethoscope, Beer, Grid, Layout } from 'lucide-react';
import DoctorCard from './DoctorCard';
import { sounds } from '../utils/sound';

export default function SpotlightShowcase({ isHostelMode, onSelectDoctor }) {
  const [selectedId, setSelectedId] = useState(STALWARTS[0].id);
  const [isSpotlightFlipped, setIsSpotlightFlipped] = useState(false);
  const [viewMode, setViewMode] = useState('spotlight'); // 'spotlight' or 'grid'

  const activeDoc = STALWARTS.find(d => d.id === selectedId) || STALWARTS[0];

  const handleSelect = (id) => {
    setSelectedId(id);
    setIsSpotlightFlipped(false);
    sounds.playPop();
  };

  const showHostel = isHostelMode ? !isSpotlightFlipped : isSpotlightFlipped;

  return (
    <section id="stalwarts" className="py-20 border-b border-white/5 relative overflow-hidden">
      
      {/* Background Ambient Glow matching active doctor */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background: activeDoc.theme.color === 'emerald' ? '#10b981' :
                      activeDoc.theme.color === 'amber' ? '#f59e0b' :
                      activeDoc.theme.color === 'rose' ? '#f43f5e' :
                      activeDoc.theme.color === 'orange' ? '#f97316' :
                      activeDoc.theme.color === 'cyan' ? '#06b6d4' :
                      activeDoc.theme.color === 'lime' ? '#84cc16' :
                      activeDoc.theme.color === 'purple' ? '#a855f7' :
                      activeDoc.theme.color === 'green' ? '#22c55e' : '#eab308'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950/60 border border-teal-500/30 text-teal-300 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Character Stage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
              The 9 Stalwarts Showcase
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Select any brother to reveal his clinical domain, custom theme aura, and authentic 2008 hostel lore.
            </p>
          </div>

          {/* View Mode Toggle: Spotlight vs Grid */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-2xl border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => { setViewMode('spotlight'); sounds.playPop(); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'spotlight' 
                  ? 'bg-teal-500 text-slate-950 shadow-md font-extrabold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Spotlight Stage</span>
            </button>
            <button
              onClick={() => { setViewMode('grid'); sounds.playPop(); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid' 
                  ? 'bg-teal-500 text-slate-950 shadow-md font-extrabold' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid View (All 9)</span>
            </button>
          </div>
        </div>

        {/* ================= SPOTLIGHT STAGE MODE ================= */}
        {viewMode === 'spotlight' ? (
          <div className="space-y-10">
            
            {/* Top Avatar Selector Ribbon */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 no-scrollbar justify-start lg:justify-center">
              {STALWARTS.map((doc) => {
                const isSelected = doc.id === activeDoc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => handleSelect(doc.id)}
                    className={`flex flex-col items-center gap-2 group transition-all duration-300 shrink-0 p-2 rounded-2xl border ${
                      isSelected
                        ? `bg-slate-900 border-white/40 shadow-xl scale-110 ${doc.theme.ring} ring-2 ring-offset-2 ring-offset-slate-950`
                        : 'bg-slate-950/60 border-white/5 opacity-70 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-slate-800">
                      <img 
                        src={doc.avatar} 
                        alt={doc.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                        onError={(e) => { e.target.src = doc.funAvatar; }}
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                      )}
                    </div>
                    <span className={`text-[11px] font-bold tracking-tight font-fun transition-colors ${
                      isSelected ? 'text-amber-400 scale-105' : 'text-slate-400'
                    }`}>
                      "{doc.nickname}"
                    </span>
                  </button>
                );
              })}
            </div>

            {/* The Main Stage Feature Card */}
            <div className="relative rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Animated Top Gradient Accent Bar */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${activeDoc.theme.gradient}`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                
                {/* Left Column: Doctor Visual & Quick Actions (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                  
                  <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden bg-slate-800 border-2 border-white/10 shadow-2xl group">
                    <img 
                      src={showHostel ? activeDoc.funAvatar : activeDoc.avatar} 
                      alt={activeDoc.name}
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.src = activeDoc.funAvatar; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-xl text-xs font-bold border backdrop-blur-md ${
                        showHostel ? 'bg-rose-950/80 border-rose-400/50 text-rose-200' : 'bg-teal-950/80 border-teal-400/50 text-teal-200'
                      }`}>
                        {showHostel ? activeDoc.hostelBadge : activeDoc.clinicalBadge}
                      </span>

                      {/* Flip View Button */}
                      <button
                        onClick={() => {
                          setIsSpotlightFlipped(!isSpotlightFlipped);
                          sounds.playFlip();
                        }}
                        className="px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-xs font-bold text-white transition-all flex items-center gap-1.5 shadow-lg"
                        title="Flip mode for this doctor"
                      >
                        <RotateCw className="w-3.5 h-3.5 text-amber-400" />
                        <span>{showHostel ? "White Coat" : "Hostel Banter"}</span>
                      </button>
                    </div>

                    {/* Bottom Floating Dialogue preview on photo */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <div className="bg-slate-950/90 border border-white/10 p-3 rounded-2xl backdrop-blur-md">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 block mb-0.5">
                          🗣️ Signature Dialogue:
                        </span>
                        <p className="text-xs italic text-slate-200 line-clamp-2">
                          "{activeDoc.dialogue}"
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column: Full Profile & Metrics (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Name, Nickname & Badges */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-fun text-xl sm:text-2xl font-bold text-amber-400 tracking-wide">
                        "{activeDoc.nickname}"
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                        {activeDoc.qualifications}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {activeDoc.name}
                    </h3>

                    <p className={`text-sm font-extrabold uppercase tracking-wider mt-1.5 ${activeDoc.theme.primaryText}`}>
                      {showHostel ? activeDoc.roleHostel : activeDoc.roleClinical}
                    </p>
                  </div>

                  {/* Workplace & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-3.5 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-teal-400" />
                      <span>{activeDoc.hospital}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-rose-400" />
                      <span>{activeDoc.location}</span>
                    </div>
                  </div>

                  {/* Story / Description */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {showHostel ? "🔥 The 2008 Hostel Story" : "🩺 Clinical Expertise"}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                      {showHostel ? activeDoc.hostelSummary : activeDoc.clinicalSummary}
                    </p>
                  </div>

                  {/* Dynamic RPG Stat Bars */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      {showHostel ? "Campus Stat Ratings" : "Clinical Mastery Metrics"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(showHostel ? activeDoc.statsHostel : activeDoc.statsClinical).map((stat, idx) => (
                        <div key={idx} className="bg-slate-950/50 p-3 rounded-xl border border-white/5 space-y-1">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-slate-300">{stat.label}</span>
                            <span className={activeDoc.theme.primaryText}>{stat.value}%</span>
                          </div>
                          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-700 bg-gradient-to-r ${activeDoc.theme.gradient}`}
                              style={{ width: `${stat.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Dossier Button */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => {
                        sounds.playPop();
                        onSelectDoctor(activeDoc);
                      }}
                      className={`px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r ${activeDoc.theme.gradient} hover:brightness-110 shadow-lg transition-all flex items-center gap-2`}
                    >
                      <span>Open Full Dossier</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    <span className="text-xs text-slate-400 italic">
                      "{activeDoc.quote.slice(0, 50)}..."
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        ) : (
          /* ================= ALL 9 GRID VIEW MODE ================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STALWARTS.map((doc) => (
              <DoctorCard 
                key={doc.id}
                doctor={doc}
                isHostelMode={isHostelMode}
                onSelectDoctor={(d) => {
                  sounds.playPop();
                  onSelectDoctor(d);
                }}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
