import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext/AppContext";
import "./Listado.css";
import { Pagination } from "@material-ui/lab";
import Producto from "../Producto/Producto";
import usePagination from "./customhooks/Paginacion/Paginacion";
import useListado from "./customhooks/Listado/useListado";

export default function Listado() {
  const { loading } = useContext(AppContext);
  const { productos } = useContext(AppContext);
  const { currentPage, setCurrentPage } = useContext(AppContext);
  const { obtenerProductos } = useListado();

  const PER_PAGE = 16;

  const count = Math.ceil(productos.length / PER_PAGE);

  const _DATA = usePagination(productos, PER_PAGE);

  const handleChange = (e, p) => {
    setCurrentPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="contenedor-de-lstado-paginacion">
      <Pagination
        count={count}
        size="large"
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        key="holaS"
      />

      <div className="grilla">
        {loading ? (
          "Loading"
        ) : productos.length > 0 ? (
          _DATA.currentData().map((item) => {
            return (
              <div key={item._id}className="listado">
                <Producto
                  key={item._id}
                  imagen={item.img.url}
                  nombre={item.name}
                  precio={item.cost}
                  categoria={item.category}
                />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>

      <Pagination
        count={count}
        size="large"
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        key="hola"
      />
    </div>
  );
}
