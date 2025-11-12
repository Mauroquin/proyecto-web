// src/components/GalleryGrid.tsx
import type { Artwork } from '../types/artwork';
import GalleryItem from './GalleryItem';

type Props = {
  items: Artwork[];
  onOpen: (id: string) => void;
};

export default function GalleryGrid({ items, onOpen }: Props) {
  return (
    <section aria-label="Galería de la mariposa monarca" className="max-w-[var(--page-max-width)] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(a => (
          <GalleryItem key={a.id} artwork={a} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}
