---
target: home
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
timestamp: 2026-07-26T02-06-23Z
slug: src-pages-home-tsx
---
## Design Health Score

| # | Heurística | Score | Issue clave |
|---|-----------|-------|-------------|
| 1 | Visibilidad del estado del sistema | 2 | `ProjectCard` promete "Enfocar proyecto" pero solo hace scroll; sin feedback post-contacto al salir del sitio |
| 2 | Correspondencia con el mundo real | 3 | Español local y WhatsApp bien para PME; "Herramientas Socioculturales" y bullets técnicos hablan más a devs que a dueños de negocio |
| 3 | Control y libertad del usuario | 3 | Modales con Esc, backdrop y focus trap; `ConfirmDialog` con cancelar |
| 4 | Consistencia y estándares | 2 | Contacto desde profile → confirmación; contacto desde modal de servicio → link directo sin confirmación |
| 5 | Prevención de errores | 3 | `ConfirmDialog` antes de redirigir; fallbacks de imagen en profile y proyectos |
| 6 | Reconocimiento vs. recuerdo | 2 | Iconos sociales sin etiqueta visible; 32 skill badges; sin ancla de contacto persistente al hacer scroll |
| 7 | Flexibilidad y eficiencia | n/a | Superficie Experience/portfolio |
| 8 | Diseño estético y minimalista | 2 | Hero denso (bio + stats + 3 CTAs); muro de 24 skills técnicos; descripciones de proyecto extensas |
| 9 | Recuperación ante errores | 3 | Pocos estados de error expuestos; fallbacks silenciosos en imágenes |
| 10 | Ayuda y documentación | n/a | Portfolio Experience; no requiere docs contextuales |
| **Total** | | **20/32** | **Aceptable** (62,5%) |

## Design Specificity Verdict

**Moderadamente específico — sistema visual sí, arquitectura de información no.**

**Evaluación LLM:** El mundo visual "Escenario Técnico" tiene POV claro (canvas índigo, acento señal, spotlight card, tipografía dual). El modal de servicio con pasos concretos y el copy conversacional ("Creemos juntos…") traducen el posicionamiento de Franco. Pero la estructura sigue plantilla genérica de portfolio: hero DESARROLLADOR/FREELANCE + stats + grid de badges + project cards. El diferenciador teatro/comunicación queda enterrado en un párrafo mientras la UI empuja servicios antes que contacto.

**Escaneo determinista:** 0 hallazgos en CLI sobre `Home.tsx` y componentes del árbol (exit code 0). El detector browser no pudo ejecutarse: falta `puppeteer` para escaneo por URL y no hay automatización de navegador disponible en esta sesión. **No hay overlays visibles** — la pasada estática no sustituye reglas DOM/renderizado.

## Overall Impression

La home transmite profesionalismo y tiene un sistema visual disciplinado. El modal de servicio es el mejor momento comercial. Pero la página viola su propio principio "contacto primero": los CTAs naranjas venden servicios con más peso que WhatsApp, y el scroll termina en un muro de 32 skills sin cierre de acción. La oportunidad más grande es reordenar jerarquía y recorte cognitivo, no rediseñar el mundo visual.

## Carga cognitiva

**5 fallos de 8 → carga alta (fix prioritario)**

- ❌ Foco único: hero compite contacto vs. 3 CTAs vs. bio vs. stats
- ❌ Chunking: 8 soft + 24 technical skills
- ✅ Agrupamiento visual: secciones claras
- ✅ Jerarquía visual: H1 y acento funcionan, aunque empujan servicios sobre contacto
- ❌ Una cosa a la vez: hero exige decisiones paralelas
- ❌ Opciones mínimas: 6 acciones visibles en hero; 32 skills expuestos
- ✅ Memoria de trabajo: modal repite contexto; confirm dialog muestra canal
- ❌ Divulgación progresiva: skills y descripciones de proyecto todo de golpe

## Recorrido emocional

