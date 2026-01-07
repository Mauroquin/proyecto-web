import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Atlas.module.css";

/* 🔹 Tipo para TypeScript */
type Imagen = {
  src: string;
  titulo: string;
  descripcion: string;
};

export default function Naturaleza() {
  const [imagenActiva, setImagenActiva] = useState<Imagen | null>(null);

  const imagenes: Imagen[] = [
    {
      src: "/assets/img9.png",
      titulo: "Monarch fall and spring migration patterns",
      descripcion:
        "Este mapa muestra los patrones de migración de la mariposa monarca a lo largo del año, desde Canadá y Estados Unidos hasta México. Ilustra su ubicación según la estración y sirve como una referencia visual dentro del atlas para destacar las magnitud de su recorrido y su resilencia como especie migratoria."
    },
    {
      src: "/assets/img10.png",
      titulo: "Áreas protegidas federales y estatales que participan en la RNMMM a lo largo de su ruta migratoria en México.",
      descripcion:
        "Este mapa muestra las áreas naturales protegidas y los hábitats de hibernación de la mariposa monarca en México, que forman parte de la red de monitoreo nacional. Sirve como complemento a los datos biológicos, ilustrando las zonas clave donde se localizan durante su paso migratorio en distintas temporadas."
    },
    {
      src: "/assets/img11.png",
      titulo: "Distribución de sitios con colonias de Mariposa Monarca establecidas historicamente en México.",
      descripcion:
        "Este mapa destaca las áreas centrales de México donde se distribuye las mariposa monarca, incluyendo sus zonas núcleo y amortiguamiento. Permite comprender el contexto geográfico de su presencia en estado como Michoacán, Estado de México y Puebla."
    },
    {
      src: "/assets/img12.png",
      titulo: "Portada del Plan de Accion para la Conservación de la Mariposa Monarca en México, 2018-2024",
      descripcion:
        "Esta imagen en primer plano de la mariposa monarca, sobre un fondo negro y acompañada de los logos del Gobierno de México, SEMARNAT y CONANP, hace referencia al Plan de Accion para su conservacón. Un documento clave, pero poco difundido, que merece mayor visibilidad."
    },
    {
      src: "/assets/img13.png",
      titulo: "Monarch Butterflies at Santuario El Rosario. Monarch Butterfly Biosphere Reserve, Michoacan Mexico",
      descripcion:
        "Esta imagen, capturada en el Santuario El Rosario en Michoacán, muestra la mariposa monarca en su hábitat natural. La fotografía, tomada por Jaime Rojo quien lleva más de 20 años documentando la especie y ha sido portada de National Geographic acerca al espectador al corazón del hábitat de la mariposa monarca, resaltando la belleza y fragilidad de esta especie migratoria."
    },
    {
      src: "/assets/img14.png",
      titulo: "Vuelo colectivo de mariposas monarca",
      descripcion:
        "La imagen presenta un conjunto numeroso de mariposas monarca volando sobre un fondo uniforme, knowniendo apreciar sus siluetas en diferentes posiciones y direcciones. La distribución dispersa de los individuos evidencia un desplazamiento activo y simultáneo, característico de sus procesos migratorios. El contraste entre las mariposas y el entorno facilita la observación del movimiento colectivo. Esta escena representa un momento del recorrido migratorio de la especie. Asimismo, permite apreciar la magnitud y dinámica del vuelo grupal de las mariposas monarca."
    },
    {
      src: "/assets/img15.png",
      titulo: "Mariposa Monarca",
      descripcion:
        "En esta fotografia, decenas de mariposas monarca descansan entre los árboles, mientras una de ellas extiende sus alas y atrae la mirada. La imagen resalta la dimensión colectiva de su ciclo de vida, junto con la imagen siguiente, completa una visión integral de su proceso vital."
    },
    {
      src: "/assets/img16.png",
      titulo: "Tormenta invernal con los frentes fríos que durantes los dias 9 y 11 de marzo del 2016 provocaron granizo y vientos superiores a 80 km/h.",
      descripcion:
        "Esta fotografia muestra a numerosas mariposas monarca sobre un suelo nevado tras una intensa tormenta invernal. Sus colores apagados reflejan el impacto del clima extremo, revelando el lado más frágil y silencioso de su ciclo de vida, marcado por las duras condiciones ambientales."
    }
  ];

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* TEXTO SUPERIOR */}
        <div className={styles.texto}>
          <div className={styles.imagenContainer} style={{ textAlign: "left" }}>
            <h2>En la naturaleza</h2>
            <p>
              En este panel muestra los datos biologicos y ambientales relacionados con la mariposa monarca y su ecosistema, sus rutas migratorias, su localización dentro Mèxico y los planes que hay para su conservación y perservación.También explica su biología y ciclo de vida..
          
            </p>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className={styles.imagenContainer}>
          <img
            src="/assets/naturaleza.png"
            alt="En la naturaleza"
            className={styles.imagen}
          />
        </div>

        {/* TEXTO INTRODUCTORIO */}
        <div className={styles.contenidoFinal}>
          <h1 className={styles.tituloImpacto}>
            Origen y Ruta de la Mariposa Monarca
          </h1>
          <p>
            Interactua con las imágenes para descubrir más sobre el recorrido migratorio, la biología y los esfuerzos de conservación de la mariposa monarca en México. Cada elemento revela una parte esencial de su historia natural.
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
