/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, MapPin, ChevronDown, MessageCircle } from 'lucide-react';
import { CORPORATE_CONTACT } from '../data/plantData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [imageSrc, setImageSrc] = useState(
    'https://biointech.co/2026/wp-content/uploads/biointech-banner-principal-v2-e1793204476886.png'
  );

  return (
    <section
      id="planta"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#062754]"
      aria-labelledby="hero-heading"
    >
      {/* Background Image: Retouched industrial view of Planta Guayacán */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Vista industrial de Planta Guayacán en Casanare, Colombia"
          className="w-full h-full object-cover object-center lg:object-right filter contrast-105 brightness-95"
          onError={() => {
            // High-fidelity industrial fallback if external link is restricted
            setImageSrc('/src/assets/images/hero_planta_guayacan_1793202432392.jpg');
          }}
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Deep Navy Gradient Overlay: left-to-right to guarantee 100% text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#062754] via-[#062754]/92 to-transparent lg:w-[75%]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#062754] via-transparent to-black/20"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Green Upper Indicator: Clean unboxed text kicker */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#91F35E] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase">
              Ingeniería Ambiental de Alta Complejidad
            </span>
          </div>

          {/* Main H1 Headline with Guayacán highlighted in Lime Green */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6 text-balance"
          >
            Planta <span className="text-[#91F35E]">Guayacán</span>
          </h1>

          {/* Descriptive text */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Nuestra planta insignia en Casanare, Colombia, integra ingeniería ambiental y procesos biotecnológicos para el tratamiento de fluidos industriales, la restauración de suelos y la recuperación de ecosistemas.
          </p>

          {/* Location indicator */}
          <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-10">
            <MapPin className="w-4 h-4 text-[#00B96B] shrink-0" />
            <span>Ubicación: Casanare, Colombia</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="text-slate-400">Cuenca Llanos Orientales</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://biointech.co/2026/servicios.html"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#00B96B] hover:bg-[#009E5B] active:bg-[#00874E] rounded-md transition-colors duration-150 shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#91F35E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062754] text-center"
            >
              <span>Conocer nuestros servicios</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/25 rounded-md backdrop-blur-xs transition-colors duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white text-center"
            >
              <span>Contactar a un asesor</span>
            </button>

            <a
              href={CORPORATE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#008542] rounded-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Directo (+57 311 288 8995)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <a
        href="#clientes"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-300 hover:text-white transition-colors text-xs font-medium"
        aria-label="Desplazarse a la sección de clientes"
      >
        <span className="tracking-wider uppercase text-[11px]">Nuestra Trayectoria</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
