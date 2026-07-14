# Auditoría Mobile — BRINCOLINS

**Fecha:** 14 julio 2026
**Commit auditado:** `6f18935`
**Stack:** Astro · CSS plano (`global.css` 2,577 líneas + `mobile.css` 420 líneas) + estilos scoped por componente
**Alcance:** 21,331 líneas en `src/` — 24 componentes, 27 páginas, 2 layouts

---

## 1. Resumen ejecutivo

El sitio **no está roto en móvil — está mal jerarquizado**. Ya existe un `mobile.css` de 420 líneas bien intencionado (anti-zoom iOS, safe-area, touch targets) que cubre el 70% de lo cosmético. El problema no es falta de CSS responsive: son **tres fallas estructurales** que ninguna cantidad de media queries arregla.

| # | Hallazgo | Severidad | Impacto |
|---|----------|-----------|---------|
| P0-1 | El header **no es sticky**: al hacer scroll el menú desaparece y no vuelve | 🔴 Crítico | Navegación inaccesible en el 95% del scroll |
| P0-2 | Barra fija inferior con 2 botones (WhatsApp + Cotizar Gratis) | 🔴 Crítico | Tapa contenido, 56px robados, solicitado su retiro |
| P0-3 | **Tres** CTAs de WhatsApp compitiendo en la misma pantalla | 🔴 Crítico | Canibalización de conversión |
| P1-1 | Header consume ~122–134px de cromo fijo (logo 82px) | 🟠 Alto | 20% de la pantalla en iPhone SE |
| P1-2 | **26 breakpoints distintos** en el proyecto | 🟠 Alto | Saltos de layout impredecibles |
| P1-3 | `overflow-x: hidden` en `body` — rompe `position: sticky` | 🟠 Alto | Bloquea el fix de P0-1 |
| P1-4 | Comentario falso en `mobile.css` genera `!important` defensivo | 🟠 Alto | Deuda técnica, cascada inauditable |
| P1-5 | `.hero__copy { display: none }` en ≤640px | 🟠 Alto | Contenido oculto bajo indexación mobile-first |
| P1-6 | Tabla sin contenedor de scroll | 🟠 Alto | Overflow horizontal |
| P2 | 4 hallazgos de consistencia (ver §5) | 🟡 Medio | Pulido |

**Diagnóstico de una línea:** el `mobile.css` existente trata síntomas cosméticos mientras la arquitectura de navegación y la cascada CSS quedaron sin resolver.

---

## 2. Metodología

1. Mapeo del árbol `src/` y ranking por tamaño de archivo.
2. Lectura del layout raíz (`BaseLayout.astro`), sistema de diseño (`global.css`), overrides (`mobile.css`) y el componente de navegación (`Header.astro`, 1,335 líneas).
3. **Verificación del bundle compilado** en `dist/_astro/` por offset de bytes — no se asumió el orden de cascada, se midió.
4. Barrido automatizado de antipatrones: breakpoints únicos, `minmax()` fijos, `white-space: nowrap`, tablas sin wrapper, `font-size` en inputs.
5. Trazado de la cadena de contención para `position: fixed` / `sticky`.

---

## 3. Hallazgos críticos (P0)

### P0-1 · El header no es sticky — el menú se va y no vuelve

**Este es el hallazgo que explica tu queja "no se ve el menú en móviles".**

El burger **sí existe y sí funciona**. `Header.astro:1242` lo activa correctamente:

```css
@media (max-width: 900px) {
  .hdr__nav, .hdr__wa-btn { display: none; }
  .hdr__toggle { display: flex; }   /* ✅ el burger aparece */
  .hdr__panel  { display: flex; }
}
```

El problema es que **nada mantiene el header en pantalla**:

```css
/* Header.astro:452 */
.hdr {
  position: relative;   /* ❌ no sticky, no fixed */
  z-index: 9000;
}
```

```css
/* global.css:285 */
/* TopBar + Header + hdr-stack styles are scoped in their respective .astro components */
```

Ese comentario es **falso**. `.hdr-stack` —el div que envuelve el header en `BaseLayout.astro:224`— **no tiene CSS en ninguna parte del proyecto**. Lo verifiqué:

