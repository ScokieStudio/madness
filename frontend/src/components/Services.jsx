import { Syringe, Sparkles, ShieldCheck, Clock, Star } from "lucide-react";

const services = [
  {
    id: "tattoo",
    title: "Tatuajes",
    overline: "Tinta & Tradición",
    description:
      "Diseños personalizados, lettering, fineline, blackwork, realismo y old-school. Trabajamos sobre tu idea hasta que sea exactamente lo que querés llevar para siempre.",
    image:
      "https://images.pexels.com/photos/2134085/pexels-photo-2134085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    points: [
      "Diseño personalizado sin cargo",
      "Material descartable",
      "Tinta vegana premium",
    ],
  },
  {
    id: "piercing",
    title: "Piercings",
    overline: "Joyería & Estilo",
    description:
      "Lóbulo, helix, tragus, septum, navel, nostril y más. Joyería de titanio implant-grade y técnicas seguras de perforación con instrumental estéril.",
    image:
      "https://images.pexels.com/photos/13575093/pexels-photo-13575093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
    points: [
      "Titanio implant-grade",
      "Perforación con aguja",
      "Asesoramiento post-cuidado",
    ],
  },
];

const features = [
  { icon: ShieldCheck, label: "Higiene profesional" },
  { icon: Sparkles, label: "Joyería premium" },
  { icon: Syringe, label: "Material descartable" },
  { icon: Clock, label: "Turnos sin esperas" },
];

export default function Services() {
  return (
    <section
      id="servicios"
      data-testid="services-section"
      className="relative py-20 md:py-28 bg-[#E8DCC4] paper-texture"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="divider-star max-w-md mx-auto mb-6">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <p className="font-sub uppercase tracking-[0.3em] text-xs text-[#B73225] mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-heading uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl text-[#0A0A0A]">
            Nuestros servicios
          </h2>
          <p className="font-accent italic text-lg sm:text-xl text-[#0A0A0A]/70 mt-4 max-w-2xl mx-auto">
            Cada trazo, cada perforación: pensados, planeados y ejecutados con
            obsesión por el detalle.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((s) => (
            <article
              key={s.id}
              data-testid={`service-card-${s.id}`}
              className="bg-[#E8DCC4] border-2 border-[#0A0A0A] hard-shadow-lg overflow-hidden"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden border-b-2 border-[#0A0A0A]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#B73225] text-[#E8DCC4] border-2 border-[#0A0A0A] px-3 py-1">
                  <span className="font-sub uppercase tracking-widest text-xs">
                    {s.overline}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-heading uppercase text-3xl sm:text-4xl text-[#0A0A0A] mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-[#0A0A0A]/80 leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 font-sub uppercase tracking-wider text-sm text-[#0A0A0A]"
                    >
                      <span className="w-2 h-2 bg-[#B73225]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Features strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 border-2 border-[#0A0A0A] bg-[#0A0A0A] gap-px">
          {features.map((f, idx) => (
            <div
              key={idx}
              data-testid={`feature-${idx}`}
              className="bg-[#E8DCC4] py-6 px-4 flex flex-col items-center gap-3 text-center"
            >
              <f.icon className="w-7 h-7 text-[#B73225]" />
              <span className="font-sub uppercase tracking-widest text-xs sm:text-sm text-[#0A0A0A]">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
