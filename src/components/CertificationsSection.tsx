/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CERTIFICATIONS } from '../data/plantData';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certificaciones"
      className="py-20 md:py-24 bg-white border-t border-slate-200/80"
      aria-labelledby="certs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-[#062754] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#00B96B]" />
            <span>Sistemas de Gestión Certificados</span>
          </div>

          <h2
            id="certs-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#062754] tracking-tight leading-tight mb-4 text-balance"
          >
            Calidad, seguridad y compromiso con la excelencia.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Nuestro compromiso con la gestión responsable se refleja en los estándares y sistemas de respaldo que acompañan nuestras operaciones en Planta Guayacán y proyectos a nivel nacional.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isRuc = cert.type === 'ruc';
            const isCcs = cert.type === 'ccs';

            return (
              <div
                key={cert.id}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#00B96B]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Badge Seal Container */}
                  <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center bg-slate-50 border border-slate-200 group-hover:scale-105 transition-transform duration-200">
                    {cert.type === 'iso' ? (
                      <div className="flex flex-col items-center justify-center text-center">
                        <Award className="w-6 h-6 text-[#062754]" />
                        <span className="text-[9px] font-black tracking-tighter text-[#00B96B]">ISO</span>
                      </div>
                    ) : isRuc ? (
                      <div className="w-10 h-10 rounded-full bg-[#008542] text-white flex items-center justify-center font-black text-xs">
                        RUC
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#062754] text-[#91F35E] flex items-center justify-center font-black text-xs">
                        CCS
                      </div>
                    )}
                  </div>

                  {/* Code */}
                  <div className="text-center">
                    <span className="inline-block text-xs font-black tracking-wider uppercase text-[#062754] bg-slate-100 px-2 py-0.5 rounded-sm mb-2">
                      {cert.code}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#00B96B] mb-3">
                      {cert.entity}
                    </p>
                  </div>

                  {/* Scope */}
                  <p className="text-xs text-slate-600 leading-relaxed text-center">
                    {cert.scope}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00B96B]" />
                  <span>Vigente &amp; Auditado</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Link */}
        <div className="mt-12 text-center">
          <a
            href="https://biointech.co/2026/certificados.html"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#062754] hover:text-[#00B96B] transition-colors"
          >
            <span>Consultar certificados oficiales y registros de alcance</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
