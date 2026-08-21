/**
 * src/data/faqPool.ts
 * ══════════════════════════════════════════════════════════════════
 * Fuente única de las preguntas frecuentes del bloque pre-footer que
 * aparece en TODAS las páginas del sitio.
 *
 * Por qué existe
 * ──────────────
 * El bloque mostraba el mismo puñado de preguntas genéricas en las 155
 * páginas. Para el visitante era ruido repetido; para Google, 155 copias
 * del mismo texto. Aquí cada tipo de página recibe preguntas de SU
 * contexto — la zona que está viendo, el modelo que está viendo, el
 * tramo de precio que está viendo — y el resto se completa con el pool
 * universal. Mismo diseño en todo el sitio, contenido distinto.
 *
 * Reglas al editar
 * ────────────────
 * 1. Ninguna cifra se escribe a mano: viene de inflables.ts o de
 *    coverage.ts a través del contexto.
 * 2. Los títulos con la marca (PAA) son preguntas que Google muestra
 *    literalmente en "People also ask" — verificadas con Ahrefs el
 *    21-ago-2026. No cambiarles la redacción sin volver a verificarlas.
 * 3. Las respuestas no pueden contradecir /preguntas-frecuentes/, que es
 *    la página canónica del tema.
 * 4. Este bloque NO emite schema FAQPage: eso saldría duplicado en 155
 *    páginas. El schema sale sólo de las FAQ propias de cada página.
 * ══════════════════════════════════════════════════════════════════ */

import {
  INFLABLES_ACTIVOS,
  MODELOS_COUNT,
  PRICE_RANGE,
  getInflableBySlug,
} from "./inflables";

export interface Faq {
  question: string;
  answer:   string;
  /** Tema mostrado en lugar del número correlativo. */
  tag:      string;
}

/* ── Contexto que declara cada página ──────────────────────────────
   El tipo obliga a pasar los datos que las preguntas necesitan: no se
   puede pedir el bloque de zona sin decir de qué zona se trata. */
export type FaqContext =
  | { tipo: "home" }
  | { tipo: "zona";      zona: string; envio?: string }
  | { tipo: "producto";  slug: string }
  | { tipo: "categoria"; nombre: string; modelos: number; desde: string }
  | { tipo: "precio" }
  | { tipo: "cotizar" }
  | { tipo: "servicio";  servicio: "eventos" | "paquetes" | "mobiliario" | "iluminacion" | "renta" }
  | { tipo: "blog" }
  | { tipo: "directorio"; salon?: string; zona?: string }
  | { tipo: "cerca" }
  | { tipo: "generico" };

/* ══════════════════════════════════════════════════════════════════
   POOL UNIVERSAL — el respaldo de cualquier página
   Ordenado para que los temas alternen: las de precio arriba (son las
   de mayor volumen de búsqueda) pero sin tres seguidas del mismo tema.
   ══════════════════════════════════════════════════════════════════ */
