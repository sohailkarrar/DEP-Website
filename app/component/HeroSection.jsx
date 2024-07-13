import React from 'react'
import styles from './Herosection.module.css';
import HeroImg from '@/public/hero.png';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className={styles.hero} >
            <Image 
                className={styles.hero_images}
                src={HeroImg} 
                alt="Hero Image" 
                layout="responsive" 
                width={500} 
                height={300} 
            />
            <h3 className={styles.hero_headings} >Who We Are</h3>
            <p className={styles.hero_para}>In a rapidly evolving world, Digital Empowerment Pakistan is a non-profit dedicated to nurturing
                Pakistani youth. Our mission is to bridge the digital gap, develop leadership skills, enhance academic
                growth, and empower young minds for a brighter future through impactful events and initiatives.</p>
        </div>
    )
}

export default HeroSection;


