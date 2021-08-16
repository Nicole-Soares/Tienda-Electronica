import React, {createContext, useState} from "react"

export const AppContext = createContext();

export default function AppProvider ({children})  {
    const [productos, setProductos] = useState ([]);

    return(
        <AppContext.Provider value = {{productos, setProductos}} >
            {children}
        </AppContext.Provider>
    );
};
