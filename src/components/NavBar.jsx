import '../Styles/NavBar.css';
import React from 'react'; 
import CartWidget from './CartWidget'; 
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div className='contenedor'>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to='/' >Vongole Manga</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to='/'>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/categoria/Ivrea'>Ivrea</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/categoria/Panini'>Panini</NavLink>
              </li>
              <li>
                <CartWidget />
              </li> 
            </ul>
          </div>
        </div>
      </nav>
      </div>  
    );
}

export default NavBar;