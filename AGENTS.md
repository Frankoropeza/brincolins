# AGENTS.md — BRINCOLINS Instructions

## Project
- **Name:** Brincolins
- **Domain:** brincolins.com
- **Business:** Renta de inflables para fiestas infantiles CDMX y Edomex
- **Stack:** Astro 6 + TypeScript + CSS scoped + Content Collections (blog en Markdown)
- **Deploy:** GitHub Pages (rama `main`, workflow `.github/workflows/deploy.yml`)
- **Phone:** 55 3128 1706
- **WhatsApp:** 5531281706
- **Email:** info@brincolins.com

## Rules
1. Build limpio siempre (`npm run build` sin errores)
2. CERO animaciones de entrada (micro-interacciones hover OK)
3. Hero 2 columnas
4. GEO: H2 como preguntas
5. Sin palabras IA
6. Imágenes AVIF
7. CTAs de conversión → `/cotizar/`
8. CSS scoped por componente; tokens globales en `src/styles/global.css`

## Blog (Markdown)
- El contenido vive en `src/content/blog/*.md` (Content Collection `blog`, schema en `src/content.config.ts`).
- Una sola plantilla dinámica `src/pages/blog/[slug].astro` renderiza todos los artículos.
- Para añadir un artículo: crear un `.md` nuevo con el frontmatter completo. NO crear `.astro` por artículo.
- Imágenes por artículo en `public/img/blog/<slug>/` (`main.avif` = portada, `img1..4.avif` = galería).

## SEO / Schema
- JSON-LD (Organization, LocalBusiness, WebSite, BreadcrumbList) centralizado en `src/layouts/BaseLayout.astro`.
- `BreadcrumbList` se auto-genera desde la URL en BaseLayout. El componente `Breadcrumbs.astro` es solo visual (no duplicar schema).
- Logo de schema: `public/img/brincolins-logo.png`.
