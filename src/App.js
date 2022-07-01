import "./Saas/styles.css"
import Login from "./Páginas/Loging/Login";
import Home from "./Páginas/Home/Home"
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
            <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        

      </Routes>
        
        </BrowserRouter>
     
    </div>
  );
}

export default App;
