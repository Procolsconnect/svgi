import React, { useState, useEffect, useRef } from 'react';
import './PlacementPage.css';

const PlacementPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState([]);
  const videoRef = useRef(null);

  const slides = [
    { title: "Malacca", image: "https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg" },
    { title: "Cameron Highland", image: "https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg" },
    { title: "New Delhi", image: "https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" },
    { title: "Ladakh", image: "https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg" },
    { title: "Nubra Valley", image: "https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg" }
  ];

  const teamMembers = [
    { name: "Ahmed Mohammed", role: "Design Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
    { name: "Sarah Ali", role: "Frontend Developer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" },
    { name: "Khaled Abdullah", role: "Project Manager", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" }
  ];

  const trainingProcess = [
    { number: 1, title: "Develop", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: "📝", color: "#3498db" },
    { number: 2, title: "Engage", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: "👥", color: "#2ecc71" },
    { number: 3, title: "Deliver", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: "✈️", color: "#9b59b6" },
    { number: 4, title: "Plan", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: "🗺️", color: "#f1c40f" },
    { number: 5, title: "Educate", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: "💡", color: "#e74c3c" },
    { number: 6, title: "Educate", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: "💡", color: "#3498db" }
  ];

  const faqs = [
    {
      question: "Do you work full time as a developer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio convallis, porta consequat erat rhoncus."
    },
    {
      question: "Do you require a deposit before working?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate porttitor lectus, vitae tincidunt dolor eleifend vitae."
    },
    {
      question: "Will I own the website?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin eros in finibus posuere."
    },
    {
      question: "Are there other costs involved?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "What is hosting? Will I need it?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt diam odio, sit amet tincidunt est tincidunt at."
    },
    {
      question: "Will you work for equity on a new idea I have?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt diam odio, sit amet tincidunt est tincidunt at."
    },
    {
      question: "How much experience do you have?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "What if I need changes. Can I edit it myself?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt diam odio, sit amet tincidunt est tincidunt at."
    }
  ];

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setVideoPlaying(false);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="placement-page">
      {/* Hero Section */}
      <div className="hero">
        <img src="hero img.jpg" alt="Hero Background" />
        <div className="hero-overlay" />
        <h1 className="hero-title">Placement Records and Highlights</h1>
      </div>

      <div className="container">
        {/* Page Heading */}
        <h1 className="page-heading">Placement Highlights</h1>

        {/* Image Slider */}
        <div className="wrapper">
          <div className="slider-wrapper">
            <div className="inner" style={{ marginLeft: `${-currentSlide * 100}%` }}>
              {slides.map((slide, index) => (
                <article key={index}>
                  <div className={`info top-left ${currentSlide === index ? 'active' : ''}`}>
                    <h3>{slide.title}</h3>
                  </div>
                  <img src={slide.image} alt={slide.title} />
                </article>
              ))}
            </div>
          </div>

          <div className="slider-prev-next-control">
            <label 
              className={`prev ${currentSlide === 0 ? 'disabled' : ''}`}
              onClick={handlePrevSlide}
            >
              ‹
            </label>
            <label 
              className={`next ${currentSlide === slides.length - 1 ? 'disabled' : ''}`}
              onClick={handleNextSlide}
            >
              ›
            </label>
          </div>
        </div>

        {/* Office Gallery */}
        <div className="section-header">
          <h2>Creative Workspace</h2>
          <p>Our specially designed space to spark creativity and enhance team collaboration</p>
        </div>

        <div className="office-gallery">
          <div className="gallery-item animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1170&q=80" alt="Collaborative Workspace" />
            <div className="gallery-caption">
              <h3>Collaborative Workspace</h3>
              <p>Where creative minds meet to exchange ideas</p>
            </div>
          </div>
          <div className="gallery-item animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1170&q=80" alt="Brainstorming Sessions" />
            <div className="gallery-caption">
              <h3>Brainstorming Sessions</h3>
              <p>Where the best creative ideas are born</p>
            </div>
          </div>
          <div className="gallery-item animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1170&q=80" alt="Break Area" />
            <div className="gallery-caption">
              <h3>Break Area</h3>
              <p>For recharging energy and inspiration</p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="section-header">
          <h2>Our Creative Team</h2>
          <p>The professionals who turn ideas into reality with passion and precision</p>
        </div>

        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card animate-on-scroll">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-social">
                <a href="#"><i className="fab fa-twitter">𝕏</i></a>
                <a href="#"><i className="fab fa-linkedin">in</i></a>
                <a href="#"><i className="fab fa-behance">Be</i></a>
                <a href="#"><i className="fab fa-dribbble">Dr</i></a>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Training Process */}
        <div className="left-heading">Our Training Process</div>
        
        <div className="infographic-section">
          <ul className="infoGraphic">
            {trainingProcess.map((item, index) => (
              <li key={index} className="animate-on-scroll" style={{ '--item-color': item.color }}>
                <div className="numberWrap">
                  <div className="number" style={{ color: item.color }}>{item.number}</div>
                  <div className="coverWrap">
                    <div className="numberCover"></div>
                  </div>
                </div>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Player */}
        <div className="section-header">
          <h2>Watch Us in Action</h2>
          <p>A behind-the-scenes tour to see how we create innovation</p>
        </div>
        <div className="video-section">
          <div className="video-container">
            <video 
              ref={videoRef}
              poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80"
              onEnded={handleVideoEnded}
            >
              <source src="team-video.mp4" type="video/mp4" />
              Your browser does not support video playback
            </video>
            <div className="video-overlay" style={{ opacity: videoPlaying ? 0 : 1, pointerEvents: videoPlaying ? 'none' : 'auto' }}>
              <h3>A Day in Our Team's Life</h3>
              <p>Watch how we work together to turn ideas into reality</p>
              <div className="play-button" onClick={handlePlayVideo}>
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiters Section */}
        <div className="recruiters-section">
          <div className="section-header">
            <h2>Our Recruiters</h2>
            <p>Leading companies that trust us to deliver top talent</p>
          </div>
          
          <div className="recruiters-grid">
            <div className="recruiter-category">
              <h3>Consulting Companies</h3>
              <div className="company-grid">
                {['EY', 'McKinsey & Company', 'accenture', 'PwC', 'Deloitte', 'IBM', 'BCG'].map((company, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${company}`} alt={company} />
                ))}
              </div>
            </div>

            <div className="recruiter-category">
              <h3>Data Analytics Companies</h3>
              <div className="company-grid">
                {['UiPath', 'MySQL', 'dabsolut', 'PAYODA', 'Verity', 'TIGER ANALYTICS', 'Convergytics', 'Genpact', 'SAP', 'ORACLE'].map((company, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${company}`} alt={company} />
                ))}
              </div>
            </div>

            <div className="recruiter-category">
              <h3>Automobile Companies</h3>
              <div className="company-grid">
                {['Caterpillar', 'Chrysler', 'Daimler', 'Ford', 'GM', 'Hero', 'Honda', 'Mahindra', 'Tata', 'Volvo', 'TVS', 'Yamaha'].map((company, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${company}`} alt={company} />
                ))}
              </div>
            </div>

            <div className="recruiter-category">
              <h3>Core Companies</h3>
              <div className="company-grid">
                {['Samsung', 'Schneider', 'BGR', 'Cummins', 'JSW', 'Mediatek', 'KPIT', 'L&T Construction', 'AFCONS', 'Schlumberger', 'NVIDIA', 'SANMAR', 'NP'].map((company, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${company}`} alt={company} />
                ))}
              </div>
            </div>

            <div className="recruiter-category">
              <h3>MBA Recruiters</h3>
              <div className="company-grid">
                {['HDFC Bank', 'Flipkart', 'Muthoot', 'Microsoft', 'BEROE', 'Deloitte', 'Cognizant', 'Berger', 'Shriram', 'ICICI Bank', 'Blue Star', 'Vride'].map((company, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${company}`} alt={company} />
                ))}
              </div>
            </div>

            <div className="recruiter-category">
              <h3>M.Sc Recruiters</h3>
              <div className="company-grid">
                {['Dabur', 'Himalaya', 'NoViFO', 'ZIFO', 'SPI Global', 'MGI', 'Bharti', 'Tata', 'Panacea', 'Moyers', 'Synapse', 'Glaxo', 'Srikara', 'Alcon'].map((company, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${company}`} alt={company} />
                ))}
              </div>
            </div>

            <div className="recruiter-category full-width">
              <h3>3 Years UG Recruiters</h3>
              <div className="company-grid">
                {['Deloitte', 'PwC', 'Accenture', 'NielsenIQ', 'TCS', 'Tekion', 'ZS', 'Cloud', 'mycaptain', 'brilio', 'Avin', 'Guidehouse', 'RINEX', 'De Shaw & Co', 'Zuci', 'CloudLive'].map((company, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${company}`} alt={company} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="main-section">
        <div className="faq-container">
          <h2 className="line-heading">Frequently Asked Questions</h2>
          <h3 className="large-heading">Some of the most common questions asked about Website Design & Development.</h3>
          <div className="faq-section">
            <div className="faq-column">
              {faqs.slice(0, 4).map((faq, index) => (
                <div key={index}>
                  <button 
                    className={`collapsible ${activeFAQ.includes(index) ? 'active' : ''}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </button>
                  <div 
                    className="faq-content" 
                    style={{ 
                      maxHeight: activeFAQ.includes(index) ? '200px' : '0',
                      visibility: activeFAQ.includes(index) ? 'visible' : 'hidden',
                      margin: activeFAQ.includes(index) ? '12px 0' : '0'
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="faq-column">
              {faqs.slice(4, 8).map((faq, index) => (
                <div key={index + 4}>
                  <button 
                    className={`collapsible ${activeFAQ.includes(index + 4) ? 'active' : ''}`}
                    onClick={() => toggleFAQ(index + 4)}
                  >
                    {faq.question}
                  </button>
                  <div 
                    className="faq-content" 
                    style={{ 
                      maxHeight: activeFAQ.includes(index + 4) ? '200px' : '0',
                      visibility: activeFAQ.includes(index + 4) ? 'visible' : 'hidden',
                      margin: activeFAQ.includes(index + 4) ? '12px 0' : '0'
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="myFooter">
        <p>© 2025 Tech Company. All rights reserved. <a href="#">Privacy Policy</a></p>
      </footer>
    </div>
  );
};

export default PlacementPage;