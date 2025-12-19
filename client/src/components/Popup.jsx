import React, { useState } from 'react';
import './Popup.css';

const SharpPopupSlider = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const images = [
    "./images/arts.jpeg",
    "./images/farawell.jpg",
    "./images/Freshers.jpg",
    "./images/arts.jpeg",
    "./images/farawell.jpg",
    "./images/Freshers.jpg",
  
  ]

  return (
    <>
     

      <div className="popup-slider-container">
        <div className="popup-slider-overlay" onClick={handleClose}></div>

        <div className="popup-slider-popup">
          <button 
            className="popup-slider-close-btn" 
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>

          <div className="popup-slider-portfolio">
            <div className="popup-slider-items">
              {images.map((img, index) => (
                <div key={index} className="popup-slider-item">
                  <img src={img} alt={`Slide ${index + 1}`} />
                  {index === images.length - 1 && (
                    <div className="popup-slider-caption">Fim da Galeria.</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharpPopupSlider;