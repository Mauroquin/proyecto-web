import Navbar from "../components/Navbar";
import styles from "../styles/Migracion.module.css";



export default function Atlas() {
  

  return (
    <>
      <Navbar />

      {/* ================= MAPA DE MIGRACIÓN ================= */}
      <header className={styles.header}>
        <img
          src="/assets/migración_ecosistemas.png"
          alt="Mapa de migración de la mariposa monarca"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Dos gráficos, dos realidades en cambio</h2>
    <p>Estos gráficos muestran cómo han disminuido, desde 2005, tanto la migración de personas de México A EE.UU. como el área ocupada por las mariposas monarca en sus santuarios. Dos procesos diferentes que reflejan tranformaciones profundas.
      
    </p>
    <br />
  
    
    <h2>Mariposas: menos espacio para hibernar</h2>
    <p>
      En 19974,las monarcas ocupaban 18 hectárias de bosques. Hoy, su espacio se ha reducido drásticamente. La pérdida de hábitat y el cambio climático han impactado su capacidad de sobrevivir en invierno.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Migración humana: de la cima al descenso</h2>
    <p>
      Entre 1994 y 2005, la migración de mexicanos hacia Estados Unidos creció de forma sostenida. Sin embargo, desde ese pico, la cifra ha caido hasta alcanzar niveles históricamente bajo en 2023.
    </p>
    <br />
    <br />
    <br />
    <h2>Tendencias paralelas, causas distintas</h2>
    <p>
     Aunque los motivos son diferentes politicas migratorias en un caso, deterioro ambientalen otro ambas curvas muestran caídas similares. Esta coincidencia temporal sugiere desafios estructurales comparativos entre sociedad y naturaleza.
    </p>
  </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Lo humano y lo natural enfrentan crisis
          </h2>
          <p>
            Los datos revelan que tanto las personas como las mariposas están perdiendo las condicones que les permitían moverse o permanecer. Las causas varían, pero el resultado es el mismo: menor libertad y mayor vulnerabilidad. 
          </p>
          <br />
          <br />
          <h2 >
           Una llamada a mirar el futuro con responsabilidad
          </h2>
          <p>
            Estas gráficas invitan a reflexionar y actuar. El análisis comparado muestra que los cambios sociales y ecológicos están interconectados, y que entenderlos juntos es clave para construir soluciones sostenibles.
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
