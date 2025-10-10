import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";

export default function Atlas() {
  return (
    <>
      <Navbar />

      {/* Encabezado */}
      <header className={styles.header}>
        <h1>⬅ ATLAS DE LA MARIPOSA MONARCA</h1>
        <p>
          Descubre la belleza y la ciencia detrás de la mariposa monarca a través de nuestros atlas.
        </p>
      </header>

      {/* Contenido principal */}
      <main className={styles.main}>
        {/* Texto dividido en dos columnas */}
        <div className={styles.texto}>
          <h2>Descubre los Paneles de la Mariposa Monarca</h2>
          
        </div>

        {/* Imagen del ciclo de vida */}
        <div className={styles.imagenContainer}>
          <img
            src="/assets/ciclo_de_vida.png"
            alt="Ciclo de la Vida de la Mariposa Monarca"
            className={styles.imagen}
          />
          <h3>Ciclo de la Vida</h3>
        </div>
        <div>
          <p>
            Explora la vida de la mariposa monarca en nuestra Galería de Arte Digital. 
            10 paneles interactivos combinan arte y ciencia para mostrar su ciclo de vida, 
            migración y significado cultural.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
