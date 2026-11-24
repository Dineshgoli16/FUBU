import React, { useState } from 'react';
import { X, Award, Building, MapPin, GraduationCap, Zap, Heart, Sparkles, Quote, Stethoscope, Beer } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function DoctorModal({ doctor, isHostelMode, onClose }) {
  const [activeTab, setActiveTab] = useState(isHostelMode ? 'hostel' : 'clinical');

  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/10 shadow-2xl shadow-teal-500/10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playPop();
            onClose();
          }}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 border border-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner with Dedicated Executive Portrait Box */}
        <div className="relative min-h-[260px] sm:min-h-[280px] w-full overflow-hidden bg-slate-950 rounded-t-3xl p-6 sm:p-8 flex items-end">
          {/* Atmospheric Blurred Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img 
              src={activeTab === 'hostel' ? doctor.funAvatar : doctor.avatar} 
              alt=""
              className="w-full h-full object-cover blur-2xl opacity-30 scale-110"
              style={{ objectPosition: (activeTab === 'clinical' && doctor.avatarPosition) || 'center 25%' }}
              onError={(e) => {
                e.target.src = "./photos/reunions/reunion_dinner_full_gang.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-950/60" />
          </div>

          {/* Foreground Dossier Profile Box & Identity */}
          <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
            {/* Dedicated Doctor Portrait Frame with custom objectPosition */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 bg-slate-800 ring-4 ring-black/40">
              <img 
                src={activeTab === 'hostel' ? doctor.funAvatar : doctor.avatar} 
                alt={doctor.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: (activeTab === 'clinical' && doctor.avatarPosition) || 'center 22%' }}
                onError={(e) => {
                  e.target.src = doctor.funAvatar || "./photos/reunions/reunion_dinner_full_gang.jpg";
                }}
              />
            </div>

            {/* Header Info Overlay */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 font-fun text-base">
                  Nickname: "{doctor.nickname}"
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  {doctor.qualifications}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                  {activeTab === 'hostel' ? doctor.hostelBadge : doctor.clinicalBadge}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
                {doctor.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-1 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 text-teal-400">
                  <Building className="w-4 h-4 shrink-0" />
                  <span>{doctor.hospital}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-rose-400">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{doctor.location}</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-slate-950/40 px-6 pt-4 gap-4">
          <button
            onClick={() => {
              setActiveTab('clinical');
              sounds.playPop();
            }}
            className={`pb-3 font-bold text-sm sm:text-base flex items-center gap-2 transition-colors border-b-2 ${
              activeTab === 'clinical' 
                ? 'border-teal-400 text-teal-300' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Clinical Portfolio (White Coat)</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('hostel');
              sounds.playPop();
            }}
            className={`pb-3 font-bold text-sm sm:text-base flex items-center gap-2 transition-colors border-b-2 ${
              activeTab === 'hostel' 
                ? 'border-rose-400 text-rose-300' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Beer className="w-4 h-4" />
            <span>Hostel Memories & Superpowers</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Active Tab Content */}
          {activeTab === 'clinical' ? (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
                  Clinical Overview & Practice
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                  {doctor.clinicalSummary}
                </p>
              </div>

              {/* Clinical Stat Meters */}
              <div>
                <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3">
                  Clinical Proficiency & Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {doctor.statsClinical.map((stat, idx) => (
                    <div key={idx} className="bg-slate-950/40 p-3.5 rounded-xl border border-white/5 space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300">{stat.label}</span>
                        <span className="text-teal-400 font-bold">{stat.value}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-teal-400 to-cyan-500 h-full rounded-full transition-all duration-700"
                          style={{ width: `${stat.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {doctor.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl text-xs font-semibold bg-teal-500/10 border border-teal-500/20 text-teal-300">
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Superpower & Hostel Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 to-rose-950/40 border border-rose-500/20 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-rose-500/20 text-rose-300 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                    Hostel Superpower
                  </h4>
                  <p className="text-base font-bold text-white mt-0.5">
                    {doctor.superpower}
                  </p>
                </div>
              </div>

              {/* Hostel Summary */}
              <div>
                <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                  RIMS Srikakulam 2008 Memory File
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                  {doctor.hostelSummary}
                </p>
              </div>

              {/* Hostel Stats */}
              <div>
                <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-3">
                  Unfiltered Campus Ratings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {doctor.statsHostel.map((stat, idx) => (
                    <div key={idx} className="bg-slate-950/40 p-3.5 rounded-xl border border-white/5 space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300">{stat.label}</span>
                        <span className="text-amber-400 font-bold">{stat.value}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 h-full rounded-full transition-all duration-700"
                          style={{ width: `${stat.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Doctor Quote */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-3">
            <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm italic text-slate-300">
              "{doctor.quote}"
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
