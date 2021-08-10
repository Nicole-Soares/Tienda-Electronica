import './App.css';
import AppProvider from './componentes/AppContext/AppContext';
import Header from "./componentes/Header/Header"
import Filtrado from "./componentes/Filtrado/Filtrado"
import Listado from "./componentes/Listado/Listado"

function App() {
  return (
    <AppProvider>
    <div className="App">
   <Header/>
   <Filtrado />
   <Listado />
         
    </div>
    </AppProvider>
  );
}

export default App;
