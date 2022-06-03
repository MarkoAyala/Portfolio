import React from 'react';
import './Portfolio.css';
import {Swiper , SwiperSlide} from 'swiper/react';
import ClimaApp from '../../../img/Appclima.png';
import PokeApp from '../../../img/pokeApp.png';
import HenryASK from '../../../img/henryASK.png';
import PortfolioP from '../../../img/portfolioimg.png';


function Portfolio() {
  return (
    <div className="portfolio">
        {/* heading */}
        <span>Ultimos proyectos</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper>
            <SwiperSlide>
                <img src={HenryASK} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={PokeApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ClimaApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={PortfolioP} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio