import Navbar from "../components/Navbar";

export default function Visualizacion() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Visualización de Datos</h1>
        <p>Gráficas y estadísticas de la migración...</p>
      </div>

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
    </>
  );
}
