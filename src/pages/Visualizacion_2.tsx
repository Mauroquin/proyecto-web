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
          
          </div>
          
            <br />
            <img
              src="/assets/progreso_iniciativas.png"
              alt="Progreso e iniciativas de conservación"
              className={styles.imagen}
            />
            <br />
            <div className={styles.alinearIzquierda}>
              <h3>Progreso de iniciativas de conservación </h3>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Progreso_iniciativas_conservación")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/amenazas.png"
              alt="Tipos de Amenazas a la Mariposa Monarca"
              className={styles.imagen}
            />
            <br/>
            <div className={styles.alinearIzquierda}>
            <h3>Tipos de Amenazas</h3>
            <br />
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Amenazas")} />
            </div>
          </div>
        </div>
        {/* Segunda columna */}
        <div className={styles.parrafoDerecha}>
          <br/>
          <div style={{ textAlign: "left" }}>
          
          </div>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/área_reproducción.png"
              alt="Reproducción y Alimentación de la Mariposa Monarca"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
            <h3>Mapa de Áreas de Reproducción y Alimentación</h3>
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/área_reproducción_alimentación")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/analicis_correlacion.png"
              alt="Tendencia Poblacional de la Mariposa Monarca"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
            <h3>Análisis de la Relación entre Migración Humana y Población</h3>
            
            </div>
          
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Relacion_migracion_humana")} />
            </div>
          </div>
        </div>
      </main>

      <Pagination totalPages={3} currentPage={2} basePath="Visualizacion" />


      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
