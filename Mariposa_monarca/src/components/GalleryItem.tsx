import { Link } from "react-router-dom";

interface Artwork {
  id: number;
  title: string;
  image: string;
}

interface Props {
  artwork: Artwork;
}

export default function GalleryItem({ artwork }: Props) {
  return (
    <div className="gallery-item">
      <Link to={`/obra/${artwork.id}`}>
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-80 transition"
        />
      </Link>

      <h3 className="mt-2 text-center text-lg font-semibold">
        <Link
          to={`/obra/${artwork.id}`}
          className="hover:underline text-blue-600"
        >
          {artwork.title}
        </Link>
      </h3>
    </div>
  );
}
