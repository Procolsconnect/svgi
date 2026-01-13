import React, { useState } from 'react';
import CommonHero from '../../../components/CommonHero';
import styles from './administrativeOffices.module.css';

const AdministrativeOffices = () => {
    const [activeTab, setActiveTab] = useState(0);

    const offices = [
        {
            id: 0,
            name: "Academics",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "The Academics Office is responsible for the academic and curriculum aspects of the University. It sets up the curriculum for various programs, which includes doing research on the latest syllabi followed in top global universities, and adopting global standards in curriculum design and implementation at VIT. In addition, the office handles the question paper setting for all the internal examinations conducted in VIT.",
            contact: {
                role: "Dean, Academics",
                location: "Room No: 820 Silver Jublee Tower, Vellore Institute of Technology, Vellore - 632014 Tamil Nadu",
                phone: "91- 416 220 2981"
            }
        },
        {
            id: 1,
            name: "Admissions",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "The Admissions Office handles all aspects of admissions to the various undergraduate, postgraduate and research programmes. This includes preparation, deployment of entrance examinations VITEEE, VITMEE and VITREEE for UG, PG and Research respectively. The office also administers various activities involved in ranking of the candidates, counselling for admission and verification of the requirements for admission.",
            subSections: [
                {
                    title: "UG Admissions",
                    role: "Director, UG Admissions",
                    location: "Room No: G - 09 (Ground Floor) Dr. MGR block, VIT, Vellore - 632014",
                    phone: "91-416 220 2020"
                },
                {
                    title: "PG Admissions",
                    role: "Director, PG Admissions",
                    location: "Room No: B - 01 (Basement) Dr. MGR block, VIT, Vellore - 632014",
                    phone: "0416 - 220 2050 / 2188"
                }
            ]
        },
        {
            id: 2,
            name: "Counselling Division",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "The Counselling Division of VIT comprises of well-trained counsellors who help the students come out of their emotional difficulties. Counsellors are available 24×7 on call, and in their cabins during working hours. This facility is spread across the university to help students overcome their emotional problems.",
            contact: {
                role: "Head of the Department (HOD), Counselling Division",
                name: "Dr. Rita Bhattacharjee",
                location: "Room No. SMV-G12, Hexagon building",
                email: "hod.counselling@vit.ac.in"
            }
        },
        {
            id: 3,
            name: "Centre for Technical Support (CTS)",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "Centre for Technical Support (CTS) maintains the policies governing the use of VIT computing and IT communication resources. The IT Policy applies to the resources administered by the administrative departments such as Library, Computer Laboratories, Offices of the Institution, Hostels and Guest houses wherever the network facility was provided by the Institution.",
            contact: {
                role: "Director, CTS",
                location: "Room No.103 (1st Floor) CTS Block, VIT, Vellore - 632014",
                phone: "91-416 220 2171"
            }
        },
        {
            id: 4,
            name: "Estates Office",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "The Estates Office manages all the issues concerning the property of the institution. Right from maintaining the lush green gardens to caring for the concrete wonders, the office manages the arrangement, preparation and allocation of venues for various events. The estates team maintains VIT’s large campus and constantly works on preserving and embellishing the premises.",
            contact: {
                role: "Director, Estates",
                location: "Room No: G - 04 (Ground Floor) Estates Block, VIT, Vellore - 632014",
                phone: "91- 416 220 2251"
            }
        },
        {
            id: 5,
            name: "Finance Office",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "The finance office is located in the Main Building of our University. The office deals with all the academic and other miscellaneous payments that are made by students, such as course registrations, various hostel related payments like mess, rooms etc or registration for co-curricular activities.",
            contact: {
                role: "Chief Finance Officer",
                location: "Room No: G - 10 (Ground Floor) Finance Officer, VIT, Vellore - 632014",
                phone: "91 - 416 220 2080"
            }
        },
        {
            id: 6,
            name: "Human Resource Office",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "The Human Resources team fosters a work environment that inspires excellence in the faculty and staff. HR office provides quality HR services to attract, develop, motivate, engage and retain a diverse workforce within a supportive work environment. It emphasises on customer service, based on constant consultation and communication.",
            contact: {
                role: "Deputy Director, HR",
                location: "Room No: 101 (First Floor) Dr. M.G.R. Block, VIT, Vellore - 632014",
                phone: "91 - 416 220 2149"
            }
        },
        {
            id: 7,
            name: "Institutional Information Services (IIS)",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            description: "The Institutional Information Services is responsible for gathering, consolidating and documenting various information and data pertaining to the day-to- day activities of the institution. It ensures proper documentation and collection of all necessary data at the right time and is the information hub of the Institution.",
            contact: {
                role: "Deputy Director, RAAC",
                location: "Room No: 134 (1st Floor) Dr. MGR block, VIT, Vellore - 632014",
                phone: "91 - 416 220 2181"
            }
        }
    ];

    return (
        <div className={styles.wrapper}>
            <CommonHero
                defaultTitle="Administrative Offices"
                defaultImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <div className={styles.container}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <ul className={styles.sidebarList}>
                        {offices.map((office) => (
                            <li key={office.id} className={styles.sidebarItem}>
                                <button
                                    className={`${styles.sidebarButton} ${activeTab === office.id ? styles.active : ''}`}
                                    onClick={() => setActiveTab(office.id)}
                                >
                                    {office.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Content Area */}
                <main className={styles.contentArea}>
                    {offices.map((office) => {
                        if (office.id !== activeTab) return null;

                        return (
                            <div key={office.id} className={styles.officeDetail}>
                                <div className={styles.headerGroup}>
                                    <h2 className={styles.title}>{office.name}</h2>
                                    {office.image && (
                                        <div className={styles.imageWrapper}>
                                            <img src={office.image} alt={office.name} className={styles.officeImage} />
                                        </div>
                                    )}
                                </div>
                                <p className={styles.description}>{office.description}</p>

                                {/* Main Contact if exists */}
                                {office.contact && (
                                    <div className={styles.contactContainer}>
                                        <h4 className={styles.contactTitle}>Contact Details</h4>
                                        <div className={styles.contactGrid}>
                                            <div className={styles.contactItem}>
                                                <span className={styles.contactLabel}>Role:</span>
                                                <span className={styles.contactValue}>{office.contact.role}</span>
                                            </div>
                                            {office.contact.name && (
                                                <div className={styles.contactItem}>
                                                    <span className={styles.contactLabel}>Name:</span>
                                                    <span className={styles.contactValue}>{office.contact.name}</span>
                                                </div>
                                            )}
                                            <div className={styles.contactItem}>
                                                <span className={styles.contactLabel}>Location:</span>
                                                <span className={styles.contactValue}>{office.contact.location}</span>
                                            </div>
                                            {(office.contact.phone || office.contact.email) && (
                                                <div className={styles.contactItem}>
                                                    <span className={styles.contactLabel}>Contact:</span>
                                                    <span className={styles.contactValue}>
                                                        {office.contact.phone && <span>{office.contact.phone}</span>}
                                                        {office.contact.email && <span> | {office.contact.email}</span>}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Sub Sections (like Admissions) */}
                                {office.subSections && office.subSections.map((sub, idx) => (
                                    <div key={idx} className={styles.subSection}>
                                        <h3 className={styles.subTitle}>{sub.title}</h3>
                                        <div className={styles.contactGrid}>
                                            <div className={styles.contactItem}>
                                                <span className={styles.contactLabel}>Role:</span>
                                                <span className={styles.contactValue}>{sub.role}</span>
                                            </div>
                                            <div className={styles.contactItem}>
                                                <span className={styles.contactLabel}>Location:</span>
                                                <span className={styles.contactValue}>{sub.location}</span>
                                            </div>
                                            <div className={styles.contactItem}>
                                                <span className={styles.contactLabel}>Phone:</span>
                                                <span className={styles.contactValue}>{sub.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </main>
            </div>
        </div>
    );
};
export default AdministrativeOffices;