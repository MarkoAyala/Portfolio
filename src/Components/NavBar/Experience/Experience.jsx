import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience">
        <div className="blura" style={{ background: 'rgb(238,210,255)'}}></div>
        <div className="bluras" style={{ background: '#C1F5FF', top:"8rem", width:"21rem", height:'11rem', left:"50rem"}}></div>
        <div className="achievement">
            <div className="circle">1+</div>
            <span>Año/s</span>
            <span>Programando</span>
        </div>
        <div className="achievement">
            <div className="circle">4+</div>
            <span>Proyectos</span>
            <span>Terminados</span>
        </div>
        <div className="achievement">
            <div className="circle">20+</div>
            <span>Tecnologias</span>
            <span>Dominadas</span>
        </div>
    </div>
  )
}
export default Experience