export const FAQ_UNIVERSAL: Faq[] = [
  {
    tag: "Precio",
    question: "¿Cuánto cuesta un inflable para fiestas?",           // PAA
    answer: `Un inflable para fiesta cuesta de ${PRICE_RANGE} MXN por evento en CDMX y Estado de México. Los chicos para bebés de 1 a 4 años son $800; los medianos —Dragones Rojos, Castillo de Princesas, Mini Jungla y Gusanitos— van de $1,200 a $1,350; y los grandes con tobogán o circuito de obstáculos, de $1,700 a $1,900. El precio es por el evento completo e incluye entrega, instalación, motor, sanitización y recolección.`,
  },
  {
    tag: "Requisitos",
    question: "¿Necesito conexión eléctrica para el inflable?",
    answer: "Sí, y es el requisito que más sorprende: el inflable se mantiene inflado con un motor que trabaja durante todo el evento. Necesitas una toma de corriente de 110V a menos de 20 metros del área de instalación. Nosotros llevamos la extensión. Si tu evento es en un parque o en una zona sin luz, avísanos al cotizar para prever una planta de energía.",
  },
  {
    tag: "Precio",
    question: "¿Cuánto cuesta rentar un brincolín grande?",          // PAA
    answer: "Los tres modelos grandes cuestan entre $1,700 y $1,900 MXN por evento: Castillo Blanco $1,700 (6×5 m, para bodas y XV años), Barco Pirata $1,800 (7×5 m, con tobogán) y Circuito Extremo $1,900 (7×4 m, obstáculos para niños grandes y adultos). Necesitan entre 8×7 y 9×7 metros de espacio libre, así que conviene medir el área antes de elegir.",
  },
  {
    tag: "Espacio",
    question: "¿Qué pasa si el inflable que quiero no cabe en mi espacio?",
    answer: "Te proponemos el modelo más cercano que sí entre, y no cobramos nada por ese cambio. El área libre que pedimos ya incluye un metro de margen por lado: 3×3 m para el Mini Castillo, unos 6×6 m para los medianos y hasta 9×7 m para el Barco Pirata. Si tienes dudas, mándanos una foto del espacio con una medida aproximada por WhatsApp y te confirmamos antes de que apartes la fecha.",
  },
  {
    tag: "Precio",
    question: "¿Cuánto cuesta rentar un inflable en México?",        // PAA
    answer: `El precio varía mucho por ciudad y por proveedor. En la Zona Metropolitana del Valle de México el rango habitual va de $800 a $2,500 MXN por evento según el tamaño. Nuestro catálogo va de ${PRICE_RANGE} MXN con todo incluido. Desconfía de precios muy por debajo del rango: casi siempre significa que la entrega, el motor o la instalación se cobran aparte.`,
  },
  {
    tag: "Instalación",
    question: "¿Cuánto tarda la instalación y quién arma el inflable?",
    answer: "Lo armamos nosotros: llegamos antes de la hora del evento y la instalación toma entre 15 y 30 minutos según el modelo. Al terminar la fiesta regresamos a desmontar y recoger. Tú no tienes que armar, inflar ni guardar nada — eso ya está incluido en el precio.",
  },
  {
    tag: "Reserva",
    question: "¿Con cuánta anticipación debo reservar un inflable?",
    answer: "Al menos 5 días, y unas 2 semanas si tu evento cae en fin de semana. En temporada alta —diciembre, Semana Santa y fin de cursos— los sábados y domingos se agotan pronto. Si tu fecha ya está encima, pregunta de todos modos: a veces hay disponibilidad de último momento.",
  },
  {
    tag: "Instalación",
    question: "¿Se puede instalar un inflable en pasto, cemento o dentro de un salón?",
    answer: "Instalamos sobre pasto, tierra firme, concreto, adoquín y pisos de salón. En superficies duras anclamos con pesos y en pasto o tierra con estacas. No instalamos sobre grava suelta, pendientes pronunciadas ni superficies con vidrio u objetos punzantes. Para interiores, el Mini Castillo y Gusanitos son los dos modelos que caben bajo techo.",
  },
  {
    tag: "Seguridad",
    question: "¿Se queda alguien a cuidar el inflable durante la fiesta?",
    answer: "En kermeses, eventos escolares y corporativos el paquete incluye un operador dedicado que gestiona filas, turnos y seguridad. En fiestas particulares el operador es opcional: pídelo al cotizar. En cualquier caso siempre debe haber una persona adulta supervisando a los niños mientras el inflable esté en uso.",
  },
  {
    tag: "Modelos",
    question: "¿Hay inflables para adultos o sólo para niños?",
    answer: "También para adultos. El Circuito Extremo de 7 metros está pensado para competencias entre adolescentes y adultos, y el Castillo Blanco se renta para bodas, XV años y eventos de empresa. Son los modelos que más se piden para team building y family days. La única condición es respetar la capacidad indicada de cada uno.",
  },
  {
    tag: "Requisitos",
    question: "¿Qué necesito tener listo el día del evento?",
    answer: "Tres cosas: el área libre despejada según el modelo que elegiste, una toma de corriente de 110V a menos de 20 metros, y acceso para entrar con el inflable enrollado (una puerta o pasillo normal basta). Si hay escalones, elevador o una reja angosta, avísanos al cotizar para llegar preparados.",
  },
  {
    tag: "Requisitos",
    question: "¿El motor hace ruido o gasta mucha luz?",
    answer: "El motor inflador es de grado comercial y silencioso: se escucha como un ventilador de fondo, no interrumpe la música ni la conversación. Consume alrededor de 1.1 kW, parecido a una aspiradora doméstica. Tiene que permanecer encendido todo el tiempo que el inflable esté en uso.",
  },
  {
    tag: "Reserva",
    question: "¿Cómo reservo mi fecha?",
    answer: "Escríbenos por WhatsApp con el inflable que te interesa, la fecha y la zona de entrega. Confirmamos disponibilidad en minutos. Para apartar la fecha se requiere un anticipo del 50%. Aceptamos transferencia bancaria, efectivo y tarjeta. El saldo se liquida el día del evento antes de la instalación.",
  },
  {
    tag: "Eventos",
    question: "¿Rentan varios inflables para kermeses o eventos de empresa?",
    answer: "Sí, y con precio preferencial por paquete. Coordinamos de 2 a 5 inflables simultáneos para kermeses escolares, festivales, ferias y activaciones de marca, con operador incluido desde tres inflables. Escríbenos con la fecha, el número aproximado de asistentes y el tipo de evento y armamos la propuesta.",
  },
  {
    tag: "Cancelación",
    question: "¿Qué pasa si llueve o necesito cancelar?",
    answer: "En caso de lluvia reprogramamos tu evento sin costo adicional en la fecha disponible que prefieras. Para cancelaciones con más de 48 horas de anticipación devolvemos el 100% del anticipo. Tu tranquilidad es nuestra prioridad.",
  },
  {
    tag: "Cobertura",
    question: "¿Cubren toda la CDMX y el Estado de México?",
    answer: "Cubrimos las 16 alcaldías de la Ciudad de México y los principales municipios del Estado de México: Naucalpan, Tlalnepantla, Ecatepec, Huixquilucan, Atizapán, Cuautitlán Izcalli, Coacalco, Nezahualcóyotl y más. En la mayoría de las alcaldías la entrega va incluida; en municipios distantes aplica un cargo de envío que publicamos en la página de cada zona.",
  },
];

/* ══════════════════════════════════════════════════════════════════
   BLOQUES POR CONTEXTO
   Se anteponen al pool universal. La página que los recibe ve primero
   lo que le concierne y luego lo general.
   ══════════════════════════════════════════════════════════════════ */

/** Zona de cobertura — 35 páginas, cada una con contenido único.
    Es el bloque de mayor valor SEO del sistema: responde la búsqueda
    local literal ("renta de inflables en <zona>") con el nombre de la
    zona en la pregunta. */
function faqsZona(zona: string, envio?: string): Faq[] {
  const conCargo = Boolean(envio && envio.trim());
  return [
    {
      tag: "Cobertura",
      question: `¿Entregan inflables en ${zona}?`,
      answer: conCargo
        ? `Sí, entregamos en ${zona} con nuestro servicio a domicilio: llevamos el inflable, lo instalamos y lo recogemos al terminar. En esta zona aplica un cargo de envío de ${envio} según la colonia, que te confirmamos al cotizar junto con el precio del modelo. Los ${MODELOS_COUNT} inflables del catálogo están disponibles.`
        : `Sí, y en ${zona} la entrega va incluida en el precio del inflable: no se cobra envío. Llevamos el inflable, lo instalamos, lo sanitizamos antes del evento y lo recogemos al terminar. Los ${MODELOS_COUNT} modelos del catálogo están disponibles en esta zona.`,
    },
    {
      tag: "Precio",
      question: `¿Cuánto cuesta rentar un inflable en ${zona}?`,
      answer: conCargo
        ? `De ${PRICE_RANGE} MXN por evento según el modelo, más el cargo de envío de ${envio} que aplica en ${zona}. Ese es el precio total: entrega, instalación, motor inflador, sanitización y recolección van incluidos. Si necesitas factura se agrega el 16% de IVA.`
        : `De ${PRICE_RANGE} MXN por evento según el modelo, sin cargo de envío en ${zona}. Ese precio ya incluye entrega, instalación, motor inflador, sanitización y recolección. Si necesitas factura se agrega el 16% de IVA.`,
    },
    {
      tag: "Reserva",
      question: `¿Con cuánta anticipación debo reservar en ${zona}?`,
      answer: `Al menos 5 días, y unas 2 semanas si tu evento cae en sábado o domingo. Los fines de semana son los primeros en agotarse, y en temporada alta —diciembre, Semana Santa y fin de cursos— conviene apartar antes. Si tu fecha ya está cerca, pregunta de todos modos: coordinamos varias entregas por día en ${zona} y a veces queda espacio.`,
    },
  ];
}

