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
        <h1>⬅ ATLAS DE LA MARIPOSA MONARCA</h1>
        <p>
          Descubre la belleza y la ciencia detrás de la mariposa monarca a través de nuestros atlas.
        </p>
      </header>

      {/* Contenido principal */}
      <main className={styles.main}>
        {/* Primera columna */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>Descubre los Paneles de la Mariposa Monarca</h2>

            <br />
            <img
              src="/assets/ciclo_de_vida.png"
              alt="Ciclo de Vida de la Mariposa Monarca"
              className={styles.imagen}
            />
            <br />
            <div style={{ textAlign: "left" }}>
              <h3>Ciclo de la Vida</h3>
              <p>
                Mariposa monarca: ciclo de vida, huevo, adulto, migración, hibernación, reproducción, desarrollo, plantas, hospederas.
              </p>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/ecosomatica.png"
              alt="Red de Dependencias Ecosomática"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
              <h3>Red de Dependencias Ecosomáticas</h3>
              <p>
                Interdependencia, Amenazas, Jardines polinizadores, Restauración, Red ecológica, Equilibrio.
              </p>
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
              Explora la vida de la mariposa monarca en nuestra Galería de Arte Digital. 
              10 paneles interactivos combinan arte y ciencia para mostrar su ciclo de vida, 
              migración y significado cultural.
            </p>
          </div>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/corredor_migratorio.png"
              alt="Corredor Migratorio de la Mariposa Monarca"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
              <h3>Corredor Migratorio</h3>
              <p>
                <br/>
                Migración mariposa monarca, viaje anual Norteamérica, hibernación México, rutas migratorias, corredores, esenciales, supervivencia ecológica.
              </p>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/vos_humana.png"
              alt="La Voz Humana"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
              <h3>La Voz Humana</h3>
              <p>
                Conexión cultural, Social, Comunidades mexicanas, Mitos, Arte Conservación humana, Tradiciones.
              </p>
            </div>
            <br/>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
            </div>
          </div>
        </div>
      </main>

      <Pagination totalPages={3} currentPage={1} basePath="Atlas" />

      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}