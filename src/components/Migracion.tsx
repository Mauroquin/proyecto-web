import styles from "../styles/Migracion.module.css";
import migracionImage from "../assets/migracion.png";
import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";


export default function Migracion() {
  const navigate = useNavigate();
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(${migracionImage})`,
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
          textAlign: "center", // Changed from "center" to "left"
          top: "30%", // Adjusted from 40% to 20% to move the content up
        }}
      className={styles.container}>
        <h1>MIGRACIÓN</h1>
        <p style={{ fontSize: "1.2rem", color: "white", maxWidth: "600px", margin: "0 auto" }}>
          La mariposa monarca y los humanos migran en Norteamérica buscando mejores condiciones. Las mariposas migran a México por instinto biológico, los humanos por razones socioeconómicas. Ambas demuestran resiliencia y conexión territorial.
        </p>
        <Boton texto="Explorar" onClick={() => navigate("/migracion")} />
        
      </div>
    </section>
  );
}
