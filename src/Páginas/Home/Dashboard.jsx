
import Boton from "./Boton";
import { faHandHoldingDollar, faPlaneDeparture, faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router,Link } from "react-router-dom";
const Dashboard = () => {
    return ( 
      <div className="dashboard">
      <div className="container">
        <Link to="/Viaticos">
          <Boton title="Viáticos" icon={faHandHoldingDollar}/>
          </Link>
          <Boton  title="Vacaciones" icon={faPlaneDeparture}/>
          <Boton  title="Justificantes" icon={faHourglassEnd}/>

      </div>
  </div>
     );
}
 
export default Dashboard;