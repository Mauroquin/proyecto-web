import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";




export default function Atlas() { 

 return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/tendencia_poblacional.png"
          alt="Mapa de migración de la mariposa monarca"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Una tendencia que preocupa</h2>
    <br />
    <p>El gráfico muestra cómo ha disminuido la superficie ocupada por la mariposa monarca en sus santuarios de hibernación durante las últimas dos décadas.
    </p>
    <br />

    <h2>Datos que revelan una urgencia</h2>
    <p>
      La información visual ayuda a entender la gravedad del problema y a tomar conciencia de que la pérdida de hábitat continúa.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Variaciones anuales, una misma dirección</h2>
    <p>
      Aunque hay años con aumentos leves, la tendencia general es clara: la población de mariposas sigue bajando con el tiempo.
    </p>

    <br />

    <h2>Fundamento para proteger su hogar</h2>
    <p>
     Estos datos respaldan la cración de políticas, leyes y acciones concretas para proteger los bosques donde hibernan las monarcas.
    </p>

    </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Una herramienta para la conservación
          </h2>
          <p>
            El gráfico es útil para cientificos, estudiantes y activistas que buscan argumentos visuales para defender y restaurar el hábitat de la monarca.
          </p>
          <br />
          <br />
          <h2 >
           Más que números: un llamado a actuar
          </h2>
          <p>
            Cada línea descendente representa un ecosistema en riesgos. Este registro visual impulsa la reflexión y la acción colectiva para frenar el deterioro.
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
