import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { BRAND, NAV, CONTACT } from "../lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-[#E8DCC4]" : "bg-[#E8DCC4]/95"
        } border-b-4 border-[#0A0A0A]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <button
          data-testid="logo-button"
          onClick={() => scrollTo("inicio")}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            <img
              src={BRAND.navLogoUrl}
              alt="Madness logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-left leading-none">
            <div className="font-heading text-lg md:text-xl text-[#0A0A0A] tracking-tight uppercase">
              Madness
            </div>
            <div className="font-sub text-[10px] md:text-xs tracking-[0.25em] text-[#B73225] uppercase">
              Tattoo & Piercing
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="font-sub uppercase tracking-widest text-sm text-[#0A0A0A] hover:text-[#B73225] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            data-testid="header-instagram"
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A0A0A] hover:text-[#B73225] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            data-testid="header-reserve-btn"
            onClick={() => scrollTo("contacto")}
            className="btn-vintage font-sub uppercase tracking-widest text-sm bg-[#B73225] text-[#E8DCC4] border-2 border-[#0A0A0A] hard-shadow px-5 py-2"
          >
            Reservar Turno
          </button>
        </nav>

        {/* Mobile menu */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border-2 border-[#0A0A0A] bg-[#E8DCC4]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-[#0A0A0A] bg-[#E8DCC4]">
          <div className="px-4 py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => scrollTo(item.id)}
                className="font-sub uppercase tracking-widest text-base text-left text-[#0A0A0A] py-2 border-b border-[#0A0A0A]/20"
              >
                {item.label}
              </button>
            ))}
            <button
              data-testid="mobile-reserve-btn"
              onClick={() => scrollTo("contacto")}
              className="btn-vintage font-sub uppercase tracking-widest text-sm bg-[#B73225] text-[#E8DCC4] border-2 border-[#0A0A0A] hard-shadow px-5 py-3 mt-2"
            >
              Reservar turno
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
