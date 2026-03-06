import { useEffect, useState } from "react";
import { fetchPhotos } from "../api/unsplash";
import { useTheme } from "../ui/Theme";
import Modal from "../ui/Modal/Modal";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import SkeletonCard from "../ui/Card/SkeletonCard";

export default function Gallery({ query, title, description, renderItem}) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { theme } = useTheme();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    async function loadPhotos() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchPhotos(query);
        setPhotos(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadPhotos();
  }, [query]);

  return (
     <section className={`relative py-28 px-6 ${theme.colors.surface} ${theme.colors.textPrimary}`}>
      <div className="absolute bottom-5 left-0 right-0 h-[2px] z-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_30px_rgba(220,38,38,0.8)]" />
      </div>


  <div className="relative z-10 max-w-6xl mx-auto">

    <div className="mb-12">
      <h2 className="text-4xl font-extrabold italic tracking-tighter uppercase mb-4 leading-none">
        {title}
      </h2>

      <p className={`${theme.colors.textSecondary} text-xl md:text-2xl font-light tracking-wide italic`}>
        {description}
      </p>
    </div>

    {loading && (
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
    {/* Генерируем 8 пустых карточек */}
    {[...Array(8)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
)}

    {error && (
      <p className="text-center text-red-500 py-16">
        Failed to load
      </p>
    )}

    {!loading && !error && (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
        {photos.map((photo) => (
          <div key={photo.id}
          onClick={() => setSelectedPhoto(photo)} // Клик открывает модалку
            className="cursor-zoom-in">
            {renderItem
              ? renderItem(photo)
              : (
                <img
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />
              )
            }
          </div>
        ))}
      </div>
    )}
      <AnimatePresence>
  {selectedPhoto && (
    <Modal 
      photo={selectedPhoto} 
      onClose={() => setSelectedPhoto(null)} 
    />
  )}
</AnimatePresence>


  </div>
</section>
  );
}
