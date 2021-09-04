import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";

export default function useFiltros() {
  const { setProductos } = useContext(AppContext);

  const { productosTotales } = useContext(AppContext);
  

  const onChangePrecioElevado = () => {
    const nuevaLista = productosTotales.filter((item) => item.cost > 1000);
    return setProductos(nuevaLista);
  };

  const onChanguePrecioBarato = () => {
    const nuevaListaBarata = productosTotales.filter((item) => item.cost < 999);
    return setProductos(nuevaListaBarata);
  };

  const onChangueRecientes = () => {
    const nuevaListaRecientes = productosTotales.filter(
      (item) => item.category === "Phones" || item.category === "Audio"
    );
    
    return setProductos(nuevaListaRecientes);
  };

  const onChangueDeleteFilter = () => {
     
    return setProductos(productosTotales)
  }

  return { onChangePrecioElevado, onChanguePrecioBarato, onChangueRecientes, onChangueDeleteFilter };
}
