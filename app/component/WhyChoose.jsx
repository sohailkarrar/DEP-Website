import React from 'react';
import styles from './LandingPage.module.css';

const WhyChoose = () => {
    return (
        <div className={styles.lp_why_den_section}>
            <div className={styles.lp_why_den_section_text}>
                <h3>Why Choose DEN</h3>
                <p>
                    DEN is committed to providing top-notch educational resources and mentorship programs to help individuals achieve their full potential in the digital era.
                </p>
            </div>
            <div className={styles.lp_why_den_section_main_container}>
                <div className={styles.lp_why_den_section_container}>
                    <img src={"images/profile-icon.png"} alt="One on One Monitor" />
                    <h4>One on One Monitor</h4>
                    <p>
                        Our dedicated mentors provide personalized guidance and support to ensure each student receives the attention they need to succeed.
                    </p>
                </div>

                <div className={styles.lp_why_den_section_container}>
                    <img src={"images/watch-icon.png"} alt="24/7 Mentor" />
                    <h4>24/7 Mentor</h4>
                    <p>
                        Access to expert mentors around the clock, offering continuous support and advice to help you navigate your learning journey.
                    </p>
                </div>

                <div className={styles.lp_why_den_section_container}>
                    <img src={"images/grad-hat-icon.png"} alt="Alumni Network" />
                    <h4>Alumni Network</h4>
                    <p>
                        Join our thriving alumni community and connect with successful graduates who can provide valuable insights and networking opportunities.
                    </p>
                </div>

                <div className={styles.lp_why_den_section_container}>
                    <img src={"images/heart-icon.png"} alt="Annual Experts" />
                    <h4>Annual Experts</h4>
                    <p>
                        Learn from industry experts through our annual programs, featuring guest lectures, workshops, and hands-on training sessions.
                    </p>
                </div>
            </div>
            <div className={styles.lp_challenges_section}>
                <img src={"images/challenges-pic.png"} alt="Challenges in Achieving Digital Empowerment" />
                <div className={styles.lp_challenges_section_text}>
                    <h3>Challenges in Achieving Digital Empowerment</h3>
                    <p>
                        Digital empowerment, the process of enabling individuals and communities to access and effectively use digital technologies, presents several challenges. These challenges can vary based on factors such as geographical location, socioeconomic status, and access to resources. DEN aims to bridge this gap by providing comprehensive support and resources to overcome these barriers.
                    </p>
                    <a href="/" className={styles.lp_challenges_section_button}>
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};


export default WhyChoose;