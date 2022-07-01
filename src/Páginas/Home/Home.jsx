import NavBar from "../../Reutilizables/NavBar";
import Boton from "./Boton";
const Home = () => {

    return ( 
        <div className="home">
            <NavBar/>
            <div className="dashboard">
                <div className="container">
                    <Boton/>
                    <Boton/>
                    <Boton/>
                    <Boton/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;