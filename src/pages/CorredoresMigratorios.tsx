import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";




export default function CorredoresMigratorios() {
  return (
    <>
      <Navbar />

      

      {/* Contenido principal */}
      <main className={styles.main}>

        {/* Primera columna */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>Corredores Migratorios</h2>
            <br />
            <p>
              Este Atlas se centra en los corredores migratorios de la mariposa monarca, mostrando las rutas que siguen durante su migración anual desde Norteamérica hasta México. Se ilustran los puntos clave de la migración, incluyendo los hábitats críticos y las condiciones ambientales que facilitan su trayecto.
            </p>
          </div>
        </div>

        {/* Segunda columna */}
        
          <div className={styles.imagenContainer}>
            <img
              src="/assets/corredor_migratorio.png"
              alt="Corredores Migratorios"
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
