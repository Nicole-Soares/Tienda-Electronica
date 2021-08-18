import React, {useState} from "react";
import "./Inicio.css"

export default function Inicio() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleInputChangeDos = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "username" || username === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  console.log(password.length);

  const handlePass = (e) => {
    e.preventDefault();

    if (password.length < 6 || password === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="flex-container centered">
      <div className="card ">
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input
              className={`${error ? "hasError" : "otra"}`}
              autoComplete="off"
              placeholder="username"
              value={username}
              name="username"
              type="text"
              onChange={handleInputChange}
            />
            <span className={`${error ? "visible" : ""} error`}>
              Verifica los datos, user no puede ser "username" o vacio
            </span>
          </div>
          <div className="inputContainer">
            <input
              className={`${error ? "hasError" : "otra"}`}
              value={password}
              onChange={handleInputChangeDos}
              placeholder="password"
              name="password"
              type="password"
            />
            <span className={`${error ? "visible" : ""} error`}>
              Verifica los datos, pass no puede ser "password" o vacio
            </span>
          </div>
          <button onClick={handlePass} className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
