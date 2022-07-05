import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router,Link, Navigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const NavBar = () => {
  const [logOut,setLogOut] = useState(false);

  const cerrar_sesion = () => {
    setLogOut(true);
    localStorage.clear()
  }
  useEffect(() => {
    console.log("hola")
  }, [localStorage]);
  return (
    <div className='nav-bar'>
      <div className='container'>
        <Link to="/Home">
        <img  src='LETRAS.png' alt='logo_fide' />
        </Link>
        <div className='icon-container'>
          
          <h3>{localStorage.getItem("user_name")}</h3>
          <div className='notificacion-container'>
          <div className='notificacion'>
              <p>3</p>
            </div>
            <FontAwesomeIcon className='icono' icon={faBell} />

          </div>
          <FontAwesomeIcon onClick={() => cerrar_sesion()} className='icono' icon={faArrowRightFromBracket} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
