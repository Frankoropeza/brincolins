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

export const collections = { blog };
