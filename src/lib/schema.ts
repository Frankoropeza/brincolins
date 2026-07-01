/**
 * src/lib/schema.ts
 * Builders centralizados de JSON-LD para BRINCOLINS.
 *
 * Reglas:
 *  - Sin datos inventados: aggregateRating solo si hay fuente verificable.
 *  - Sin reviews hardcodeadas: el schema Product usa solo Offer.
 *  - Cada función devuelve un objeto listo para JSON.stringify().
 */

import { SITE_URL, SITE_NAME, PHONE_TEL, EMAIL } from "@/data/site";

const SITE = SITE_URL;
const LOGO = `${SITE}/img/brincolins-logo.png`;
const OG   = `${SITE}/img/og-brincolins.jpg`;

// ── Types ─────────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name:  string;
  href?: string;
}

export interface FaqItem {
  question: string;
  answer:   string;
}

export interface ProductSchemaInput {
  name:        string;
  description: string;
  image:       string;          // ruta relativa, ej. "/img/inflables/extremo.avif"
  price:       string | number; // acepta "$3,000", "3000" o 3000
  canonical:   string;
}

// ── Helpers internos ──────────────────────────────────────────────────────────

function normalizePrice(price: string | number): string {
  if (typeof price === "number") return String(price);
  return price.replace(/[^0-9]/g, "");
}

// ── Schema builders ───────────────────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#org`,
    "name": SITE_NAME,
    "url": SITE,
    "logo": { "@type": "ImageObject", "url": LOGO },
    "description": "Renta de inflables para fiestas infantiles en CDMX y Estado de México. Más de 20 años de experiencia. Entrega, instalación y seguro incluidos.",
    "telephone": PHONE_TEL,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "addressCountry": "MX",
    },
    "areaServed": [
      { "@type": "State", "name": "Ciudad de México" },
      { "@type": "State", "name": "Estado de México" },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE_TEL,
      "contactType": "sales",
      "areaServed": "MX",
      "availableLanguage": "Spanish",
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventVenue"],
    "@id": `${SITE}/#negocio`,
    "name": `${SITE_NAME} — Renta de Inflables CDMX`,
    "url": SITE,
    "logo": LOGO,
    "image": OG,
    "description": "Empresa líder en renta de inflables y brincolines para fiestas infantiles en CDMX y Estado de México. Más de 20 años de experiencia, entrega e instalación incluida.",
    "telephone": PHONE_TEL,
    "email": EMAIL,
    "priceRange": "$",
    "currenciesAccepted": "MXN",
    "paymentAccepted": "Transferencia, Tarjeta, Efectivo",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00",
      },
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.4326,
      "longitude": -99.1332,
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "addressCountry": "MX",
    },
    "areaServed": [
      "Ciudad de México",
      "Estado de México",
      "Zona Metropolitana del Valle de México",
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    "name": SITE_NAME,
    "url": SITE,
    "publisher": { "@id": `${SITE}/#org` },
  };
}

export function buildBreadcrumbSchema(pathSegments: string[], slugNames: Record<string, string>) {
  if (pathSegments.length === 0) return null;

  const items: Array<Record<string, unknown>> = [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE}/` },
  ];

  let currentPath = "";
  pathSegments.forEach((seg, i) => {
    currentPath += "/" + seg;
    const isLast = i === pathSegments.length - 1;
    const name   = slugNames[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
    const entry: Record<string, unknown> = {
      "@type":    "ListItem",
      "position": i + 2,
      "name":     name,
    };
    if (!isLast) entry["item"] = SITE + currentPath + "/";
    items.push(entry);
  });

  return {
    "@context":       "https://schema.org",
    "@type":          "BreadcrumbList",
    "itemListElement": items,
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(f => ({
      "@type":          "Question",
      "name":           f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };
}

/**
 * Product schema limpio: sin aggregateRating ni reviews inventadas.
 * Solo Organization + Offer — verificable y sin riesgo de penalización.
 */
export function buildProductSchema(input: ProductSchemaInput) {
  const priceStr = normalizePrice(input.price);
  return {
    "@context": "https://schema.org",
    "@type":    "Product",
    "name":        input.name,
    "description": input.description,
    "image":       `${SITE}${input.image}`,
    "brand":       { "@type": "Brand", "name": SITE_NAME },
    "category":    "Renta de Inflables",
    "manufacturer": { "@id": `${SITE}/#org` },
    "offers": {
      "@type":        "Offer",
      "url":          input.canonical,
      "priceCurrency": "MXN",
      "price":        priceStr,
      "availability": "https://schema.org/InStock",
      "seller":       { "@id": `${SITE}/#org` },
      "areaServed":   "MX",
    },
  };
}