/** Ficha de producto — 8 páginas. Todas las cifras salen de inflables.ts. */
function faqsProducto(slug: string): Faq[] {
  const i = getInflableBySlug(slug);
  if (!i) return [];
  return [
    {
      tag: "Precio",
      question: `¿Cuánto cuesta rentar el ${i.name}?`,
      answer: `El ${i.name} cuesta ${i.price} MXN por evento completo, de 4 a 6 horas. Ese precio incluye entrega a domicilio, instalación, motor inflador, sanitización antes del evento y recolección al terminar. Es un precio neto: si necesitas factura se agrega el 16% de IVA, y en municipios distantes del Estado de México aplica un cargo de envío que te decimos al cotizar.`,
    },
    {
      tag: "Espacio",
      question: `¿Cuánto espacio necesito para el ${i.name}?`,
      answer: `El ${i.name} mide ${i.size} y necesita un área libre de ${i.spaceRequired}, con ${i.heightClearance} de altura libre. Esa medida ya incluye un metro de margen por lado para el anclaje y para que los niños entren y salgan sin pegarse con nada. ${i.indoor ? "Es uno de los modelos que caben bajo techo, así que funciona en salón o terraza cubierta." : "Por su altura necesita instalarse al aire libre o en un espacio con techo muy alto."}`,
    },
    {
      tag: "Edades",
      question: `¿Para qué edad es el ${i.name} y cuántos niños admite?`,
      answer: `Está recomendado para ${i.ages} y admite ${i.capacity} al mismo tiempo. Esa capacidad es de niños brincando a la vez, no del total de invitados: con turnos, atiende sin problema una fiesta bastante más grande. Respetar el número simultáneo es lo que mantiene el juego seguro.`,
    },
  ];
}

/** Categoría del catálogo — 11 páginas. */
function faqsCategoria(nombre: string, modelos: number, desde: string): Faq[] {
  const n = nombre.toLowerCase();
  return [
    {
      tag: "Precio",
      question: `¿Cuánto cuesta rentar ${n}?`,
      answer: `En esta categoría tenemos ${modelos} ${modelos === 1 ? "modelo" : "modelos"} desde ${desde} MXN por evento completo. Todos incluyen entrega a domicilio, instalación, motor inflador, sanitización y recolección. La tabla comparativa de esta página muestra el precio exacto de cada modelo junto a sus medidas y capacidad, para que compares sin tener que abrir una ficha por una.`,
    },
    {
      tag: "Modelos",
      question: `¿Cómo elijo entre los ${n} disponibles?`,
      answer: `En este orden: primero el espacio libre que tienes —es el único dato que no puedes cambiar y descarta modelos de inmediato—, después la edad del cumpleañero y de la mayoría de los invitados, y al final el número de niños brincando al mismo tiempo. Con esas tres respuestas la elección suele reducirse a dos modelos, y ahí ya decide la temática. Si quieres, mándanos las medidas por WhatsApp y te decimos cuál entra.`,
    },
  ];
}

