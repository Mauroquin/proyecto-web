import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";
import { useNavigate } from "react-router-dom";


/* 🔹 Tipo para TypeScript */
type Imagen = {
  src: string;
  titulo: string;
  descripcion: string;
};

export default function Lugar() {
  const navigate = useNavigate();

  const [imagenActiva, setImagenActiva] = useState<Imagen | null>(null);

  const imagenes: Imagen[] = [
    {
      src: "/assets/img13A.png",
      titulo: "Fuego con Fuego I.",
      descripcion:
        "Esta primera imagen evoca la fuerza del fuego y, mediante la simetría vertical, remite al test de Rorschach. Nos invita a una exploración interior, donde proyectamos nuestra fascinación y temor por las llamas, percibiendo figuras que surgen más de nuestra mirada que de la imagen misma."
    },
    {
      src: "/assets/img14A.png",
      titulo: "Fuego con Fuego II.",
      descripcion:
        "En esta obra de Bismarck, que tambien imita el test de tinta, las llamas forman la figura de un ser alado. La imagen captura un intante de fascinación, justo antes de que la mariposa escape, simbolizando el deseo y la inevitable derrota de intentar retener lo efimero."
    },
    {
      src: "/assets/img15A.png",
      titulo: "Mosaico de Alas de Mariposa.",
      descripcion:
        "Este mosaico, hecho con fragmentos de las alas de mariposas muertas, sugiere dos ideas clave; fragmento y obsesión. A través de la comtemplación, revela cómo los detalles que nos fascinan forman un todo que solemos ignorar, y como volvemos repetidamente a los mismos simbolos en distintos tiempos y espacios."
    },
    {
      src: "/assets/img16A.png",
      titulo: "Mariposa como fuego.",
      descripcion:
        "Al palntear la equivalencia entre mariposa y fuego, esta imagen muestra como el flujo migratorio de las monarcas, al cubrir los árboles, evoca incendios forestales. El movimiento de sus alas recuerda al de las llamas y trasmite la sensación de estar inmerso en una fuerza abrumadora."
    },
    {
      src: "/assets/img17A.png",
      titulo: "Incendio Forestal en Michoacán.",
      descripcion:
        "En distintos lugares, las llamas adoptan formas similares a las alas de las mariposas, simbilizando un vinculo entre fuego y mariposa. Esta imagen, tomada en una zona clave de la migración monarca, invita a reflexionar sobre cómo nuestras acciones afectan a ambos, y como al intentar destruir a la mariposa, también nos dañamos a nosotros mismos."
    },
    {
      src: "/assets/img18A.png",
      titulo: "Incendio en Gasolinera.",
      descripcion:
        "El incendio en una gasolinera refleja el tema del movimiento y su interrupción, similar a las dinámicas migratorias de la mariposa. La falta de combustible afecta nuestra vida cotidiana, mientras que la gasolina, altamente inflamable, causa incendios que paralizan el tránsito de las mariposas mostrando un paralelismo entre ambas situaciones."
    },
    
    {
      src: "/assets/img19A.png",
      titulo: "Escapar del fuego.",
      descripcion:
        "Traslademonos ahora, la impotencia del escape de la destrucción del entorno a nustros cuerpos. La fotografía es un retrato de la desesperación, la pérdida del entorno, la esperanza y la vida de quienes se ven atrapados en el edificio en llamas. Es otra vez un ejercicio mimético, análogo de nuestra relación con los elementos del mundo, que creemos dominados y domesticados."
    },
    {
      src: "/assets/img20A.png",
      titulo: "La muerte de 6 millones de mariposas.",
      descripcion:
        "La mariposa genera una obsesión visual que persiste incluso tras su muerte; su cadáver no provoca rechazo, sino fascinación y culpa. Esta sensación refleja nuestra fuerza destructiva y es un recordatorio inquietante de nuestra propia mortalidad."
    },
 
    
  ];

  return (
    <>
      <Navbar />

      <button
  onClick={() => navigate(-1)}
  className={styles.botonVolver}
>
  ← Volver
</button>


      <main className={styles.main}>
        {/* TEXTO SUPERIOR */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>EL FUEGO DE LA MEMORIA EN LAS ALAS DE LA MARIPOSA</h2>
            <p>
              La mariposa y el fuego comparten un simbolismo profundo: ambos representan movimiento, deseo y una belleza imposible de controlar. Nos confrontan con nuestra fragilidad y el anhelo de proseer lo que siempre escapa. Al observarlos, recordamos nuestra conexión con la naturaleza, nuestra vulnerabilidad y el ciclo inevitable de vida, muerte y transfomación.
          
            </p>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className={styles.imagenContainer}>
          <img
            src="/assets/el_fuego.png"
            alt="El fuego de la memoria en las alas de la mariposa"
            className={styles.imagen}
          />
        </div>

        {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h1 className={styles.tituloImpacto}>
           Imágenes que arden y vuelan
          </h1>
          <p>
            Cada imagen de este atlas guarda un movimiento, una memoria, una huella. Al interactuar con ellas, descubriras simbolos, deseos y ciclos que, como la mariposa y el fuego, escapan, conmueven y nos recuerdan nuestro lugar en la tierra. Haz clic y dejate llevar. 
          </p>
        </div>

        {/* GALERÍA (6 imágenes, SIN pixelar) */}
        <div className={styles.galeria}>
          {imagenes.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.titulo}
              className={styles.galeriaImg}
              onClick={() => setImagenActiva(img)}
            />
          ))}
        </div>

{/* MODAL DE LECTURA */}
{imagenActiva && (
  <div
    className={styles.modalOverlay}
    onClick={() => setImagenActiva(null)}
  >
    <div
      className={styles.modal}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={styles.cerrar}
        onClick={() => setImagenActiva(null)}
        aria-label="Cerrar modal"
      >
        ×
      </button>

      <div className={styles.modalContenido}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.modalColImagen}>
          <img
            className={styles.modalImagen}
            src={imagenActiva.src}
            alt={imagenActiva.titulo}
          />
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.modalColTexto}>
          <h2 className={styles.modalTitulo}>
            {imagenActiva.titulo}
          </h2>

          <p className={styles.modalTexto}>
            {imagenActiva.descripcion}
          </p>
        </div>
      </div>
    </div>
  </div>
)}

      </main>

      <footer className={styles.footer}>
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </>
  );
}
