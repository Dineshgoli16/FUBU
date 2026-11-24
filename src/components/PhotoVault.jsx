import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Pin } from 'lucide-react';
import { VAULT_PHOTOS } from '../data/stalwarts';
import { sounds } from '../utils/sound';

export default function PhotoVault({ isHostelMode }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const categories = ['All', 'Reunion', 'College 2008', 'Hostel Banter', 'Sports & Fun', 'Family', 'Trips', 'Conferences'];

  const filteredPhotos = selectedCategory === 'All'
    ? VAULT_PHOTOS
    : VAULT_PHOTOS.filter(p => p.category === selectedCategory);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
    sounds.playPop();
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    sounds.playPop();
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
    sounds.playPop();
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
    sounds.playPop();
  };

  return (
    <section id="vault" className="py-24 border-b border-white/5 relative overflow-hidden bg-[#0c101c]">
      
      {/* Background subtle corkboard / scrapbook texture dots */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-950/60 border border-amber-500/40 text-amber-300 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Tactile Nostalgia Scrapbook</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            The Stalwarts Polaroid Wall
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Every photo tells an unscripted story — from the 2008 dissection halls to the 2024 reunion tables and conference halls.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  sounds.playPop();
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/25 scale-105 font-extrabold'
                    : 'bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              style={{ transform: `rotate(${photo.tilt || '0deg'})` }}
              className="group relative bg-white p-3.5 pb-6 rounded-2xl shadow-2xl transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30 cursor-pointer"
            >
              {/* Decorative Washi Tape on Top Center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-200/80 backdrop-blur-sm border-t border-b border-amber-300/60 shadow-sm transform -rotate-1 pointer-events-none z-10" />

              {/* Photo Canvas */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900 relative shadow-inner">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Photo Category Pill */}
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/80 text-amber-300 border border-white/20 backdrop-blur-md">
                  {photo.category}
                </span>

                {/* Hover Maximize Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-3 rounded-full bg-amber-400 text-slate-950 shadow-xl transform scale-75 group-hover:scale-100 transition-transform font-bold">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Handwritten Polaroid Bottom Caption */}
              <div className="pt-3.5 px-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-fun font-bold text-xl text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
                    {photo.title}
                  </h3>
                  <span className="font-fun text-sm font-bold text-slate-500 shrink-0">
                    '{photo.year}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 font-sans mt-1 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-20 p-3 rounded-full bg-slate-900/80 border border-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-slate-900/80 border border-white/20 text-white hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-slate-900/80 border border-white/20 text-white hover:bg-slate-800 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div 
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-3 sm:p-4 pb-6 rounded-3xl shadow-2xl max-w-full">
              <img 
                src={filteredPhotos[activePhotoIndex].src} 
                alt={filteredPhotos[activePhotoIndex].title}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-inner"
              />
              <div className="mt-3 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-fun font-bold text-2xl text-slate-900">
                    {filteredPhotos[activePhotoIndex].title}
                  </h3>
                  <span className="font-fun text-base font-bold text-slate-500">
                    {filteredPhotos[activePhotoIndex].year} • {filteredPhotos[activePhotoIndex].category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 mt-1">
                  {filteredPhotos[activePhotoIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
