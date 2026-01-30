import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";




export default function Atlas() { 

 return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/progreso_iniciativas.png"
          alt="Progreso de iniciativas de conservación"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>¿Cómo ha sido el avance en la conservación?</h2>
    
    <p>
      El gráfico muestra un crecimiento sostenido y significativo en las iniciativas de conservación de la Mariposa Monarca a lo largo del período 2015–2024. Todos los indicadores presentan una tendencia positiva, lo que evidencia un compromiso progresivo con la protección del ecosistema.
    </p>


    <h2>Más árboles, mayor impacto ambiental</h2>
    <br />
    <p>
      El gráfico de árboles plantados por año refleja un aumento constante, pasando de aproximadamente 2.500 árboles en 2015 a más de 18.000 en 2024. Este crecimiento indica una intensificación de los esfuerzos de reforestación, clave para la restauración de hábitats y corredores biológicos de la mariposa.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Reforestación en expansión</h2>
    <br />
    <p>
      Las hectáreas reforestadas por año también muestran un incremento continuo. De poco más de 10 hectáreas en los primeros años, se alcanza cerca de 90 hectáreas en 2024, lo que sugiere no solo más árboles, sino una mayor escala territorial en las acciones de conservación.
    </p>

    <br />
    <br />
  
    <h2>Más proyectos, mayor cobertura</h2>
    <br />
    <br />
    <br />
    <p>
     El gráfico de proyectos activos por año evidencia un crecimiento progresivo, pasando de 3 proyectos en 2015 a cerca de 19 en 2024. Esto indica una diversificación de iniciativas y una mayor participación institucional y comunitaria en la protección de la Mariposa Monarca.
    </p>

    </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Inversión como motor del cambio
          </h2>
          <p>
           La inversión acumulada, medida en millones de dólares, presenta un aumento constante y acelerado, alcanzando aproximadamente 4,5 millones USD en 2024. Este comportamiento demuestra que el crecimiento de los proyectos y la reforestación está respaldado por un mayor apoyo financiero, fundamental para la sostenibilidad a largo plazo.
          </p>
          <br />
          <br />
          <h2 >
           Conservación con visión de futuro
          </h2>
          <p>
            Los resultados invitan a fortalecer la continuidad de estas iniciativas, asegurando que el crecimiento observado se mantenga en el tiempo y que los esfuerzos de conservación no solo aumenten en cantidad, sino también en calidad, permanencia e impacto ecológico.
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
