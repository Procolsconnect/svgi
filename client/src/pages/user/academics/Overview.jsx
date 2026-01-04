import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./overview.module.css";
import CommonHero from "../../../components/CommonHero";

export default function OverviewPage() {
  const [cards, setCards] = useState([]);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const [cardRes, contentRes] = await Promise.all([
          axios.get(`${API}/api/academicscard`),
          axios.get(`${API}/api/academicscontent`)
        ]);

        setCards(cardRes.data.data || []);
        setContents(contentRes.data.data || []);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [API]);

  const gridImages = [
    { class: styles.one, src: 11 },
    { class: styles.three, src: 13 },
    { class: styles.two, src: 12 },
    { class: styles.four },
    { class: styles.five, src: 14 },
    { class: styles.six },
    { class: styles.seven, src: 15 },
    { class: styles.eight },
    { class: styles.nine },
    { class: styles.ten, src: 16 },
    { class: styles.eleven, src: 17 },
    { class: styles.twelve, src: 18 },
  ];

  if (loading) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.opContainer}>
      <CommonHero
        apiEndpoint="/api/academicshero"
        defaultTitle="Academics"
        sectionsSelector="section"
        showArrow={true}
      />


      <section className={styles.opHeroSection}>
        <div className={styles.opText}>
          <p className={styles.opTextShort}>shree Venkateshwara Group of Institutions </p>
          <h1 className={styles.opTextTitle}>Academics</h1>
          <p className={styles.opTextDescription}>
            At Shree Venkateshwara Group of Institutions (SVGI), academics focus on quality education, student-centric learning, and strong skill development. The institution follows a flexible Choice Based Credit System with well-structured core and elective courses supported by ability and skill enhancement modules. SVGI emphasizes modern teaching methods and activity-based learning through practical labs, projects, workshops, and internships, ensuring students gain real-world exposure and industry-ready competencies. Continuous academic support, assessments, and mentoring help every student progress confidently and achieve their academic goals.
          </p>
          <a className={styles.opTextButton} href="#">Learn more</a>
        </div>

        <div className={styles.opGrid}>
          {gridImages.map((g, i) => (
            <div key={i} className={`${styles.opGridItem} ${g.class}`}>
              {g.src && <img src={`https://picsum.photos/500/500?random=${g.src}`} alt="" />}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.projcardContainer}>
        {cards.map((c) => (
          <div key={c._id} className={`${styles.projcard} ${styles.projcardBlue}`}>
            <img className={styles.projcardImg} src={c.image} alt="" />
            <div className={styles.projcardTextbox}>
              <div className={styles.projcardTitle}>{c.title}</div>
              <div className={styles.projcardSubtitle}>{c.subtitle}</div>
              <div className={styles.projcardBar}></div>
              <p>{c.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.contentsPage}>
        <main className={styles.contentsMain}>
          <h1>Contents</h1>
          {contents.map((c, index) => (
            <div key={c._id} className={styles.item}>
              <div className={styles.itemNumber}>{index + 1}</div>
              <div className={styles.itemTopic}>
                <div className={styles.itemTopicTitle}>{c.content}</div>
                <div className={styles.itemTopicAuthor}>{c.name}</div>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
}