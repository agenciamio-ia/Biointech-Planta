/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import { CORPORATE_CONTACT } from '../data/plantData';

export const ServicesFormSection: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const waText = `*SOLICITUD DE SERVICIOS BIOINTECH*%0A%0A` +
      `*Nombre:* ${encodeURIComponent(formData.name)}%0A` +
      `*Empresa:* ${encodeURIComponent(formData.company || 'No especificada')}%0A` +
      `*Correo:* ${encodeURIComponent(formData.email)}%0A` +
      `*Teléfono:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Servicio Requerido:* ${encodeURIComponent(formData.service)}%0A` +
      `*Ubicación:* ${encodeURIComponent(formData.location)}%0A` +
      `*Mensaje:* ${encodeURIComponent(formData.message || 'Solicitud de asesoría técnica directa.')}`;

    const waUrl = `https://api.whatsapp.com/send?phone=+573112888995&text=${waText}`;

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="solicitud" className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Información de Contacto Oficial (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#062754]">
              <span className="w-2 h-2 rounded-full bg-[#00B96B]"></span>
              <span>Canal de Atención Institucional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062754] tracking-tight leading-tight">
              Solicitud de Servicios Biointech
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Atendemos de manera inmediata a operadores petroleros, compañías del sector energético, minero e industrial. Ingrese los detalles de su requerimiento o comuníquese a través de nuestros canales directos.
            </p>

            {/* Tarjetas de Presencia Oficial */}
            <div className="space-y-4 pt-2">
              {/* Oficinas en Bogotá */}
              <div className="p-4 bg-white rounded-lg border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-slate-100 text-[#062754] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Oficinas en Bogotá – Colombia
                  </div>
                  <div className="text-sm font-bold text-[#062754] mt-0.5">
                    OFICINA, Bogotá Sabana Norte
                  </div>
                </div>
              </div>

              {/* Planta de Operaciones */}
              <div className="p-4 bg-white rounded-lg border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-emerald-50 text-[#00B96B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#00B96B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Planta de Operaciones
                  </div>
                  <div className="text-sm font-bold text-[#062754] mt-0.5">
                    Planta Guayacán • Casanare, Colombia
                  </div>
                </div>
              </div>

              {/* Correo Electrónico */}
              <div className="p-4 bg-white rounded-lg border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-slate-100 text-[#062754] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#062754]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Correo Electrónico
                  </div>
                  <a
                    href={`mailto:${CORPORATE_CONTACT.email}`}
                    className="text-sm font-bold text-[#062754] hover:text-[#00B96B] transition-colors mt-0.5 block"
                  >
                    {CORPORATE_CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Línea Telefónica & WhatsApp (DESTACADA Y MÁS GRANDE) */}
              <div className="p-5 bg-gradient-to-r from-[#E8F8EE] to-[#DCFCE7] rounded-xl border-2 border-[#00B96B]/40 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-full bg-[#008542] text-white shrink-0 shadow-xs">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#008542] uppercase tracking-wider">
                      Línea Telefónica &amp; WhatsApp Directo
                    </div>
                    <a
                      href={CORPORATE_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl sm:text-3xl font-black text-[#062754] hover:text-[#008542] transition-colors tracking-tight block mt-0.5"
                    >
                      311 288 8995
                    </a>
                  </div>
                </div>
                <a
                  href={CORPORATE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center justify-center p-3 rounded-full bg-[#008542] hover:bg-[#006e36] text-white transition-transform hover:scale-105 shadow-xs"
                  title="Chatear por WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                </a>
              </div>
            </div>

            {/* Botón WhatsApp Asesoría Directa */}
            <div className="pt-2">
              <a
                href={CORPORATE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 text-sm font-bold text-white bg-[#008542] hover:bg-[#006030] active:bg-[#004d26] rounded-md transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chatear por WhatsApp (Asesoría Directa)</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Formulario con Estilo de Web de Servicios (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-md p-6 sm:p-8">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h3 className="text-xl font-bold text-[#062754] tracking-tight">
                Formulario: Solicitud de Servicios Biointech
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                La información registrada se canalizará de manera inmediata al WhatsApp oficial (+57 311 288 8995).
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#00B96B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-[#062754]">
                  ¡Solicitud Enviada a WhatsApp!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Se ha generado la conversación directa con nuestro asesor en WhatsApp con los datos suministrados. También puede continuar escribiéndonos a <strong className="text-slate-800">{CORPORATE_CONTACT.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#062754] hover:bg-[#082F62] rounded-md transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      id="form-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-company" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1.5">
                      Empresa / Operadora *
                    </label>
                    <input
                      id="form-company"
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Ecopetrol / Operadora Llanos"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      id="form-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@empresa.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="form-phone"
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
                    <label htmlFor="form-service" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1.5">
                      Línea de Servicio en Planta *
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all font-medium text-slate-800"
                    >
                      <option value="Biorremediación">Biorremediación de Lodos y Suelos</option>
                      <option value="Tratamiento de Aguas">Tratamiento de Aguas Industriales</option>
                      <option value="Fitorremediación y Dilución Bureal">Fitorremediación y Dilución Bureal</option>
                      <option value="Deshidratación de lodos">Deshidratación de Lodos y Geocontenedores</option>
                      <option value="Unidad UTC">Unidad UTC (Termocentrifugado)</option>
                      <option value="Gestión Integral de Residuos">Gestión Integral y Valorización RESPEL</option>
                      <option value="Operación Integral Planta Guayacán">Operación Integral en Planta Guayacán</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-location" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1.5">
                      Zona o Bloque de Operación
                    </label>
                    <input
                      id="form-location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Casanare / Cuenca Llanos"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold text-[#062754] uppercase tracking-wider mb-1.5">
                    Detalles del Desafío Ambiental
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describa el tipo de matriz, caudal, volúmenes de lodos o condiciones del sitio..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B96B] focus:border-transparent transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#00B96B] shrink-0" />
                    <span>Respaldo confidencial y normativo de Biointech SAS.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#00B96B] hover:bg-[#009E5B] active:bg-[#00874E] rounded-md transition-all shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#91F35E]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar a WhatsApp (+57 311 288 8995)</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
