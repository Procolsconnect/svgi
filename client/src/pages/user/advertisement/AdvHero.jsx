import React, { useState } from 'react';
import styles from './AdvHero.module.css';
import FloatingIcons from '../../../components/FloatingIcons';

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
    <div className={styles['griddy-container']}>

      {/* Social Icons */}
<FloatingIcons direction="right" vertical={true} />

      {/* GRID */}
      <section className={styles['griddy-section']}>
        <div className={`${styles['griddy-div']} ${styles['griddy-div1']} ${styles['griddy-center']} ${styles['griddy-trig']}`}>
          <p className={styles['griddy-nav']}><a href="#">Engineering</a></p>
        </div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div2']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div3']} ${styles['griddy-center']} ${styles['griddy-trig']}`}>
          <p className={styles['griddy-nav']}><a href="#">Arts</a></p>
        </div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div4']} ${styles['griddy-center']} ${styles['griddy-trig']}`}>
          <p className={styles['griddy-nav']}><a href="#">Polytechnic</a></p>
        </div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div5']} ${styles['griddy-center']} ${styles['griddy-trig']}`}>
          <p className={styles['griddy-nav']}><a href="#">Paramedical</a></p>
        </div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div7']}`}></div>

        <div className={`${styles['griddy-div']} ${styles['griddy-div8']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div9']} ${styles['griddy-center']}`}><h2>r</h2></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div10']} ${styles['griddy-center']}`}><h2>n</h2></div>

        <div className={`${styles['griddy-div']} ${styles['griddy-div11']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div12']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div13']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div14']}`}></div>

        <div className={`${styles['griddy-div']} ${styles['griddy-div16']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div17']} ${styles['griddy-center']}`}><h2>S</h2></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div18']} ${styles['griddy-center']}`}><h2>V</h2></div>

        <div className={`${styles['griddy-div']} ${styles['griddy-div19']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div20']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div21']}`}></div>

        <div className={`${styles['griddy-div']} ${styles['griddy-div22']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div23']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div24']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div25']} ${styles['griddy-center']}`}><h2>G</h2></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div26']} ${styles['griddy-center']}`}><h2>I</h2></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div27']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div28']}`}></div>

        <div className={`${styles['griddy-div']} ${styles['griddy-div29']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div30']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div31']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div32']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div33']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div34']}`}></div>
        <div className={`${styles['griddy-div']} ${styles['griddy-div35']}`}></div>
      </section>

      {/* Registration Form */}
      <div className={styles['griddy-form-wrapper']}>
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