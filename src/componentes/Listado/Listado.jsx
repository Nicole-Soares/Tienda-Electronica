import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import "./Listado.css";
import { Box } from "@chakra-ui/react";
import { Pagination } from "@material-ui/lab";
import Producto from "../Producto/Producto";
import usePagination from "../Paginacion/Paginacion";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ";
let options = { headers: { Authorization: `Bearer ${token}` } };

export default function Listado() {
  const [loading, setLoading] = useState(false);
  const { productos, setProductos } = useContext(AppContext);

  async function obtenerProductos() {
    setLoading(true);
    try {
      let peticion = await fetch(
        "https://coding-challenge-api.aerolab.co/products",
        options
      );
      let res = await peticion.json();
      console.log(res);
      setProductos(res);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  useEffect(() => {
    
    obtenerProductos();
    
  }, []);

  let [page, setPage] = useState(0);
  const PER_PAGE = 16;

  const count = Math.ceil(productos.length / PER_PAGE);
  const _DATA = usePagination(productos, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box p="5">
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />

      <ul>
        {loading ? (
          "Loading"
        ) : productos.length > 0 ? (
          _DATA.currentData().map((item) => {
            return (
              <div className="listado">
                <Producto
                  key={item.id}
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
      </ul>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  );
}
