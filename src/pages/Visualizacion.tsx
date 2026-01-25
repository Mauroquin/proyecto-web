import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";
import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";

import Pagination from "../components/Pagination";


export default function Migracion() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {/* Encabezado */}
      <header className={styles.header}>
        
        <h1>VISUALIZACIÓN DE DATOS</h1>
        <p>
          La visualización de datos de la mariposa monarca permite comprender su migración, amenazas y conservación de forma clara interactiva y accesible.
        </p>
      </header>

      {/* Contenido principal */}
      <main className={styles.main}>
        {/* Primera columna */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
          <div className={styles.alinearIzquierda}>
            <a
              href="/mapa_conservacion_monarca.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/iniciativas_conservacion.png"
                alt="Iniciativas de Conservación de la Mariposa Monarca"
                className={styles.imagen}
              />
            </a>
          </div>
            <br />
            <div className={styles.alinearIzquierda}>
              <h3>Iniciativas de Conservación</h3>
            </div>
            <div className={styles.botonIzquierda}>
            <Boton texto="Explorar" onClick={() => navigate("/Iniciativas_conservacion")} />

          </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/tipos_de_amenazas.png"
              alt="Tipos de Amenazas a la Mariposa Monarca"
              className={styles.imagen}
            />
            <br/>
            <div className={styles.alinearIzquierda}>
            <h3>Tipos de Amenazas</h3>
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton
  texto="Explorar"
  onClick={() => window.open("/mapa_amenazas_monarca.html", "_blank")}
/>
            </div>
          </div>
        </div>
        {/* Segunda columna */}
        <div className={styles.parrafoDerecha}>
        
          <div style={{ textAlign: "left" }}>
          
          </div>
          <div className={styles.imagenContainer}>
            <a
              href="/monarch_migration_map.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/reproducción_alimentación.png"
                alt="Reproducción y Alimentación de la Mariposa Monarca"
                className={styles.imagen}
              />
            </a>
            <br/>
            <div style={{ textAlign: "left" }}>
            <h3>Mapa de Áreas de Reproducción y Alimentación</h3>
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton
  texto="Explorar"
  onClick={() => window.open("/mapa_areas_reproduccion_alimentacion.html", "_blank")}
/>
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/tendencia_poblacional.png"
              alt="Tendencia Poblacional de la Mariposa Monarca"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
            <h3>Tendencia Poblacional de la Mariposa Monarca</h3>
            
            </div>
            
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
            </div>
          </div>
        </div>
      </main>

      <Pagination totalPages={3} currentPage={1} basePath="Visualizacion" />

      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
