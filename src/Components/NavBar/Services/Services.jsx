import React from 'react';
import './Services.css';
import HeartEmoji from '../../../img/heartemoji.png';
import Glasses from '../../../img/glasses.png';
import Humble from '../../../img/humble.png';
import Card from '../Card/Card';

function Services() {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>Ofrezco los</span>
            <span>siguientes servicios:</span>
            <span>lorem ipmsum dor loriam no se que escribir en esta <br /> parte del cv ahre loco lorem impsu dor</span>
            <button className='button s-button'>Descargar CV</button>
            <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
          {/* first card */}
            <div style={{left:'20rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Back-end'}
                detail={'MongoDB , Sequelize , PostgreSQL , TypeScript'}
                />
            </div>
            {/* second card */}
          <div style={{top:"12rem", left: "-4rem"}}>
          <Card
                emoji={Glasses}
                heading={'Front-end'}
                detail={'React, JS , TS , Redux Toolkit, MaterialUI...'}
                />
          </div>
        </div>
    </div>
  )
}

export default Services