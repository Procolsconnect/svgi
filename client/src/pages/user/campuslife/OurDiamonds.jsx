import React from 'react';
import styles from './OurDiamonds.module.css';

const CoursesOutcome = () => {
  const cardsData = [
    {
      id: 1,
      image: 'https://assets.codepen.io/2585/Roboto.svg',
      alt: 'Art',
      description: 'Short and tiny content here.',
      linkText: 'Cool art',
      href: '#'
    },
    {
      id: 2,
      image: 'https://assets.codepen.io/2585/Entertainment.svg',
      alt: 'Art',
      description: 'The words here are tolerable but a bit long.',
      linkText: 'By Pablo Stanley',
      href: '#'
    },
    {
      id: 3,
      image: 'https://assets.codepen.io/2585/Mechanical+Love.svg',
      alt: 'Art',
      description: "I'm brief comparatively.",
      linkText: 'Find more',
      href: '#'
    },
    {
      id: 4,
      image: 'https://assets.codepen.io/2585/Waiting.svg',
      alt: 'Art',
      description: 'Sometimes the message is just right.',
      linkText: 'Share good art',
      href: '#'
    },
    {
      id: 5,
      image: 'https://assets.codepen.io/2585/Roboto.svg',
      alt: 'Art',
      description: 'Short and tiny content here.',
      linkText: 'Cool art',
      href: '#'
    },
    {
      id: 6,
      image: 'https://assets.codepen.io/2585/Entertainment.svg',
      alt: 'Art',
      description: 'The words here are tolerable but a bit long.',
      linkText: 'By Pablo Stanley',
      href: '#'
    },
    {
      id: 7,
      image: 'https://assets.codepen.io/2585/Mechanical+Love.svg',
      alt: 'Art',
      description: "I'm brief comparatively.",
      linkText: 'Find more',
      href: '#'
    },
    {
      id: 8,
      image: 'https://assets.codepen.io/2585/Waiting.svg',
      alt: 'Art',
      description: 'Sometimes the message is just right.',
      linkText: 'Share good art',
      href: '#'
    }
  ];

  return (
    <>
      {/* HERO */}
      <div className={styles.hero}>
        <img
          src="https://via.placeholder.com/1600x350/333333/ffffff?text=Hero+Background"
          alt="Hero Background"
          className={styles.heroImage}
        />
        <h1 className={styles.heroTitle}>Our Diamonds</h1>
      </div>

      {/* CARDS GRID */}
      <main className={styles.cardsMain}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.cardAnimationLayer}>
            <article className={styles.card}>
              <img src={card.image} alt={card.alt} className={styles.cardImage} />
              <p>{card.description}</p>
              <a href={card.href}>{card.linkText}</a>
            </article>
          </div>
        ))}
      </main>
    </>
  );
};

export default CoursesOutcome;