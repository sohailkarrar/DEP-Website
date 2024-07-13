'use client'
import styles from './page.module.css'
import LandingPageHero from './component/LandingPageHero'
import WhyChoose from './component/WhyChoose'
import CounterSection from './component/CounterSection'
import DEPWithBuraq from './component/DEPWithBuraq'
import WhatWeOffer from './component/WhatWeOffer'
import TeamSection from './component/TeamSection'
import OurGallery from './component/OurGalary'
import TestimonialSection from './component/TestimonalSection'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <div style={{marginTop:'1rem'}} className={styles.main}>
      <LandingPageHero/>
      <WhyChoose />
      <CounterSection/>
      <DEPWithBuraq/>
      <WhatWeOffer/>
      <TeamSection/>
      <OurGallery/>
      <TestimonialSection/>
      <div className={styles.lastSection} >
        <h1 className={styles.headings} >Want to get involved? We are<br/> looking for Campus Directors</h1>
        <button className={styles.applyButton} onClick={()=>router.push('/apply')} >Apply Now</button>
      </div>
    </div>
  )
}
