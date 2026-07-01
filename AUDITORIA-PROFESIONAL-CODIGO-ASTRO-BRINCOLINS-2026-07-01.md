# Auditoria profesional de codigo, Astro, Markdown, SEO tecnico y assets

Proyecto: BRINCOLINS  
Dominio: brincolins.com  
Fecha: 2026-07-01  
Stack auditado: Astro 6, TypeScript, CSS scoped/global, Content Collections Markdown, assets publicos  
Alcance: revision local de repositorio, build estatico, HTML generado, estructura de layouts/componentes, blog Markdown, imagenes, CTAs, schema, sitemap y mantenibilidad.

## Resumen ejecutivo

El sitio tiene una base funcional y valiosa: compila correctamente, genera 128 paginas estaticas, usa Astro Content Collections para el blog, tiene schema centralizado en `BaseLayout.astro`, sitemap, robots.txt, rutas limpias, canonical por pagina y una arquitectura SEO local amplia para CDMX y Edomex.

El problema principal no es que el sitio este roto. El problema es que el sitio crecio de forma muy manual: muchas paginas Astro repetidas, estilos inline, datos duplicados, precios inconsistentes, CTAs repartidos entre `/contacto/`, WhatsApp y `/cotizar/`, imagenes legacy en JPG, referencias AVIF rotas y metadata SEO demasiado larga. Esto aumenta el costo de mantenimiento y permite errores que el build actual no detecta.

Calificacion tecnica actual estimada: 72/100.

Meta realista despues de optimizacion: 90-95/100 sin redisenar todo desde cero.

Prioridades:

1. Corregir errores de conversion y confianza: CTAs a `/cotizar/`, precios/modelos inconsistentes y enlaces de cotizacion.
2. Endurecer el build: validar imagenes Markdown, metadata, rutas y frontmatter para que los errores fallen antes de publicar.
3. Refactorizar familias repetidas: cobertura, directorio y productos deben salir de datos + plantillas, no de decenas de archivos manuales.
4. Limpiar assets: convertir JPG necesarios a AVIF, eliminar legacy con inventario y corregir referencias rotas.
5. Reducir CSS/HTML repetido: mover patrones inline a componentes/tokens y separar estilos globales reales de estilos de pagina.

## Evidencia de build y estructura

Comandos ejecutados:

- `npm run build`
- Revision de HTML generado en `dist`
- Revision de assets en `public/img`
- Revision de Markdown en `src/content/blog`
- Revision de CTAs, imagenes, schema, estilos inline y sitemap

Resultado del build:

- Build limpio: si.
- Paginas generadas: 128.
- Archivos en `dist`: 553.
- Peso de `dist`: 42 MB.
- Peso de HTML generado: 11 MB.
- Peso de assets compilados en `dist/_astro`: 272 KB.
- Peso de `public`: 29 MB.
- Peso de `src`: 2.5 MB.

Lectura: el sitio no tiene un problema fuerte de JavaScript. El peso y la complejidad estan principalmente en HTML, CSS repetido, contenido estatico e imagenes.

## Arquitectura Astro

### Lo que esta bien

- `BaseLayout.astro` centraliza metadatos, schema base, canonical, Open Graph, Twitter cards, header, footer y scripts globales.
- `PageLayout.astro` simplifica paginas normales y agrega FAQ/pre-footer.
- El blog usa Content Collections en `src/content.config.ts`, lo cual es correcto.
- Existe una plantilla unica para articulos: `src/pages/blog/[slug].astro`.
- Hay componentes reutilizables para tarjetas, FAQ, CTA, galerias, breadcrumbs, sidebar y navegacion.
- El build estatico es compatible con GitHub Pages.

### Problemas detectados

1. Muchas paginas son demasiado manuales.
   - 77 paginas Astro.
   - 35 paginas de cobertura.
   - 17 paginas/directorio CDMX.
   - 10 paginas de inflables.
   - Muchas comparten estructura, bloques y estilos casi iguales.

2. Exceso de estilos locales e inline.
   - 496 atributos `style="..."` dentro de paginas.
   - 57 paginas Astro contienen bloque `<style>`.
   - 19 componentes contienen bloque `<style>`.
   - Esto dificulta consistencia visual, responsive y mantenimiento.

3. `Header.astro` mezcla demasiadas responsabilidades.
   - Lee Markdown con `fs` y `gray-matter`.
   - Define navegacion, mega menu, datos de servicios, CTA, mobile panel, estilos y comportamiento.
   - Tiene mas de 1,300 lineas.
   - Recomendacion: separar datos de navegacion, componente de desktop nav, componente mobile nav y estilos.

