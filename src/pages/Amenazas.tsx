import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";




export default function Atlas() { 

 return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/amenazas.png"
          alt="Tipos de amenazas"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>¿Qué las pone en riesgo?</h2>
    
    <p>
      Los gráficos revelan que la desforestación, los pesticidas y el cambio climático son los principales amenazas para la mariposa monarca en su ruta migratoria.
    </p>
    <br />
    <h2>Amenazas clasificadas por gravedad</h2>
    <p>
      La mayoría de los riesgos se consideran graves o mediamente graves.Solo uno es critico, y muy pocos se considerados menores.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Causas que les quitan vida</h2>
    <p>
      La falta de flores con néctar es la causa más común de muerte, seguida por el frio extremo, pesticidas, depredadores y enfermedades.
    </p>

    <br />
    <br />

    <h2>Un problema que crece con los años</h2>
    <p>
     Desde 1990, el impacto de amenazas como la deforestación, los quimicos agricolas y el clima extremo ha aumentado considerablemente.
    </p>

    </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           La deforestación, siempre presente
          </h2>
          <p>
            Aunque el cambio climático gana terreno, la pérdida de bosques ha sido de forma constante la amenaza más fuerte para la especie.
          </p>
          <br />
          <br />
          <h2 >
           Un llamado urgente a la acción
          </h2>
          <p>
            Estos gráficos muestran que la situación es crítica. Las amenazas se intensifican y afectan directamente la supervivencia de la monarca, exigiendo respuestas inmediatas.
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
