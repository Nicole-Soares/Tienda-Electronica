import React from "react";
import flechaI from "../../imagenes-filtrado/arrow-left.svg"
import flechaD from "../../imagenes-filtrado/arrow-right.svg"

import "./Filtrado.css"

export default function Filtrado () {
    return (
        <div className="contenedor-principal">
          <div className="productos">
              <span>16 of 32 products</span>
              </div>
              <div className="contenedor-filtros">
              <span className="sort">Sort by:</span>
              
              <button className="recent">Most recent</button>
              
              
              <button className="priceLow">Lowest price</button>
              <button className="priceHig">Highest price</button>
              </div>
              <div className="contenedor-flechas">
                  <img height="48px"src={flechaI} alt="flecha-izquierda"/>
                  <img height = "48px"src={flechaD} alt="flecha-derecha" />
                  
              </div>
          
          <br></br>
        </div>
    )
}