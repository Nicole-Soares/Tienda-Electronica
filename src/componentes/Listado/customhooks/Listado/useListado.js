import { useContext} from "react";
import { AppContext } from "../../../AppContext/AppContext";
import token from "../../../../variables/token"

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
      
      setProductosTotales(res);
      setProductos(res);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

 

  return{obtenerProductos}
}
