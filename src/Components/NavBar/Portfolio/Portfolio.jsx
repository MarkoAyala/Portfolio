import React from 'react';
import './Portfolio.css';
import 'swiper/css';
import {Swiper , SwiperSlide} from 'swiper/react';
import ClimaApp from '../../../img/Appclima.png';
import PokeApp from '../../../img/pokeApp.png';
import HenryASK from '../../../img/henryASK.png';
import PortfolioP from '../../../img/portfolioimg.png';
import { themeContext } from '../../../Context';
import { useContext } from "react";


function Portfolio() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <div className="center" style={{display:'flex' , flexDirection:'column'}}>

        <span style={{color:darkMode?'white': ''}}>Ultimos proyectos</span>
        <span >Portfolio</span>
        </div>

        {/* slider */}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href="https://henryask.vercel.app/" target='_blank'>
                <img src={HenryASK} alt="" />
                </a>
           {/*      <div className="description">
                <span>HenryASK...</span>
                <span>Ver más</span>
                </div> */}
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6920055989194903552/" target='_blank'>
                <img src={PokeApp} alt="" />
                </a>
               {/*  <div className="description">
                <span>PokeApp...</span>
                <span>Ver más</span>
                </div> */}
            </SwiperSlide>{" "}
            <SwiperSlide>
                <img src={ClimaApp} alt="" />
               {/*  <div className="description">
                <span>ClimaApp...</span>
                <span>Ver más</span>
                </div> */}
                
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/MarkoAyala/Portfolio" target='_blank'>
                    <img src={PortfolioP} alt="" />
                </a>
              {/*   <div className="description">
                <span>Portfolio...</span>
                <span>Ver más</span>
                </div> */}
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Portfolio