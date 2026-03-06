import { useState } from "react";
import { Card } from "../ui/Card";
import { getLikedPhotos, saveLikedPhotos } from "../utils/likes";
import { motion } from "framer-motion";
import { useTheme } from "../ui/Theme"; 

export default function FormulaCard({ photo }) {
  const { theme } = useTheme();
  // Инициализируем состояние сразу из localStorage
  const [liked, setLiked] = useState(() => {
    const likedPhotos = getLikedPhotos() || [];
    return likedPhotos.includes(photo?.id);
  });

  const toggleLike = (e) => { 
    e.stopPropagation();
    const likedPhotos = getLikedPhotos();
    const isCurrentlyLiked = likedPhotos.includes(photo.id);
    
    let updatedLikes;
    if (!isCurrentlyLiked) {
      updatedLikes = [...likedPhotos, photo.id];
    } else {
      updatedLikes = likedPhotos.filter(id => id !== photo.id);
    }

    saveLikedPhotos(updatedLikes);
    setLiked(!isCurrentlyLiked);
  };

  return (
    <Card>
      <div className="p-3 sm:p-4 group">
        {/* Фото и Номер */}
        <div className="relative overflow-hidden rounded-xl bg-zinc-900">
          <img
            src={photo.urls.small}
            alt={photo.alt_description}
            className="w-full aspect-[4/3] object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
      
        </div>

        {/* Текст и Лайк */}
        <div className="flex flex-col gap-3 mt-4">
          <div className="min-h-[2.5rem]">
            <span className="text-[10px] sm:text-[11px] text-white font-bold uppercase tracking-tight italic leading-tight line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
              {photo.alt_description || "F1 Singapore Night Session"}
            </span>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-zinc-800">
            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
              Singapore GP
            </span>

            <motion.button
              onClick={toggleLike}
              animate={{ scale: liked ? 1.2 : 1 }}
              whileTap={{ scale: 0.8 }}
              className="relative cursor-pointer p-1"
            >
              {liked && <div className="absolute inset-0 bg-red-600 blur-md opacity-40" />}
              <svg 
                xmlns="http://www.w3.org" 
                viewBox="0 0 24 24" 
                fill={liked ? "#dc2626" : "none"} 
                stroke={liked ? "#dc2626" : "currentColor"} 
                className="w-5 h-5 transition-colors duration-300 relative z-10"
                strokeWidth="2"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </Card>
  );
}