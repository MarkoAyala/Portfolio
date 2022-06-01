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
import FloatingDiv from '../FloatingDiv/FloatingDiv';

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
            <img src={glassesimoji} alt="emoji" />
            <div style={{top:'-4%', left:'68%'}}>
              <FloatingDiv image={Crown} text1="Web" text2="Developer"/>
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
              <FloatingDiv image={thumbup} text1="Front-end" text2="Preference"/>
            </div>
            <div className="blur" style={{ background: 'rgb(238,210,255)'}}></div>
            <div className="blur" style={{ background: '#C1F5FF', top:"16rem", width:"21rem", height:'11rem', left:"-7rem"}}></div>
          </div>
      </div>
  )
}

export default Intro