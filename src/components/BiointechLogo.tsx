/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface BiointechLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const BiointechLogo: React.FC<BiointechLogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = true
}) => {
  const [imageError, setImageError] = useState(false);
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center select-none ${className}`}>
      {!imageError ? (
        isDark ? (
          /* En superficies oscuras (footer), mostrar el logo oficial con su fondo blanco nítido para preservar 100% los colores reales del PNG sin filtros raros */
          <div className="bg-white px-3.5 py-2 rounded-lg shadow-sm border border-slate-200/50 inline-flex items-center">
            <img
              src="https://biointech.co/2026/wp-content/uploads/logo-Biointech-png-2.png"
              alt="Biointech SAS"
              className="h-10 sm:h-11 w-auto object-contain"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          /* En la barra superior (blanca), mostrar el logo PNG original directo */
          <img
            src="https://biointech.co/2026/wp-content/uploads/logo-Biointech-png-2.png"
            alt="Biointech SAS"
            className="h-11 sm:h-12 w-auto object-contain"
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
          />
        )
      ) : (
        /* Vector Fallback if offline */
        <div className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-xs" fill="none">
              <path
                d="M24 4C13 14 8 25 14 36c4 7 13 8 20 4 7-4 10-14 8-22C39 12 33 6 24 4z"
                fill="url(#bioLeafGrad3)"
              />
              <path
                d="M23 10C24 18 25 26 29 33"
                stroke="#FFFFFF"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="29" cy="33" r="2.5" fill="#91F35E" />
              <defs>
                <linearGradient id="bioLeafGrad3" x1="8" y1="4" x2="42" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00B96B" />
                  <stop offset="0.6" stopColor="#91F35E" />
                  <stop offset="1" stopColor="#0284C7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-2xl font-black font-sans tracking-tight ${isDark ? 'text-white' : 'text-[#062754]'}`}>
              BIOINTECH<span className="text-[#00B96B]">.</span>
            </span>
            {showSubtitle && (
              <span className={`text-[9px] font-semibold tracking-[0.22em] uppercase mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                Ingeniería Ambiental
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
