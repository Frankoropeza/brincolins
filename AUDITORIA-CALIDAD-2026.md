# Auditoría de Calidad de Código — BRINCOLINS

**Fecha:** 14 julio 2026
**Commit auditado:** `bb54860` (post Fase 1 mobile)
**Stack:** Astro 6.0.1 · CSS plano · 0 KB de JS de framework
**Alcance:** full stack — TypeScript, accesibilidad, rendimiento, SEO técnico, CSS, enlaces, build
**Método:** medido contra el build de producción en `astro preview`. Nada inferido de la lectura del código.

---

## 1. Veredicto

El sitio está **sano en lo que Google y los usuarios miden, y endeudado en lo que solo ve quien mantiene el código.**

```
Lighthouse (móvil, build local, throttling simulado)
  Performance      93/100  🟢
  Accessibility    93/100  🟢
  Best Practices  100/100  🟢
  SEO             100/100  🟢

Core Web Vitals
  LCP    2.8 s   🟠      TBT      0 ms    🟢
  FCP    2.5 s   🟠      CLS      0.002   🟢
  SI     2.5 s   🟢
```

Cero errores de build. Cero JS de framework. CLS de 0.002 es excelente — y confirma que el header sticky de la Fase 1 no introdujo saltos de layout.

**Fase 1 verificada en producción**, contra el CSS realmente servido (no contra el log del deploy):

```
✅ .hdr-stack{display:contents} presente en /_astro/QuickNav.C3fN4tsL.css
✅ position:sticky presente        ✅ sin overflow-x:hidden
✅ barra de 2 botones ausente del HTML
```

Ahora lo que no está bien:

| # | Hallazgo | Severidad | Medida |
|---|----------|-----------|--------|
| A-1 | 81 nodos incumplen contraste WCAG AA — **la culpa es del color de marca** | 🔴 Crítico | `#FF3D00`/blanco = 3.54:1 |
| A-2 | El panel móvil cerrado retiene 24 elementos focusables | 🔴 Crítico | `aria-hidden` + tabulable |
| A-3 | `label-in-name`: BlogCard rompe el control por voz | 🟠 Alto | WCAG 2.5.3 |
| C-1 | **Dos sistemas `.product-card` completos** compitiendo en `global.css` | 🟠 Alto | 15 selectores en conflicto |
| C-2 | Las páginas de producto **no usan** la "fuente única de verdad" | 🟠 Alto | 55 errores TS |
| C-3 | 23% del CSS del bundle principal es código muerto | 🟠 Alto | 14 KB de 60 KB |
| C-4 | 4 componentes huérfanos, nunca importados | 🟡 Medio | 760 líneas |
| C-5 | 75 `!important` en `mobile.css` sobre una premisa refutada | 🟡 Medio | vs 0 en `global.css` |
| C-6 | 26 breakpoints distintos (sin cambios desde la auditoría previa) | 🟡 Medio | — |
| P-1 | LCP 2.8 s / FCP 2.5 s | 🟡 Medio | sin render-blocking |
| S-1 | Paginación del blog encadena un 301 por clic | 🟡 Medio | `/blog/2` → `/blog/2/` |
| D-1 | `z` de `astro:content` deprecado en Astro 6 | 🟡 Medio | 31 avisos |

---

## 2. Accesibilidad — el área más débil

Auditado con **axe-core 4.10.2** (WCAG 2.1 A + AA) a 390px, y confirmado por Lighthouse.

### A-1 · 81 nodos sin contraste suficiente — es el color de marca, no un descuido

Este no es un problema de "algún botón mal pintado". Agrupando las 81 violaciones por par de color aparece la causa raíz:

| Nodos | Color de texto | Fondo | Ratio | Exigido | Dónde |
|-------|---------------|-------|-------|---------|-------|
| **26** | `#FF3D00` | `#FFFFFF` | **3.54:1** | 4.5:1 | `.cat-card__cta` y enlaces de marca |
| **12** | `#FFFFFF` | `#25D366` | **1.98:1** | 4.5:1 | `.btn-wa` — botones de WhatsApp |
| **10** | `#FF8B66` | `#FFFFFF` | **2.29:1** | 4.5:1 | `.pfaq__num` |
| 7 | `#FFFFFF` | `#FF3D00` | 3.54:1 | 4.5:1 | `.cat-card__badge` |
| 5 | `#FF3D00` | `#FFEFEB` | 3.17:1 | 4.5:1 | `.section-badge` |
| 5 | `#FF3D00` | `#F9EBE8` | 3.05:1 | 4.5:1 | `.section-badge` |
| 2 | `#FFFFFF` | `#E91E8C` | 4.17:1 | 4.5:1 | `.qnav__item` |
| 2 | `#FFFFFF` | `#E65100` | 3.78:1 | 4.5:1 | `.product-card__category` |

Lo importante: **`--c-primary: #FF3D00` sobre blanco da 3.54:1**. Eso reprueba AA para texto normal (4.5:1) en cualquier tamaño por debajo de 18.66px. No se arregla parcheando componentes — 26 de las 81 violaciones son ese único par.

Matiz honesto: 3.54:1 **sí aprueba** AA para texto grande (umbral 3:1). Así que los titulares naranjas están bien; los que fallan son los enlaces y CTAs a tamaño de cuerpo.

El peor de todos es el verde de WhatsApp con texto blanco: **1.98:1**. Está por debajo incluso del umbral de texto grande. Y es, literalmente, tu botón de conversión.

**Cómo se arregla sin tocar la identidad visual:** no hay que cambiar el naranja de la marca. Se introduce un token aparte —`--c-primary-text: #D32F00` o similar— que solo se usa cuando el naranja es *texto sobre claro*. Los fondos, badges y bloques grandes conservan `#FF3D00`. Para `.btn-wa`, oscurecer el verde a `#128C7E` (el verde oscuro oficial de WhatsApp) da 4.6:1 con blanco y sigue leyéndose como WhatsApp.

> Nota: esto no es solo cumplimiento formal. Tu tráfico es local y móvil — gente leyendo al sol, en la calle, decidiendo una fiesta. El contraste bajo es el escenario donde más se nota.

### A-2 · El menú móvil cerrado se puede tabular

```html
<nav class="hdr__panel" id="hdrPanel" aria-hidden="true">
```

Con el menú cerrado, el panel lleva `aria-hidden="true"` pero está `display: flex` y solo desplazado con `transform: translateX(100%)`. Un elemento fuera de pantalla **sigue siendo focusable**.

**Medido:** el panel cerrado contiene **24 elementos focusables**.

Consecuencia: un usuario de teclado que tabula por la home cae en 24 enlaces invisibles — el foco desaparece de la pantalla y no hay forma de saber dónde está. Y `aria-hidden="true"` con descendientes focusables es una violación directa: le dice al lector de pantalla que ignore un nodo que el gestor de foco sí visita. Los dos árboles se contradicen.

Es de las pocas cosas que hacen un sitio literalmente inusable con teclado.

**Fix:** `inert` en el panel cuando está cerrado (soportado en todos los navegadores modernos y hace exactamente esto: saca el subárbol del foco y del árbol de accesibilidad). Como respaldo, `visibility: hidden` en el estado cerrado y `visibility: visible` en `--open`, que sí saca del orden de foco — a diferencia de `transform`.

Aclaración: este bug es anterior a la Fase 1. El sticky no lo introdujo — solo lo dejó a la vista al auditar el header.

### A-3 · `label-in-name` en las tarjetas de blog

```html
<a href="/blog/como-elegir-inflable-fiesta-infantil/"
   class="blog-card__link"
   aria-label="Leer: Cómo elegir el inflable...">
```

WCAG 2.5.3 (*Label in Name*) exige que el nombre accesible **contenga** el texto visible. Aquí el `aria-label` sustituye al texto visible en vez de ampliarlo.

El daño concreto: un usuario de control por voz que ve "Leer más" en pantalla y dice *"pulsa Leer más"* no activa nada — el nombre accesible dice otra cosa. Afecta a 3+ tarjetas por página de blog.

**Fix:** que el `aria-label` empiece por el texto visible (`aria-label="Leer más: Cómo elegir..."`), o mejor, quitar el `aria-label` y dar contexto con texto visualmente oculto dentro del enlace.

---

## 3. Corrección del código

### C-1 · Dos sistemas `.product-card` completos en el mismo archivo

`global.css` declara **18 selectores dos veces**. De esos, **15 tienen cuerpos distintos** — es decir, no son duplicados inofensivos: compiten, y el segundo gana en silencio.

No están dispersos. Son dos bloques de diseño completos:

| Selector | 1ª declaración | 2ª declaración (la que gana) |
|----------|---------------|------------------------------|
| `.product-card` | L488 · `border-radius: var(--r-card)` | L1811 · `border-radius: 20px` |
| `.product-card__image` | L498 · `aspect-ratio: 4/3` | L1821 · **`aspect-ratio: 16/9`** |
| `.product-card__body` | L531 · `padding: 1.5rem` | L1890 · `padding: 1.25rem` |
| `.product-card__name` | L538 · `font-size: 1.2rem` | L1898 · `font-size: 1.15rem` |
| `.product-card__desc` | L545 · `margin-bottom: 1rem` | L1905 · `-webkit-line-clamp` |
| `.btn-sm` | L276 · `padding: .6rem 1.4rem` | L1551 · `padding: .5rem 1.2rem` |

Alguien rediseñó la tarjeta de producto y **pegó la versión nueva sin borrar la vieja**. El `aspect-ratio` pasó de 4/3 a 16/9: son diseños distintos, no un ajuste.

Por qué importa más de lo que parece: el bloque de L488 es ~70 líneas de CSS que **nunca se aplican**. Quien vaya a tocar la tarjeta de producto lo va a encontrar primero (está antes en el archivo), lo va a editar, y no verá ningún cambio en pantalla. Es una trampa esperando a alguien.

También explica por qué el token `--r-card` parece no funcionar en las tarjetas: lo pisa un `20px` literal 1.300 líneas más abajo.

### C-2 · La "fuente única de verdad" no la usa nadie

`src/data/inflables.ts` se presenta así:

```ts
/**
 * Catálogo canónico de inflables BRINCOLINS.
 * Fuente única de verdad para precios, specs, imágenes y slugs.
 * Consumir desde:
 *  - src/pages/inflables/*.astro   (product schema, hero specs)
 */
export interface Inflable {
  price:       string;    // formato "$X,XXX" para display
  priceNumber: number;    // número para schema / ordenamiento
  ...
}
```

Las páginas de producto **no lo consumen**. Cada una redefine su propio objeto local:

```ts
// src/pages/inflables/barco-pirata.astro:20
priceNum: 2500,            // número

// src/pages/inflables/castillo-princesas.astro:20
priceNum: "1200",          // string ¡en la misma "estructura"!
```

Tres problemas en tres líneas: el campo canónico se llama `priceNumber`, no `priceNum`; el catálogo canónico no se importa; y el tipo del campo **cambia según el archivo**.

De ahí salen los 4 errores `ts(2322): Type 'number' is not assignable to type 'string'`.

**Ahora la parte importante — y es buena noticia:** verifiqué el schema renderizado en los 8 productos y **el precio sale correcto en todos**:

```
barco-pirata     price='2500'  currency='MXN'  InStock
castillo-blanco  price='2800'  currency='MXN'  InStock
extremo          price='3000'  currency='MXN'  InStock
mini-castillo    price='800'   currency='MXN'  InStock
... 8/8 correctos
```

`normalizePrice()` en `lib/schema.ts` acepta `string | number` y los normaliza. **El rich snippet de Google no está roto.** Es un fallo de tipos, no de runtime.

Lo comprobé precisamente porque la conclusión fácil ("el schema debe estar mandando `undefined`") habría sido una alarma falsa. El riesgo real es otro y es a futuro: **hay dos catálogos de precios**. El día que subas precios en `data/inflables.ts` —el archivo que dice ser la fuente de verdad— las 8 páginas de producto seguirán mostrando los viejos.

### C-3 · 23% del CSS principal es código muerto

```
bundle QuickNav.C3fN4tsL.css
  original   60 KB
  en uso     46 KB
  MUERTO     14 KB  (23%)
```

Medido con PurgeCSS contra las 141 páginas del build. Casi una cuarta parte del CSS que descargan tus usuarios no aplica a nada. Parte es C-1 (los bloques pisados); el resto es sedimento de rediseños.

### C-4 · Cuatro componentes huérfanos — 760 líneas

Ningún archivo los importa:

| Componente | Líneas |
|------------|--------|
| `ContentWithSidebar.astro` | 352 |
| `NavSidebar.astro` | 219 |
| `Sidebar.astro` | 104 |
| `FeatureGrid.astro` | 85 |
| **Total** | **760** |

