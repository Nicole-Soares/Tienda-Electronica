import React from "react";
import "./Producto.css";

export default function Producto(props) {
  return (
    <div className="contenedor-principal">
      <div className="producto">
        <div className="imagen">
          <img src={props.imagen} width="100%" alt="producto" />
        </div>
        <div className="descripcion">
          <h4>{props.categoria}</h4>
          <h3>{props.nombre}</h3>
        </div>
        <div className="transparente">
          <div className="precio-moneda">
            <h3 className="precio">{props.precio}</h3>
            <div className="circulo-precio"></div>
          </div>
          <div>
            <button className="boton-comprar">Redeem now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
