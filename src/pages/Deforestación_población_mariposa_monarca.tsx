import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";




export default function Atlas() { 

 return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/deforestación_población.png"
          alt="Tipos de amenazas"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>El aguacate no deja de crecer</h2>
    
    <p>
      Desde el año 2000, la superficie destinada al cultivo de aguacate ha aumentado constantemente, acelerando su expansión a partir de 2010 hasta superar las 550 mil hectáreas en 2023.
    </p>
    <br />
    <h2>Cada vez menos mariposas</h2>
    <p>
      La población de monarca cayó drásticamente desde 2010, justo cuando aumentaron los cultivos y la tala. Para 2020, su número ya era críticamente bajo.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Talar para sembrar</h2>
    
    <p>
      La deforestación anual sigue una tendencia casi paralela al crecimiento del aguacate, lo que sugiere una fuerte relación entre ambos procesos.
    </p>

    <br />
    
    <h2>Tres curvas, una historia compartida</h2>
    <p>
     El gráfico conecta tres variables en un solo espacio: cultivo, tala y mariposas. Su comportamiento conjunto permite visualizar el impacto humano sobre la especie
    </p>

    </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Una amenaza con cifras claras
          </h2>
          <p>
            Las coincidencias en el tiempo entre el aumento del cultivo y la disminución de las mariposas sugieren que el modelo agricola actual está afectando su hábitat.
          </p>
          <br />
          <br />
          <h2 >
           ¿Podemos cultivar sin destruir?
          </h2>
          <p>
            Este análisis muestra la necesidad urgente de adoptar prácticas agrícolas sostenibles que permitan proteger tanto la economía local como la biodiversidad.
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
