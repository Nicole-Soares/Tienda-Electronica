import React from "react";
import arrow from "../../imagenes-filtrado/arrow-left.svg"
import arrowR from "../../imagenes-filtrado/arrow_right.svg"
import "./Filtrado.css"

export default function Filtrado () {
    return (
        <div className="contenedor-principal">
          <div>
              <span>16 of 32 products</span>
              <span>Sort by:</span>
              <button>Most recent</button>
              <button>Lowest price</button>
              <button>Highest price</button>
              <div>
                  <img href={arrow} alt="flecha-atras"/>
                  <img href= {arrowR} alt="flecha-siguiente"/>
              </div>
          </div>
          <br></br>
        </div>
    )
}