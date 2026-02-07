import React from 'react';
import styles from './internalComplaintsCommittee.module.css';
import CommonHero from '@/components/CommonHero';

const InternalComplaintsCommittee = () => {
    return (
        <div className={styles.pageContainer}>
            {/* Banner */}
          <CommonHero
          defaultImage={'/images/svgi1.jpg'}
         defaultTitle="Internal Complaints Committee"
           />

            <div className={styles.contentContainer}>
                {/* Intro */}
                <section className={styles.introText}>
                    <p>
                        The Internal Complaints Committee has been constituted for a period of two years.
                        The details of the committee members for Vellore and Chennai campuses are listed below.
                    </p>
                </section>

                {/* Vellore Campus */}
                <section className={styles.campusSection}>
                    <h2 className={styles.sectionTitle}>Svgi Campus</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.roleColumn}>Role</th>
                                    <th className={styles.nameColumn}>Name & Designation</th>
                                    <th className={styles.contactColumn}>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Convenor</td>
                                    <td>Dr. Shanthi C<br />(Professor HAG, SBST)</td>
                                    <td>Mobile: 96007 55022</td>
                                </tr>
                                <tr>
                                    <td>Member Secretary</td>
                                    <td>Ms. Sudha R<br />(Manager, TBI)</td>
                                    <td>Phone: 0416 220 2302</td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>Ms. Radhika R<br />(Visiting Faculty Law, Academy for Prisons and Correctional Administration, Vellore)</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>Dr. Mahalakshmi P<br />(Professor Grade 2, SELECT)</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>Dr. Gothandam K.M<br />(Professor HAG, SBST)</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>Dr. Kannabiran K<br />(Professor HAG, SBST)</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>Dr. Aruna Singh<br />(Professor Grade 1, SCHEME)</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Student Member</td>
                                    <td>Sharanya Pal<br />(22MSI0160)</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td><strong>Contact Email</strong></td>
                                    <td colSpan="2"><a href="mailto:icc@vit.ac.in" className={styles.contactLink}>icc@vit.ac.in</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Chennai Campus */}
                <section className={styles.campusSection}>
                    <h2 className={styles.sectionTitle}>Chennai Campus</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.roleColumn}>Role</th>
                                    <th className={styles.nameColumn}>Name & Designation</th>
                                    <th className={styles.contactColumn}>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Convenor</td>
                                    <td>Dr. M. Helen Santhi M<br />(Professor, SCE)</td>
                                    <td>
                                        Mobile: 9443186924<br />
                                        Email: <a href="mailto:helensanthi.m@vit.ac.in" className={styles.contactLink}>helensanthi.m@vit.ac.in</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>HR Team</td>
                                    <td>Ms. Jeyalekshmi B S</td>
                                    <td>
                                        Mobile: 9994480859<br />
                                        Email: <a href="mailto:jeyalekshmi.bs@vit.ac.in" className={styles.contactLink}>jeyalekshmi.bs@vit.ac.in</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>Ms. Radhika R<br />(Visiting Faculty Law)</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>Dr. Aruna R<br />(Asst. Professor, VITBS)</td>
                                    <td>
                                        Mobile: 9047712387<br />
                                        Email: <a href="mailto:aruna.r@vit.ac.in" className={styles.contactLink}>aruna.r@vit.ac.in</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Member</td>
                                    <td>Ms. S. Banumathi</td>
                                    <td>
                                        Mobile: 6369407144<br />
                                        Email: <a href="mailto:banumathi.s@vit.ac.in" className={styles.contactLink}>banumathi.s@vit.ac.in</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Student Member</td>
                                    <td>Nivedha.S<br />(PG Student, 21MIS1119)</td>
                                    <td>
                                        Mobile: 8122543056<br />
                                        Email: <a href="mailto:nivedha.s2021@vitstudent.ac.in" className={styles.contactLink}>nivedha.s2021@vitstudent.ac.in</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Student Member</td>
                                    <td>Lighittha P R<br />(UG Student, 22BLC1236)</td>
                                    <td>
                                        Mobile: 9940088718<br />
                                        Email: <a href="mailto:lighittha.pr@vitstudent.ac.in" className={styles.contactLink}>lighittha.pr@vitstudent.ac.in</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Secretary</td>
                                    <td>Mrs. Mary Joseph<br />(Section Supervisor, Administration)</td>
                                    <td>
                                        Mobile: 9840300478<br />
                                        Email: <a href="mailto:maryjoseph@vit.ac.in" className={styles.contactLink}>maryjoseph@vit.ac.in</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Contact Email</strong></td>
                                    <td colSpan="2"><a href="mailto:women.gcell@vit.ac.in" className={styles.contactLink}>women.gcell@vit.ac.in</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default InternalComplaintsCommittee;
