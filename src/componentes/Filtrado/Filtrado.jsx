import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import "./Filtrado.css";
import useFiltros from "./customhooks/useFiltros";
import { useState } from "react";
import descarga from "../../imagenes/descarga.png";

export default function Filtrado() {
  const { productos } = useContext(AppContext);
  const { currentPage } = useContext(AppContext);
  const [hamburguesa, setHamburguesa] = useState(false);

  const PER_PAGE = 16;
  const { onChangueRecientes, onChanguePrecioBarato, onChangePrecioElevado, onChangueDeleteFilter} =
    useFiltros();

  const submit = () => {
    setHamburguesa(!hamburguesa);
  };

  return (
    <div className="contenedor-principal-filtrado">
      <div className="mobile-menu">
        <label htmlFor="navi-toggle" className="navigation-button">
          <img src={descarga} alt="" width="30px" />
        </label>
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation-checkbox"
          onClick={submit}
        />
        <div className={`menu-list-mobile ${hamburguesa ? "visible" : ""}`}>
          <button
            className="menu-list-mobile-item"
            onClick={onChangueRecientes}
          >
            Most recent
          </button>
          <button
            className="menu-list-mobile-item"
            onClick={onChanguePrecioBarato}
          >
            Lowest price
          </button>
          <button
            className="menu-list-mobile-item"
            onClick={onChangePrecioElevado}
          >
            Highest price
          </button>
        </div>
      </div>
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
        <button className="deleteFil" onClick={onChangueDeleteFilter} >
          Delete Filters
        </button>
      </div>
    </div>
  );
}
