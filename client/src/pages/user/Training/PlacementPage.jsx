import React, { useState, useEffect, useRef } from 'react';
import styles from './PlacementPage.module.css';

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
    { question: "Do you work full time as a developer?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio convallis, porta consequat erat rhoncus." },
    { question: "Do you require a deposit before working?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate porttitor lectus, vitae tincidunt dolor eleifend vitae." },
    { question: "Will I own the website?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin eros in finibus posuere." },
    { question: "Are there other costs involved?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "What is hosting? Will I need it?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt diam odio, sit amet tincidunt est tincidunt at." },
    { question: "Will you work for equity on a new idea I have?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt diam odio, sit amet tincidunt est tincidunt at." },
    { question: "How much experience do you have?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "What if I need changes. Can I edit it myself?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt diam odio, sit amet tincidunt est tincidunt at." }
  ];

  const handlePrevSlide = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);
  const handleNextSlide = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  const handleVideoEnded = () => setVideoPlaying(false);

  const toggleFAQ = (index) => {
    setActiveFAQ(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(`.${styles.animateOnScroll}`).forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight / 1.3) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img src="hero img.jpg" alt="Hero Background" />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>Placement Records and Highlights</h1>
      </div>

      <div className={styles.container}>
        <h1 className={styles.pageHeading}>Placement Highlights</h1>

        {/* Image Slider */}
        <div className={styles.wrapper}>
          <div className={styles.sliderWrapper}>
            <div className={styles.inner} style={{ marginLeft: `${-currentSlide * 100}%` }}>
              {slides.map((slide, i) => (
                <article key={i}>
                  <div className={`${styles.info} ${styles.topLeft} ${currentSlide === i ? styles.active : ''}`}>
                    <h3>{slide.title}</h3>
                  </div>
                  <img src={slide.image} alt={slide.title} />
                </article>
              ))}
            </div>
          </div>

          <div className={styles.sliderPrevNextControl}>
            <label className={`${styles.prev} ${currentSlide === 0 ? styles.disabled : ''}`} onClick={handlePrevSlide}>‹</label>
            <label className={`${styles.next} ${currentSlide === slides.length - 1 ? styles.disabled : ''}`} onClick={handleNextSlide}>›</label>
          </div>
        </div>

        {/* Office Gallery */}
        <div className={styles.sectionHeader}>
          <h2>Creative Workspace</h2>
          <p>Our specially designed space to spark creativity and enhance team collaboration</p>
        </div>

        <div className={styles.officeGallery}>
          {[
            { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1170&q=80", title: "Collaborative Workspace", desc: "Where creative minds meet to exchange ideas" },
            { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1170&q=80", title: "Brainstorming Sessions", desc: "Where the best creative ideas are born" },
            { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1170&q=80", title: "Break Area", desc: "For recharging energy and inspiration" }
          ].map((item, i) => (
            <div key={i} className={`${styles.galleryItem} ${styles.animateOnScroll}`}>
              <img src={item.src} alt={item.title} />
              <div className={styles.galleryCaption}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className={styles.sectionHeader}>
          <h2>Our Creative Team</h2>
          <p>The professionals who turn ideas into reality with passion and precision</p>
        </div>

        <div className={styles.teamMembers}>
          {teamMembers.map((member, i) => (
            <div key={i} className={`${styles.memberCard} ${styles.animateOnScroll}`}>
              <div className={styles.memberImage}>
                <img src={member.image} alt={member.name} />
              </div>
              <div className={styles.memberSocial}>
                <a href="#">𝕏</a><a href="#">in</a><a href="#">Be</a><a href="#">Dr</a>
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Training Process */}
        <div className={styles.leftHeading}>Our Training Process</div>
        <div className={styles.infographicSection}>
          <ul className={styles.infoGraphic}>
            {trainingProcess.map((item, i) => (
              <li key={i} className={styles.animateOnScroll} style={{ '--item-color': item.color }}>
                <div className={styles.numberWrap}>
                  <div className={styles.number} style={{ color: item.color }}>{item.number}</div>
                  <div className={styles.coverWrap}>
                    <div className={styles.numberCover}></div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Player */}
        <div className={styles.sectionHeader}>
          <h2>Watch Us in Action</h2>
          <p>A behind-the-scenes tour to see how we create innovation</p>
        </div>
        <div className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <video ref={videoRef} poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80" onEnded={handleVideoEnded}>
              <source src="team-video.mp4" type="video/mp4" />
              Your browser does not support video playback
            </video>
            <div className={styles.videoOverlay} style={{ opacity: videoPlaying ? 0 : 1, pointerEvents: videoPlaying ? 'none' : 'auto' }}>
              <h3>A Day in Our Team's Life</h3>
              <p>Watch how we work together to turn ideas into reality</p>
              <div className={styles.playButton} onClick={handlePlayVideo}>
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiters Section */}
        <div className={styles.recruitersSection}>
          <div className={styles.sectionHeader}>
            <h2>Our Recruiters</h2>
            <p>Leading companies that trust us to deliver top talent</p>
          </div>
          <div className={styles.recruitersGrid}>
            {/* Example one category – repeat pattern for others */}
            <div className={styles.recruiterCategory}>
              <h3>Consulting Companies</h3>
              <div className={styles.companyGrid}>
                {['EY', 'McKinsey & Company', 'accenture', 'PwC', 'Deloitte', 'IBM', 'BCG'].map((c, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${c}`} alt={c} />
                ))}
              </div>
            </div>
            <div className={styles.recruiterCategory}>
              <h3>Software Companies</h3>
              <div className={styles.companyGrid}>
                {['EY', 'McKinsey & Company', 'accenture', 'PwC', 'Deloitte', 'IBM', 'BCG'].map((c, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${c}`} alt={c} />
                ))}
              </div>
            </div>
            <div className={styles.recruiterCategory}>
              <h3>Core Companies</h3>
              <div className={styles.companyGrid}>
                {['EY', 'McKinsey & Company', 'accenture', 'PwC', 'Deloitte', 'IBM', 'BCG'].map((c, i) => (
                  <img key={i} src={`https://via.placeholder.com/150x100?text=${c}`} alt={c} />
                ))}
              </div>
            </div>
            {/* ... repeat other categories with same class names ... */}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className={styles.mainSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.lineHeading}>Frequently Asked Questions</h2>
          <h3 className={styles.largeHeading}>Some of the most common questions asked about Website Design & Development.</h3>
          <div className={styles.faqSection}>
            <div className={styles.faqColumn}>
              {faqs.slice(0, 4).map((faq, i) => (
                <div key={i}>
                  <button className={`${styles.collapsible} ${activeFAQ.includes(i) ? styles.active : ''}`} onClick={() => toggleFAQ(i)}>
                    {faq.question}
                  </button>
                  <div className={styles.faqContent} style={{ maxHeight: activeFAQ.includes(i) ? '200px' : '0', margin: activeFAQ.includes(i) ? '12px 0' : '0' }}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.faqColumn}>
              {faqs.slice(4, 8).map((faq, i) => (
                <div key={i + 4}>
                  <button className={`${styles.collapsible} ${activeFAQ.includes(i + 4) ? styles.active : ''}`} onClick={() => toggleFAQ(i + 4)}>
                    {faq.question}
                  </button>
                  <div className={styles.faqContent} style={{ maxHeight: activeFAQ.includes(i + 4) ? '200px' : '0', margin: activeFAQ.includes(i + 4) ? '12px 0' : '0' }}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementPage;