import Navbar from "../components/Navbar";
import styles from "../styles/Migracion.module.css";
import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";



export default function Atlas() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* ================= MAPA DE MIGRACIÓN ================= */}
    <header className={styles.header}>
        <img
          src="/assets/migración_Mexico_EEUU.png"
          alt="Mapa de migración de la mariposa monarca"
          className={styles.mapa}
        />
      </header>


      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className={styles.main}>

  {/* -------- COLUMNA IZQUIERDA -------- */}
  <section className={styles.bloqueTexto}>
    <h2>Dos migraciones, un mismo territorio</h2>
    <p>Este mapa compara el viaje de la mariposa monarca y el de las personas que migran de México a Estados Unidos. Aunque distintas en origen, ambas migraciones atraviesan rutas y fronteras comunes.
      .
    </p>
    <br />
    <br />
    <br />
    
    <h2>Migrar para sobrevivir</h2>
    <p>
      Tanto las mariposas como las personas migran impulsadas por la necesidad de encontrar mejores condiciones. Esta herramienta visual pone en diálogo la biología y lo social a través del viaje.
    </p>
  </section>

  {/* -------- COLUMNA DERECHA -------- */} 
  <section className={styles.bloqueTexto}>
    <h2>Colores que cuentan historias paralelas</h2>
    <p>
      Gracias al uso de símbolos y colores diferenciados, la visualización permite seguir ambos recorridos simultáneamente, entendiendo sus puntos de cruse, destino y temporalidaddes.
    </p>
    <br />
    <br />
    <h2>El mapa como espejo de realidades</h2>
    <p>
     Más allá de la información geográfica, este recurso invita a reflexionar sobre los desafios, la resilencia y las barreras visibles e invisibles que enfrentan quienes se mueven .
    </p>
  </section>

 {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h2 >
           Un puente entre especies y experiencias
          </h2>
          <p>
            La comparación revela puntos en común entre el mundo natural y el humano. La mariposa monarca se convierte en símbolo de esperanza, fragilidad y conexión más allá de fronteras. 
          </p>
          <br />
          <br />
          <h2 >
           Visualizar para comprender y empatizar
          </h2>
          <p>
            Esta herramienta no solo informa, tambiém invita a mirar con otros ojos la migracón. Al mostrar los caminos compartidos, abre una puerta al entendimiento, la empatía y la acción.
          </p>
          <br />

          <Boton
  texto="Explorar mapa"
  onClick={() =>
    window.open("/mapa_migraciones_comparativo.html", "_blank",)
  }
/>

          
        </div>
        


</main>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
