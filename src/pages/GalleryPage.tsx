// src/pages/GalleryPage.tsx
import { useState, useMemo } from 'react';
import { artworks as data } from '../data/artworks';
import type { Artwork } from '../types/artwork';
import GalleryGrid from '../components/GalleryGrid';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const tags = Array.from(new Set(data.flatMap(d => d.tags ?? [])));

  const filtered = useMemo(() => {
    return data.filter((a) => {
      const matchesQuery = (a.title + ' ' + (a.description ?? '') + ' ' + (a.author ?? '')).toLowerCase().includes(query.toLowerCase());
      const matchesTag = tag ? (a.tags ?? []).includes(tag) : true;
      return matchesQuery && matchesTag;
    });
  }, [query, tag]);

  function openArtwork(id: string) {
    setOpenId(id);
  }

  function navigateTo(id: string) {
    setOpenId(id);
  }

  return (
    <main>
      <section className="bg-monarch-50 py-12">
        <div className="max-w-[var(--page-max-width)] mx-auto px-4">
          <h2 className="text-3xl font-bold">Galería Virtual — Mariposa Monarca</h2>
          <p className="mt-2 text-gray-700">Colección digitalizada por la Facultad de Bellas Artes — UABC Tijuana</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por título, autor o descripción" className="px-3 py-2 border rounded w-full sm:w-72" />
            <div className="flex gap-2 flex-wrap">
              <button onClick={() => setTag(null)} className={`px-3 py-2 rounded ${tag === null ? 'ring-2 ring-monarch-500' : 'bg-white'}`}>Todos</button>
              {tags.map(t => (
                <button key={t} onClick={() => setTag(t)} className={`px-3 py-2 rounded ${tag === t ? 'ring-2 ring-monarch-500' : 'bg-white'}`}>{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GalleryGrid items={filtered as Artwork[]} onOpen={openArtwork} />

      <Lightbox items={data} currentId={openId} onClose={() => setOpenId(null)} onNavigate={navigateTo} />
    </main>
  );
}
