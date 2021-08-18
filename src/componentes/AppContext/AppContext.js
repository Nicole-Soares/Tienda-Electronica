import React, {createContext, useState} from "react"

export const AppContext = createContext();

export default function AppProvider ({children})  {
    const [productos, setProductos] = useState ([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [precioAlto, setPrecioAlto] = useState([]);
    

    return(
        <AppContext.Provider value = {{productos, setProductos, currentPage, setCurrentPage, precioAlto, setPrecioAlto}} >
            {children}
        </AppContext.Provider>
    );
};