- **Apertura:** calidez humana (profile card spotlight) — pico de confianza
- **Stats:** micro-refuerzo breve y efectivo
- **3 CTAs naranjas:** valle de ansiedad — parálisis de elección para PME indecisa
- **Modal de servicio:** pico de reassurance — proceso visible alineado con posicionamiento
- **Proyectos featured:** pico de credibilidad (Toyota, Kilimo)
- **32 skills:** valle de fatiga — de "socio humano" a "CV de LinkedIn"
- **Cierre:** valle anticlimático — termina en badges, no en contacto (viola peak-end)

## What's Working

1. **Modal de servicio con proceso paso a paso** — traduce "proceso transparente" en UI concreta; reduce miedo de PME a contratar freelance.
2. **Sistema "Escenario Técnico" ejecutado con disciplina** — profile card clara sobre canvas oscuro, acento reservado para acción, tipografía dual coherente con DESIGN.md.
3. **Confirmación antes de salir del sitio (profile)** — fricción útil en momento de alto stakes; copy claro sobre redirección.

## Priority Issues

### [P0] Sin ancla de contacto al final del scroll
- **Por qué:** PRODUCT.md define éxito = iniciar contacto. Tras proyectos + 32 skills no hay CTA final.
- **Fix:** Sección cierre "¿Charlamos?" con WhatsApp/email prominentes, o sticky FAB WhatsApp en mobile.
- **Comando sugerido:** `/impeccable layout` + `/impeccable clarify`

### [P1] Jerarquía del hero favorece servicios sobre contacto
- **Por qué:** Tres bloques naranja full-width dominan; iconos sociales de 2.5rem compiten mal.
- **Fix:** Un CTA primario de contacto + servicios como secundarios con menor peso visual.
- **Comando sugerido:** `/impeccable distill`

### [P1] Flujos de contacto inconsistentes
- **Por qué:** Profile → `ConfirmDialog`; modal de servicio → links directos. Misma acción, distinta fricción.
- **Fix:** Unificar criterio explícito (confirm en profile, directo cuando ya eligió servicio — pero documentado y consistente).
- **Comando sugerido:** `/impeccable harden`

### [P1] ProjectCard: interacción engañosa
- **Por qué:** `aria-label="Enfocar proyecto"`, `tabIndex={0}`, `cursor: zoom-in` — click/Enter solo hace scroll, no expande ni abre.
- **Fix:** Eliminar pseudo-interactividad del `<article>` o convertir click en expand/collapse; link externo como acción principal visible.
- **Comando sugerido:** `/impeccable polish`

### [P2] Muro de skills (32 badges)
- **Por qué:** 24 technical skills en grid de 8 columnas viola chunking y modo Experience.
- **Fix:** Top 6–8 skills + "ver stack completo" colapsable, o integrar 2–3 traits en el hero.
- **Comando sugerido:** `/impeccable distill`

## Persona Red Flags

**Jordan (first-timer, dueño de PME):** Tres CTAs naranjas iguales sin guía → parálisis. Iconos sociales sin texto visible. "Herramientas Socioculturales" incomprensible. Click en tarjeta de proyecto espera ver algo; solo scrollea.

**Casey (mobile, interrumpido):** Contacto en profile puede quedar bajo fold. Scroll largo sin WhatsApp sticky. CTAs de servicio ok para pulgar; contacto directo no.

**Sam (accesibilidad):** `ProjectCard` anuncia "Enfocar proyecto" pero no navega ni expande → promesa rota para screen reader. Botones sociales sin label visible. `ConfirmDialog`: orden de headings confuso.

## Minor Observations

- Tagline del profile apila 5 credenciales en una línea — ilegible en mobile
- Typo: "Conocimientos pedagogicos" (falta tilde)
- "AngularJS" junto a stack moderno puede restar credibilidad ante tech leads
- Single-page sin skip link ni nav interna
- Detector browser no ejecutado: instalar `puppeteer` habilitaría escaneo por URL en futuras auditorías

## Questions to Consider

1. Si el éxito es contacto, ¿por qué los CTAs más grandes venden servicios en lugar de abrir WhatsApp?
2. En modo Experience, ¿32 skills demuestran craft o delatan que el portfolio aún piensa como CV?
3. ¿El ángulo teatro/comunicación debería liderar el hero en lugar de "DESARROLLADOR FREELANCE"?
