import React, { useState, useEffect, useRef } from 'react';
import styles from './PlacementProcess.module.css';

const PlacementProcessPage = () => {
  const [typedBold, setTypedBold] = useState('');
  const boldText = 'Placement Process';

  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {

    setTypedBold('');
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current >= boldText.length) {
        clearInterval(intervalRef.current);
        return;
      }

      setTypedBold(boldText.slice(0, indexRef.current + 1));
      indexRef.current += 1;
    }, 150);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);


  const companies = [
    "https://media.istockphoto.com/id/1382305677/fr/vectoriel/illustration-vectorielle-de-logo-finance-%C3%A0-la-mode.jpg?s=612x612&w=0&k=20&c=XskfWT1IJtf2ijCRPOlIE1zOirMJhr6cJMWUFeq8usQ=",
    "https://media.istockphoto.com/id/1215256045/fr/vectoriel/safe-payment-logo-mod%C3%A8le-con%C3%A7oit-illustration-vectorielle.jpg?s=612x612&w=0&k=20&c=kjiV7pjQ6HuAv6S0_DXAzWpqmv2hVtrRZ8By8o4vLEw=",
    "https://media.istockphoto.com/id/914422452/fr/vectoriel/conception-moderne-pour-fintech.jpg?s=612x612&w=0&k=20&c=FARkUDv54TpJkSLFQDSm5IAXa27Fihkc7HjgvEY5G6A=",
    "https://media.istockphoto.com/id/1176474433/fr/vectoriel/logo-de-financement-dentreprise.jpg?s=612x612&w=0&k=20&c=jWWJNMQtec-dg9iqBdPHFFArkv_UxlxsTO9UpIcA41c=",
    "https://media.istockphoto.com/id/1039552802/fr/vectoriel/mod%C3%A8le-de-conception-de-vecteur-pour-les-entreprises-signe-carr%C3%A9.jpg?s=612x612&w=0&k=20&c=WkayMFocuP6ruPwBfrSdJ1Nfa0G7oO-lKvWZ-w-Lqh0=",
    "https://media.istockphoto.com/id/1031425422/fr/vectoriel/%C3%A9l%C3%A9ment-de-design-vectoriel-pour-les-entreprises-lettre-de-la-lettre-s-solution.jpg?s=612x612&w=0&k=20&c=C0sHivdcN2NQtt3zFjsuvOebGPPSb4kh9Cz3X7NGMpM=",
    "https://media.istockphoto.com/id/1031321208/fr/vectoriel/mod%C3%A8le-dembl%C3%A8me-de-vecteur-pour-les-entreprises.jpg?s=612x612&w=0&k=20&c=aEezG0Pc9gWDr_VAGq40QEcdhm1zPQPosNhsFG-fstE=",
    "https://media.istockphoto.com/id/965258910/fr/vectoriel/cr%C3%A9ation-de-mod%C3%A8le-pour-le-vecteur-capital-logo.jpg?s=612x612&w=0&k=20&c=BJXOdU-eJSoYXdGEOHqZj0ZC8ZlOFEArqIQXhKCEhSM=",
    "https://media.istockphoto.com/id/859147206/fr/vectoriel/ic%C3%B4ne-de-lentreprise.jpg?s=612x612&w=0&k=20&c=Il1_2WbatayQfiMIsrttDl_uRX6kvafyLWm7lyyke5c=",
    "https://media.istockphoto.com/id/1156207638/fr/vectoriel/conception-dillustration-dic%C3%B4ne-de-vecteur-daile.jpg?s=612x612&w=0&k=20&c=-l-fVJCqI7DOi16X3wruAbOyWR6kHT7-ZkYzri4Eez4="
  ];

  const cards = [
    {
      image: "https://picsum.photos/id/1053/800/600",
      title: "Internal campus assistance",
      description: "We provide a smooth campus placement experience by offering structured training, industry-focused guidance, and dedicated support. Our goal is to connect students with top companies, helping them secure successful career opportunities.",
      imageFirst: true
    },
    {
      image: "https://picsum.photos/id/1041/800/600",
      title: "External collaborative assistance",
      description: "We developed our curriculum in partnership with industry experts to connect academic learning with real-world corporate needs.",
      imageFirst: false
    },
    {
      image: "https://picsum.photos/id/1039/800/600",
      title: "100% Placement Assistance",
      description: "From resume building to mock interviews and company-specific preparation – we stand with you until you land your dream job.",
      imageFirst: true
    }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <img src="hero img.jpg" alt="Placement Background" />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>Placement Process</h1>
      </div>
{/* placementprocess */}
      <main className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>
                <span className={styles.bold}>{typedBold}</span>

              </h1>

              <p>
         The SVGI Placement Process is a well-organized and student-focused approach aimed at equipping learners for successful careers by improving their skills, familiarizing them with industry standards, and linking them with top recruiters. By implementing structured training, evaluations, counseling, and recruitment events, this process guarantees that each qualified student makes a seamless transition from their academic journey to a professional career with both confidence and capability.
              </p>
            </div>

            <div className={styles.heroImage}>
              <div className={styles.shapes}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
                <div className={styles.shape3}></div>
              </div>

              <img
                src="https://ik.imagekit.io/gopichakradhar/assets/image.png"
                className={styles.heroImg}
                alt="Education Illustration"
              />
            </div>
          </div>
        </div>
      </main>

      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.cardRow}>
              {card.imageFirst ? (
                <>
                  <div className={styles.cardImage}>
                    <img src={card.image} alt="" />
                  </div>
                  <div className={styles.cardCopy}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.cardCopy}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                  <div className={styles.cardImage}>
                    <img src={card.image} alt="" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.recruitSection}>
        <div className={styles.headingBox}>
          <div className={styles.headingLine}></div>
          <div className={styles.headingText}>
            <span>Recruiting Companies</span>
          </div>
        </div>

        <div className={styles.slider}>
          <ul className={styles.list}>
            {companies.map((company, index) => (
              <li key={index} className={styles.item} style={{ '--position': index + 1 }}>
                <img src={company} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <p className='pt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aliquid quasi ipsum reprehenderit, praesentium veniam ullam magnam vitae fugiat soluta accusantium sequi eius quo sit. Ab voluptas assumenda architecto dicta.</p>
      </section>

    </div>
  );
};

export default PlacementProcessPage;
