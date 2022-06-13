import React from 'react';
import './Navbar.css';
import Toggle from './Toggle/Toggle';
import {Link} from 'react-scroll';
import Drawer from './Drawer.jsx';

const Navbar = () => {

  return (
      <div className="n-wrapper">
          <div className="n-left">
              <Drawer/>
              <div className="n-name">Marko</div>
              <Toggle/>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul style={{listStyleType: 'none'}}>
                      <Link spy={true} to='Navbar' smooth={true} >
                      <li>Inicio</li>
                      </Link>
                      <Link spy={true} to='Services' smooth={true}>
                      <li>Servicios</li>
                      </Link>
                      <Link spy={true} to='Experience' smooth={true}>
                      <li>Experiencia</li>
                      </Link>
                      <Link spy={true} to='Portfolio' smooth={true}>
                      <li>Portfolio</li>
                      </Link>
                  </ul>
              </div>
              <Link spy={true} to='Contact' smooth={true}>
              <button className='button n-button'>
                Contactame
              </button>
              </Link>
          </div>
      </div>
  )
}

export default Navbar