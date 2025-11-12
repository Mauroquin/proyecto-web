import styles from "../styles/Bienvenida.module.css";

export default function Bienvenida() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 style={{ color: "white" }}>Bienvenido</h2>
        <h1 style={{ color: "white" }} >GALERÍA MARIPOSA MONARCA</h1>
        <p style={{ fontSize: "1.2rem", color: "white", maxWidth: "600px", margin: "0 auto" }}>
          Descubre la belleza y el ciclo de vida de la mariposa monarca en nuestra galería interactiva
        </p>
         <button
          style={{
            marginTop: "1.5rem",
            padding: "0.8rem 2rem",
            backgroundColor: "darkorange",
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
            e.currentTarget.style.backgroundColor = "darkorange";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.backgroundColor = "#d65b0e";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.backgroundColor = "darkorange";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Descubrir
        </button>
      
      </div>
    </section>
  );
}
