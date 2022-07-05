import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router,Link } from 'react-router-dom';
const NavBar = () => {

  return (
    <div className='nav-bar'>
      <div className='container'>
        <Link to="/Home">
        <img  src='LETRAS.png' alt='logo_fide' />
        </Link>
        <div className='icon-container'>
          <h3>Alexander Ríos</h3>
          <div className='notificacion-container'>
          <div className='notificacion'>
              <p>3</p>
            </div>
            <FontAwesomeIcon className='icono' icon={faBell} />

          </div>
          <FontAwesomeIcon className='icono' icon={faArrowRightFromBracket} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
