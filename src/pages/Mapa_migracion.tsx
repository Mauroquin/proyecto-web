import Navbar from "../components/Navbar";
import styles from "../styles/Migracion.module.css";



export default function Atlas() {
  

  return (
    <>
      <Navbar />

      {/* ================= MAPA DE MIGRACIÓN ================= */}
      <header className={styles.header}>
        <img
          src="/assets/mapa_migracion.png"
          alt="Mapa de migración de la mariposa monarca"
          className={styles.mapa}
        />
      </header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Un viaje que une a un continente</h2>
    <p>
      La mariposa monarca ha sido símbolo de resistencia,
      transformación y memoria colectiva. Su presencia en el
      arte contemporáneo conecta comunidades, identidades y
      expresiones culturales vivas.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */}
  <section className={styles.bloqueTexto}>
    <h3>El fuego de la memoria en las alas de la mariposa</h3>
    <p>
      Fuego, movimiento y fragilidad se entrelazan en esta
      representación visual que evoca la belleza efímera
      y el deseo de transformación.
    </p>
  </section>

</main>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
