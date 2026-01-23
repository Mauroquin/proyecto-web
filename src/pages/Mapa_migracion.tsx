import Navbar from "../components/Navbar";
import styles from "../styles/Migracion.module.css";



export default function Atlas() {
  

  return (
    <>
      <Navbar />

      {/* ================= MAPA DE MIGRACIÓN ================= */}
      <header className={styles.header}>
        <img
          src="/assets/mapa_migracion.png"
          alt="Mapa de migración de la mariposa monarca"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Un viaje que une a un continente</h2>
    <p>
      La mariposa monarca recorre miles de kiómetros cada año, conectando Canadá, Estados Unidos y México. Su migración es uno de los fenómenos naturales más impresionantes del planeta.
    </p>
    <br />
    <br />
    <br />
    
    <h2>Una ruta en constante movimiento</h2>
    <p>
      Mes a mes, el mapa muestra cómo la monarca avanza, se reproduce y regresa. Las ventanas emergentes permiten explorar su trayectoria con precisión y comprender su estrecha relacion con los ecosistemas locales.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Datos que se transforman en historias</h2>
    <p>
      A través de esta visualización interactiva, los datos geográficos y temporales cobran vida. Las rutas, los colores y los marcadores revelan  el camino migratorio completo, desde la reproducción hasta la hibernación.
    </p>
    <br />
    <br />
    <h2>Más que un mapa: una herramienta educativa</h2>
    <p>
      Más que un mapa, esta herramienta invita a reflexionar sobre el viaje como acto vital. Tanto las mariposas como las personas migran buscando condiciones mejores, enfrentando desafíos comunes.
    </p>
  </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Conexión trinacional, resposabilidad compartidad
          </h2>
          <p>
            La migración de la monarca no reconoce fronteras. Este recorrido muestra cómo los tres países están conectados por una misma especie, y cómo su conservación exige esfuerzos conjuntos. 
          </p>
          <br />
          <br />
          <h2 >
           Del dato a la acción
          </h2>
          <p>
            Al visualizar el recorrido de la mariposa, también reconocemos los desafios que enfrentan. Esta herramienta no solo informa, sino que también inspira conciencia y acción para proteger su camino.
          </p>
        </div>
        


</main>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
