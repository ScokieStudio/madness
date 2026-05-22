import { useState } from "react";
import { Phone, MapPin, Clock, Instagram, MessageCircle, Star } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "../lib/constants";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    service: "Tatuaje",
    size: "Pequeño",
    bodyPart: "",
    details: "",
    date: "",
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.details.trim()) {
      toast.error("Por favor completá tu nombre y los detalles.");
      return;
    }

    const msg =
      `¡Hola Madness! Quiero reservar un turno.%0A%0A` +
      `*Nombre:* ${encodeURIComponent(form.name)}%0A` +
      `*Servicio:* ${encodeURIComponent(form.service)}%0A` +
      (form.service === "Tatuaje"
        ? `*Tamaño aprox.:* ${encodeURIComponent(form.size)}%0A`
        : "") +
      (form.bodyPart
        ? `*Zona del cuerpo:* ${encodeURIComponent(form.bodyPart)}%0A`
        : "") +
      (form.date
        ? `*Fecha tentativa:* ${encodeURIComponent(form.date)}%0A`
        : "") +
      `*Detalles:* ${encodeURIComponent(form.details)}`;

    const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${msg}`;
    window.open(url, "_blank");
    toast.success("Abriendo WhatsApp para enviar tu reserva...");
  };

  return (
    <section
      id="contacto"
      data-testid="contact-section"
      className="relative py-20 md:py-28 bg-[#B73225] text-[#E8DCC4] grain-overlay"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sub uppercase tracking-[0.3em] text-xs mb-3">
            Reservá tu turno
          </p>
          <h2 className="font-heading uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
            Contacto
          </h2>
          <p className="font-accent italic text-lg sm:text-xl text-[#E8DCC4]/80 mt-4 max-w-2xl mx-auto">
            Completá el formulario y te abrimos un chat de WhatsApp con tu pedido
            listo para enviar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <form
            data-testid="contact-form"
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 bg-[#E8DCC4] text-[#0A0A0A] border-2 border-[#0A0A0A] hard-shadow p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className="font-sub uppercase tracking-widest text-xs block mb-2">
                  Nombre y Apellido *
                </label>
                <input
                  data-testid="input-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full bg-[#E8DCC4] border-2 border-[#0A0A0A] px-4 py-3 font-body text-[#0A0A0A] input-vintage"
                  placeholder="Ej. María González"
                  required
                />
              </div>

              <div>
                <label className="font-sub uppercase tracking-widest text-xs block mb-2">
                  Servicio
                </label>
                <select
                  data-testid="select-service"
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="w-full bg-[#E8DCC4] border-2 border-[#0A0A0A] px-4 py-3 font-body text-[#0A0A0A] input-vintage"
                >
                  <option>Tatuaje</option>
                  <option>Piercing</option>
                  <option>Consulta de diseño</option>
                </select>
              </div>

              {form.service === "Tatuaje" ? (
                <div>
                  <label className="font-sub uppercase tracking-widest text-xs block mb-2">
                    Tamaño aprox.
                  </label>
                  <select
                    data-testid="select-size"
                    value={form.size}
                    onChange={(e) => update("size", e.target.value)}
                    className="w-full bg-[#E8DCC4] border-2 border-[#0A0A0A] px-4 py-3 font-body text-[#0A0A0A] input-vintage"
                  >
                    <option>Pequeño (hasta 5cm)</option>
                    <option>Mediano (5-15cm)</option>
                    <option>Grande (15-30cm)</option>
                    <option>Muy grande / brazo completo</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="font-sub uppercase tracking-widest text-xs block mb-2">
                    Zona
                  </label>
                  <input
                    data-testid="input-bodypart"
                    type="text"
                    value={form.bodyPart}
                    onChange={(e) => update("bodyPart", e.target.value)}
                    className="w-full bg-[#E8DCC4] border-2 border-[#0A0A0A] px-4 py-3 font-body text-[#0A0A0A] input-vintage"
                    placeholder="Ej. Helix, septum, lóbulo"
                  />
                </div>
              )}

              {form.service === "Tatuaje" && (
                <div>
                  <label className="font-sub uppercase tracking-widest text-xs block mb-2">
                    Zona del cuerpo
                  </label>
                  <input
                    data-testid="input-bodypart-tattoo"
                    type="text"
                    value={form.bodyPart}
                    onChange={(e) => update("bodyPart", e.target.value)}
                    className="w-full bg-[#E8DCC4] border-2 border-[#0A0A0A] px-4 py-3 font-body text-[#0A0A0A] input-vintage"
                    placeholder="Ej. Antebrazo, costillas"
                  />
                </div>
              )}

              <div>
                <label className="font-sub uppercase tracking-widest text-xs block mb-2">
                  Fecha tentativa
                </label>
                <input
                  data-testid="input-date"
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="w-full bg-[#E8DCC4] border-2 border-[#0A0A0A] px-4 py-3 font-body text-[#0A0A0A] input-vintage"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-sub uppercase tracking-widest text-xs block mb-2">
                  Contanos tu idea *
                </label>
                <textarea
                  data-testid="input-details"
                  value={form.details}
                  onChange={(e) => update("details", e.target.value)}
                  rows={5}
                  className="w-full bg-[#E8DCC4] border-2 border-[#0A0A0A] px-4 py-3 font-body text-[#0A0A0A] input-vintage resize-none"
                  placeholder="Describí tu idea, estilo, referencias..."
                  required
                />
              </div>
            </div>

            <button
              data-testid="whatsapp-submit"
              type="submit"
              className="btn-vintage mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-[#E8DCC4] border-2 border-[#0A0A0A] font-sub uppercase tracking-widest text-sm px-8 py-4 hard-shadow-red"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar por WhatsApp
            </button>
            <p className="mt-4 font-accent italic text-sm text-[#0A0A0A]/70">
              * Al enviar se abrirá WhatsApp con tu mensaje listo. No guardamos
              tus datos en ningún servidor.
            </p>
          </form>

          {/* Info */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A0A0A] text-[#E8DCC4] border-2 border-[#E8DCC4] hard-shadow-cream p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-4 h-4 fill-[#B73225] text-[#B73225]" />
                <span className="font-sub uppercase tracking-[0.25em] text-xs">
                  El estudio
                </span>
                <Star className="w-4 h-4 fill-[#B73225] text-[#B73225]" />
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#B73225] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-sub uppercase tracking-widest text-xs text-[#E8DCC4]/60">
                      Dirección
                    </div>
                    <div className="font-body text-base">{CONTACT.address}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#B73225] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-sub uppercase tracking-widest text-xs text-[#E8DCC4]/60">
                      Horarios
                    </div>
                    <div className="font-body text-base">{CONTACT.hours}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Instagram className="w-5 h-5 text-[#B73225] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-sub uppercase tracking-widest text-xs text-[#E8DCC4]/60">
                      Instagram
                    </div>
                    <a
                      data-testid="info-instagram-link"
                      href={CONTACT.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-base hover:text-[#B73225] transition-colors"
                    >
                      @{CONTACT.instagram}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#B73225] mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-sub uppercase tracking-widest text-xs text-[#E8DCC4]/60">
                      WhatsApp directo
                    </div>
                    <a
                      data-testid="info-whatsapp-link"
                      href={`https://wa.me/${CONTACT.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-base hover:text-[#B73225] transition-colors"
                    >
                      Chatear ahora
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="border-2 border-[#E8DCC4] hard-shadow-cream overflow-hidden">
              <iframe
                data-testid="map-iframe"
                title="Madness Tattoo & Piercing - Mapa"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  CONTACT.mapsQuery
                )}&output=embed`}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
