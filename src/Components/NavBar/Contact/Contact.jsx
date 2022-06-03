import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Ponte en contacto</span>
                <span>Contactame</span>
                <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form action="">
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