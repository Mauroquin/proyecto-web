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
          src="/assets/iniciativas_conservacion.png"
          alt="Mapa de migración de la mariposa monarca"
          className={styles.mapa}
        />
      </header>


      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Un mapa para proteger el vuelo de la monarca</h2>
    <p>Esta herramienta interactiva muestra dónde y cómo se están llevando a cabo acciones para conservar a la mariposa monarca a lo largo de su ruta migratoria.
      
    </p>
    <br />
  
    
    <h2>Información al alcance de un clic</h2>
    <p>
      Al seleccionaar cada punto, se despliega una ventana con datos claves sobre la ubicación, el tipo de proyecto y su impacto en la protección de la especie.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Iniciativas que se pueden ver y explorar</h2>
    <p>
      Cada punto en el mapa representa un proyecto de conservación: santuarios, jardines, corredores y siembras de algodoncillo, visibles por colores y tamaños.
    </p>
    <br />
    <h2>Una herramienta para aprender y actuar</h2>
    <p>
     Este mapa facilita el seguimiento de los esfuerzos existentes, promueve el conocimiento colectivo y ayuda a identificar dónde hacen falta más acciones.
    </p>
  </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Datos reunidos, conservación conectada
          </h2>
          <p>
            Al integrar múltiples fuentes en un solo lugar, el mapa permite ver el panorama completo de conservación de la monarca en América del Norte.
          </p>
          <br />
          <br />
          <h2 >
           Ver para cuidar: una red en construcción
          </h2>
          <p>
            Más que una visualización, es una invitación a sumarse a una red activa de personas, comunidades y territorios comprometidos con el futuro de la maariposa monarca.
          </p>
          <br />

          <Boton
  texto="Explorar mapa"
  onClick={() =>
    window.open("/mapa_conservacion_monarca.html", "_blank",)
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
