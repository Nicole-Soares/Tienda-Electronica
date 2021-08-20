import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext/AppContext";
import "./Inicio.css";

function Inicio() {
  const [error, setError] = useState(false);
  const [registrar, setRegistrar] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(AppContext);
  const { username, setUsername } = useContext(AppContext);
  const { password, setPassword } = useContext(AppContext);
  const { email, setEmail } = useContext(AppContext);
  const { usernameRegistrar, setUsernameRegistrar } = useContext(AppContext);
  const { passwordRegistrar, setPasswordRegistrar } = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);

  const login = async () => {
    if (
      password.length < 6 ||
      password === "" ||
      username.length < 6 ||
      username === ""
    ) {
      setError(true);
    } else {
      setError(false);
      try {
        let peticion = await fetch("http://localhost:5000/login", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        let res = await peticion.json();
        setUser(res);
        setLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <button className="boton-desconectarse" onClick={logout}>
          Logout
        </button>
        <div>
          <div>
            <h3>Nicole</h3>
            <h3>2000</h3>
          </div>
          ) )
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-container centered">
        <div className={`card-login ${registrar ? "transparente" : ""}`}>
          <div className="inputContainer">
            <input
              className={`${error ? "hasError" : "otra"}`}
              autoComplete="off"
              placeholder="username"
              value={username}
              name="username"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <span className={`${error ? "visible" : ""} error`}>
              Verifica los datos, user no puede ser "username" o vacio
            </span>
          </div>
          <div className="inputContainer">
            <input
              className={`${error ? "hasError" : "otra"}`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              name="password"
              type="password"
            />
            <span className={`${error ? "visible" : ""} error`}>
              Verifica los datos, pass no puede ser "password" o vacio
            </span>
          </div>
          <button onClick={login} className="btn">
            Login
          </button>
          <button
            className="boton-registrarse"
            onClick={() => setRegistrar(!registrar)}
          >
            Registrarse
          </button>
        </div>
        <div className={`card-registrar ${registrar ? "visible" : " "}`}>
          <div className="inputContainer">
            <input
              className={`${error ? "hasError" : "otra"}`}
              autoComplete="off"
              placeholder="username"
              value={usernameRegistrar}
              name="username"
              type="text"
              onChange={(e) => {
                setUsernameRegistrar(e.target.value);
              }}
            />
            <span className={`${error ? "visible" : ""} error`}>
              Verifica los datos, user no puede ser "username" o vacio
            </span>
          </div>
          <div className="inputContainer">
            <input
              className={`${error ? "hasError" : "otra"}`}
              value={passwordRegistrar}
              onChange={(e) => {
                setPasswordRegistrar(e.target.value);
              }}
              placeholder="password"
              name="password"
              type="password"
            />
            <span className={`${error ? "visible" : ""} error`}>
              Verifica los datos, pass no puede ser "password" o vacio
            </span>
          </div>
          <div className="inputContainer">
            <input
              className={`${error ? "hasError" : "otra"}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
              name="email"
              type="email"
            />
            <span className={`${error ? "visible" : ""} error`}>
              Verifica los datos, pass no puede ser "password" o vacio
            </span>
          </div>
          <button className="btn">Registrarse</button>
          <button
            className="boton-volver"
            onClick={() => setRegistrar(!registrar)}
          >
            Volver
          </button>
        </div>
      </div>
    );
  }
}

export default Inicio;
