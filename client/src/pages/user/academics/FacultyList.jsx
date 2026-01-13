import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import CommonHero from '../../../components/CommonHero';
import styles from './faculty.module.css';

// Dummy data for staff
// In a real app, this would likely come from an API based on the department
const allStaff = [
    // SAS - Chemistry
    { id: 1, name: "Dr. A. Scientist", designation: "Professor", image: "https://randomuser.me/api/portraits/men/1.jpg", school: "School of Advanced Sciences (SAS)", department: "Chemistry" },
    { id: 2, name: "Dr. B. Chemist", designation: "Associate Professor", image: "https://randomuser.me/api/portraits/women/2.jpg", school: "School of Advanced Sciences (SAS)", department: "Chemistry" },
    { id: 3, name: "Mr. C. Lab", designation: "Assistant Professor", image: "https://randomuser.me/api/portraits/men/3.jpg", school: "School of Advanced Sciences (SAS)", department: "Chemistry" },

    // SAS - Physics
    { id: 4, name: "Dr. P. Physicist", designation: "Professor", image: "https://randomuser.me/api/portraits/men/4.jpg", school: "School of Advanced Sciences (SAS)", department: "Physics" },
    { id: 5, name: "Dr. Q. Quantum", designation: "Associate Professor", image: "https://randomuser.me/api/portraits/women/5.jpg", school: "School of Advanced Sciences (SAS)", department: "Physics" },

    // SBST - Biotechnology
    { id: 6, name: "Dr. B. Biologist", designation: "Professor", image: "https://randomuser.me/api/portraits/women/6.jpg", school: "School of Bio Sciences & Technology (SBST)", department: "Biotechnology" },
    { id: 7, name: "Dr. G. Gene", designation: "Assistant Professor", image: "https://randomuser.me/api/portraits/men/7.jpg", school: "School of Bio Sciences & Technology (SBST)", department: "Biotechnology" },

    // Add more dummy data as needed covering other schools/depts to demonstrate functionality
    { id: 8, name: "Dr. C. Civil", designation: "Professor", image: "https://randomuser.me/api/portraits/men/8.jpg", school: "School of Civil Engineering (SCE)", department: "Structural Engineering" },
    { id: 9, name: "Dr. S. Structure", designation: "Associate Professor", image: "https://randomuser.me/api/portraits/women/9.jpg", school: "School of Civil Engineering (SCE)", department: "Structural Engineering" },

    { id: 10, name: "Dr. C. Computer", designation: "HOD", image: "https://randomuser.me/api/portraits/women/10.jpg", school: "School of Computer Science and Engineering (SCOPE)", department: "Computer Science" },
    { id: 11, name: "Mr. J. Java", designation: "Assistant Professor", image: "https://randomuser.me/api/portraits/men/11.jpg", school: "School of Computer Science and Engineering (SCOPE)", department: "Computer Science" },

];

const FacultyList = () => {
    const [searchParams] = useSearchParams();
    const school = searchParams.get('school');
    const dept = searchParams.get('dept');

    const filteredStaff = useMemo(() => {
        if (!school && !dept) return allStaff;

        return allStaff.filter(staff => {
            const matchesSchool = school ? staff.school === school : true;
            const matchesDept = dept ? staff.department === dept : true;
            return matchesSchool && matchesDept;
        });
    }, [school, dept]);

    const title = dept ? `${dept} Faculty` : (school ? `${school} Faculty` : 'All Faculty');

    return (
        <div className={styles.faculty__wrapper}>
            <CommonHero
                defaultTitle={title}
                defaultImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <div className={styles.faculty__container}>
                <div className={styles.faculty__backLink}>
                    <Link to="/academics/faculty">← Back to Schools</Link>
                </div>

                <div className={styles.faculty__listGrid}>
                    {filteredStaff.length > 0 ? (
                        filteredStaff.map(staff => (
                            <div key={staff.id} className={styles.faculty__card}>
                                <div className={styles.faculty__cardImage}>
                                    <img src={staff.image} alt={staff.name} />
                                </div>
                                <div className={styles.faculty__cardContent}>
                                    <h3>{staff.name}</h3>
                                    <p className={styles.faculty__designation}>{staff.designation}</p>
                                    <p className={styles.faculty__deptInfo}>
                                        {staff.department} <br />
                                        <small>{staff.school}</small>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.faculty__noData}>
                            <p>No faculty members found for {dept} ({school}).</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FacultyList;
