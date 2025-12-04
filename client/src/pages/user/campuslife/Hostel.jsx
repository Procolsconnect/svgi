import React, { useState } from 'react';
import styles from './hostel.module.css';

const HostelPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqData = [
    {
      id: 'q1',
      question: 'What is the meaning of life?',
      answer: '42'
    },
    {
      id: 'q2',
      question: 'How much wood would a woodchuck chuck?',
      answer: 'A woodchuck would chuck all the wood he could chuck, if a woodchuck could chuck wood!'
    },
    {
      id: 'q3',
      question: 'What happens if Pinocchio says, "my nose will grow now"?',
      answer: (
        <>
          Certain questions are better left{' '}
          <a href="https://en.wikipedia.org/wiki/The_Unanswered_Question" target="_blank" rel="noopener noreferrer">
            unanswered
          </a>.
        </>
      )
    }
  ];

  const cardsData = [
    {
      images: [
        'https://picsum.photos/id/1053/400/250',
        'https://picsum.photos/id/1047/400/250'
      ],
      title: 'Distribution of Executable Versions',
      description: 'This processing may include your modifications in the Source form of digital data.',
      imageFirst: true
    },
    {
      images: [
        'https://picsum.photos/id/1056/400/250',
        'https://picsum.photos/id/1060/400/250'
      ],
      title: 'Description of Modifications',
      description: 'This processing may include your modifications in the Source form of digital data.',
      imageFirst: false
    },
    {
      images: [
        'https://picsum.photos/id/1070/400/250',
        'https://picsum.photos/id/1084/400/250'
      ],
      title: 'This Agreement is Published',
      description: 'This processing may include your modifications in the Source form of digital data.',
      imageFirst: true
    }
  ];

  return (
    <div className={styles['hostel__wrapper']}>
      {/* HERO SECTION */}
      <div id="hostel__hero" className={styles['hostel__hero']}>
        <img src="hero img.jpg" alt="Hero Background" />
        <div className={styles['hostel__hero-overlay']}></div>
        <h1>SVGI Hostel</h1>
      </div>

      {/* HOSTEL CONTAINER SECTION */}
      <div className={styles['hostel__container']}>
        <div className={styles['hostel__content']}>
          <p>
            The SVGI Hostel provides a peaceful and secure environment for students.
            With modern facilities, hygienic food, and 24/7 support, students can focus
            on their studies while enjoying a home-like atmosphere.
          </p>
        </div>
        <div className={styles['hostel__isoCardStack']}>
          <div>
            <img src="https://assets-prd.ignimgs.com/2022/11/07/sky-children-of-the-light-button-fin2-1667846466332.jpg" alt="Hostel 1" />
            <div>
              <img src="https://cdn.wccftech.com/wp-content/uploads/2020/06/Hades-Blood-Price-Update.jpg" alt="Hostel 2" />
              <div>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/Among%20Us.jpg" alt="Hostel 3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className={styles['hostel__cards-container']}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles['hostel__row']}>
            {card.imageFirst ? (
              <>
                <div className={styles['hostel__col-image']}>
                  <div className={styles['hostel__slider']}>
                    <img src={card.images[0]} alt={`${card.title} 1`} />
                    <img src={card.images[1]} alt={`${card.title} 2`} />
                  </div>
                </div>
                <div className={styles['hostel__col-copy']}>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className={styles['hostel__col-copy']}>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
                <div className={styles['hostel__col-image']}>
                  <div className={styles['hostel__slider']}>
                    <img src={card.images[0]} alt={`${card.title} 1`} />
                    <img src={card.images[1]} alt={`${card.title} 2`} />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* FAQ SECTION */}
      <div className={styles['hostel__faq-header']}>Frequently Asked Questions</div>

      <div className={styles['hostel__faq-content']}>
        {faqData.map((faq) => (
          <div key={faq.id} className={styles['hostel__faq-question']}>
            <div 
              className={`${styles['hostel__plus']} ${openFaq === faq.id ? styles['hostel__plus-open'] : ''}`}
            >
              +
            </div>
            <label 
              className={styles['hostel__panel-title']} 
              onClick={() => toggleFaq(faq.id)}
            >
              {faq.question}
            </label>
            <div 
              className={`${styles['hostel__panel-content']} ${openFaq === faq.id ? styles['hostel__panel-content-open'] : ''}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelPage;