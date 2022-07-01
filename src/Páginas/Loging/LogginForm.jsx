import InputText from "../../Reutilizables/InputText";

const LogginForm = () => {
    return ( 

        <div className='loggin-form'>
            <div className="form-container">
                <h1>Inicia Sesión</h1>
                <p className="descripcion">Utiliza tu correo institucional y la contraseña que te proporcionó el departamento de sistemas</p>

                <InputText tag="Correo Electrónico" pholder="ejemplo@fideapech.com"/>
                <InputText tag="Contraseña" pholder="Al menos 8 caracteres"/>
                <button>Iniciar Sesión</button>

                <hr/>

                <a href="#">¿Olvidaste tu contraseaña?</a>

            </div>
        </div>

     );
}
 
export default LogginForm;