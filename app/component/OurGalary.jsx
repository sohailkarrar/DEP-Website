import React from 'react';
import styles from './LandingPage.module.css'

const OurGallery = () => {
    

    return (
        <div className={styles.lp_gallery_section}>
            <div className={styles.lp_gallery_section_text}>
            <h3>Our Gallery</h3>
            <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking
            </p>
            </div>
            <div className={styles.lp_gallery_section_pictures_container}>
            <div className={styles.lp_gallery_section_picture}>
                <img src={"/images/slide1.jpg"} alt="" />
            </div>
            <div className={styles.lp_gallery_section_picture}>
                <img src={"/images/slide2.jpg"} alt="" />
            </div>
            <div className={styles.lp_gallery_section_picture}>
                <img src={"/images/slide3.jpg"} alt="" />
            </div>
            </div>
        </div>
    );
};

export default OurGallery;
