import { useParams, Link } from "react-router-dom";
import { artworks } from "../data/artworks";

export default function ArtworkDetail() {
  const { id } = useParams<{ id: string }>();
  const artwork = artworks.find((a) => a.id === Number(id));

  if (!artwork) {
    return <p className="p-6 text-red-500">Obra no encontrada</p>;
  }

  return (
    <div className="p-6">
      <img
        src={artwork.image}
        alt={artwork.title}
        className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{artwork.title}</h1>
      <p className="mt-2 text-gray-700">{artwork.description}</p>

      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Volver a la galería
      </Link>
    </div>
  );
}
