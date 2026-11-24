import React from 'react';
import { Award, ShieldCheck, HeartPulse, GraduationCap, Flame, Sparkles, ArrowDown, MessageSquare, Camera } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function Hero({ isHostelMode }) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-b border-white/5">
      {/* Background Animated Gradient Blobs */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px] opacity-25 pointer-events-none transition-all duration-700 ${
        isHostelMode ? 'bg-rose-500 scale-125' : 'bg-teal-500'
      }`} />
      <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 pointer-events-none transition-all duration-700 ${
        isHostelMode ? 'bg-amber-500' : 'bg-cyan-500'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Batch Heritage Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-black tracking-wide transition-all duration-500 shadow-sm ${
            isHostelMode
              ? 'bg-rose-950/70 border-rose-500/50 text-rose-300'
              : 'bg-teal-950/70 border-teal-500/50 text-teal-300'
          }">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>RIMS SRIKAKULAM • 2008 INAUGURAL MBBS BATCH</span>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            <span className="text-amber-400">THE PIONEERS</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]">
            {isHostelMode ? (
              <>
                The Unfiltered <br />
                <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-purple-400 bg-clip-text text-transparent">
                  Hostel Stalwarts of 2008
                </span>
              </>
            ) : (
              <>
                16+ Years of Brotherhood & <br />
                <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Clinical Mastery
                </span>
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isHostelMode ? (
              <span>
                Before heading Apollo endocrine suites, ICU critical care units, railway hospitals, and surgical empires, we were 9 backbenchers surviving anatomy dissections and eating mess food in Srikakulam.
              </span>
            ) : (
              <span>
                From the founding dissection halls of RIMS Srikakulam in 2008 to heading multi-speciality hospitals, diagnostic centers, and state critical care units across India today.
              </span>
            )}
          </p>

          {/* Action Hub */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <a
              href="#stalwarts"
              onClick={() => sounds.playPop()}
              className={`px-7 py-3.5 rounded-2xl font-black text-sm sm:text-base text-slate-950 shadow-xl transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 ${
                isHostelMode
                  ? 'bg-gradient-to-r from-amber-400 to-rose-500 shadow-rose-500/30 hover:brightness-110'
                  : 'bg-gradient-to-r from-teal-400 to-cyan-400 shadow-teal-500/30 hover:brightness-110'
              }`}
            >
              <HeartPulse className="w-5 h-5 text-slate-950" />
              <span>Meet The 9 Stalwarts</span>
            </a>
            <a
              href="#dialogues"
              onClick={() => sounds.playPop()}
              className="px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base bg-slate-900/90 border border-white/10 hover:border-rose-400/50 text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-rose-400" />
              <span>Hostel Dialogue Board</span>
            </a>
            <a
              href="#vault"
              onClick={() => sounds.playPop()}
              className="px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base bg-slate-900/90 border border-white/10 hover:border-amber-400/50 text-slate-200 hover:text-white transition-all flex items-center gap-2"
            >
              <Camera className="w-4 h-4 text-amber-400" />
              <span>Polaroid Wall</span>
            </a>
          </div>

          {/* Heritage Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            <div className="p-4 rounded-3xl bg-slate-900/80 border border-white/5 backdrop-blur-sm text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-black text-white font-display">2008</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-bold">Inaugural Foundation</div>
            </div>
            <div className="p-4 rounded-3xl bg-slate-900/80 border border-white/5 backdrop-blur-sm text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-black text-teal-400 font-display">9</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-bold">Stalwarts Brothers</div>
            </div>
            <div className="p-4 rounded-3xl bg-slate-900/80 border border-white/5 backdrop-blur-sm text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-display">16+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-bold">Years of Brotherhood</div>
            </div>
            <div className="p-4 rounded-3xl bg-slate-900/80 border border-white/5 backdrop-blur-sm text-center shadow-lg">
              <div className="text-3xl sm:text-4xl font-black text-rose-400 font-display">10,000+</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-bold">Lives Healed & Saved</div>
            </div>
          </div>

        </div>

        {/* Big Reunion Showcase Card */}
        <div className="mt-14 relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-teal-500/10 group">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden bg-slate-900">
            <img 
              src="./photos/reunions/reunion_dinner_full_gang.jpg" 
              alt="Serene Stalwarts Reunion Dinner" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                  The Complete 9 Stalwarts Brotherhood
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white font-display mt-2">
                  All 9 Stalwarts at the High Table
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Reunited 16 years after entering RIMS Srikakulam — Surgeons, Intensivists, Radiologists, Physicians & Orthopedicians together.
                </p>
              </div>
              <a 
                href="#vault"
                onClick={() => sounds.playPop()}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 bg-slate-950/90 px-4 py-2.5 rounded-xl border border-white/10 hover:border-amber-400/50 transition-colors w-fit shadow-lg"
              >
                <span>View All Memories</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
