import Navbar from "../components/Navbar";
import styles from "../styles/visualizacion.module.css";




export default function Atlas() { 

 return (
    <>
      <Navbar />

      {/* ================= Interrelacion ================= */}
      <header className={styles.header}>
        <img
          src="/assets/impacto_cultivo.png"
          alt="Tipos de amenazas"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>El aguacate gana terreno rápidamente</h2>
    
    <p>
      Desde el año 2000, el cultivo de aguacate ha crecido, pero fue después de 2010 cuando la expansión se volvío acelerada, superando las 500.000 hectáreas en 2023.
    </p>
    <br />
    <h2>El silencio de las alas</h2>
    <p>
      La población de mariposas monarca ha disminuido de manera alarmante desde 2010, pasando de más de 150 millones a cifras cercanas a la extinción en 2023.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Menos árboles, más cultivo</h2>
    <br />
    <br />
    

    <p>
      La pérdida de cobertura forestal también creció drásticamente a partir de 2010, coincidiendo con la expansión aguacatera.En 2023 se perdieron casi 70.000 hectáreas de bosque.
    </p>

    <br />
    
    <h2>Una correlación preocupante</h2>
    <p>
     El avance del aguacate y la tala de bosques suceden en paralelo al colapso de la población de las monarcas, revelando una posible relación causa-efecto
    </p>

    </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           El hábitat invernal bajo amenaza
          </h2>
          <p>
            Al sustituir los bosques por cultivos, se destruyen los refugios donde las mariposas hibernan, poniendo en riesgos su ciclo migratorio y su supervivencia.
          </p>
          <br />
          <br />
          <h2 >
           Producir sin destruir es urgente
          </h2>
          <p>
            Estos datos evidencian la necesidad de replantear el modelo agrícola para equilibrar desarrollo económico y conservación ambiental Michoacán.
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
