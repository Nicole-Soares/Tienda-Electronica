import React, { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import "./Monedas.css";
import useMonedas from "../Templates/customhooks/useMonedas";

export default function Monedas() {
  const { loggedIn } = useContext(AppContext);
  const { user } = useContext(AppContext);
  const {userPoints, setUserPoints} = useContext(AppContext);
  const { ingresarPuntos } = useMonedas();

  if (loggedIn) {
    return (
      <div className="contenedor-principal-monedas">
        <div className="monedas-disponibles">
          tus puntos disponibles:
          <h1 className="puntos-usuario"> {user.points}</h1>
        </div>
        <div>
          <h3 className="texto-advertencia">
            Podras elegir entre 1000, 5000 o 7500 points(solo podras hacerlo una
            vez por dia):
          </h3>
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
          >
            Enviar
          </button>
        </div>
      </div>
    );
  } else {
    return "tenes que ingresar para ver tus monedas disponibles";
  }
}
