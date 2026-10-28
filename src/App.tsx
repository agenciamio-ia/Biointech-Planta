/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsBanner } from './components/ClientsBanner';
import { CapacitiesSection } from './components/CapacitiesSection';
import { ProcessesSection } from './components/ProcessesSection';
import { PlantGallery } from './components/PlantGallery';
import { CertificationsSection } from './components/CertificationsSection';
import { TeamSection } from './components/TeamSection';
import { ServicesFormSection } from './components/ServicesFormSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { MessageCircle } from 'lucide-react';
import { CORPORATE_CONTACT } from './data/plantData';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#91F35E]/40 selection:text-[#062754]">
      {/* SECCIÓN 1. Navegación principal */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SECCIÓN 2. Hero principal — Planta Guayacán */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* SECCIÓN 3. Banner de clientes — Nuestra trayectoria */}
        <ClientsBanner />

        {/* SECCIÓN 4. Planta Guayacán en cifras y capacidades */}
        <CapacitiesSection />

        {/* SECCIÓN 5. Procesos especializados de la planta */}
        <ProcessesSection onOpenContact={() => setIsContactOpen(true)} />

        {/* SECCIÓN 6. Galería de la planta y procesos */}
        <PlantGallery />

        {/* SECCIÓN 7. Certificaciones y respaldo corporativo */}
        <CertificationsSection />

        {/* SECCIÓN 8. Equipo de trabajo */}
        <TeamSection />

        {/* Formulario On-Page: Solicitud de Servicios Biointech */}
        <ServicesFormSection />

        {/* SECCIÓN 9. Llamado a la acción final */}
        <FinalCTA onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* SECCIÓN 10. Footer corporativo */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Contact & Advisory Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={CORPORATE_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#008542] hover:bg-[#006e36] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 group border-2 border-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#91F35E]"
        aria-label="Chatear por WhatsApp (311 288 8995)"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-sm font-black tracking-wide">
          WhatsApp: 311 288 8995
        </span>
      </a>
    </div>
  );
}
