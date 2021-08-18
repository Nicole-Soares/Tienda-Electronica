import React from "react";

import aerolab from "../../imagenes/aerolab-logo.svg";
import Inicio from "./Templates/Inicio";

import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <Link to="/tienda-electronica">
            <div className="contenedor-logo">
              <li className="nav-item">
                <img src={aerolab} alt="logo" />
              </li>
            </div>
          </Link>
          <div className="contenedor-sesion-moneda">
            <div className="contenedor-sesion">
              <Link to="/iniciarsesion">
                <li className="nav-item-sesion">iniciar sesion</li>
              </Link>
            </div>
            <div className="contenedor-moneda">
              <Link to="/monedas">
                <div className="numero">
                <li className="nav-item-monedas">
                  6000
                </li>
                </div>
                <div className="moneda">
                <div className="circulo"></div>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}
