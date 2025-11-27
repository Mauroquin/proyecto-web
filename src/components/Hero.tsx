import mariposaImg from "../assets/mariposa.png";
import styles from "../styles/Hero.module.css";
import Boton from "../components/Boton";

export default function Hero() {
  return (
    


    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${mariposaImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color: "white",
        position: "relative",
      }}
    >
      {/* Overlay oscuro para mejor contraste */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Contenido sobre la imagen */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "left", // Changed from "center" to "left"
          top: "10%", // Adjusted from 40% to 20% to move the content up
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#f97320", lineHeight: "1.2" }}>
          DESCUBRE LA MARIPOSA MONARCA <br /> EN ARTE DIGITAL
        </h1>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem", maxWidth: "600px", color: "white", textAlign: "left" }}>
          Bienvenido a nuestra galeria de arte digital, donde exploramos la fascinante vida de la mariposa monarca a través de visualizaciones interactivas. Sumérgete en un viaje educativo que combina arte y ciencia, destacando la importacia de esta especie en nuestro ecosistema.
        </p>
        <Boton texto="Explorar" onClick={() => alert("Explorando...")} />
      </div>
    </section>
  );
}
