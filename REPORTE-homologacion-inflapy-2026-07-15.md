# Homologación BRINCOLINS ↔ INFLAPY ↔ EVENTECH

**Fecha:** 15-jul-2026 · **Ley:** https://inflablesparafiestas.com.mx/ — decisión del DG (Frank)

## ✅ PUBLICADO — los tres dominios sirven su commit

| Repo | Commits | Deploy | Gate: `build-id` = HEAD |
|---|---|---|---|
| **BRINCOLINS** (`Frankoropeza/brincolins`) | `fa14e99` + `15ee055` — 68 archivos | GitHub Pages | ✅ `15ee055` |
| **INFLAPY** (`Origenlab/INFLAPY`) | `e12efa1` (45) + `0e2686a` (91) | Cloudflare Pages | ✅ `0e2686a` |
| **EVENTECH** (`Origenlab/EVENTECH`) | `aea39319` — 3 archivos | Cloudflare Pages | ✅ `aea39319` |

> Gate verificado contra el **dominio**, no contra la Action verde. Las 3 páginas L4 de aliados responden 200.

## Cruce final — 8/8 EN VIVO en los tres sitios

| Modelo | Ley | BRINCOLINS | INFLAPY | Medida | Espacio |
|---|---|---|---|---|---|
| Mini Castillo | $800 | $800 ✅ | $800 ✅ | 2×2×2.5 m | 3×3 m |
| Dragones Rojos | $1,200 | $1,200 ✅ | $1,200 ✅ | 4×4×3.8 m | 5×5 m |
| Castillo de Princesas | $1,200 | $1,200 ✅ | $1,200 ✅ | 4×4×3.5 m | 5×5 m |
| Mini Jungla | $1,300 | $1,300 ✅ | $1,300 ✅ | 4.5×4×3.5 m | 6×5 m |
| Gusanitos | $1,350 | $1,350 ✅ | $1,350 ✅ | 5×3×2.5 m | 6×4 m |
| Castillo Blanco | $1,700 | $1,700 ✅ | $1,700 ✅ | 6×5×4 m | 7×6 m |
| Barco Pirata | $1,800 | $1,800 ✅ | $1,800 ✅ | 7×5×4.5 m | 8×6 m · 8-10 niños |
| Extremo | $1,900 | $1,900 ✅ | $1,900 ✅ | 7×4×3.8 m | 8×5 m · 6-10 niños |

**Rango: $800 – $1,900. Renta 4 a 6 horas. 8 modelos.** El más grande es el **Barco Pirata**, no el Extremo.

| Gate | BRINCOLINS | INFLAPY |
|---|---|---|
| `astro check` | 0 errores / 0 warnings | 0 errores / 0 warnings |
| `astro build` | verde — 140 páginas | verde — 206 páginas |
| Precios en JSON-LD (`dist/`) | solo los 8 reales | solo los 8 reales |
| Claims prohibidos | 0 | 0 |

---

## Decisiones del DG

| | Decisión | Aplicado |
|---|---|---|
| **C1** Fundación | **Empresas aliadas.** BRINCOLINS 2005/+20 años · INFLAPY 1994/30 años | ✅ 0 menciones de 1994 en BRINCOLINS |
| **C2** Flota | **8 modelos** (ni 50+ de INFLAPY ni 15+ de BRINCOLINS) | ✅ ambos |
| **C3** Duración | **4 a 6 horas** | ✅ eliminadas 8/12 h |
| **C4** Extremo | **7×4×3.8 m, espacio 8×5 m** | ✅ 0 menciones de 14×5 |
| **C5** Volumen | **Quitar la cifra en los dos sitios** | ✅ ambos |
| **B** Paquetes | **Quitar el claim de %**, precios sin cambio | ✅ |
| **Rating** | **527 → 312 reseñas de Google** | ✅ INFLAPY |
| **Blog** | **Barrer los precios inventados** | ✅ 59 archivos |

---

## La aritmética del Bloque B

**De dónde salía el "15%":** `($2,500 + $750 − $2,800) / $3,250 = 13.8% ≈ 15%` — calculado contra el Barco viejo, como decía el brief.

