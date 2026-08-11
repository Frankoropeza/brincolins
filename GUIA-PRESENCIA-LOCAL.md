# Guía de presencia local — BRINCOLINS

**Para:** Frank
**Fecha:** 11 de agosto de 2026
**Contexto:** [AUDITORIA-INTEGRAL-2026-08-11.md](./AUDITORIA-INTEGRAL-2026-08-11.md)

Esto es lo único de la Fase 1 que no puedo hacer yo: requiere tu identidad, tu teléfono y tus fotos. El sitio ya está preparado para conectarse a todo esto — sólo faltan las URLs.

---

## Por qué esto es lo de mayor impacto del roadmap

Datos reales de Ahrefs sobre las cuatro keywords principales del nicho:

| Keyword | Quién ocupa la posición 1-2 | ¿BRINCOLINS? |
|---|---|---|
| renta de inflables cdmx | **Local Pack** + cocoy.com | ausente del top 10 |
| renta de brincolines cdmx | **Local Pack** + cocoy.com | pos. 5 |
| renta de inflables para fiestas infantiles | **Local Pack** + cocoy.com | pos. 7 |
| renta de inflables (nacional) | **Local Pack** + cocoy.com | ausente |

El Local Pack —el bloque de tres negocios con mapa— ocupa la posición 1 o 2 en las cuatro. En móvil es prácticamente todo lo que se ve sin hacer scroll.

Dos cosas que conviene entender antes de invertir esfuerzo en otra parte:

1. **El Domain Rating no decide aquí.** Los que te ganan en orgánico tienen DR **0, 5 y 7**. Tú tienes DR 15. Más enlaces no resuelve esto.
2. **INFLAPY, de tu propio portafolio, sí está en 2 de los 3 Local Packs.** El know-how ya existe en casa: es cuestión de replicarlo.

Hoy tienes 15 keywords en posiciones 4-10 que sólo producen **30 visitas al mes**. Ésa es la razón: con Local Pack + 4 preguntas PAA + Shopping + imágenes por encima, una posición 5-7 orgánica queda debajo del pliegue.

---

## 1. Google Business Profile

### Cómo crearla

