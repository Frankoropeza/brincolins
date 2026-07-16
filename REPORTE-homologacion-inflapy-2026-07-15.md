# Homologación BRINCOLINS → ley INFLAPY

**Fecha:** 15-jul-2026 · **Rama:** `homologacion-precios-inflapy` · **Estado:** aplicado, verificado, **sin commit**
**Ley:** https://inflablesparafiestas.com.mx/ — decisión del DG (Frank)

## Verificación

| Gate | Resultado |
|---|---|
| `astro check` | **0 errores, 0 warnings** (24 hints preexistentes) |
| `astro build` | **verde — 140 páginas** (eran 141; bajó 1 por post borrado, ver §5) |
| Cruce 8/8 JSON-LD vs ley, sobre `dist/` | **8/8 precio + 8/8 medida** |
| Claims prohibidos en `dist/` | 0 |
| Cobertura Edomex norte/oriente | intacta (Ecatepec 38 · Cuautitlán 22 · Coacalco 21 · Neza 21 archivos) |

**66 archivos** (65 modificados, 1 borrado).

> Auditoría hecha sobre `dist/` tras build, no sobre `src/` — como manda el runbook.
> Build corrido en copia aislada: el `node_modules` del repo es un install de macOS y truena en Linux (rollup native). No se tocó.

---

## 1. Catálogo canónico (8/8 contra la ley)

| Modelo | Precio | Medida | Espacio mín. |
|---|---|---|---|
| Mini Castillo | $800 | 2×2×2.5 m | 3×3 m (interiores, 2.5 m libre) |
| Dragones Rojos | $1,200 | 4×4×3.8 m | 5×5 m |
| Castillo de Princesas | $1,200 | 4×4×3.5 m | 5×5 m |
| Mini Jungla | **$1,300** ↑ | 4.5×4×3.5 m | 6×5 m |
| Gusanitos | **$1,350** ↑ | 5×3×2.5 m | 6×4 m |
| Castillo Blanco | **$1,700** ↓ | 6×5×4 m | 7×6 m |
| Barco Pirata | **$1,800** ↓ | 7×5×4.5 m | 8×6 m · 8-10 niños · 4+ |
| Extremo | **$1,900** ↓ | 7×4×3.8 m | 8×5 m · 6-10 niños · 6+ |

**Rango:** $800 – $1,900 (antes $800 – $3,000). Renta: **4 a 6 horas**, sin excepción.

Barrido en: nav desktop + móvil, `/inflables/`, 8 fichas, `/precios/`, FAQ global, `<select>` del form de cotización, metas/titles, JSON-LD, 33 posts de blog, `public/llms.txt`.

---

## 2. Bloque B — la aritmética que pediste

**El claim de ahorro se eliminó porque no existe ningún % que sea cierto.** Precios de paquete sin cambio ($2,800 / $4,500 / $6,800).

### De dónde salía el "15%" del Básico
```
Barco Pirata viejo $2,500 + mobiliario $750 = $3,250
($3,250 − $2,800) / $3,250 = 13.8% ≈ 15%    ✔ confirmado
```
El claim se calculó contra el Barco a $2,500, exactamente como decía el brief.

### Básico $2,800 con los precios nuevos
```
3 × "mesa con 8 sillas" @ $250        = $750     (3 mesas + 24 sillas, exacto)
inflable "clásico" (medianos)         = $1,200 – $1,350
                                 suma = $1,950 – $2,100
paquete                               = $2,800
                               ahorro = −33% a −43%   ← el paquete es MÁS CARO
```
Peor: con el inflable **más caro del catálogo** (Extremo $1,900, que ni es "clásico"):
`$1,900 + $750 = $2,650` → el paquete sigue **$150 arriba**.
**No existe combinación en el catálogo que haga positivo el Básico.**

### Premium $4,500 y VIP $6,800 — no calculables
```
Premium: $1,900 + $1,250 + $250 = $3,400 + toldo 3×6 [NO PUBLICADO]
   para que el 20% fuera cierto → toldo 3×6 = $2,225   (2.8× el 3×3 de $800)

VIP:     $1,900 + $2,000 + $400 + $1,500 = $5,800 + toldo 6×6 [NO PUBLICADO]
   para que el 30% fuera cierto → toldo 6×6 = $3,914   (4.9× el 3×3)
```
Solo publicas el toldo 3×3 a $800. Cualquier % escrito sin esos dos datos sería inventado.

### Otros arreglos en paquetes
- VIP vendía **8 horas** → 6 h (máximo legal). El argumento "el VIP te da más horas que la renta individual" ya no se sostiene: fue reescrito.
- VIP ofrecía "inflable premium (extremo o **acuático**)" → el acuático **no existe**.
- Se eliminaron además "Ahorra hasta 25%" (×8 en `/servicios/`) y "hasta un 20%" en mobiliario: misma clase de claim no verificable.

---

## 3. Los 32 paquetes por producto (hallazgo no previsto)

`data/productos.ts` tenía **8 modelos × 4 tiers** (Básico/Estándar/Premium/Día Completo) además de los 3 paquetes de fiesta. El tier "Básico" es el precio del modelo y estaba stale en los 5 → la ficha del Barco Pirata mostraba **$1,800 arriba y "Básico $2,500" en su propia tabla**.

**Resuelto:** un solo precio por modelo, igual que INFLAPY. Los tiers Estándar/Premium/Día Completo se eliminaron — vendían 8 y 12 horas (prohibidas por la ley) y sus multiplicadores eran inconsistentes entre modelos (×1.33/×1.83 en Dragones vs ×1.28/×1.60 en Barco). Recalcularlos habría sido fabricar precios. `PricingCards` se ajustó a grid adaptativo.

