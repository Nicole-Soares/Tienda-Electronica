import React from "react";
import header from "../../imagenes/header.png";
import "./ImagenHeader.css";

export default function ImagenHeader() {
  return (
    <div className="contenedor-imagen">
      <img
        className="imagen"
        src={header}
        alt="imagen de cabecera"
        height="412px"
      />
      <div className="contenedor-titulo">
        <h3 className="titulo">Electronics</h3>
      </div>
    </div>
  );
}
