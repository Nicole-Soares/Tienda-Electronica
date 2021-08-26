import { useContext} from "react";
import { AppContext } from "../../../AppContext/AppContext";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ";
let options = { headers: { Authorization: `Bearer ${token}` } };

export default function useListado() {
  const { setLoading } = useContext(AppContext);
  const { setProductos } = useContext(AppContext);
  const { setProductosTotales } = useContext(AppContext);

  async function obtenerProductos() {
    setLoading(true);
    try {
      let peticion = await fetch(
        "https://coding-challenge-api.aerolab.co/products",
        options
      );
      let res = await peticion.json();
      console.log(res);
      setProductosTotales(res);
      setProductos(res);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

 

  return{obtenerProductos}
}
