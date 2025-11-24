import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/">Inicio</Link>
        <Link to="/atlas">Atlas</Link>
        <Link to="/migracion">Migraciónes</Link>
        <Link to="/visualizacion">Visualización</Link>
      </div>

      {/* BOTÓN DE MODO OSCURO/CLARO */}
      <button onClick={toggleTheme} className={styles.themeButton}>
        {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
      </button>
    </nav>
  );
}
