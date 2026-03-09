import { useTheme } from "../ui/Theme";

export default function Footer() {
  const { theme } = useTheme();

return (
    <footer className={theme.footer.container}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-white font-black italic text-xl tracking-tighter">
            SINGAPORE <span className="text-red-600">GP</span>
          </span>
          <p className={theme.footer.text}>Official Fan Showcase</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className={theme.footer.text}>
            © {new Date().getFullYear()} Developed by marygeraska
          </p>
          <p className="text-[10px] text-slate-700 mt-2">
            Data provided by Unsplash API. Not an official F1 product.
          </p>
        </div>
      </div>
    </footer>
  );
} 