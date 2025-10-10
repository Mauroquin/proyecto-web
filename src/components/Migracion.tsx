import styles from "../styles/Migracion.module.css";
import migracionImage from "../assets/migracion.png";
export default function Migracion() {
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
        <button
          style={{
            marginTop: "1.5rem",
            padding: "0.8rem 2rem",
            backgroundColor: "#f97316",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#d65b0e";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f97316";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.backgroundColor = "#d65b0e";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.backgroundColor = "#f97316";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Explorar
        </button>
        
      </div>
    </section>
  );
}
