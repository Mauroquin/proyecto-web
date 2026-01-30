import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";




export default function Atlas() { 

 return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/área_reproducción.png"
          alt="Área de reproducción y alimentación"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>¿Quién siembra más plantas?</h2>
    <br />
    <br />
    <p>El gráfico de barras muestra que los proyectos tipo "Santuario" lideran ampliamente en cantidad de plantas sembradas, seguidos por "Corredores verdes" y "Reservas Naturales".
    </p>
    <br />

    <h2>¿Cuáles proyectos son más comunes?</h2>
    <p>
      El gráfico circular revela que los "Santuarios" también son el tipo de proyecto más frecuente, representando una quinta parte del total regístrado.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Jardines, con menor peso en la siembra</h2>
    <p>
      Proyectos como jardines escolares o urbanos tienen una presencia más simbólica que cuantitativa, aportando menos volumen de plantas al total reforestado.
    </p>

    <br />

    <h2>Diversidad con impactos desiguales</h2>
    <p>
     Aunque hay variedad de iniciativas, pocas tienen un peso fuerte en términos de superficie o plantas sembradas, lo que marca diferencias en su alcance ambiental.
    </p>

    </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Santuario: clave en la restauración 
          </h2>
          <p>
            Este tipo de proyecto destaca tanto por su frecuencia como por su impacto, lo que sugiere que es una pieza central en los esfuerzos de conservación.
          </p>
          <br />
          <br />
          <h2 >
           Diferentes formas de cuidar, distintas escalas de impacto
          </h2>
          <p>
            Los datos invitan a reflexionar sobre cómo fortalecer los proyectos más pequeños y asegurar que la divercidad de enfoques también se traduzca en mayor efectividad ambiental.
          </p>
          <br />
        
        </div>

        
</main>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
       © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
