import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface PuntoMapa {
    coords: [number, number];
    color: string;
    radius: number;
    nombre: string;
    tipo: string;
    plantas: number;
    area: string;
    anio: number;
    estado: string;
}

const MapaConservacion: React.FC = () => {

    useEffect(() => {
        // ---- CORRECCIÓN IMPORTANTE ----
        // Si existe un mapa previo, destrúyelo antes de crear uno nuevo
        const existingMap = (L as any).map?._instances?.["map_conservacion"];
        if (existingMap) {
            existingMap.remove();
        }

        // Crear mapa DESPUÉS de un ciclo de render
        const timeout = setTimeout(() => {
            const map = L.map("map_conservacion", {
                center: [35, -95],
                zoom: 4,
            });

            L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
                attribution: "© OpenStreetMap contributors © CARTO",
                subdomains: "abcd",
            }).addTo(map);

            const puntos: PuntoMapa[] = [
                { coords: [19.6097, -100.2401], color: "#228B22", radius: 25, nombre: "Jardín Monarca - Michoacán", tipo: "Santuario", plantas: 15000, area: "45.2 hectáreas", anio: 2018, estado: "Activo" },
                { coords: [29.7604, -95.3698], color: "#32CD32", radius: 17, nombre: "Corredor Verde Texas", tipo: "Corredor Verde", plantas: 8500, area: "23.8 hectáreas", anio: 2019, estado: "Activo" },
            ];

            puntos.forEach((p) => {
                const marker = L.circleMarker(p.coords, {
                    color: p.color,
                    fillColor: p.color,
                    fillOpacity: 0.8,
                    radius: p.radius,
                    weight: 2
                }).addTo(map);

                marker.bindPopup(`
                    <b>${p.nombre}</b><br>
                    Tipo: ${p.tipo}<br>
                    Plantas: ${p.plantas}<br>
                    Área: ${p.area}<br>
                    Año: ${p.anio}<br>
                    Estado: ${p.estado}
                `);
            });
        }, 100); // pequeño delay → React ya montó el div

        return () => clearTimeout(timeout);

    }, []);

    return (
        <div style={{ width: "100%", height: "80vh" }}>
            <div id="map_conservacion" style={{ width: "100%", height: "100%" }}></div>
        </div>
    );
};

export default MapaConservacion;
