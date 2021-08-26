import React from "react";
import { Route, Switch } from "react-router-dom";
import Filtrado from "../Filtrado/Filtrado";
import Listado from "../Listado/Listado";
import ImagenHeader from "../ImagenHeader/ImagenHeader";
import Inicio from "../Header/Templates/Inicio";
import Monedas from "../Header/Templates/Monedas";
import "./Main.css"

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route path="/tienda-electronica">
          <ImagenHeader />
          <Filtrado />
          <Listado />
        </Route>
        <Route path="/iniciarsesion">
          <Inicio />
        </Route>
        <Route path="/monedas" component={Monedas} />
      </Switch>
    </main>
  );
}

export default Main;
