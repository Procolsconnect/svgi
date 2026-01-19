import React from 'react';
import styles from './History.module.css';

const SVGITimeline = () => {
  const timelineData = [
    {
      year: '2005',
      title: 'Foundation of SVGI',
      description: 'Shree Venkateshwara Group of Institutions (SVGI) was established with a strong vision to provide quality education and build a solid academic foundation for future professionals.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400',
      alt: 'SVGI foundation'
    },
    {
      year: '2010',
      title: 'Academic Expansion',
      description: 'SVGI expanded its academic offerings by introducing multiple undergraduate programs in engineering, arts, science, paramedical, and nursing disciplines.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400',
      alt: 'academic growth'
    },
    {
      year: '2015',
      title: 'Campus & Infrastructure Growth',
      description: 'The campus was developed with modern classrooms, advanced laboratories, libraries, hostels, sports facilities, and a student-friendly learning environment.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400',
      alt: 'campus infrastructure'
    },
    {
      year: '2019',
      title: 'Placements & Industry Collaboration',
      description: 'A dedicated placement cell was strengthened with industry tie-ups, skill-development programs, internships, and career-oriented training initiatives.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400',
      alt: 'placements'
    },
    {
      year: '2023',
      title: 'Digital Learning & Research Focus',
      description: 'SVGI embraced digital transformation through e-learning platforms, innovation labs, research initiatives, and technology-driven academic practices aligned with global standards.',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=400',
      alt: 'digital education'
    }
  ];

  return (
    <div className={styles.timelineWrapper}>
      <section className={`${styles.timeline} ${styles.section}`}>
        {timelineData.map((item, index) => (
          <article key={index}>
            <div className={styles.timelineContent}>
              <h2 >{item.title}</h2 >
              <time dateTime={item.year}>{item.year}</time>
              <hr />
              <p>{item.description}</p>
            </div>
            <img src={item.image} alt={item.alt} />
          </article>
        ))}
      </section>
    </div>
  );
};

export default SVGITimeline;

