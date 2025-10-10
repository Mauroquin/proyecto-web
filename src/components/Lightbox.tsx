// src/components/Lightbox.tsx
import { useEffect } from 'react';
import type { Artwork } from '../types/artwork';

type Props = {
  items: Artwork[];
  currentId: string | null;
  onClose: () => void;
  onNavigate: (nextId: string) => void;
};

export default function Lightbox({ items, currentId, onClose, onNavigate }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!currentId) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const idx = items.findIndex(i => i.id === currentId);
        const next = items[(idx + 1) % items.length];
        onNavigate(next.id);
      }
      if (e.key === 'ArrowLeft') {
        const idx = items.findIndex(i => i.id === currentId);
        const prev = items[(idx - 1 + items.length) % items.length];
        onNavigate(prev.id);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentId, items, onClose, onNavigate]);

  if (!currentId) return null;
  const item = items.find(i => i.id === currentId);
  if (!item) return null;

  const currentImage = item.images[0];

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-start p-4">
          <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.author} • {item.year}</p>
          </div>
          <div className="flex gap-2">
            <button aria-label="Cerrar" onClick={onClose} className="p-2 rounded hover:bg-gray-100">✕</button>
          </div>
        </div>

        <div className="p-4">
          <img src={currentImage} alt={item.title} className="w-full h-[60vh] object-contain" />
          <p className="mt-4 text-sm text-gray-700">{item.description}</p>
        </div>

        <div className="flex justify-between items-center gap-4 p-3 border-t">
          <button onClick={() => {
            const idx = items.findIndex(i => i.id === item.id);
            const prev = items[(idx - 1 + items.length) % items.length];
            onNavigate(prev.id);
          }} className="p-2 rounded hover:bg-gray-100">◀ Anterior</button>

          <div className="text-xs text-gray-500">Usa ← → para navegar • Esc para cerrar</div>

          <button onClick={() => {
            const idx = items.findIndex(i => i.id === item.id);
            const next = items[(idx + 1) % items.length];
            onNavigate(next.id);
          }} className="p-2 rounded hover:bg-gray-100">Siguiente ▶</button>
        </div>
      </div>
    </div>
  );
}

