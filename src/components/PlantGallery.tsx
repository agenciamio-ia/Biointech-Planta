/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PLANT_GALLERY, GalleryItem } from '../data/plantData';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const PlantGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleOpen = (item: GalleryItem, index: number) => {
    setActiveItem(item);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % PLANT_GALLERY.length;
    setCurrentIndex(nextIdx);
    setActiveItem(PLANT_GALLERY[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + PLANT_GALLERY.length) % PLANT_GALLERY.length;
    setCurrentIndex(prevIdx);
    setActiveItem(PLANT_GALLERY[prevIdx]);
  };

  return (
    <section
      id="galeria"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#062754] uppercase tracking-wider mb-2">
            Infraestructura en Campo
          </div>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#062754] tracking-tight leading-tight mb-4 text-balance"
          >
            Galería de la planta y procesos industriales.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Conozca de primera mano las instalaciones, áreas de confinamiento, trenes de tratamiento y el entorno de Planta Guayacán en Casanare.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[280px]">
          {PLANT_GALLERY.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                onClick={() => handleOpen(item, index)}
                className={`relative rounded-xl overflow-hidden group cursor-pointer border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 ${
                  isFeatured
                    ? 'md:col-span-2 md:row-span-2 auto-rows-[580px]'
                    : index === 5
                    ? 'md:col-span-2'
                    : 'md:col-span-1'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    const fallbackMap: Record<string, string> = {
                      'gal-1': '/src/assets/images/hero_planta_guayacan_1793202432392.jpg',
                      'gal-2': '/src/assets/images/proceso_tratamiento_aguas_1793202433152.jpg',
                      'gal-3': '/src/assets/images/proceso_bioremediacion_1793202433558.jpg',
                      'gal-4': '/src/assets/images/proceso_termocentrifugado_utc_1793202460413.jpg',
                      'gal-5': '/src/assets/images/proceso_fitoremediacion_1793202459803.jpg',
                      'gal-6': '/src/assets/images/equipo_tecnico_biointech_1793202434582.jpg',
                    };
                    if (fallbackMap[item.id]) {
                      e.currentTarget.src = fallbackMap[item.id];
                    }
                  }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062754]/90 via-[#062754]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                {/* Quick inspect hover indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption / Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#91F35E] block mb-1">
                    {item.category}
                  </span>
                  <h3 className={`font-bold tracking-tight mb-1 text-white ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom gallery note */}
        <div className="mt-8 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#00B96B]" />
            <span>Haga clic en cualquier imagen para abrir el visor en alta resolución.</span>
          </div>
          <span className="font-mono text-[11px]">Planta Guayacán · Casanare, Colombia</span>
        </div>
      </div>

      {/* Lightbox / High Resolution Viewer Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Cerrar visor"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous / Next Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-20"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-20"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] max-h-[600px] flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="text-xs font-bold text-[#91F35E] uppercase tracking-wider">
                {activeItem.category} · {currentIndex + 1} de {PLANT_GALLERY.length}
              </span>
              <h4 className="text-xl font-bold mt-1 text-white">{activeItem.title}</h4>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
