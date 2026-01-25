import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // Landing con Hero + Bienvenida + Migración
import CicloDeVida from "./pages/CicloDeVida";
import DependenciaEcosomatica from "./pages/DependenciaEcosomatica"; 
import CorredoresMigratorios from "./pages/CorredoresMigratorios";
import VozHumana from "./pages/VozHumana";
import PanelContraste from "./pages/PanelContraste";
import Naturaleza from "./pages/Naturaleza";
import Tradicion from "./pages/Tradicion";
import Lugar from "./pages/Lugar";
import Arte from "./pages/Arte";
import ScrollToTop from "./components/ScrollToTop";
import Fuego from "./pages/Fuego";
import Mapa_migracion from "./pages/Mapa_migracion";
import Mapa_comparativo from "./pages/Mapa_comparativo";
import Migracion_ecosistemas from "./pages/Migracion_ecosistemas";
import Interrelacion_conservacion from "./pages/Interrelacion_conservacion";
import Iniciativas_conservacion from "./pages/Iniciativas_conservacion";




// Páginas Atlas
import Atlas from "./pages/Atlas";
import Atlas_2 from "./pages/Atlas_2";
import Atlas_3 from "./pages/Atlas_3";

// Páginas Migración
import Migracion from "./pages/Migracion";



// Páginas Visualización
import Visualizacion from "./pages/Visualizacion";
import Visualizacion_2 from "./pages/Visualizacion_2";
import Visualizacion_3 from "./pages/Visualizacion_3";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<App />} />

        {/* Sección Atlas */}
        <Route path="/atlas" element={<Atlas />} />
        <Route path="/atlas_2" element={<Atlas_2 />} />
        <Route path="/atlas_3" element={<Atlas_3 />} />

        {/* Sección Migración */}
        <Route path="/migracion" element={<Migracion />} />
        

        {/* Sección Visualización */}
        <Route path="/visualizacion" element={<Visualizacion />} />
        <Route path="/visualizacion_2" element={<Visualizacion_2 />} />
        <Route path="/visualizacion_3" element={<Visualizacion_3 />} />

        <Route path="/ciclo-de-vida" element={<CicloDeVida />} />
        <Route path="/dependencia-ecosomatica" element={<DependenciaEcosomatica />} />
        <Route path="/corredores-migratorios" element={<CorredoresMigratorios />} />
        <Route path="/voz-humana" element={<VozHumana />} />
        <Route path="/panel-contraste" element={<PanelContraste />} />
        <Route path="/naturaleza" element={<Naturaleza />} />
        <Route path="/Tradicion" element={<Tradicion />} />
        <Route path="/lugar" element={<Lugar />} />
        <Route path="/arte" element={<Arte />} />
        <Route path="/fuego" element={<Fuego />} />
        <Route path="/Mapa_migracion" element={<Mapa_migracion />} />
        <Route path="/Mapa_comparativo" element={<Mapa_comparativo />} />
        <Route path="/Migracion_ecosistemas" element={<Migracion_ecosistemas />} />
        <Route path="/Interrelacion_conservacion" element={<Interrelacion_conservacion />} />
        <Route path="/Iniciativas_conservacion" element={<Iniciativas_conservacion />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

