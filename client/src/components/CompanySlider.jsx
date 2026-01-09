
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Static list of top tech company logos
const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/TCS_Logo.svg" }
];

const CompanySlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div style={{ padding: '60px 0', backgroundColor: '#fff', overflow: 'hidden' }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '40px',
                fontFamily: 'SUSE, sans-serif',
                fontSize: '2rem',
                color: '#333'
            }}>Placement And Recruiters 
            </h2>
            <Slider {...settings}>
                {companies.map((company, index) => (
                    <div key={index} style={{ padding: '0 20px', outline: 'none' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '80px',
                            margin: '0 10px'
                        }}>
                            <img
                                src={company.logo}
                                alt={company.name}
                                style={{
                                    maxHeight: '50px',
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                    filter: 'grayscale(0%)',
                                    opacity: 0.7,
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.filter = 'none';
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.filter = 'none';
                                    e.currentTarget.style.opacity = '0.9';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CompanySlider;
