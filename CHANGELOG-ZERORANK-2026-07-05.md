# Changelog — Respuesta a Análisis ZeroRank (2026-07-05)

**Baseline ZeroRank:** visibilidad 17%, rank promedio #2.5, sentimiento 72/100, técnico 59/100 (10/17 checks).
**Contexto crítico:** el scan de ZeroRank es anterior al deploy del 2026-07-04 — varias "brechas" reportadas ya estaban resueltas y live. Este changelog separa lo que ya existía de lo nuevo.

---

## 1. Archivos esenciales

| Ítem reportado | Estado real | Acción 2026-07-05 |
|---|---|---|
| llms.txt "faltante" | **Ya existía y está live** (HTTP 200 en https://brincolins.com/llms.txt desde deploy 2026-07-04) | Actualizado: 3 comparativas agregadas a la sección Blog |
| sitemap.xml "faltante" | Parcial: existía `/sitemap-index.xml` (200) pero `/sitemap.xml` daba **404** — ZeroRank checa esa ruta exacta | **FIX:** script `postbuild` en `package.json` copia `sitemap-index.xml` → `sitemap.xml`. Verificado en build local. `robots.txt` ahora declara ambas rutas |

## 2. Datos estructurados (JSON-LD)

| Schema reportado faltante | Estado real | Acción 2026-07-05 |
|---|---|---|
| Product | **Ya existía** en las 8 fichas de inflables (verificado live) | Sin cambio |
| Article | Existía como `BlogPosting` (subtipo válido de Article que algunos checkers no reconocen) | **FIX:** `@type` dual `["Article","BlogPosting"]` en todos los posts (`src/pages/blog/[slug].astro`) |
| HowTo | **Ya existía** en 2 posts instructivos vía frontmatter `howto` | Sin cambio |
| Author | **Ya existía**: `author` con `@id` → Organization en todos los posts | Sin cambio |
| BreadcrumbList | **Ya existía** sitewide (auto-generado en BaseLayout) | Sin cambio |

**Validación pendiente post-deploy:** pasar 2-3 URLs por https://search.google.com/test/rich-results

## 3. Contenido nuevo — temas en 0%

| URL | Tema ZeroRank atacado |
|---|---|
| `/blog/brincolin-vs-tobogan-inflable-cdmx/` | **NUEVO.** "Comparar opciones de inflables" (0%). Tabla comparativa tipo vs. tipo, precios 2026, criterios de elección, 4 FAQs con schema |
| `/blog/inflable-chico-vs-grande-cuantos-invitados-cdmx/` | **NUEVO.** "Comparar opciones" (0%) + variación por tamaño de evento del tema nuclear. Tabla por número de invitados, 4 FAQs con schema |
| `/fiestas-infantiles/` (página pilar, ya existía del 2026-07-04) | **REFORZADA:** FAQ nueva "¿Qué tamaño de inflable según número de invitados?" — cubre la variación por tamaño de evento pedida en el brief |

Interlinking: ambos posts enlazan fichas de producto, pilar, precios y la comparativa previa. llms.txt referencia las 3 comparativas.

## 4. Verificación de marca "Brincolines" (35% en tabla de competidores)

**Conclusión: NO es un competidor dominante real.** Evidencia:

1. El título indexado en Google del propio brincolins.com aún muestra el title viejo "Brincolines | renta de brincolines | renta de inflables" — el title actual ya lidera con la marca ("…| BRINCOLINS"). Los modelos de IA heredan esa indexación vieja.
2. "Brincolines" es además el plural genérico de la categoría en México — ZeroRank lo clasifica como marca por error, igual que "Inflables" (52%) y "CDMX" (41%).
3. Existe rentabrincolinescdmx.com como negocio menor aparte, pero no explica un 35%.

**Acción:** nomenclatura BRINCOLINS ya consistente en titles/OG/schema desde antes. Queda esperar re-indexación de Google (title viejo) y re-scan de ZeroRank.

## 5. INFLAPY (competidor dominante en fuentes: 129.6% + 38.5%)

Cita vía 2 dominios propios (inflablesparafiestas.com.mx + inflapy.com), 30 años, 527 reseñas Google 4.9★. Sus formatos citados: catálogos detallados, páginas por zona y FAQ extensos — equivalentes ya existentes en brincolins.com (8 fichas Product, /cobertura/ por zona, 19 FAQs). Brecha real restante: **volumen de reseñas Google verificadas** (señal off-page que los modelos citan). Recomendación operativa: campaña de reseñas post-evento por WhatsApp.

## 6. Pendientes off-page (requieren acción humana, no código)

- Facebook: participar en los 20 hilos identificados (prioridad media, 26 citas IA)
- YouTube: canal virgen — videos de instalación/catálogo/testimonios (prioridad baja pero espacio sin competencia)
- Inclusión editorial: eventplannermexico.mx, paginasamarillas.mx
- Campaña de reseñas Google (ver punto 5)

## Archivos modificados (6) + creados (2)

- `package.json` — script postbuild sitemap.xml
- `public/robots.txt` — segunda línea Sitemap
- `public/llms.txt` — 3 comparativas en sección Blog
- `src/pages/blog/[slug].astro` — @type dual Article/BlogPosting
- `src/pages/fiestas-infantiles/index.astro` — FAQ por número de invitados
- `src/content/blog/brincolin-vs-tobogan-inflable-cdmx.md` — **NUEVO**
- `src/content/blog/inflable-chico-vs-grande-cuantos-invitados-cdmx.md` — **NUEVO**
- `CHANGELOG-ZERORANK-2026-07-05.md` — este documento

**Build:** 141 páginas (139 + 2 posts), `npm run qa` limpio. Cero JS/CSS nuevo → sin impacto en PageSpeed (96/100/95/100). Validar PageSpeed post-deploy sobre los 2 posts nuevos.
