# TLD Technologies — Landing Page

Landing page construida con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**,
basada en la identidad del logo: fondo oscuro, acentos plateados metálicos y
verde militar como color de marca.

## Cómo correrla localmente

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx      # fuentes (Space Grotesk, Inter, JetBrains Mono) y metadata
  page.tsx         # ensambla las secciones
  globals.css       # tokens de color, fondo tipo "plano", texto plateado
components/
  Nav.tsx
  Hero.tsx
  StructureMark.tsx # firma visual: líneas de plano que se dibujan solas
  Pillars.tsx        # Minimalista / Moderno / Atemporal
  Scale.tsx           # panel "Hoy startup" vs "Mañana grupo global"
  Services.tsx
  CTA.tsx
  Footer.tsx
```

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#0A0B09` | fondo base |
| `surface` | `#12140D` | superficies elevadas |
| `military-700` | `#3E4A2E` | verde militar, acento principal |
| `military-500` | `#6B7F4A` | verde militar claro, hover |
| `silver-300` | `#E8E9E6` | texto plateado / titulares |
| `ink-400` | `#8B8F84` | texto secundario |

## Reemplazar el logo real

El header y el footer usan el texto "TLD" con un degradé plateado
(`.silver-text-static` en `globals.css`) como placeholder tipográfico.
Para usar el archivo de logo real (PNG/SVG), reemplazá el bloque de texto en
`components/Nav.tsx` y `components/Footer.tsx` por una etiqueta `<Image />`
apuntando al archivo en `/public`.

## Notas

- Las fuentes se cargan vía `next/font/google`, así que el primer build
  necesita acceso a internet para descargarlas (se cachean localmente después).
- Se respeta `prefers-reduced-motion` en toda la página.
- Los estados de foco de teclado están definidos explícitamente en `globals.css`.
