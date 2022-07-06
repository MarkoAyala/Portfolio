import React from 'react';
import './Experience.css';
import { themeContext } from '../../../Context';
import { useContext } from "react";

function Experience() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
        <div className="blura" style={{ background: 'rgb(238,210,255)'}}></div>
        <div className="bluras" style={{ background: '#C1F5FF', top:"8rem", width:"21rem", height:'11rem', left:"50rem"}}></div>
        <div className="achievement">
            <div className="circle"  style={{backgroundImage:darkMode?'linear-gradient(to bottom, #ff0000 0%, #2500ff 100%)'
: ''}}>1+</div>
            <span>Año/s</span>
            <span>Programando</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{backgroundImage:darkMode?'linear-gradient(to bottom, #ff0000 0%, #2500ff 100%)'
: ''}}>6+</div>
            <span>Proyectos</span>
            <span>Terminados</span>
        </div>
        <div className="achievement">
            <div className="circle"  style={{backgroundImage:darkMode?'linear-gradient(to bottom, #ff0000 0%, #2500ff 100%)'
: ''}}>20+</div>
            <span>Tecnologías</span>
            <span>Dominadas</span>
        </div>
    </div>
  )
}
export default Experience