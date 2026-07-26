# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Visitantes principales: dueños de negocio y pymes que evalúan contratar servicios freelance (ecommerce, software a medida, acompañamiento técnico).

Audiencia secundaria: tech leads y CTOs que evalúan sumar a Franco al equipo como desarrollador o líder.

Situación típica: llegan desde referidos, búsqueda o redes y necesitan entender qué ofrece, cómo trabaja y cómo iniciar una conversación.

## Product Purpose

Portfolio personal y punto de contacto comercial de Franco Heredia. Presenta experiencia, proyectos reales y servicios freelance con un proceso claro.

Éxito: que el visitante inicie contacto por WhatsApp o email para charlar un proyecto.

## Positioning

Socio freelance accesible: proceso transparente, acompañamiento end-to-end y entrega con autonomía para el cliente (no solo código, sino guía y capacitación cuando aplica).

## Operating Context

- Sitio estático SPA (React + Vite) desplegado en GitHub Pages (`https://franheredia.github.io/portfolio-web`).
- Ruta actual: `/` (home completa). No hay página `/servicios` por ahora; los servicios viven solo en la home (CTAs + modal).
- Flujo principal en home: hero → estadísticas → CTAs de servicio (modal con pasos) → proyectos → habilidades → contacto (WhatsApp, email, LinkedIn con confirmación previa).
- Idioma: español en todo el sitio; sin versión en inglés por ahora.
- Comandos de desarrollo: `npm run dev`, `npm run build`, `npm run deploy`.

## Capabilities and Constraints

**Funcionalidad confirmada**

- Presentación de perfil, stats, proyectos destacados y skills (soft + técnicas).
- Tres servicios con modal de proceso: tiendas online, software a medida, sumarse al equipo.
- Enlaces de contacto reales con diálogo de confirmación.
- Diseño responsive con breakpoint `lg` para layout de proyectos y modales.

**Restricciones de contenido**

- Stats, proyectos, servicios y datos de contacto en el repo son hechos reales; no inventar ni modificar sin aprobación explícita de Franco.
- No fabricar testimonios, clientes, métricas o casos no respaldados.

**Restricción de alcance**

- No crear página `/servicios` como superficie propia por ahora. Los servicios se presentan únicamente en la home.

## Brand Commitments

- Nombre: Franco Heredia.
- Voz: profesional, cercana, orientada a acompañamiento y claridad de proceso.
- Identidad factual en copy: desarrollador full stack freelance, técnico en programación, licenciado en teatro; experiencia en liderazgo y comunicación.
- Contacto público: WhatsApp +54 9 351 2292543, franheredia.ov@gmail.com, linkedin.com/in/francoheredia.

## Evidence on Hand

**Contenido real en repo**

- Foto de perfil: `public/profile.png`
- Proyectos con URLs y capturas: Toyota Argentina, Distribuidora Fusion, Cresciente Teoría Musical, Corralón Panichelli (Tienda Nube), Kilimo — ver `src/data/projects.ts` y `public/projects/`
- Servicios y pasos de proceso: `src/data/services.ts`
- Stats: 8 años de experiencia, 12 proyectos completados, 10 clientes satisfechos — `src/data/profile.ts`

**Ausencias que no deben inventarse**

- Testimonios de clientes
- Casos de estudio extendidos más allá de las descripciones actuales
- Pricing, licencias o claims de rendimiento no documentados

## Product Principles

1. **Contacto primero** — Cada superficie debe facilitar que un visitante calificado inicie una conversación real, no solo admire el diseño.
2. **Proceso visible** — Mostrar cómo se trabaja (pasos, acompañamiento, entrega) antes de pedir confianza ciega.
3. **Hechos verificables** — Proyectos, números y canales de contacto deben corresponder a trabajo real; nada fabricado.
4. **Español claro** — Comunicación directa para el mercado local; sin i18n hasta que se decida lo contrario.
5. **Autonomía del cliente** — Donde aplique (ecommerce, documentación, capacitación), dejar explícito que el cliente puede operar sin dependencia permanente.

## Accessibility & Inclusion

Sin requisito de estándar específico confirmado por el usuario. El sitio incluye señales básicas de accesibilidad (landmarks, `aria-labelledby`, teclado en CTAs); mejoras futuras deben validarse con el usuario antes de asumir WCAG u otro nivel.
