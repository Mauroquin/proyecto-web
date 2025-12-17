import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";




export default function DependenciaEcosomatica() {
  
  return (
    <>
      <Navbar />

      

      {/* Contenido principal */}
      <main className={styles.main}>

        {/* Primera columna */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>RED DE DEPENDENCIAS ECOSOMÁTICAS</h2>
            <br />
            <p>
            El panel muestra la red de dependencias ecosomáticas que sustentan la migración de la mariposa monarca. Cada nodo representa un componente clave del ecosistema, desde las plantas hospederas hasta los depredadores y las condiciones climáticas. Las conexiones entre los nodos ilustran cómo estos elementos interactúan y dependen unos de otros para mantener el equilibrio ecológico necesario para la supervivencia de la mariposa monarca durante su migración anual.
            </p>
          </div>
        </div>

        {/* Segunda columna */}
        
          <div className={styles.imagenContainer}>
            <img
              src="/assets/ecosomatica.png"
              alt="Red de Dependencias Ecosomáticas"
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