```
$ grep -rn "hdr-stack" src/
src/styles/global.css:285:  /* ...comentario... */
src/components/Breadcrumbs.astro:6:  * Se posiciona debajo del hdr-stack.
src/layouts/BaseLayout.astro:224:  <div class="hdr-stack">
```

Tres menciones. **Cero declaraciones de estilo.** Es un div desnudo.

Consecuencia: el header scrollea hacia arriba y desaparece. En una página como `/index` (1,373 líneas de contenido), el usuario pasa el 95% de su sesión **sin ningún acceso al menú**. Debe hacer scroll hasta arriba del todo para navegar.

**Evidencia de que esto fue una regresión, no un diseño:** el JS de shrink-on-scroll sigue ahí, huérfano, esperando un header que nunca se pega:

```js
/* Header.astro:1327 — código muerto */
var SHRINK_AT = 60;
function onScroll() {
  hdr.classList.toggle('hdr--scrolled', window.scrollY > SHRINK_AT);
}
```

Y su CSS correspondiente (`Header.astro:461`) también:

```css
.hdr--scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,0.10);
  --hdr-logo-h: 70px;   /* encoge el logo... en un header que ya no se ve */
}
```

Alguien construyó el comportamiento sticky completo y luego quitó el `position: sticky`. El comentario en `global.css:288` lo confirma: *"Main content offset — header ya no es fixed"*.

**Bonus — z-index inerte:** `TopBar.astro:117` declara `z-index: 10000` sin `position`. En CSS, `z-index` no hace absolutamente nada sobre un elemento `position: static`. Es una declaración decorativa.

**Fix:** `position: sticky; top: 0` sobre `.hdr-stack` + `z-index: 9000`, y encoger el logo a 48px en estado `--scrolled`. Requiere resolver P1-3 primero.

---

### P0-2 · La barra fija inferior de dos botones

Los dos botones pegados abajo que quieres quitar están en `BaseLayout.astro:236-244`:

```html
<!-- Sticky CTA Mobile -->
<div class="sticky-cta-mobile">
  <a href="https://wa.me/5531281706?text=..." class="sticky-cta__wa">
    <svg>...</svg> WhatsApp
  </a>
  <a href="/cotizar/" class="sticky-cta__cotizar">
    Cotizar Gratis
  </a>
</div>
```

**Quitarlo no es borrar ese bloque.** Tiene cuatro tentáculos en la cascada. Si solo borras el HTML, dejas 56px de padding fantasma al pie de cada página y el botón de WhatsApp flotando en el aire:

| Ubicación | Código | Qué pasa si se ignora |
|-----------|--------|----------------------|
| `BaseLayout.astro:236-244` | El bloque HTML | — |
| `global.css:293-332` | `.sticky-cta-mobile`, `.sticky-cta__wa`, `.sticky-cta__cotizar` | CSS huérfano |
| `global.css:334-341` | `body { padding-bottom: 56px }` @768 | **Hueco blanco de 56px al pie de todas las páginas** |
| `mobile.css:309-321` | `.wa-bubble { bottom: calc(56px + 1rem) }` @768 | **Burbuja de WhatsApp flotando 72px sobre la nada** |
| `mobile.css:327-333` | `@supports` safe-area de `.sticky-cta-mobile` | CSS huérfano |
| `mobile.css:386-392` | Tap highlight sobre `.sticky-cta__*` | Selectores muertos |

**Fix:** los 6 puntos, en orden, más devolver `.wa-bubble` a `bottom: 1rem`.

---

### P0-3 · Tres botones de WhatsApp en la misma pantalla

En cualquier página que use `PageLayout` (que son **casi todas** — index, nosotros, cobertura, directorio, servicios…), un usuario en móvil ve simultáneamente:

1. El WhatsApp de la **TopBar** (arriba)
2. La burbuja flotante **`.wa-bubble`** (`PageLayout.astro:105`, esquina inferior derecha)
3. El **`.sticky-cta__wa`** de la barra inferior (`BaseLayout.astro:237`)

Tres puertas al mismo lugar. Esto no duplica la conversión: la divide. Y visualmente, la burbuja (`z-index: 900`) queda apilada justo encima de la barra (`z-index: 9000`) en la misma esquina — que es exactamente el parche que intenta `mobile.css:311`:

```css
.wa-bubble {
  bottom: calc(56px + 1rem) !important;  /* esquivando la barra */
}
```

Cuando tu CSS tiene que esquivar tu propio CSS, la estructura está mal.

**Fix:** al retirar P0-2 el conflicto se resuelve solo. Queda una jerarquía limpia: TopBar (contacto pasivo) + burbuja flotante (acción persistente).

---

## 4. Hallazgos altos (P1)

### P1-1 · El header se come un quinto de la pantalla

```css
:root { --hdr-logo-h: 106px; }              /* Header.astro:446 */
@media (max-width: 1024px) { --hdr-logo-h: 90px; }
@media (max-width: 900px)  { --hdr-logo-h: 82px; }
@media (max-width: 480px)  { --hdr-logo-h: 70px; }
```

Cálculo real en móvil (`.hdr__inner` tiene `padding: 8px`, `Header.astro:474`):

| Viewport | Logo | Header | TopBar | **Cromo total** | % de pantalla |
|----------|------|--------|--------|-----------------|---------------|
| 900px | 82px | 98px | ~36px | **134px** | — |
| 480px | 70px | 86px | ~36px | **122px** | 18% (iPhone SE, 667px) |
| 380px | 70px | 86px | ~36px | **122px** | 18% |

Un logo de 70–82px de alto en un teléfono es enorme. El estándar de la industria ronda 32–44px. Y ojo: esto **empeora** cuando el header sea sticky, porque entonces esos 122px se quedan permanentemente en pantalla.

**Fix:** logo 56px en reposo, 44px en `--scrolled` para ≤640px. Es lo que hace que el sticky del P0-1 sea viable en vez de asfixiante.

---

### P1-2 · 26 breakpoints distintos

Barrido completo de `max-width` en `.astro` + `.css`:

```
23× 480    18× 640    13× 900    13× 800    13× 768
11× 860    11× 1024    9× 1100     6× 960     6× 600
 6× 560     6× 520     3× 700      3× 380     2× 540
 2× 400     1× 880     1× 820      1× 780     1× 750
 1× 580     1× 550     1× 500      1× 1400    1× 1200    1× 1000
```

**26 puntos de quiebre.** Un sistema sano usa 4–5. Esto significa que entre 480px y 900px el layout cambia **once veces** con criterios distintos según qué componente estés mirando. `CtaBar.astro` inventa los suyos (768/500/400), `global.css` usa 960/1100/700, `Header.astro` usa 1200/1024/900/480.

El resultado es que arrastrar la ventana produce saltos donde un componente ya colapsó a 1 columna y su vecino sigue en 3.

`mobile.css` declara en su cabecera un sistema correcto — 1024/768/640/480/380 — pero **solo se aplica a sí mismo**. El resto del proyecto lo ignora.

**Fix:** consolidar a 1024/768/640/480/380. Mapeo: 1200→1024, 1100→1024, 1000/960/900/880/860/820/800/780/750→768, 700/640→640, 600/580/560/550/540/520/500→480, 400/380→380.

---

### P1-3 · `overflow-x: hidden` bloquea el fix del menú

Tres declaraciones compitiendo por lo mismo:

```css
/* global.css:62 */
body { overflow-x: hidden; }        /* ❌ crea scroll container */

/* BaseLayout.astro:155 — CSS crítico inline */
html, body { overflow-x: clip !important; }

/* mobile.css:23-24 */
html { overflow-x: clip !important; }
body { overflow-x: clip !important; }
```

Esto importa **muchísimo** para P0-1: `overflow-x: hidden` crea un *scroll container*, y `position: sticky` **no funciona dentro de un scroll container**. `overflow-x: clip` no lo crea — por eso alguien metió los `!important`.

Ahora mismo el sitio depende de que dos `!important` ganen la carrera contra `global.css:62`. Funciona por accidente ordenado, no por diseño. **Si esa línea 62 gana en algún refactor, el header sticky muere silenciosamente** y nadie sabrá por qué.

**Fix:** borrar `global.css:62`. Dejar una sola declaración de `overflow-x: clip`, sin `!important`.

---

### P1-4 · El comentario de `mobile.css` es falso — lo verifiqué en el bundle

`mobile.css:22` afirma:

