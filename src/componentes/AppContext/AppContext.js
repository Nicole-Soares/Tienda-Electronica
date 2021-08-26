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
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [historial, setHistorial] = useState("");
  const [userPoints, setUserPoints] = useState(0);
  const [contador, setContador] = useState(0);
  const [loading, setLoading] = useState(false);
  const [mostrarHistorial, setMostrarHistorial] = useState(false)

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
        setUser,
        error,
        setError,
        historial,
        setHistorial,
        userPoints, setUserPoints,
        contador, setContador,
        loading, setLoading,
        mostrarHistorial, setMostrarHistorial
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
