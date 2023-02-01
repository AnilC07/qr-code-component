import React from 'react'

import image from "./images/image.png"

import './QrCodeCard.css'

const QrCodeCard = () => {
  return (
    <div className='card'>
        <div className='img-container'>
            <img src={image} alt="QR-code" />
        </div>
        <div className='card-text-content'>
        <div className='card-header'>
            <h2>Improve your front-end skills by bulding projects</h2>
        </div>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
    </div>
  )
}

export default QrCodeCard