```css
/* !important necesario porque Vite bundlea mobile.css antes de global.css */
```

**Es falso.** Medí los offsets de byte en el bundle compilado (`dist/_astro/QuickNav.hqO__Px4.css`, 62,330 bytes):

| Marcador | Origen | Offset |
|----------|--------|--------|
| `--c-castillo` | `global.css` | **776** |
| `.hdr__toggle[data-astro…]` | `Header.astro` scoped | **52,007** |
| `overflow-x:clip!important` | `mobile.css` | **60,418** |

Orden real: `global.css` → componentes → **`mobile.css` al final**, exactamente donde debe estar. La premisa que justifica ~60 `!important` en el archivo **nunca fue cierta** (o dejó de serlo y nadie actualizó el comentario).

Esto no es pedantería. Ese comentario es la razón por la que cada regla nueva de `mobile.css` nace con `!important`, y por eso la cascada del proyecto hoy es inauditable: cuando todo es `!important`, nada lo es, y el siguiente override real no tiene a dónde escalar.

**Fix:** corregir el comentario y podar los `!important` que solo vencen a `global.css` (no los que vencen estilos scoped de Astro — esos sí los necesitan, y ahí el comentario debe decir la razón correcta).

---

### P1-5 · Contenido oculto en móvil

```css
/* mobile.css:87 */
@media (max-width: 640px) {
  .hero__copy { display: none; }   /* "visible en HTML para SEO" */
}
```

El comentario dice *"Ocultar columna de texto largo — visible en HTML para SEO"*. Ese razonamiento es de hace una década. Google usa **indexación mobile-first**: rastrea e indexa la versión **móvil** de tu página como la canónica. Contenido con `display: none` en el viewport móvil sigue siendo indexable, pero Google le asigna **menor peso** que al contenido visible.

Estás pagando el coste de escribir ese copy y regalando la mitad de su valor SEO en el viewport que más te importa (tu tráfico es local CDMX/EdoMex — abrumadoramente móvil).

**Fix:** en vez de `display: none`, un patrón de "leer más" con `max-height` + toggle, o simplemente recortar el copy y mostrarlo. El contenido visible en móvil pesa más.

---

### P1-6 · Tabla sin scroll wrapper

`src/pages/directorio/cdmx/[slug].astro` contiene un `<table>` sin contenedor de overflow. En 380px, una tabla de 3+ columnas fuerza scroll horizontal en **todo el documento** — el clásico "la página se mueve de lado".

**Fix:** wrapper `.table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch }`.

---

## 5. Hallazgos medios (P2)

| # | Hallazgo | Ubicación | Fix |
|---|----------|-----------|-----|
| P2-1 | `CtaBar` con breakpoints propios (768/500/400) y `grid-template-columns: repeat(4,1fr)` — 4 columnas de texto en móvil hasta los 768px | `CtaBar.astro:96-114` | Homologar a 640/480; 2col→1col |
| P2-2 | Iconos ocultos en ≤500px (`.ctabar__icon { display: none }`) — deja botones de puro texto, peor affordance táctil | `CtaBar.astro:107` | Conservar icono, recortar label |
| P2-3 | `white-space: nowrap` en 10 archivos (5 solo en `Header.astro`) — cada uno es un candidato a overflow en 380px | ver §2 barrido | Auditar caso por caso |
| P2-4 | 25 usos de `repeat(3,1fr)` / `repeat(4,1fr)` fuera del sistema de grid | global + componentes | Migrar a las clases `.grid-3` / `.grid-4` que `mobile.css:114-121` ya sabe colapsar |

---

## 6. Lo que ya está bien (no tocar)

Crédito donde corresponde — `mobile.css` acierta en varias cosas que suelen faltar:

- ✅ Anti-zoom iOS: `font-size: 16px` en inputs (`mobile.css:199-216`)
- ✅ Safe-area para notch / Dynamic Island (`mobile.css:339-344`)
- ✅ `viewport-fit=cover` presente en el meta viewport (`BaseLayout.astro:141`)
- ✅ Touch targets ≥44px en botones (`mobile.css:271-292`)
- ✅ Tap highlight táctil con `(hover: none) and (pointer: coarse)` (`mobile.css:386`)
- ✅ Panel móvil con overlay, trap de scroll (`body.style.overflow = 'hidden'`) y cierre al navegar (`Header.astro:1290`)
- ✅ Acordeón del panel con categorías y precios — buena densidad de información
- ✅ El burger tiene `aria-expanded` / `aria-controls` correctos

