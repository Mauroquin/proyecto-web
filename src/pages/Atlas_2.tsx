import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";

import Boton from "../components/Boton";

import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";



export default function Atlas() {
  const navigate = useNavigate();
  
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
           </div> 



            

            <br />
            <div className={styles.imagenContainer}>
            <img
              src="/assets/panel_contraste.png"
              alt="Panel de Contraste"
              className={styles.imagen}
            />

            <br />
            <div style={{ textAlign: "left" }}>
              <h3>Panel de Contraste</h3>
              <p>
                Destrucción ambiental, Conservación, Amenazas, Conciencia, Soluciones activas, Restauración de Hábitat, Participación humana.
              </p>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/panel-contraste")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/tradición.png"
              alt="En la Tradición"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
              <h3>En la Tradición</h3>
              <p>
                Pueblos originarios, historia, artefactos, protección, mariposa monarca, memoria cultural, tradición, simbolismo.
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
          <br />
          <br />
          
          

          </div>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/naturaleza.png"
              alt="Naturaleza y Migración"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
              <h3>En la Naturaleza</h3>
              
              <p>
                Migración, localización en México, conservación, perservación, biología, ciclo de vida, planes de protección datos biológicos.
              </p>
            </div>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => navigate("/Naturaleza")} />
            </div>
          </div>
          <br/>
          <div className={styles.imagenContainer}>
            <img
              src="/assets/lugar.png"
              alt="La Voz Humana"
              className={styles.imagen}
            />
            <br/>
            <div style={{ textAlign: "left" }}>
              <h3>En el Lugar</h3>
              
              <p>Mariposa monarca, resilencia, lugares de destino, problemáticas sociales, impacto ambiental, comunidades locales, más allá del clima, resistencia, compartida.

              </p>
            </div>
            <br/>
            <div className={styles.botonIzquierda}>
              <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
            </div>
          </div>
        </div>
      </main>

      <Pagination totalPages={3} currentPage={2} basePath="Atlas" />


      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}