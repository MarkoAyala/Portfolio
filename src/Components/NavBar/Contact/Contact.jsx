import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../../Context';
import { useContext } from "react";

function Contact() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false);
    let [formState, setForm] = useState({
        user_name:'',
        user_email:'',
        message:'',
    })
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yod69ko', 'template_b7zvoh9', form.current, 'ZyuuO7ufP--eLgvbI')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            handleClick()
        }, (error) => {
            console.log(error.text);
        });
    };
    function handleClick() {
        setForm({
            user_name:'',
            user_email:'',
            message:'',
        })
    }
    function handleChange(e){
        setForm(formState={...formState, [e.target.name]:e.target.value })
    }
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white': ''}}>Ponte en contacto,</span>
                <span>estoy disponible!</span>
                <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' onChange={(e)=>handleChange(e)} value={formState.user_name} placeholder='Nombre' />
                <input type="email" name="user_email" className='user' onChange={(e)=>handleChange(e)} value={formState.user_email} placeholder='Mail' />
                <textarea name="message" className='user' onChange={(e)=>handleChange(e)} value={formState.message} placeholder='Mensaje' />
                <input type="submit" value='Enviar' className='button'/>
                <span>{done && 'Gracias por contactarte!'}</span>
                <div className="blur c-blurl" style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact