import React from 'react';

const SVGITimeline = () => {
  const timelineData = [
    {
      year: '2005',
      title: 'Foundation of SVGI',
      description: 'Shree Venkateshwara Group of Institutions (SVGI) was established with a strong vision to provide quality education and build a solid academic foundation for future professionals.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rosario:ital@1&family=Roboto+Mono:wght@700&family=Proza+Libre&display=swap');

        /* BASE GRID SETUP */
        .timeline-wrapper {
          display: grid;
          min-height: 100vh;
          background: #ffffff;
          color: #1a1a1a;
          margin: 0;
          font-family: sans-serif;
        }

        /* TIMELINE WRAPPER */
        .timeline {
          place-self: center;
          max-width: 50em;
          padding: 2em 1em;
          display: grid;
        }

        /* TIMELINE ITEM */
        .timeline article {
          --size: .625em;
          --highlight: #0b3c8a;

          --marker:
            radial-gradient(circle closest-side,
              var(--highlight) calc(100% - 1px), transparent)
            0 0 / 100% var(--size);

          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2em;
          margin-top: -1px;

          background:
            var(--marker),
            linear-gradient(var(--highlight) 0 0) 50% / 2px;

          background-repeat: no-repeat;
        }

        /* FIRST MARKER */
        .timeline article:first-child {
          --marker:
            linear-gradient(var(--highlight) 0 0)
            50% 0 / var(--size) calc(.5 * var(--size));
        }

        /* ALTERNATE IMAGE POSITION */
        .timeline article:nth-child(odd) img {
          grid-area: 1 / 1;
          justify-self: end;
        }

        /* SPACING */
        .timeline article:not(:last-child) {
          padding-bottom: 1em;
        }

        /* ROUNDED CHILDREN */
        .timeline article > * {
          border-radius: var(--size);
        }

        /* CONTENT CARD */
        .timeline__content {
          padding: 1em;
          background: rgba(11, 60, 138, 0.06);
        }

        /* TEXT STYLES */
        .timeline h1 {
          margin: 0 0 .625em;
          color: #0b3c8a;
          font: italic 1.375em/1 Rosario, sans-serif;
          text-transform: capitalize;
        }

        .timeline time {
          font: 700 2.5em/1.25 "Roboto Mono", monospace;
          color: #0b3c8a;
        }

        .timeline hr {
          opacity: 0.3;
        }

        .timeline p {
          margin: 0;
          padding-top: .5em;
          font: 1em "Proza Libre", sans-serif;
        }

        /* IMAGE */
        .timeline img {
          box-sizing: border-box;
          border: solid 2px #0b3c8a;
          width: min(100%, 13em);
          aspect-ratio: 1.3;
          object-fit: cover;
        }
      `}</style>

      <div className="timeline-wrapper">
        <section className="timeline">
          {timelineData.map((item, index) => (
            <article key={index}>
              <div className="timeline__content">
                <h1>{item.title}</h1>
                <time dateTime={item.year}>{item.year}</time>
                <hr />
                <p>{item.description}</p>
              </div>
              <img src={item.image} alt={item.alt} />
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

export default SVGITimeline;