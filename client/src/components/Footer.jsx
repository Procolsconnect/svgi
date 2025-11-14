// FooterRaindrop.js
import React, { useState } from 'react';
import './footer.css';

const FooterRaindrop = () => {
  /* ---------- Form ---------- */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  /* ---------- Render ---------- */
  return (
    <div className="ft-page-wrapper">
      {/* ---------- SVG Waves (kept, but now inside the fixed-height footer) ---------- */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        className="ft-waves-svg"
      >
        <defs>
          <path
            id="ft-gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="ft-waves">
          <use xlinkHref="#ft-gentle-wave" x="50" y="0" fill="#03ffff" fillOpacity=".4" />
          <use xlinkHref="#ft-gentle-wave" x="50" y="3" fill="#03ffff" fillOpacity=".6" />
          <use xlinkHref="#ft-gentle-wave" x="50" y="6" fill="#03ffff" fillOpacity=".8" />
        </g>
      </svg>

      {/* ---------- Footer (fixed height) ---------- */}
      <footer className="ft-footer">
        <div className="ft-footer-top">
          <div className="ft-container">
            <div className="ft-row">
              {/* Address */}
              <div className="ft-footer-col-3">
                <h5 className="ft-footer-title">Address</h5>
                <div className="ft-gem-contacts-item" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                  Corporate Office:<br /> Doon House, B-275(A), First floor<br /> Sector-57, Shushant Lok 3<br />Near Hong Kong Bazzar, Gurugram, Haryana.
                </div>
                <div className="ft-gem-contacts-item" style={{ fontSize: '16px', paddingTop: '10px' }}>
                  <i className="fa fa-phone"></i> +91-9122588799
                </div>
                <div className="ft-gem-contacts-item" style={{ fontSize: '16px', paddingTop: '10px', lineHeight: '1.5' }}>
                  Reg. Office:<br /> Doon House, D2/3, 4th Floor, Chandra Tower,<br />Dimna Road, Mango, Jamshedpur, Jharkhand.
                </div>
                <div className="ft-gem-contacts-item" style={{ fontSize: '16px', paddingTop: '10px' }}>
                  <i className="fa fa-phone"></i> +91-9122588799
                </div>
              </div>

              {/* News + Form */}
              <div className="ft-col-12 ft-col-lg-6 ft-col-md-6 ft-col-sm-12">
                <div className="ft-col-6">
                  <h5 className="ft-footer-title">Recent News</h5>
                  <ul className="ft-posts">
                    <li>
                      <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>Start Your Own Play School</a>
                      <div className="ft-gem-pp-posts-date" style={{ paddingTop: '10px' }}>Call +91-9122588799</div>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>Now in Faridabad & DaudNagar</a>
                      <div className="ft-gem-pp-posts-date" style={{ paddingTop: '10px' }}>Call +91-9122588799</div>
                    </li>
                    <li>
                      <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>Now in Ranchi, Admission Open</a>
                      <div className="ft-gem-pp-posts-date" style={{ paddingTop: '10px' }}>Call +91-9122588799</div>
                    </li>
                  </ul>
                </div>

                <div className="ft-col-6">
                  <h5 className="ft-footer-title">Email Us</h5>
                  <form className="ft-wpcf7-form" onSubmit={handleSubmit}>
                    <p><input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} /></p>
                    <p><input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} /></p>
                    <p><textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea></p>
                    <p><button type="submit" className="ft-wpcf7-submit">Send</button></p>
                  </form>
                </div>
              </div>

              {/* Gallery */}
              <div className="ft-footer-col-4">
                <h5 className="ft-footer-title">Our Gallery</h5>
                <ul className="ft-widget-gallery">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <li key={i}>
                      <img
                        src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-4.0.3&auto=format&fit=crop&w=414&q=80"
                        alt=""
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="ft-footer-bottom">
          <div className="ft-container">
            <div className="ft-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '12px' }}>
              <div className="ft-col-md-3">
                <div className="ft-footer-site-info">
                  2020 © <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>Top HTML & CSS Program</a>
                </div>
              </div>
              <div className="ft-col-md-6">
                <ul className="ft-footer-menu">
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Add More</a></li>
                </ul>
              </div>
              <div className="ft-col-md-3 ft-footer-socials">
                <div className="ft-socials">
                  <a href="#" className="ft-socials-item"><i className="fab fa-facebook-f ft-facebook" style={{ color: 'blue' }}></i></a>
                  <a href="#" className="ft-socials-item"><i className="fab fa-twitter ft-twitter" style={{ color: 'lightskyblue' }}></i></a>
                  <a href="#" className="ft-socials-item"><i className="fab fa-instagram ft-instagram" style={{ color: 'red' }}></i></a>
                  <a href="#" className="ft-socials-item"><i className="fab fa-youtube ft-youtube" style={{ color: 'darkred' }}></i></a>
                  <a href="#" className="ft-socials-item"><i className="fab fa-telegram ft-telegram" style={{ color: '#00bcd4' }}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterRaindrop;