import React from 'react';
import { Heart, Stethoscope, Beer, ArrowUp } from 'lucide-react';
import { BATCH_INFO } from '../data/stalwarts';
import { sounds } from '../utils/sound';

export default function Footer({ isHostelMode }) {
  const scrollToTop = () => {
    sounds.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Batch Info */}
          <div className="text-center md:text-left space-y-2 max-w-lg">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-black text-xl text-white">
                SERENE STALWARTS
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                CLASS OF 2008
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {BATCH_INFO.legacy}
            </p>
            <p className="text-xs italic text-amber-400 font-fun text-sm">
              "{BATCH_INFO.motto}"
            </p>
          </div>

          {/* Quick Doctor Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-md">
            {["Potti", "Seshu", "Aru", "Satya", "Gajji", "Sandy", "Amar", "Murali", "Timmu", "Chandanna"].map((nick, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-900 border border-white/5 text-slate-300 font-fun"
              >
                #{nick}
              </span>
            ))}
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-slate-900 border border-white/10 hover:border-teal-400 text-slate-300 hover:text-white transition-all shadow-md flex items-center gap-2 text-xs font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-teal-400" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            Dedicated to the 9 Stalwarts of RIMS Srikakulam 2008. Built with pride & camaraderie.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Powered by</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>& 16+ Years of Friendship</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
