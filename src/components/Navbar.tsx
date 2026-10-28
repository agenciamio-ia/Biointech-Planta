/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BiointechLogo } from './BiointechLogo';
import { CORPORATE_CONTACT } from '../data/plantData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b-2 border-[#062754] ${
        isScrolled ? 'shadow-md py-2.5 md:h-[80px]' : 'py-3.5 md:h-[86px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">
        {/* Logo Oficial de Biointech en la izquierda */}
        <a
          href="https://biointech.co/2026/biointech.html"
          className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#008542] rounded-sm shrink-0"
          aria-label="Biointech SAS - Inicio"
        >
          <BiointechLogo />
        </a>

        {/* Navegación de Escritorio - Estilo Exacto de la Imagen Adjunta */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {/* INICIO */}
          <a
            href="https://biointech.co/2026/biointech.html"
            className="text-[13px] xl:text-[14px] font-extrabold uppercase tracking-wider text-[#062754] hover:text-[#008542] transition-colors whitespace-nowrap"
          >
            INICIO
          </a>

          {/* NOSOTROS */}
          <a
            href="https://biointech.co/2026/nosotros.html"
            className="text-[13px] xl:text-[14px] font-extrabold uppercase tracking-wider text-[#062754] hover:text-[#008542] transition-colors whitespace-nowrap"
          >
            NOSOTROS
          </a>

          {/* SERVICIOS */}
          <a
            href="https://biointech.co/2026/servicios.html"
            className="text-[13px] xl:text-[14px] font-extrabold uppercase tracking-wider text-[#062754] hover:text-[#008542] transition-colors whitespace-nowrap"
          >
            SERVICIOS
          </a>

          {/* PLANTA (Activo en verde como en la imagen adjunta) */}
          <a
            href="https://biointech.co/2026/planta.html"
            className="text-[13px] xl:text-[14px] font-extrabold uppercase tracking-wider text-[#008542] transition-colors whitespace-nowrap"
          >
            PLANTA
          </a>

          {/* CERTIFICADOS (Botón con borde navy oscuro) */}
          <a
            href="https://biointech.co/2026/certificados.html"
            className="inline-flex items-center justify-center px-5 py-2 text-[13px] xl:text-[14px] font-extrabold uppercase tracking-wider text-[#062754] border-2 border-[#062754] rounded-lg hover:bg-[#062754] hover:text-white transition-all whitespace-nowrap shadow-2xs"
          >
            CERTIFICADOS
          </a>

          {/* CONTACTO (Botón con fondo sólido navy oscuro) */}
          <a
            href="https://biointech.co/2026/biointech.html#contacto"
            className="inline-flex items-center justify-center px-6 py-2 text-[13px] xl:text-[14px] font-extrabold uppercase tracking-wider text-white bg-[#062754] hover:bg-[#082F62] active:bg-[#041938] rounded-lg transition-all whitespace-nowrap shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#008542]"
          >
            CONTACTO
          </a>
        </nav>

        {/* Acciones Móviles */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={CORPORATE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#008542] bg-[#E8F8EE] rounded-lg"
            aria-label="WhatsApp Asesoría Directa"
          >
            <MessageCircle className="w-5 h-5 fill-[#008542]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#062754] hover:text-[#008542] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#008542]"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-[#062754] px-6 pt-4 pb-6 shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            <a
              href="https://biointech.co/2026/biointech.html"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm uppercase tracking-wider font-extrabold text-[#062754] hover:text-[#008542] border-b border-slate-100 flex items-center justify-between"
            >
              <span>INICIO</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://biointech.co/2026/nosotros.html"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm uppercase tracking-wider font-extrabold text-[#062754] hover:text-[#008542] border-b border-slate-100 flex items-center justify-between"
            >
              <span>NOSOTROS</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://biointech.co/2026/servicios.html"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm uppercase tracking-wider font-extrabold text-[#062754] hover:text-[#008542] border-b border-slate-100 flex items-center justify-between"
            >
              <span>SERVICIOS</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="https://biointech.co/2026/planta.html"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm uppercase tracking-wider font-extrabold text-[#008542] border-b border-slate-100 flex items-center justify-between"
            >
              <span>PLANTA</span>
              <span className="w-2 h-2 rounded-full bg-[#008542]"></span>
            </a>

            {/* CERTIFICADOS Button (Outlined in mobile) */}
            <a
              href="https://biointech.co/2026/certificados.html"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-2.5 text-center text-sm uppercase tracking-wider font-extrabold text-[#062754] border-2 border-[#062754] rounded-lg hover:bg-[#062754] hover:text-white transition-all shadow-xs"
            >
              CERTIFICADOS
            </a>

            {/* CONTACTO Button (Solid navy in mobile) */}
            <a
              href="https://biointech.co/2026/biointech.html#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm uppercase tracking-wider font-extrabold text-white bg-[#062754] hover:bg-[#082F62] rounded-lg shadow-xs transition-all"
            >
              CONTACTO
            </a>

            <a
              href={CORPORATE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-full py-2.5 text-center text-xs font-bold text-white bg-[#008542] hover:bg-[#006030] rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chatear por WhatsApp (311 288 8995)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
