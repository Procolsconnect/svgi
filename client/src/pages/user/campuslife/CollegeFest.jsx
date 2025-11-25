import React, { useState, useEffect, useRef } from 'react';
import './CollegeFest.css';

const CollegeFestPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const carouselRef = useRef(null);
  const totalSlides = 7;
  const totalCards = 6;

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % totalCards);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const handleMouseMove = (e, index) => {
    const figure = e.currentTarget;
    const rect = figure.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top + rect.height / 2;
    const angleX = (targetY - y) / -25;
    const angleY = (targetX - x) / 25;
    
    const img = figure.querySelector('.cfp-intro__image');
    if (img) {
      img.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }
  };

  const handleMouseOut = (e) => {
    const img = e.currentTarget.querySelector('.cfp-intro__image');
    if (img) {
      img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  const carouselItems = [
    {
      title: 'Cultural Fest',
      description: 'A vibrant event featuring dance, music, and cultural performances from around the world.',
      image: '/images/artss.jpg'
    },
    {
      title: 'Tech Symposium',
      description: 'An exciting hackathon and coding competition for tech enthusiasts.',
      image: 'https://www.cloudfest.com/blog/wp-content/uploads/hackathon-contest-programmers.jpg'
    },
    {
      title: 'Sports Meet',
      description: 'Athletic competitions and games to promote fitness and teamwork.',
      image: 'https://towsontigers.com/images/2025/5/15/051525_CAA_OUTDOOR_TRACK_CHAMPIONSHIPS_TOWSON_02.jpg'
    },
    {
      title: 'Annual Day',
      description: 'Celebration of the year\'s achievements with awards and performances.',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQFcbTkg-Xy48A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712336327303?e=2147483647&v=beta&t=X2mvMoTPHLmK2t3ojU-8pSR_tnEVo0WRn09VXNLjuhE'
    },
    {
      title: 'Music Night',
      description: 'Live concerts and musical performances by students and guests.',
      image: 'https://cdn.collegeraptor.com/wp/wp-content/uploads/2015/08/3456361414_ab1dbdc451_o.jpg'
    },
    {
      title: 'Drama Theater',
      description: 'Theatrical plays and drama acts showcasing acting talents.',
      image: 'https://nwsa.mdc.edu/img/theater/theater-play-2.jpg'
    }
  ];

  const stackSlides = [
    {
      title: 'Arts 2025',
      description: 'This is the first time such a grand function has been held in our college.',
      image: '/images/artss.jpg',
      angle: '-7deg'
    },
    {
      title: 'National Service awareness',
      description: 'A discussion was held for students on National Service Awareness.',
      image: '/images/arts.jpeg',
      angle: '8deg'
    },
    {
      title: '1st year inauguration ceremony',
      description: 'Department of BE / B.tech',
      image: '/images/magizh.jpg',
      angle: '-3deg'
    },
    {
      title: 'Tech Trend Path of success',
      description: 'The future of technology is bright and full of possibilities.',
      image: '/images/tech.jpg',
      angle: '6deg'
    },
    {
      title: 'Freshers Day 2025',
      description: 'Department of Computer Application',
      image: '/images/Freshers.jpg',
      angle: '-11deg'
    },
    {
      title: 'Farewell Day 2025',
      description: 'Grand celebration of the physiotherapy class.',
      image: '/images/farewell.jpg',
      angle: '9deg'
    },
    {
      title: 'Cougar',
      description: 'Puma concolor',
      image: '/images/instu.jpg',
      angle: '-4deg'
    }
  ];

  return (
    <div className="cfp-page">
      {/* Hero Section */}
      <div className="cfp-hero">
        <img src="hero img.jpg" alt="Hero Background" className="cfp-hero__image" />
        <div className="cfp-hero__overlay"></div>
        <h1 className="cfp-hero__title">Fests</h1>
      </div>

      {/* Hover Animation Section */}
      <div className="cfp-container">
        <h2 className="cfp-intro__title">
          AppHarvest
          <span 
            className="cfp-intro__figure"
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseOut={handleMouseOut}
          >
            <img 
              src="https://www.appharvest.com/wp-content/uploads/2021/02/image-1.png"
              srcSet="https://www.appharvest.com/wp-content/uploads/2021/02/image-1@2x.png 2x"
              width="235" 
              height="95" 
              alt="" 
              className="cfp-intro__image cfp-intro__image--1" 
            />
            <img 
              src="https://www.appharvest.com/wp-content/uploads/2021/02/tomato@2x.png"
              alt="tomato" 
              className="cfp-intro__tomato" 
            />
          </span>
          is on a mission
          <span 
            className="cfp-intro__figure"
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseOut={handleMouseOut}
          >
            <img 
              src="https://www.appharvest.com/wp-content/uploads/2021/02/image-2.png"
              srcSet="https://www.appharvest.com/wp-content/uploads/2021/02/image-2@2x.png 2x"
              width="364" 
              height="95" 
              alt="" 
              className="cfp-intro__image cfp-intro__image--2" 
            />
          </span>
          to feed the future, from the heart of
          <span 
            className="cfp-intro__figure cfp-intro__figure--3"
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseOut={handleMouseOut}
          >
            <img 
              src="https://www.appharvest.com/wp-content/uploads/2021/02/image-3.png"
              srcSet="https://www.appharvest.com/wp-content/uploads/2021/02/image-3@2x.png 2x"
              width="149" 
              height="95" 
              alt="" 
              className="cfp-intro__image" 
            />
            <img 
              src="https://www.appharvest.com/wp-content/uploads/2021/02/leaf@2x.png"
              alt="leaf" 
              className="cfp-intro__leaf" 
            />
          </span>
          Appalachia.
        </h2>
      </div>

      {/* Carousel Section */}
      <section className="cfp-game-section">
        <h2 className="cfp-line-title">College Fest Events</h2>
        <div className="cfp-carousel" ref={carouselRef}>
          <div className="cfp-carousel__track">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`cfp-carousel__item ${activeCard === index ? 'cfp-carousel__item--active' : ''}`}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => handleCardClick(index)}
              >
                <div className="cfp-carousel__item-desc">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Events Stack */}
      <section className="cfp-latest-events-section">
        <div className="cfp-events-container">
          <h1 className="cfp-events-title">Latest Events</h1>
          <div 
            className="cfp-stack-slider"
            style={{
              '--cfp-k': currentSlide,
              '--cfp-n': totalSlides
            }}
          >
            <div className="cfp-stack-counter">
              {currentSlide + 1}/{totalSlides}
            </div>
            
            {stackSlides.map((slide, index) => {
              const k = currentSlide;
              const i = index;
              const n = totalSlides;
              
              // Calculate animation values
              const absP = Math.abs(k - i);
              const notTop = Math.min(1, absP);
              const top = 1 - notTop;
              
              const end = Math.max(0, Math.min(1, absP - 1));
              const dir = (1 - 2 * end) * Math.sign(k - i);
              const fwd = 0.5 * (1 + dir);
              
              const valMov = (1 - fwd) * k + fwd * k - i;
              const absMov = Math.abs(valMov);
              const notMov = Math.min(1, absMov);
              const mov = 1 - notMov;
              
              const prg = absMov / (1 - end + end * (n - 1));
              const sin = Math.sin(prg * 0.5 * Math.PI * 2);
              
              const zIndex = (n - 1 + i - k + n) % n;
              
              return (
                <article
                  key={index}
                  className="cfp-stack-article"
                  style={{
                    '--cfp-i': i,
                    '--cfp-top': top,
                    '--cfp-not-top': notTop,
                    '--cfp-mov': mov,
                    '--cfp-sin': sin,
                    '--cfp-a': slide.angle,
                    zIndex: zIndex
                  }}
                >
                  <h2 
                    className="cfp-stack-title"
                    style={{
                      transform: `translateY(${notTop * 1}em)`,
                      opacity: top,
                      transition: `transform 0.4s ${top * 0.4}s, opacity 0.4s ${top * 0.4}s`
                    }}
                  >
                    {slide.title}
                  </h2>
                  <em 
                    className="cfp-stack-description"
                    style={{
                      transform: `translateY(${notTop * 1}em)`,
                      opacity: top,
                      transition: `transform 0.4s ${top * 0.4}s, opacity 0.4s ${top * 0.4}s`
                    }}
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  />
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="cfp-stack-image"
                    style={{
                      transform: `translateX(${-150 * mov * Math.sqrt(Math.abs(sin))}%) rotate(${(1 - sin) * parseFloat(slide.angle)}deg)`,
                      transition: 'transform 0.8s'
                    }}
                  />
                </article>
              );
            })}
            
            <div className="cfp-stack-controls">
              <button 
                className="cfp-stack-button" 
                aria-label="previous" 
                onClick={handlePrevSlide}
              >
                <span className="cfp-stack-button__icon cfp-stack-button__icon--prev">▶</span>
              </button>
              <button 
                className="cfp-stack-button" 
                aria-label="next" 
                onClick={handleNextSlide}
              >
                <span className="cfp-stack-button__icon">▶</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Slanted Sections */}
      <section className="cfp-slanted-section">
        <div className="cfp-rr cfp-rr--left">
          <div className="cfp-rr__content">
            <h2>Left Section</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
        </div>

        <div className="cfp-rr cfp-rr--right">
          <div className="cfp-rr__content">
            <h2>Right Section</h2>
            <p>Lorem ipsum dolor sit amet, dolore eu feugiat facilisis.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeFestPage;