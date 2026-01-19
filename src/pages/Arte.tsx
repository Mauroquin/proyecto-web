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
      src: "/assets/img1A.png",
      titulo: "Diario de mis viajes hacia el norte.",
      descripcion:
        "Esta imagen forma parte de una exposi realizada en 2022 que muestra la visión de 125 artistas con respecto a la migración. Se trata de una muestra mayormente basada en la gráfica, utilizando la técnica de grabado en relieve."
    },
    {
      src: "/assets/img2A.png",
      titulo: "El mariposal ",
      descripcion:
        "La imagen muestra auna baldosa con dos mariposas en el centro,como ejemplo de cómo la mariposa se representa en distintos medios más allá del arte tradicional."
    },
    {
      src: "/assets/img3A.png",
      titulo: "Símbolo Mazahua: la mariposa como vínculo cultural y espiritual.",
      descripcion:
        "Esta fotografia, aunque es del año 2020, muestra la manera en la que el ícono de la mariposa ha permanecido presente a lo largo del tiempo, llegando a la moda y la ropa. Además, de una visión a la vida y trabajos que tienen los artesanos de las comunidades Michoacanas."
    },
    {
      src: "/assets/img4A.png",
      titulo: "Mariposas migrantes. Gráfica Michoacana.(1).",
      descripcion:
        "Esta exposición binacional réune a 125 artistas que, a través del arte gráfico, utilizan a la mariposa monarca como simbolo del antropoceno, abordando temas como migración, desplazamiento y cambio climático, con obras que cruzan fronteras y dan voz a la experiencia migrante."
    },
    {
      src: "/assets/img5A.png",
      titulo: "Mariposas migrantes. Gráfica Michoacana.(2).",
      descripcion:
        "Una multitud de personas fotografiada durante la inauguración de la exposición Mariposas Migrantes. Gráfica Michoacana, muestra la participación activa de la comunidad en este evento cultural."
    },
    {
      src: "/assets/img6A.png",
      titulo: "Daniel Tamayo y Pineapple.Painting: (Raíces que cruzan).",
      descripcion:
        "Esta muestra artística, conformada por tres murales de gran formato, dan una visión a la memoria y la migración, e invita a la flexión de las fronteras que se cruzan, fisicas o emocionales."
    },
    
    {
      src: "/assets/img7A.png",
      titulo: "Día de Muertos - La mariposa monarca.",
      descripcion:
        "Esta fotografia da pie a un diálogo sobre las tradiciones Mexicanas, como el día de muertos, y la relación de la naturaleza espiritual de esta tradición con las mariposas monarcas y sus leyendas."
    },
    {
      src: "/assets/img8A.png",
      titulo: "Pexlá. Parte de Tierra arrasada, de Oscar Farfán.",
      descripcion:
        "Esta obra abordada la limpieza étnica en Guatemala, donde el ejército arrasó más de 400 comunidades indigenas. Aunque distante del contexto de la mariposa monarca, reflejan una violencia compartida por muchas comunidades indigenas en distintas regiones."
    },
    {
      src: "/assets/img9A.png",
      titulo: "Nube negra de Carlos Amorales.",
      descripcion:
        "Esta obra se ve inspirada por la migración anual de Canadá a México de las mariposas monarca. Envuelven al espectador siendo 25,000 polillas y mariposas de papel negro de 30 diferentes especies. Estos están colocados en formaciones casi escultóricas."
    },
    {
      src: "/assets/img10A.png",
      titulo: "Kik`.",
      descripcion:
        "Nuevamente, aunque lejana al contexto de las mariposas monarca, esta obra habla sobre la limpieza étnica hacia las comunidades indigenas en Guatemala, durante el periodo de 1960 a 1996."
    },
    {
      src: "/assets/img11A.png",
      titulo: "A través del muralismo artistas reflexionan sobre los diferentes contextos de la migración.",
      descripcion:
        "Esta fotografia muestra un programa de muralismo comunitario. Los artistas participantes expresan su visión en torno a la migración en los murales. Utilizan símbolos que hablan sobre los flujos migratorias del pais y su impacto en las familias, junto a la pérdida de la identidad iriginaria."
    },
    {
      src: "/assets/img12A.png",
      titulo: "Xepje: El alma de los muertos.",
      descripcion:
        "Esta ilustración sale de una historia para niños que explica la relación de la mariposa con el día de muertos. En la historia, una niña encuentra esperanza en las leyendas de la mariposas tras la pérdida de su madre. En estas leyendas, el aleteo de las mariposas pueden susurrar mensajes del mas allá."
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
            <h2>EN EL ARTE</h2>
            <p>
              Este panel muestra a las mariposas monarca dentro del arte y la actualidad. También representa a las comunidades y su expresión artística, su resistencia a lo largo del tiempo, haciendo alusión a las propias mariposas y su variados significados.
          
            </p>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className={styles.imagenContainer}>
          <img
            src="/assets/el_arte.png"
            alt="En el Arte"
            className={styles.imagen}
          />
        </div>

        {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h1 className={styles.tituloImpacto}>
           Descubre el arte detrás de cada imagen
          </h1>
          <p>
            Interactúa con cada imagen para explorar cómo la mariposa monarca vive en el arte, la memoria y la resistencia de distintas comunidades.Al hacer clic, podrás leer descripciones que revelan los significados y expresiones que conectan a las personas con este simbolo de transfomación. 
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
