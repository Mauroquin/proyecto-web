// src/types/artwork.ts
export interface Artwork {
  id: string;                  // id único
  title: string;               // título de la obra
  author?: string;             // autor / creador
  year?: number;               // año de creación / registro
  description?: string;        // descripción larga
  images: string[];            // rutas a imágenes (pueden ser importadas desde /assets)
  tags?: string[];             // etiquetas (ej. "ilustración", "fotografía")
  location?: string;           // lugar de procedencia o exposición
  dimensions?: string;         // dimensiones físicas si aplica
  license?: string;            // tipo de licencia (ej. CC BY)
}
