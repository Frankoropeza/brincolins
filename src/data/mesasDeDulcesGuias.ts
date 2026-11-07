/**
 * src/data/mesasDeDulcesGuias.ts
 * Guías editoriales de las páginas de mesas de dulces.
 *
 * Cada H2 responde una búsqueda medida en Ahrefs MX (2026-11-07; nota en
 * OBSIDIAN/AHREFS/2026-11-07-Keywords-Mesas-de-dulces-BRINCOLINS.md).
 * Cifras: solo las del catálogo de MEDEDUL (mesasDeDulces.ts) y su guía de
 * cantidades (250-300 g por adulto, 150-200 g por niño, 350-400 g si se
 * llevan bolsitas). Lo demás es criterio de montaje, no estadística.
 */

export type Seccion = { h2: string; p: string[]; lista?: string[]; cierre?: string };
export type Guia = { titulo: string; intro: string; secciones: Seccion[] };

const B = "/servicios/mesas-de-dulces/";
const a = (slug: string, txt: string) => `<a href="${B}${slug}/">${txt}</a>`;

export const GUIA_HUB: Guia = {
  titulo: "Guía para armar (o contratar) una mesa de dulces",
  intro: "Antes de pedir precios ayuda saber cuántos invitados vas a recibir y cuánto espacio hay junto a la pared. Lo demás (colores, temática, cuánto dulce) se resuelve en una conversación. Estas son las dudas que más nos llegan.",
  secciones: [
    {
      h2: "¿Qué lleva una mesa de dulces?",
      p: [
        "Una mesa de dulces bien armada tiene cuatro capas. La primera son las golosinas: gomitas, malvaviscos, chocolates, paletas, caramelos y, si la fiesta lo pide, dulces mexicanos. La segunda son los postres pequeños, como cupcakes, macarons, galletas decoradas o mini pasteles, que le dan altura y hacen que la mesa no se vea plana.",
        "La tercera capa es la que casi nadie nota hasta que falta: bases, bomboneras de cristal, cake stands y charolas a distintas alturas. Sin ellas, los dulces quedan en una sola línea y la mesa se ve como un buffet. La cuarta es la decoración: mantel, flores o globos, un fondo y las etiquetas con el nombre del festejado.",
      ],
      cierre: "En todos los niveles de nuestro aliado MEDEDUL la mantelería, las bases y la cristalería ya van incluidas. Si el lugar de tu fiesta ya tiene mesa, avísalo al cotizar.",
    },
    {
      h2: "¿Cuántos dulces se necesitan por invitado?",
      p: [
        "La regla que usa MEDEDUL para calcular cada mesa es sencilla: de 250 a 300 gramos por adulto y de 150 a 200 gramos por niño. Si vas a poner bolsitas para que cada quien se lleve dulces a casa, sube el cálculo a 350 o 400 gramos por persona.",
        "Para una fiesta infantil con 30 niños y 20 adultos, eso da entre 10 y 12 kilos de dulce. Parece mucho, pero en una mesa con frascos altos y postres se reparte rápido. Lo que sobre al final se queda contigo: el equipo lo empaca antes de desmontar.",
      ],
    },
    {
      h2: "¿Cómo hacer una mesa de dulces sencilla y económica?",
      p: [
        "Una mesa sencilla puede verse muy bien. Casi todo depende de la paleta y del orden. Escoge dos colores (tres como máximo) y elige los dulces por color, no por marca: una mesa en rosa palo y blanco se ve más cuidada que una con todo el arcoíris.",
        "Luego, menos variedades y más volumen. Seis frascos llenos lucen más que quince a la mitad. Pon algo alto al centro, un pastel o un arreglo, y deja que los frascos bajen hacia los lados para que la vista recorra la mesa. Y un solo protagonista: si ya hay arco de globos, no hace falta además un backdrop.",
      ],
      cierre: `Si prefieres que alguien más lo resuelva, el nivel Esencial está pensado justo para eso: una mesa de 8 a 10 variedades con temática, cristalería y montaje, desde $3,500 + IVA para un ${a("cumpleanos-infantil", "cumpleaños infantil")} de 15 a 30 niños.`,
    },
    {
      h2: "¿Qué dulces poner en una mesa de dulces para fiesta infantil?",
      p: [
        "Para niños funcionan los dulces que se pueden tomar con la mano sin ensuciar: gomitas, malvaviscos, paletas, chocolates pequeños envueltos y galletas decoradas. Conviene evitar los dulces muy duros para los más pequeños y los que tienen cacahuate si no sabes quién es alérgico.",
        "Al cotizar puedes avisar de alergias o restricciones y la selección se ajusta. En el nivel Premium del cumpleaños infantil hay opción sin nueces y sin gluten.",
      ],
    },
    {
      h2: "¿Qué bases y mobiliario necesita una mesa de dulces?",
      p: [
        "Lo básico es una mesa firme de 1.8 a 2.4 metros, mantel hasta el piso, cuatro a seis bomboneras de cristal de distintas alturas, dos o tres cake stands y una charola para galletas o bolsitas. Si la mesa va contra una pared lisa, un fondo o un arco ayuda a que se vea terminada en fotos.",
        "Las bases, la cristalería y la decoración vienen incluidas en el servicio. De tu lado se necesita el espacio libre y acceso para montar una o dos horas antes de la fiesta.",
      ],
    },
    {
      h2: "¿Cuánto cuesta una mesa de dulces para 50 o 100 personas?",
      p: [
        `Depende del evento. Para 50 personas, un ${a("bautizo", "bautizo")} va desde $3,800 (30 a 50 invitados) y un ${a("baby-shower", "baby shower")} desde $7,200 (40 a 80). Para 100 personas, un bautizo cuesta desde $6,200 y una ${a("boda", "boda")} desde $8,500 (50 a 100 invitados). Todos los precios son más IVA.`,
        "La tabla de arriba tiene los tres niveles de cada evento y el cotizador te dice cuál te corresponde según tus invitados.",
      ],
    },
    {
      h2: "¿Mesa de dulces o candy bar? ¿Cuál es la diferencia?",
      p: [
        "En la práctica son lo mismo: una mesa decorada con dulces para que los invitados se sirvan. «Candy bar» se usa más en bodas y eventos de empresa; «mesa de dulces», en fiestas familiares. Lo que sí cambia es el estilo: un candy bar suele llevar frascos dispensadores y bolsitas para llevar, y una mesa de dulces puede incluir pastel y postres.",
        `Si lo que buscas es una pared con dispensadores para que cada invitado arme su bolsita, revisa el ${a("pared-de-dulces", "candy wall")}.`,
      ],
    },
  ],
};

export const GUIAS: Record<string, Guia> = {
  /* ═════════════ EVENTOS ═════════════ */
  "cumpleanos-infantil": {
    titulo: "Ideas para la mesa de dulces de un cumpleaños infantil",
    intro: "En un cumpleaños la mesa de dulces compite con el inflable por la atención de los niños. Tiene que estar a su alcance y aguantar que la visiten cada cinco minutos.",
    secciones: [
      {
        h2: "¿Qué temática elegir para la mesa de un niño o una niña?",
        p: [
          "La mejor temática es la que el festejado ya está pidiendo. Dinosaurios, autos, safari y superhéroes siguen siendo los favoritos de los niños; unicornios, princesas, arcoíris y mariposas, los de las niñas. Pero cada vez más papás eligen algo neutro y bonito, como jungla o globos aerostáticos, que sirve para hermanos y primos.",
          "Más que el personaje, lo que cambia el resultado es la paleta. Una mesa de dinosaurios en verde salvia y terracota se ve mucho más cuidada que una con todos los verdes posibles.",
        ],
      },
      {
        h2: "¿Cómo armar la mesa de dulces para un niño de 1 a 3 años?",
        p: [
          "Para los más pequeños conviene menos dulce duro y más cosas suaves: malvaviscos, galletas, cupcakes y mini donas. Los frascos de cristal van al fondo de la mesa y al frente lo que sí pueden tomar. Si hay bebés de un año, avisa al cotizar para que la selección lo considere.",
          "Y si la fiesta es para bebés, el Castillo Baby es el inflable pensado para niños de 1 a 3 años: combina bien con una mesa Esencial.",
        ],
      },
      {
        h2: "¿Qué golosinas lleva una mesa de dulces para fiesta infantil?",
        p: ["Una base que casi siempre funciona:"],
        lista: [
          "Gomitas en dos o tres colores de la temática.",
          "Malvaviscos (enteros o trenzados).",
          "Paletas de caramelo o de chocolate.",
          "Chocolates pequeños envueltos.",
          "Galletas glaseadas con el motivo de la fiesta.",
          "Cupcakes o mini donas para darle altura.",
        ],
        cierre: "Todos los niveles incluyen bolos sorpresa coordinados con la misma temática, así los niños se llevan algo a casa.",
      },
      {
        h2: "¿Dónde poner la mesa si también hay inflable?",
        p: [
          "Lejos de la entrada del inflable y en sombra, si se puede. Los niños salen del brincolín con hambre y con prisa; una mesa a dos o tres metros les da tiempo de frenar. Si la fiesta es en jardín, el chocolate y el betún aguantan mejor bajo un toldo o junto a una pared.",
        ],
      },
    ],
  },
  "bautizo": {
    titulo: "Cómo elegir la mesa de dulces para un bautizo",
    intro: "Un bautizo suele ser una reunión familiar de día, con abuelos, padrinos y niños de todas las edades. La mesa tiene que verse delicada y, a la vez, aguantar varias horas.",
    secciones: [
      {
        h2: "¿Mesa de dulces para bautizo de niña o de niño?",
        p: [
          "La base casi siempre es blanca. Para niña se suma rosa palo o durazno; para niño, celeste o azul empolvado. Si prefieres algo neutro, blanco con dorado o con verde salvia funciona para los dos y se ve muy bien en fotos de la iglesia y del salón.",
          "Los símbolos son los que hacen que se lea como bautizo: una cruz discreta, palomas, ángeles, la inicial del bebé. No hace falta ponerlos todos; con dos bien elegidos basta.",
        ],
      },
      {
        h2: "¿Qué dulces lleva una mesa de bautizo?",
        p: ["Los que más se piden:"],
        lista: [
          "Peladillas y almendras confitadas blancas.",
          "Galletas glaseadas en forma de cruz, paloma o angelito.",
          "Macarons blancos o en el color del bebé.",
          "Malvaviscos y chocolates en papel dorado.",
          "Un pastel blanco al centro, aunque sea pequeño.",
        ],
        cierre: "Desde el nivel Premium se incluyen macarons con la inicial del bebé, hostias dulces y rosarios comestibles.",
      },
      {
        h2: "¿Cómo hacer una mesa de dulces para bautizo económica?",
        p: [
          "Reduce variedades y apuesta por el blanco: es el color más fácil de conseguir y el que más se ve. Una mesa con cinco o seis frascos altos, galletas de paloma y un arreglo de flores blancas resuelve un bautizo íntimo sin gastar de más.",
          "El nivel Esencial de bautizo cuesta desde $3,800 + IVA para 30 a 50 invitados e incluye cruz decorativa, etiquetas con el nombre del bebé y bolos con rosarios o cruces.",
        ],
      },
      {
        h2: "¿Y los centros de mesa con dulces?",
        p: [
          "Si quieres centros de mesa con dulces, lo que mejor funciona es repetir dos elementos de la mesa principal (por ejemplo, almendras blancas en copa de cristal y una ramita de olivo) para que todo el salón se vea coordinado. Pregunta por ellos al cotizar.",
        ],
      },
    ],
  },
  "baby-shower": {
    titulo: "Ideas para la mesa de dulces de un baby shower",
    intro: "La mesa de dulces suele ser el fondo de casi todas las fotos de un baby shower. Por eso importa más la paleta y el orden que la cantidad.",
    secciones: [
      {
        h2: "¿Mesa de dulces sencilla para baby shower de niña o de niño?",
        p: [
          "Para niña funcionan rosa palo, durazno y crema; para niño, celeste empolvado, salvia y blanco. Si todavía no saben el sexo o lo van a revelar ese día, crema con verde salvia o con amarillo suave es la opción más segura.",
          "Una mesa sencilla se resuelve con un osito o unas nubes como protagonista, cupcakes en los dos colores y galletas con forma de biberón o de nube.",
        ],
      },
      {
        h2: "¿Qué lleva una mesa de dulces para baby shower?",
        p: ["Lo que no suele faltar:"],
        lista: [
          "Cupcakes y macarons en la paleta del bebé.",
          "Galletas decoradas: osito, nube, biberón, ropita.",
          "Malvaviscos y paletas.",
          "Un pastel pequeño de uno o dos pisos.",
          "Etiquetas con el nombre del bebé.",
        ],
        cierre: "La futura mamá agradece opciones menos dulces: fruta, galletas o una estación aparte. En el nivel Premium hay una estación separada para ella.",
      },
      {
        h2: "¿Cómo incluir la revelación de género en la mesa?",
        p: [
          "La forma más sencilla es dejar la mesa en colores neutros y que el color aparezca en el momento de la revelación: dentro de un pastel, en globos o con humo. Desde el nivel Premium la mecánica de gender reveal está incluida, y en Luxury es con humo y globo.",
        ],
      },
    ],
  },
  "primera-comunion": {
    titulo: "Cómo elegir la mesa de dulces para una primera comunión",
    intro: "En una primera comunión la mesa de dulces convive con la comida familiar y con muchos niños de la misma edad. Que se vea solemne sin dejar de ser una fiesta es el punto.",
    secciones: [
      {
        h2: "¿Qué símbolos lleva una mesa de primera comunión?",
        p: [
          "Los clásicos son el cáliz, la hostia, las espigas de trigo, las uvas y la paloma. El monograma IHS o el crismón XP aparece desde el nivel Premium. Con dos de esos elementos y una paleta blanca con dorado ya se entiende el motivo.",
          "Para niña, mucha gente suma flores blancas o rosa muy pálido; para niño, azul o verde olivo con espigas.",
        ],
      },
      {
        h2: "¿Qué dulces poner en la mesa de una comunión?",
        p: ["Una selección que funciona:"],
        lista: [
          "Galletas redondas tipo hostia y galletas con forma de cáliz.",
          "Peladillas y almendras blancas.",
          "Macarons blancos.",
          "Bolos con medalla y galleta hostia para los niños.",
          "Un pastel blanco con espigas.",
        ],
      },
      {
        h2: "¿Ideas de centros de mesa con dulces para primera comunión?",
        p: [
          "Un centro de mesa sencillo y coordinado: una copa de cristal con peladillas, dos o tres espigas de trigo y una vela. Si repites esos elementos en la mesa principal, el salón se ve armado con poco. Pregunta por centros de mesa al cotizar.",
        ],
      },
    ],
  },
  "xv-anos": {
    titulo: "Ideas para la mesa de dulces de unos XV años",
    intro: "En unos XV la mesa de dulces es parte de la escenografía. Sale en el vals, en las fotos de grupo y en las historias de todas las invitadas.",
    secciones: [
      {
        h2: "¿Cómo hacer una mesa de dulces juvenil y elegante para XV años?",
        p: [
          "Para que se vea juvenil basta con una paleta clara y respetarla en toda la mesa; el brillo de más la envejece. Rosa empolvado con latón, blanco con plata, lila con crema o azul rey con dorado son combinaciones que se ven modernas. Las flores, la luz cálida y los candelabros hacen el resto.",
          "Desde el nivel Premium la mesa lleva backdrop floral con el nombre de la quinceañera, iluminación LED y una propuesta visual con render antes del evento, para que ella la apruebe.",
        ],
      },
      {
        h2: "¿Cómo hacer una mesa de dulces para XV años económica?",
        p: [
          "Pon el presupuesto en el fondo y en el pastel, que es lo que sale en todas las fotos, y reduce variedades de dulce. Una mesa con un arco de flores, un pastel de dos pisos y ocho o diez variedades en frascos dorados se ve completa.",
          "El nivel Esencial de XV cuesta desde $7,500 + IVA para 50 a 100 invitados, con diseño en la paleta de la quinceañera y etiquetas con su nombre.",
        ],
      },
      {
        h2: "¿Qué postres y dulces lleva una mesa de XV años?",
        p: [
          `Macarons, mini pasteles individuales, trufas, paletas de chocolate decoradas y dulces en cristalería. Si quieres más repostería, se puede sumar una ${a("mesa-de-postres", "mesa de postres")}; y si quieres un momento especial, una ${a("fuente-de-chocolate", "fuente de chocolate")} (incluida en el nivel Luxury).`,
        ],
      },
    ],
  },
  "boda": {
    titulo: "Cómo elegir la mesa de dulces para una boda",
    intro: "En una boda la mesa de dulces suele abrirse después de la cena, cuando la pista ya está llena. Tiene que verse impecable desde el coctel y seguir viéndose bien a medianoche.",
    secciones: [
      {
        h2: "¿Cómo lograr una mesa de dulces elegante para boda?",
        p: [
          "La elegancia está en tres cosas: cristalería buena, una paleta corta y espacio entre piezas. Blanco con champagne y eucalipto, marfil con latón o blanco con verde olivo son combinaciones que acompañan casi cualquier decoración de boda.",
          "El nivel Premium incluye backdrop floral con el monograma de los novios, iluminación cálida, coordinación con el wedding planner y una propuesta visual con render conceptual antes del evento.",
        ],
      },
      {
        h2: "¿Mesa de dulces o mesa de postres para boda?",
        p: [
          `Muchas bodas tienen las dos: la mesa de dulces para que los invitados se lleven algo y la ${a("mesa-de-postres", "mesa de postres")} con repostería fina después de la cena. Si solo vas a poner una, piensa en tus invitados: con muchos niños, dulces; con invitados mayores, postres. El nivel Luxury de boda ya trae mesa de postres gourmet complementaria.`,
        ],
      },
      {
        h2: "¿Con cuánta anticipación reservar la mesa de dulces de una boda?",
        p: [
          "En temporada alta, de tres a seis meses. Las bodas suelen caer en las mismas fechas y los equipos de montaje se llenan antes que los salones. Para otras fechas, escribe y confirmamos disponibilidad.",
        ],
      },
    ],
  },

  /* ═════════════ TIPOS DE MESA ═════════════ */
  "mesa-de-postres": {
    titulo: "Guía de la mesa de postres para fiestas",
    intro: "Una mesa de postres es la versión de repostería de la mesa de dulces: menos golosina y más pastelería. Funciona sobre todo en bodas, XV años y fiestas con muchos adultos.",
    secciones: [
      {
        h2: "¿Qué lleva una mesa de postres?",
        p: ["La selección habitual:"],
        lista: [
          "Tartaletas y tartas pequeñas.",
          "Brownies cortados en porción.",
          "Cupcakes y mini pasteles.",
          "Macarons.",
          "Cheesecakes individuales.",
          "Petit fours y, desde el nivel Favorito, postres mexicanos.",
        ],
        cierre: "Todo se monta en bases doradas y cake stands a distintas alturas.",
      },
      {
        h2: "¿Qué mini postres poner en una mesa de dulces?",
        p: [
          "Los que se comen en una o dos mordidas y no necesitan cubiertos: macarons, mini cheesecakes, tartaletas, brownies en cuadro y cupcakes pequeños. Si la mesa de dulces ya tiene mucho color, los mini postres en tonos claros equilibran.",
        ],
      },
      {
        h2: "¿Mesa de postres para boda o para XV años?",
        p: [
          `Para boda y XV años la mesa de postres suele ir después de la cena, con repostería más fina y luz cálida. El nivel Luxury está pensado justo para esas celebraciones. Si además quieres una ${a("boda", "mesa de dulces para boda")}, se pueden coordinar en el mismo montaje.`,
        ],
      },
      {
        h2: "¿Hay mesa de postres sencilla o para fiesta infantil?",
        p: [
          "Sí. El nivel Esencial, desde $4,500 + IVA para 30 a 50 personas, lleva tartas, brownies, cupcakes y macarons con bases doradas. Para niños funcionan mejor cupcakes, brownies y galletas que la repostería con crema.",
        ],
      },
    ],
  },
  "mesa-de-frutas": {
    titulo: "Guía de la mesa de frutas para fiestas",
    intro: "La mesa de frutas es la opción fresca de la fiesta: gusta a los niños, a quienes cuidan el azúcar y a quien busca algo ligero entre tanto pastel.",
    secciones: [
      {
        h2: "¿Qué frutas llevar en una mesa de frutas para fiesta?",
        p: [
          "Las que aguantan horas sin oxidarse y se ven bien cortadas: sandía, melón, piña, mango, kiwi, uvas, fresas y naranja. Manzana y plátano se oscurecen rápido; si van, que sea al final o con limón.",
          "Según el nivel van de 6 a más de 15 variedades, cortadas y montadas el mismo día.",
        ],
      },
      {
        h2: "¿Cómo armar una mesa de frutas para fiesta infantil?",
        p: [
          "En brochetas y en vasitos. Los niños comen más fruta cuando la pueden tomar con la mano, y las brochetas de colores se acaban antes que las charolas. El chamoy y el chile en polvo, en un lado y para que cada quien se sirva.",
        ],
      },
      {
        h2: "¿Qué toppings se pueden poner?",
        p: [
          "Chamoy, chile en polvo, limón, miel, granola y yogur. En los niveles altos se suma chocolate fundido. Si ya tienes una fuente de chocolate, la fruta de la mesa sirve también para bañar.",
        ],
      },
    ],
  },
  "mesa-de-quesos": {
    titulo: "Guía de la mesa y tabla de quesos para eventos",
    intro: "La mesa de quesos y carnes frías es para fiestas con adultos: bodas, cenas y eventos de empresa. Es a la que la gente regresa con una copa en la mano.",
    secciones: [
      {
        h2: "¿Qué lleva una tabla de quesos para un evento?",
        p: ["Una tabla equilibrada combina texturas:"],
        lista: [
          "Un queso cremoso (brie).",
          "Uno curado (manchego).",
          "Uno de sabor fuerte (queso de cabra).",
          "Uno suave y conocido (chihuahua o monterrey).",
          "Carnes frías: jamón serrano, salami, chorizo de Pamplona.",
          "Acompañamientos: baguette, galletas, uvas, higos, frutos secos y mermelada.",
        ],
      },
      {
        h2: "¿Cuánto queso calcular por invitado?",
        p: [
          "Depende de si la mesa es la botana o si hay cena después. Al cotizar, dinos cuántos invitados y si habrá comida, y el volumen se ajusta. Los niveles van de 30 a 50, de 50 a 100 y de más de 100 personas.",
        ],
      },
      {
        h2: "¿Con qué vino acompañar la mesa de quesos?",
        p: [
          "Una regla fácil: tinto para el manchego y el queso de cabra, blanco para el brie y los quesos cremosos. Desde el nivel Favorito se incluye asesoría de maridaje.",
        ],
      },
    ],
  },
  "mesa-de-botanas": {
    titulo: "Guía de la mesa de botanas para fiestas",
    intro: "La mesa de botanas es la que sostiene la fiesta mientras llega la comida, y la que salva la noche cuando se alarga. Con sabores mexicanos, además, casi nadie se resiste.",
    secciones: [
      {
        h2: "¿Qué botanas poner en una mesa para fiesta?",
        p: ["Las que más se acaban:"],
        lista: [
          "Cacahuate japonés, garapiñado y enchilado.",
          "Palomitas.",
          "Frutos secos.",
          "Quesos en cubo y bocadillos salados.",
          "Snacks mexicanos con chamoy (desde el nivel Favorito).",
        ],
      },
      {
        h2: "¿Cómo armar una mesa de botanas mexicanas?",
        p: [
          "Cazuelas de barro, un textil de rayas, limones partidos y salsas en botellas de vidrio. Con eso la mesa se lee mexicana sin poner sombreros ni sarapes. Funciona en fiestas patrias, cumpleaños de adultos y reuniones de empresa.",
        ],
      },
      {
        h2: "¿Botanas, dulces o las dos?",
        p: [
          `Si la fiesta tiene niños y adultos, las dos. Una <a href="${B}">mesa de dulces</a> para los niños y la de botanas cerca de las bebidas, para los grandes.`,
        ],
      },
    ],
  },
  "mesa-de-dulces-mexicanos": {
    titulo: "Guía de la mesa de dulces mexicanos tradicionales",
    intro: "En una mesa de dulces mexicanos casi todos los invitados encuentran el dulce de su infancia, y eso se nota en cuánto platican frente a ella.",
    secciones: [
      {
        h2: "¿Qué dulces mexicanos poner en la mesa?",
        p: ["Los que más se reconocen:"],
        lista: [
          "Cocadas y jamoncillos.",
          "Glorias y mazapán.",
          "Obleas de colores.",
          "Tamarindos.",
          "Palanquetas y alegrías de amaranto.",
          "Borrachitos y dulces cristalizados.",
        ],
      },
      {
        h2: "¿Cómo decorar una mesa de dulces mexicana?",
        p: [
          "Papel picado, barro, canastas de palma, talavera y flores como cempasúchil o nube, según la temporada. El truco es ordenar los dulces por color en las charolas: así se ve abundante y cuidada a la vez.",
        ],
      },
      {
        h2: "¿Para qué fiestas funciona?",
        p: [
          "Fiestas patrias, posadas, Día de Muertos, bautizos con temática mexicana y bodas en hacienda. En temporada se suman calaveritas de azúcar.",
        ],
      },
    ],
  },
  "mesa-de-donas-y-cupcakes": {
    titulo: "Guía de la mesa de donas y cupcakes",
    intro: "La mesa de donas sale muy bien en fotos, sobre todo cuando las donas cuelgan de una pared de madera. Y a los niños les encanta tomarlas directo de la clavija.",
    secciones: [
      {
        h2: "¿Cómo armar una pared de donas?",
        p: [
          "Una pared de clavijas de madera con las donas colgadas en filas y, abajo, una mesa con cupcakes y mini donas. Conviene elegir dos o tres glaseados que combinen con la fiesta para que la pared se vea ordenada.",
        ],
      },
      {
        h2: "¿Qué sabores de donas y cupcakes se pueden pedir?",
        p: [
          "Donas glaseadas (chocolate, vainilla, fresa), rellenas y mini donas, y cupcakes con buttercream o fondant. El formato depende del espacio: pared de donas, buffet escalonado con vitrinas o centro de mesa.",
        ],
      },
    ],
  },

  /* ═════════════ ESTACIONES ═════════════ */
  "fuente-de-chocolate": {
    titulo: "Todo sobre la fuente de chocolate para fiestas",
    intro: "La fuente de chocolate es la estación donde se hace fila: niños y adultos esperando su turno con la brocheta en la mano.",
    secciones: [
      {
        h2: "¿Cuánto cuesta rentar una fuente de chocolate?",
        p: [
          "Desde $3,500 + IVA para 20 a 40 invitados (5 kg de chocolate, 3 a 4 productos para bañar y operador 2 horas). Para 50 a 150 invitados, $5,800 con 15 kg y operador 4 horas. Para eventos grandes, $9,500 con 30 a 50 kg, 8 productos y operador 6 horas con ayudante.",
        ],
      },
      {
        h2: "¿Qué chocolate se usa en la fuente de chocolate?",
        p: [
          "Chocolate belga hecho con manteca de cacao, no cobertura compuesta. Se puede elegir con leche, blanco, oscuro al 70% o ruby (rosa, sin colorantes). Para fiestas con niños y adultos, la opción mixta pone dos fuentes: leche para los niños y oscuro para los grandes.",
        ],
      },
      {
        h2: "¿Qué poner en una fuente de chocolate?",
        p: ["Lo que mejor se baña:"],
        lista: [
          "Fresas frescas.",
          "Fruta: plátano, piña, melón, uvas, mango.",
          "Malvaviscos.",
          "Pretzels y galletas de mantequilla.",
          "Mini donas y churros pequeños.",
          "Brochetas mixtas ya armadas.",
        ],
        cierre: "Esencial lleva 3 o 4 de estos productos; Premium, 5 o 6 (con churros); Luxury, los 8.",
      },
      {
        h2: "¿Cómo funciona una fuente de chocolate?",
        p: [
          "El chocolate se calienta en la base y un tornillo lo sube por la torre; desde arriba cae en cortina por cada nivel. Necesita una toma de 110V cerca y una mesa firme y nivelada. El equipo llega una o dos horas antes para montarla y calentar el chocolate, y el operador la cuida y la repone durante el servicio.",
        ],
      },
    ],
  },
  "fuente-de-chamoy": {
    titulo: "Todo sobre la fuente de chamoy",
    intro: "La fuente de chamoy es la versión mexicana de la fuente de chocolate: más ácida, más picosa y con mucha más fila en fiestas juveniles.",
    secciones: [
      {
        h2: "¿Qué se pone en una fuente de chamoy?",
        p: ["Lo clásico:"],
        lista: [
          "Gomitas (ositos, aros, gusanitos).",
          "Mango, sandía, jícama y pepino.",
          "Palomitas dulces.",
          "Pretzels y churritos.",
          "Helado de vainilla con chamoy (en el nivel Luxury).",
        ],
        cierre: "Se completa con tajín, limón, miel, tamarindo o cacahuate japonés para mezclar.",
      },
      {
        h2: "¿Qué tan picosa es? ¿Es apta para niños?",
        p: [
          "Hay cuatro niveles: suave, tradicional, picoso y extra picoso. El suave tiene muy poco chile y es apto desde los 6 años. Para niños más pequeños conviene la fuente de chocolate.",
        ],
      },
      {
        h2: "¿Dónde poner la fuente de chamoy?",
        p: [
          "En un área ventilada, porque el chile se siente, y cerca de una toma de 110V. Funciona muy bien junto a la mesa de botanas o de frutas.",
        ],
      },
    ],
  },
  "pared-de-dulces": {
    titulo: "Todo sobre el candy wall (pared de dulces)",
    intro: "El candy wall es una mesa de dulces vertical: cada invitado arma su bolsita con los dispensadores. Además de servir dulces, se vuelve el fondo de fotos de la fiesta.",
    secciones: [
      {
        h2: "¿Qué es un candy wall y cómo funciona?",
        p: [
          "Es una estructura modular con dispensadores de acrílico llenos de dulces. Los invitados toman una bolsita, jalan la palanca y se sirven. Hay tamaños desde 2 × 2 m con 50 dispensadores hasta 6 × 3 m con más de 200.",
        ],
      },
      {
        h2: "¿Qué diseño elegir?",
        p: [
          "Floral para bodas y baby showers, neón con una frase para XV años y fiestas juveniles, geométrica o con branding para empresas, y vintage para fiestas en jardín. Los diseños con neón, logotipo o temática personalizada necesitan de 4 a 6 semanas de anticipación por la producción.",
        ],
      },
      {
        h2: "¿Qué espacio necesita?",
        p: [
          "Una pared o fondo firme y el ancho del modelo: 2 m en Esencial y hasta 6 m en el Luxury más grande. Llega desarmada y se instala en 2 o 3 horas.",
        ],
      },
    ],
  },
  "stand-para-pastel": {
    titulo: "Todo sobre el stand para pastel",
    intro: "El stand para pastel es el marco del momento más fotografiado de la fiesta: el corte del pastel. Una buena base decorativa hace que un pastel sencillo se vea de revista.",
    secciones: [
      {
        h2: "¿Qué tamaño de stand necesita mi pastel?",
        p: ["Según el número de pisos:"],
        lista: [
          "1 piso: 6 a 15 personas.",
          "2 pisos: 15 a 40 personas.",
          "3 pisos: 40 a 100 personas (el más pedido).",
          "4 pisos: 100 a 200 personas.",
          "5 pisos o más: 200 a más de 400 personas.",
        ],
      },
      {
        h2: "¿Qué diseño de stand elegir?",
        p: [
          "Clásico para bautizos y bodas sobrias, arco de globos para fiestas infantiles y baby showers, floral natural para bodas, neón o LED para XV años modernos, o temático si la fiesta tiene un concepto claro.",
        ],
      },
      {
        h2: "¿El pastel está incluido?",
        p: [
          "No. El servicio es el stand: marco, soporte, decoración e iluminación. El pastel lo hace tu pastelero, y el equipo coordina con él el tamaño, la hora de entrega y la recepción en el lugar.",
        ],
      },
    ],
  },
};
