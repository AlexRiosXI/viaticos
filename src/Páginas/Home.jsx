import NavBar from "../Reutilizables/NavBar";
import Dashboard from "./Home/Dashboard";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
const Home = () => {

    return ( 
        <div className="home">
            <NavBar></NavBar>
            <Dashboard/>
        </div>
     );
}
 
export default Home;