export const darkTheme = {
  grid: {
    container: "absolute inset-[-100%] z-0 opacity-30 pointer-events-none",
    styles: { 
      transform: 'rotate(45deg)',
      backgroundImage: `linear-gradient( #ffffff 1px, transparent 1px), 
                        linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
      mixBlendMode: 'screen'

    }
  },
  colors: {
    background: "bg-[#0B0E13]",
    surface: "bg-[#11141A99]",
    surfaceHover: "hover:bg-[#151A22]",
    border: "border-zinc-800",
    textPrimary: "text-white",
    textSecondary: "text-slate-400",
    accent: "text-red-500",
    accentBg: "bg-red-600",
    accentHover: "hover:bg-red-700",
  },
  button: {
    base: `
    px-6 py-3 rounded-xl font-extrabold
    transition-all duration-300 italic tracking-tighter uppercase
    border-2 border-red-600 bg-transparent text-white
    relative overflow-hidden inline-flex items-center justify-center 
  `,
  hover: `
    hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] 
    hover:border-red-500 hover:-translate-y-0.5 
    active:scale-95 md:active:scale-100 hover:skew-x-[-2deg]
  `,
  disabled: "opacity-50 cursor-not-allowed",
  },
  card: `
    bg-[#1A1E26]
    border border-zinc-800
    rounded-2xl
    transition-all duration-300
    hover:border-red-500/40
  `,
};

