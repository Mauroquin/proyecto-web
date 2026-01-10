import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";

/* 🔹 Tipo para TypeScript */
type Imagen = {
  src: string;
  titulo: string;
  descripcion: string;
};

export default function Tradicion() {
  const [imagenActiva, setImagenActiva] = useState<Imagen | null>(null);

  const imagenes: Imagen[] = [
    {
      src: "/assets/img17.png",
      titulo: "Pendientes con forma de mariposa, de la tradición Mezcala.",
      descripcion:
        "Esta imagen representa a la mariposas monarca según la tradición Mezcala, donde estas joyas funcionaba como simbolos de poder y estatus. Según Pablo Escalante Gonzalbo, el jade, junto con cuarzo, obsidiana y turquesa, era muy valorado. La tradición Mezcala es reconocida por su lapidaria, es decir, la elaboración de piezas en piedra."
    },
    {
      src: "/assets/img18.png",
      titulo: "Pectoral miniatura de mariposa con mosaico de piedras preciosas, de la tradición Mixteca-Puebla",
      descripcion:
        "Esta imagen representa la mariposa monarca con la forma del pectoral tolteca de Tula, un simbolo ligado a la guerra y los guerreros. Para los Mexicas, las mariposas eran el alma de los guerreros muertos, especialmente sacrificados, y se relacionaba con el fuego en códices posclásicos, reflejando un profundo simbolismo cultural."
    },
    {
      src: "/assets/img19.png",
      titulo: "Itzpapólotl y las mariposas.",
      descripcion:
        "Esta fotografia añade a las visiones distintas de la mariposa a través del tiempo. La Itzpapólotl, mariposa de obsidiana. Adcocación de la Diosa Madre Tlazoltéotl (Toci, Tonan, Coatlicue, Teteo Innan, o Cluhuacóatl-Qullazll, patrona de la cihuateteo, mujeres muertas durante el trabajo de parto, habitantes del paraíso de occidente, Diosa madre de la guerra y sacrificios humanos.) ."
    },
    {
      src: "/assets/img20.png",
      titulo: "Adornos mixteco de oro con forma de mariposa. Tumba 7 de Monte Albán. Museo de las Culturas de Oaxaca, Santo Domingo, Oaxaca. Fotografía de Oliver Santana.",
      descripcion:
        "Esta imagen muestra mas sobre las representaciones de la mariposa dentro de la tradición e historia. A pesar del desgaste de este adorno, su color oro brillante resalta entre las imágenes."
    },
    {
      src: "/assets/img21.png",
      titulo: "Itzapapólotl, la mariposa de obsidiana. Centro Cuahilama, Santa Cruz Acalpixca, Xochimilco. Fotografía de Marco Antonio Pacheco.",
      descripcion:
        "Una imagen aparentemente desgastado de una mariposa de obsidiana revela otra forma de estilización de este insecto, y aporta más elementos sobre cómo era representado dentro de la tradición e historia."
    },
    {
      src: "/assets/img22.png",
      titulo: "Detalle del mural del Tlalocan en el que se aprecian dos tipos de mariposas volando alrededor de un hombre que habla y llora. Tepantitla, Teotihuacan, Estado de México.",
      descripcion:
        "Una imagen que muestra un detalle de un mural revela el uso de pigmentos en el color y dibujos, así como la forma en que las mariposas, la naturaleza y el ser humano eran representados juntos. Esta escena aporta una visión mas profunda sobre las representaciones de la mariposa en la tradición e historia."
    },
    {
      src: "/assets/img23.png",
      titulo: "Representación estilizada de mariposas en el Códice Becker, p, 8. Digitalización: Raíces.",
      descripcion:
        "Mariposas estilizadas aparecen en un códice desgastado por el tiempo, donde aún pueden apreciarse las distintas formas en que eran representadas. Esta imagen ofreces una mirada más amplia sobre la presencia de la mariposa en la tradición e historia."
    },
    {
      src: "/assets/img24.png",
      titulo: "La mariposa: representacion de transformación.",
      descripcion:
        "Una cubierta de incensario muestra a un personaje con nariguera y a las de mariposa, reflejando cómo este insecto era representado en la antigüedad a través de figuras humanas y relatos simbólicos. Esta imagen enriquece la comprensión de la mariposa dentro de las tradiciones culturales e históricas."
    }
  ];

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* TEXTO SUPERIOR */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>En la tradición</h2>
            <p>
              Este panel muestra a la mariposa monarca dentro de la historia de los pueblos origínarios, viviendo en artefactos e historia, protegidos a lo largo de los años.
            </p>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className={styles.imagenContainer}>
          <img
            src="/assets/tradición.png"
            alt="En la Tradición"
            className={styles.imagen}
          />
        </div>

        {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h1 className={styles.tituloImpacto}>
           En la Tradición: Memoria Viva de la Monarca 
          </h1>
          <p>
            Interactúa y descubre la presencia de la mariposa monarca en la historia, simbolos y tradiciones de los pueblos originarios, así como su proteción a través del tiempo.
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
      className={styles.modalLecturaGrande}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={styles.cerrar}
        onClick={() => setImagenActiva(null)}
      >
        ✕
      </button>

      <div className={styles.modalContenidoGrande}>
        {/* IMAGEN IZQUIERDA */}
        <div className={styles.modalImagenGrande}>
          <img
            src={imagenActiva.src}
            alt={imagenActiva.titulo}
          />
        </div>

        {/* TEXTO DERECHO */}
        <div className={styles.modalTextoGrande}>
          <h2>{imagenActiva.titulo}</h2>
          <p>{imagenActiva.descripcion}</p>
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
