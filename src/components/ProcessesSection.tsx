/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PLANT_PROCESSES, PlantProcess } from '../data/plantData';
import { ProcessModal } from './ProcessModal';
import { Dna, Droplets, Sprout, Layers, Settings, RefreshCw, ArrowUpRight, ArrowRight } from 'lucide-react';

interface ProcessesSectionProps {
  onOpenContact: () => void;
}

export const ProcessesSection: React.FC<ProcessesSectionProps> = ({ onOpenContact }) => {
  const [selectedProcess, setSelectedProcess] = useState<PlantProcess | null>(null);

  const getProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'dna':
        return <Dna className="w-5 h-5 text-[#91F35E]" />;
      case 'water':
        return <Droplets className="w-5 h-5 text-[#00B96B]" />;
      case 'sprout':
        return <Sprout className="w-5 h-5 text-[#91F35E]" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#0284C7]" />;
      case 'settings':
        return <Settings className="w-5 h-5 text-[#91F35E]" />;
      case 'refresh':
        return <RefreshCw className="w-5 h-5 text-[#00B96B]" />;
      default:
        return <Settings className="w-5 h-5 text-[#00B96B]" />;
    }
  };

  return (
    <section
      id="procesos"
      className="py-20 md:py-28 bg-slate-50 border-t border-b border-slate-200/80"
      aria-labelledby="processes-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#062754] uppercase tracking-wider mb-2">
            Procesos Especializados
          </div>
          <h2
            id="processes-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#062754] tracking-tight leading-tight text-balance mb-4"
          >
            Tecnología aplicada a cada desafío ambiental.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Integramos procesos especializados para tratar, recuperar y valorizar materiales de origen industrial.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PLANT_PROCESSES.map((proc) => (
            <div
              key={proc.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 hover:border-[#00B96B]/50 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Container with Aspect Ratio */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                <img
                  src={proc.image}
                  alt={proc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    // Safe fallback map
                    const fallbackMap: Record<string, string> = {
                      'proc-1': '/src/assets/images/proceso_bioremediacion_1793202433558.jpg',
                      'proc-2': '/src/assets/images/proceso_tratamiento_aguas_1793202433152.jpg',
                      'proc-3': '/src/assets/images/proceso_fitoremediacion_1793202459803.jpg',
                      'proc-4': '/src/assets/images/proceso_geocontenedores_1793202434585.jpg',
                      'proc-5': '/src/assets/images/proceso_termocentrifugado_utc_1793202460413.jpg',
                      'proc-6': '/src/assets/images/proceso_bioremediacion_1793202433558.jpg',
                    };
                    if (fallbackMap[proc.id]) {
                      e.currentTarget.src = fallbackMap[proc.id];
                    }
                  }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Discrete Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062754]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* 2D Linear Icon */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-md bg-[#062754]/80 backdrop-blur-xs flex items-center justify-center border border-white/20">
                  {getProcessIcon(proc.icon)}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-semibold text-[#91F35E] uppercase tracking-wider">
                    {proc.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#062754] tracking-tight mb-2 group-hover:text-[#00B96B] transition-colors leading-snug">
                    {proc.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {proc.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProcess(proc)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#062754] group-hover:text-[#00B96B] transition-colors"
                  >
                    <span>Conocer el servicio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={proc.serviceUrl}
                    className="text-[11px] font-medium text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    Ficha oficial
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="https://biointech.co/2026/servicios.html"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-[#00B96B] hover:bg-[#009E5B] active:bg-[#00874E] rounded-md transition-all duration-150 shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#91F35E] focus-visible:ring-offset-2"
          >
            <span>Explorar todos los servicios</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      <ProcessModal
        process={selectedProcess}
        onClose={() => setSelectedProcess(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
