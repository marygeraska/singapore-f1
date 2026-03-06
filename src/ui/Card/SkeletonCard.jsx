import { useTheme } from "../Theme";

export default function SkeletonCard() {
  const { theme } = useTheme();

  return (
    // Используем стили карточки из темы и добавляем пульсацию
    <div className={`${theme.card} p-3 sm:p-4 animate-pulse`}>
      {/* Место для картинки */}
      <div className="w-full aspect-[4/3] bg-zinc-800/50 rounded-xl mb-4" />
      
      {/* Место для текстовых строк */}
      <div className="space-y-3">
        <div className="h-2 bg-zinc-800 rounded w-full" />
        <div className="h-2 bg-zinc-800 rounded w-2/3" />
      </div>

      {/* Место для футера (лайк и инфо) */}
      <div className="flex justify-between items-center mt-6 pt-3 border-t border-zinc-800/40">
        <div className="h-2 bg-zinc-800 rounded w-16" />
        <div className="w-6 h-6 bg-zinc-800 rounded-full" />
      </div>
    </div>
  );
}
