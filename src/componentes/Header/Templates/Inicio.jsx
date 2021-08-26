import React, { useContext, useState } from "react";
import imagen from "../../../imagenes/imagen-perfil.jpg"
import { AppContext } from "../../AppContext/AppContext";
import "./Inicio.css";
import useInicio from "../Templates/customhooks/useInicio";

function Inicio() {
  const { error } = useContext(AppContext);
  const [registrar, setRegistrar] = useState(false);
  const { loggedIn } = useContext(AppContext);
  const { username, setUsername } = useContext(AppContext);
  const { password, setPassword } = useContext(AppContext);
  const { email, setEmail } = useContext(AppContext);
  const { usernameRegistrar, setUsernameRegistrar } = useContext(AppContext);
  const { passwordRegistrar, setPasswordRegistrar } = useContext(AppContext);
  const { user } = useContext(AppContext);
  const { historial } = useContext(AppContext);
  const { login, logout, submit } = useInicio();
  const {mostrarHistorial} = useContext(AppContext)

  if (loggedIn) {
    return (
      <div className="fondo-perfil">
       
        <div>
          <img className="imagen-perfil-usuario"src={imagen} alt="imagen-perfil" width="80%"/>
        </div>
        <div>
          <div>
            <h3 className="usuario-nombre">{user.name}</h3>
            <h3 className="usuario-puntos">Points:{user.points}</h3>
            <h3 className="historial-usuario">
              Historial de points:
              {mostrarHistorial ? historial.length > 0
                ? historial.map((item) => {
                    return <h2>{`compro: ${item.name}`}</h2>;
                  })
                : "no hay historial por el momento" : ""}
            </h3>
            <button className="boton-historial" onClick={submit}>{`${mostrarHistorial ? "ocultar historial" : "mostrar historial"}`}</button>
          </div>
          <button className="boton-desconectarse" onClick={logout}>
          Logout
        </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-container centered">
        <div className={`card-login ${registrar ? "transparente" : ""}`}>
          <p>
            (el usuario y la contraseña pueden ser cualquiera (no dejar campos
            vacios), no esta conectado a una api que acepte recibir usuarios
            nuevos y el registrar es meramente estetico :))
          </p>
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
