import InputText from "../../Reutilizables/InputText";
import { useState } from "react";
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
                <button onClick={validar_formulario}>Iniciar Sesión</button>

                <hr/>

                <a href="#">¿Olvidaste tu contraseaña?</a>

            </div>
        </div>

     );
}
 
export default LogginForm;