import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Boton = ({title,icon}) => {
    return ( 
        <div className="boton">
            <FontAwesomeIcon className="icono" icon={icon}/>
            <h1>{title}</h1>
        </div>
     );
}
 
export default Boton;