import Navbar from "../components/Navbar";
import styles from "../styles/Migracion.module.css";



export default function Atlas() {
  

  return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/interrelaciones.png"
          alt="Mapa de migración de la mariposa monarca"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Lo que mueve a las personas</h2>
    <p>La falta de empleo, la inseguridad y el deseo de una vida mejor impulsan a miles de personas a migrar de México a Estados Unidos. Recientemente, también el cambio climático se ha vuelto un factor decisivo.
      
    </p>
    <br />
  
    
    <h2>Un mapa con coincidencias</h2>
    <p>
      En estados como Michoacán y el estado de México, los datos muestran altos níveles tanto de migración humana como de presencia de mariposas. Esta coincidencia plantea nuevas preguntas sobre posibles conexiones.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Lo que amenaza a las monarcas</h2>
    <p>
      La mariposas monarca enfrentan su propia crisis: la pérdida de bosques, el uso de pesticidas, el crecimiento urbano y los efectos del clima han reducido sus espacios de vida y migración.
    </p>
    <br />
    <br />
    <br />
    <h2>¿Migrar puede ayudar a conservar?</h2>
    <p>
     Se propone una hipótesis: cuando las personas migran, hay menos presión sobre la tierra y los recursos, lo que podría beneficiar al ecosistema. Menos tala y más remesas podrián generar espacios de recuperación ambiental.
    </p>
  </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           La conexión inesperada entre sociedad y naturaleza
          </h2>
          <p>
            Aunque todavía se necesita más investigación, este análisis sugiere que la migración humana no solo transforma vidas, sino también paisajes. En algunas regiones, podría estar ayudando indirectamente a la conservación.
          </p>
          <br />
          <br />
          <h2 >
           Una nueva mirada al desarrollo
          </h2>
          <p>
            Este caso invita a repensar cómo las decisiones sobre migración, economía y uso del territorio afectan tanto a las personas como al medio ambiente. El desafio está en equilibrar ambos mundos para lograr bienestar común.
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
