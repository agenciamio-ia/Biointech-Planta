/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BiointechLogo } from './BiointechLogo';
import { MapPin, Phone, Mail, ShieldCheck, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CORPORATE_CONTACT } from '../data/plantData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-[#041938] text-white border-t border-[#062754]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pie de página corporativo</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BiointechLogo variant="dark" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Líderes en ingeniería ambiental y biotecnología aplicada para la industria energética, minera y productiva de Colombia con más de 20 años de trayectoria comprobada.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#91F35E] font-medium pt-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Planta Guayacán · Operación Autorizada Casanare</span>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="https://biointech.co/2026/biointech.html" className="hover:text-[#91F35E] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/nosotros.html" className="hover:text-[#91F35E] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/servicios.html" className="hover:text-[#91F35E] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/planta.html" className="text-[#91F35E] font-semibold">
                  Planta Guayacán
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/certificados.html" className="hover:text-[#91F35E] transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/biointech.html#contacto" className="hover:text-[#91F35E] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklinks (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Líneas en Planta
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="https://biointech.co/2026/servicios.html#biorremediacion" className="hover:text-[#91F35E] transition-colors flex items-center justify-between">
                  <span>Biorremediación de Lodos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/servicios.html#aguas" className="hover:text-[#91F35E] transition-colors flex items-center justify-between">
                  <span>Tratamiento de Aguas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/servicios.html#termocentrifugado" className="hover:text-[#91F35E] transition-colors flex items-center justify-between">
                  <span>Unidad UTC (Termocentrifugado)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/servicios.html#geocontenedores" className="hover:text-[#91F35E] transition-colors flex items-center justify-between">
                  <span>Deshidratación &amp; Geocontenedores</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://biointech.co/2026/servicios.html#residuos" className="hover:text-[#91F35E] transition-colors flex items-center justify-between">
                  <span>Gestión Integral de Residuos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Oficinas y Operaciones
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00B96B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Planta de Operaciones:</span>
                  <span>{CORPORATE_CONTACT.plantLocation}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Oficinas en Bogotá – Colombia:</span>
                  <span>OFICINA, {CORPORATE_CONTACT.officeBogota}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#91F35E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Correo Electrónico:</span>
                  <a href={`mailto:${CORPORATE_CONTACT.email}`} className="text-slate-200 hover:text-[#91F35E] transition-colors">
                    {CORPORATE_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-5 h-5 text-[#91F35E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-xs">Línea Telefónica &amp; WhatsApp:</span>
                  <a
                    href={CORPORATE_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-black text-[#91F35E] hover:text-white transition-colors block mt-0.5 tracking-tight"
                  >
                    311 288 8995
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CORPORATE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-center text-white bg-[#008542] hover:bg-[#006030] rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chatear por WhatsApp (Asesoría Directa)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
            <span>© 2026 BIOINTECH S.A.S. Todos los derechos reservados.</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>NIT 900.228.182-4</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://biointech.co/2026/certificados.html" className="hover:text-white transition-colors">
              ISO 9001 · 14001 · 45001
            </a>
            <a href="https://biointech.co/2026/biointech.html" className="hover:text-white transition-colors">
              HSE &amp; RUC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
