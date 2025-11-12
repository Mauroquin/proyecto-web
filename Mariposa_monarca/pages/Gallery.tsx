import GalleryItem from "../components/GalleryItem";
import { artworks } from "../data/artworks";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {artworks.map((artwork) => (
        <GalleryItem key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}
