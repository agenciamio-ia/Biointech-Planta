/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Mail, PhoneCall } from 'lucide-react';
import { CORPORATE_CONTACT } from '../data/plantData';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section
      className="relative py-20 md:py-28 bg-[#062754] text-white overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Image with subtle opacity and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_planta_guayacan_1793202432392.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 filter saturate-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062754] via-[#062754]/95 to-[#082F62]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Lime green accent indicator */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-[#91F35E] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            Atención Especializada para Operaciones Industriales
          </span>
        </div>

        {/* Main CTA Heading */}
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 text-balance max-w-4xl mx-auto"
        >
          ¿Buscas una solución para un desafío ambiental industrial?
        </h2>

        {/* Text */}
        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Nuestro equipo puede ayudarte a identificar las alternativas de tratamiento más adecuadas para tu operación en Casanare o en cualquier punto del territorio nacional.
        </p>

        {/* Two CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#00B96B] hover:bg-[#009E5B] active:bg-[#00874E] rounded-md transition-all shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#91F35E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062754]"
          >
            <Mail className="w-5 h-5" />
            <span>Solicitar asesoría técnica</span>
          </button>

          <a
            href="https://biointech.co/2026/servicios.html"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/25 rounded-md backdrop-blur-xs transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Conocer nuestros servicios</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Quick direct helpline indicator with larger phone */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-200">
          <a
            href={CORPORATE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-105"
          >
            <div className="p-2 rounded-full bg-[#91F35E] text-[#062754]">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-[#91F35E] tracking-wider block">Línea &amp; WhatsApp</span>
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">311 288 8995</span>
            </div>
          </a>

          <a
            href={`mailto:${CORPORATE_CONTACT.email}`}
            className="flex items-center gap-2 hover:text-[#91F35E] transition-colors text-sm sm:text-base font-semibold"
          >
            <Mail className="w-5 h-5 text-[#91F35E]" />
            <span>{CORPORATE_CONTACT.email}</span>
          </a>

          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B96B]"></span>
            <span>Planta Guayacán • Casanare, Colombia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
