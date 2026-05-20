# Hito Studio — Landing page

Sitio estático. 2 páginas + 1 CSS + 1 imagen.

## Estructura

```
publish/
├── index.html              # Landing (home)
├── servicios.html          # Página de servicios
├── hito-site.css           # Estilos compartidos
└── assets/
    └── bea-casas-mockup.png   # Mockup featured en el hero
```

## Cómo publicar

Es HTML estático. Sirve cualquier hosting de archivos planos:

- **Vercel / Netlify / Cloudflare Pages**: arrastra la carpeta `publish/` o conecta el repo. Sin build step.
- **GitHub Pages**: push a la rama `gh-pages` o configura `main /publish` como root.
- **Nginx / Apache**: copia el contenido de `publish/` al `webroot`.

## Fuentes

Cargan desde Google Fonts en el `<head>` de cada HTML:

- Archivo (400, 500, 600, 700, 800, 900)
- JetBrains Mono (400, 500)

## Notas para el dev

- El sticky-nav cambia de borde al hacer scroll (script inline al final del body).
- El reloj de Madrid en la barra superior se actualiza cada 30s con `Intl.DateTimeFormat` (timezone `Europe/Madrid`).
- El marquee usa `@keyframes scroll` infinito; respeta `prefers-reduced-motion`.
- Los links entre páginas son relativos (`index.html` ↔ `servicios.html`).
- El `meta description` está en cada HTML; revisa antes de indexar.

## Pendientes (si os queréis lucir)

- Open Graph + favicon
- Sitemap.xml + robots.txt
- Analytics (Plausible / Posthog)
- Formulario real en `#hablamos` (ahora es solo `mailto:`)