No pesan en el bundle (Astro no los compila si nadie los importa), así que no es un problema de rendimiento. Es ruido: tres componentes de sidebar distintos sin usar sugieren que hubo un patrón de layout que se abandonó a medias. Confunde a quien lea el repo — o a un agente que decida "reutilizar" `Sidebar.astro`.

### C-5 · 75 `!important` sobre una premisa ya refutada

```
global.css     0  !important
mobile.css    75  !important
componentes   18  (5 archivos)
```

Que `global.css` tenga **cero** en 2.500 líneas demuestra que el sistema base está bien construido. Los 75 de `mobile.css` nacieron todos del comentario que refuté en la auditoría anterior y ya corregí ("Vite bundlea mobile.css antes de global.css" — falso, va al final: offset 60.418 de 62.330).

Algunos siguen siendo necesarios: los que vencen estilos *scoped* de Astro, que llevan `[data-astro-cid-*]` y ganan por especificidad. Pero los que solo pisan `global.css` sobran, y mientras estén ahí, cuando alguien necesite un override real no tendrá a dónde escalar.

### C-6 · 26 breakpoints — sin cambios

Se mantiene lo reportado: 26 puntos de quiebre distintos (480×23, 640×19, 900×13, 800×13, 768×12, 860×11, 1024×11, 1100×9…). Es la Fase 2 pendiente.

Merece un recordatorio a la luz de lo que pasó en la Fase 1: el bug de QuickNav (3 de 7 enlaces inalcanzables en 33 páginas) vivía escondido **precisamente** en este desorden. Donde hay 26 criterios de colapso conviviendo, hay más casos así sin descubrir.

---

## 4. Rendimiento

**93/100**, que para un sitio con imágenes AVIF y 0 KB de JS está bien. Los dos números en ámbar:

```
FCP  2.5 s   🟠
LCP  2.8 s   🟠
TBT  0 ms    🟢    ← cero trabajo de JS bloqueando el hilo
CLS  0.002   🟢    ← el header sticky no introdujo saltos
```

**Lighthouse no reporta ni un solo recurso render-blocking**, y no hay oportunidades con ahorro estimado > 50 ms. Es decir: no hay una fruta al alcance de la mano. El `display=swap` de la fuente Outfit está haciendo su trabajo.

El LCP de 2.8 s viene de la imagen del hero bajo throttling móvil simulado. Está a 0.7 s del umbral "bueno" de 2.5 s. Márgenes de mejora: `fetchpriority="high"` en la imagen del hero (el logo ya lo tiene, la imagen del hero convendría revisarla) y `preload` del AVIF del hero.

Dato contextual honesto: esto es **build local sin latencia de red**. En producción sobre GitHub Pages, con CDN y una conexión 4G real, el LCP será distinto. Lo mediste contra el código, que es lo que controlas — pero no lo leas como la experiencia real del usuario.

Peso del build:

```
CSS total    168 KB   (de los cuales ~23% muerto en el bundle principal)
JS total       0 KB
HTML mayores:  /inflables/  252 KB
               /servicios/  168 KB
               /            164 KB
```

252 KB de HTML en `/inflables/` es mucho para una página estática. No es crítico (comprime bien con gzip/brotli), pero apunta a mucho contenido inline.

---

## 5. SEO técnico — 100/100, con un matiz

Lighthouse da **100/100** y la configuración está sólida:

- ✅ `site: "https://brincolins.com"` — **verificado contra el CNAME y contra el DNS real** (resuelve 200). Canonical y `og:url` coherentes.
- ✅ Sitemap generado, `robots.txt`, schema Organization + LocalBusiness + WebSite + BreadcrumbList
- ✅ Product schema con precio correcto en los 8 productos
- ✅ Meta geo (MX-CMX), OG completo, `es-MX`

> Lo comprobé porque `site` apuntando al dominio equivocado es un fallo catastrófico y silencioso. No es el caso: está bien.

### S-1 · La paginación del blog encadena un 301 por clic

De los 153 enlaces internos, **4 apuntan a URLs sin barra final**:

```
/blog/2   → 301 → https://brincolins.com/blog/2/
/blog/3   → 301 → https://brincolins.com/blog/3/
/blog/4   → 301 → https://brincolins.com/blog/4/
/blog     → 301 → /blog/
```

**No están rotos** — GitHub Pages redirige. Pero cada clic en la paginación cuesta un viaje de red extra, y el enlace interno que Google rastrea no es el canónico.