**Básico $2,800 con los precios nuevos:**
```
3 × "mesa con 8 sillas" @ $250   = $750     (3 mesas + 24 sillas, exacto)
inflable "clásico" (medianos)    = $1,200 – $1,350
                            suma = $1,950 – $2,100
paquete                          = $2,800
                          ahorro = −33% a −43%   ← el paquete es MÁS CARO
```
Ni con el inflable más caro del catálogo (Extremo $1,900, que no es "clásico"): `$1,900 + $750 = $2,650` → sigue $150 arriba. **Ninguna combinación hace positivo el Básico.**

**Premium / VIP — no calculables:**
```
Premium: $1,900 + $1,250 + $250 = $3,400 + toldo 3×6 [NO PUBLICADO]
   para que el 20% fuera cierto → toldo 3×6 = $2,225   (2.8× el 3×3 de $800)
VIP:     $1,900 + $2,000 + $400 + $1,500 = $5,800 + toldo 6×6 [NO PUBLICADO]
   para que el 30% fuera cierto → toldo 6×6 = $3,914   (4.9× el 3×3)
```
Solo se publica el toldo 3×3 a $800. Sin esos dos datos, cualquier % sería inventado.

---

## Lo que el brief no contemplaba

### En BRINCOLINS
1. **`public/llms.txt` servía el catálogo viejo completo.** Vive fuera de `src/`, sobrevivió al barrido — y es lo que leen los LLMs.
2. **`coverage.ts:309`**: FAQ de Coyoacán prometía *"¿Llevan inflables de agua? → **Sí.** Los combinados con alberca inflable y toboganes de agua…"*. Producto inexistente en página viva.
3. **32 paquetes ocultos** en `productos.ts` (8 modelos × 4 tiers). La ficha del Barco Pirata mostraba $1,800 arriba y "Básico $2,500" en su propia tabla. Ahora un precio por modelo.
4. **Catálogo fantasma** (Granja, Nave espacial, Ring de boxeo, Tobogán acuático…) con precios propios $650–$1,000. Borrado `inflables-acuaticos-verano-cdmx.md`.
5. **Precio fantasma $850**. No existe en ningún catálogo.
6. **C4 — el error raíz no era 14×5 vs 8×5.** BRINCOLINS creía que el Extremo **mide 12 m**, y de ahí derivaba 14×5 (12+1+1). Era coherente con un dato falso.

### En INFLAPY (el master)
7. **El master se contradecía consigo mismo.** `/nosotros/` decía "50+ modelos" mientras `/catalogo/` decía "8 modelos curados". Y "+50,000 celebraciones" en body vs "500+ eventos" en footer: factor 100×.
8. **Un precio para humanos, otro para Google.** `src/data/productos/*.ts` era un segundo origen de datos: `extremo.ts` decía "desde $1,900" en el copy y `"price": "3000"` en el Offer del mismo archivo. Refactorizado para derivar de `products.ts`.
9. **`priceRange: '$800-$8000'`** en `business.ts` + 16 coberturas (con 3 formatos distintos). El tope real es $1,900.
10. **El blog de INFLAPY publicaba el catálogo VIEJO de BRINCOLINS** — el mismo bug, en el sitio contrario. Un cliente leía $2,500 en inflablesparafiestas y $1,800 en brincolins.
11. **59 archivos con precios inventados**, hasta 3.5× los reales, varios dentro de schema FAQPage. Estimado: ~11.
12. **El rating**: el copy decía "527 reseñas verificadas en Google" pero el comentario en `business.ts` declaraba `312 Google + 156 Facebook + 59 WhatsApp`. Solo 312 son de Google.
13. **Contenido fabricado**: "Circuito Extremo certificado para adultos, 20-30 adultos rotando" — no existe en ningún dato; `products.ts` dice 6+ años.
14. **Gusanitos se vendía como "el chico / el más barato"** en 5 posts. Es mediano de $1,350; el chico es el Mini Castillo de $800.

---

## Pendientes para el DG

