import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";

interface Props {
  onClose?: () => void; // Para cerrar el mapa desde el componente padre
}

const MapaConservacion = ({ onClose }: Props) => {
  const [minimizado, setMinimizado] = useState(false);
  const [maximizado, setMaximizado] = useState(false);

  useEffect(() => {
    const map = L.map("mapaConservacionLeaflet", {
      center: [23.5, -100],
      zoom: 4,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>',
    }).addTo(map);

    const puntos = [
      {
        coords: [19.6097, -100.2401],
        color: "#228B22",
        radius: 25,
        popup: `
          <b>Jardín Monarca - Michoacán</b><br>
          <b>Tipo:</b> Santuario<br>
          <b>Plantas sembradas:</b> 15,000<br>
          <b>Área:</b> 45.2 ha<br>
          <b>Año:</b> 2018<br>
          <b>Estado:</b> Activo
        `,
      },
      {
        coords: [29.7604, -95.3698],
        color: "#32CD32",
        radius: 17,
        popup: `
          <b>Corredor Verde Texas</b><br>
          <b>Tipo:</b> Corredor Verde<br>
          <b>Plantas sembradas:</b> 8500<br>
          <b>Área:</b> 23.8 ha<br>
          <b>Año:</b> 2019<br>
          <b>Estado:</b> Activo
        `,
      },
      {
        coords: [34.0522, -118.2437],
        color: "#90EE90",
        radius: 15,
        popup: `
          <b>Jardín Comunitario Los Ángeles</b><br>
          <b>Tipo:</b> Jardín Comunitario<br>
          <b>Plantas sembradas:</b> 4200<br>
          <b>Área:</b> 12.5 ha<br>
          <b>Año:</b> 2020<br>
          <b>Estado:</b> Activo
        `,
      },
      {
        coords: [21.1619, -86.8515],
        color: "#006400",
        radius: 18,
        popup: `
          <b>Reserva Natural Cancún</b><br>
          <b>Tipo:</b> Reserva Natural<br>
          <b>Plantas sembradas:</b> 6500<br>
          <b>Área:</b> 28.7 ha<br>
          <b>Año:</b> 2017<br>
          <b>Estado:</b> Activo
        `,
      },
      {
        coords: [41.8781, -87.6298],
        color: "#ADFF2F",
        radius: 12,
        popup: `
          <b>Proyecto Milkweed Chicago</b><br>
          <b>Tipo:</b> Milkweed<br>
          <b>Plantas sembradas:</b> 2300<br>
          <b>Área:</b> 8.9 ha<br>
          <b>Año:</b> 2021<br>
          <b>Estado:</b> Activo
        `,
      },
    ];

    puntos.forEach((p) =>
      L.circleMarker(p.coords, {
        color: p.color,
        fillColor: p.color,
        fillOpacity: 0.8,
        radius: p.radius,
        weight: 2,
      })
        .addTo(map)
        .bindPopup(p.popup)
    );

    return () => map.remove();
  }, []);

  return (
    <div
      style={{
        position: maximizado ? "fixed" : "relative",
        top: maximizado ? 0 : "auto",
        left: maximizado ? 0 : "auto",
        width: maximizado ? "100vw" : "100%",
        height: maximizado ? "100vh" : minimizado ? "60px" : "90vh",
        background: "white",
        zIndex: 99999,
        border: "2px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      {/* Controles del mapa */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          gap: "8px",
          zIndex: 9999,
        }}
      >
        {/* Minimizar */}
        <button
          onClick={() => setMinimizado(!minimizado)}
          style={{ padding: "6px 10px", cursor: "pointer" }}
        >
          {minimizado ? "🔼" : "🔽"}
        </button>

        {/* Maximizar */}
        <button
          onClick={() => setMaximizado(!maximizado)}
          style={{ padding: "6px 10px", cursor: "pointer" }}
        >
          {maximizado ? "⛶" : "⬜"}
        </button>

        {/* Cerrar */}
        <button
          onClick={onClose}
          style={{ padding: "6px 10px", cursor: "pointer", background: "red", color: "white" }}
        >
          ✖
        </button>
      </div>

      {/* Contenedor del mapa */}
      {!minimizado && (
        <>
          <div id="mapaConservacionLeaflet" style={{ width: "100%", height: "100%" }}></div>

          {/* Leyenda */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "30px",
              width: "230px",
              backgroundColor: "white",
              border: "2px solid grey",
              padding: "10px",
              borderRadius: "6px",
              fontSize: "12px",
            }}
          >
            <b>Iniciativas de Conservación</b>
            <p><span style={{ color: "#228B22" }}>●</span> Santuarios</p>
            <p><span style={{ color: "#32CD32" }}>●</span> Corredores Verdes</p>
            <p><span style={{ color: "#90EE90" }}>●</span> Jardines Comunitarios</p>
            <p><span style={{ color: "#006400" }}>●</span> Reservas Naturales</p>
            <p><span style={{ color: "#ADFF2F" }}>●</span> Milkweed</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MapaConservacion;
