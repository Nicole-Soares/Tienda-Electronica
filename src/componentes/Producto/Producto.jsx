import React from "react";
 import "./Producto.css";

export default function Producto (props) {
    return(
       <div className="contenedor-principal">
          
       <div className="imagen">
       <img src={props.imagen} alt="producto"/>
       </div>
       <div className="descripcion">
           <h4>{props.categoria}</h4>
           <h3>{props.nombre}</h3>
       </div>
       <div className="transparente">
           <h3>{props.precio}</h3>
       </div>
       
       </div>
    )
}