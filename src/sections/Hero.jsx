import { useTheme } from "../ui/Theme";

export default function Hero() {
  const { theme } = useTheme();
  return (
    // Добавили min-h-screen, чтобы секция была во весь экран и эффекты влезли
    <section className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden py-20">

  
      
      {/* 1. НЕОНОВОЕ ПЯТНО (увеличили прозрачность до 20% для видимости) */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-red-600/20 blur-[80px] md:blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* 2. СВЕТЯЩАЯСЯ ЛИНИЯ (подняли чуть выше от края и усилили тень) */}
      <div className="absolute bottom-10 left-0 right-0 h-[2px] z-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_30px_rgba(220,38,38,0.8)]" />
      </div>

      {/* 3. КОНТЕНТ (явно задали z-20, чтобы он был поверх эффектов) */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">
        <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-4 md:mb-6 leading-[0.9] select-none">
          Singapore <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            Grand Prix
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 font-light tracking-wide italic mb-12">
          Night race in the heart of the city
        </p>

        <div className="z-20">
      <a href="#urban-gallery" 
         className={`${theme.button.base} ${theme.button.hover} inline-flex items-center justify-center`}> 
        <span className="relative z-10 mr-1">Learn</span>
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
          more
        </span>
      </a>
    </div>
      </div>


    </section>
  );
}
