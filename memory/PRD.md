# PRD — Madness Tattoo & Piercing · Landing

## Original problem statement
> "Crear una landing page de este estudio de tattoo usando de referencia las fotos que te anexo, para que veas el logo, las tipografias y los colores"

Branding references provided by user: vintage badge logo (cream MADNESS on solid brick-red), Americana tattoo aesthetic, Instagram grid screenshot of @madness.tattoo.piercing.

## User personas
- Persona A — "Cliente local que quiere tatuarse / perforarse": llega desde Instagram/Google, quiere ver trabajos, conocer al equipo, saber ubicación/horarios y reservar turno en 1 click.
- Persona B — "Curioso / scroller": navega la landing como portfolio, evalúa estilo del estudio.
- Persona C — "Dueño / staff de Madness": comparte el link en bio de IG, espera leads vía WhatsApp.

## Core requirements (static)
- Single-page landing en español (Argentina).
- Brand visual identity: rojo brick `#B73225` + crema `#E8DCC4` + negro `#0A0A0A`.
- Tipografía: Alfa Slab One (display), Oswald (sub), Work Sans (body), Cormorant Garamond (accent).
- Logo real provisto por el cliente.
- Frontend-only (sin backend, sin DB).
- Datos de contacto reales: **Alsina 311, Quilmes Centro · Lun-Sáb 11-19 hs · @madness.tattoo.piercing**.
- Reservas via WhatsApp (no formulario con DB).

## Architecture
- React + Tailwind + shadcn/ui + lucide-react + sonner (toasts).
- Estructura:
  - `src/App.js` → BrowserRouter + Toaster.
  - `src/pages/Landing.jsx` → composición de secciones.
  - `src/components/{Header,Hero,Services,Gallery,Artists,Contact,Footer}.jsx`
  - `src/lib/constants.js` → BRAND, CONTACT, NAV (incluye `whatsappNumber` editable).
- No backend modificado.

## What's been implemented (2026-05-22)
- [x] Header sticky con logo, nav desktop, menú móvil (Sheet manual), CTA "Reservar".
- [x] Hero a pantalla completa con logo Madness, headline 3-líneas (Tradición & Arte en tu piel), CTAs, dirección, marquee inferior.
- [x] Sección Servicios: 2 cards (Tatuajes / Piercings) + 4 features (higiene, joyería, descartable, sin esperas).
- [x] Galería bento de 6 piezas con lightbox y CTA a Instagram.
- [x] Sección Artistas: 3 cards estilo "wanted poster" con IG links.
- [x] Sección Contacto: formulario con servicio/tamaño/zona/fecha/detalles + envío vía `wa.me`, info del estudio (dirección, horarios, IG, WhatsApp) y mapa de Google embebido.
- [x] Footer con marquee, columnas (brand, menú, contacto) y copyright.
- [x] Validación custom con toasts (sonner) — `noValidate` en form para que la lógica JS dispare el toast.
- [x] Responsive mobile (testeado 375-390px).
- [x] `data-testid` en todos los elementos interactivos.

## Backlog (P0/P1/P2)
- **P1** — Reemplazar el número de WhatsApp placeholder (`5491158437299` en `src/lib/constants.js`) por el real del estudio.
- **P1** — Sustituir fotos stock por trabajos reales del estudio cuando estén disponibles.
- **P2** — Sección de testimonios / reviews de clientes.
- **P2** — Sección de FAQ (cuidados, edad mínima, métodos de pago).
- **P2** — SEO meta tags + Open Graph (preview en WhatsApp/IG cuando compartan link).
- **P2** — Botón flotante de WhatsApp persistente en mobile.
- **P3** — Captura de leads opcional con backend MongoDB si más adelante quieren guardar reservas.

## Next tasks
1. Pedir al cliente número real de WhatsApp y fotos reales del estudio.
2. Implementar P1 cuando lleguen los datos.
