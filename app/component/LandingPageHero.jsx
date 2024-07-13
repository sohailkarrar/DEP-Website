// components/LandingPageHero.js

import React from 'react';
import Image from 'next/image';
import styles from './LandingPage.module.css';
import Link from 'next/link';


const LandingPageHero = () => {
    return (
        <>
        <div className={styles.gap}></div>
        <div className={styles.lp_hero_section}>
            <div className={styles.lp_hero_section_text}>
                <h1>Empowering Students of Pakistan</h1>
                <p>
                    Digital Empowerment Network is committed to work by designing
                    indigenous interventions and working in collaboration with different
                    public and private institutions for students' greater development.
                </p>
                <div className={styles.lp_hero_buttons}>
                    <Link href="/" className={styles.lp_hero_button2}>
                        Apply Now
                    </Link>
                    <Link href="/" className={styles.lp_hero_button1}>
                        Learn More
                    </Link>
                </div>
                <div className={styles.lp_hero_enrollment}>
                    <img src="/images/hero-pic.png" alt="Hero Pic"  />
                    <p>5k+ Enrollments</p>
                </div>
            </div>
            <div className={styles.lp_hero_section_image}>
                <Image
                    className={styles.lp_hero_section_image}
                    src="/images/hero_section_images.png"
                    alt="Hero Section Images"
                    width={500}
                    height={300}
                />
            </div>
        </div>
        <div className={styles.lp_gray_strip}>
            <img src={"/images/gray-strip-logo1.png"} alt="" />
            <img src={"/images/gray-strip-logo2.png"} alt="" />
            <img src={"/images/gray-strip-logo3.png"} alt="" />
            <img src={"/images/gray-strip-logo4.png"} alt="" />
            <img src={"/images/gray-strip-logo5.png"} alt="" />
            <img src={"/images/gray-strip-logo6.png"} alt="" />
        </div>
        </>
    );
};

export default LandingPageHero;
