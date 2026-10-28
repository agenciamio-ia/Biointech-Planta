/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ClientLogoProps {
  type: string;
  className?: string;
}

export const ClientLogo: React.FC<ClientLogoProps> = ({ type, className = "h-8 max-w-full" }) => {
  switch (type) {
    case 'ecopetrol':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          {/* Ecopetrol Green Iguana & Wordmark */}
          <svg className="w-8 h-8 shrink-0 text-[#008542]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 8C26.8 8 8 26.8 8 50s18.8 42 42 42 42-18.8 42-42S73.2 8 50 8zm-8 62c-4.4 0-8-3.6-8-8 0-3 1.6-5.6 4-7v-6c-2.4-1.4-4-4-4-7 0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.6 5.6-4 7v6c2.4 1.4 4 4 4 7 0 4.4-3.6 8-8 8zm24-8c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-3 1.6-5.6 4-7v-6c-2.4-1.4-4-4-4-7 0-4.4 3.6-8 8-8s8 3.6 8 8c0 3-1.6 5.6-4 7v6c2.4 1.4 4 4 4 7z" />
          </svg>
          <span className="font-extrabold tracking-tight text-slate-800 text-lg uppercase font-sans">
            ECOPETROL
          </span>
        </div>
      );

    case 'repsol':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          {/* Repsol concentric ellipse mark */}
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#003865] via-[#E4002B] to-[#FF8200] flex items-center justify-center p-1 shrink-0">
            <div className="w-full h-1/2 bg-white rounded-t-full"></div>
          </div>
          <span className="font-black tracking-wider text-slate-900 text-lg uppercase">
            REPSOL
          </span>
        </div>
      );

    case 'oxy':
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <div className="px-2 py-0.5 bg-[#002D72] text-white font-black text-lg tracking-wider rounded-sm">
            OXY
          </div>
          <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase hidden sm:inline">
            Occidental
          </span>
        </div>
      );

    case 'perenco':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-6 h-6 border-2 border-[#D92528] rounded-sm flex items-center justify-center shrink-0">
            <div className="w-2.5 h-2.5 bg-[#0A2240]"></div>
          </div>
          <span className="font-black text-slate-900 tracking-tight text-lg">
            PERENCO
          </span>
        </div>
      );

    case 'frontera':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-7 h-7 bg-[#1A472A] rounded-full flex items-center justify-center text-[#91F35E] font-bold text-xs shrink-0">
            FE
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-slate-900 text-sm tracking-wide">FRONTERA</span>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase">ENERGY</span>
          </div>
        </div>
      );

    case 'canacol':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-6 h-6 bg-[#005B94] rounded-sm flex items-center justify-center text-white font-extrabold text-xs shrink-0">
            C
          </div>
          <span className="font-black text-[#005B94] text-base tracking-tight">
            CANACOL
          </span>
        </div>
      );

    case 'qmax':
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <span className="font-black text-slate-900 text-xl tracking-tighter">
            Q<span className="text-[#00B96B]">MAX</span>
          </span>
          <span className="text-[10px] text-slate-500 font-medium">SOLUTIONS</span>
        </div>
      );

    case 'equion':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-6 h-6 rounded-full border-2 border-[#00965E] flex items-center justify-center shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#F39200]"></div>
          </div>
          <span className="font-bold text-slate-900 text-base tracking-tight">
            EQUIÓN <span className="font-normal text-slate-500 text-xs">ENERGÍA</span>
          </span>
        </div>
      );

    case 'pacific':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-6 h-6 bg-[#006699] flex items-center justify-center rounded-sm shrink-0">
            <div className="w-3 h-0.5 bg-white transform rotate-45"></div>
          </div>
          <span className="font-bold text-slate-800 text-sm tracking-tight">
            PACIFIC <span className="text-slate-500 text-xs font-normal">RUBIALES</span>
          </span>
        </div>
      );

    case 'veolia':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 rounded-full border-2 border-[#ED0000] flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-[#ED0000] rounded-full"></div>
          </div>
          <span className="font-extrabold text-[#ED0000] tracking-tight text-lg">
            VEOLIA
          </span>
        </div>
      );

    case 'cerrejon':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-6 h-6 bg-[#003865] rounded flex items-center justify-center text-white font-bold text-xs shrink-0">
            C
          </div>
          <span className="font-black text-[#003865] tracking-tight text-base">
            CERREJÓN
          </span>
        </div>
      );

    case 'serviambiental':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-6 h-6 rounded-full bg-[#008542] flex items-center justify-center text-white text-xs font-bold shrink-0">
            S
          </div>
          <span className="font-bold text-slate-800 text-xs tracking-tight uppercase">
            SERVIAMBIENTAL
          </span>
        </div>
      );

    case 'ccenergia':
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <span className="font-black text-[#062754] text-base tracking-tighter">
            C&amp;C <span className="font-normal text-xs text-slate-600">ENERGÍA</span>
          </span>
        </div>
      );

    case 'geoingenieria':
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 border border-[#00B96B] rounded-xs flex items-center justify-center shrink-0">
            <div className="w-2 h-2 bg-[#062754]"></div>
          </div>
          <span className="font-bold text-slate-800 text-xs tracking-wider uppercase">
            GEOINGENIERÍA
          </span>
        </div>
      );

    case 'omega':
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <span className="font-serif font-black text-[#062754] text-xl">Ω</span>
          <span className="font-bold text-slate-900 text-xs tracking-widest uppercase">
            OMEGA ENERGY
          </span>
        </div>
      );

    default:
      return (
        <span className="font-bold text-slate-800 text-sm uppercase tracking-wider">
          {type}
        </span>
      );
  }
};
