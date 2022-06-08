import React from 'react';
import './Services.css';
import HeartEmoji from '../../../img/heartemoji.png';
import Glasses from '../../../img/glasses.png';
import Humble from '../../../img/humble.png';
import Card from '../Card/Card';
import CV from '../../../img/MARKOAYALA-CV-FULLSTACK.pdf';
import { themeContext } from '../../../Context';
import { useContext } from "react";
import {motion} from 'framer-motion';
import Dialoge from '../Dialog/Dialog';
import {Link} from 'react-scroll';


function Services() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  const transition ={duration:1, type:'spring'}

  const [open, setOpen] = React.useState(false);
  let [status, setStatus] = React.useState('');

  let front = 'React, Javascript , Typescript , Redux , Redux toolkit , MaterialUI , Bootstrap , CSS3 , HTML5'
  let back = 'ExpressJS, MongoDB , Sequelize , PostgreSQL'
  let soft = 'Procesos agiles como SCRUM , gestion de proyectos con Trello/Slack, trabajo en equipo, aprendizaje constante e independiente, Creativo'
  const handleClickOpen = (string) => {
    setOpen(true);
    setStatus(string)
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="services" id='Services'>
      <Dialoge open={open} handleClose={handleClose} soft={status ==='frontend'?front: status==='backend' ? back : soft}/>
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>Ofrezco los</span>
            <span>siguientes servicios:</span>
            <span> Busco poder seguir desarrollandome <br /> en una empresa y al maximo todas mis habilidades !</span>
            <a href={CV} download>
            <button className='button s-button'>Descargar CV</button>
            </a>
            <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
            <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
          {/* first card */}
            <motion.div
            initial={{left:'16rem'}}
            transition={transition}
            whileInView={{left:'25rem'}}
            >
                <Card
                emoji={HeartEmoji}
                heading={'Back-end'}
                detail={'MongoDB, Express, Sequelize, PostgreSQL, TypeScript'}
                handleClickOpen={handleClickOpen}
                status='backend'
                />
            </motion.div>
            {/* second card */}
          <motion.div style={{top:"12rem", left: "-1rem"}}
          
          initial={{ left: "-10rem", top: "12rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
          >
          <Card
                emoji={Glasses}
                heading={'Front-end'}
                detail={'React, JS , TS , Redux Toolkit, MaterialUI...'}
                handleClickOpen={handleClickOpen}
                status='frontend'
                />
          </motion.div>
          <motion.div style={{top:"22rem", left:"25rem"}}
           initial={{ top: "22rem", left: "25rem" }}
           whileInView={{ left: "20rem" }}
           transition={transition}
          >
          <Card
                emoji={Humble}
                heading={'Soft skils'}
                detail={'Trabajo en equipo, Aprendizaje constate e indepediente, Creativo'}
                handleClickOpen={handleClickOpen}
                status='softskills'
                />
          </motion.div>
          <div className='blur s-blur2' style={{background: 'var(--purple)'}} ></div>
        </div>
    </div>
  )
}

export default Services