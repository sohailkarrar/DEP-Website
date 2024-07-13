import React from 'react';
import styles from './LandingPage.module.css'

const WhatWeOffer = () => {
    return (
        <div className={styles.lp_den_offer_section}>
            <div className={styles.lp_den_offer_section_text}>
                <h3>What we Offer</h3>
                <p>
                    It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking
                </p>
            </div>
            <div className={styles.lp_den_offer_section_main_container1}>
                <div className={styles.lp_den_offer_section_container}>
                    <h4>1. Seminar</h4>
                    <p>
                        Our seminars serve as knowledge-sharing platforms, fostering
                        personal and professional growth. These events bring experts and
                        learners together to explore and discuss key topics, facilitating
                        learning and networking opportunities.
                    </p>
                    <a href="/">Learn More</a>
                </div>
                <div className={styles.lp_den_offer_section_container}>
                    <h4>2. Workshops</h4>
                    <p>
                        Our workshops are dynamic learning experiences designed to impart
                        practical skills and knowledge. They offer hands-on training and
                        interactive sessions, equipping participants with valuable tools
                        for personal and professional development.
                    </p>
                    <a href="/">Learn More</a>
                </div>
            </div>
            <div className={styles.lp_den_offer_section_main_container2}>
                <div className={styles.lp_den_offer_section_container}>
                    <h4>3. Tech-based Short Courses</h4>
                    <p>
                        Our tech-based short courses provide focused and practical
                        learning experiences. Tailored to industry demands, they equip
                        participants with essential skills and knowledge for today's
                        tech-driven world.
                    </p>
                    <a href="/">Learn More</a>
                </div>
                <div className={styles.lp_den_offer_section_container}>
                    <h4>4. Internship Opportunities</h4>
                    <p>
                        Through our extensive network and partnerships, we actively
                        facilitate internship opportunities with various companies,
                        leveraging our connections to provide valuable industry experience
                        for students.
                    </p>
                    <a href="/">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
