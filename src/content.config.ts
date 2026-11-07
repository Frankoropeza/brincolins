import { defineCollection } from 'astro:content';
// Astro 6 deprecó reexportar `z` desde 'astro:content' (31 avisos de
// astro check). Se importa zod directamente: mismo API, sin deprecación.
import { z } from 'zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),                         // <title> / meta title
    h1: z.string().optional(),                 // encabezado visible (si difiere del title)
    description: z.string(),                    // meta description
    excerpt: z.string().optional(),            // resumen para hero y tarjetas de blog
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    category: z.string(),
    author: z.string().default('Equipo BRINCOLINS'),
    readTime: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    galleryImages: z.array(z.string()).optional(),
    intro: z.array(z.string()).optional(),     // párrafos de entrada (columna derecha del hero)
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    /** Slug de la página de servicio de mesas de dulces que apoya el post
        (PAGINAS de src/data/mesasDeDulces.ts). Enlaza post ↔ servicio. */
    servicio: z.string().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    /** Pasos para schema HowTo (contenido instructivo) */
    howto: z.object({
      name: z.string(),                        // ej. "Cómo rentar un inflable paso a paso"
      totalTime: z.string().optional(),        // ISO 8601, ej. "PT10M"
      steps: z.array(z.object({
        name: z.string(),
        text: z.string(),
      })),
    }).optional(),
  }),
});

/* Guía local por zona (/cobertura/<slug>/). Un archivo por zona para que el
   contenido local crezca sin inflar coverage.ts. El cuerpo Markdown se
   renderiza como sección "Guía local"; vecinas/guias alimentan el enlazado
   interno zona↔zona y zona→blog; faqs se suman a las de coverage.ts. */
const zonas = defineCollection({
  loader: glob({ base: './src/content/zonas', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),                        // H2 de la sección de guía local
    vecinas: z.array(z.string()).default([]),  // slugs de COVERAGE_ZONES colindantes
    guias: z.array(z.string()).default([]),    // slugs de posts del blog relevantes
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
  }).strict(),
});

export const collections = { blog, zonas };
