---
name: Franco Heredia Portfolio
description: Escenario técnico oscuro con acento naranja señal para acción y contacto
colors:
  canvas-deep: "#030247"
  text-primary: "#f1f2f3"
  text-styled: "oklch(from #030247 0.8 calc(c * 0.4) h)"
  text-subtle: "rgb(241 242 243 / 55%)"
  accent-signal: "#e85a2b"
  accent-strong: "oklch(from #e85a2b 0.5 calc(c * 0.9) h)"
  accent-soft: "oklch(from #e85a2b 0.8 calc(c * 0.8) h)"
  tinted-highlight: "oklch(from #e85a2b 0.95 calc(c * 0.2) h)"
  surface-elevated: "rgb(255 255 255 / 8%)"
  surface-light: "#f1f2f3"
  on-surface-light: "#030247"
  on-accent: "#f1f2f3"
  overlay-scrim: "#0d0c38c8"
  border-subtle: "rgb(255 255 255 / 14%)"
typography:
  display:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2rem, 8vw, 4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  sm: "0.625rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section: "2.5rem"
components:
  cta-card:
    backgroundColor: "{colors.accent-signal}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
    padding: "1.5rem 1rem"
  cta-card-hover:
    backgroundColor: "{colors.accent-strong}"
  button-primary:
    backgroundColor: "{colors.accent-signal}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent-signal}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.accent-signal}"
    textColor: "{colors.on-accent}"
  social-link:
    backgroundColor: "transparent"
    textColor: "{colors.accent-signal}"
    rounded: "50%"
    size: "2.5rem"
  project-tag:
    backgroundColor: "transparent"
    textColor: "{colors.accent-signal}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.65rem"
---

# Design System: Franco Heredia Portfolio

## Overview

**Creative North Star: "El Escenario Técnico"**

El portfolio se comporta como un escenario oscuro donde el contenido ocupa el foco y el acento naranja funciona como señal de acción. La tipografía Montserrat en display uppercase transmite presencia profesional; Libre Franklin en cuerpo mantiene la lectura amable y accesible para visitantes no técnicos. Las superficies claras (tarjeta de perfil, modales) son el “escenario iluminado” sobre el fondo índigo profundo; las tarjetas semitransparentes mantienen la profundidad tonual sin competir con el hero.

La atmósfera es profesional, amable y accesible: contraste alto, jerarquía explícita y microinteracciones táctiles que invitan a explorar sin abrumar. El sistema rechaza estéticas genéricas de SaaS gris, gradientes decorativos sin función y uso del acento como mero adorno.

**Key Characteristics:**

