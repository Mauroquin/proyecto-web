import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // Landing con Hero + Bienvenida + Migración
import Atlas from "./pages/Atlas";
import Migracion from "./pages/Migracion";
import Visualizacion from "./pages/Visualizacion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/atlas" element={<Atlas />} />
        <Route path="/migracion" element={<Migracion />} />
        <Route path="/visualizacion" element={<Visualizacion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
