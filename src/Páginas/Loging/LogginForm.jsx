import InputText from "../../Reutilizables/InputText";
import { useState } from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";

const LogginForm = () => {
    const [usuario,setUsuario] = useState("");
    const validar_formulario = () => {
        console.log("sjala")
    };
    return ( 

        <div className='loggin-form'>
            <div className="form-container">
                <h1>Inicia Sesión</h1>
                <p className="descripcion">Utiliza tu correo institucional y la contraseña que te proporcionó el departamento de sistemas</p>

                <InputText tag="Correo Electrónico" pholder="ejemplo@fideapech.com"/>
                <InputText type="password" tag="Contraseña" pholder="Al menos 8 caracteres"/>
                <Link to="/Home">
                <button onClick={validar_formulario}>Iniciar Sesión</button>
                </Link>
                <hr/>

                <a href="#">¿Olvidaste tu contraseaña?</a>

            </div>
        </div>

     );
}
 
export default LogginForm;