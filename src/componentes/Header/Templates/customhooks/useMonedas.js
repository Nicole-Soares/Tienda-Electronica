import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ";

export default function useMonedas() {
  const { user, setUser } = useContext(AppContext);
  const {userPoints} = useContext(AppContext);
  const {contador, setContador} = useContext(AppContext);

  async function ingresarPuntos() {
    if (contador === 1) {
      return window.alert("ya realizaste el ingreso de puntos por hoy");
    } else {
      if (userPoints === 1000 || userPoints === 5000 || userPoints === 7500) {
        try {
          setContador(1);
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
          console.log(res)
          setUser({ ...user, points: user.points + userPoints });
        } catch (error) {
          console.error(error);
        }
      } else {
        return window.alert("no es valida esa cantidad de puntos");
      }
    }
  }
  return { ingresarPuntos };
}
