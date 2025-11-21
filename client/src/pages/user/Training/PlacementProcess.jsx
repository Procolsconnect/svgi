import React, { useState, useEffect, useRef } from 'react';
import './PlacementProcess.css';

const PlacementProcessPage = () => {
  const [typedBold, setTypedBold] = useState('');
  const [typedItalic, setTypedItalic] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const boldText = 'Online';
  const italicText = 'education';

  useEffect(() => {
    let boldIndex = 0;
    let italicIndex = 0;

    const typeBold = setInterval(() => {
      if (boldIndex < boldText.length) {
        setTypedBold(prev => prev + boldText.charAt(boldIndex));
        boldIndex++;
      } else {
        clearInterval(typeBold);
        // Start typing italic text after bold is complete
        const typeItalic = setInterval(() => {
          if (italicIndex < italicText.length) {
            setTypedItalic(prev => prev + italicText.charAt(italicIndex));
            italicIndex++;
          } else {
            clearInterval(typeItalic);
            setIsTypingComplete(true);
          }
        }, 120);
      }
    }, 150);

    return () => {
      clearInterval(typeBold);
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
      title: "Distribution of Executable Versions",
      description: "We ensure seamless placement opportunities by connecting students with top-tier companies, offering comprehensive training and support throughout the process.",
      imageFirst: true
    },
    {
      image: "https://picsum.photos/id/1041/800/600",
      title: "Industry-Ready Training",
      description: "Our curriculum is designed in collaboration with industry experts to bridge the gap between academics and real-world corporate requirements.",
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
    <div className="placement-process-page">
      {/* Small Hero */}
      <div className="pp-hero">
        <img src="hero img.jpg" alt="Placement Background" />
        <div className="pp-hero-overlay" />
        <h1 className="pp-hero-title">Placement Process</h1>
      </div>

      {/* Big Modern Hero */}
      <main className="pp-hero-section">
        <div className="pp-container-hero">
          <div className="pp-hero-content">
            <div className="pp-hero-text">
              <h1>
                <span className="pp-bold">{typedBold}</span>
                {typedBold.length === boldText.length && (
                  <>
                    <br />
                    <span className="pp-italic">{typedItalic}</span>
                  </>
                )}
              </h1>
              <p>
                Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,<br />
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="pp-hero-image">
              <div className="pp-background-shapes">
                <div className="pp-shape-1"></div>
                <div className="pp-shape-2"></div>
                <div className="pp-shape-3"></div>
              </div>
              <img 
                src="https://ik.imagekit.io/gopichakradhar/assets/image.png" 
                className="pp-hero-img" 
                alt="Education Illustration" 
              />
            </div>
          </div>
        </div>
      </main>

      {/* 3-Card Alternating Section */}
      <section className="pp-cards-section">
        <div className="pp-cards-container">
          {cards.map((card, index) => (
            <div key={index} className="pp-card-row">
              {card.imageFirst ? (
                <>
                  <div className="pp-card-image">
                    <img src={card.image} alt={`Card ${index + 1}`} />
                  </div>
                  <div className="pp-card-copy">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="pp-card-copy">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                  <div className="pp-card-image">
                    <img src={card.image} alt={`Card ${index + 1}`} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Recruiting Companies Section */}
      <section className="pp-recruit-section">
        <div className="pp-heading-box">
          <div className="pp-heading-line"></div>
          <div className="pp-heading-text">
            <span>Recruiting Companies</span>
          </div>
        </div>
        <div className="pp-slider">
          <ul className="pp-list">
            {companies.map((company, index) => (
              <li key={index} className="pp-item" style={{ '--position': index + 1 }}>
                <img src={company} alt={`Company ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PlacementProcessPage;