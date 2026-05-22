import { ArrowDown, Star, MapPin } from "lucide-react";
import { BRAND, CONTACT } from "../lib/constants";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative min-h-screen pt-20 md:pt-24 bg-[#B73225] text-[#E8DCC4] overflow-hidden grain-overlay"
    >
      {/* Subtle flash pattern overlay (decorative SVG) */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><g fill='none' stroke='%23000' stroke-width='1.5' opacity='0.6'><path d='M40 100c0-20 20-40 60-40s60 20 60 40-20 40-60 40-60-20-60-40z'/><path d='M100 60v80M60 100h80'/><circle cx='100' cy='100' r='8'/></g></svg>\")",
          backgroundSize: "240px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-4 h-4 fill-[#E8DCC4]" />
              <span className="font-sub uppercase tracking-[0.3em] text-xs sm:text-sm">
                Estudio · Est. {BRAND.est}
              </span>
              <Star className="w-4 h-4 fill-[#E8DCC4]" />
            </div>

            <h1
              data-testid="hero-title"
              className="font-heading uppercase leading-[0.9] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Tradición
              <br />
              <span className="text-outline-cream">&amp; Arte</span>
              <br />
              en tu piel
            </h1>

            <p className="mt-8 font-body text-base sm:text-lg max-w-xl text-[#E8DCC4]/90">
              Tatuajes y piercings hechos con pasión, higiene profesional y
              respeto por el oficio. Más de una década marcando historias en{" "}
              <span className="font-accent italic text-[#E8DCC4]">
                Quilmes Centro
              </span>
              .
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                data-testid="hero-cta-reserve"
                onClick={() => scrollTo("contacto")}
                className="btn-vintage btn-vintage-cream font-sub uppercase tracking-widest text-sm bg-[#0A0A0A] text-[#E8DCC4] border-2 border-[#E8DCC4] px-7 py-4 hard-shadow-cream"
              >
                Reservá tu turno →
              </button>
              <button
                data-testid="hero-cta-gallery"
                onClick={() => scrollTo("galeria")}
                className="btn-vintage btn-vintage-cream font-sub uppercase tracking-widest text-sm bg-transparent text-[#E8DCC4] border-2 border-[#E8DCC4] px-7 py-4 hard-shadow-cream"
              >
                Ver galería
              </button>
            </div>

            <div className="mt-12 flex items-center gap-3 text-[#E8DCC4]/90">
              <MapPin className="w-4 h-4" />
              <span className="font-sub text-xs sm:text-sm tracking-widest uppercase">
                {CONTACT.address} · {CONTACT.hours}
              </span>
            </div>
          </div>

          {/* Right: badge / logo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal">
            <div className="relative">
              <div className="absolute -inset-3 bg-[#0A0A0A]" />
              <div className="relative bg-[#B73225] border-2 border-[#E8DCC4] p-6 sm:p-10">
                <img
                  src={BRAND.logoUrl}
                  alt="Madness Tattoo & Piercing"
                  className="w-64 sm:w-80 md:w-96 h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#E8DCC4] text-[#0A0A0A] border-2 border-[#0A0A0A] px-4 py-2 hard-shadow rotate-3">
                <div className="font-heading text-xl uppercase leading-none">
                  Est.
                </div>
                <div className="font-accent italic text-sm">Quilmes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        data-testid="hero-scroll-down"
        onClick={() => scrollTo("servicios")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#E8DCC4] animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>

      {/* Marquee */}
      <div className="relative z-10 border-t-2 border-b-2 border-[#E8DCC4] bg-[#0A0A0A] py-4 mt-8">
        <div className="marquee">
          <div className="marquee-track font-heading uppercase text-2xl sm:text-3xl text-[#E8DCC4]">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                Madness Tattoo &amp; Piercing
                <Star className="w-5 h-5 fill-[#B73225] text-[#B73225]" />
                Tradición &amp; Arte
                <Star className="w-5 h-5 fill-[#B73225] text-[#B73225]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
