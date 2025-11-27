import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  
 

  

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/">Inicio</Link>
        <Link to="/atlas">Atlas</Link>
        <Link to="/migracion">Migraciónes</Link>
        <Link to="/visualizacion">Visualización</Link>
      </div>

      
    </nav>
  );
}
