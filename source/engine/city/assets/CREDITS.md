# Pictures the city's materials are made from

Every file here is made from a CC0 (public domain dedication) texture set. The licence was read on each asset's own
page on 2026-11-12. Nothing here is a photograph of a ruin, and nothing was made by an image model.

`source/engine/city/make-textures.sh` is the exact recipe. For each set the 1K JPEG maps were downloaded, and two files
made: `<layer>_c.jpg`, the colour map, resized and re-compressed; and `<layer>_n.jpg`, the OpenGL normal map's red and
green channels with the roughness map in the blue channel. Layers marked "levelled" had their colour map multiplied to
a mean brightness of about 0.78, because the shader uses only their light and dark and takes the colour from the stone
or metal they stand for. Tiles, grass and leaves had their saturation lowered a little.

| Files | What it is | Source | Licence | What was done |
| --- | --- | --- | --- | --- |
| ashlar_c.jpg, ashlar_n.jpg | Dressed stone blocks: walls, quays, buildings | Poly Haven, "Sandstone Blocks 08", https://polyhaven.com/a/sandstone_blocks_08 | CC0 | 1024 px, levelled, packed |
| paving_c.jpg, paving_n.jpg | Stone slabs: roads, courts, the plateau | ambientCG, "Paving Stones 128", https://ambientcg.com/view?id=PavingStones128 | CC0 | 1024 px, levelled, packed |
| tiles_c.jpg, tiles_n.jpg | Clay roof tiles | Poly Haven, "Clay Roof Tiles 02", https://polyhaven.com/a/clay_roof_tiles_02 | CC0 | 1024 px, brightness +12%, saturation -28%, packed |
| plaster_c.jpg, plaster_n.jpg | Plaster: houses, smooth stone, cloth, ivory | Poly Haven, "White Plaster Rough 01", https://polyhaven.com/a/white_plaster_rough_01 | CC0 | 1024 px, levelled, packed |
| metal_c.jpg, metal_n.jpg | Metal sheets: the brass, tin, orichalcum, silver and gold | ambientCG, "Metal Plates 009", https://ambientcg.com/view?id=MetalPlates009 | CC0 | 1024 px, levelled, packed |
| grass_c.jpg, grass_n.jpg | Dry grass: gardens, the slope of the hill | Poly Haven, "Grass Ground", https://polyhaven.com/a/grass_ground | CC0 | 768 px, brightness +8%, saturation -5%, packed |
| sand_c.jpg, sand_n.jpg | Sand and beaten earth: the racecourse, yards, the town's ground | Poly Haven, "Dense Sand", https://polyhaven.com/a/dense_sand | CC0 | 512 px, levelled, packed |
| wood_c.jpg, wood_n.jpg | Planks: ships, doors, fences | Poly Haven, "Brown Planks 09", https://polyhaven.com/a/brown_planks_09 | CC0 | 1024 px, packed |
| rock_c.jpg, rock_n.jpg | Quarried rock: the docks and ship passages | Poly Haven, "Rock Face", https://polyhaven.com/a/rock_face | CC0 | 768 px, levelled, packed |
| leaf_c.jpg, leaf_n.jpg | Dense foliage: the crowns of trees | ambientCG, "Moss 002", https://ambientcg.com/view?id=Moss002 | CC0 | 512 px, saturation -20%, packed |

20 files. Sizes are in the build log and in the final report of the rebuild.
If a file does not load, the layer is drawn in code instead (`textures.js`), so the city appears without any of them.
