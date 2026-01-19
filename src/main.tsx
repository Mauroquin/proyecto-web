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




// Páginas Atlas
import Atlas from "./pages/Atlas";
import Atlas_2 from "./pages/Atlas_2";
import Atlas_3 from "./pages/Atlas_3";

// Páginas Migración
import Migracion from "./pages/Migracion";
import Migracion_2 from "./pages/Migracion_2";
import Migracion_3 from "./pages/Migracion_3";

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
        <Route path="/migracion_2" element={<Migracion_2 />} />
        <Route path="/migracion_3" element={<Migracion_3 />} />

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


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

