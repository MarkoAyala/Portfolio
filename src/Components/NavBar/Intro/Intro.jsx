import React from 'react';
import './Intro.css';
import GitHub from '../../../img/github.png';
import Linkedin from '../../../img/linkedin.png';
import Vector1 from '../../../img/Vector1.png';
import Vector2 from '../../../img/Vector2.png';
import thumbup from '../../../img/thumbup.png';
import Crown from '../../../img/crown.png';
import glassesimoji from '../../../img/glassesimoji.png';
import fotoCV from '../../../img/fotoCV.jpeg';

function Intro() {
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span>Hola! Soy</span>
                  <span>Marko Ayala</span>
                  <span>Soy Desarrollador Full-Stack con conocimientos solidos en React , Typescript y Redux.</span>
              </div>
              <button className='button i-button'>Hire me</button>
              <div className="i-icons">
                <a href="https://github.com/MarkoAyala" target='_blank'>
                <img className='i-icons-image' src={GitHub} alt="icon failed" />
                </a>
                <a href="https://www.linkedin.com/in/markoayaladev/" target='_blank'>
                <img className='i-icons-image' src={Linkedin} alt="icon failed" />
                </a>
              </div>
          </div>
          <div className="i-right">
            <img src={Vector1} alt="vector1" />
            <img src={Vector2} alt="vector2" />
            <img src={fotoCV} className="fotoCV" alt="fotoCV" />
            <div>
              <FloatingDiv/>
            </div>
          </div>

      </div>
  )
}

export default Intro