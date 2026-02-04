import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";




export default function Atlas() { 

 return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/relación_cultivo_deforestación.png"
          alt="Tipos de amenazas"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Tres variables, una misma historia</h2>
    
    <p>
      La matriz de correlación muestra cómo el aumento del aguacate está fuertemente ligado a la tala de árboles, y cómo ambos factores coinciden con la caída de las mariposas monarca.
    </p>
    <br />
    <h2>Sin árboles, sin mariposas</h2>
    <p>
      La correlación entre deforestación y disminución de mariposas es clara. A medida que se talan más bosques, la población de monarcas cae drásticamente.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Más aguacates, menos bosques</h2>
    
    <p>
      El gráfico Aguacate vs. Deforestación revela una relación directa: cuando crece el cultivo, también lo hace la tala, confirmando un impacto ambiental negativo.
    </p>

    <br />
    
    <h2>El cambio por décadas habla fuerte</h2>
    <p>
     El análisis por periodos muestra que entre 2010 y 2020 la expansión del aguacate y la tala se aceleraron, mientras la población de mariposas se desplomó casi por completo
    </p>

    </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Una alerta ecológica urgente
          </h2>
          <p>
            La gráfica evidencian que el crecimiento descontrolado del aguacate tiene consecuencias graves para el ecosistemas y pone en el peligro a la monarca.
          </p>
          <br />
          <br />
          <h2 >
           ¿Producción o conservación? Mejor ambas
          </h2>
          <p>
            Este análisis invita a buscar modelos agricolas sostenibles que no destruyan el hábitat de la mariposa, permitiendo conservar biodiversidad sin frenar la economía local.
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
