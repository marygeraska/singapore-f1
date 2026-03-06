import { useState } from "react";
import UrbanGallery from "../sections/UrbanGallery";
import FormulaGallery from "../sections/FormulaGallery";

export default function Home() {
  const [mode, setMode] = useState("urban");

  return (
    <main>
      {/* переключатель */}
      <div className="flex justify-center gap-4 my-6">
        <button
          onClick={() => setMode("urban")}
          className={`px-4 py-2 rounded ${
            mode === "urban"
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          Urban
        </button>

        <button
          onClick={() => setMode("formula")}
          className={`px-4 py-2 rounded ${
            mode === "formula"
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          Formula 1
        </button>
      </div>

      {/* условный рендер */}
      {mode === "urban" && <UrbanGallery />}
      {mode === "formula" && <FormulaGallery />}
    </main>
  );
}
