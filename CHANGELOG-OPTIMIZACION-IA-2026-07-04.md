# Changelog — Optimización para Visibilidad en Motores de IA (GEO/AEO)

**Fecha:** 2026-07-04
**Objetivo:** subir la visibilidad de brincolins.com en respuestas de ChatGPT, Perplexity, Claude, etc. (baseline: 17% de visibilidad, 83% sentimiento positivo).

---

## 1. Infraestructura técnica de descubrimiento (prioridad alta)

| Archivo | Cambio |
|---|---|
| `public/llms.txt` | **NUEVO.** Estándar llmstxt.org: resumen del negocio, datos clave (precios, cobertura, políticas), enlaces a inicio, catálogo (8 fichas), fiestas infantiles, servicios, FAQ, cobertura, cotizar y blog. |
| `public/robots.txt` | **MODIFICADO.** Allow explícito para 15 agentes de IA: GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-User, Claude-SearchBot, anthropic-ai, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot, cohere-ai, CCBot. |
| `astro.config.mjs` | **MODIFICADO.** Sitemap ahora emite `<lastmod>` en cada URL (señal de frescura). Verificado: 139 URLs en `sitemap-0.xml`. |
| HTTPS | **VERIFICADO.** `http://` → 301 → `https://` (Cloudflare). Cero contenido mixto en `src/` y `public/`. |

## 2. Datos estructurados (schema.org / JSON-LD)

Estado real encontrado: el sitio ya tenía Organization, LocalBusiness+EventVenue, WebSite, BreadcrumbList (sitewide vía BaseLayout), FAQPage y Product (en las 8 fichas de inflables) — más de lo reportado en el brief. Lo agregado:

| Schema | Dónde | Cambio |
|---|---|---|
| **HowTo** | `blog/como-rentar-inflable-brincolins-proceso-paso-a-paso` (4 pasos) y `blog/como-elegir-inflable-fiesta-infantil` (5 pasos) | **NUEVO.** Soporte vía frontmatter `howto` en `src/content.config.ts` + render en `src/pages/blog/[slug].astro`. Reutilizable en cualquier post futuro. |
| **Author con @id** | Todos los BlogPosting | **MODIFICADO.** `author` ahora referencia `https://brincolins.com/#org` (E-E-A-T: entidad autor unificada con Organization). |
| **BreadcrumbList** | Páginas nuevas | Slugs `fiestas-infantiles` y `preguntas-frecuentes` añadidos al mapa de nombres en `BaseLayout.astro`. |

**Validación:** los bloques JSON-LD de 9 páginas representativas (home, pilar, FAQ, 2 fichas Product, 3 posts, corporativos) parsean sin errores. Tipos confirmados por página. Pendiente para ti: pasar 2-3 URLs por https://search.google.com/test/rich-results tras el deploy (herramienta requiere URL pública).

## 3. Contenido nuevo (prioridad alta)

| Página | Detalle |
|---|---|
| `/fiestas-infantiles/` | **NUEVA — página pilar.** "Renta de inflables para fiestas infantiles" (tema con 0% visibilidad). Incluye: inflables por edad (1-4, 4-10, 3-12, 6+), catálogo destacado, qué incluye el servicio (entrega, instalación, sanitización, seguro RC, recolección), zonas de cobertura CDMX + Edomex (Ecatepec, Naucalpan, Tlalnepantla, Nezahualcóyotl, Toluca…), proceso de cotización en 4 pasos y 7 FAQs propias con schema. |
| `/preguntas-frecuentes/` | **NUEVA — FAQ ampliada.** 19 preguntas en 4 categorías: precios/anticipo/cancelación, lluvia/instalación/horarios, espacio mínimo/superficies, seguridad/sanitización/seguro. FAQPage schema con las 19. Cubre todas las objeciones del brief. |
| `blog/brincolin-vs-otras-alternativas-fiesta-infantil` | **NUEVO — post comparativo** (tema "comparar opciones" con 0% visibilidad). Tabla comparativa brincolín vs payaso/show vs trampolín vs salón de juegos, costos reales CDMX, casos donde el inflable NO conviene, 4 FAQs. |
| Corporativos/kermeses | Ya existía `/servicios/inflables-para-eventos/` + 2 posts de kermeses. **Reforzado** con "operador certificado por inflable" y protocolos de sanitización en el hero. |

**Navegación:** ambas páginas nuevas enlazadas en header (dropdown Servicios → Fiestas Infantiles) y footer (columna Empresa), y referenciadas en `llms.txt`.

## 4. Keywords (prioridad media)

Frases objetivo incorporadas en H1/H2/meta descriptions/primeros párrafos de las páginas nuevas (verificado por grep en todo `src/`): "renta inflables" (56 archivos), "inflables CDMX" (61), "inflables para fiestas infantiles" (15), "entrega e instalación" (25), "inflables grandes" (6), "kermeses escolares" (11), "sanitización y seguro", "operador certificado". Tono natural, sin keyword stuffing.

## 5. Señales de confianza

Ya presentes en el sitio (verificado): +20 años de experiencia, +500 eventos/año, testimonios en home ("Lo que Dicen Nuestros Clientes"), seguro de responsabilidad civil, sanitización certificada. Agregado: "operador certificado durante el evento" en corporativos, FAQ dedicada a qué cubre el seguro RC, y todos los datos de confianza consolidados en `llms.txt` (lo que los modelos citan al recomendar proveedores).

