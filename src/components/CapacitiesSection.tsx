/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PLANT_CAPACITIES } from '../data/plantData';
import { Droplet, Dna, Factory, Recycle, CheckCircle2 } from 'lucide-react';

export const CapacitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'droplet':
        return <Droplet className="w-6 h-6 text-[#00B96B]" />;
      case 'dna':
        return <Dna className="w-6 h-6 text-[#91F35E]" />;
      case 'factory':
        return <Factory className="w-6 h-6 text-[#0284C7]" />;
      case 'recycle':
        return <Recycle className="w-6 h-6 text-[#00B96B]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#00B96B]" />;
    }
  };

  return (
    <section
      id="capacidades"
      className="py-20 md:py-24 bg-white"
      aria-labelledby="capacities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-bold text-[#062754] uppercase tracking-wider mb-2">
            Pilares Operativos
          </div>
          <h2
            id="capacities-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#062754] tracking-tight leading-tight text-balance mb-4"
          >
            Infraestructura para los retos ambientales de la industria.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Planta Guayacán articula instalaciones de contención industrial de gran escala con tecnología biotecnológica propia y personal altamente calificado en la cuenca de Casanare.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANT_CAPACITIES.map((cap) => (
            <div
              key={cap.id}
              className="bg-white rounded-lg p-6 border border-slate-200/90 hover:border-[#00B96B]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container with subtle surface */}
                <div className="w-12 h-12 rounded-lg bg-[#062754] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {getIcon(cap.icon)}
                </div>

                <div className="text-[11px] font-semibold tracking-wider uppercase text-[#00B96B] mb-1.5">
                  {cap.tag}
                </div>

                <h3 className="text-lg font-bold text-[#062754] tracking-tight mb-2 leading-snug">
                  {cap.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 mb-3 italic">
                  {cap.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#062754]">
                <CheckCircle2 className="w-4 h-4 text-[#00B96B] shrink-0" />
                <span>Capacidad Verificada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guarantee Strip */}
        <div className="mt-12 p-6 bg-[#062754] text-white rounded-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Cumplimiento Integral de Normatividad Ambiental Colombiana
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Operamos bajo licenciamiento ambiental de Corporinoquia y autorizaciones para el manejo, transporte y disposición de lodos, cortes y residuos de la industria de hidrocarburos.
            </p>
          </div>
          <a
            href="https://biointech.co/2026/servicios.html"
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-[#062754] bg-[#91F35E] hover:bg-[#82e250] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Consultar Ficha Técnica
          </a>
        </div>
      </div>
    </section>
  );
};
