# AUDITORÍA GENERAL DE VELOCIDAD Y OPTIMIZACIÓN — BRINCOLINS
**Fecha:** 15 de julio de 2026
**Alcance:** código Astro, componentes/layouts, imágenes, CSS/JS, SEO técnico, build y producción
**Sitio:** https://brincolins.com (Astro 6 · Markdown · GitHub Pages + Cloudflare)

---

## RESUMEN EJECUTIVO

| Área | Calificación | Estado |
|---|---|---|
| Arquitectura de código | 8/10 | Buena — componentes y layouts reutilizables ya existen |
| Imágenes | 6/10 | AVIF dominante, pero ~14 MB de peso muerto y JPGs en blog |
| CSS/JS | 7/10 | CSS comprimido a 11 KB, pero fuentes bloquean render y hay JS/SVG redundante |
| SEO técnico | 9/10 | Schema centralizado, sitemap, robots, llms.txt, canónicas correctas |
| Producción | 9/10 | TTFB 207 ms, Cloudflare, assets con cache de 1 año |

**Veredicto:** el sitio está en buen estado general. No hay errores graves. Hay **4 mejoras de alto impacto en velocidad** y **~14 MB de basura** que eliminar. Con el plan de abajo queda al 100%.

---

## LO QUE YA ESTÁ BIEN (no tocar)

- **Layouts reutilizables:** `BaseLayout` → `PageLayout`, jerarquía correcta. 22 componentes, los core (`SectionHeader` ×30, `QuickNav` ×31, `CtaBanner` ×29, `Breadcrumbs` ×23) se reutilizan intensivamente.
- **Fuente única de verdad:** `data/inflables.ts` alimenta páginas de producto, precios y catálogo. `lib/schema.ts` centraliza todo el JSON-LD (Organization, LocalBusiness, WebSite, Breadcrumb, FAQ, Product).
- **SEO técnico:** canónicas con trailing slash consistente, sitemap con prioridades, robots.txt con agentes IA, llms.txt, geo-tags, OG/Twitter completos.
- **Producción:** TTFB 207 ms, HTML 25 KB comprimido, CSS bundle 11 KB comprimido con `cache-control: max-age=31536000`.
- **Accesibilidad:** skip-link, `inert` en panel móvil, `aria-expanded`, foco devuelto al burger.
- **Critical CSS inline** en `<head>` para LCP.
- **CI con gate de calidad** (`qa`: validate-assets + validate-content + build).

---

## HALLAZGOS — PRIORIDAD ALTA (impacto directo en velocidad)

### A1. Google Fonts bloquea el render en TODAS las páginas
`BaseLayout.astro:191-193` carga Outfit con **6 pesos (400–900)** vía stylesheet render-blocking de fonts.googleapis.com.

- El body usa `system-ui` — Outfit es solo para headings.
- Pesos realmente usados en CSS: 500, 600, 700, 800, 900 (el 400 se carga sin usarse casi).
- Dos conexiones externas (googleapis + gstatic) en la ruta crítica de render.

**Fix:** self-hostear Outfit en WOFF2 subset (latin), solo pesos 600/700/800 (consolidar 500→600 y 900→800 en CSS), servir desde `/fonts/` con `preload` + `font-display: swap`. 
**Ganancia estimada:** −300–500 ms de FCP/LCP en móvil, −2 conexiones DNS/TLS, ~−80 KB.

### A2. Los heroImage del blog están en JPG, no en AVIF
13 posts referencian `.jpg` (~200 KB c/u) en `heroImage`, y el featured card del blog los carga con `loading="eager"` → **el LCP de /blog/ es un JPG de 200 KB**. No existen gemelos AVIF de esos archivos (`castillo-blanco-v3.jpg`, `extremo-v3.jpg`, etc.).

**Fix:** convertir los 13 JPG usados a AVIF (~40–60 KB c/u), actualizar frontmatter de los 13 posts. Mantener JPG solo para `og-brincolins.jpg` (los scrapers de OG no siempre soportan AVIF).
**Ganancia:** −150 KB en LCP del blog, −70% peso en 13 páginas.

### A3. ~14 MB de imágenes muertas en el repo y el deploy
Todo `public/` se copia a `dist/` (41 MB) y se sube a GitHub Pages en cada deploy:

| Basura | Peso | Detalle |
|---|---|---|
| 66 JPG sin ninguna referencia en `src/` | ~10 MB | `*-v4.jpg` a `*-v12.jpg` de todos los inflables |
| `public/img/articulos/` | 2.5 MB | **0 referencias** en todo src/ |
| `public/img/hero/hero-1..4.jpg` | 844 KB | 0 referencias |
| `public/img/inflables/old-ai-images/` | 264 KB | 4 archivos legacy |
| `mini-princess-renta-cdmx.avif.tmp.jpg`, `.wtest` | — | residuos de scripts |

**Fix:** borrar (o mover fuera de `public/`). No afecta nada visible.
**Ganancia:** deploy 41 MB → ~27 MB, repo más limpio, `validate:assets` más confiable.

### A4. Logo del header: 49 KB con `fetchpriority="high"` en todas las páginas
`renta-de-inflables.avif` es 576×284 (49 KB) y se pinta a ~150 px de alto. Con `fetchpriority="high"` compite con el LCP en cada página. Además `brincolins-logo.png` (136 KB) se usa solo como logo en schema.ts.

**Fix:** re-encodar el logo AVIF al doble del tamaño renderizado real (~300×148) → objetivo <12 KB. Recomprimir/reducir `brincolins-logo.png` (solo lo leen los crawlers; 512px es suficiente → ~30 KB).
**Ganancia:** −37 KB en la ruta crítica de TODAS las páginas.

