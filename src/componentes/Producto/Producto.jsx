import React, { useContext } from "react";
import "./Producto.css";
import { AppContext } from "../AppContext/AppContext";
import buy from "../../imagenes/buy-blue.svg";



export default function Producto(props) {
  const { user, setUser, loggedIn } = useContext(AppContext);
  



  const submit = () =>{
    if(user.points >= props.precio){
      setUser({...user,
      points:user.points - props.precio})
      window.alert("transaccion exitosa!")
    }
    else{
      window.alert("La transaccion no se puede hacer")
    }
    
  }

  

  return (
    <div className={"contenedor-principal"}>
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
            {!loggedIn ? (
              <img src={buy} alt="bolsa compra"></img>
            ) : user.points === props.precio || user.points> props.precio ? (
              <button className="boton-comprar" onClick={submit} >
                Redeem Now
              </button>
            ) : (
              <p>you need {props.precio - user.points}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
