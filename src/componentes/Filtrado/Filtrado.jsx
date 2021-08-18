import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

import "./Filtrado.css";

export default function Filtrado() {
  const { productos, setProductos } = useContext(AppContext);
  const { currentPage } = useContext(AppContext);
  const { productosTotales } = useContext(AppContext);
  const PER_PAGE = 16;

  const onChangePrecioElevado = () => {
    
    const nuevaLista = productosTotales.filter((item) => item.cost > 1000);
    return setProductos(nuevaLista);
  };

  const onChanguePrecioBarato = () => {
    
    const nuevaListaBarata = productosTotales.filter((item) => item.cost < 999);
    return setProductos(nuevaListaBarata);
  };

  const onChangueRecientes = () => {
    
    const nuevaListaRecientes = productosTotales.filter(
      (item) => item.category === "Phones" || item.category === "Audio"
    );
    return setProductos(nuevaListaRecientes);
  };

  return (
    <div className="contenedor-principal-filtrado">
      <div className="productos">
        <span>
          {" "}
          {Math.min(PER_PAGE * currentPage, productos.length)} de{" "}
          {productos.length} productos
        </span>
      </div>
      <div className="contenedor-filtros">
        <span className="sort">Sort by:</span>
        <button className="recent" onClick={onChangueRecientes}>
          Most recent
        </button>
        <button className="priceLow" onClick={onChanguePrecioBarato}>
          Lowest price
        </button>
        <button className="priceHig" onClick={onChangePrecioElevado}>
          Highest price
        </button>
      </div>

      <br></br>
    </div>
  );
}
