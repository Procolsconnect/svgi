import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './AdmissionAdv.module.css';

const API_BASE = import.meta.env.VITE_API_URL + "/api"

const AdmissionPage = () => {
  const imageMotionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textContentRef = useRef(null);
  const featuresRef = useRef(null);
  const sectionRef = useRef(null);

  const [advCards, setAdvCards] = useState([]);
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardsRes, facultyRes] = await Promise.all([
          axios.get(`${API_BASE}/advertisementcard`),
          axios.get(`${API_BASE}/advertisemenfaculty`)
        ]);

        if (cardsRes.data.success) {
          setAdvCards(cardsRes.data.data || []);
        }
        if (facultyRes.data.success) {
          setFaculties(facultyRes.data.data || []);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const handleScroll = () => {
      const rect = target.getBoundingClientRect();
      if (rect.top <= 200) {
        target.classList.add(styles['animate-active']);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (imageMotionRef.current) {
        const imageSection = imageMotionRef.current.closest(`.${styles['alp-section2']}`);
        if (imageSection) {
          const rect = imageSection.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
          const rotation = 90 - (progress * 90);
          imageMotionRef.current.style.transform = `rotateX(${rotation}deg)`;
        }
      }

      const elements = [
        { ref: titleRef, opacity: '1', transform: 'translateY(0)' },
        { ref: subtitleRef, opacity: '1', transform: 'translateY(0)' }
      ];

      elements.forEach(item => {
        if (item.ref.current) {
          const rect = item.ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            item.ref.current.style.opacity = item.opacity;
            item.ref.current.style.transform = item.transform;
          }
        }
      });

      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll(`.${styles['alp-feature']}`);
        features.forEach((feature, index) => {
          if (index < 4) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0) scale(1)';
          } else {
            const rect = feature.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
              feature.style.opacity = '1';
              feature.style.transform = 'translateY(0) scale(1)';
            }
          }
        });
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [faculties]); // Re-run when faculties change to attach observers to new elements

  const carouselItems = advCards.length > 0 ? advCards.map(c => c.image) : [
    "https://images.unsplash.com/photo-1758314896569-b3639ee707c4?q=80&w=715&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1671649240322-2124cd07eaae?q=80&w=627&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1673029925648-af80569efc46?q=80&w=687&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1666533099824-abd0ed813f2a?q=80&w=687&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1671105035554-7f8c2a587201?q=80&w=627&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1686750875748-d00684d36b1e?q=80&w=687&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1686844462591-393ceae12be0?q=80&w=764&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1686839181367-febb561faa53?q=80&w=687&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1671199850329-91cae34a6b6d?q=80&w=627&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1685655611311-9f801b43b9fa?q=80&w=627&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1675598468920-878ae1e46f14?q=80&w=764&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1718036094878-ecdce2b1be95?q=80&w=715&auto=format&fit=crop"
  ];

  return (
    <div className={styles['alp-wrapper']}>
      {/* Animation Section */}
      <section className={styles['alp-animation-section']} ref={sectionRef}>
        <div className={styles['alp-scene']}>
          <div className={styles['alp-move-number']}>
            <span className={styles['alp-last-item']}>6</span>
          </div>
          <div className={styles['alp-number-container']}>
            <span className={styles['alp-mask-number']}>202</span>
          </div>
        </div>

        <div className={styles['alp-scene2']}>
          <div className={styles['alp-move-letter']}>
            <span className={styles['alp-last-item']}></span>
          </div>
          <div className={styles['alp-msn-container']}>
            <span className={styles['alp-mask-text']}>
              admission goin<span>g</span>
            </span>
          </div>
        </div>
      </section>
      <div className={styles['alp-left-heading']}>Your Dream Course Awaits</div>

      {/* Hero Section */}
      <section className={styles['alp-hero-section']}>
        <div className={`${styles['alp-hero']} ${styles['alp-container']}`}>
          <div className={styles['alp-hero__image']}>
            <div className={styles['alp-hero__image_img']}>
              <img src="https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg" alt="Hero" />
            </div>
            <div className={styles['alp-img__after_dot']}></div>
          </div>
          <div className={styles['alp-link']}>
            <a href="#" target="_blank">
              <span className={styles['alp-link__arrow']}>⟶</span>
              <span className={styles['alp-link__title']}>Register <br /> Now</span>
            </a>
          </div>
          <div className={styles['alp-hero__title']}>
            <h1>
              <span className={styles['alp-span__before_dot']}>Kickstart</span>
              <span>Your Dream</span>
              <span className={styles['alp-title__bg_gradient']}>Career</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className={styles['alp-loop-images']}>
        <div
          className={styles['alp-carousel-track']}
          style={{ animationDuration: `${carouselItems.length * 5}s` }}
        >
          {carouselItems.map((src, index) => (
            <div key={index} className={styles['alp-carousel-item']} style={{ '--i': index + 1 }}>
              <img src={src} alt={`carousel ${index + 1}`} />
            </div>
          ))}
          {carouselItems.map((src, index) => (
            <div key={`b-${index}`} className={styles['alp-carousel-item']}>
              <img src={src} alt={`carousel duplicate ${index + 1}`} />
            </div>
          ))}
        </div>
        <span className={styles['alp-scroll-down']}>Scroll down <span className={styles['alp-arrow']}>↓</span></span>
      </section>

      {/* Image Motion Section */}
      <section className={styles['alp-section2']}>
        <div className={`${styles['alp-image-motion']}`} ref={imageMotionRef}>
          <picture>
            <img src="https://i.postimg.cc/1ztkf4hX/moveimage.png" alt="motion" />
          </picture>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles['alp-section3']}>
        <div className={styles['alp-container']}>
          <h1 className={`${styles['alp-title']}`} ref={titleRef}>Info About Admission</h1>
          <p className={`${styles['alp-subtitle']}`} ref={subtitleRef}>Through the Guidance of Admission Officers</p>
          <div className={`${styles['alp-text-content']}`} ref={textContentRef}>
            <p className={styles['alp-text']}>Reliable guidance, transparent communication, and a student-first approach define our admission officers.</p>
          </div>
          <div className={`${styles['alp-features']}`} ref={featuresRef}>
            {faculties.map((fac, idx) => (
              <figure key={fac._id || idx} className={`${styles['alp-snip0051']} ${styles['alp-feature']}`}>
                <img src={fac.image || `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample${(idx % 4) + 1}.jpg`} alt={fac.name} />
                <div className={styles['alp-icons']}>
                  <a href={fac.page || "#"}><i className="ion-ios-home-outline"></i></a>
                  <a href={`mailto:${fac.email}`}><i className="ion-ios-email-outline"></i></a>
                  <a href={`tel:${fac.mobile}`}><i className="ion-ios-telephone-outline"></i></a>
                </div>
                <figcaption>
                  <h2>{fac.name?.split(' ')[0]} <span>{fac.name?.split(' ').slice(1).join(' ')}</span></h2>
                  <p>{fac.description}</p>
                </figcaption>
              </figure>
            ))}

            {faculties.length === 0 && (
              <>
                <figure className={`${styles['alp-snip0051']} ${styles['alp-feature']}`}>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sample1" />
                  <figcaption>
                    <h2>Judy <span>Havelock</span></h2>
                    <p>If good things lasted forever, would we appreciate how precious they are?</p>
                  </figcaption>
                </figure>
                <figure className={`${styles['alp-snip0051']} ${styles['alp-feature']}`}>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg" alt="sample4" />
                  <figcaption>
                    <h2>Lisl <span>Baum</span></h2>
                    <p>Why can't I ever build character at a Miami condo or a casino somewhere?</p>
                  </figcaption>
                </figure>
              </>
            )}
          </div>
        </div>
      </section>

      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
    </div>
  );
};

export default AdmissionPage;