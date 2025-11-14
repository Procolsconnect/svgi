import React, { useEffect, useRef, useState } from 'react';
import './footer.css';

const FooterRaindrop = () => {
  const waterdropRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initRaindrops = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
        await loadScript('https://code.jquery.com/ui/1.11.4/jquery-ui.js');
        await loadScript('https://daniellaharel.com/raindrops/js/raindrops.js');
        
        if (window.jQuery && waterdropRef.current) {
          window.jQuery(waterdropRef.current).raindrops({
            color: '#1c1f2f',
            canvasHeight: 150,
            density: 0.1,
            frequency: 20
          });
        }
      } catch (error) {
        console.error('Error loading raindrop scripts:', error);
      }
    };

    initRaindrops();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="ft-page-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" className="ft-waves-svg">
        <defs>
          <path id="ft-gentle-wave" d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18 
            58-18 88-18 
            58 18 88 18
            v44h-352z" />
        </defs>
        <g className="ft-waves">
          <use xlinkHref="#ft-gentle-wave" x="50" y="0" fill="#03ffff" fillOpacity=".2" />
          <use xlinkHref="#ft-gentle-wave" x="50" y="3" fill="#03ffff" fillOpacity=".5" />
          <use xlinkHref="#ft-gentle-wave" x="50" y="6" fill="#03ffff" fillOpacity=".9" />
        </g>
      </svg>
      
      <div id="ft-waterdrop" ref={waterdropRef}></div>
      
      <footer className="ft-footer">
        <div className="ft-footer-top">
          <div className="ft-container">
            <div className="ft-row">
              {/* Address Column */}
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

              {/* News and Contact Form Column */}
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
                  <div className="ft-wpcf7-form">
                    <p><input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} /></p>
                    <p><input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} /></p>
                    <p><textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea></p>
                    <p><button onClick={handleSubmit} className="ft-wpcf7-submit">Send</button></p>
                  </div>
                </div>
              </div>

              {/* Gallery Column */}
              <div className="ft-footer-col-4">
                <h5 className="ft-footer-title">Our Gallery</h5>
                <ul className="ft-widget-gallery">
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                    <li><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="" /></li>
                  </div>
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
                <div className="ft-footer-site-info">2020 © <a href="#" style={{ textDecoration: 'none', color: 'lightgrey' }}>Top HTML & CSS Program</a></div>
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
                  <a href="#" className="ft-socials-item"><i style={{ color: 'blue' }} className="fab fa-facebook-f ft-facebook"></i></a>
                  <a href="#" className="ft-socials-item"><i style={{ color: 'lightskyblue' }} className="fab fa-twitter ft-twitter"></i></a>
                  <a href="#" className="ft-socials-item"><i style={{ color: 'red' }} className="fab fa-instagram ft-instagram"></i></a>
                  <a href="#" className="ft-socials-item"><i style={{ color: 'darkred' }} className="fab fa-youtube ft-youtube"></i></a>
                  <a href="#" className="ft-socials-item"><i style={{ color: '#00bcd4' }} className="fab fa-telegram ft-telegram"></i></a>
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