import React, { useState } from 'react';
import './Popup.css';

const SharpPopupSlider = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const images = [
    "https://lh3.googleusercontent.com/-VsQHvEo1iZI/VBIMP_HiQ3I/AAAAAAAAG_c/hHtPZXxPNL0/w600-h200-no/A%2Bbeleza%2Bda%2Bnatureza%2Bna%2Blente%2Bdo%2Bfot%C3%B3grafo%2Bbrasileiro%2BMarcelo%2BKrauses%2B5.jpg",
    "https://lh5.googleusercontent.com/-KvdG8_FUQ4Q/VBILouEtBZI/AAAAAAAAG-s/TzD7YrqARzw/w600-h200-no/A%2Bbeleza%2Bda%2Bnatureza%2Bna%2Blente%2Bdo%2Bfot%C3%B3grafo%2Bbrasileiro%2BMarcelo%2BKrauses%2B%2B3.jpg",
    "https://lh6.googleusercontent.com/-5uWRWOmqZnw/VBIJ5oRYvdI/AAAAAAAAG9Y/mf8q6HVWEko/w600-h200-no/A%2Bbeleza%2Bda-natureza%2Bna%2Blente%2Bdo%2Bfot%C3%B3grafo%2Bbrasileiro%2BMarcelo%2BKrauses%2B%2B1.jpg",
    "https://lh6.googleusercontent.com/-QNTSdzquEJg/VBIL2UiNO-I/AAAAAAAAG_E/PBLA6SrMAWQ/w600-h200-no/A%2Bbeleza%2Bda%2Bnatureza%2Bna%2Blente%2Bdo%2Bfot%C3%B3grafo%2Bbrasileiro%2BMarcelo%2BKrauses%2B%2B4.jpg",
    "https://lh6.googleusercontent.com/-Lkl-7G9I5Zk/VBIK2yVhJuI/AAAAAAAAG-A/4Xgl3UxV4I0/w600-h200-no/A%2Bbeleza%2Bda-natureza%2Bna%2Blente%2Bdo%2Bfot%C3%B3grafo%2Bbrasileiro%2BMarcelo%2BKrauses%2B2.jpg"
  ];

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