// MergedHeroComponent.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StudentWelfare.module.css';
import CampusEventsGallery from './CampusEventGallery';
import AlumaniStudent from './AlumaniStudent';
import OurDiamonds from './OurDiamonds';
import axios from 'axios';
const apiurl = import.meta.env.VITE_API_URL;

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MergedHeroComponent = () => {
  const bouncerRef = useRef(null);
  const ballRef = useRef(null);
  const clonedRef = useRef(null);
  const wrapperRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  useEffect(() => {
    // GSAP Hero scroll/zoom animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,// Set to true for debugging
        anticipatePin: 1
      }
    });

    tl.to(heroImageRef.current, {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
      .to(heroSectionRef.current, {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      }, "<");

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Bouncer functionality
    const bounceSpeed = 7;
    let timers = [];

    const resetBouncer = () => {
      timers.forEach(t => clearTimeout(t));
      timers = [];
      if (bouncerRef.current) {
        bouncerRef.current.style.display = 'block';
      }
      if (clonedRef.current) {
        clonedRef.current.remove();
        clonedRef.current = null;
      }
      if (ballRef.current) {
        ballRef.current.style.cssText = '';
        ballRef.current.style.display = 'none';
      }
    };

    const animateBall = (ballProps) => {
      if (!ballRef.current) return;

      const leftDuration = ballProps.wordLength * bounceSpeed + 'ms';
      const topDuration = ballProps.wordLength * bounceSpeed / 2 + 'ms';

      ballRef.current.style.transitionDuration = `${leftDuration}, ${topDuration}`;

      const currentLeft = ballRef.current.offsetLeft;
      const delta = ballProps.left - currentLeft;

      ballRef.current.style.left = currentLeft + delta + 'px';
      ballRef.current.style.top = '-50px';

      setTimeout(() => {
        if (!ballRef.current) return;
        ballRef.current.style.left = ballProps.left + 'px';
        ballRef.current.style.top = '0px';

        setTimeout(() => {
          if (clonedRef.current) {
            const words = clonedRef.current.querySelectorAll(`.${styles.word}`);
            if (words[ballProps.wordIndex]) {
              words[ballProps.wordIndex].classList.add(styles.lit);
            }
          }
        }, ballProps.wordLength * bounceSpeed / 2);
      }, ballProps.wordLength * bounceSpeed / 2);
    };

    const bounce = () => {
      if (!bouncerRef.current || !clonedRef.current) return;

      const elemText = bouncerRef.current.textContent || '';
      const contentArray = elemText.split(' ');
      let incrementingDelay = 0;

      if (ballRef.current) {
        ballRef.current.style.display = 'block';
      }

      contentArray.forEach((word, j) => {
        if (/\s/g.test(word)) return;

        const wordElement = document.createElement('span');
        wordElement.className = styles.word;
        wordElement.textContent = word;
        clonedRef.current.appendChild(wordElement);

        if (j + 1 < contentArray.length) {
          const space = document.createElement('span');
          space.innerHTML = '&nbsp;';
          clonedRef.current.appendChild(space);
        }

        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          const wordLength = wordElement.offsetWidth;
          const ballLeft = wordElement.offsetLeft + wordLength / 2;
          const ballTop = wordElement.offsetTop;

          const timer = setTimeout(() => {
            animateBall({ left: ballLeft, top: ballTop, wordLength, wordIndex: j });
          }, incrementingDelay);

          timers.push(timer);
          incrementingDelay += wordLength * bounceSpeed;
        });
      });

      timers.push(setTimeout(() => {
        if (ballRef.current) {
          ballRef.current.style.display = 'none';
        }
      }, incrementingDelay));
    };

    const initBouncer = () => {
      if (!bouncerRef.current) return;

      const elemText = bouncerRef.current.textContent || '';

      // Create cloned element
      const cloned = bouncerRef.current.cloneNode(true);
      cloned.className = `${styles.cloned} ${styles.bouncer}`;
      cloned.removeAttribute('contenteditable');
      cloned.textContent = '';
      clonedRef.current = cloned;

      bouncerRef.current.parentNode.appendChild(cloned);

      cloned.addEventListener('click', () => {
        resetBouncer();
        if (bouncerRef.current) {
          bouncerRef.current.focus();
          const range = document.createRange();
          range.selectNodeContents(bouncerRef.current);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
      });

      if (bouncerRef.current) {
        bouncerRef.current.style.display = 'none';
      }

      // Initialize ball
      if (!ballRef.current) {
        const ball = document.createElement('div');
        ball.className = styles.ball;
        ballRef.current = ball;
        cloned.appendChild(ball);
      }
    };

    // Set up event listeners for bouncer
    if (bouncerRef.current) {
      const handleBlur = () => {
        initBouncer();
        bounce();
      };

      const handleKeyPress = (e) => {
        if ((e.keyCode || e.which) === 13) {
          bouncerRef.current.blur();
        }
      };

      bouncerRef.current.addEventListener('blur', handleBlur);
      bouncerRef.current.addEventListener('keypress', handleKeyPress);

      // Set up ScrollTrigger for auto-bounce
      gsap.timeline({
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top 80%",
          onEnter: () => {
            if (bouncerRef.current && !clonedRef.current) {
              initBouncer();
              bounce();
            }
          },
          once: true
        }
      });

      // Cleanup function
      return () => {
        timers.forEach(t => clearTimeout(t));
        if (bouncerRef.current) {
          bouncerRef.current.removeEventListener('blur', handleBlur);
          bouncerRef.current.removeEventListener('keypress', handleKeyPress);
        }
      };
    }
  }, []);

  const [heroBgImg, setHeroBgImg] = useState();
  const [bouncerTitle, setBouncerTitle] = useState();
  const [fancyData, setFancyData] = useState(null);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get(`${apiurl}/api/campus/welfarehero`)
      .then(res => {
        setHeroBgImg(res.data.data.map(img => img.image));
      })
      .catch(err => console.error(err));

    axios.get(`${apiurl}/api/campus/bouncertitle`)
      .then(res => {
        setBouncerTitle(res.data.data.map(title => title.title))
      })
      .catch(err => console.error(err));

    axios.get(`${apiurl}/api/campus/fancytext`)
      .then(res => {
        setFancyData(res.data.data[0])
      })
      .catch(err => console.error(err));

    axios.get(`${apiurl}/api/campus/studentclubs`)
      .then(res => {
        setCardData(res.data.data)
      })
      .catch(err => console.error(err));
  },
    []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div ref={wrapperRef} className={styles.wrapper}>
        <div className={styles.content}>
          <section
  ref={heroSectionRef}
  className={`${styles.section} ${styles.heroSection}`}
