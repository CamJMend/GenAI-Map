import React from 'react'
import './Card.css'
import image_logo from "../../assets/images/main_logo_white_X1.png"

const Card = () => {
    return (
        <div className='card'>
            <div className='bgnd-image'>
                <img src={image_logo} alt="Logo negativo Wizeline" />
            </div>
            <h3>Name of the AI</h3>
            <p>A brief description of the AI tool. Text non temper quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.Mauris accumsan eras sapien.</p>
            <button>More information</button>
        </div>
      )
}
    
export default Card