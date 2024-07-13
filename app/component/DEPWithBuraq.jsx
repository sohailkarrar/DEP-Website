import React from 'react';
import styles from './LandingPage.module.css';

const DEPWithBuraq = () => {
    return (
        <div className={styles.lp_den_with_buraaq_section}>
            <div className={styles.lp_den_with_buraaq_section_text}>
                <h3>DEN with The Buraaq Academy</h3>
                <p>
                    Digital Empowerment Pakistan & The Buraaq Academy present a webinar on Unlocking Global Opportunities: International Scholarships Guideline Session. 
                    <br />
                    <strong>Date:</strong> 16th-Sept-2023
                    <br />
                    <strong>Time:</strong> 7:00 PM - 9:00 PM
                    <br />
                    <strong>Platform:</strong> Google Meet
                    <br />
                    Apply now and invest in your future!
                </p>
                <a href="/" className={styles.lp_den_with_buraaq_section_button}>
                    Learn More
                </a>
            </div>
            <img src={"/images/den-with-buraaq-img.png"} alt="DEN with The Buraaq Academy" />
        </div>
    );
}

export default DEPWithBuraq;
