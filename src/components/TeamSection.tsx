/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Users, Shield, Cpu } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="equipo"
      className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content Column (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-[#062754] uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#00B96B]" />
              <span>Talento Humano &amp; Seguridad Operacional</span>
            </div>

            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[#062754] tracking-tight leading-tight mb-6 text-balance"
            >
              Tecnología y experiencia impulsadas por nuestro equipo.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Detrás de cada proceso hay un equipo comprometido con la seguridad, la excelencia técnica y la recuperación ambiental. Nuestros biólogos, ingenieros químicos, ambientales y operadores de campo aúnan rigor analítico con presencia ininterrumpida en Planta Guayacán.
            </p>

            {/* Quality attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-lg border border-slate-200/90 shadow-2xs">
                <Shield className="w-5 h-5 text-[#00B96B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#062754]">Cultura Cero Accidentes</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Estándares RUC y protocolos HSE en cada maniobra de campo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-lg border border-slate-200/90 shadow-2xs">
                <Cpu className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#062754]">Control Analítico In Situ</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Muestreo y validación técnica en tiempo real en Casanare.</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <a
                href="https://biointech.co/2026/biointech.html"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#00B96B] hover:bg-[#009E5B] active:bg-[#00874E] rounded-md transition-all shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#91F35E]"
              >
                <span>Conoce nuestro equipo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Photo Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img
                src="https://biointech.co/2026/images/biointech-galeria-v1.jpg"
                alt="Equipo técnico y operativo de Biointech en Planta Guayacán realizando control de procesos"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/equipo_tecnico_biointech_1793202434582.jpg';
                }}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062754]/80 via-transparent to-transparent opacity-70" />

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-xs rounded-lg border border-slate-200 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#062754]">Supervisión Técnica y Monitoreo Analítico</div>
                  <div className="text-[11px] text-slate-500">Operación continua en Planta Guayacán · Casanare, Colombia</div>
                </div>
                <span className="hidden sm:inline-block text-[10px] font-mono text-[#00B96B] font-bold uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded">
                  HSE Certificado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