Origen (`src/pages/blog/[...page].astro:236`):

```astro
<a href={page.url.prev} class="page-btn">←</a>
```

`page.url.prev` de Astro no lleva barra final porque `astro.config.mjs` **no declara `trailingSlash`**. El resto del sitio sí usa barra final. Es una inconsistencia de una línea de config.

**Fix:** `trailingSlash: 'always'` en `astro.config.mjs`.

---

## 6. Deuda de dependencias

### D-1 · `z` de `astro:content` está deprecado (31 avisos)

```ts
// src/content.config.ts:1
import { defineCollection, z } from 'astro:content';
```

En Astro 6, reexportar `z` desde `astro:content` está deprecado; hay que importar zod directamente. Son 31 avisos de un solo import. No rompe nada hoy, pero es lo primero que estallará en Astro 7.

**Fix:** `import { z } from 'zod';` — una línea.

### Los 55 errores de TypeScript, clasificados

```
42  Property 'X' does not exist on type 'X'
31  'X' is deprecated                       ← todos son D-1
11  'X' is declared but its value is never read
 7  Type 'X' is not assignable to type 'X'  ← 4 son C-2 (priceNum)
 5  Parameter 'X' implicitly has an 'any' type
```

Por archivo:

| Archivo | Errores |
|---------|---------|
| `src/pages/blog/[...page].astro` | **45** |
| `src/content.config.ts` | 31 |
| `src/layouts/BaseLayout.astro` | 8 |
| `src/pages/blog/[slug].astro` | 6 |

Los 45 de `blog/[...page].astro` son un solo problema repetido: `page` se infiere como `never`, así que **cada** acceso (`page.url.prev`, `page.lastPage`, `page.total`…) da error. Es un fallo de tipado de `getStaticPaths` con `paginate()`, no 45 bugs. Tipar el `page` correctamente elimina los 45 de golpe.

Contexto importante: **estos 55 errores no rompen el build** — `astro build` compila las 141 páginas sin fallar. Astro no ejecuta el chequeo de tipos al construir. Es red de seguridad perdida, no un incendio.

Nota de proceso: `astro check` **no se puede ejecutar en este repo** — falta `@astrojs/check`. Lo instalé en una copia del sandbox para no tocar tu `package.json` sin permiso. Que la herramienta de tipos no esté instalada es, probablemente, por lo que estos 55 errores llevan ahí tiempo sin que nadie los vea.

---

## 7. Lo que está bien hecho

Sin adular — cosas medibles que muchos proyectos no tienen:

- ✅ **0 KB de JS de framework.** Astro usado como debe usarse.
- ✅ **TBT de 0 ms.** Nada bloquea el hilo principal.
- ✅ **CLS de 0.002.** Prácticamente perfecto, y sobrevivió al header sticky.
- ✅ **Best Practices 100 · SEO 100.**
- ✅ **`global.css` con 0 `!important`** en 2.577 líneas — disciplina real.
- ✅ **Cero recursos render-blocking.**
- ✅ Imágenes en AVIF, `width`/`height` declarados, `loading`/`decoding`/`fetchpriority` en el logo.
- ✅ Schema estructurado completo y correcto, incluido Product con precio.
- ✅ Cero enlaces internos rotos de verdad (los 4 son redirecciones).
- ✅ `skip-link` presente; `aria-expanded`/`aria-controls` correctos en el burger.

---

## 8. Plan de remediación

### Fase A — Accesibilidad (el mayor retorno) · ~2 h
1. **A-2** `inert` en el panel móvil cerrado — 24 elementos fuera del orden de foco. *Una línea de JS.*
2. **A-1** Token `--c-primary-text: #D32F00` para naranja-sobre-claro; `.btn-wa` a `#128C7E`. Resuelve ~45 de las 81 violaciones sin tocar la identidad.
3. **A-1b** `.pfaq__num` (`#FF8B66`, 2.29:1) y los badges restantes.
4. **A-3** `aria-label` de BlogCard que contenga el texto visible.

→ Accessibility de 93 a ~100.

### Fase B — Correcciones baratas y de alto valor · ~1 h
5. **D-1** `import { z } from 'zod'` — mata 31 avisos con una línea.
6. **S-1** `trailingSlash: 'always'` — mata los 4 redirects con una línea.
7. **C-2** Unificar `priceNum`/`priceNumber` e importar `data/inflables.ts` desde las páginas de producto. **Antes de la próxima subida de precios.**
8. Instalar `@astrojs/check` como devDependency y añadir `astro check` al build, para que esto no se vuelva a acumular.