| # | Asunto |
|---|---|
| 1 | **Verificar el 312 contra el panel de Google Business Profile.** Sale del comentario en `business.ts`, no de una comprobación en vivo. |
| 2 | **`/opiniones` muestra "312 reseñas" en copy y declara 14 en JSON-LD** (las visibles). Consistente con la regla de Google, pero conviene ratificar la asimetría. |
| 3 | **Básico $2,800 sigue caro.** Quitamos el claim, pero el cliente puede hacer la resta: sus partes cuestan $1,950–$2,100. |
| 4 | **Toldo 3×6 y 6×6 sin precio publicado.** Sin ellos no hay aritmética de paquete posible. |
| 5 | **"Desde $4,500" = Paquete Evento** (3-4 inflables), no el Premium. Mismo problema que el $2,400: 3 inflables baratos = $3,200. |
| 6 | **Testimonios con cifras** ("Hemos hecho más de 50 eventos juntos"). |
| 7 | **Sin dato en `products.ts`, no se inventó**: hora extra ($250-$600 en el blog), planta de luz (~$1,500), descuento por volumen (un post dice "desde el 2º inflable", otro "desde 3"). |
| 8 | **Castillo Blanco**: la ley dice "hasta 12 niños", BRINCOLINS dice 8-10. **Mini Castillo**: ley 1-3 años, sitio 1-4. |
| 9 | **INFLAPY declara "el Castillo Blanco es el más espacioso: 6×5"** pero su Barco Pirata es 7×5. Contradicción del master; no se propagó. |

---

## EVENTECH — lo que se corrigió y lo que NO

**Corregido** (`aea39319`): las páginas L4 de aliados `/servicios/inflables/inflapy/` y `/brincolins/` + sus tarjetas en el índice. Estaban desalineadas por las decisiones de hoy:
- INFLAPY: `527 reseñas` → **312** · *"su flota pasa de 50 modelos"* → **8** (era falso)
- BRINCOLINS: VIP `8 horas` → **6 h** · `4.9★ y más de 500 eventos al año` → fuera

Esas páginas ya hacían bien lo difícil, y se conservó: no citan `+50,000 celebraciones` ni `200,000 familias` de INFLAPY (un comentario en el código documenta que se descartaron **porque su home y su footer se contradicen**), y no mezclan las dos historias de fundación.

**NO corregido, a propósito — la contradicción no existía.** Se planteó que EVENTECH decía `+1,500 eventos` en 2 archivos vs `500 eventos` en 124. **Falso.** Los dos archivos son:
- `podiumex-...md:49` → es de **PODIUMEX**, aliado de podiums. La frase abre con *"Su cobertura abarca…"*
- `salon-azcapotzalco-eventos.md:174` → trayectoria del **Salón Azcapotzalco**, venue de terceros

EVENTECH dice `500 eventos` de forma **consistente** en ~157 líneas y no se contradice con nadie. Ejecutar el barrido habría triplicado su historial publicitado copiando la cifra de otra empresa: contenido fabricado, en vivo. **El error fue grepear una cifra sin verificar el sujeto** — la misma trampa que este mismo reporte documenta. Se detuvo antes de editar; 0 archivos tocados.

---

## Notas de cierre

**semgrep no está instalado** en la Mac. El escaneo de secretos de los 3 pushes se hizo con grep sobre el diff (0 hallazgos; remotes sin token embebido). Vale instalarlo: el CLAUDE.md lo pide antes de cada push.

**BRINCOLINS deploya por GitHub Pages**, no Cloudflare — relevante para el mapa de drift (27 CF / 21 GHP).

Gate verificado en los tres:
```
brincolins.com              build-id 15ee055 = HEAD  ✅
inflablesparafiestas.com.mx build-id 0e2686a = HEAD  ✅
eventech.mx                 build-id aea3931 = HEAD  ✅
```
Ojo: la Action de EVENTECH tardó 3m53s y el dominio siguió sirviendo el commit viejo ~2 min después de que la Action arrancó. **Action verde ≠ dominio actualizado**; hay que esperar y volver a medir.
