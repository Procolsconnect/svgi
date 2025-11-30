import React, { useState } from 'react';
import './AdvHero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted!');
  };

  return (
    <div className="griddy-container">

      {/* Social Icons */}
      <div className="griddy-float-sm">
        <div className="griddy-fl-fl griddy-float-fb">
          <i className="fa fa-facebook"></i>
          <a href="#">Direct Enquiry!</a>
        </div>
        <div className="griddy-fl-fl griddy-float-ig">
          <i className="fa fa-instagram"></i>
          <a href="#">Admission now!</a>
        </div>
      </div>

      {/* GRID */}
      <section className="griddy-section">
        <div className="griddy-div griddy-div1 griddy-center griddy-trig">
          <p className="griddy-nav"><a href="#">Engineering</a></p>
        </div>
        <div className="griddy-div griddy-div2"></div>
        <div className="griddy-div griddy-div3 griddy-center griddy-trig">
          <p className="griddy-nav"><a href="#">Arts</a></p>
        </div>
        <div className="griddy-div griddy-div4 griddy-center griddy-trig">
          <p className="griddy-nav"><a href="#">Polytechnic</a></p>
        </div>
        <div className="griddy-div griddy-div5 griddy-center griddy-trig">
          <p className="griddy-nav"><a href="#">Paramedical</a></p>
        </div>
        <div className="griddy-div griddy-div7"></div>

        <div className="griddy-div griddy-div8"></div>
        <div className="griddy-div griddy-div9 griddy-center"><h2>r</h2></div>
        <div className="griddy-div griddy-div10 griddy-center"><h2>n</h2></div>

        <div className="griddy-div griddy-div11"></div>
        <div className="griddy-div griddy-div12"></div>
        <div className="griddy-div griddy-div13"></div>
        <div className="griddy-div griddy-div14"></div>

        <div className="griddy-div griddy-div16"></div>
        <div className="griddy-div griddy-div17 griddy-center"><h2>S</h2></div>
        <div className="griddy-div griddy-div18 griddy-center"><h2>V</h2></div>

        <div className="griddy-div griddy-div19"></div>
        <div className="griddy-div griddy-div20"></div>
        <div className="griddy-div griddy-div21"></div>

        <div className="griddy-div griddy-div22"></div>
        <div className="griddy-div griddy-div23"></div>
        <div className="griddy-div griddy-div24"></div>
        <div className="griddy-div griddy-div25 griddy-center"><h2>G</h2></div>
        <div className="griddy-div griddy-div26 griddy-center"><h2>I</h2></div>
        <div className="griddy-div griddy-div27"></div>
        <div className="griddy-div griddy-div28"></div>

        <div className="griddy-div griddy-div29"></div>
        <div className="griddy-div griddy-div30"></div>
        <div className="griddy-div griddy-div31"></div>
        <div className="griddy-div griddy-div32"></div>
        <div className="griddy-div griddy-div33"></div>
        <div className="griddy-div griddy-div34"></div>
        <div className="griddy-div griddy-div35"></div>
      </section>

      {/* Registration Form */}
      <div className="griddy-form-wrapper">
        <h3>Register Now</h3>
        <label htmlFor="username">Your name</label>
        <input
          type="text"
          placeholder="Enter your name"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="phone">Your Phone Number</label>
        <input
          type="tel"
          placeholder="Student contact number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email id</label>
        <input
          type="email"
          placeholder="Student mail id"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Hero;