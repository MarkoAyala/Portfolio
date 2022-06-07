import React from 'react';
import './Footer.css';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Footeri from '../../../img/wave.png'
function Footer() {
  return (
    <div className="footer">
        <img src={Footeri} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>marko.ayala.dev99@hotmail.com</span>
            <div className="f-icons">
                <a href="https://github.com/MarkoAyala/Portfolio" target='_blank'><Github color='black' size="3rem"/></a> 
            </div>
        </div>
    </div>
  )
}

export default Footer