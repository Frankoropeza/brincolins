#!/bin/bash
# BATCH WHISK GENERATOR — BRINCOLINS INFLABLES
# Uso: ./batch-whisk.sh [inflable_numero]
# ej: ./batch-whisk.sh 1 → mini-castillo
# ej: ./batch-whisk.sh 7 → castillo-blanco

set -e

INFLABLES=(
  "mini-castillo"
  "mini-jungla"
  "gusanitos"
  "castillo-princesas"
  "barco-pirata"
  "extremo"
  "castillo-blanco"
)

JPGS=(
  "micro-castillo-baby.jpg"
  "mini-jungla-renta.jpg"
  "gusanitos-renta.jpg"
  "castillo-princesas-real.avif"
  "barco-pirata-renta.jpg"
  "extremo-exterior.jpg"
  "castillo-blanco-decoracion.avif"
)

PROMPTS=(
  "Professional product photography of vibrant inflatable mini bounce castle, outdoor residential backyard setting, manicured green lawn, clear blue sky, bright natural sunlight with soft shadows, vivid primary colors (red, yellow, blue, green), castle towers with flags visible, sharp focus on inflatable details, modern suburban house background blurred, photorealistic 4K quality, commercial real estate photography style, no people, daylight hours"
  
  "High-end product photography of colorful inflatable jungle-themed bounce house, lush green garden setting with mature landscaping, golden hour soft lighting, saturated vibrant jungle colors, tropical foliage background, jungle animals visible on inflatable, professional landscape photography composition, sharp detail on inflatable fabric texture, 4K photorealistic, luxury residential setting, no people, premium commercial photography"
  
  "Professional commercial photography of inflatable caterpillar/gusanitos ride, residential backyard paradise setting, bright sunny day, perfectly manicured lawn, family-friendly outdoor environment, vivid rainbow color segments, detail on each segment, natural daylight photography, sharp focus, blurred residential architecture background, 4K ultra HD, editorial product photography style, photorealistic rendering"
  
  "Premium product photography of princess castle inflatable bounce house, enchanted garden setting, soft diffused daylight, pink, purple, and gold color palette, castle turrets and ramparts detailed, decorative flags and banners visible, luxury residential garden background, professional landscape architecture style composition, 4K photorealistic, sharp textile details on inflatable, no people, commercial photography lighting"
  
  "Professional commercial product photography of pirate ship inflatable bounce castle, tropical backyard resort-style setting, bright sunny weather, blue sky with white clouds, nautical theme details visible (skull, sails, rigging), vibrant primary colors with gold accents, premium landscape photography, natural diffused sunlight, sharp focus on inflatable details, blurred tropical garden background, 4K photorealistic, no people, editorial style"
  
  "High-end commercial product photography of extreme sports themed inflatable obstacle course, modern athletic backyard setting, dramatic natural lighting, bright sunny day, vibrant primary colors with extreme sports graphics visible, obstacles and challenges clearly defined, competitive sports event aesthetic, professional product shot composition, 4K ultra HD photorealistic, sharp textile and structural details, no people, athletic facility background"
  
  "Luxury product photography of white deluxe castle inflatable bounce house, elegant residential garden setting, bright natural daylight, pristine white with gold/silver accent details, castle architecture with multiple towers clearly visible, premium landscape backdrop, soft professional lighting, photorealistic 4K quality, sharp focus on inflatable construction details, sophisticated residential setting, no people, high-end commercial photography style"
)

if [ -z "$1" ]; then
  echo "❌ Uso: ./batch-whisk.sh [1-7]"
  echo ""
  echo "Inflables:"
  for i in "${!INFLABLES[@]}"; do
    echo "  $((i+1)). ${INFLABLES[$i]} ← ${JPGS[$i]}"
  done
  exit 1
fi

IDX=$((${1:-1} - 1))
INFLABLE="${INFLABLES[$IDX]}"
JPG="${JPGS[$IDX]}"
PROMPT="${PROMPTS[$IDX]}"

echo "🎬 BATCH: $INFLABLE (#$((IDX+1))/7)"
echo "📸 JPG: $JPG"
echo "💬 PROMPT COPIADO AL CLIPBOARD"
echo ""
echo "📋 PASOS MANUALES:"
echo "1. Abre Whisk en navegador"
echo "2. Drop JPG en ESCENA: public/img/inflables/$JPG"
echo "3. Pega el prompt (está en clipboard)"
echo "4. Click botón → (naranja)"
echo "5. Espera ~20s y descarga"
echo "6. Corre: ./optimizar-imagen.sh 'descargado.jpg' '$INFLABLE-profesional-cdmx'"
echo ""
echo "$PROMPT" | pbcopy

echo "✅ Prompt copiado. Continuá vos en Whisk..."
