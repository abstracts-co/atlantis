#!/bin/sh
# How the pictures in assets/ were made from the CC0 originals (see assets/CREDITS.md). Not part of the build.
#   sh source/engine/city/make-textures.sh <folder with the downloaded 1K files> <output folder>
# Poly Haven sets are <name>_Diffuse.jpg, <name>_nor_gl.jpg, <name>_Rough.jpg; ambientCG sets are unzipped to
# <Id>/<Id>_1K-JPG_Color.jpg, _NormalGL.jpg, _Roughness.jpg. Needs ImageMagick.
# Each layer becomes two JPEGs: <layer>_c.jpg, the colour; <layer>_n.jpg, the normal in red and green (OpenGL sense) with
# the roughness in blue. Layers that take their colour from the stone or metal they stand for are brought to the same
# mean brightness (0.78), because the shader uses only their light and dark. Sizes are chosen to keep the whole set small.
set -e
RAW="$1"; OUT="$2"; mkdir -p "$OUT"
one() { # layer colour normal rough size quality level(0 = leave) extra-colour-args
  layer="$1"; c="$2"; n="$3"; r="$4"; size="$5"; q="$6"; level="$7"; shift 7
  if [ "$level" != "0" ]; then
    mean=$(convert "$c" -colorspace Gray -format "%[fx:mean]" info:)
    k=$(echo "$level $mean" | awk '{ k = $1 / $2; if (k > 2.2) k = 2.2; print k }')
    convert "$c" -evaluate multiply "$k" "$@" -resize "${size}x${size}" -sampling-factor 4:2:0 -quality "$q" -strip "$OUT/${layer}_c.jpg"
  else
    convert "$c" "$@" -resize "${size}x${size}" -sampling-factor 4:2:0 -quality "$q" -strip "$OUT/${layer}_c.jpg"
  fi
  convert "$n" -resize "${size}x${size}" \( "$r" -resize "${size}x${size}" -colorspace Gray -colorspace sRGB \) -compose CopyBlue -composite -sampling-factor 4:4:4 -quality "$q" -strip "$OUT/${layer}_n.jpg"
}
ph() { echo "$RAW/$1_Diffuse.jpg $RAW/$1_nor_gl.jpg $RAW/$1_Rough.jpg"; }
acg() { echo "$RAW/$1/$1_1K-JPG_Color.jpg $RAW/$1/$1_1K-JPG_NormalGL.jpg $RAW/$1/$1_1K-JPG_Roughness.jpg"; }
one ashlar  $(ph sandstone_blocks_08)     1024 86 0.78
one paving  $(acg PavingStones128)        1024 80 0.78 +level 34%,100%
one tiles   $(ph clay_roof_tiles_02)      1024 68 0 -modulate 138,58,100
one plaster $(ph white_plaster_rough_01)  1024 72 0.78
one metal   $(acg MetalPlates009)         1024 82 0.78
one grass   $(ph grass_ground)            768  70 0 -modulate 108,95,100
one sand    $(ph dense_sand)              512  70 0.74
one wood    $(ph brown_planks_09)         1024 68 0
one rock    $(ph rock_face)               768  70 0.72
one leaf    $(acg Moss002)                512  72 0 -modulate 100,80,100
