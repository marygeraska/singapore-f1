import Gallery from "./Gallery";

export default function UrbanGallery() {
  return (
    <section id="urban-gallery" className="scroll-mt-20 gap-10">
    <Gallery
      query="singapore city night"
      title="Singapore at Night"
      description="Город, свет и архитектура"
      renderItem={(photo) => (
  <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#11141A] transition-all duration-500 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
    <img
      src={photo.urls.small}
      alt={photo.alt_description}
      className="w-full aspect-[4/5] sm:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
    />

     {/* Динамический оверлей (красный оттенок при наведении) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 sm:opacity-60 sm:group-hover:from-red-900/40 transition-colors duration-500" />

    {/* Тонкая красная полоска-индикатор сбоку */}
    <div className="absolute top-0 left-0 w-[2px] h-[30%] sm:h-0 bg-red-600 transition-all duration-500 group-hover:h-full" />

    <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 
                translate-y-0 sm:translate-y-4 opacity-100 sm:opacity-0 
                transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 
                flex items-start gap-2">
  
  {/* Иконка: на мобилке всегда видна, на десктопе пульсирует при наведении */}
  <div className="flex-shrink-0 mt-0.5">
    <div className="w-3 h-3 rounded-full border border-red-600 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
      <span className="text-[8px] text-red-500 group-hover:text-white font-bold leading-none italic">i</span>
    </div>
  </div>

  {/* Текст с line-clamp */}
  <span className="text-[8px] sm:text-[10px] text-white font-bold uppercase tracking-tighter sm:tracking-widest italic leading-tight line-clamp-1 group-hover:line-clamp-none transition-all duration-500">
    {photo.alt_description || "Night Singapore"}
  </span>
</div>


  </div>
)}
    />
    </section>
  );
}

