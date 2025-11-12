import Navbar from "../components/Navbar";
import styles from "../styles/Migracion.module.css";
import Boton from "../components/Boton";

import Pagination from "../components/Pagination";



  

export default function Migracion() {
  
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
          
            <br />
            <img
              src="/assets/mapa_migracion.png"
              alt="mapa de migración de la mariposa monarca"
              className={styles.imagen}
            />
            <br />
            <div className={styles.alinearIzquierda}>
              <h3>Mapa de Migración de la Mariposa Monarca</h3>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
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
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
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
          </div>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/migración_Mexico_EEUU.png"
              alt="Migración de Mariposas Monarca y Migración Humana México-EE.UU"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
            <h3>Migración de Mariposas Monarca y Migración Humana México-EE.UU</h3>
            
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
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
            <br/>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
            </div>
          </div>
        </div>
      </main>

      <Pagination totalPages={3} currentPage={3} basePath="Migracion" />

      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