---

## HALLAZGOS — PRIORIDAD MEDIA (código y mantenibilidad)

### M1. Script del acordeón FAQ se envía en páginas sin FAQ
`BaseLayout.astro:245-262` inyecta el script del acordeón inline en **todas** las páginas, tengan o no `.faq__question`.

**Fix:** moverlo a `FaqSection.astro` (que ya tiene su propio `<script is:inline>` para el form de WhatsApp) o envolverlo en la condición `faqItems`. −0.7 KB por página sin FAQ y un solo dueño del código FAQ.

### M2. 47 KB de SVG inline en la home — 90 SVGs, solo 36 únicos
Un mismo ícono se repite **31 veces** en `index.html` (163 KB totales). La compresión brotli lo mitiga, pero el DOM parsea 90 nodos SVG.

**Fix:** sprite con `<symbol>` + `<use>` para los íconos repetidos (check, WhatsApp, estrella). −30–35 KB de HTML sin comprimir, DOM más ligero.

### M3. 9 páginas de producto casi idénticas
`src/pages/inflables/*.astro` (barco-pirata, castillo-blanco, … extremo): tras normalizar el nombre, el diff entre dos páginas es de ~78 líneas (solo textos/FAQs propios). Ya leen de `data/inflables.ts`, pero la estructura está copiada 9 veces (~2,200 líneas).

**Fix:** una ruta dinámica `src/pages/inflables/[slug].astro` + campos `faqs`, `longDescription`, `sections` en `data/inflables.ts`. De ~2,200 líneas a ~300. Cero divergencia futura. (Las URLs no cambian → sin impacto SEO.)

### M4. `Header.astro` es un monolito de 1,399 líneas
857 líneas son CSS (445–1301) y 97 de script. Funciona, pero es el archivo más difícil de mantener del proyecto.

**Fix (opcional):** extraer el CSS a `src/styles/header.css` importado desde el componente, o dividir en `Header` + `MobilePanel`. Sin impacto en performance (Astro lo bundlea igual), solo mantenibilidad.

### M5. `lastmod` falso en el sitemap
`astro.config.mjs`: `item.lastmod = new Date().toISOString()` marca TODAS las URLs como modificadas en cada build. Google detecta lastmod inflado y **aprende a ignorarlo** — pierdes la señal real de frescura.

**Fix:** usar la fecha real (frontmatter `updatedDate`/`pubDate` para blog, fecha de commit para páginas) o eliminar el serialize de lastmod y dejar solo prioridades.

### M6. `og-brincolins.jpg` pesa 196 KB
Las imágenes OG se descargan en cada share de WhatsApp/Facebook. 1200×630 puede quedar en ~90 KB con mozjpeg q78.

---

## HALLAZGOS — PRIORIDAD BAJA

- **B1.** `mobile.css` con 75 `!important` — deuda conocida del patrón overhaul; funciona, pero al consolidar M3/M4 conviene migrar reglas al CSS base con media queries.
- **B2.** `slugNames` (60 entradas hardcodeadas en BaseLayout) podría generarse desde `data/coverage.ts` + `data/inflables.ts` para no olvidar entradas nuevas.
- **B3.** Carpeta `articulos/` en raíz (60 KB, 5 .md) — material fuente que no compila; mover a `/docs` o borrar si ya se migró al blog.
- **B4.** `node_modules` está instalado para macOS — `astro check`/`build` no corren en Linux (binario nativo de rollup). Irrelevante para producción (CI lo maneja), pero impide validar en sandboxes Linux sin `npm ci`.
- **B5.** HTML con `cache-control: max-age=600` (GitHub Pages) — correcto para contenido; sin acción.

---

## PLAN DE ACCIÓN RECOMENDADO

### Fase 1 — Velocidad inmediata (1 sesión)
1. Borrar ~14 MB de imágenes muertas (A3) + `.wtest`, `.tmp.jpg`
2. Convertir 13 heroImage del blog a AVIF + actualizar frontmatter (A2)
3. Re-encodar logo header a ~300px (<12 KB) y `brincolins-logo.png` (A4)
4. Recomprimir `og-brincolins.jpg` a ~90 KB (M6)

### Fase 2 — Ruta crítica de render (1 sesión)
5. Self-hostear Outfit WOFF2, 3 pesos, con preload (A1)
6. Mover script FAQ a `FaqSection.astro` (M1)
7. Sprite SVG para íconos repetidos (M2)
8. `lastmod` real en sitemap (M5)

### Fase 3 — Consolidación de código (1–2 sesiones)
9. `inflables/[slug].astro` dinámico + contenido en `data/inflables.ts` (M3)
10. Extraer CSS de `Header.astro` (M4)
11. Generar `slugNames` desde data (B2)

### Verificación post-cambios
- `npm run qa` (validate:assets + validate:content + build)
- PageSpeed Insights móvil en `/`, `/blog/`, `/inflables/`, `/precios/` — objetivo: LCP < 2.0 s, CLS < 0.05, Performance ≥ 95
- `curl -sI` a assets nuevos para confirmar cache de 1 año

### Impacto total estimado
- **−14 MB** en deploy · **−150 KB** LCP del blog · **−120 KB** ruta crítica (fuentes + logo) · **−300–500 ms** FCP móvil · **−1,900 líneas** de código duplicado

---
*Auditoría generada el 2026-07-15. Datos verificados contra el repo local y producción (curl a brincolins.com).*
