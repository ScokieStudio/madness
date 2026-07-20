import logoUrl from "@/assets/LogoMadness2.png";
import navLogoUrl from "@/assets/LogoMadnessrojo.png";

// Brand & contact info
export const BRAND = {
  name: "Madness Tattoo & Piercing",
  short: "Madness",
  est: "Quilmes Centro",
  // Actual badge/logo (cream MADNESS on transparent/black) — used in hero & footer
  logoUrl,
  // Logo variant used in the navbar (red on black)
  navLogoUrl,
};

export const CONTACT = {
  address: "Alsina 311, Quilmes Centro",
  hours: "Lunes a Sábados · 11 a 19 hs",
  instagram: "madness.tattoo.piercing",
  instagramUrl: "https://www.instagram.com/madness.tattoo.piercing/",
  // WhatsApp number in international format (Argentina). Change here when client provides real number.
  whatsappNumber: "5491157935182",
  mapsQuery: "Alsina 311, Quilmes, Buenos Aires, Argentina",
};

export const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "galeria", label: "Galería" },
  { id: "artistas", label: "Artistas" },
  { id: "contacto", label: "Contacto" },
];
