import { Instagram, Star } from "lucide-react";
import lucasImg from "@/assets/Lucas.webp";
import camilaImg from "@/assets/Camila.webp";
import nicoImg from "@/assets/Nico.webp";

const ARTISTS = [
  {
    name: "Lucas Méndez",
    role: "Tatuador · Old School / Color",
    bio: "Especialista en tradicional americano y neo-tradicional. Más de 10 años marcando piel.",
    image: lucasImg,
    ig: "madness.tattoo.piercing",
  },
  {
    name: "Camila Ríos",
    role: "Tatuadora · Fineline / Lettering",
    bio: "Trazos finos, frases y minimal. Diseños delicados con identidad propia.",
    image: camilaImg,
    ig: "madness.tattoo.piercing",
  },
  {
    name: "Nico Torres",
    role: "Piercer Certificado",
    bio: "Joyería de titanio implant-grade, perforaciones seguras y asesoramiento personalizado.",
    image: nicoImg,
    ig: "madness.tattoo.piercing",
  },
];

export default function Artists() {
  return (
    <section
      id="artistas"
      data-testid="artists-section"
      className="relative py-20 md:py-28 bg-[#E8DCC4] paper-texture"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-sub uppercase tracking-[0.3em] text-sm text-[#B73225] mb-3">
            La banda
          </p>
          <h2 className="font-heading uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl text-[#0A0A0A]">
            Nuestros Artistas
          </h2>
          <p className="font-sub italic text-lg sm:text-xl text-[#0A0A0A] mt-4 max-w-2xl mx-auto">
            Gente que ama el oficio. Profesionales con estilo, trayectoria y
            obsesión por la calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTISTS.map((a, idx) => (
            <article
              key={idx}
              data-testid={`artist-card-${idx}`}
              className="bg-[#E8DCC4] border-2 border-[#0A0A0A] hard-shadow group"
            >
              {/* Wanted poster header */}
              <div className="bg-[#B73225] text-[#E8DCC4] border-b-2 border-[#0A0A0A] px-4 py-2 flex items-center justify-between">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-heading uppercase tracking-widest text-xs">
                  Madness Crew
                </span>
                <Star className="w-4 h-4 fill-current" />
              </div>

              <div className="relative h-72 overflow-hidden border-b-2 border-[#0A0A0A]">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover gallery-img"
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading uppercase text-2xl text-[#0A0A0A] leading-tight">
                  {a.name}
                </h3>
                <p className="font-sub uppercase tracking-widest text-xs text-[#B73225] mt-1">
                  {a.role}
                </p>
                <p className="font-body text-sm text-[#0A0A0A]/80 mt-4">
                  {a.bio}
                </p>

                <a
                  data-testid={`artist-ig-${idx}`}
                  href={`https://www.instagram.com/${a.ig}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-sub uppercase tracking-widest text-xs text-[#0A0A0A] border-b-2 border-[#0A0A0A] pb-1 hover:text-[#B73225] hover:border-[#B73225] transition-colors"
                >
                  <Instagram className="w-4 h-4" />@{a.ig}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
