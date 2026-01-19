import React, { useState, useRef, useEffect } from 'react';
import styles from './PlacementPage.module.css';
import axios from 'axios';
import { FaEdit, FaUsers, FaPaperPlane, FaMapMarkedAlt, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import CommonHero from '../../../components/CommonHero';
import { useQuery } from '@tanstack/react-query';
import Skeleton from '../../../components/Skeleton';
import './PlacementPage.module.css'; // Ensure CSS is loaded

const apiurl = import.meta.env.VITE_API_URL;

const fetchSlider = async () => (await axios.get(`${apiurl}/api/placementrecordsslider`)).data;
const fetchWorkspace = async () => (await axios.get(`${apiurl}/api/placementrecordsworkspace`)).data;
const fetchTeam = async () => (await axios.get(`${apiurl}/api/placementrecordsteam`)).data;
const fetchFaqs = async () => (await axios.get(`${apiurl}/api/placement-records-faq`)).data;
const fetchVideo = async () => (await axios.get(`${apiurl}/api/placement-records-video`)).data;
const fetchRecruiters = async () => (await axios.get(`${apiurl}/api/company-category`)).data;

const PlacementPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState([]);
  const videoRef = useRef(null);

  // Queries
  const { data: sliderData, isLoading: sliderLoading } = useQuery({ queryKey: ['placementSlider'], queryFn: fetchSlider, staleTime: 1000 * 60 * 5 });
  const { data: workspaceData, isLoading: workspaceLoading } = useQuery({ queryKey: ['placementWorkspace'], queryFn: fetchWorkspace, staleTime: 1000 * 60 * 5 });
  const { data: teamData, isLoading: teamLoading } = useQuery({ queryKey: ['placementTeam'], queryFn: fetchTeam, staleTime: 1000 * 60 * 5 });
  const { data: faqData, isLoading: faqLoading } = useQuery({ queryKey: ['placementFaqs'], queryFn: fetchFaqs, staleTime: 1000 * 60 * 5 });
  const { data: videoRes, isLoading: videoLoading } = useQuery({ queryKey: ['placementVideo'], queryFn: fetchVideo, staleTime: 1000 * 60 * 5 });
  const { data: recruitersData, isLoading: recruitersLoading } = useQuery({ queryKey: ['placementRecruiters'], queryFn: fetchRecruiters, staleTime: 1000 * 60 * 5 });

  const slides = sliderData?.success ? sliderData.data : [];
  const workspace = workspaceData?.success ? workspaceData.data : [];
  const teamMembers = teamData?.success ? teamData.data : [];
  const faqs = faqData?.success ? faqData.data : [];
  const videoData = videoRes?.success && videoRes.data.length > 0 ? videoRes.data[0] : null;
  const recruiters = recruitersData?.success ? recruitersData.data : [];

  const trainingProcess = [
    { number: 1, title: "Develop", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: FaEdit, color: "#3498db" },
    { number: 2, title: "Engage", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: FaUsers, color: "#2ecc71" },
    { number: 3, title: "Deliver", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: FaPaperPlane, color: "#9b59b6" },
    { number: 4, title: "Plan", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: FaMapMarkedAlt, color: "#f1c40f" },
    { number: 5, title: "Educate", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: FaLightbulb, color: "#e74c3c" },
    { number: 6, title: "Educate", description: "Sagittis, audantium sem eveniet lacus pede porttitor aenean.", icon: FaGraduationCap, color: "#3498db" }
  ];

  const handlePrevSlide = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);
  const handleNextSlide = () => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  const handleVideoEnded = () => setVideoPlaying(false);

  const toggleFAQ = (index) => {
    setActiveFAQ(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Small timeout to ensure elements are rendered
    setTimeout(() => {
      document.querySelectorAll(`.${styles.animateOnScroll}`).forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, [workspaceLoading, teamLoading, recruitersLoading]); // Re-run observer when data loads

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <CommonHero apiEndpoint="/api/placementrecordhero" defaultTitle='Placement Records' />

      <div className={styles.container}>
        <h2 className={styles.pageHeading}>Placement Highlights</h2>

        {/* Image Slider */}
        <div className={styles.wrapper}>
          {sliderLoading ? (
            <Skeleton style={{ height: '400px', width: '100%' }} />
          ) : (
            <div className={styles.sliderWrapper}>
              <div className={styles.inner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, i) => (
                  <article key={i}>
                    <div className={`${styles.info} ${styles.topLeft} ${currentSlide === i ? styles.active : ''}`}>
                      <h3>{slide.title}</h3>
                    </div>
                    <img src={slide.image} alt={slide.title} />
                  </article>
                ))}
              </div>
            </div>
          )}

          {!sliderLoading && (
            <div className={styles.sliderPrevNextControl}>
              <label className={`${styles.prev} ${currentSlide === 0 ? styles.disabled : ''}`} onClick={handlePrevSlide}>‹</label>
              <label className={`${styles.next} ${currentSlide === slides.length - 1 ? styles.disabled : ''}`} onClick={handleNextSlide}>›</label>
            </div>
          )}
        </div>

        {/* Office Gallery */}
        <div className={styles.sectionHeader}>
          <h2>Creative Workspace</h2>
          <p>Our specially designed space to spark creativity and enhance team collaboration</p>
        </div>

        <div className={styles.officeGallery}>
          {workspaceLoading ? (
            Array(3).fill(0).map((_, i) => <Skeleton key={i} style={{ height: '250px', width: '30%' }} />)
          ) : (
            workspace.map((item, i) => (
              <div key={i} className={`${styles.galleryItem} ${styles.animateOnScroll}`}>
                <img src={item.image} alt={item.title} />
                <div className={styles.galleryCaption}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Team Members */}
        <div className={styles.sectionHeader}>
          <h2>Our Creative Team</h2>
          <p>The professionals who turn ideas into reality with passion and precision</p>
        </div>

        <div className={styles.teamMembers}>
          {teamLoading ? (
            Array(3).fill(0).map((_, i) => <Skeleton key={i} style={{ height: '300px', width: '30%' }} />)
          ) : (
            teamMembers.map((member, i) => (
              <div key={i} className={`${styles.memberCard} ${styles.animateOnScroll}`}>
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberSocial}>
                  <a href={member.linkedin || "#"}>in</a>
                  <a href={member.email ? `mailto:${member.email}` : "#"}>📧</a>
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Training Process */}
        <div className={styles.leftHeading}>Our Training Process</div>
        <div className={styles.infographicSection}>
          <ul className={styles.infoGraphic}>
            {trainingProcess.map((item, i) => (
              <li key={i} className={styles.animateOnScroll} style={{ '--item-color': item.color }}>
                <div className={styles.numberWrap}>
                  <div className={styles.number} style={{ color: item.color }}>{item.number}</div>
                  <div className={styles.coverWrap}>
                    <div className={styles.numberCover}></div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    {item.icon && React.createElement(item.icon)}
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Player */}
        <div className={styles.sectionHeader}>
          <h2>Watch Us in Action</h2>
          <p>A behind-the-scenes tour to see how we create innovation</p>
        </div>
        <div className={styles.videoSection}>
          {videoLoading ? (
            <Skeleton style={{ height: '400px', width: '100%' }} />
          ) : (
            <div className={styles.videoContainer}>
              <video ref={videoRef} poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80" onEnded={handleVideoEnded}>
                <source src={videoData ? videoData.video : "team-video.mp4"} type="video/mp4" />
                Your browser does not support video playback
              </video>
              <div className={styles.videoOverlay} style={{ opacity: videoPlaying ? 0 : 1, pointerEvents: videoPlaying ? 'none' : 'auto' }}>
                <h3>A Day in Our Team's Life</h3>
                <p>Watch how we work together to turn ideas into reality</p>
                <div className={styles.playButton} onClick={handlePlayVideo}>
                  <span>▶</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recruiters Section */}
        <div className={styles.recruitersSection}>
          <div className={styles.sectionHeader}>
            <h2>Our Recruiters</h2>
            <p>Leading companies that trust us to deliver top talent</p>
          </div>
          <div className={styles.recruitersGrid}>
            {recruitersLoading ? (
              <Skeleton style={{ height: '300px', width: '100%' }} />
            ) : (
              recruiters.map((category, i) => (
                <div key={i} className={styles.recruiterCategory}>
                  <h3>{category.title}</h3>
                  <div className={styles.companyGrid}>
                    {category.companies && category.companies.map((company, j) => (
                      <img key={j} src={company.image} alt={company.name} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className={styles.mainSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.lineHeading}>Frequently Asked Questions</h2>
          <h3 className={styles.largeHeading}>Some of the most common questions asked about Placement.</h3>
          <div className={styles.faqSection}>
            {faqLoading ? (
              <Skeleton style={{ height: '300px', width: '100%' }} />
            ) : (
              <>
                <div className={styles.faqColumn}>
                  {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, i) => (
                    <div key={i}>
                      <button className={`${styles.collapsible} ${activeFAQ.includes(i) ? styles.active : ''}`} onClick={() => toggleFAQ(i)}>
                        {faq.question}
                      </button>
                      <div className={styles.faqContent} style={{ maxHeight: activeFAQ.includes(i) ? '200px' : '0', margin: activeFAQ.includes(i) ? '12px 0' : '0' }}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.faqColumn}>
                  {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, i) => {
                    const index = i + Math.ceil(faqs.length / 2);
                    return (
                      <div key={index}>
                        <button className={`${styles.collapsible} ${activeFAQ.includes(index) ? styles.active : ''}`} onClick={() => toggleFAQ(index)}>
                          {faq.question}
                        </button>
                        <div className={styles.faqContent} style={{ maxHeight: activeFAQ.includes(index) ? '200px' : '0', margin: activeFAQ.includes(index) ? '12px 0' : '0' }}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementPage;