import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './hostel.module.css';
import CommonHero from '../../../components/CommonHero';

const API_URL = import.meta.env.VITE_API_URL + '/api/campus';

const HostelPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [hostelData, setHostelData] = useState({
    cards: [],
    faqs: []
  });
  const [loading, setLoading] = useState(true);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardRes, faqRes] = await Promise.all([
          axios.get(`${API_URL}/hostelcard`),
          axios.get(`${API_URL}/hostelfaq`)
        ]);

        setHostelData({
          cards: cardRes.data.data || [],
          faqs: faqRes.data.data || []
        });
      } catch (err) {
        console.error("Error fetching hostel data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { cards, faqs } = hostelData;

  if (loading) return null; // Or a subtle loader

  return (
    <div className={styles['hostel__wrapper']}>
      {/* HERO SECTION */}
      <CommonHero apiEndpoint="/api/campus/hostelhero" />

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
        {cards.length > 0 ? (
          cards.map((card, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <div key={card._id} className={styles['hostel__row']}>
                {imageFirst ? (
                  <>
                    <div className={styles['hostel__col-image']}>
                      <div className={styles['hostel__slider']}>
                        {/* Rendering twice to preserve the exact CSS animation structure */}
                        <img src={card.image} alt={`${card.title} 1`} />
                        <img src={card.image} alt={`${card.title} 2`} />
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
                        <img src={card.image} alt={`${card.title} 1`} />
                        <img src={card.image} alt={`${card.title} 2`} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })
        ) : (
          /* Static Fallback for Cards if API is empty */
          <>
            <div className={styles['hostel__row']}>
              <div className={styles['hostel__col-image']}>
                <div className={styles['hostel__slider']}>
                  <img src="https://picsum.photos/id/1053/400/250" alt="Default 1" />
                  <img src="https://picsum.photos/id/1047/400/250" alt="Default 2" />
                </div>
              </div>
              <div className={styles['hostel__col-copy']}>
                <h2>Comfortable Accommodations</h2>
                <p>Spacious rooms with study areas and high-speed Wi-Fi access.</p>
              </div>
            </div>
            <div className={styles['hostel__row']}>
              <div className={styles['hostel__col-copy']}>
                <h2>Nutritious Dining</h2>
                <p>Hygienic mess facility serving a variety of delicious and healthy meals.</p>
              </div>
              <div className={styles['hostel__col-image']}>
                <div className={styles['hostel__slider']}>
                  <img src="https://picsum.photos/id/1056/400/250" alt="Default 3" />
                  <img src="https://picsum.photos/id/1060/400/250" alt="Default 4" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* FAQ SECTION */}
      <div className={styles['hostel__faq-header']}>Frequently Asked Questions</div>

      <div className={styles['hostel__faq-content']}>
        {faqs.length > 0 ? (
          faqs.map((faq) => (
            <div key={faq._id} className={styles['hostel__faq-question']}>
              <div
                className={`${styles['hostel__plus']} ${openFaq === faq._id ? styles['hostel__plus-open'] : ''}`}
              >
                +
              </div>
              <label
                className={styles['hostel__panel-title']}
                onClick={() => toggleFaq(faq._id)}
              >
                {faq.question}
              </label>
              <div
                className={`${styles['hostel__panel-content']} ${openFaq === faq._id ? styles['hostel__panel-content-open'] : ''}`}
              >
                {faq.answer}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', padding: '2rem' }}>General rules and regulations information will be updated soon.</p>
        )}
      </div>
    </div>
  );
};

export default HostelPage;