import React, { useState } from 'react';
import styles from './AdvHero.module.css';
import FloatingIcons from '../../../components/FloatingIcons';

const Hero = () => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    college: '',
    course: ''
  });

  const coursesByCollege = {
    arts: ["Tamil", "English", "BCA", "Math"],
    engineering: ["BE-CSE", "BE-ECE", "BE-EEE", "BE-MECH", "BE-CIVIL", "B.Tech-IT"],
    polytechnic: ["DME", "DEEE", "DECE", "DCN"],
    paramedical: ["B.Sc Nursing", "B.Pharm", "D.Pharm", "BPT"]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === 'college') newData.course = ''; // Reset course when college changes
      return newData;
    });
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

        <label htmlFor="college">College</label>
        <select
          id="college"
          name="college"
          value={formData.college}
          onChange={handleInputChange}
          className={styles['griddy-select']}
        >
          <option value="">Select College</option>
          <option value="arts">Arts</option>
          <option value="engineering">Engineering</option>
          <option value="polytechnic">Polytechnic</option>
          <option value="paramedical">Paramedical</option>
        </select>

        <label htmlFor="course">Course</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          disabled={!formData.college}
          className={styles['griddy-select']}
        >
          <option value="">Select Course</option>
          {formData.college && coursesByCollege[formData.college].map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Hero;