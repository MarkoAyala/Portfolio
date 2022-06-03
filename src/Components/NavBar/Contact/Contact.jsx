import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yod69ko', 'template_b7zvoh9', form.current, 'ZyuuO7ufP--eLgvbI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Ponte en contacto,</span>
                <span>estoy disponible!</span>
                <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Nombre' />
                <input type="email" name="user_email" className='user' placeholder='Mail' />
                <textarea name="message" className='user' placeholder='Mensaje' />
                <input type="submit" value='Enviar' className='button'/>
                <div className="blur c-blurl" style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact