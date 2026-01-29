import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";
import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";



export default function Atlas() {
  const navigate = useNavigate();
  

  return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/tipos_de_amenazas.png"
          alt="Mapa de migración de la mariposa monarca"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Un mapa de las amenazas en el camino</h2>
    <p>Este mapa interactivo muestra los riesgos que enfrenta la mariposa monarca a lo largo de su ruta migratoria, ayudando a identificar los puntos más vulnerables.
    </p>
    <br />

    <h2>Zonas críticas bajo presón</h2>
    <p>
      El mapa destaca las áreas donde los riesgos son más graves, permitiendo ver la intensidad del impacto ambiental en tiempo y espacio.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Colores que alertan, símbolos que explican</h2>
    <p>
      Cada amenaza como la deforestación, los agroquímicos o el cambio climático está representada con íconos y colores claros, facilitando su comprensión visual.
    </p>

    <br />

    <h2>Una herramienta para actuar a tiempo</h2>
    <p>
     Ideal para investigadores, docentes y tomadores de decisiones, este mapa apoya la planificación de estrategías para reducir amenazas y proteger hábitats clave.
    </p>
  </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Una mirada clara a los peligros
          </h2>
          <p>
            El mapa ofrece una visión general de los principales riesgos que enfrentan la mariposa monarca, mostrando con claridad dónde se concentran las amenazas y qué tan intensas son.
          </p>
          <br />
          <br />
          <h2 >
           Proteger a la monarca es un esfuerzo compartido
          </h2>
          <p>
            Al mostrar los peligros distribuidos en tres paises, el mapa refuerza la necesidad de una conservación trinacional, coordinada y urgente.
          </p>
          <br />

          <Boton
  texto="Explorar mapa"
  onClick={() =>
    window.open("/mapa_amenazas_monarca.html", "_blank",)
  }
/>

        
        </div>

        
</main>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