En [business.google.com](https://business.google.com), con la cuenta de Google del negocio (no una personal que puedas perder).

**Primero busca si ya existe una ficha.** Es común que Google genere fichas automáticas a partir de menciones. Si aparece "BRINCOLINS" sin reclamar, reclámala en vez de crear una nueva — conserva cualquier reseña o antigüedad que ya tenga. Dos fichas del mismo negocio se canibalizan y Google acaba suprimiendo una.

### Cómo configurarla

**Tipo de negocio: "Solo ofrezco servicios a domicilio".** Esto es importante. No publiques una dirección visible: entregas a domicilio, no recibes clientes en un local. Google permite ocultar la dirección y declarar sólo el área de servicio. Si publicas una dirección donde no atiendes clientes y Google lo detecta, puede suspender la ficha.

**Categoría principal:** *Servicio de alquiler de equipo para fiestas* (Party equipment rental service).
**Categorías secundarias:** *Alquiler de casas inflables*, *Organizador de fiestas infantiles*, *Servicio de alquiler*.

La categoría principal es el factor de ranking local más influyente después de la proximidad. Vale la pena revisar qué categoría usan los tres del Local Pack (La Hormiga Play, Pelotinas, Alquiladora Lugo) y no quedarse corto.

**Área de servicio:** las 16 alcaldías de CDMX + los municipios de Edomex que cubres. Las mismas que ya están en `/cobertura/`.

**NAP idéntico al del sitio.** Literal, carácter por carácter — Google compara:

```
Nombre:    BRINCOLINS
Teléfono:  +52 55 3128 1706
Sitio web: https://brincolins.com
Horario:   Lunes a domingo, 8:00 – 20:00
```

> El horario acaba de unificarse en todo el sitio (antes había cinco versiones distintas: la topbar decía 8-20, el schema 9-19 entre semana y las páginas de zona 24/7). El schema ahora declara Lun-Dom 8:00-20:00. **Pon exactamente eso en la ficha.**

**Fotos.** Es lo que más mueve la aguja en conversión dentro del Local Pack. Mínimo:

- Logo y foto de portada.
- Los 8 inflables **con niños jugando** — las que están en el sitio son de inflables vacíos.
- El equipo instalando.
- La camioneta de entrega.
- Un evento real completo.

Sube fotos nuevas cada mes: Google premia la actividad.

**Descripción (750 caracteres).** Que incluya "renta de inflables", "brincolines", "CDMX", "Estado de México" y "entrega a domicilio", pero escrita para una persona, no para el algoritmo.

**Productos.** Carga los 8 inflables con precio y foto. Aparecen en la ficha y son otra superficie de búsqueda.

### Cuando esté lista

Pásame la URL de la ficha y la pego en `src/data/site.ts`:

```ts
export const SOCIAL_PROFILES = {
  google:    "",   // ← aquí
  facebook:  "",
  instagram: "",
  tiktok:    "",
};
```

Eso emite `sameAs` en el schema de las 144 páginas, que es lo que le dice a Google que brincolins.com y la ficha son la misma entidad. **Sin ese vínculo, Google no asocia el dominio con el negocio local** — y ahora mismo no existe en todo el repo.

---

## 2. Redes sociales

Hoy el sitio tiene **cero** enlaces a Facebook, Instagram o TikTok. Lo verifiqué en las 144 páginas del build. Para un negocio de fiestas infantiles en México eso es un hueco grande: es donde vive la prueba social real de este giro, y donde los papás verifican que un proveedor existe antes de dejar un anticipo.

**Prioridad: Facebook > Instagram > TikTok.** En este nicho y en este mercado, Facebook sigue siendo donde las mamás piden y dan recomendaciones.

Lo mínimo para que sirvan:

- Mismo nombre, logo, teléfono y enlace al sitio en las tres.
- **Facebook:** activa Messenger y la sección de servicios. Publica las fotos de eventos reales.
- **Instagram:** enlace en bio a `brincolins.com/cotizar/`. Reels de montaje e inflables en uso — funcionan mejor que las fotos estáticas.
- Publica con constancia modesta (2-3 veces por semana) antes que en ráfagas.

Un perfil abandonado con tres publicaciones de hace ocho meses resta credibilidad. Si no vas a mantener las tres, abre sólo Facebook y hazlo bien.

Cuando existan, van al mismo `SOCIAL_PROFILES` y aparecen automáticamente como iconos en el footer (el bloque no se renderiza mientras estén vacías, así que no hay enlaces rotos entretanto).

---

## 3. Reseñas: lo que separa a los del Local Pack de ti

Ésta es la variable de la que depende todo lo anterior. La Hormiga Play y Pelotinas no están en el Local Pack por su sitio web: están por sus reseñas.

### El sistema

**Pide la reseña en el momento de mayor satisfacción**, que no es al día siguiente: es cuando el equipo está desmontando y los papás acaban de ver a los niños agotados y felices. Ahí es cuando dicen que sí.

**Que sea un enlace, no una instrucción.** "Búscanos en Google y déjanos una reseña" tiene una tasa de conversión pésima. En el panel de Google Business Profile hay un botón *Pide reseñas* que genera un enlace corto tipo `https://g.page/r/XXXX/review` que abre el formulario directamente.

Pásamelo y lo pongo en `GOOGLE_REVIEW_URL` de `site.ts`, para poder usarlo en el sitio y en los mensajes.

**Mensaje de WhatsApp al día siguiente.** Corto, con el enlace, sin pedir cinco estrellas:

> Hola [nombre], gracias por confiar en nosotros para la fiesta de ayer. Si el servicio te pareció bien, ¿nos dejarías una reseña en Google? Nos ayuda muchísimo a que más familias nos encuentren. Toma un minuto: [enlace]

**Responde todas.** Las buenas y sobre todo las malas. Google valora la actividad del propietario, y un papá que compara proveedores lee cómo respondes a una queja mucho más de lo que lee los elogios.

**Meta realista:** 20-30 reseñas en los primeros tres meses. Con ~10 eventos al mes y una tasa de respuesta del 30%, sale. A partir de ahí, entrar al Local Pack deja de ser cuestión de suerte.

### Lo que NO hay que hacer

No compres reseñas, no las pidas a familiares que no fueron clientes, no ofrezcas descuento a cambio. Google detecta patrones —ráfagas, cuentas sin historial, IPs repetidas— y la sanción es la suspensión de la ficha, que es peor que no tenerla.

Aplica también a lo que ya pasó con los backlinks: hay una red vendiendo servicios SEO que está usando brincolins.com como caso de estudio falso en 219 dominios. No contrates nada parecido para reseñas.

---

## 4. Fotos reales — el pendiente que desbloquea varias cosas

Dijiste que esperáramos a tener fotos reales antes de tocar las imágenes de la sección de confianza. De acuerdo. Para cuando las tengas, esto es lo que hay que sustituir y por qué:

| Imagen actual | Qué se ve realmente |
|---|---|
| `why/why-mejores-precios-inflables-cdmx.avif` | Etiquetas de precio que dicen **"EFICE SALE"** y **"RICE SALL"** — texto alucinado por IA, legible a tamaño normal |
| `why/why-seguro-responsabilidad-civil-inflables.avif` | Un "CERTIFICATE" generado por IA sobre un caballete *(ya no se usa en ninguna página)* |
| `why/why-cobertura-cdmx-edomex-inflables.avif` | Vista aérea de una ciudad que no es la CDMX, con alt text que dice "cobertura en CDMX" |
| `why/why-20-anos-experiencia-inflables-cdmx.avif` | Trofeo 3D de stock con "20 YEARS" |
| `proceso/proceso-aparta-fecha.avif` | Calendario con el número "021" |
| `testimonios/avatar-*.avif` (6) | Caras caricaturizadas por IA como avatares de clientes |

La lista de fotos que resuelve esto y también alimenta la ficha de Google y las redes:

1. **El equipo** instalando un inflable — dos o tres tomas.
2. **La camioneta** de entrega, con logo si lo tiene.
3. **Un evento completo**: inflable montado, niños jugando, papás alrededor.
4. **Los 8 inflables con niños dentro.** Las actuales son buenas fotos pero están vacías: no transmiten el producto en uso.
5. **El proceso**: llegada, montaje, inflable listo, desmontaje.
6. **La bodega** o el área donde se limpian y guardan los inflables. Ésta es la que más credibilidad da y casi nadie la publica.

Con teléfono basta. Buena luz, horizontal, sin filtros. **Pide autorización a los papás** para publicar fotos donde salgan niños identificables, o encuadra de espaldas y en plano general.

Una foto real y mediocre vale más que un render impecable de IA. Con las que tengas, sustituyo los bloques y actualizo los alt.

---

## 5. Orden sugerido

| # | Acción | Quién | Tiempo |
|---|---|---|---|
| 1 | Buscar si ya existe ficha de Google y reclamarla | Frank | 30 min |
| 2 | Crear/configurar la ficha (área de servicio, categorías, horario, descripción) | Frank | 1 h |
| 3 | Pasarme la URL de la ficha y el enlace de reseñas | Frank | 2 min |
| 4 | Pegar `sameAs` y `GOOGLE_REVIEW_URL`, y desplegar | Yo | 10 min |
| 5 | Abrir Facebook (y luego Instagram) | Frank | 1 h |
| 6 | Tomar la sesión de fotos en el próximo evento | Frank | 1 evento |
| 7 | Cargar fotos a la ficha, sustituir las de IA en el sitio | Frank + yo | 1 h |
| 8 | Arrancar el mensaje de reseña post-evento | Frank | continuo |

Los pasos 1-4 se pueden hacer hoy y son los que más pesan.

---

## Recordatorio de las dos keys de la Fase 0

Siguen pendientes y son las que hacen que todo esto se pueda medir:

- **`WEB3FORMS_KEY`** en `src/data/site.ts` — gratis en [web3forms.com](https://web3forms.com), sólo escribes el correo destino. **Sin ella no queda copia de ningún lead.**
- **`GA4_ID`** — el `G-XXXXXXXXXX` de Google Analytics. Sin él no hay forma de saber si la ficha de Google, las redes o el sitio están generando algo.
