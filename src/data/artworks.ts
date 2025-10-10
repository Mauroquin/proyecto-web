export interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Migración de la Mariposa Monarca",
    description:
      "Una representación visual del viaje migratorio de la mariposa monarca desde Canadá hasta México.",
    image: "/mariposa.jpg.png", // asegúrate que el archivo exista en /public o /src/assets
  },
  {
    id: 2,
    title: "Ciclo de Vida",
    description:
      "Ilustración del ciclo de vida de la mariposa monarca desde huevo hasta adulto.",
    image: "/react.svg", // ejemplo, puedes poner otra imagen
  },
  {
    id: 3,
    title: "Hábitat Natural",
    description:
      "Obra que retrata el hábitat natural de las mariposas monarca en los bosques de Michoacán.",
    image: "/vite.svg",
  },
];