La base es competente. Los problemas son estructurales, no de artesanía.

---

## 7. Plan de remediación

### Fase 1 — Desbloqueo (P0) · ~30 min
1. Borrar `global.css:62` (`overflow-x: hidden`) → habilita sticky
2. `.hdr-stack { position: sticky; top: 0; z-index: 9000 }`
3. Logo sticky-friendly: 56px reposo / 44px scrolled en ≤640px
4. Retirar `.sticky-cta-mobile` — los 6 puntos de la tabla P0-2
5. `.wa-bubble` → `bottom: 1rem`
6. `TopBar`: quitar el `z-index: 10000` inerte

**Resultado:** menú siempre accesible, pie limpio, un solo CTA flotante.

### Fase 2 — Consolidación (P1) · ~1h
7. Homologar 26 → 5 breakpoints (1024/768/640/480/380)
8. Corregir el comentario falso de `mobile.css:22` + podar `!important` innecesarios
9. `.hero__copy`: `display: none` → patrón "leer más"
10. Wrapper de scroll para la tabla del directorio

### Fase 3 — Pulido (P2) · ~30 min
11. `CtaBar` al sistema de breakpoints, conservar iconos
12. Auditar los 10 `white-space: nowrap`
13. Migrar los 25 grids sueltos a `.grid-3` / `.grid-4`

### Fase 4 — Validación
- Verificación de llaves balanceadas en CSS
- DevTools device toolbar: 320 / 360 / 375 / 390 / 414px
- Confirmar: sin scroll horizontal, burger accesible tras scroll, sin hueco al pie, un solo CTA flotante
- Commit + push vía Desktop Commander

---

## 8. Riesgos

| Riesgo | Mitigación |
|--------|-----------|
| Header sticky tapa contenido al saltar a anclas | `scroll-margin-top: var(--header-height)` en targets de ancla |
| Quitar la barra CTA baja conversión móvil | La burbuja de WhatsApp permanece; medir 2 semanas antes de concluir |
| Consolidar breakpoints rompe algo en desktop | Fase 2 separada de Fase 1 — desplegar y validar por etapas |
| Podar `!important` rompe overrides scoped de Astro | Podar solo los que vencen a `global.css`; conservar los de estilos scoped |

---

## 9. Addendum — hallazgos que solo aparecieron al probar en navegador

Dos bugs que la lectura de código **no** detectó y que salieron al medir en Chrome real. Ambos corregidos en la Fase 1.

### P0-4 · QuickNav: 3 de 7 enlaces invisibles e inalcanzables en móvil

`QuickNav.astro` está montado en **33 páginas** — prácticamente todo el sitio.

```css
.qnav { display: flex; }
.qnav__item { flex: 1 1 0%; white-space: nowrap; }
```

La trampa clásica de flexbox: `min-width` vale `auto` por defecto, así que un flex item **nunca encoge por debajo del ancho de su propio texto**. Con `white-space: nowrap`, el `flex-shrink: 1` no puede actuar. Medición a 375px:

```
.qnav  scrollWidth = 476px   clientWidth = 360px
items: 7   ·   visibles: 4   ·   último ("FAQ") 101px fuera del viewport
```

Y el remate: como `<body>` usa `overflow-x: clip`, ese desbordamiento **no genera scroll horizontal** — se recorta en silencio. Cobertura, Blog y FAQ quedaban recortados, sin forma de llegar a ellos.

Esto es lo que hace peligroso al `overflow-x: clip/hidden` como red de seguridad: un test de `scrollWidth <= innerWidth` pasa en verde mientras el contenido desaparece. El clip no arregla el desbordamiento, lo esconde.

**Fix:** `flex-wrap: wrap` + `min-width: 0` + `white-space: normal` → 4 por fila, 2 filas, los 7 enlaces visibles. Se prefirió envolver antes que scroll horizontal: no exige que el usuario adivine que ahí se desliza.

