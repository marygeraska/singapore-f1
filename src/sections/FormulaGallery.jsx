
import Gallery from "./Gallery";
import FormulaCard from "./FormulaCard";
import { useTheme } from "../ui/Theme";

export default function FormulaGallery() {
  return (
    <Gallery
      query="formula 1 singapore night grand prix"
      title="Formula 1 · Singapore GP"
      description="Ночная гонка в сердце города — скорость, свет и урбанистика."
      renderItem={(photo) => (
        <FormulaCard key={photo.id} photo={photo} />
      )}
    />
  );
}
