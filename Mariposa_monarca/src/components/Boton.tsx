import React from "react";

interface BotonProps {
  texto: string;
  onClick?: () => void;
}

export default function Boton({ texto, onClick }: BotonProps) {
  const estiloBase: React.CSSProperties = {
    marginTop: "1.5rem",
    padding: "0.8rem 2rem",
    backgroundColor: "#f97316",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#d65b0e";
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#f97316";
    e.currentTarget.style.transform = "scale(1)";
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#d65b0e";
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#f97316";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <button
      style={estiloBase}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {texto}
    </button>
  );
}