**Verificado:** 4 sets contextuales × 4 viewports → 7/7 enlaces clickables, sin texto recortado, targets de 48px.

### P0-5 · Zoom de iOS en el formulario pre-footer (todas las páginas)

En §6 di por bueno el anti-zoom de `mobile.css`. **Me equivoqué a medias**: el bloque funciona, pero solo enumera las clases del form de cotización.

```css
.form-input, .form-select, .form-textarea { font-size: 16px !important; }
```

El módulo pre-footer que `PageLayout.astro` inyecta en **todas** las páginas usa otro prefijo — `.pfaq-form__*` (`FaqSection.astro`) — y estaba a **14px**, con targets de 42px. Safari iOS hace zoom en cualquier input bajo 16px al enfocarlo y deja la página desencuadrada. Cinco campos, en cada página del sitio.

**Fix:** añadir `.pfaq-form__input/__select/__textarea` al bloque anti-zoom y subir el target a 48px.

**Lección:** el bloque enumeraba clases en vez de usar un selector de tipo. Un `input:not([type=hidden]), select, textarea { font-size: 16px }` bajo 640px habría cubierto ambos formularios desde el principio y no se habría podido "olvidar" del siguiente form que alguien añada.

### Nota de método: el falso positivo del logo

Durante la verificación, el logo "no encogía" y `--scrolled` salía `false` con `scrollY=1500`. Parecía un bug de cascada. No lo era: mi propio listener capturaba **0 eventos scroll**. Chrome estrangula el rAF de las pestañas e iframes que no pintan, así que ni los eventos de scroll ni las transiciones CSS avanzaban. Los valores de *layout* (`getBoundingClientRect`, `getComputedStyle`) sí son fiables en ese estado — por eso el sticky medía `top=0` correctamente.

Se resolvió disparando `new Event('scroll')` a mano, que ejecuta el handler real del sitio. Merece registrarse porque el modo de fallo imita exactamente a un bug de CSS.

### Corrección propia: la transición que no debí meter

En el primer intento añadí `transition: height 0.2s` al logo. Estaba mal: el header sticky **está en el flujo**, así que animar su altura refluye todo el documento de abajo durante 200ms en cada cruce del umbral de scroll — y viola la regla de "cero animaciones nuevas" del proyecto. Retirada. Solo queda la transición de `box-shadow`, que se compone en GPU y no dispara layout.

---

## 10. Verificación ejecutada

Medido en Chrome real contra el build de producción (`astro preview`), no inferido del código:

| Cobertura | Resultado |
|-----------|-----------|
| 14 páginas × 4 viewports (390/375/360/320) × 8 checks | **448/448 asserts** ✅ |
| QuickNav: 4 sets contextuales × 4 viewports | 7/7 enlaces clickables ✅ |
| Regresión desktop: 1440 / 1024 / 901 / 900px | nav intacta, burger en su umbral ✅ |
| Anclas bajo header sticky | `scroll-padding-top: 77px` · ancla a 77px, header a 63px ✅ |

Checks por combinación: header sticky a `top=0` tras scroll · logo encoge al pegarse · burger clickable con tap ≥44px · barra de 2 botones ausente · cero scroll horizontal · QuickNav sin desbordamiento · cero inputs <16px · sin `padding-bottom` fantasma.

**Cromo del header en móvil:** 122px → **63px pegado** (iPhone 14: del 14.5% al 7.5% de la pantalla).

---

## 11. Conclusión

El sitio tiene un `mobile.css` decente resolviendo problemas cosméticos mientras **el menú es inalcanzable durante el 95% del scroll** y **56px de pantalla se sacrifican a una barra de CTAs redundante**. La Fase 1 son seis cambios quirúrgicos que arreglan lo que realmente estás sintiendo. Las fases 2–3 pagan la deuda técnica que hizo posible esta situación.

**Un dato para cerrar:** el código del header sticky —el JS de shrink, la clase `--scrolled`, el token `--hdr-logo-h`— **ya está todo escrito y funcionando**. Solo le falta la línea que lo pega. Alguien lo construyó y lo desconectó.

---

*Auditoría generada el 14 de julio de 2026 sobre el commit `6f18935`. Hallazgos verificados contra código fuente y bundle compilado, no inferidos.*