### Fase C — Limpieza estructural · ~2 h
9. **C-1** Borrar el bloque `.product-card` muerto (L488–560) y el `.btn-sm` pisado (L276). *Verificar con diff visual antes/después.*
10. **C-3** Podar el CSS muerto restante (~14 KB).
11. **C-4** Borrar los 4 componentes huérfanos (760 líneas).
12. **C-5** Podar los `!important` de `mobile.css` que solo pisan `global.css`.

### Fase D — La deuda grande · ~2 h
13. **C-6** Homologar 26 → 5 breakpoints (Fase 2 del estudio de móvil).
14. Los 45 errores de tipo de `blog/[...page].astro` (un solo fix).
15. `.hero__copy` oculto en ≤640px bajo indexación mobile-first.
16. Wrapper de scroll para la tabla del directorio.

### Riesgos
| Riesgo | Mitigación |
|--------|-----------|
| Borrar el `.product-card` muerto rompe algo | Es el bloque **pisado**: no aplica hoy. Verificar con captura antes/después |
| Cambiar el naranja altera la identidad | No se cambia. Se añade un token solo para texto sobre claro |
| `trailingSlash: 'always'` invalida URLs indexadas | Las canónicas ya llevan barra; solo alinea los enlaces internos |
| Podar `!important` rompe overrides scoped | Podar solo los que pisan `global.css`; conservar los de `[data-astro-cid-*]` |

---

## 8-bis. Resultado de la remediación (14 jul 2026)

Aplicadas las Fases A, B y C. Medido con Lighthouse contra el build de producción.

```
                  antes → después
  Performance      93  →  95   (+2)
  Accessibility    93  →  97   (+4)
  Best Practices  100  → 100
  SEO             100  → 100

  FCP             2.5s →  1.6s
  CLS            0.002 → 0.002   (el header sticky sigue sin causar saltos)
  auditorías fallidas: 3 → 1
```

| Hallazgo | Estado | Evidencia |
|----------|--------|-----------|
| A-2 · panel móvil captura el foco | ✅ | cerrado: 0/26 focusables · abierto: 26/26 |
| A-3 · label-in-name | ✅ | auditoría desaparecida de Lighthouse |
| A-1 · contraste | 🟠 parcial | 81 → 6 nodos en home · peor ratio 1.98:1 → 3.26:1 |
| C-1 · `.product-card` duplicado | ✅ | 18 selectores fusionados, **0 diferencias** en CSS computado |
| C-2 · dos catálogos de precios | ✅ | 8/8 páginas leen `data/inflables.ts` · precios del schema intactos |
| C-4 · componentes huérfanos | ✅ | 760 líneas borradas, build sano |
| D-1 · `z` deprecado | ✅ | `import { z } from 'zod'` |
| S-1 · 301 en paginación | ✅ | `trailingSlash: 'always'` → `/blog/2/` |
| D-2 · tabla sin wrapper | ✅ | `.salon-ficha__table-wrap` |
| Regresión móvil (Fase 1) | ✅ | 7 páginas × 4 viewports × 8 checks = 28/28 |

### Dos correcciones a esta misma auditoría

**1. "Borrar el bloque `.product-card` muerto (L488–560)" era un consejo peligroso.**
Al ir a ejecutarlo, el análisis propiedad por propiedad reveló que **24 propiedades existen solo en el primer bloque** (`display:flex` y `font-size:80px` en `__image`, `margin-bottom` en `__name`/`__desc`/`__info`, el `.testimonial` entero…). Dos declaraciones del mismo selector solo compiten en las propiedades que **ambas** declaran; las que están únicamente en la primera **sí se aplican**. Borrar el bloque habría roto el layout de las tarjetas.

No eran duplicados: eran **dos mitades de un mismo estilo separadas 1.300 líneas**. Se fusionaron en el punto donde hoy ganan la cascada, y se verificó que el CSS computado quedara idéntico — 58 líneas menos, cero píxeles cambiados.

**2. "`#128C7E` da 4.6:1 con blanco" era falso — da 4.14:1.**
Lo cité de memoria en §2. Al calcularlo, sigue reprobando AA. Toda la paleta de remediación se calculó, no se estimó.