/** Página de precios. */
const FAQ_PRECIO: Faq[] = [
  {
    tag: "Precio",
    question: "¿El precio publicado es el precio final?",
    answer: `Sí. El precio de cada modelo ya incluye entrega a domicilio, instalación, motor inflador, sanitización y recolección — no se cobran por separado. Sólo se le suman dos cosas, y ambas te las decimos antes de que apartes la fecha: el 16% de IVA si necesitas factura, y el cargo de envío en municipios distantes del Estado de México.`,
  },
  {
    tag: "Precio",
    question: "¿Hay descuento si rento más de un inflable?",
    answer: "Sí. Para kermeses, festivales escolares y eventos grandes que requieren varios inflables preparamos paquetes con precio preferencial, y desde tres inflables el operador de logística va incluido. Escríbenos con la fecha, el tipo de evento y cuántos inflables necesitas y armamos la propuesta.",
  },
  {
    tag: "Pago",
    question: "¿Qué formas de pago aceptan y cuánto es el anticipo?",
    answer: "Para apartar la fecha se requiere un anticipo del 50%. Aceptamos transferencia bancaria, efectivo y pago con tarjeta. El saldo se liquida el día del evento, antes de la instalación. Si necesitas factura, avísanos al momento de reservar para emitirla con los datos correctos.",
  },
];

/** Página de cotización / contacto. */
const FAQ_COTIZAR: Faq[] = [
  {
    tag: "Cotización",
    question: "¿Cuánto tardan en responder una cotización?",
    answer: "En minutos dentro del horario de atención, que es de 8:00 a 20:00 los siete días de la semana. Cotizar no cuesta nada ni te compromete: te confirmamos disponibilidad para tu fecha y el precio total con envío incluido, y tú decides.",
  },
  {
    tag: "Cotización",
    question: "¿Qué datos necesito para pedir una cotización?",
    answer: "Cuatro: la fecha del evento, la colonia o zona de entrega, cuántos niños esperas y, si ya lo sabes, qué modelo te interesa. Si no tienes claro cuál elegir, con las medidas del espacio y la edad de los invitados nosotros te proponemos el que mejor entra.",
  },
  {
    tag: "Reserva",
    question: "¿Cotizar me compromete a rentar?",
    answer: "No. La cotización es informativa y sin costo. La fecha sólo queda apartada cuando confirmas y se recibe el anticipo del 50%; hasta entonces no hay ningún compromiso de tu parte.",
  },
];