---

## 4. Respuestas del DG a C1–C5

| | Decisión | Aplicado |
|---|---|---|
| **C1** Fundación | **Empresas aliadas.** BRINCOLINS conserva 2005 / +20 años | ✅ timeline intacto · 0 menciones de 1994 |
| **C2** Flota | **8 modelos** (ni 50+ ni 15+) | ✅ 0 menciones de "15 modelos" |
| **C3** Duración | **4 a 6 horas, es la ley** | ✅ eliminadas 8/12 h en renta de inflable |
| **C4** Extremo | **7×4×3.8 m, espacio 8×5 m** | ✅ 0 menciones de 14×5 |
| **C5** Volumen | **Quitar la cifra** de los dos sitios | ✅ 0 menciones de 500/5,000/50,000 |

**Sobre C4:** el error raíz no era 14 vs 8. BRINCOLINS creía que el Extremo **mide 12 metros** — por eso pedía 14×5 de espacio (12+1+1). Era internamente coherente con un dato falso. La ley dice 7 m. El "doble carril" y las carreras sí son reales y se conservaron.

**Sobre C5:** `index.astro` montaba un bloque `★★★★★ 4.9 · +500 eventos al año`. Eliminado: es aggregateRating sin Google Business Profile verificable (CLAUDE.md, cero contenido fabricado).

---

## 5. Hallazgos que el brief no contemplaba

1. **`public/llms.txt` servía el catálogo viejo completo** — los 5 precios, el Extremo de 12×4×3 y "hasta 8 horas". Está fuera de `src/`, así que ningún barrido de `src/` lo tocaba. Es justo el archivo que leen los LLMs. Corregido + declaración explícita de que no hay modelos de agua.
2. **Catálogo fantasma en el blog.** Granja, Tobogán Doble, Tobogán Acuático, Castillo unicornio, Nave espacial, Ring de boxeo, Cancha deportiva, Parque acuático — con precios propios ($650/$900/$950/$1,000). Eliminados. `inflables-acuaticos-verano-cdmx.md` **se borró completo** (sus 3 productos eran fantasma; sin el catálogo inexistente no quedaba post). 0 enlaces entrantes rotos.
3. **`data/coverage.ts:309` — el fantasma más caro.** FAQ de Coyoacán: *"¿Llevan inflables de agua? → **Sí.** Los combinados con alberca inflable y toboganes de agua son muy populares…"*. Promesa explícita de catálogo inexistente, renderizada en `/cobertura/coyoacan/`. Corregida a "No" + redirección a Barco Pirata / Castillo Blanco.
4. **Precio fantasma $850** como base de inflable. No existe en ningún catálogo. El piso real es $800.
5. **Sumas derivadas recalculadas, no sustituidas** — 9 tablas de blog. En `planear-cumpleanos-infantil-completo-cdmx.md`, 3 de 6 totales ya no cuadraban desde antes.
6. **"El Extremo es el más grande del catálogo"** era falso bajo la ley: el Barco Pirata (7×5×4.5) lo supera en las tres dimensiones. Reescrito en 3 posts + fichas.
7. **`$2,400 por 2 inflables`** dejó de ser creíble: 2 inflables baratos = $800+$1,200 = **$2,000**. Se quitó la cifra sin inventar otra.

---

## 6. Pendientes para el DG

| # | Asunto | Detalle |
|---|---|---|
| 1 | **Básico $2,800 sigue caro** | Quitamos el claim, pero el cliente puede hacer la resta: inflable + mobiliario = $1,950–$2,100. El paquete cuesta $700–$850 más. |
| 2 | **Toldo 3×6 y 6×6 sin precio** | Solo publicas el 3×3 a $800. Sin esos dos datos no hay aritmética de paquete posible. |
| 3 | **"Desde $4,500" = Paquete Evento** (3-4 inflables), no el Premium | Mismo problema que el $2,400: 3 inflables baratos = $3,200, así que $4,500 no es el piso. |
| 4 | **Castillo Blanco: capacidad** | Ley dice "hasta 12 niños"; el sitio dice 8-10. No se tocó. |
| 5 | **Mini Castillo: edades** | Ley dice 1-3 años; el sitio dice 1-4. No se tocó. |
| 6 | **Canibalización** | `inflables-para-adultos-eventos-corporativos.md` y `inflable-extremo-eventos-corporativos-cdmx.md` cubren casi lo mismo. Vale consolidar. |
| 7 | **El master se contradice** | INFLAPY dice "Castillo Blanco, el más espacioso del catálogo: 6×5" pero su Barco Pirata es 7×5. No se propagó el error. Y su `4.9★ / 527 reseñas` (×8) sigue sin GBP verificable. |

---

## 7. Cómo cerrar

El commit **no se pudo hacer desde aquí**: quedó un `.git/index.lock` huérfano y el mount FUSE no permite borrarlo (`Operation not permitted`). Además el CLAUDE.md manda git/deploy desde la Mac vía Desktop Commander. Desde la Mac:

```bash
cd ~/Documents/Claude/Projects/BRINCOLINS
rm -f .git/index.lock
git add -A
git commit -F REPORTE-homologacion-inflapy-2026-07-15.md   # o mensaje propio
```

Antes de `git push`: **semgrep** (escaneo de secretos) por regla del CLAUDE.md.
Después del push, el gate real **no es la Action verde** — es que `brincolins.com` sirva el commit (`dist/build-id.txt` vs el SHA).

**Falta homologar el otro lado:** eventech.mx publica 4–6 hrs (correcto), pero INFLAPY sigue con el `+50,000 celebraciones` en body vs `500+` en footer que C5 mandó quitar en **los dos** sitios.
