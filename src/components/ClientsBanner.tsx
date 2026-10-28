/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CLIENT_BRANDS } from '../data/plantData';
import { ClientLogo } from './ClientLogo';
import { ShieldCheck } from 'lucide-react';

export const ClientsBanner: React.FC = () => {
  const [infographicError, setInfographicError] = useState(false);

  return (
    <section
      id="clientes"
      className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-[#062754] tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-[#00B96B]" />
            <span>Respaldo Corporativo &amp; Confianza Industrial</span>
          </div>

          <h2
            id="clients-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062754] tracking-tight leading-snug mb-4 text-balance"
          >
            Más de 20 años transformando desafíos ambientales en soluciones.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Experiencia, capacidad técnica y confianza al servicio de la industria energética, minera e industrial de Colombia.
          </p>
        </div>

        {/* Imagen Oficial de Clientes / Infografía Arriba de los Logos */}
        {!infographicError && (
          <div className="mb-12 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-white p-2 sm:p-4">
            <img
              src="https://biointech.co/2026/wp-content/uploads/infografia-Mas-de-20-anos-de-confianza.png"
              alt="Infografía Más de 20 Años de Confianza - Biointech SAS"
              className="w-full h-auto object-contain max-h-[320px] mx-auto"
              onError={() => setInfographicError(true)}
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        )}

        {/* Logos Multi-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {CLIENT_BRANDS.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-lg p-5 border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col items-center justify-center min-h-[90px] text-center group"
            >
              <ClientLogo type={client.logoType} className="max-h-9 w-auto" />
              <span className="text-[11px] text-slate-600 mt-2 tracking-wide font-medium group-hover:text-slate-800 transition-colors">
                {client.sector}
              </span>
            </div>
          ))}
        </div>

        {/* Institutional Trust Note */}
        <div className="mt-10 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B96B]"></span>
            <span>Marcas y empresas atendidas bajo estrictos acuerdos de confidencialidad y estándares HSE.</span>
          </div>
          <span className="text-slate-400 font-mono text-[11px]">BIOINTECH S.A.S. · Casanare, Colombia</span>
        </div>
      </div>
    </section>
  );
};
