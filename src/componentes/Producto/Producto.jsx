import React, { useContext } from "react";
import "./Producto.css";
import { AppContext } from "../AppContext/AppContext";
import buy from "../../imagenes/buy-blue.svg";
import token from "../../variables/token";



export default function Producto(props) {
  const { user, setUser, loggedIn } = useContext(AppContext);

  async function submit() {
    if (user.points >= props.precio) {
      setUser({ ...user, points: user.points - props.precio });
      window.alert("transaccion exitosa!");

      try {
        let peticion = await fetch(
          "https://coding-challenge-api.aerolab.co/redeem",
          {
            method: "POST",
            body: JSON.stringify({
            productId: props.id,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let res = await peticion.json();
        console.log(res)
      } catch (error) {
        console.error(error);
      }

    } else {
      window.alert("La transaccion no se puede hacer");
    }
  }

  return (
    <div className={"contenedor-principal"} >
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
            ) : user.points === props.precio || user.points > props.precio ? (
              <button className="boton-comprar" onClick={submit}>
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
