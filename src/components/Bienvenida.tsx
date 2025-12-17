import styles from "../styles/Bienvenida.module.css";
import { useNavigate } from "react-router-dom";
import Boton from "../components/Boton";

export default function Bienvenida() {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 style={{ color: "white" }}>Bienvenido</h2>
        <h1 style={{ color: "white" }} >GALERÍA MARIPOSA MONARCA</h1>
        <p style={{ fontSize: "1.2rem", color: "white", maxWidth: "600px", margin: "0 auto" }}>
          Descubre la belleza y el ciclo de vida de la mariposa monarca en nuestra galería interactiva
        </p>
         
        
        <Boton texto="Descubrir" onClick={() => navigate("/ciclo-de-vida")} />
      
      </div>
    </section>
  );
}
