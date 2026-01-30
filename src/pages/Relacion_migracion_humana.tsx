import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";




export default function Atlas() { 

 return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/analicis_correlacion.png"
          alt="Tipos de amenazas"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>¿Existe una conexión entre ambas migraciones?</h2>
    
    <p>
      El gráfico general muestra que no hay una relación directa entre la cantidad de personas migrnado y la poblción de mariposas monarca.
    </p>
    <br />
    <h2>Tendencias distintas a lo largo del tiempo</h2>
    <p>
      Mientras la migración humana subía y luego bajò, la población de mariposas ha descendido de forma más constante, con altibajos aislados.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Datos dispersos, vínculos débiles</h2>
    <br />
    <br />
    

    <p>
      El análisis estadistico indica una correlación muy baja, lo que sugiere que estos dos fenómenos no están conectados de forma significativa.
    </p>

    <br />
    
    <h2>Una caída común, pero en tiempos distintos</h2>
    <p>
     Aunque ambas curvas bajan hacia la última década, la reducción en la migración ocurrió más tarde que la disminución de mariposas.
    </p>

    </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Los promedios no coinciden
          </h2>
          <p>
            Los valores por décadas muestran trayectorias diferentes; las mariposas bajaron en todas las décadas, la migración solo lo hizo en la más reciente.
          </p>
          <br />
          <br />
          <h2 >
           Otros factores explican mejor la disminución
          </h2>
          <p>
            La falta de relación directa apunta a causas ambientales como la deforestación y los pesticidas como principales responsables del declive de las monarca.
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
