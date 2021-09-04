import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ";


export default function useInicio() {
  const { username } = useContext(AppContext);
  const { password } = useContext(AppContext);
  const { setLoggedIn } = useContext(AppContext);
  const { setUser } = useContext(AppContext);
  const { setError } = useContext(AppContext);
  const { setHistorial } = useContext(AppContext);
  const { mostrarHistorial,setMostrarHistorial} = useContext(AppContext)

  const login = async () => {
    if (password === "" || username === "") {
      setError(true);
    } else {
      setError(false);
      try {
        let peticion = await fetch(
          "https://coding-challenge-api.aerolab.co/user/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        let res = await peticion.json();
        setUser(res);
        setLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const submit = async () => {
    setMostrarHistorial(!mostrarHistorial)
    try {
      let peticion = await fetch(
        "https://coding-challenge-api.aerolab.co/user/history",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      let res = await peticion.json();
      
      setHistorial(res);
    } catch (error) {
      console.log(error);
    }
  };
  return { login, logout, submit };
}
