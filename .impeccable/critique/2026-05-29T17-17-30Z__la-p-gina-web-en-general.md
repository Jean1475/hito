---
target: la página web en general
total_score: 25
p0_count: 0
p1_count: 3
timestamp: 2026-05-29T17-17-30Z
slug: la-p-gina-web-en-general
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Topbar live-indicator y active nav funcionan bien; "Ver caso completo" promete pero no entrega |
| 2 | Match System / Real World | 3 | Lenguaje directo; jerga técnica (MVP, SaaS, sprint) es deliberada y correcta |
| 3 | User Control and Freedom | 2 | Links rotos en footer y CTAs que llevan a ancla en lugar de case study |
| 4 | Consistency and Standards | 3 | Sistema visual coherente; inconsistencia de "5 formas" vs 4 servicios reales |
| 5 | Error Prevention | 2 | Links placeholder en footer, LinkedIn, Calendar |
| 6 | Recognition Rather Than Recall | 3 | Navegación clara, servicios bien descritos |
| 7 | Flexibility and Efficiency | 2 | Sitio estático; ruta Diagnóstico es el único intake alternativo |
| 8 | Aesthetic and Minimalist Design | 3 | Sistema limpio; eyebrows en cada sección añaden ruido repetitivo |
| 9 | Error Recovery | 2 | Links rotos no tienen fallback |
| 10 | Help and Documentation | 2 | FAQ en servicios es bueno; team bios ausentes, LinkedIn roto |
| **Total** | | **25/40** | **Acceptable — mejoras significativas antes de escalar tráfico** |

## Anti-Patterns Verdict

LLM assessment: El sitio tiene personalidad real, no es AI slop genérico, pero tiene dos tells: (1) fondo --cream #F4F1E9 en la banda caliente-neutra AI monoculture 2026, (2) eyebrow en cada sección sin excepción — 4 en home, 6 en servicios. Lo que aleja del slop: sistema tipográfico comprometido, detalles arquitectónicos del hero, voz del copy genuinamente directa.

Deterministic scan: 0 hallazgos técnicos. Sin gradient text, sin glassmorphism. Los issues del eyebrow son semánticos, no sintácticos.

## Overall Impression

El sitio tiene craft real y una voz honesta. La promesa "No vendemos horas, vendemos hitos" es creíble porque el diseño la soporta. Pero el fondo crema y los eyebrows repetidos dicen "generado con IA" antes de que el copy pueda decir lo contrario. El mayor problema de conversión: una dirección Gmail para proyectos de 1.300€+ y links rotos en el footer — exactamente donde un founder técnico hace due diligence.

## What's Working

1. Voz del copy: "Enviamos a producción — no a Figma", "Embedded, no agencia", "Enviar > pulir". Sin buzzwords. Testimonial con detalles concretos.
2. Sistema tipográfico comprometido: Archivo 900 a clamp(56px,10vw,144px) con tracking -0.055em. Jerarquía display/body/mono con contraste real.
3. Detalles arquitectónicos del hero: coordenadas de Madrid, brackets de esquina, reloj en vivo, topbar con disponibilidad.

## Priority Issues

### [P1] Fondo crema — tell más visible de AI monoculture 2026
- --cream: #F4F1E9 cae en la banda caliente-neutra (L ~0.97, C ~0.02, hue ~85) que el 80% de landing pages AI usa. Token llamado literalmente "cream".
- Fix: True off-white a chroma 0 (oklch(0.97 0 0)), o comprometerse con --ink en el hero como ya existe en la CTA section.
- Command: /impeccable colorize

### [P1] Eyebrow en cada sección — patrón más reconocible de AI scaffolding
- Home: 4 eyebrows. Servicios: 6 eyebrows. Andamiaje visual de template.
- Fix: Conservar eyebrow solo en hero de cada página. Eliminar o transformar el resto.
- Command: /impeccable polish

### [P1] "5 formas de trabajar" vs 4 servicios reales
- Hero de servicios promete "Cinco formas" dos veces; hero-index dice "4 servicios"; la lista tiene 4 items.
- Fix: Añadir el quinto servicio (Embedded Engineering era el 5°?) o cambiar todo a "cuatro/4".
- Command: /impeccable clarify

### [P2] Links rotos: Calendar, LinkedIn, Read.cv -> #; "Ver caso completo" -> #trabajo
- Primeros puntos de due diligence de un founder técnico. Dead ends silenciosas.
- Fix: Conectar links reales o eliminar items del footer hasta tenerlos.
- Command: /impeccable harden

### [P2] Gmail como dirección principal de contacto
- hitomarketingstudio@gmail.com aparece 5 veces. Para proyectos desde 900€, los founders esperan dominio corporativo.
- Fix: Migrar a hola@hito.studio o similar.
- Command: /impeccable harden

## Persona Red Flags

Jordan (Founder por primera vez): Ve Gmail antes de leer copy. Click en "Ver caso completo" hace scroll, no navega. LinkedIn lleva a #.

Riley (Founder técnico): Lee "5 formas" → cuenta 4 → nota mental "no revisan su copy". Calendar → #. Casos con SVGs, sin links verificables.

Marcos (Founder técnico, Madrid, pre-seed): Los principios resuenan. Llega al CTA listo para escribir. El Gmail introduce fricción. El /diagnostico quiz no está en el nav principal.

## Minor Observations

- Nav y topbar copy-pasted en ambas páginas en lugar de shared components. Divergencia ya observable (#equipo vs /#equipo).
- work-card tiene cursor: pointer pero sin href ni role="button" — no navegable por teclado ni screen reader.
- prefers-reduced-motion implementado en marquee pero no en hover transitions de work-card.
- h6 en footer es semánticamente incorrecto para labels de sección.
- MadridClock necesita "use client" para funcionar (no visible en código revisado).
- Imagen /hito/assets/bea-casas-mockup.png: path con /hito/ sugiere basePath configurado.

## Questions to Consider

- ¿Qué pasa cuando un founder busca evidencia verificable de los proyectos? ¿Qué cambiaría si un caso de trabajo tuviera su propia página con brief, solución y resultado medible?
- La ruta /diagnostico con quiz de presupuesto es la feature de conversión más interesante, pero no aparece en el nav. ¿Es intencional?
- Si la promesa es "embedded, no agencia" — ¿dónde están las personas? Las fotos/bios del equipo son la evidencia más fuerte de que hay humanos reales detrás.
