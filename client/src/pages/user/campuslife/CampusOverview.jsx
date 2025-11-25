import React, { useEffect, useRef, useState } from 'react';
import './CampusLife.css';

const CampusLife = () => {
  const scrollBtnRef = useRef(null);
  const catImgRef = useRef(null);
  const bannerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrollClicked, setIsScrollClicked] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  // Draggable cat functionality
  useEffect(() => {
    const img = catImgRef.current;
    const banner = bannerRef.current;
    if (!img || !banner) return;

    let isDragging = false;
    let offsetX, offsetY;

    const handleMouseDown = (e) => {
      isDragging = true;
      img.style.cursor = 'grabbing';
      offsetX = e.offsetX;
      offsetY = e.offsetY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      img.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const x = e.pageX - offsetX;
      const y = e.pageY - offsetY;
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;

      const color = `rgb(${e.pageX % 255}, ${e.pageY % 255}, ${(e.pageX + e.pageY) % 255})`;
      const marker = document.createElement('div');
      marker.classList.add('campus__color-trail');
      Object.assign(marker.style, {
        backgroundColor: color,
        width: `${img.offsetWidth}px`,
        height: `${img.offsetHeight}px`,
        left: `${x}px`,
        top: `${y}px`,
      });
      banner.appendChild(marker);

      setTimeout(() => (marker.style.opacity = '0'), 100);
      setTimeout(() => marker.remove(), 1000);
    };

    img.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      img.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Smooth scroll function
  const smoothScroll = (targetElement, time = 1000) => {
    if (targetElement === 'toTop') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll arrow functionality
  const handleScrollClick = () => {
    const sections = document.querySelectorAll('.campus__section');
    const scrollBtn = scrollBtnRef.current;

    if (!scrollBtn) return;

    setIsScrollClicked(true);

    if (currentSection > sections.length - 1) {
      setCurrentSection(0);
      smoothScroll('toTop');
      setIsRotated(false);
    } else {
      const target = sections[currentSection];
      if (currentSection === sections.length - 1) {
        setIsRotated(true);
      }
      smoothScroll(target);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="campus__wrapper-main">
      {/* HERO */}
      <div id="campus__hero" className="campus__hero">
        <img src="hero img.jpg" alt="Hero Background" />
        <div className="campus__hero-overlay"></div>
        <div className="campus__wrapper">
          <h1>Campus Life</h1>
        </div>
      </div>

      {/* SCROLL ARROW */}
      <div
        ref={scrollBtnRef}
        id="campus__scroll"
        className={`campus__scroll ${isScrollClicked ? 'campus__clicked' : ''} ${isRotated ? 'campus__rotate' : ''}`}
        onClick={handleScrollClick}
      >
        <span className="campus__arrow-bounce">&#8595;</span>
      </div>

      {/* BANNER SECTION */}
      <section ref={bannerRef} className="campus__banner campus__section">
        <div className="campus__banner-content">
          <h2>Welcome to <span className="campus__highlight">SVGI</span></h2><br />
          <h3>Where Curiosity Rules the Kingdom </h3>
          <p>
            SVGI College blends rigorous academics with practical, hands-on learning to prepare students for a rapidly changing world. Spread across a green, secure campus, we offer specialized programs in engineering, arts, paramedical and nursing—each designed with guidance from industry partners and academic experts. Students learn in modern labs equipped for real-world projects, participate in internships and live projects, and benefit from a strong placement network that connects them to top recruiters.
          </p>
        </div>
        <img ref={catImgRef} src="https://i.imgur.com/QNUiF57.jpg" alt="Cute Cat" />
      </section>

      {/* CAMPUS SECTION */}
      <section className="campus__campus-section campus__section">
        {/* Left Panel */}
        <div className="campus__left-panel">
          <img src="https://vit.ac.in/sites/default/files/inline-images/VIT-Students.jpg" alt="Campus Students" />
        </div>

        {/* Right Panel */}
        <div className="campus__right-panel">
          <div className="campus__content-grid">
            <div className="campus__item">
              <i className="campus__icon fas fa-users"></i>
              <span>Student Welfare</span>
            </div>
            <div className="campus__item">
              <i className="campus__icon fas fa-guitar"></i>
              <span>Fests</span>
            </div>
            <div className="campus__item">
              <i className="campus__icon fas fa-building"></i>
              <span>Hostels</span>
            </div>
            <div className="campus__item">
              <i className="campus__icon fas fa-city"></i>
              <span>Other Amenities</span>
            </div>
            <div className="campus__item">
              <i className="campus__icon fas fa-book-reader"></i>
              <span>Library</span>
            </div>
            <div className="campus__item">
              <i className="campus__icon fas fa-running"></i>
              <span>Sports</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;