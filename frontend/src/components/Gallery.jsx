import { useState } from "react";
import { Star, X } from "lucide-react";

const WORKS = [
  {
    url: "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    label: "Tatuaje en proceso",
    cat: "tattoo",
  },
  {
    url: "https://images.pexels.com/photos/13575093/pexels-photo-13575093.jpeg?auto=compress&cs=tinysrgb&w=900",
    label: "Helix & lóbulo",
    cat: "piercing",
  },
  {
    url: "https://images.pexels.com/photos/2134085/pexels-photo-2134085.jpeg?auto=compress&cs=tinysrgb&w=900",
    label: "Color tradicional",
    cat: "tattoo",
  },
  {
    url: "https://images.pexels.com/photos/37023013/pexels-photo-37023013.jpeg?auto=compress&cs=tinysrgb&w=900",
    label: "Diseño en estudio",
    cat: "tattoo",
  },
  {
    url: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    label: "Estilo japonés",
    cat: "tattoo",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      id="galeria"
      data-testid="gallery-section"
      className="relative py-20 md:py-28 bg-[#0A0A0A] text-[#E8DCC4] grain-overlay"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="font-sub uppercase tracking-[0.3em] text-xs text-[#B73225] mb-3">
            Trabajos seleccionados
          </p>
          <h2 className="font-heading uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl">
            La Galería
          </h2>
          <p className="font-accent italic text-lg sm:text-xl text-[#E8DCC4]/70 mt-4 max-w-2xl mx-auto">
            Un puñado de obras recientes. Cada pieza tiene una historia detrás.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {WORKS.map((img, idx) => {
            const big = idx === 0;
            return (
              <button
                key={idx}
                data-testid={`gallery-item-${idx}`}
                onClick={() => setLightbox(img)}
                className={`group relative overflow-hidden border-2 border-[#E8DCC4] ${
                  big ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover gallery-img"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-[#B73225] text-[#E8DCC4] border border-[#0A0A0A] px-2 py-0.5">
                  <span className="font-sub uppercase tracking-widest text-[10px]">
                    {img.cat === "tattoo"
                      ? "Tattoo"
                      : img.cat === "piercing"
                      ? "Piercing"
                      : "Instagram"}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A]/85 border-t-2 border-[#E8DCC4] px-3 py-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-sub uppercase tracking-widest text-xs text-[#E8DCC4]">
                    {img.label}
                  </span>
                  <Star className="w-3 h-3 text-[#B73225] fill-[#B73225]" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          data-testid="gallery-lightbox"
          className="fixed inset-0 z-[60] bg-[#0A0A0A]/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            data-testid="lightbox-close"
            className="absolute top-6 right-6 text-[#E8DCC4] border-2 border-[#E8DCC4] p-2"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-3xl w-full border-2 border-[#E8DCC4]">
            <img
              src={lightbox.url}
              alt={lightbox.label}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#B73225] text-[#E8DCC4] px-4 py-2 border-t-2 border-[#E8DCC4] font-sub uppercase tracking-widest text-xs">
              {lightbox.label}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
