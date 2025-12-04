import React, { useState } from "react";
import styles from "./leadership.module.css";

export default function LeadershipPage() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardToggle = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const materialCards = [
    {
      name: "Christopher Walken",
      movie: "The Deer Hunter",
      img: "https://material-cards.s3-eu-west-1.amazonaws.com/thumb-christopher-walken.jpg",
      color: "Red",
      desc: "He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall...",
    },
    {
      name: "Sean Penn",
      movie: "Mystic River",
      img: "https://material-cards.s3-eu-west-1.amazonaws.com/thumb-sean-penn.jpg",
      color: "Pink",
      desc: "He has won two Academy Awards, for his roles in Mystic River (2003) and Milk (2008)...",
    },
    {
      name: "Clint Eastwood",
      movie: "Million Dollar Baby",
      img: "https://material-cards.s3-eu-west-1.amazonaws.com/thumb-clint-eastwood.jpg",
      color: "Purple",
      desc: "He rose to international fame with his role as the Man with No Name in Sergio Leone's Dollars trilogy...",
    },
  ];

  const quoteCards = [
    { title: "Mountain View", text: "Check out all of these gorgeous mountain trips..." },
    { title: "To The Beach", text: "Plan your next beach trip with these fabulous destinations" },
    { title: "Desert Destinations", text: "It's the desert you've always dreamed of" },
    { title: "Explore The Galaxy", text: "Seriously, straight up, just blast off into outer space today" },
  ];

  return (
    <div className={styles.body}>
      {/* HERO */}
      <div id="lp-hero" className={styles.hero}>
        <img src="/images/instu.jpg" alt="Hero Background" />
        <h1>Leadership</h1>
      </div>

      {/* Leadership Heading */}
      <div className={styles.leftHeading}>Leadership That Inspires</div>

      {/* Card Row 1 */}
      <div className={styles.wholeCard}>
        <div className={styles.card}>
          <div className={styles.overflow}>
            <div className={styles.model}>
              <img
                src="/images/WhatsApp_Image_2025-08-01_at_16.31.09_43d29991-removebg-preview.png"
                alt="Chairman"
                className={styles.imageModel}
              />
            </div>
          </div>
          <div className={styles.glass}></div>
          <div className={styles.content}>
            <h2>Thiru. P. VENKATACHALAM</h2>
            <p>Chairman</p>
          </div>
        </div>
        <p>
          Shree Venkateshwara group of institutions set to take the mission of
          implementation of the newest educational methodologies which enables
          the innovative thinking of students and initiative performance...
        </p>
      </div>

      {/* Card Row 2 */}
      <div className={styles.wholeCards}>
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.overflow}>
            <div className={styles.model}>
              <img
                src="/images/WhatsApp_Image_2025-08-01_at_16.15.06_95e75b66-removebg-preview.png"
                alt="Secretary"
                className={styles.imageModel}
              />
            </div>
          </div>
          <div className={styles.glass}></div>
          <div className={styles.content}>
            <h2>Mr.K.C.Karupanan</h2>
            <p>Secretary</p>
          </div>
        </div>
        <p>
          Shree Venkateshwara Group of Institutions takes keen interest in
          updating its infrastructures to meet the technological revolution...
        </p>
      </div>

      {/* MATERIAL CARDS SECTION */}
      <section className={styles.materialSection}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1>
              Material Cards Demo
              <br />
              <small>
                See full features on{" "}
                <a href="https://github.com/marlenesco/material-cards" target="_blank" rel="noreferrer">
                  Github
                </a>
              </small>
            </h1>
          </div>

          <div className={styles.row}>
            {materialCards.map((card, index) => (
              <div key={index} className={styles.colMd4}>
                <article
                  className={`${styles.materialCard} ${styles[card.color]} ${
                    activeCard === index ? styles.mcActive : ""
                  }`}
                >
                  <div className={styles.mcContent}>
                    <div className={styles.imgContainer}>
                      <img src={card.img} alt={card.name} />
                    </div>
                    <div className={styles.cardHeader}>
                      <span>{card.name}</span>
                      <strong>
                        Star {card.movie}
                      </strong>
                    </div>
                    <div className={styles.mcDescription}>{card.desc}</div>
                  </div>

                  <button className={styles.mcBtnAction} onClick={() => handleCardToggle(index)}>
                    <i className={activeCard === index ? "fa fa-times" : "fa fa-bars"}></i>
                  </button>

                  <div className={styles.mcFooter}>
                    <h4>Social</h4>
                    <div className={styles.socialLinks}>
                      <a href="#" className={styles.socialLink}><i className="fab fa-facebook"></i></a>
                      <a href="#" className={styles.socialLink}><i className="fab fa-twitter"></i></a>
                      <a href="#" className={styles.socialLink}><i className="fab fa-linkedin"></i></a>
                      <a href="#" className={styles.socialLink}><i className="fab fa-google-plus"></i></a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION + GRID CARDS */}
      <section className={styles.quoteSection}>
        <main className={styles.quoteMain}>
          <blockquote>I have never said any of those.</blockquote>
          <small>~ Multiple sources.</small>
        </main>

        <div className={styles.pageContent}>
          {quoteCards.map((c, i) => (
            <div key={i} className={styles.gridCard}>
              <div className={styles.gridContent}>
                <h2 className={styles.title}>{c.title}</h2>
                <p className={styles.copy}>{c.text}</p>
                <button className={styles.btn}>View Trips</button>
              </div>
            </div>
          ))}
        </div>

        <img src="/sun.png" alt="" className={styles.sun} />
        <img src="/left.png" alt="" className={styles.left} />
      </section>
    </div>
  );
}