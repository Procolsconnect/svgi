import CommonHero from '@/components/CommonHero'
import styles from './examination.module.css'

const ControllerOfExaminations = () => {
  return (
    <>
    <section className={styles.section}>
<CommonHero
defaultTitle={'Examination'}
defaultImage={'/images/paramedical.jpeg'} 
/>


      <div className={styles.container}>

        {/* Title */}
        <h1 className={styles.title}>Controller of Examinations</h1>
        <hr className={styles.divider} />

        {/* Top content */}
        <div className={styles.top}>
          <div className={styles.text}>
            <p>
              The Office of the Controller of Examinations is responsible for the
              preparation, scheduling, and conduct of the Final Assessment Test (FAT)
              for all the programmes offered by the institute. It also facilitates
              the central valuation of answer scripts and the timely publication of
              results.
            </p>

            <p>
              Issuing Grade Certificates, Consolidated Statement of Grades and
              Provisional Certificates as and when candidates become eligible to
              receive the same.
            </p>
          </div>

          <div className={styles.imageBox}>
            <img
              src="/images/paramedical.jpeg"
              alt="Students writing examination"
            />
          </div>
        </div>

        {/* Bottom content */}
        <div className={styles.bottom}>

          {/* Responsibilities */}
          <div className={styles.responsibilities}>
            <ol>
              <li>The issue of Transcripts</li>
              <li>Preparation of Degree Certificates</li>
              <li>Preparation of Rank List / List of Gold Medalists</li>
              <li>
                Providing genuineness/verification services to various
                stakeholders such as Government authorities, corporate bodies,
                and educational institutions
              </li>
              <li>Facilitating Paper Seeing and Revaluation Processes</li>
              <li>
                Arranging for Pre and Post Auditing of Question Papers and
                Answer Booklets by both internal and external subject experts
              </li>
              <li>The issue of Duplicate Certificates</li>
            </ol>
          </div>

          {/* Vertical separator */}
          <div className={styles.separator}></div>

          {/* Services */}
          <div className={styles.services}>
            <div className={styles.serviceGroup}>
              <p className={styles.serviceTitle}>➜ CGPA Equivalence Certificate</p>
              <button>CGPA Conversion</button>
            </div>

            <div className={styles.serviceGroup}>
              <p className={styles.serviceTitle}>➜ Downloads</p>
              <button>Certificate Duplicate</button>
              <button>Format for Affidavit</button>
              <button>Transcripts Form</button>
            </div>
          </div>

        </div>
      </div>
    </section>

   
    </>
  )
}

export default ControllerOfExaminations