/** Servicios. */
const FAQ_SERVICIO: Record<string, Faq[]> = {
  eventos: [
    {
      tag: "Eventos",
      question: "¿Cuántos inflables necesito para una kermés o un evento escolar?",
      answer: "Como referencia, un inflable mediano atiende cómodamente a unos 25 niños por turno. Para una kermés de un solo grado suele bastar con uno o dos; para un festival de toda la escuela, de tres a cinco en paralelo para que las filas no se hagan largas. Desde tres inflables incluimos un operador que gestiona turnos y seguridad.",
    },
    {
      tag: "Eventos",
      question: "¿Pueden instalar en una escuela, plaza o calle cerrada?",
      answer: "Sí, siempre que el espacio cumpla las medidas del modelo, haya una toma de corriente de 110V a menos de 20 metros y exista acceso para entrar con el inflable enrollado. Para plazas y calles cerradas conviene avisar con anticipación por los permisos y por la logística de descarga.",
    },
    {
      tag: "Facturación",
      question: "¿Emiten factura para empresas y escuelas?",
      answer: "Sí. Los precios publicados son netos y, cuando necesitas factura, se agrega el 16% de IVA. Avísanos al reservar para emitirla con los datos fiscales correctos. Para eventos corporativos recurrentes podemos coordinar la facturación por evento o por periodo.",
    },
  ],
  paquetes: [
    {
      tag: "Paquetes",
      question: "¿Qué incluye un paquete de fiesta completo?",
      answer: "Un paquete combina el inflable con el mobiliario y los servicios que necesita el evento —mesas, sillas, toldo, mesa de postres o iluminación—, entregados e instalados el mismo día por el mismo equipo. Sale mejor que contratar cada cosa por separado y evita coordinar a varios proveedores en la misma ventana de tiempo.",
    },
    {
      tag: "Paquetes",
      question: "¿Puedo armar un paquete a mi medida?",
      answer: "Sí. Dinos cuántos invitados esperas, el espacio con el que cuentas y qué necesitas resolver, y armamos la combinación. Lo más pedido es inflable más mesas y sillas; lo segundo, inflable más toldo cuando el evento es en jardín y el clima es incierto.",
    },
  ],
  mobiliario: [
    {
      tag: "Mobiliario",
      question: "¿Puedo rentar sólo mobiliario, sin inflable?",
      answer: "Sí. Mesas, sillas, toldos y mobiliario para fiesta se rentan por separado, con la misma logística de entrega, montaje y recolección. Dicho eso, la mayoría lo combina con un inflable porque el equipo llega una sola vez y sale más conveniente.",
    },
    {
      tag: "Mobiliario",
      question: "¿Cuántas mesas y sillas necesito para mi evento?",
      answer: "La regla práctica es una silla por invitado adulto y una mesa por cada ocho a diez personas. Para fiestas infantiles conviene sumar una mesa baja para los niños. Dinos cuántos invitados esperas y el espacio disponible y te decimos exactamente qué pedir.",
    },
  ],
  iluminacion: [
    {
      tag: "Iluminación",
      question: "¿Qué necesito para instalar iluminación en mi evento?",
      answer: "Una toma de corriente de 110V y saber a qué hora oscurece en tu evento. El montaje se hace junto con el resto del equipo, antes de que empiece la fiesta. Si el evento es en jardín o terraza sin instalación eléctrica cercana, avísanos al cotizar para prever extensiones o planta.",
    },
    {
      tag: "Iluminación",
      question: "¿La iluminación se puede combinar con el inflable?",
      answer: "Sí, y es la combinación más pedida para eventos que siguen después del atardecer. El mismo equipo entrega, monta y recoge las dos cosas, así que no tienes que coordinar dos proveedores ni pagar dos veces el traslado.",
    },
  ],
  renta: [
    {
      tag: "Servicio",
      question: "¿Qué incluye exactamente el servicio de renta?",
      answer: "Entrega a domicilio, instalación en menos de 30 minutos, motor inflador con su extensión, sanitización antes del evento y recolección al terminar. Tú no montas, no inflas y no guardas nada. Lo único que se suma al precio publicado es el IVA si necesitas factura y el cargo de envío en municipios distantes.",
    },
    {
      tag: "Servicio",
      question: "¿A qué hora llegan a instalar y a qué hora recogen?",
      answer: "Llegamos antes de la hora de inicio que nos indiques, con margen suficiente para montar sin prisas — la instalación toma de 15 a 30 minutos según el modelo. La recolección es al terminar el evento. Coordinamos ambos horarios al confirmar la reserva.",
    },
  ],
};

/** Blog. */
const FAQ_BLOG: Faq[] = [
  {
    tag: "Asesoría",
    question: "¿Cómo sé qué inflable le conviene a mi fiesta?",
    answer: `Mide primero el espacio libre, define después la edad de la mayoría de los invitados y al final calcula cuántos niños brincarán al mismo tiempo. Con esas tres respuestas el catálogo de ${MODELOS_COUNT} modelos se reduce casi siempre a dos opciones. Si prefieres saltarte el análisis, mándanos las medidas por WhatsApp y te decimos cuál entra.`,
  },
  {
    tag: "Seguridad",
    question: "¿Qué debo revisar para que la fiesta sea segura?",
    answer: "Tres cosas del lado del proveedor —que el inflable llegue limpio, que quede bien anclado y que el motor no se apague en todo el evento— y una del tuyo: que haya siempre una persona adulta supervisando. Además conviene respetar la capacidad simultánea del modelo y separar por edades cuando hay niños muy pequeños entre los grandes.",
  },
];

