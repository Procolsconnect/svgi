import React, { useState, useEffect } from 'react';
import "./feedback.css"

const SVGIFeedback = () => {
    const [lightboxActive, setLightboxActive] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeFAQ, setActiveFAQ] = useState({});

    const testimonials = [
        {
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Rahul Sharma",
            text: "The labs and faculty support are top-notch. Got placed in a reputed company!"
        },
        {
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Priya Mehta",
            text: "Cultural events and placement training helped me grow holistically."
        },
        {
            img: "https://randomuser.me/api/portraits/men/45.jpg",
            name: "Akash Verma",
            text: "Digital resources made learning easy and flexible. Highly recommend SVGI!"
        },
        {
            img: "https://randomuser.me/api/portraits/women/65.jpg",
            name: "Sneha Kapoor",
            text: "Safe campus, good hostel, and supportive staff. Feels like home."
        },
        {
            img: "https://randomuser.me/api/portraits/men/12.jpg",
            name: "Vikram Singh",
            text: "Mock interviews and GD sessions prepared me perfectly for placements."
        }
    ];

    const faqs = [
        [
            { q: "Do you work full time as a developer?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
            { q: "Do you require a deposit before working?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
            { q: "Will I own the website?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
            { q: "Are there other costs involved?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", hasExtra: true }
        ],
        [
            { q: "What is hosting? Will I need it?", a: "Lorem ipsum dolor sit amet..." },
            { q: "Will you work for equity on a new idea I have?", a: "Lorem ipsum dolor sit amet..." },
            { q: "How much experience do you have?", a: "Lorem ipsum dolor sit amet..." },
            { q: "What if I need changes. Can I edit it myself?", a: "Lorem ipsum dolor sit amet..." }
        ]
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4500);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && lightboxActive) {
                setLightboxActive(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [lightboxActive]);

    const toggleFAQ = (index) => {
        setActiveFAQ(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="hero-section">
                <img src="/images/instu.jpg" alt="Hero Background" />
                <h1 className="hero-title">Feedback</h1>
            </div>

            {/* Feedback Container */}
            <section className="feedback-container">
                {/* Photo Card */}
                <div className="photo-wrapper">
                    <div className="card-container">
                        <div className="card-shadow"></div>
                        <div className="floating-card" onClick={() => setLightboxActive(true)}>
                            <div className="card-picture">
                                <div className="card-frame"></div>
                                <img src="https://images.unsplash.com/photo-1642478881792-4726327bb0bc?crop=entropy&cs=srgb&fm=jpg" alt="SVGI Group Avatar" />
                            </div>
                            <h4><b>SVGI Group</b></h4>
                            <p>Overall Institutional Feedback Report</p>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-wrapper">
                    <div>
                        <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: '3em' }} className='text-wrapper-title'>
                            SVGI – Overall Feedback Summary
                        </h1>
                    </div>
                    <ul style={{ padding: '2.5em 2.5em', fontSize: '1em', lineHeight: '1.5em', listStyleType: 'disc', textAlign: 'left' }}>
                        <li>The overall campus environment is appreciated for being clean, secure, and student-friendly.</li>
                        <li>Students expressed satisfaction with the quality of teaching across Engineering, Arts, Nursing, and Paramedical streams.</li>
                        <li>Laboratory infrastructure and practical exposure were highlighted as major strengths.</li>
                        <li>Faculty members are supportive, approachable, and provide useful academic guidance.</li>
                        <li>Students appreciate the cultural activities, technical events, and placement training sessions.</li>
                        <li>Transport and hostel facilities received positive feedback with suggestions for minor improvements.</li>
                        <li>Many students value the placement cell initiatives and industry-oriented training programs.</li>
                        <li>Digital learning resources and online notes were found helpful by most students.</li>
                        <li>Overall satisfaction levels across departments indicate a positive student experience.</li>
                    </ul>

                    <div>
                        <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: '2.2em' }} className='text-wrapper-title'>Key Observations</h1>
                    </div>
                    <ul style={{ padding: '1.5em 2.5em', listStyleType: 'disc' }}>
                        <li>Students want more hands-on workshops and real-time project exposure.</li>
                        <li>Some departments requested upgraded lab equipment and additional subject-oriented tools.</li>
                        <li>Few students suggested enhancing sports activities and inter-college events.</li>
                    </ul>

                    <div>
                        <h1 style={{ fontFamily: "'Merriweather',serif", fontSize: '2.2em' }} className='text-wrapper-title'>
                            Recommendations for Improvement
                        </h1>
                    </div>
                    <ul style={{ padding: '1.5em 2.5em', listStyleType: 'disc' }}>
                        <li>Introduce department-wise industry mentorship programs.</li>
                        <li>Conduct monthly technical seminars and career-oriented bootcamps.</li>
                        <li>Strengthen placement preparation with mock tests, coding challenges, and GD training.</li>
                    </ul>
                </div>
            </section>

            {/* Lightbox */}
            {/* <div className="lightbox" onClick={() => setLightboxActive(false)}>
                <span className="lightbox-close" onClick={() => setLightboxActive(false)}>&times;</span>
                <img src="https://images.unsplash.com/photo-1642478881792-4726327bb0bc?crop=entropy&cs=srgb&fm=jpg" alt="SVGI Group Full Image" onClick={(e) => e.stopPropagation()} />
            </div> */}

            {/* Grid Layout Sections */}
            <section className="grid-layout">
                <h2>Heading: the grid layout solution</h2>
                <p>The content is restricted to a certain max-width in the middle, but the section and consequently its image background is full-width.</p>
            </section>

            <section className="border-image ">
                <h2>Heading: border-image solution</h2>
                <p>The section is restricted to a certain max-width in the middle, but the border-image created backdrop is full-width.</p>
            </section>

            {/* Testimonial Slider */}
            <section className="testim-wrapper">
                <div className="testim-container">
                    <span className="testim-arrow left" onClick={() => setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}>
                        &#8249;
                    </span>
                    <span className="testim-arrow right" onClick={() => setCurrentSlide((currentSlide + 1) % testimonials.length)}>
                        &#8250;
                    </span>
                    <div className="testim-dots">
                        {testimonials.map((_, idx) => (
                            <span
                                key={idx}
                                className={`testim-dot ${currentSlide === idx ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(idx)}
                            ></span>
                        ))}
                    </div>
                    <div className="testim-content">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className={`testim-slide ${currentSlide === idx ? 'active' : ''}`}>
                                <div className="testim-img">
                                    <img src={testimonial.img} alt={testimonial.name} />
                                </div>
                                <h2>{testimonial.name}</h2>
                                <p>"{testimonial.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="faq-container">
                    <h2 className="line-heading">Frequently Asked Questions</h2>
                    <h3 className="large-heading">
                        Some of the most common questions asked about Website Design & Development.
                    </h3>
                    <div className="faq-grid">
                        {faqs.map((column, colIdx) => (
                            <div key={colIdx}>
                                {column.map((faq, faqIdx) => {
                                    const key = `${colIdx}-${faqIdx}`;
                                    return (
                                        <div key={key}>
                                            <button className="collapsible-btn" onClick={() => toggleFAQ(key)}>
                                                {faq.q} <span style={{ float: 'right', fontWeight: 'bold' }}>{activeFAQ[key] ? '-' : '+'}</span>
                                            </button>
                                            <div className={`faq-content ${activeFAQ[key] ? 'active' : ''}`}>
                                                <p>{faq.a}</p>
                                                {faq.hasExtra && (
                                                    <>
                                                        <ul>
                                                            <li>Custom LI</li>
                                                            <li>Custom LI</li>
                                                        </ul>
                                                        <p>Contact me via <a href="mailto:#">EMAIL</a></p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer">
                    <p>View This in Action on <a href="https://phillweb.dev/" target="_blank" rel="noopener noreferrer">MY WEBSITE</a></p>
                </div>
            </section>
        </div>
    );
};

export default SVGIFeedback;