4. `BaseLayout.astro` concentra demasiado schema y logica.
   - Tiene Organization, LocalBusiness, WebSite, BreadcrumbList, FAQ, Product y reviews.
   - Es positivo centralizar, pero conviene extraer helpers de schema a `src/lib/schema.ts`.

5. Hay props no usadas o inconsistentes.
   - `PageLayout.astro` recibe `phone` y `email`, pero no los usa.
   - `BlogCard.astro` conserva `legacy props`.
   - `breadcrumbs` se pasan a `BaseLayout`, pero el visual depende de slots o implementaciones manuales por pagina.

## CTAs y conversion

Regla del proyecto: CTAs de conversion deben ir a `/cotizar/`.

Hallazgos:

- Hay 53 ocurrencias de `href="/contacto/"` en paginas.
- Varias son CTAs claros de conversion:
  - Home: "Cotizar paquete para mi evento" y "Cotizar Renta de Inflables Gratis".
  - Paginas de inflables: "Cotizar Mini Castillo", "Cotizar Gusanitos", "Cotizar Dragones Rojos", etc.
  - Cobertura: "Solicitar cotizacion".
  - Header config: `cta.href: "/contacto/"`.
  - Sticky CTA mobile en `BaseLayout.astro`: "Cotizar Gratis" apunta a `/contacto/`.
  - `src/pages/cotizar/index.astro`: el boton hero "Solicitar cotizacion" apunta a `/contacto/`, dentro de la propia pagina de cotizacion.

Impacto:

- Perdida de conversion por friccion.
- Inconsistencia con la regla del proyecto.
- Dificulta medir el embudo real.

Recomendacion:

- Crear una constante unica:
  - `QUOTE_PATH = "/cotizar/"`
  - `WHATSAPP_NUMBER = "5531281706"`
  - helper `buildWhatsAppUrl(message)`
- Cambiar CTAs de conversion a `/cotizar/`.
- Dejar `/contacto/` para contacto general, no para cotizacion principal.

Prioridad: P0.

## Precios, catalogo y confianza

Problema critico:

La pagina `src/pages/cotizar/index.astro` usa modelos y precios que no coinciden con el catalogo actual.

Ejemplos:

- Castillo de Princesas aparece en cotizar como `$900`, pero en otras partes del sitio aparece desde `$1,200`.
- Barco Pirata aparece como `$950`, pero en el catalogo aparece desde `$2,500`.
- Casa Brinco Jungla, Tobogan Acuatico, Inflable Deportivo, Castillo Medieval y Pista de Obstaculos aparecen en el formulario, pero no corresponden claramente al catalogo actual principal.

Impacto:

- Riesgo de perdida de confianza.
- Riesgo comercial por cotizaciones mal ancladas.
- Usuarios pueden llegar con expectativas de precio incorrectas.

Recomendacion:

- Crear `src/data/inflables.ts` con catalogo unico:
  - slug
  - name
  - price
  - size
  - ages
  - capacity
  - image
  - gallery
  - features
  - active
- Consumir ese catalogo en:
  - index
  - `/inflables/`
  - paginas de producto
  - formulario `/cotizar/`
  - `PricingCards`
  - `QuickNav`
  - `Header`
  - schema Product

Prioridad: P0.

## Blog Markdown y Content Collections

### Lo que esta bien

- El blog vive correctamente en `src/content/blog/*.md`.
- Hay 52 articulos publicados.
- No hay borradores activos.
- Existe schema de Content Collection.
- Existe plantilla unica dinamica `src/pages/blog/[slug].astro`.

### Problemas detectados

1. Imagenes rotas en Markdown.

Se encontraron 10 referencias a imagenes inexistentes:

- `/img/inflables/castillo-blanco-v3.avif`
- `/img/inflables/castillo-princesas-v3.avif`
- `/img/inflables/extremo-v4.avif`
- `/img/inflables/extremo-v3.avif`
- `/img/inflables/mini-castillo-v4.avif`
- `/img/inflables/mini-castillo-v3.avif`
- `/img/inflables/gusanitos-v4.avif`
- `/img/inflables/castillo-blanco-v4.avif`
- `/img/inflables/gusanitos-v3.avif`
- `/img/inflables/mini-jungla-v3.avif`

En varios casos existen archivos `.jpg` con nombres similares, pero la referencia Markdown pide `.avif`.

2. Metadata SEO del blog fuera de rango.

Revision de los 52 articulos:

- 53 issues de metadata/contenido detectados.
- Varios titulos superan 65 caracteres.
- Varias meta descriptions superan 165 caracteres.
- No hay duplicados de title/description, pero si truncamiento probable en SERP.

3. Categorias demasiado dispersas.

Categorias actuales detectadas: Eventos, Ideas, Gusanitos, Precios, Safari, XV Años, Consejos, Decoracion, Bodas, Tematicos, Princesas, Corporativos, Guias, Seguridad, Barco Pirata, Paquetes, Adolescentes, Eventos Formales, Interiores, Cumpleanos, Ninos Pequenos, Empresa, Mini Castillo, Acuaticos, Obstaculos, Fiesta Princesas, Con Tobogan, Dragones Rojos, Coloridos, Para Ninas, Fiesta Pirata, Exterior, Jungla.

Impacto:

- Taxonomia debil.
- Dificil crear hubs internos.
- Dificil filtrar por categoria de forma consistente.

Recomendacion:

- Fortalecer `src/content.config.ts`:
  - `publishDate: z.coerce.date()` o validacion estricta ISO.
  - `heroImage` requerido para articulos publicados.
  - `heroImageAlt` requerido si hay `heroImage`.
  - `category` como enum controlado.
  - `description` con validacion de longitud.
  - `title` con validacion de longitud.
- Agregar script de validacion prebuild:
  - imagenes existen en `public`.
  - no hay rutas rotas.
  - descriptions/titles en rango.
  - no hay `draft: true` en produccion salvo que se filtre.

Prioridad: P0 para imagenes rotas, P1 para taxonomia y validaciones.

## Imagenes y assets

Resumen:

- Assets de imagen en `public/img`: 385 archivos.
- AVIF: 305.
- JPG: 79.
- PNG: 1.
- Peso total aproximado: 29 MB.
- Archivos posiblemente no usados por referencias estaticas: 144, 15.2 MB aproximados.

Nota: la cifra de "posiblemente no usados" es aproximada, porque hay assets llamados por strings dinamicos dentro de schema o templates. No borrar sin inventario final.

Problemas:

1. La regla del proyecto dice "Imagenes AVIF", pero aun hay 79 JPG.
2. Hay carpeta `public/img/inflables/old-ai-images/`.
3. Existe archivo temporal:
   - `public/img/inflables/castillo-princesas/mini-princess-renta-cdmx.avif.tmp.jpg`
4. Hay referencias a rutas de salones que no existen en `public/img/salones/`.
   - Varias paginas de directorio generan schema con `/img/salones/${salonSlug}.jpg` o `.webp`.
   - No se encontro carpeta `public/img/salones`.
5. El logo de schema es PNG, lo cual puede ser aceptable para schema, pero conviene revisar si tambien existe version optimizada para uso visual.

Recomendacion:

- Crear inventario de assets:
  - usados directos
  - usados dinamicos
  - legacy
  - candidatos a eliminar
- Convertir JPG necesarios a AVIF.
- Corregir referencias Markdown rotas.
- Crear assets faltantes para directorio o cambiar schema a imagen fallback real.
- Eliminar temporales y legacy despues de confirmar no uso.
- Considerar mover imagenes referenciadas por componentes a `src/assets` cuando convenga usar optimizacion de Astro.

Prioridad: P0 para referencias rotas, P1 para conversion/limpieza.

## SEO tecnico

### Fortalezas

- `robots.txt` existe y permite rastreo.
- Sitemap XML generado.
- Canonical presente.
- `lang="es-MX"`.
- Meta viewport presente.
- Open Graph y Twitter cards presentes.
- BreadcrumbList centralizado.
- FAQ schema disponible.
- Product schema disponible para paginas de producto.
- No se detectaron links internos rotos en el HTML generado.
- No se detectaron duplicados de title ni description en HTML generado.
- No se detectaron paginas con H1 faltante o multiples H1 en HTML generado.

### Problemas

1. `lastmod` del sitemap usa la fecha del build para todas las URLs.

En `astro.config.mjs`:

- `lastmod: new Date()`

Impacto:

- Cada deploy dice que todas las paginas cambiaron.
- Puede reducir la utilidad de `lastmod` para buscadores.

Recomendacion:

- Para blog: usar `updatedDate || publishDate`.
- Para paginas estaticas: omitir `lastmod` o usar un mapa de fechas reales.

2. Metadata demasiado larga.

Revision de 128 paginas generadas:

- Titles largos: 79.
- Titles cortos: 1.
- Descriptions largas: 82.
- Descriptions cortas: 0.
- Missing title: 0.
- Missing description: 0.
- H1 incorrecto: 0.

Secciones con mas problemas:

- Cobertura: 35 paginas, 27 titles largos, 35 descriptions largas.
- Directorio: 19 paginas, 18 titles largos, 9 descriptions largas.
- Inflables: 10 paginas, 10 titles largos, 9 descriptions largas.
- Blog: 53 paginas, 18 titles largos, 23 descriptions largas.

Recomendacion:

- Definir helper `buildSeoTitle({ primary, location, suffix })`.
- Definir helper `buildMetaDescription(...)` con limite 150-160 caracteres.
- Generar metadata desde datos, no escribir manualmente pagina por pagina.

3. Schema con riesgo de datos no verificables.

`BaseLayout.astro` agrega `aggregateRating`, `reviewCount` y reviews genericas a Product schema.

Riesgo:

- Si esas reviews/rating no corresponden a reviews reales visibles/verificables, puede considerarse schema engañoso.

Recomendacion:

- Mantener `Product` + `Offer`.
- Usar `aggregateRating` solo si hay fuente real y visible.
- Extraer reviews a data real o eliminarlas.

4. Directorio con schema de terceros.

Las paginas de salones incluyen rating/reviews de Google Maps y schema `LocalBusiness` para negocios de terceros.

Riesgo:

- Necesita alta exactitud, fechas y fuente.
- Si se mantiene, debe ser consistente y verificable.

Recomendacion:

- Crear una coleccion `venues` con datos auditables.
- Evitar reviews inventadas.
- Agregar fecha de verificacion de ficha.
- Si no se puede verificar, usar schema mas conservador: `ItemList` y ficha editorial sin reviews.

Prioridad SEO tecnica: P1.

## CSS, UI y responsive

### Fortalezas

- Existen tokens globales en `src/styles/global.css`.
- Hay `mobile.css` con mejoras responsive especificas.
- Se respeta en general la regla de hero a 2 columnas.
- No se detectaron animaciones de entrada masivas.
- Las transiciones detectadas son mayormente hover/microinteracciones.

### Problemas

1. `global.css` es demasiado grande.
   - 2,577 lineas.
   - Mezcla tokens, reset, botones, layout, hero, tarjetas y estilos de pagina.

2. `mobile.css` usa muchos `!important`.
   - Es comprensible por la cascada actual, pero senala deuda tecnica.
   - Mejor resolver especificidad desde componentes/tokens.

3. `QuickNav.astro` usa `<style is:global>`.
   - Genera CSS global para un componente que podria ser scoped.
   - Es el CSS compilado mas grande en `_astro`: 68 KB.

4. Estilos inline en paginas.
   - 496 atributos inline.
   - Dificultan temas, dark mode, responsive y consistencia.

5. Colores decorativos inline.
   - Muchos cards usan `background:linear-gradient(...)` inline.
   - Contradice el objetivo de tokens globales.

Recomendacion:

- Dividir CSS en:
  - tokens/reset/base
  - layout primitives
  - buttons/forms
  - prose/blog
  - utilities minimas
- Convertir estilos inline repetidos en clases o props tipadas.
- Reducir `!important` en `mobile.css` despues de estabilizar especificidad.
- Mantener microinteracciones hover, evitar animaciones de entrada.

Prioridad: P1/P2.

## Componentes

### Componentes con mayor deuda

1. `Header.astro`
   - Muy grande.
   - Mezcla data, render, mobile, desktop, scripts y CSS.
   - CTA apunta a `/contacto/` desde `src/data/header.md`.

2. `ProductFeature.astro` y `ServiceFeature.astro`
   - Muy grandes y similares.
   - Podrian compartir subcomponentes: media gallery, specs, CTA group, trust strip.

3. `FaqSection.astro`
   - Tiene FAQ + formulario + script + estilos.
   - El sitio tambien tiene `FaqItem.astro` y script FAQ global en `BaseLayout.astro`.
   - Hay dos sistemas de FAQ: `details/summary` y `.faq__question` con JS global.

4. `PageLayout.astro`
   - Agrega FAQ/pre-footer a todas las paginas.
   - Riesgo: todas las paginas heredan mucho HTML, aumentando peso y repeticion.
   - `faqItems` default puede crear contenido repetido a escala.

