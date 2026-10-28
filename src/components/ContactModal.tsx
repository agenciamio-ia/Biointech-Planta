/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { BiointechLogo } from './BiointechLogo';
import { CORPORATE_CONTACT } from '../data/plantData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Biorremediación',
    location: 'Casanare',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const waText = `*SOLICITUD DE SERVICIOS BIOINTECH*%0A%0A` +
      `*Nombre:* ${encodeURIComponent(formData.name)}%0A` +
      `*Empresa:* ${encodeURIComponent(formData.company || 'No especificada')}%0A` +
      `*Correo:* ${encodeURIComponent(formData.email)}%0A` +
      `*Teléfono:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Servicio:* ${encodeURIComponent(formData.service)}%0A` +
      `*Ubicación:* ${encodeURIComponent(formData.location)}%0A` +
      `*Detalles:* ${encodeURIComponent(formData.message || 'Solicitud de asesoría técnica directa.')}`;

    const waUrl = `https://api.whatsapp.com/send?phone=+573112888995&text=${waText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#062754]/85 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="bg-white rounded-xl max-w-xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        {/* Header con estilo de la Web de Servicios */}
        <div className="p-6 bg-[#062754] text-white rounded-t-xl relative border-b border-[#082F62]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Cerrar formulario"
          >
            <X className="w-5 h-5" />
          </button>

          <BiointechLogo variant="dark" showSubtitle={false} className="mb-3" />
          <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
            Solicitud de Servicios Biointech
          </h3>
          <p className="text-xs text-slate-200 mt-1">
            Envíe los requerimientos de su operación industrial. Su solicitud será canalizada al equipo de ingeniería y al WhatsApp directo (+57 311 288 8995).
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#00B96B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#062754]">
                ¡Información Enviada!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Su requerimiento ha sido preparado y redirigido al WhatsApp institucional de Biointech SAS:
              </p>
              <div className="py-2">
                <span className="text-2xl font-black text-[#008542] tracking-tight">311 288 8995</span>
              </div>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Y copia a nuestro buzón central <strong className="text-slate-800">{CORPORATE_CONTACT.email}</strong>.
              </p>

              <div className="p-4 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-200/80 max-w-md mx-auto text-left space-y-1.5">
                <div><span className="font-bold text-[#062754]">Cliente:</span> {formData.name}</div>
                <div><span className="font-bold text-[#062754]">Empresa:</span> {formData.company || 'Operadora'}</div>
                <div><span className="font-bold text-[#062754]">Servicio Requerido:</span> {formData.service}</div>
                <div><span className="font-bold text-[#062754]">Sede Operativa:</span> {CORPORATE_CONTACT.plantLocation}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={CORPORATE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#008542] hover:bg-[#006030] rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chatear por WhatsApp (Asesoría Directa)</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-md transition-colors"
                >
                  Volver a la página
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-contact-name" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    id="modal-contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ing. Juan Carlos Morales"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="modal-contact-company" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1">
                    Empresa / Operadora *
                  </label>
                  <input
                    id="modal-contact-company"
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Empresa de Petróleo / Industria"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-contact-email" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    id="modal-contact-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contacto@empresa.com"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="modal-contact-phone" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1">
                    Teléfono &amp; WhatsApp *
                  </label>
                  <input
                    id="modal-contact-phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+57 311 288 8995"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-contact-service" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1">
                    Servicio Requerido *
                  </label>
                  <select
                    id="modal-contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all font-medium text-slate-800"
                  >
                    <option value="Biorremediación">Biorremediación de Lodos y Suelos</option>
                    <option value="Tratamiento de Aguas">Tratamiento de Aguas Industriales</option>
                    <option value="Dilución Bureal / Fitorremediación">Dilución Bureal o Fitorremediación</option>
                    <option value="Deshidratación Geocontenedores">Deshidratación de Lodos y Geocontenedores</option>
                    <option value="Unidad UTC Termocentrifugado">Unidad UTC (Termocentrifugado)</option>
                    <option value="Gestión Integral Residuos">Gestión Integral de Residuos RESPEL</option>
                    <option value="Operación en Planta Guayacán">Operaciones en Planta Guayacán</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-contact-location" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1">
                    Ubicación / Bloque de Operación
                  </label>
                  <input
                    id="modal-contact-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Casanare, Llanos Orientales"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-contact-message" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1">
                  Descripción del Proyecto o Desafío Ambiental
                </label>
                <textarea
                  id="modal-contact-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalles sobre volumen de lodos, caudal de agua o matriz a remediar..."
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                />
              </div>

              {/* Office & Plant location strip */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00B96B] shrink-0" />
                  <span><strong>Planta:</strong> {CORPORATE_CONTACT.plantLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  <span><strong>Oficina:</strong> {CORPORATE_CONTACT.officeBogota}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00B96B] shrink-0" />
                  Envío directo al WhatsApp oficial
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00B96B] hover:bg-[#009E5B] active:bg-[#00874E] rounded-md transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar a WhatsApp</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
