#!/bin/bash

input_dir="../public/assets/products"
output_dir="../public/assets/products/images"

mkdir -p "$output_dir"

for file in "$input_dir"/*.png; do
  pngquant --quality=60-80 --output "$output_dir/$(basename "$file")" "$file"
done

echo "Compression done. Output saved to $output_dir"

