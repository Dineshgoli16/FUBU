import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Building, Users, Sparkles, ArrowRight } from 'lucide-react';
import { ODYSSEY_NODES } from '../data/stalwarts';
import { sounds } from '../utils/sound';

export default function OdysseyMap({ isHostelMode }) {
  const [selectedNode, setSelectedNode] = useState(ODYSSEY_NODES[0]);

  return (
    <section id="odyssey" className="py-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Geographic Legacy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            The Stalwarts Odyssey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            From the shores of Srikakulam in 2008 to specialized operating rooms across Andhra Pradesh and the Indian Railways in Madhya Pradesh.
          </p>
        </div>

        {/* Map Layout: Visual interactive diagram + Details card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Visual Map Board (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-950/70 border border-white/5 p-4 flex flex-col justify-between">
              
              {/* Map Title Tag */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-teal-400">
                  <Navigation className="w-4 h-4" />
                  <span>STALWARTS REGIONAL DISPATCH</span>
                </span>
                <span>ORIGIN: RIMS SRIKAKULAM 2008</span>
              </div>

              {/* Node Hotspots on Visual Grid */}
              <div className="relative w-full h-full my-4">
                
                {/* SVG Connecting Lines from Srikakulam (Node 0) to others */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {ODYSSEY_NODES.slice(1).map((node, idx) => (
                    <line 
                      key={idx}
                      x1={`${ODYSSEY_NODES[0].coords.x}%`} 
                      y1={`${ODYSSEY_NODES[0].coords.y}%`} 
                      x2={`${node.coords.x}%`} 
                      y2={`${node.coords.y}%`}
                      stroke="rgba(45, 212, 191, 0.25)" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                    />
                  ))}
                </svg>

                {/* Node Buttons */}
                {ODYSSEY_NODES.map((node, idx) => {
                  const isSelected = selectedNode.name === node.name;
                  const isOrigin = idx === 0;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        sounds.playPop();
                        setSelectedNode(node);
                      }}
                      style={{ left: `${node.coords.x}%`, top: `${node.coords.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-10 ${
                        isSelected ? 'scale-125 z-20' : 'hover:scale-110'
                      }`}
                    >
                      <div className="relative flex items-center justify-center">
                        {/* Ping radar on origin or selected */}
                        {(isOrigin || isSelected) && (
                          <span className={`absolute w-8 h-8 rounded-full animate-ping opacity-60 ${
                            isOrigin ? 'bg-amber-400' : 'bg-teal-400'
                          }`} />
                        )}
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg border-2 transition-colors ${
                          isOrigin 
                            ? 'bg-amber-500 border-amber-200 text-slate-950 font-black' 
                            : isSelected 
                              ? 'bg-teal-400 border-white text-slate-950' 
                              : 'bg-slate-900 border-teal-500/50 text-teal-300 hover:border-teal-400'
                        }`}>
                          <MapPin className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Small Label */}
                      <span className={`hidden sm:block absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                        isSelected 
                          ? 'bg-teal-900 border-teal-400 text-white' 
                          : 'bg-slate-950/80 border-white/10 text-slate-300'
                      }`}>
                        {node.name.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Footer status bar */}
              <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-white/5">
                <span>Click any hotspot to inspect outpost</span>
                <span className="text-amber-400 font-bold">5 Regional Hubs Active</span>
              </div>

            </div>
          </div>

          {/* Selected Node Details Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 border border-teal-500/20 shadow-xl relative">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Selected Outpost Dossier</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              {selectedNode.name}
            </h3>
            
            <p className="text-xs font-bold text-amber-400 uppercase tracking-wide mt-1">
              {selectedNode.role}
            </p>

            <p className="text-sm text-slate-300 mt-4 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-white/5">
              {selectedNode.description}
            </p>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-teal-400" />
                <span>Stationed Stalwarts:</span>
              </div>
              <p className="text-sm font-bold text-white bg-teal-500/10 p-3 rounded-xl border border-teal-500/20">
                {selectedNode.doctors}
              </p>
            </div>

            {/* Quick action to jump to Stalwarts */}
            <a 
              href="#stalwarts" 
              onClick={() => sounds.playPop()}
              className="mt-6 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-colors border border-white/10"
            >
              <span>View Doctors in Roster</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
