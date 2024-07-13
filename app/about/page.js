'use client'
import styles from '../page.module.css'
import Image from 'next/image'
import HeroSection from '../component/HeroSection'
import CounterSection from '../component/CounterSection'
import CitiesSection from '../component/CitiesSection'
import TeamSection from '../component/TeamSection'
import TestimonialSection from '../component/TestimonalSection'
import { useRouter } from 'next/navigation'

export default function Home() {    
    const router = useRouter();


    return (
        <div  className={styles.main}>
            <HeroSection />
            <CounterSection />
            <CitiesSection />
            <TeamSection />
            <TestimonialSection/>
            <div className={styles.lastSection} >
                <h1 className={styles.headings} >Want to get involved? We are<br/> looking for Campus Directors</h1>
                <button className={styles.applyButton} onClick={()=>router.push('/apply')} >Apply Now</button>
            </div>
        </div>
    )
}