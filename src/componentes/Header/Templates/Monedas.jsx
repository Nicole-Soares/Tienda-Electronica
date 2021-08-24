import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../AppContext/AppContext";
import "./Monedas.css"

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ";

export default function Monedas() {
  const { loggedIn } = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);
  const [userPoints, setUserPoints] = useState(0);

  async function ingresarPuntos() {
    console.log(typeof(userPoints))
    if (userPoints === 1000 || userPoints === 5000 || userPoints === 7500) {
      try {
        console.log("hola")
        let peticion = await fetch(
          "https://coding-challenge-api.aerolab.co/user/points",
          {
            method: "POST",
            body: JSON.stringify({
              amount: userPoints,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let res = await peticion.json();
        setUser({points: user.points + userPoints, ...user})
        
      } catch (error) {
        console.error(error);
      }
    } else {
      return "no es valida esa cantidad de points";
    }
  }

  if (loggedIn) {
    return (
      <div>
        <div>
          tus monedas disponibles:
          <h1> {user.points}</h1>
        </div>
        <div>
          <h3>Podras elegir entre 1000, 5000 o 7500 points:</h3>
        </div>
        <div>
          <input
           className="input-monto"
            type="number"
            id="barra"
            onChange={(e) => setUserPoints(e.target.valueAsNumber)}
            value={userPoints}
            placeholder="ingresa el monto"
          ></input>
          <button
            className="boton-busqueda"
            type="button"
            onClick={ingresarPuntos}
          >Enviar</button>
        </div>
      </div>
    );
  } else {
    return "tenes que ingresar para ver tus monedas disponibles";
  }
}
