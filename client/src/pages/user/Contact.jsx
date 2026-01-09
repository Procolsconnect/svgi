import React from 'react'
import CommonHero from '../../components/CommonHero'
import CompanySlider from '../../components/CompanySlider'
import './contact.css'
const Contact = () => {
    return (
        <div>
            <CommonHero apiEndpoint="/api/contacthero"
                defaultTitle='Contact Us'
                defaultImage='/images/svgi2.jpg' />
            <section className='awards'>
                <div>
                    <h1>Awards And Achievements</h1>
                    <img src="images/awards-cdc.png" alt="awards-cdc" />
                </div>
            </section>
            <section>
                <div className='contact'>
                    <h1>Contact Us</h1>
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

export default Contact