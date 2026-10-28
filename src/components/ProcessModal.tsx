/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PlantProcess } from '../data/plantData';
import { X, ExternalLink, Check, Shield } from 'lucide-react';

interface ProcessModalProps {
  process: PlantProcess | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({ process, onClose, onOpenContact }) => {
  if (!process) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#062754]/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative">
        {/* Modal Header with Image */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden bg-slate-900">
          <img
            src={process.image}
            alt={process.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062754] via-transparent to-black/30" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Cerrar ventana de detalle"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold text-[#91F35E] uppercase tracking-wider">
              {process.subtitle}
            </span>
            <h3 id="modal-title" className="text-2xl font-black text-white tracking-tight">
              {process.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Descripción Operativa
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {process.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Ventajas y Métricas Clave
            </h4>
            <ul className="space-y-2.5">
              {process.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <div className="p-0.5 rounded-full bg-emerald-50 text-[#00B96B] shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications Table */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Ficha Técnica
            </h4>
            <div className="rounded-lg border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
              {process.specs.map((spec, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-slate-50/50">
                  <span className="font-semibold text-slate-600">{spec.label}</span>
                  <span className="text-slate-900 font-medium sm:text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Compliance badge */}
          <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-600">
            <Shield className="w-5 h-5 text-[#00B96B] shrink-0" />
            <span>Operado bajo Sistema de Gestión Integral ISO 9001, ISO 14001, ISO 45001 y calificación RUC.</span>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cerrar
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-white bg-[#062754] hover:bg-[#082F62] rounded-md transition-colors text-center"
              >
                Solicitar Cotización
              </button>
              <a
                href={process.serviceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#00B96B] hover:bg-[#009E5B] rounded-md transition-colors text-center"
              >
                <span>Ver en Servicios</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
