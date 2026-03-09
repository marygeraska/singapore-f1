import Hero from "./sections/Hero";
import UrbanGallery from "./sections/UrbanGallery";
import FormulaGallery from "./sections/FormulaGallery";
import { useTheme } from "./ui/Theme";

export default function App() {
  const { theme } = useTheme();
  
  return (
    // Обертка с фоном всей страницы
    <div className={`relative min-h-screen ${theme.colors.background}`}>
      
      <div 
        className={`${theme.grid.container.replace('absolute', 'fixed')} f1-grid`} 
        style={theme.grid.styles} 
      />  
      

      {/* КОНТЕНТ: z-10 поднимает его над сеткой */}
      <div className="relative z-10">
        <Hero />
        <UrbanGallery />
        <FormulaGallery />
        <Footer />
      </div>
      
    </div>
  );
}
