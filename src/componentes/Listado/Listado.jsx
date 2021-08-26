import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import "./Listado.css";

import { Pagination } from "@material-ui/lab";
import Producto from "../Producto/Producto";
import usePagination from "../Paginacion/Paginacion";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ";
let options = { headers: { Authorization: `Bearer ${token}` } };

export default function Listado() {
  const [loading, setLoading] = useState(false);
  const { productos, setProductos } = useContext(AppContext);
  const { currentPage, setCurrentPage} = useContext(AppContext);
  const { setProductosTotales} = useContext(AppContext);

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
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  
  const PER_PAGE = 16;

  const count = Math.ceil(productos.length / PER_PAGE);

  const _DATA = usePagination(productos, PER_PAGE);

  const handleChange = ( p) => {
    setCurrentPage(p);
    _DATA.jump(p);
    
  };

  return (
    <div className="contenedor-de-todo">
      <Pagination
        count={count}
        size="large"
        page={ currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />

      <div className="grilla">
        {loading ? (
          "Loading"
        ) : productos.length > 0 ? (
          _DATA.currentData().map((item) => {
            return (
              <div className="listado">
                <Producto
                  key={item._id}
                  id={item._id}
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
        )
      </div>

      <Pagination
        count={count}
        size="large"
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
}
