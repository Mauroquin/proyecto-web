import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";




export default function CicloDeVida() {
  return (
    <>
      <Navbar />

      

      {/* Contenido principal */}
      <main className={styles.main}>

        {/* Primera columna */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>CICLO DE VIDA</h2>
            <br />
            <p>
              En este panel se describe el ciclo de vida de la mariposa monarca, desde el huevo hasta la etapa adulta, pasando por las etapas de oruga y pupa, la imagen muestra cada una de estas fases las cuales son, huevo, oruga, pupa y adulto cada una con sus características específicasy su desarrollo biológico y su relación con su plantas hospederas, cruciales para su supervivencia. También se destaca la importancia de conservar su hábitat para asegurar la continuidad de esta especie, se destacan su movilidad, concentración y el fenómeno migratorio.
            </p>
          </div>
        </div>

        {/* Segunda columna */}
        
          <div className={styles.imagenContainer}>
            <img
              src="/assets/ciclo_de_vida.png"
              alt="Corredor Migratorio de la Mariposa Monarca"
              className={styles.imagen}
            />

          </div>


      </main>

    

      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