- Fondo índigo profundo (#030247) como lienzo continuo del escenario
- Acento naranja señal (#e85a2b) reservado para CTAs, tags, links de acción y estados hover
- Contraste claro/oscuro entre tarjeta de perfil o modal (superficie clara) y cards sobre canvas (superficie elevada translúcida)
- Tipografía dual: Montserrat para títulos y labels; Libre Franklin para párrafos
- Interacción táctil con `scale()` y easing elástico en elementos clicables
- Profundidad por capas tonales en reposo; glow cálido al hover

## Colors

Paleta de escenario nocturno con un solo acento cálido para guiar decisiones y contacto.

### Primary

- **Naranja Señal** (#e85a2b): CTAs de servicio, botones primarios, tags de proyecto, iconos circulares de acción, títulos de sección en modales. Solo para acciones importantes y puntos de contacto.

### Secondary

- **Brasa Profunda** (oklch derivado de #e85a2b): hover de CTAs, botones primarios y links de contacto en modal. Intensifica la señal sin cambiar de matiz.

### Tertiary

- **Resplandor Suave** (oklch derivado de #e85a2b, `accent-soft`): fondos de fallback de imagen, hover suave del botón cerrar modal.
- **Destello Estadístico** (oklch derivado de #e85a2b, `tinted-highlight`): valores numéricos en stats; calidez sutil sobre el canvas oscuro.

### Neutral

- **Canvas Índigo** (#030247): fondo de página y texto sobre superficies claras.
- **Texto Principal** (#f1f2f3): títulos y copy de alto contraste sobre canvas.
- **Texto Teatral** (oklch derivado del canvas): descripciones, subtítulos y copy secundario; misma familia cromática que el fondo, más claro y menos saturado.
- **Texto Tenue** (rgb(241 242 243 / 55%)): labels de stats, años de proyecto, metadata.
- **Superficie Elevada** (rgb(255 255 255 / 8%)): project cards y skill badges sobre el canvas.
- **Superficie Clara** (#f1f2f3): profile card y paneles de modal.
- **Borde Fantasma** (rgb(255 255 255 / 14%)): contorno de cards oscuras.
- **Scrim Escenario** (#0d0c38c8): backdrop de modales con blur.

### Named Rules

**The Signal-Only Rule.** El acento naranja aparece en CTAs, contacto, tags y acciones interactivas. No usarlo para decoración de fondo, bordes masivos ni bloques enteros de contenido informativo.

**The Spotlight Card Rule.** Las superficies claras (#f1f2f3) se reservan para la identidad personal (profile card) y diálogos modales. El resto del contenido vive sobre capas translúcidas o el canvas.

## Typography

**Display Font:** Montserrat (con system-ui, sans-serif)
**Body Font:** Libre Franklin (con system-ui, sans-serif)

**Character:** Display contundente y escénico; cuerpo legible y cercano. La pareja equilibra autoridad técnica con tono amable para clientes no especializados.

### Hierarchy

- **Display** (800, clamp(2rem → 4rem), line-height 1, uppercase, letter-spacing -0.02em): titular hero “DESARROLLADOR / FREELANCE”.
- **Headline** (700, 2rem, line-height 1.2): títulos de sección (“Algunos de los proyectos…”, “Mis Habilidades”).
- **Title** (700, 1.35rem–1.5rem, line-height 1.3): nombres de proyecto, títulos de CTA, nombre en profile card.
- **Body** (400, 1rem, line-height 1.6): descripciones hero, pasos de servicio, copy de modal. Máximo ~36–48rem en mobile hero; ancho completo en desktop.
- **Label** (600, 0.75rem, letter-spacing 0.06em, uppercase): stats, tags de tecnología, labels de contacto.

### Named Rules

**The Stage Title Rule.** Los titulares de mayor jerarquía van en uppercase con Montserrat Black. No mezclar sentence case en display.

**The Body Warmth Rule.** Párrafos largos y explicativos siempre en Libre Franklin regular; Montserrat queda para encabezados y labels.

## Layout

Modelo de columna centrada en mobile; grid de dos columnas en hero desde 1024px (profile card fija ~260–320px + contenido fluido). Contenedor máximo 80rem (`$layout-max-width`) para proyectos y skills.

- **Body padding:** 1rem mobile; 1rem 2.5rem 2.5rem desde 480px.
- **Ritmo vertical:** gap 2.5rem entre secciones principales; 1rem–1.5rem entre elementos de grid.
- **Projects grid:** 1 columna → 3 columnas en lg; items featured ocupan span completo con layout horizontal en lg.
- **Skills grid:** 3 → 4 (sm) → 8 (lg) columnas; badges cuadrados aspect-ratio 1.
- **CTA cards:** stack vertical → 3 columnas iguales en lg.
- **Stats:** grid 3 columnas, max-width 28rem centrado en mobile; ancho completo en hero desktop.

## Elevation & Depth

Profundidad híbrida: capas tonales en reposo y resplandor cálido al interactuar. Las cards sobre canvas usan fondo translúcido + borde sutil + sombra difusa; al hover ganan glow accent y leve escala. Modales y profile card usan sombra hero más pronunciada sobre superficie opaca clara.

### Shadow Vocabulary

- **Elevated** (`0 8px 24px rgb(0 0 0 / 20%)`): project cards y skill badges en reposo.
- **Hero Card** (`0 1.25rem 3rem rgb(0 0 0 / 25%)`): profile card y panel modal.
- **Accent Glow** (`0 0 15px` tinted-highlight): hover en project cards y skill badges.

### Named Rules

**The Tonal-Glow Rule.** En reposo, la profundidad se comunica con tono y borde, no con sombras dramáticas. El glow accent aparece como respuesta al hover, no como decoración permanente.

**The Modal Stage Rule.** Modales usan scrim blur + panel claro elevado; nunca modales oscuros sobre canvas oscuro sin contraste suficiente.

## Shapes

Esquinas generosas en contenedores principales; pills y círculos para acciones secundarias compactas.

- **xl (2rem):** profile card, panel modal.
- **lg (1.25rem):** fotos de perfil, project cards horizontales.
- **md (1rem):** project cards verticales, skill badges, imágenes de proyecto.
- **sm (0.625rem):** CTAs, botones de diálogo, links de contacto en modal.
- **pill (9999px):** tags de tecnología.
- **circle (50%):** botones sociales, link externo de proyecto.

Bordes de 2px sólidos en acento para icon buttons outline; 1px sutil translúcido en cards oscuras.

## Components

Interacciones táctiles con escala y transición elástica; sensación de respuesta inmediata sin exagerar el movimiento.

### Buttons

- **Shape:** esquinas suaves (0.625rem); icon buttons circulares 2.5rem.
- **Primary:** fondo accent-signal, texto on-accent, borde 2px accent; padding 0.65rem 1.25rem en diálogos.
- **Secondary:** outline accent sobre transparente; hover invierte a fill accent.
- **Hover / Focus:** fondo accent-strong en primaries; scale(1.05–1.1) en CTAs e icon buttons; outline none con cambio de color/fondo visible.

### Chips

- **Style:** tags de proyecto — outline 2px accent, texto accent, fondo transparente, pill radius.
- **State:** sin variante selected; puramente informativos.

### Cards / Containers

- **Profile Card:** superficie clara, radius xl, shadow hero; foto 4:5 con radius lg.
- **Project Card:** superficie elevada translúcida, borde sutil, radius md/lg; hover glow + scale(1.01).
- **Skill Badge:** cuadrado aspect-ratio 1, mismo tratamiento elevado que project card; icono con color dinámico `--skill-color`.
- **Internal Padding:** 1.25rem–2rem según densidad; CTAs 1.5rem 1rem.

### Inputs / Fields

No hay campos de formulario en la implementación actual. Futuros inputs deben seguir superficie clara en modales o outline accent sobre canvas, radius sm, focus con borde accent sólido.

### Navigation

Sin barra de navegación global; el sitio es single-page. Links de contacto son icon buttons circulares en profile card y botones block en modal de servicio.

### Service CTA Cards

- **Character:** bloques de acción dominantes en accent; título bold + summary en cuerpo pequeño.
- **Hover:** scale(1.05) + accent-strong; cursor pointer; accesible por teclado (Enter/Space).

### Modals

- **Backdrop:** scrim índigo semitransparente + blur 8–10px.
- **Panel:** superficie clara, radius xl, animación scale-in 0.2s.
- **Close:** botón circular ghost; hover accent-soft fill.

## Do's and Don'ts

### Do:

- **Do** usar el canvas #030247 como fondo continuo de toda la página.
- **Do** reservar #e85a2b para CTAs, contacto, tags y estados hover de acción.
- **Do** aplicar Montserrat uppercase black en titulares hero y Montserrat bold en secciones.
- **Do** usar Libre Franklin para párrafos descriptivos y copy explicativo.
- **Do** dar feedback táctil con scale(1.05) y transición elástica en elementos clicables principales.
- **Do** mantener contraste alto entre superficies claras (modales, profile) y el canvas oscuro.

### Don't:

- **Don't** expandir el acento naranja a fondos de sección completos fuera de CTAs.
- **Don't** introducir una tercera familia tipográfica; la pareja Montserrat + Libre Franklin es fija.
- **Don't** usar sombras pesadas en reposo; preferir capas tonales y reservar glow para hover.
- **Don't** crear páginas con estética distinta al escenario técnico sin decisión explícita de redesign.
- **Don't** reemplazar icon buttons circulares outline por botones rectangulares genéricos en contacto social.
