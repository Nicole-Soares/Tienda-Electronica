import React from "react";
import header from "../../imagenes/header.png";
import aerolab from "../../imagenes/aerolab-logo.svg";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="contenedor-icono-nombre-monedas">
        <div className="contendor-icono">
          <img className="logo" src={aerolab} alt="logo" />
        </div>
        <div className="contenedor-botones">
          <button className="boton-iniciar">Iniciar sesion</button>
          <button className="boton-monedas">
            6000<div className="circulo"></div>
          </button>
        </div>
      </div>
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
    </div>
  );
}
