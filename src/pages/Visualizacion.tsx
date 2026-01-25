import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";
import Boton from "../components/Boton";

import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";



  

export default function Migracion() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* Encabezado */}
      <header className={styles.header}>
        
        <h1>MIGRACIÓN</h1>
        <p>
          Mariposas y humanos migran en busca de mejores condiciones, mostrando resilencia y conexión con el territorio.
        </p>
      </header>

      {/* Contenido principal */}
      <main className={styles.main}>
        {/* Primera columna */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
          <div className={styles.alinearIzquierda}>
          <h2>Descubrir caminos compartidos</h2>
          </div>
          <a
            href="/monarch_migration_map.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            <img
              src="/assets/mapa_migracion.png"
              alt="mapa de migración de la mariposa monarca"
              className={styles.imagen}
            />
            </a>
            <br />
            <div className={styles.alinearIzquierda}>
              <br />
              <h3>Mapa de Migración de la Mariposa Monarca</h3>
            </div>
            <br />
            
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Mapa_migracion")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/migración_ecosistemas.png"
              alt="Migración y Ecosistemas"
              className={styles.imagen}
            />
            <br/>
            <div className={styles.alinearIzquierda}>
            <h3>Migración y Ecosistemas</h3>
            <br />
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Migracion_ecosistemas")} />
            </div>
          </div>
        </div>
        {/* Segunda columna */}
        <div className={styles.parrafoDerecha}>
          <br/>
        
          <div style={{ textAlign: "left" }}>
          <p>
            La migración une a la mariposas y humanos en una travesía de adaptación, esperanza y vinculo con la tierra.
          </p>
          <br/>
          <br />

          </div>
          <div className={styles.imagenContainer}>

            <a
            href="/mapa_migraciones_comparativo.html"
            target="_blank"
            rel="noopener noreferrer"
          >
 
            <img
              src="/assets/migración_Mexico_EEUU.png"
              alt="Migración de Mariposas Monarca y Migración Humana México-EE.UU"
              className={styles.imagen}
            />
            </a>


            <br/>
            <div style={{ textAlign: "left" }}>
            <h3>Migración de Mariposas Monarca y Migración Humana México-EE.UU</h3>
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Mapa_comparativo")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/interrelaciones.png"
              alt="Interrelaciones entre Migración México-EE.UU. y la Conservación de la Mariposa Monarca"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
            <h3>Interrelaciones entre Migración México-EE.UU. y la Conservación de la Mariposa Monarca</h3>
            
            </div>
          
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Interrelacion_conservacion")} />
              
            </div>
          </div>
        </div>
      </main>

      <Pagination totalPages={3} currentPage={1} basePath="Migracion" />


      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
