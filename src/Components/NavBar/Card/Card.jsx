import React from 'react'
import './Card.css'
function Card({emoji, heading, detail, handleClickOpen, status}) {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button onClick={()=>handleClickOpen(status)} className='c-button'>Ver más</button>
    </div>
  )
}

export default Card