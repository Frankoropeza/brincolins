# BRINCOLINS — Renta de Inflables CDMX

Sitio web de [brincolins.com](https://brincolins.com) — renta de inflables y brincolines para fiestas infantiles y eventos en la Ciudad de México y Estado de México.

## Stack

- **Astro 6** (static output) + TypeScript
- **CSS** scoped por componente + tokens globales en `src/styles/global.css`
- **Content Collections** para el blog (Markdown)
- **@astrojs/sitemap** para `sitemap-index.xml`
- Deploy automático a **GitHub Pages** (`.github/workflows/deploy.yml`, rama `main`)

## Estructura

```
src/
├── components/        # Header, Footer, tarjetas, FAQ, CTA, etc. (CSS scoped)
├── content/blog/      # Artículos del blog en Markdown (fuente única)
├── content.config.ts  # Schema de la colección "blog"
├── data/              # Config de header y topbar (Markdown frontmatter)
├── layouts/
│   ├── BaseLayout.astro   # <head>, JSON-LD (Organization/LocalBusiness/Breadcrumb), chrome
│   └── PageLayout.astro    # Wrapper + burbuja de WhatsApp
├── pages/
│   ├── blog/
│   │   ├── [slug].astro    # Plantilla única que renderiza cada Markdown
│   │   └── index.astro     # Índice del blog (lee de la colección)
│   ├── cobertura/          # 35 páginas de cobertura por alcaldía/municipio
│   ├── inflables/          # Catálogo + fichas de producto
│   ├── servicios/          # Páginas de servicio
│   └── directorio/         # Directorio de salones
└── styles/            # global.css + mobile.css
public/img/            # Imágenes en AVIF (productos, blog, why, proceso…)
```

## Blog (Markdown)

El contenido del blog vive **solo** en `src/content/blog/*.md`. Una sola plantilla
`src/pages/blog/[slug].astro` los renderiza. Para publicar un artículo nuevo basta
crear un `.md` con el frontmatter completo (ver `content.config.ts` para el schema).
Imágenes por artículo en `public/img/blog/<slug>/` (`main.avif` = portada,
`img1..4.avif` = galería).

## Comandos

| Comando            | Acción                                       |
| :----------------- | :------------------------------------------- |
| `npm install`      | Instala dependencias                         |
| `npm run dev`      | Servidor local en `localhost:4321`           |
| `npm run build`    | Build de producción a `./dist/`              |
| `npm run preview`  | Previsualiza el build                        |

> Nota: el build requiere los binarios de Rollup de la plataforma actual. Si vienes
> de otro SO, borra `node_modules` y `package-lock.json` y reinstala (`npm install`).