Recomendacion:

- Unificar FAQ en un solo patron accesible basado en `details/summary`.
- Quitar script FAQ global si ya no se usa.
- Hacer que el pre-footer sea opcional por tipo de pagina.
- Separar formulario de cotizacion en componente propio.

Prioridad: P1.

## Paginas de cobertura

Fortalezas:

- Cobertura local amplia.
- Contenido especifico por zona.
- Buen enfoque para SEO local.

Problemas:

- 35 archivos manuales.
- Muchos comparten estructura, estilos inline y CTAs a `/contacto/`.
- Metadata larga en las 35 descriptions.
- H2 deben ser preguntas segun regla GEO; se requiere revisar y estandarizar todos los H2 de cobertura.

Recomendacion:

- Crear `src/data/coverage.ts` o Content Collection `coverage`.
- Crear una ruta dinamica `src/pages/cobertura/[slug]/index.astro`.
- Datos por zona:
  - ciudad/alcaldia/municipio
  - colonias
  - envio
  - FAQs
  - productos recomendados
  - copy local
  - metadata
  - schema local si aplica
- Generar H2 como preguntas desde plantilla:
  - "¿Cuanto cuesta rentar inflables en Coyoacan?"
  - "¿Que colonias cubrimos en Coyoacan?"
  - "¿Que inflable conviene para una fiesta en Coyoacan?"

Prioridad: P1.

## Directorio

Fortalezas:

- Puede captar busquedas de "salones de fiestas infantiles" y empujar conversion a inflables.
- Hay estructura de fichas, relacionados, CTA y schema.

Problemas:

- 17 archivos en CDMX, muchos con estructura repetida.
- Schema de imagen apunta a rutas inexistentes como `/img/salones/${salonSlug}.jpg`.
- Hay reviews/rating de terceros que deben verificarse.
- Mucho HTML comprimido en una sola linea en varias fichas, dificil de mantener.

Recomendacion:

- Crear coleccion `venues` en Markdown o JSON/TS:
  - slug
  - name
  - zone
  - address
  - phone
  - rating
  - capacity
  - services
  - verifiedDate
  - image
  - sourceUrl opcional
- Crear `src/pages/directorio/cdmx/[slug].astro`.
- Mantener paginas indice como listados generados.
- Usar schema conservador si los datos no estan verificados.

Prioridad: P1.

## Paginas de inflables/productos

Fortalezas:

- Productos con schema Product.
- Galerias por producto.
- FAQs por producto.
- Hero de dos columnas.

Problemas:

- Precios y paquetes duplicados manualmente.
- CTAs a `/contacto/`.
- Datos repetidos entre listado, detalle, pricing, formulario y header.
- Imagenes de galeria manuales.

Recomendacion:

- Centralizar catalogo en `src/data/inflables.ts`.
- Generar paginas con `[slug].astro` si el contenido lo permite.
- Si se mantienen paginas manuales por SEO, al menos consumir datos centralizados para precio, imagen, specs y CTAs.
- Validar que `Product.price` sea numero/string consistente.

Prioridad: P0/P1.

## JavaScript

Fortalezas:

- Sitio mayormente estatico.
- JS limitado a header, formularios y FAQ.

Problemas:

- Scripts inline en layout/componentes/paginas.
- `BaseLayout.astro` tiene script global de FAQ para `.faq__question`, pero `FaqSection.astro` usa `details/summary`.
- Formularios de contacto y cotizacion duplican logica de WhatsApp.

Recomendacion:

- Crear helper unico de WhatsApp.
- Crear componente de formulario de cotizacion reutilizable.
- Eliminar JS de FAQ global si se migra todo a `details`.
- Mantener JS minimo y sin dependencias pesadas.

Prioridad: P2.

## Seguridad, accesibilidad y calidad

Fortalezas:

- Skip link presente.
- `lang="es-MX"` presente.
- Muchos enlaces externos usan `noopener noreferrer`.
- Imagenes suelen tener `alt`.

Mejoras:

- Validar accesibilidad de menus del header:
  - Escape para cerrar.
  - Focus trap en mobile panel.
  - `aria-expanded` actualizado.
  - Navegacion por teclado en mega menu.
- Revisar botones/enlaces con solo SVG para nombre accesible.
- Evitar abrir WhatsApp con `window.open` sin feedback si popup blocker interviene.
- Validar que formularios tengan estados de error visibles.

Prioridad: P2.

## Testing y control de calidad

Actualmente `package.json` solo tiene:

