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
              src="/assets/impacto_cultivo.png"
              alt="Impacto de los cultivos"
              className={styles.imagen}
            />
            <br />
            <div className={styles.alinearIzquierda}>
              <h3>Impacto del Cultivo de aguacate  en las Mariposas Monarca en Michoacán</h3>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Impacto_cultivo_aguacate")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/relación_cultivo_deforestación.png"
              alt="Tipos de Amenazas a la Mariposa Monarca"
              className={styles.imagen}
            />
            <br/>
            <div className={styles.alinearIzquierda}>
            <h3>Relación entre Cultivo de Aguacate, Deforestación y Población</h3>
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Relación_cultivo_aguacate_deforestación")} />
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
              src="/assets/deforestación_población.png"
              alt="Deforestación y población de mariposas"
              className={styles.imagen}
            />
            <br/>
            <br />
            <div style={{ textAlign: "left" }}>
            <h3>La deforestación y la población de mariposas monarca en Michoacán</h3>
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Deforestación_población_mariposa_monarca")} />
            </div>
          </div>
          
        </div>
      </main>

      <Pagination totalPages={3} currentPage={3} basePath="Visualizacion" />

      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
