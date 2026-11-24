import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Sparkles, Trophy, Flame, HelpCircle } from 'lucide-react';
import { STALWARTS, WHEEL_PROMPTS } from '../data/stalwarts';
import { sounds } from '../utils/sound';

export default function StalwartsWheel() {
  const [selectedPrompt, setSelectedPrompt] = useState(WHEEL_PROMPTS[0]);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const canvasRef = useRef(null);

  const colors = [
    '#10b981', '#f59e0b', '#f43f5e', '#f97316', 
    '#06b6d4', '#84cc16', '#a855f7', '#22c55e', '#eab308'
  ];

  const totalSlices = STALWARTS.length;
  const sliceAngle = (2 * Math.PI) / totalSlices;

  // Draw the wheel on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const center = size / 2;
    const radius = center - 12;

    ctx.clearRect(0, 0, size, size);

    // Draw slices
    STALWARTS.forEach((doc, idx) => {
      const startAngle = idx * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      // Slice background
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[idx % colors.length];
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#0f172a';
      ctx.stroke();

      // Text label (Doctor Nickname)
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 15px Outfit, sans-serif';
      ctx.fillText(`"${doc.nickname}"`, radius - 20, 5);
      ctx.restore();
    });

    // Center hub
    ctx.beginPath();
    ctx.arc(center, center, 28, 0, 2 * Math.PI);
    ctx.fillStyle = '#0f172a';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#f8fafc';
    ctx.stroke();

    // Center star
    ctx.beginPath();
    ctx.arc(center, center, 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#fbbf24';
    ctx.fill();
  }, []);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setWinner(null);
    sounds.playPop();

    // Random rotations + random slice landing
    const extraRotations = 5 + Math.floor(Math.random() * 4); // 5 to 8 full spins
    const randomSlice = Math.floor(Math.random() * totalSlices);
    
    // Calculate final angle to make the arrow point at top (3 * PI / 2)
    const targetSliceCenter = (randomSlice + 0.5) * (360 / totalSlices);
    const finalAngle = rotationAngle + (extraRotations * 360) + (360 - (targetSliceCenter % 360)) + 90;

    setRotationAngle(finalAngle);

    // Timer sound clicks while spinning
    let ticks = 0;
    const tickInterval = setInterval(() => {
      sounds.playPop();
      ticks++;
      if (ticks > 12) clearInterval(tickInterval);
    }, 250);

    setTimeout(() => {
      setSpinning(false);
      setWinner(STALWARTS[randomSlice]);
      sounds.playFanfare();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 3800);
  };

  return (
    <section id="wheel" className="py-20 border-b border-white/5 relative overflow-hidden bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-950/60 border border-amber-500/40 text-amber-300 mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Party Roulette</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            Spin the Stalwarts Wheel!
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Select a hostel dare or question, hit spin, and let fate decide which brother takes the fall!
          </p>
        </div>

        {/* Wheel Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Wheel Graphic (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div className="relative">
              {/* Top Pointer Arrow */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 filter drop-shadow-xl">
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[28px] border-t-amber-400 animate-bounce-subtle" />
              </div>

              {/* Canvas Wheel with CSS Rotation */}
              <div 
                className="w-72 h-72 sm:w-96 sm:h-96 rounded-full shadow-2xl shadow-amber-500/10 border-4 border-slate-800 transition-transform cubic-bezier(0.15, 0.9, 0.25, 1)"
                style={{
                  transform: `rotate(${rotationAngle}deg)`,
                  transitionDuration: spinning ? '3.8s' : '0s'
                }}
              >
                <canvas 
                  ref={canvasRef} 
                  width={384} 
                  height={384} 
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>

            {/* Spin Button */}
            <button
              onClick={spinWheel}
              disabled={spinning}
              className={`mt-8 px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base tracking-wide uppercase transition-all shadow-xl flex items-center gap-2 ${
                spinning 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 hover:brightness-110 shadow-rose-500/25 hover:scale-105'
              }`}
            >
              <RotateCcw className={`w-5 h-5 ${spinning ? 'animate-spin' : ''}`} />
              <span>{spinning ? "Spinning Fate..." : "SPIN THE WHEEL!"}</span>
            </button>

          </div>

          {/* Prompt Selector & Result Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Question Selector */}
            <div className="bg-slate-900/90 p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>Select Today's Question / Dare:</span>
              </label>

              <div className="space-y-2">
                {WHEEL_PROMPTS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedPrompt(p); sounds.playPop(); }}
                    className={`w-full p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                      selectedPrompt === p
                        ? 'bg-amber-500/20 border-amber-400/80 text-amber-200 font-bold'
                        : 'bg-slate-950/60 border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Winner Spotlight Card */}
            {winner && (
              <div className="bg-gradient-to-br from-purple-950/80 to-slate-900 p-6 rounded-3xl border-2 border-amber-400/80 shadow-2xl animate-fadeIn space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>THE CHOSEN BROTHER!</span>
                  </span>
                  <span className="text-xs text-amber-300 font-bold">100% Verdict</span>
                </div>

                <div className="flex items-center gap-4">
                  <img 
                    src={winner.avatar} 
                    alt={winner.name} 
                    className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-amber-400"
                    onError={(e) => { e.target.src = winner.funAvatar; }}
                  />
                  <div>
                    <h4 className="text-xl font-black font-display text-white">
                      {winner.name}
                    </h4>
                    <span className="font-fun text-lg text-amber-400 font-bold block">
                      "{winner.nickname}"
                    </span>
                    <span className="text-xs text-slate-300">
                      {winner.hospital}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-white/10 text-xs italic text-amber-200">
                  🎯 "{selectedPrompt}" ➔ <strong>{winner.name} ({winner.nickname})</strong> has been elected by the Stalwarts council!
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
