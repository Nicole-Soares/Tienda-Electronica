import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [precioAlto, setPrecioAlto] = useState([]);
  const [productosTotales, setProductosTotales] = useState([]);
  const [registrar, setRegistrar] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameRegistrar, setUsernameRegistrar] = useState("");
  const [passwordRegistrar, setPasswordRegistrar] = useState("");
  const [loggedIn, setLoggedIn]  = useState(false);
  const [user, setUser] = useState (null)

  return (
    <AppContext.Provider
      value={{
        productos,
        setProductos,
        currentPage,
        setCurrentPage,
        precioAlto,
        setPrecioAlto,
        productosTotales,
        setProductosTotales,
        registrar,
        setRegistrar,
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        usernameRegistrar,
        setUsernameRegistrar,
        passwordRegistrar,
        setPasswordRegistrar,
        loggedIn, 
        setLoggedIn,
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
