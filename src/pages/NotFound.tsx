// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="max-w-[var(--page-max-width)] mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold">404 — No encontrado</h1>
      <p className="mt-3 text-gray-600">La página que buscas no existe.</p>
      <div className="mt-4">
        <Link to="/" className="text-monarch-500 hover:underline">Volver a la galería</Link>
      </div>
    </main>
  );
}
