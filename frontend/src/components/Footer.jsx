import { Instagram, MapPin, Clock, MessageCircle, Star } from "lucide-react";
import { BRAND, CONTACT, NAV } from "../lib/constants";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0A0A0A] text-[#E8DCC4] grain-overlay border-t-4 border-[#B73225]"
    >
      {/* Marquee */}
      <div className="border-b-2 border-[#E8DCC4] py-4 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track font-heading uppercase text-2xl sm:text-3xl text-[#E8DCC4]">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                Tradición · Arte · Piel
                <Star className="w-5 h-5 fill-[#B73225] text-[#B73225]" />
                Madness Tattoo &amp; Piercing
                <Star className="w-5 h-5 fill-[#B73225] text-[#B73225]" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 border-2 border-[#E8DCC4] bg-[#B73225] overflow-hidden">
                <img
                  src={BRAND.logoUrl}
                  alt="Madness logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-none">
                <div className="font-heading uppercase text-3xl">Madness</div>
                <div className="font-sub uppercase tracking-[0.25em] text-xs text-[#B73225]">
                  Tattoo &amp; Piercing
                </div>
              </div>
            </div>
            <p className="font-accent italic text-lg text-[#E8DCC4]/80 max-w-md">
              "Lo que te marca, te define." Estudio de tatuajes y piercings en
              Quilmes Centro.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-sub uppercase tracking-[0.25em] text-xs text-[#B73225] mb-4">
              Menú
            </div>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    data-testid={`footer-nav-${n.id}`}
                    onClick={() => scrollTo(n.id)}
                    className="font-sub uppercase tracking-widest text-sm text-[#E8DCC4] hover:text-[#B73225] transition-colors"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-sub uppercase tracking-[0.25em] text-xs text-[#B73225] mb-4">
              Encontranos
            </div>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#B73225]" />
                {CONTACT.address}
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#B73225]" />
                {CONTACT.hours}
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4 h-4 mt-0.5 text-[#B73225]" />
                <a
                  data-testid="footer-instagram"
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B73225] transition-colors"
                >
                  @{CONTACT.instagram}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 text-[#B73225]" />
                <a
                  data-testid="footer-whatsapp"
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B73225] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E8DCC4]/20 flex flex-col sm:flex-row items-center justify-center gap-3 font-sub uppercase tracking-widest text-[10px] text-[#E8DCC4]/60">
          <span>© {new Date().getFullYear()} Madness Tattoo &amp; Piercing · Todos los derechos reservados - Hecho con <span className="text-primary">♥</span> por <a href="https://www.scokiestudio.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline">ScokieStudio Design</a></span>
        </div>
      </div>
    </footer>
  );
}
