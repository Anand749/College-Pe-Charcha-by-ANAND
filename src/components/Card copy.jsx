// src/components/Card.jsx
import React from 'react';
import '../styles/Card.css'; // ✅ Corrected path

const Card = ({ image, heading, text, buttonText, link, extras }) => {
  return (
    <div className="card">
     
      <h2>{heading}</h2>
      <p>{text}</p>
      <a href={link} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        
        {buttonText}
      </a>
      <div className="extras">{extras}</div>
    </div>
  );
};

export default Card;
