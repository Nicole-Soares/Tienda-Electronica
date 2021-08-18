import "./App.css";
import AppProvider from "./componentes/AppContext/AppContext";
import Header from "./componentes/Header/Header";
import Filtrado from "./componentes/Filtrado/Filtrado";
import Listado from "./componentes/Listado/Listado";
import ImagenHeader from "./componentes/ImagenHeader/ImagenHeader";
import Main from "./componentes/Main/Main"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
      <div className="App">
        <Header />
        <Main/>
      </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
