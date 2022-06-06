import React from 'react';
import './Services.css';
import HeartEmoji from '../../../img/heartemoji.png';
import Glasses from '../../../img/glasses.png';
import Humble from '../../../img/humble.png';
import Card from '../Card/Card';
import CV from '../../../img/MARKOAYALA-CV-FULLSTACK.pdf';
import { themeContext } from '../../../Context';
import { useContext } from "react";

function Services() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>Ofrezco los</span>
            <span>siguientes servicios:</span>
            <span>lorem ipmsum dor loriam no se que escribir en esta <br /> parte del cv ahre loco lorem impsu dor</span>
            <a href={CV} download>
            <button className='button s-button'>Descargar CV</button>
            </a>
            <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
            <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
          {/* first card */}
            <div style={{left:'24rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Back-end'}
                detail={'MongoDB, Express, Sequelize, PostgreSQL, TypeScript'}
                />
            </div>
            {/* second card */}
          <div style={{top:"12rem", left: "-1rem"}}>
          <Card
                emoji={Glasses}
                heading={'Front-end'}
                detail={'React, JS , TS , Redux Toolkit, MaterialUI...'}
                />
          </div>
          <div style={{top:"22rem", left:"20rem"}}>
          <Card
                emoji={Humble}
                heading={'Soft skils'}
                detail={'Trabajo en equipo, Aprendizaje constate e indepediente, Creativo'}
                />
          </div>
          <div className='blur s-blur2' style={{background: 'var(--purple)'}} ></div>
        </div>
    </div>
  )
}

export default Services