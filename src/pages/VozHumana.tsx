import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";




export default function VozHumana() {
  return (
    <>
      <Navbar />

      

      {/* Contenido principal */}
      <main className={styles.main}>

        {/* Primera columna */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>LA VOZ HUMANA</h2>
            <br />
            <p>
              En este panel celebra la conexión cultural y espiritual entre las comunidades, especialmenete en México, y la mariposa monarca.Más allá de su valor biológico, muestra cómo la monarca inspira mitos, tradiciones y acciones de conservación, destacando su papel como simbolo vivo en la identidad y el alma colectiva.
            </p>
          </div>
        </div>

        {/* Segunda columna */}
        
          <div className={styles.imagenContainer}>
            <img
              src="/assets/voz_humana.png"
              alt="La Voz Humana"
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