- `dev`
- `build`
- `preview`
- `astro`

Faltan:

- `astro check`
- lint/formato
- validacion de contenido
- validacion de enlaces internos
- validacion de assets
- prueba de build en CI con esos checks

Recomendacion de scripts:

```json
{
  "scripts": {
    "build": "astro build",
    "check": "astro check",
    "validate:content": "node scripts/validate-content.mjs",
    "validate:links": "node scripts/validate-links.mjs",
    "validate:assets": "node scripts/validate-assets.mjs",
    "qa": "npm run check && npm run validate:content && npm run validate:assets && npm run build"
  }
}
```

Tambien conviene agregar `@astrojs/check` y `typescript` si se activa `astro check`.

Prioridad: P1.

## Roadmap recomendado

### Fase 1: Correcciones criticas, 1-2 dias

Objetivo: eliminar errores que afectan conversion, confianza y produccion.

- Cambiar CTAs de conversion de `/contacto/` a `/cotizar/`.
- Corregir `src/data/header.md` para que "Cotiza Gratis" apunte a `/cotizar/`.
- Corregir sticky CTA mobile en `BaseLayout.astro`.
- Corregir hero de `/cotizar/` que apunta a `/contacto/`.
- Actualizar modelos y precios en `/cotizar/`.
- Corregir 10 imagenes rotas del blog.
- Quitar archivo temporal `.tmp.jpg`.
- Ejecutar `npm run build`.

### Fase 2: Datos centralizados, 3-5 dias

Objetivo: reducir duplicacion y evitar inconsistencias futuras.

- Crear `src/data/site.ts` con telefono, WhatsApp, email, dominio y rutas clave.
- Crear `src/data/inflables.ts`.
- Actualizar formularios, header, catalogo y paginas de producto para consumir datos centrales.
- Crear helper `buildWhatsAppUrl`.
- Extraer schema helpers a `src/lib/schema.ts`.

### Fase 3: Validaciones de calidad, 2-3 dias

Objetivo: que los errores fallen antes de deploy.

- Agregar `astro check`.
- Agregar validacion de imagenes referenciadas en Markdown.
- Agregar validacion de title/description.
- Agregar validacion de CTAs de conversion.
- Agregar validacion de enlaces internos post-build.
- Integrar checks en GitHub Actions.

### Fase 4: Refactor de familias de paginas, 1-2 semanas

Objetivo: bajar deuda estructural.

- Convertir cobertura a data + plantilla dinamica.
- Convertir directorio a data/collection + plantilla dinamica.
- Evaluar convertir productos a plantilla dinamica o semi-dinamica.
- Unificar breadcrumbs visuales.
- Unificar FAQ.

### Fase 5: Performance, limpieza y polish, 3-5 dias

Objetivo: mejorar velocidad y mantenibilidad visual.

- Inventario final de assets.
- Convertir JPG necesarios a AVIF.
- Borrar legacy confirmado.
- Reducir CSS inline.
- Dividir `global.css`.
- Reducir `mobile.css` con `!important`.
- Revisar accesibilidad de header mobile/desktop.

## Lista priorizada de issues

### P0

- CTAs de conversion apuntan a `/contacto/` en vez de `/cotizar/`.
- Precios/modelos inconsistentes en `/cotizar/`.
- 10 referencias de imagen rotas en blog Markdown.
- Sitemap `lastmod` se actualiza con la fecha de cada build para todas las URLs.

### P1

- Centralizar catalogo de inflables.
- Agregar validaciones prebuild.
- Metadata SEO larga en 79 titles y 82 descriptions.
- Refactor de cobertura a datos + plantilla.
- Refactor de directorio a datos + plantilla.
- Revisar schema de ratings/reviews.
- Unificar FAQ y formulario de cotizacion.
- Limpiar/convertir imagenes JPG y temporales.

### P2

- Dividir `Header.astro`.
- Dividir `global.css`.
- Reducir estilos inline.
- Mejorar accesibilidad del menu.
- Extraer helpers de schema y WhatsApp.
- Revisar taxonomia del blog.

## Estado final de auditoria

El sitio esta en buena posicion para mejorar rapido. No recomiendo rehacer todo desde cero. Recomiendo una optimizacion profesional por capas:

1. Primero conversion y consistencia comercial.
2. Luego validaciones para proteger el build.
3. Despues datos centralizados.
4. Finalmente refactor estructural y limpieza visual/performance.

Este orden mejora el sitio sin romper lo que ya funciona.
