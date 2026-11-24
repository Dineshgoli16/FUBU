import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MessageSquare, Sparkles, Volume2, Heart, Laugh } from 'lucide-react';
import { HOSTEL_DIALOGUES } from '../data/stalwarts';
import { sounds } from '../utils/sound';

export default function DialogueWall() {
  const [activeBubble, setActiveBubble] = useState(null);

  const handleBubbleClick = (idx) => {
    setActiveBubble(idx);
    sounds.playPop();
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="dialogues" className="py-20 border-b border-white/5 relative overflow-hidden bg-slate-950/60">
      
      {/* Decorative comic dots */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-950/60 border border-rose-500/40 text-rose-300 mb-3">
            <Laugh className="w-3.5 h-3.5" />
            <span>Hostel Audio & Dialogue Board</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            The Stalwarts Soundboard
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Click any speech bubble to hear the authentic hostel memories, Telugu dialogues, and running gags of RIMS 2008.
          </p>
        </div>

        {/* Dialogue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOSTEL_DIALOGUES.map((item, idx) => {
            const isSelected = activeBubble === idx;

            return (
              <div
                key={idx}
                onClick={() => handleBubbleClick(idx)}
                className={`group relative p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-slate-900 to-purple-950/60 border-rose-500 shadow-xl shadow-rose-950/30 -translate-y-2 scale-102'
                    : 'bg-slate-900/80 border-white/10 hover:border-amber-400/50 hover:bg-slate-900 hover:-translate-y-1'
                }`}
              >
                {/* Comic Speech Tail / Notch */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {item.doctor}
                      </span>
                      <span className="text-xs font-fun font-bold text-amber-400">
                        "{item.nickname}"
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-950/80 border border-white/10 text-slate-300">
                    {item.tag}
                  </span>
                </div>

                {/* Telugu Dialogue */}
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-white/5 relative">
                  <p className="text-sm sm:text-base font-bold text-amber-200 leading-snug">
                    "{item.telugu}"
                  </p>
                </div>

                {/* English Meaning / Backstory */}
                <div className="mt-3.5 pt-3 border-t border-white/5 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    {item.english}
                  </p>
                </div>

                {/* Sound effect hint */}
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span>Click to play sound</span>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