>
  <img
   src={heroBgImg}
    alt="Hero Background"
    className={styles.heroImage}
  />
</section>
        </div>

 <div className={styles.imageContainer}>
          <img 
            ref={heroImageRef}
            src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" 
            alt="Hero overlay" 
            className={styles.heroImage}
          />
        </div>

      </div>

      {/* Bouncer Section */}
      <section
        ref={secondSectionRef}
        className={`${styles.section} ${styles.secondSection}`}
      >
        <div className={styles.bouncerContainer}>
          <p
            ref={bouncerRef}
            className={styles.bouncer}
            contentEditable
            suppressContentEditableWarning
          >
            {/* While some see them as the crazy ones, we see genius. */}{bouncerTitle}
          </p>
        </div>
      </section>
{/* Fancy Text Section */}
      <div className={styles.fancyText} aria-labelledby="news-heading">
  <img
    src={fancyData?.rowoneImage}
    alt="Hero overlay"
    className={styles.fancyImage}
  />
  <img
    src={fancyData?.rowtwoImage}
    alt="Hero overlay"
    className={styles.fancyImage}
  />


        <h1 id="news-heading" className={styles.fancyTitle}>
          Meghan And Harry's Baby
        </h1>

        <div className={styles.fancyTextBody}>
          <p>
            Buckingham Palace announced that Meghan had gone into labour during the early hours of May 6. 
            Harry was by her side, and an announcement would be made soon, read the broadcast. Shortly after, 
            <a href="https://www.instagram.com/sussexroyal/">@sussexroyal</a>, 
            the official Instagram of the couple, shared the news that a baby boy had been born.
          </p>

          <p>
            Upon greeting media outside Frogmore Cottage during the afternoon of May 6, Harry said: 
            "I'm so incredibly proud of my wife... How any woman does what they do is beyond comprehension."
          </p>
        </div>

        <span className={styles.pink}>2/3</span>
        <span className={styles.pink}>3/3</span>
        <span className={styles.pink}>1/3</span>
      </div>

      <div className={styles.spacer} aria-hidden="true"></div>



      {/* Student Clubs Section */}
      <section className={styles.cardsSection} aria-labelledby="clubs-heading">
        <h2 id="clubs-heading" className={styles.pageTitle}>
          Student Clubs
        </h2>

        <div className={styles.cardsContainer}>
          {cardData.map((card) => (
            <div className={styles.gameCard} key={card._id}>
              <div
                className={styles.gameCardCover}
                style={{
                  backgroundImage: `url(${card.image})`
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
      {/* Campus Events Gallery Section */}
      <section >
        <CampusEventsGallery />
        <AlumaniStudent />
        {/* <OurDiamonds/> */}

      </section>
    </div>
  );
};

export default MergedHeroComponent;