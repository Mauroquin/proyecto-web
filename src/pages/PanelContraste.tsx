import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";

/* 🔹 Tipo para TypeScript */
type Imagen = {
  src: string;
  titulo: string;
  descripcion: string;
};

export default function PanelContraste() {
  const [imagenActiva, setImagenActiva] = useState<Imagen | null>(null);

  const imagenes: Imagen[] = [
    {
      src: "/assets/img1.png",
      titulo: "Fumigación Agrícola: Amenaza Química al Ecosistema",
      descripcion:
        "Esta imagen abre la sección de amenazas mostrando el impacto del uso de pesticidas en la mariposa monarca y su entorno. Representa cómo estas sustancias dañan tanto a los insectos como a todo el ecosistema, resaltando la urgencia de una agricultura más sostenible."
    },
    {
      src: "/assets/img2.png",
      titulo: "Deforestación",
      descripcion:
        "La pérdida de bosques reduce drásticamente los hábitats naturales esenciales para la migración de la mariposa monarca."
    },
    {
      src: "/assets/img3.png",
      titulo: "Pérdida de biodiversidad",
      descripcion:
        "La desaparición de especies vegetales altera el equilibrio ecológico y afecta directamente a los polinizadores."
    },
    {
      src: "/assets/img4.png",
      titulo: "Contaminación del suelo",
      descripcion:
        "Los químicos y desechos industriales degradan el suelo y afectan las plantas hospederas de la mariposa."
    },
    {
      src: "/assets/img5.png",
      titulo: "Escasez de plantas nativas",
      descripcion:
        "La reducción de algodoncillo limita la reproducción de la mariposa monarca."
    },
    {
      src: "/assets/img6.png",
      titulo: "Cambio climático",
      descripcion:
        "Las alteraciones del clima afectan los patrones migratorios y la supervivencia de la especie."
    },
    {
      src: "/assets/img7.png",
      titulo: "Acciones de conservación",
      descripcion:
        "Los jardines para polinizadores representan una solución para proteger el ciclo de vida de la monarca."
    },
    {
      src: "/assets/img8.png",
      titulo: "Esperanza ecológica",
      descripcion:
        "La participación comunitaria es clave para restaurar los ecosistemas y proteger la biodiversidad."
    }
  ];

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* TEXTO SUPERIOR */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>Panel de Contraste</h2>
            <p>
              Este panel muestra el contraste entre la destrucción ambiental y
              las acciones de conservación, destacando las amenazas y las
              soluciones para la mariposa monarca.
            </p>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className={styles.imagenContainer}>
          <img
            src="/assets/panel_contraste.png"
            alt="Panel de contraste"
            className={styles.imagen}
          />
        </div>

        {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h1 className={styles.tituloImpacto}>
            Cada imagen, un reflejo de la huella humana en la vida de la monarca
          </h1>
          <p>
            Haz clic en cada imagen para leer su contexto y comprender el
            impacto humano en el ecosistema.
          </p>
        </div>

        {/* GALERÍA (8 imágenes, SIN pixelar) */}
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
