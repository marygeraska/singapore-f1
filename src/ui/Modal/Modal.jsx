
import { useEffect } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function Modal({ photo, onClose }) {

  useEffect(() => {
    // Блокируем скролл при открытии
    document.body.style.overflow = "hidden";
    
    // Функция обработки клавиши
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      onClose(); // Вызываем закрытие, если нажат Esc
    }
  };

  // 3. Вешаем слушатель на всё окно
  window.addEventListener("keydown", handleEsc);

  // 4. Чистим за собой (важно!)
  return () => {
    document.body.style.overflow = "unset";
    window.removeEventListener("keydown", handleEsc); // Убираем слушатель, чтобы не лагало
  };
}, [onClose]); // Добавляем onClose в зависимости для корректности

  if (!photo) return null;

  return createPortal(
    
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        {/* Задний фон (Blur как в Hero) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Контент модалки */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative max-w-5xl w-full bg-[#11141A] border border-zinc-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Кнопка закрытия (X) */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-4 z-50 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
          >
            ✕
          </button>

          <div className="flex flex-col md:flex-row h-full">
            {/* Левая часть: Фото */}
            <div className="md:w-2/3 bg-black flex items-center justify-center">
              <img 
                src={photo.urls.regular} // Берем фото в высоком качестве
                alt={photo.alt_description}
                className="max-h-[70vh] md:max-h-[85vh] object-contain"
              />
            </div>

            {/* Правая часть: Данные (Telemetry) */}
            <div className="md:w-1/3 p-6 flex flex-col justify-between border-l border-zinc-800">
              <div>
                <span className="text-[10px] text-red-500 font-black uppercase tracking-widest italic mb-2 block">
                  Data Log // SIN GP
                </span>
                <h3 className="text-xl font-bold text-white uppercase italic tracking-tighter leading-tight mb-4">
                  {photo.alt_description || "Night Race Session"}
                </h3>
                <p className="text-slate-400 text-sm font-light italic">
                  Shot by {photo.user.name}
                </p>
              </div>

              {/* Фейковая телеметрия для стиля */}
              <div className="mt-10 space-y-4 pt-6 border-t border-zinc-800">
                <div className="flex justify-between text-[10px] font-mono uppercase">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-white">{photo.user.location || "Singapore"}</span>
                </div>
                <div className="flex justify-between text-[10px] font-mono uppercase">
                  <span className="text-zinc-500">Likes</span>
                  <span className="text-red-500">{photo.likes} Units</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>,
    document.body
  );
}

