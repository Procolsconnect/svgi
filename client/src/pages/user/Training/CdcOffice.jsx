import React from 'react'
import CommonHero from '../../../components/CommonHero'
import CompanySlider from '../../../components/CompanySlider'
import styles from './cdcoffice.module.css'

const CdcOffice = () => {
    return (
        <div>
            <CommonHero
                defaultTitle='Cdc Office'
                defaultImage='/images/svgi2.jpg' />

            {/* Organizational Hierarchy Section */}
            <section className={styles.orgSection}>
                <div className={styles.orgContainer}>
                    <h2 className={styles.orgTitle}>Our Team</h2>

                    {/* Deputy Director */}
                    <div className={styles.deputyDirector}>
                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/deputy-director.jpg" alt="Dr. Ramanathan K" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Dr. Ramanathan K</h3>
                                <p className={styles.profileTitle}>Deputy Director</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.deputyDirector}>
                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/deputy-director.jpg" alt="Dr. Ramanathan K" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Dr. Ramanathan K</h3>
                                <p className={styles.profileTitle}>Deputy Director</p>
                            </div>
                        </div>
                    </div>

                    {/* Assistant Directors */}
                    <div className={styles.assistantDirectors}>
                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/jayakumar.jpg" alt="Dr. Jayakumar S" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Dr. Jayakumar S</h3>
                                <p className={styles.profileTitle}>Assistant Director</p>
                            </div>
                        </div>

                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/nancy.jpg" alt="Dr. Nancy Victor" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Dr. Nancy Victor</h3>
                                <p className={styles.profileTitle}>Assistant Director</p>
                            </div>
                        </div>

                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/gaurav.jpg" alt="Dr. Gaurav Sushant" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Dr. Gaurav Sushant</h3>
                                <p className={styles.profileTitle}>Assistant Director</p>
                            </div>
                        </div>

                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/jayakrishnan.jpg" alt="Dr. Jayakrishnan P" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Dr. Jayakrishnan P</h3>
                                <p className={styles.profileTitle}>Assistant Director</p>
                            </div>
                        </div>

                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/ganesh.jpg" alt="Dr. M Ganesh" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Dr. M Ganesh</h3>
                                <p className={styles.profileTitle}>Assistant Director</p>
                            </div>
                        </div>
                    </div>

                    {/* Regional Placement Officers */}
                    <div className={styles.regionalOfficers}>
                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/shakil.jpg" alt="Mr. Shakil Moosa ul Haque" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Mr. Shakil Moosa </h3>
                                <p className={styles.profileTitle}>Regional Placement Officer</p>
                                <p className={styles.profileLocation}>Bangalore</p>
                            </div>
                        </div>

                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/arun.jpg" alt="Dr. Arun Kumar" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Dr. Arun Kumar</h3>
                                <p className={styles.profileTitle}>Regional Placement Officer</p>
                                <p className={styles.profileLocation}>Chennai</p>
                            </div>
                        </div>

                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/madhu.jpg" alt="Ms. MADHU KOUL" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Ms. MADHU KOUL</h3>
                                <p className={styles.profileTitle}>Regional Placement Officer</p>
                                <p className={styles.profileLocation}>Delhi</p>
                            </div>
                        </div>

                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/james.jpg" alt="Mr. James Sam Fredrick P" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Mr. James Sam Fredrick</h3>
                                <p className={styles.profileTitle}>Regional Placement Officer</p>
                                <p className={styles.profileLocation}>Chennai</p>
                            </div>
                        </div>

                        <div className={styles.profileCard}>
                            <div className={styles.profileImage}>
                                <img src="/images/team/sabik.jpg" alt="Mr. Sabik Ahil" />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>Mr. Sabik Ahil </h3>
                                <p className={styles.profileTitle}>Regional Placement Officer</p>
                                <p className={styles.profileLocation}>Hyderabad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='awards'>
                <div>
                    <h2>Awards And Achievements</h2>
                    <img src="/images/awards-cdc.png" alt="awards-cdc" />
                </div>
            </section>
            <section>
                <div className='contact'>
                    <h2>Contact Us</h2>
                    <div>
                        <h2 className='head'>Career Development Center</h2>
                    </div>

                    <p className='head-staff'>Dr.V.Samuel Rajkumar BE, MBA, Ph.D.</p>

                    <div>
                        <p>Contact: 0416-220-2740/2841/2842</p>
                        <p>Director, Career Development Centre (CDC)</p>
                        <a href="mailto:cdc@svgisolutions.in">  <p>Email: cdc@svgisolutions.in</p></a>
                    </div>


                </div>
            </section>
            <CompanySlider />
        </div>

    )
}

export default CdcOffice