import React, { useState } from 'react';
import { RotateCw, Sparkles, MapPin, Building, GraduationCap, Award, ChevronRight, Zap, Heart } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function DoctorCard({ doctor, isHostelMode, onSelectDoctor }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [photoToggle, setPhotoToggle] = useState(false);

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
    sounds.playFlip();
  };

  const handlePhotoSwitch = (e) => {
    e.stopPropagation();
    setPhotoToggle(!photoToggle);
    sounds.playPop();
  };

  // Determine which side is front based on global mode and local card flip state
  // If global is Hostel, front side shows Hostel view unless flipped.
  const showHostelSide = isHostelMode ? !isFlipped : isFlipped;

  const currentAvatar = photoToggle ? doctor.funAvatar : doctor.avatar;

  return (
    <div 
      className="group relative perspective-1000 h-[560px] cursor-pointer"
      onClick={() => onSelectDoctor(doctor)}
    >
      <div 
        className={`w-full h-full transition-all duration-700 transform-style-3d relative rounded-3xl border ${
          showHostelSide 
            ? 'border-rose-500/30 bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-950 shadow-xl shadow-rose-950/20 group-hover:border-rose-500/60' 
            : 'border-teal-500/20 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 shadow-xl shadow-teal-950/20 group-hover:border-teal-500/50'
        } group-hover:-translate-y-1.5 transition-transform`}
      >
        
        {/* Photo Container */}
        <div className="relative h-64 w-full rounded-t-3xl overflow-hidden bg-slate-800">
          <img 
            src={currentAvatar} 
            alt={doctor.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: (!photoToggle && doctor.avatarPosition) || 'center 22%' }}
            onError={(e) => {
              // Graceful fallback to table photo if individual photo is loading
              e.target.src = doctor.funAvatar || "./photos/reunions/reunion_dinner_full_gang.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className={`px-2.5 py-1 rounded-xl text-[11px] font-bold tracking-wide border backdrop-blur-md transition-colors ${
              showHostelSide 
                ? 'bg-rose-900/80 border-rose-400/50 text-rose-200' 
                : 'bg-teal-900/80 border-teal-400/50 text-teal-200'
            }`}>
              {showHostelSide ? doctor.hostelBadge : doctor.clinicalBadge}
            </span>

            {/* Quick photo toggle button */}
            <button
              onClick={handlePhotoSwitch}
              className="px-2 py-1 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-[10px] font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1 shadow-md"
              title="Toggle Portrait / Reunion Photo"
            >
              <span>{photoToggle ? "📷 Portrait" : "🎉 Throwback"}</span>
            </button>
          </div>

          {/* Flip Card Switcher (Top Right on hover / click) */}
          <button
            onClick={handleFlip}
            className={`absolute bottom-3 right-3 p-2 rounded-xl border backdrop-blur-md transition-all shadow-lg ${
              showHostelSide
                ? 'bg-amber-500/90 border-amber-300 text-slate-950 hover:bg-amber-400'
                : 'bg-teal-500/90 border-teal-300 text-slate-950 hover:bg-teal-400'
            }`}
            title="Flip to alternate mode"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* Card Content Body */}
        <div className="p-5 flex flex-col justify-between h-[calc(100%-16rem)]">
          <div>
            
            {/* Header: Name & Nickname */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-teal-300 transition-colors">
                  {doctor.name}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-fun text-lg text-amber-400 tracking-wide font-bold">
                    "{doctor.nickname}"
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    • RIMS 2008
                  </span>
                </div>
              </div>
            </div>

            {/* Role / Specialty */}
            <p className={`text-xs font-bold uppercase tracking-wider mt-2 ${
              showHostelSide ? 'text-rose-400' : 'text-teal-400'
            }`}>
              {showHostelSide ? doctor.roleHostel : doctor.roleClinical}
            </p>

            {/* Workplace / Location */}
            <div className="space-y-1 mt-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 truncate">
                <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{doctor.hospital}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{doctor.location}</span>
              </div>
            </div>

            {/* Interactive Stat Bar */}
            <div className="mt-3.5 pt-3 border-t border-white/10 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>{showHostelSide ? "Hostel Stat Meter" : "Clinical Mastery"}</span>
                <span className="text-amber-400">
                  {showHostelSide ? doctor.statsHostel[0].label : doctor.statsClinical[0].label}
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${
                    showHostelSide 
                      ? 'bg-gradient-to-r from-amber-400 to-rose-500' 
                      : 'bg-gradient-to-r from-teal-400 to-cyan-500'
                  }`}
                  style={{ width: `${showHostelSide ? doctor.statsHostel[0].value : doctor.statsClinical[0].value}%` }}
                />
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 italic truncate max-w-[190px]">
              {showHostelSide ? doctor.hostelSummary.slice(0, 48) + "..." : doctor.clinicalSummary.slice(0, 48) + "..."}
            </span>
            <span className="text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Dossier</span>
              <ChevronRight className="w-4 h-4 text-teal-400" />
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
