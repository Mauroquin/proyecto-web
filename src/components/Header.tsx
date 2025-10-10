// src/components/Header.tsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-[var(--page-max-width)] mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-monarch-100">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 12h16" stroke="#000"/></svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Facultad de Bellas Artes — Galería Monarca</h1>
            <p className="text-xs text-gray-500">Universidad Autónoma de Baja California, Tijuana</p>
          </div>
        </Link>

        <nav>
          <ul className="flex gap-4 items-center">
            <li><Link to="/" className="text-sm hover:underline">Galería</Link></li>
            <li><a href="#about" className="text-sm hover:underline">Sobre el proyecto</a></li>
            <li><a href="#contact" className="text-sm hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
