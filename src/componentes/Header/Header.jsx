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
        <Link to="/home">
          <li className="nav-item">
            <img src={aerolab} alt="logo" />
          </li>
          </Link>
          <Link to="/iniciarsesion">
            <li className="nav-item">iniciar sesion</li>
          </Link>
          <Link to="/monedas">
            <li className="nav-item">
              6000<div className="circulo"></div>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
