# Informe de Mejoras — BRINCOLINS · Junio 2026

Refactor técnico + SEO sobre el sitio Astro de [brincolins.com](https://brincolins.com). Todos los cambios están **aplicados en local** y verificados con build limpio; **no se publicó a GitHub** (pendiente de tu revisión).

---

## 1. Resultado en una línea

Build verde con **112 páginas**, **0 imágenes rotas**, **0 enlaces internos rotos** y **609 bloques JSON-LD válidos (0 inválidos)**. El blog pasó de 37 páginas `.astro` duplicadas a un **sistema único en Markdown**, sin cambiar ninguna URL.

---

## 2. Diagnóstico inicial

El sitio ya estaba bien construido (módulos pilar SEO, schema, AVIF, 35 páginas de cobertura, responsive). Los problemas reales encontrados:

- **Blog triplicado:** 37 archivos `.astro` con el contenido hardcodeado + 35 `.md` "stub" abandonados (título genérico, body placeholder, imágenes rotas) que **no alimentaban nada**. El Markdown era código muerto.
- **102 imágenes por-artículo sin usar** (`/img/blog/<slug>/main.avif` + galería) — las páginas usaban portadas genéricas.
- **Bug de schema:** el logo apuntaba a `/img/brincolins-logo.png`, archivo **inexistente**.
- **`BreadcrumbList` duplicado** en 22 páginas (lo emitían a la vez BaseLayout y el componente `Breadcrumbs`).
- **Botón flotante de WhatsApp** importado pero **nunca renderizado** (regresión; el CSS ya lo contemplaba).
- **2 imágenes rotas** (`dragones-rojos-v3.avif` en servicios, portada inexistente en el artículo de jardín).
- **Inconsistencias:** año "2025" en guías de precio/temporada; teléfono viejo en `AGENTS.md`; README por defecto de Astro.

---

## 3. Cambios aplicados

### Arquitectura — Blog migrado a Markdown (lo más importante)

- Los **36 artículos** ahora viven solo en `src/content/blog/*.md`, con frontmatter completo (title, h1, description, excerpt, intro, categoría, autor, fecha, imágenes, galería, FAQs).
- Contenido extraído fielmente del HTML original → Markdown (encabezados, listas, **tablas**, y los recuadros de "tip" convertidos a citas). Verificado: 509–1.591 palabras por artículo, conservadas.
- Una sola plantilla `src/pages/blog/[slug].astro` renderiza todos: hero 2 columnas, portada, galería, contenido, FAQ, CTA y **sidebar con artículos relacionados automáticos** (misma categoría) — se acabaron los enlaces de sidebar mantenidos a mano.
- `src/pages/blog/index.astro` ahora **lee de la colección** y muestra **los 36 artículos** (antes solo enlazaba 13) con categorías de conteo dinámico → mejor enlazado interno.
- Se **eliminaron las 37 páginas `.astro`** duplicadas (~10.000 líneas) y los stubs. Publicar un artículo nuevo = crear un `.md`.
- Se conectaron las imágenes reales por artículo (portada `main.avif` + galería).

### Bugs corregidos

- **Logo de schema:** generado `public/img/brincolins-logo.png` (576×284) a partir del AVIF; el JSON-LD de Organization/LocalBusiness ya resuelve.
- **`BreadcrumbList` duplicado:** el componente `Breadcrumbs` ya no emite schema; BaseLayout queda como fuente única (1 por página, confirmado).
- **WhatsApp flotante reconectado** en `PageLayout` (conversión recuperada en todo el sitio).
- **2 imágenes rotas** reapuntadas a archivos existentes.

### SEO técnico

- **`BlogPosting` schema** en los 36 artículos (con `datePublished`/`dateModified`, imagen, autor y `articleSection`) — antes casi ninguno lo tenía.
- **Frescura:** "2025" → "2026" en 4 guías de precio/temporada + homepage, con `updatedDate` para señal de actualización.
- Portadas con `fetchpriority="high"`; galería con `loading="lazy"`.

### Higiene de repo

- `AGENTS.md` actualizado (teléfono real **55 3128 1706**, notas de blog Markdown y schema).
- `README.md` reescrito (estructura real del proyecto, comandos, cómo publicar un artículo).
- `content.config.ts` con schema ampliado y validado.

---

## 4. Verificación

| Check | Resultado |
| :-- | :-- |
| Build (`astro build`) | ✓ 112 páginas, sin errores |
| Imágenes rotas (112 páginas) | ✓ 0 |
| Enlaces internos rotos | ✓ 0 |
| JSON-LD | ✓ 609 bloques, 0 inválidos |
| Paridad de URLs del blog (antes vs después) | ✓ 36 = 36, **cero cambios de URL** |
| `BreadcrumbList` por página | ✓ 1 (antes 2 en 22 páginas) |

---

## 5. Recomendaciones (Fase 2 y acciones tuyas)

### Requieren una decisión de negocio

1. **Reconciliar el precio del inflable básico.** Hoy conviven tres cifras: homepage **$800**, blog **$900** (`brincolines-cdmx-precios-modelos`, `fiesta-infantil-jardin`) y **$650** (`cuanto-cuesta-rentar-inflable`). Definir el precio oficial y lo unifico en minutos.
2. **Estandarizar el destino de los CTA.** Conviven `/contacto/` (131 enlaces) y `/cotizar/` (60). `AGENTS.md` dice que los CTA van a `/cotizar/`. Dime cuál es el canónico y hago el reemplazo global.

### SEO / contenido (de tu auditoría existente, siguen vigentes)

3. Crear páginas nuevas de alta intención: `/servicios/inflables-acuaticos/`, `/servicios/inflables-para-adultos/`, y zonas faltantes (`/cobertura/santa-fe/`, `/satelite/`, `/interlomas/`).
4. Google Business Profile al día (fotos, horario, reseñas) y enlazar el `AggregateRating` a reseñas reales.
5. Link building con aliados del sector; completar el cluster de blog propuesto.

### Técnicas opcionales

6. Self-host de la fuente Outfit (hoy se carga desde Google Fonts, render-blocking) para mejorar LCP.
7. Considerar un ancho máximo de lectura en páginas muy anchas (el `container` es full-bleed).

### Para publicar

8. Cuando apruebes, hago `commit` + `push` a `main` y GitHub Pages despliega a brincolins.com automáticamente.

---

*84 archivos modificados en local. Nada se ha publicado todavía.*
