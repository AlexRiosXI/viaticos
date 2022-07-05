import InputText from "../../Reutilizables/InputText";
import { useState } from "react";
import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
import axios from "axios";
import ErrorForm from "../../Reutilizables/ErrorForm";
const LogginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({
    IDEmpleado: "",
    EmailEmpleado: "",
    Password: "",
    Error: 0,
    ErrorType: "",
  });
  const try_apy = () => {
    console.log("funciona");
    axios
      .get(`http://localhost:5000/prueba?id=${email}&password=${password}`)
      .then((res) => {
        const data = res.data;
        setUserData(data);

        if (data.Error === 0) {
            localStorage.setItem("userId",data.IDEmpleado)
            obtener_nombre_empleado()
          setLogged(true);
        }
      });
  };

  const obtener_nombre_empleado = async () => {
    const id_empleado = localStorage.getItem("userId");
    const res = await axios(`http://localhost:5000/navbar?id=${id_empleado}`);
    localStorage.setItem("user_name",res.data.IDEmpleado)
  }



  const [usuario, setUsuario] = useState("");
  const validar_formulario = () => {
    console.log("sjala");
  };
  return (
    <div className="loggin-form">
      <div className="form-container">
        <h1>Inicia Sesión</h1>
        <p className="descripcion">
          Utiliza tu correo institucional y la contraseña que te proporcionó el
          departamento de sistemas
        </p>
        {userData.Error !== 0 ? <ErrorForm msg={userData.ErrorType} /> : null}
        <div className="input-text">
          <p className="tag">Correo Electrónico</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@fideapech.com"
          />
        </div>

        <div className="input-text">
          <p className="tag">Contraseña</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Al menos 8 caracteres"
          />
        </div>

        <button onClick={try_apy}>Iniciar Sesión</button>
        {logged  ? <Navigate to="/Home" /> : null}
        <hr />

        <a href="#">¿Olvidaste tu contraseaña?</a>
      </div>
    </div>
  );
};

export default LogginForm;
