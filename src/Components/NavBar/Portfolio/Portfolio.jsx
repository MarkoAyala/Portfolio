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
    <div className="portfolio">
        {/* heading */}
        <span className='portfolio1' style={{color:darkMode?'white': ''}}>Ultimos proyectos</span>
        <span className='portfolio2'>Portfolio</span>

        {/* slider */}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={HenryASK} alt="" />
                <div className="description">
                <span>HenryASK...</span>
                <span>Ver más</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={PokeApp} alt="" />
                <div className="description">
                <span>PokeApp...</span>
                <span>Ver más</span>
                </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
                <img src={ClimaApp} alt="" />
                <div className="description">
                <span>ClimaApp...</span>
                <span>Ver más</span>
                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <img src={PortfolioP} alt="" />
                <div className="description">
                <span>Portfolio...</span>
                <span>Ver más</span>
                </div>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Portfolio