## 6. AEO / accesibilidad

Páginas nuevas con HTML semántico (`section`, `h1-h3` jerárquicos, `role="list"`, `aria-hidden` en decorativos), imágenes con `alt` y `loading="lazy"`, cero JavaScript nuevo de terceros. **WebMCP:** evaluado y no viable hoy — el sitio es estático (Astro + GitHub Pages, sin backend); exponer herramientas de cotización requeriría un endpoint dinámico. Alternativa implementada: `llms.txt` + datos estructurados completos permiten a agentes extraer catálogo, precios y proceso de cotización. Si a futuro se agrega un Worker de Cloudflare, ahí sí se puede montar un MCP de cotización.

## 7. Rendimiento

- Build verificado: `astro build` limpio, 139 páginas (135 previas + 2 páginas + 1 post + paginación).
- Cero scripts de terceros nuevos, cero fuentes nuevas, imágenes reutilizadas del catálogo AVIF existente con lazy loading.
- Las páginas nuevas usan los mismos patrones CSS/componentes del sitio (sin CSS global nuevo) → sin impacto en CLS/LCP.
- Pendiente para ti: correr PageSpeed Insights sobre `/fiestas-infantiles/` y `/preguntas-frecuentes/` tras el deploy para confirmar ≥96 móvil / 100 escritorio.

## Archivos creados (5)

- `public/llms.txt`
- `src/pages/fiestas-infantiles/index.astro`
- `src/pages/preguntas-frecuentes/index.astro`
- `src/content/blog/brincolin-vs-otras-alternativas-fiesta-infantil.md`
- `CHANGELOG-OPTIMIZACION-IA-2026-07-04.md` (este archivo)

## Archivos modificados (9)

- `public/robots.txt` — bots IA
- `astro.config.mjs` — lastmod sitemap
- `src/content.config.ts` — schema frontmatter `howto`
- `src/pages/blog/[slug].astro` — render HowTo + author @id
- `src/content/blog/como-rentar-inflable-brincolins-proceso-paso-a-paso.md` — frontmatter howto
- `src/content/blog/como-elegir-inflable-fiesta-infantil.md` — frontmatter howto
- `src/layouts/BaseLayout.astro` — slugs breadcrumb
- `src/data/header.md` — nav Fiestas Infantiles
- `src/components/Footer.astro` — links Fiestas Infantiles + FAQ
- `src/pages/servicios/inflables-para-eventos.astro` — operador certificado

*(No se tocaron Open Graph, Twitter Card ni Canonical: estaban correctos.)*

---

# Ronda 2 — Homologación de diseño e interlinking total (2026-07-04)

## Páginas nuevas rediseñadas con módulos homologados del sitio

**`/fiestas-infantiles/`** — ahora usa exclusivamente componentes y patrones existentes (regla: sin zig-zag, módulos homologados):

| Sección | Módulo homologado |
|---|---|
| Hero 2 columnas con CTAs | patrón `hero__grid` del sitio |
| Navegación rápida | `QuickNav` con anclas (#edades, #catalogo, #precios, #zonas) |
| Inflables por edad (4 rangos) | `.why-card` + `.grid-4` con imágenes reales + chip de edad |
| Catálogo destacado | `ProductCard` + `.grid-4` |
| Todo incluido (6 items) | `.inc-card` con íconos SVG (idéntico a /servicios/renta-de-inflables/) |
| Precios | `PricingCards` (4 paquetes, mismo dataset del sitio) |
| Zonas (8 tarjetas CDMX+Edomex) | `ZonaCard` (idéntico a /cobertura/, enlaza a cada página de zona) |
| Proceso 4 pasos | `.why-card` + `proc-num` con fotos de proceso |
| Testimonios | `TestimonialCards` (reseñas reales del sitio) |
| Guías del blog (4) | `.why-card` enlazando a guías + post comparativo |
| CTA final + FAQ pre-footer | `CtaBanner` + módulo FAQ de `PageLayout` |

**`/preguntas-frecuentes/`** — profesionalizada: `QuickNav` con anclas por categoría, `SectionHeader` completo (badge/título/subtítulo/copy 2 columnas) en las 4 categorías, sección "Recursos relacionados" con `.why-card` (interlinking a fiestas-infantiles, precios, cobertura y guía de seguridad), CTAs en hero, `CtaBanner` y `WaBubble`.

## Interlinking sitewide

- `QuickNav` MAIN (home, blog, nosotros, etc.): añadidos "Fiestas Infantiles" y "FAQ" → enlaces desde decenas de páginas.
- `PageLayout` (pre-footer de TODO el sitio): botón "Ver todas las preguntas frecuentes" → /preguntas-frecuentes/ desde ~120 páginas.
- Sidebar del blog (60+ artículos): nueva caja "Recursos útiles" → fiestas-infantiles, preguntas-frecuentes, precios, cobertura.
- Home: CTA de la sección de fiestas infantiles ahora apunta a /fiestas-infantiles/.
- Header (dropdown Servicios) y Footer: ya enlazados en ronda 1.

## Verificación

- Build limpio: 139 páginas.
- JSON-LD válido en ambas páginas (FAQPage 19 preguntas, BreadcrumbList).
- Módulos confirmados en HTML generado: why-card, product-card, inc-card, pk__ (pricing), ZonaCard, tc__card (testimonios), qnav.
- Cero CSS global nuevo, cero JS nuevo: solo estilos scoped mínimos (chip de edad, links de tarjeta).
