import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";
import Boton from "../components/Boton";

import Pagination from "../components/Pagination";


export default function Atlas() {
  

  return (
    <>
      <Navbar />

      {/* Encabezado */}
      <header className={styles.header}>
        <h1>ATLAS DE LA MARIPOSA MONARCA</h1>
        <p>
          Descubre la belleza y la ciencia detrás de la mariposa monarca a través de nuestros atlas.
        </p>
      </header>

      {/* Contenido principal */}
      <main className={styles.main}>
        {/* Primera columna */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            
            <img
              src="/assets/el_arte.png"
              alt="Ciclo de Vida de la Mariposa Monarca"
              className={styles.imagen}
            />
            <br />
            <div style={{ textAlign: "left" }}>
              <h3>En el arte</h3>
              <p>
                Mariposa monarca,arte, actualidad, comunidades, expresión artística, resistencia, significados simbolicos, cultura viva.
              </p>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
            </div>
          </div>
        </div>
        {/* Segunda columna */}
        <div className={styles.parrafoDerecha}>
          
          
          <div className={styles.imagenContainer}>
            <img
              src="/assets/el_fuego.png"
              alt="El fuego de la memoria en las alas de la mariposa"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
              <h3>El fuego de la memoria en las alas de la mariposa</h3>
              <p>
                <br/>
                Mariposa, fuego, movimiento, imagen, deseo y fragilidad, y conceptos que reflejan la belleza efimera.
              </p>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
            </div>
          </div>
          <br/>
          
          </div>
        
      </main>

      <Pagination totalPages={3} currentPage={3} basePath="Atlas" />


      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}