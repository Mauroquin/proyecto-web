import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";

/* 🔹 Tipo para TypeScript */
type Imagen = {
  src: string;
  titulo: string;
  descripcion: string;
};

export default function Lugar() {
  const [imagenActiva, setImagenActiva] = useState<Imagen | null>(null);

  const imagenes: Imagen[] = [
    {
      src: "/assets/img25.png",
      titulo: "Homero Goméz Gonzaléz, guardián de las mariposas.",
      descripcion:
        "Homero Gómez González, nacido en 1970, fue un activista y defensor ambiental, que luchó por la Reserva de la Biosfera de la Mariposa Monarca. González solía publicar videos de concientización sobre los cuidados y preservación de las hijas del sol, como solía llamar a las mariposas monarca. Desaparecío el 13 de enero de 2020, y 10 días más tarde, lo encontraron sin vida."
    },
    {
      src: "/assets/img26.png",
      titulo: "José Luis Álvarez Alcalá ",
      descripcion:
        "José Luis Álvarez Alcalá ha hecho esfuerzos por la protección de bosques desde 1996, junto a varias familias. La reforestación que inspira no es solo un esfuerzo para las mariposas, sino para la propia comunidad, evitando desastres naturales con la plantación de árboles.Alvarez ha expresado motivación por las mariposas monarcas, y su largo viaje para continuar su especie."
    },
    {
      src: "/assets/img27.png",
      titulo: "Cherán, un autogobierno como ejemplo nacional; unidad y mediación, las calves.",
      descripcion:
        "Cherán, en Michoacán, es un ejemplo de autogobierno que ha sido reconocido a nivel nacional. La comunidad ha logrado mantener su unidad y mediación en temas ambientales, protegiendo su territorio y promoviendo prácticas sostenibles."
    },
    {
      src: "/assets/img28.png",
      titulo: "Colectivo Cherani en el Hammer Museum.",
      descripcion:
        "Imágen del artista visual Alain Silva Gaurdían (1991). Originario de Cherán, especializado en la gráfica, pintura y video. Su obra contiene tradiciones y elemnetos simbólicos de la vida cotidiana Purépecha. Traduce las ceremonias, rituales y festividades de la comunidad, a un lenguaje pictórico contemporáneo."
    },
    {
      src: "/assets/img29.png",
      titulo: "Uinapikua: el arte como resistencia.",
      descripcion:
        "Esta imagen representa al arte salido de Cherán. Citando a la Gaceta UNAM: Desde el año 2011, los politicos no entran a Cherán, incluso el presidente de la república no puede pasar. Esta comunidad purépecha (guardiana del bosque y de si misma en la regíon central del estado de Michoacán) cerró sus fronteras e instauró una forma de autogobierno. La fuerza creadora, el hacer; Uinapikua."
    },
    {
      src: "/assets/img30.png",
      titulo: "Caminando el cuerpo desaparecido.",
      descripcion:
        "Esta obra muestra la relación de las tradiciones dentro de Michoacán, heredadas a través del tiempo, con la historia trágica que se ha desarrollado por las olas de violencia dentro del estado. De acuerdo a Fabiola Rayas: Está la constante propuesta de poder cruzar hacia otros lugares para visibilizar la problemática en México, y en el caso de Estados Unidos para estar con personas migrantes, que muchas veces han sido desplazadas por violecia o que tienen a familiares desaparecidos."
    },
    
  ];

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* TEXTO SUPERIOR */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>EN EL LUGAR</h2>
            <p>
              Este panel muestra imágenes de la mariposa y la resilencia dentro de los lugares a los que llega. Además, da visión a los problemas a los que tienen que pasar, tanto ellas como la sociedad a su alrededor, fuera de los acontecimientos climatológicos.
          
            </p>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className={styles.imagenContainer}>
          <img
            src="/assets/lugar.png"
            alt="En el lugar"
            className={styles.imagen}
          />
        </div>

        {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h1 className={styles.tituloImpacto}>
           Una historia en cada rincón
          </h1>
          <p>
            Interactúa con cada imagen para descubrir cómo la mariposa monarca y la comunidades enfretan desafios sociales y ambientales en los lugares habitan. 
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