/** Directorio de salones. */
function faqsDirectorio(salon?: string, zona?: string): Faq[] {
  const donde = salon ?? (zona ? `los salones de ${zona}` : "un salón de fiestas");
  return [
    {
      tag: "Salones",
      question: `¿Puedo llevar un inflable a ${salon ? salon : "un salón de fiestas"}?`,
      answer: `Casi siempre sí, pero hay que confirmar dos cosas con ${salon ? "el salón" : "el salón"}: que permita inflables y cuánto espacio libre y altura hay disponibles. Nuestro Mini Castillo necesita 3×3 m y Gusanitos 7×5 m — son los dos modelos que caben bajo techo. Si el salón es al aire libre, entra cualquiera del catálogo. Consúltalo antes de apartar la fecha del inflable.`,
    },
    {
      tag: "Salones",
      question: "¿BRINCOLINS es dueño de los salones del directorio?",
      answer: `No. El directorio es una guía informativa de salones y jardines de eventos de la Zona Metropolitana, publicada para ayudarte a organizar la fiesta completa. No tenemos relación comercial con ellos ni cobramos comisión: cada salón se contrata directamente contigo. Nosotros ponemos el inflable, y llegamos a ${donde} como a cualquier otro domicilio.`,
    },
  ];
}

/** "Cerca de mí". */
const FAQ_CERCA: Faq[] = [
  {
    tag: "Cobertura",
    question: "¿Cómo sé si llegan hasta mi colonia?",
    answer: "Somos un servicio a domicilio, no un local al que tengas que ir, así que la pregunta no es qué tan cerca estamos sino si tu colonia entra en la ruta. Cubrimos las 16 alcaldías de CDMX y los principales municipios del Estado de México. Busca tu zona en la lista de esta página o mándanos el nombre de tu colonia por WhatsApp y te confirmamos en minutos.",
  },
  {
    tag: "Cobertura",
    question: "¿En qué zonas la entrega no tiene costo?",
    answer: "En la mayoría de las alcaldías de la Ciudad de México la entrega va incluida en el precio del inflable. En municipios distantes del Estado de México aplica un cargo de envío que depende de la colonia y que publicamos en la página de cada zona, para que lo sepas antes de cotizar y no aparezca como sorpresa al final.",
  },
];

/* ══════════════════════════════════════════════════════════════════
   SELECTOR
   ══════════════════════════════════════════════════════════════════ */

function bloqueDe(ctx: FaqContext): Faq[] {
  switch (ctx.tipo) {
    case "zona":       return faqsZona(ctx.zona, ctx.envio);
    case "producto":   return faqsProducto(ctx.slug);
    case "categoria":  return faqsCategoria(ctx.nombre, ctx.modelos, ctx.desde);
    case "precio":     return FAQ_PRECIO;
    case "cotizar":    return FAQ_COTIZAR;
    case "servicio":   return FAQ_SERVICIO[ctx.servicio] ?? [];
    case "blog":       return FAQ_BLOG;
    case "directorio": return faqsDirectorio(ctx.salon, ctx.zona);
    case "cerca":      return FAQ_CERCA;
    default:           return [];
  }
}

/**
 * Devuelve las preguntas del pre-footer para una página.
 *
 * @param ctx       contexto de la página
 * @param excluir   preguntas que la página ya muestra en su cuerpo: no se
 *                  repiten aquí. Es lo que evita ver la misma pregunta dos
 *                  veces en la misma pantalla.
 * @param limite    cuántas mostrar (8 por defecto)
 */
export function faqsPrefooter(
  ctx: FaqContext = { tipo: "generico" },
  excluir: Array<{ question: string }> = [],
  limite = 8,
): Faq[] {
  const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
  const fuera = new Set(excluir.map(f => norm(f.question)));
  const vistas = new Set<string>();
  const out: Faq[] = [];

  for (const f of [...bloqueDe(ctx), ...FAQ_UNIVERSAL]) {
    const k = norm(f.question);
    if (fuera.has(k) || vistas.has(k)) continue;
    vistas.add(k);
    out.push(f);
    if (out.length === limite) break;
  }
  return out;
}

/** Sólo para pruebas: cuántas preguntas distintas puede servir el sistema. */
export const FAQ_UNIVERSAL_COUNT = FAQ_UNIVERSAL.length;
export const CATALOGO_COUNT = INFLABLES_ACTIVOS.length;
