import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bienvenida from "./components/Bienvenida";
import Migracion from "./components/Migracion";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bienvenida />
      <Migracion />
      <footer
        style={{
          background: "darkorange",
          color: "white",
          padding: "20px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        © 2025 Mariposa Monarca. Todos los derechos reservados.
      </footer>
    </div>
  );
}