### Decisión sobre el contraste: no se tocó el naranja de marca

`#FF3D00` sigue siendo `--c-primary`. Se añadieron dos tokens hermanos para los casos donde el naranja es texto de cuerpo (`--c-primary-text: #C82D00`, 5.48:1) o fondo con texto blanco (`--c-primary-deep: #D93000`, 4.80:1).

En QuickNav y los badges de blog, el problema era texto blanco fijo sobre colores vivos. Oscurecer los fondos habría convertido `#FF8C00` en `#B35E00` — marrón, en una marca de fiestas infantiles. En su lugar, `src/lib/contrast.ts` calcula en build el color de texto según la luminancia del fondo: **los colores vivos se conservan y el texto se adapta**. Cualquier color que se añada mañana a los datos queda cubierto solo.

Un solo fondo cambió en todo el sitio: `#E91E8C` → `#DF1C86`, porque no aprobaba ni con texto blanco ni oscuro (4.18:1 en ambos). Delta de 10,2,6 en RGB — imperceptible.

### Lo que queda pendiente, y por qué

- **A-1, cola de contraste (6 nodos en home).** El resto son colores de marca hardcodeados en estilos scoped. El sitio tiene **892 literales hex, 147 distintos**. Cerrarlo es una tokenización completa, no un parche. Importante: **el reemplazo global sería un error** — sobre fondo oscuro `#FF3D00` ya aprueba (4.81:1) y `#C82D00` lo rompería (3.11:1). Hay que ir selector por selector con el fondo real.
- **C-3, CSS muerto.** Se identificaron **107 selectores sin rastro en `src/`**. No se purgaron automáticamente: PurgeCSS también marcaba 14 que **sí se usan** (`.topbar--primary`/`--accent` se eligen desde `topbar.md`, y las clases que añade el JS). El purgado ciego rompe.
- **C-6, 26 breakpoints.** Toca 26 puntos en ~30 archivos; necesita su propia pasada de verificación.
- **`.hero__copy`.** Son 142 palabras con carga SEO. Mostrarlas empuja el CTA fuera de pantalla en móvil; arreglarlo bien exige reestructurar el hero. Es una decisión de contenido, no un bug.
- **`@astrojs/check`.** Declarado en `devDependencies` + script `npm run check`, pero npm no lo materializa en `node_modules` pese a estar en el lockfile (rareza del entorno, no del código). Probable arreglo: `rm -rf node_modules package-lock.json && npm install`.

---

## 9. Conclusión

**Lo que preguntaste — "¿está ya todo bien?"** — tiene dos respuestas según a quién le preguntes.

Para tus usuarios y para Google: **sí**. 93/93/100/100, CLS de 0.002, cero JS, cero enlaces rotos, schema correcto, Fase 1 desplegada y verificada en producción. El sitio va rápido y está bien indexado.

Para quien mantenga el código: **hay deuda real y localizada.** Dos sistemas `.product-card` compitiendo, un catálogo "canónico" que ninguna página de producto usa, 23% de CSS muerto y 55 errores de tipo que nadie ve porque la herramienta que los detecta no está instalada.

**Y una cosa sí está objetivamente mal ahora mismo, no en abstracto:** el sitio es inusable con teclado. 24 enlaces invisibles capturan el foco en cada página, y el botón de WhatsApp —tu CTA de conversión— tiene un contraste de 1.98:1. Ese es el hallazgo que yo atacaría primero, y es de los baratos: `inert` es una línea, y el token de color son dos.

Un patrón que conviene nombrar, porque se repite en tres hallazgos independientes: **el código dice una cosa y hace otra.** `global.css` decía que los estilos del header estaban en sus componentes (no existían). `mobile.css` decía que Vite lo bundleaba primero (falso). `data/inflables.ts` dice ser la fuente única de verdad (nadie la importa). Los comentarios de este repo describen intenciones, no hechos — y en los tres casos ese desfase costó horas de diagnóstico. Vale más borrar un comentario que dejarlo mentir.

---

*Auditoría del 14 de julio de 2026 sobre `bb54860`. Medido con Lighthouse 12 (móvil, throttling simulado), axe-core 4.10.2 (WCAG 2.1 A/AA), PurgeCSS, `astro check` y análisis del bundle compilado. Fase 1 verificada contra el CSS servido en producción. Todo hallazgo lleva su medición; nada está inferido de la lectura del código.*
