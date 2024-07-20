'use client'

import { redirect } from 'next/dist/server/api-utils'
import styles from './page.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Home() {
    const router = useRouter();

    function openForm(uri) {
        console.log("openForm : ", uri)
        if (typeof window !== "undefined") {
            window.open(uri, '_blank');
        }
    };

    return (
        <div className={styles.main}>
            <div style={{ top: '3rem' }} className={styles.conContainer}>
                <div className={styles.conContainerInner}>
                    <div className={styles.conContainerInnerbody}>
                        <h2 style={{ marginBottom: '8px' }}>Virtual Internship Program at Digital Empowerment Pakistan</h2>
                        <p style={{ marginBottom: '4px' }}>
                            Explore our Virtual Internship Program at Digital Empowerment Pakistan. Gain valuable experience, enhance your skills, and contribute to meaningful projects, all from the convenience of your home. Apply now to advance your career in the digital industry. Limited slots are available.
                        </p>
                    </div>
                    <div className={styles.conContainerInnerImg}>
                        <Image className={styles.rightSideImg} src={"/intern.jfif"} width={480} height={263} alt='img' />
                    </div>
                </div>
            </div>
            <div className={styles.realApplyCont} >
                <button onClick={()=>router.push('/internship-form')} >Apply for Internship Now</button>
            </div>
            <div className={[styles.conContainer, styles.aboutText].join("")}>
                <div style={{ display: 'block' }} className={styles.conContainerInner}>
                    <h2>Batch 2</h2>
                </div>
            </div>
            <div className={styles.conContainer}>
                <div style={{ flexWrap: 'wrap' }} className={[styles.conContainerInner, styles.cities].join(" ")}>
                    <div > <Image className={styles.rightSideImg} src={"/virtual1.jpg"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply} onClick={() => openForm('https://forms.gle/apRQ6dzk4GLgvJGk8')}>Reg Now </p>

                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/Virtual2.jpg"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply} onClick={() => openForm('https://forms.gle/STtaMN29Y5cdHrCJ8')}>Reg Now </p>

                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/Virtual3.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply} onClick={() => openForm('https://forms.gle/uGM8JanT5BxTfura6')}>Reg Now </p>

                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/Virtual4.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply} onClick={() => openForm('https://forms.gle/RsbyKJmBUsaMyYAT9')}>Reg Now </p>
                    </div>
                </div>
            </div>
            <div className={[styles.conContainer, styles.aboutText].join("")}>
                <div style={{ display: 'block' }} className={styles.conContainerInner}>
                    <h2>Batch 1</h2>
                </div>
            </div>
            <div className={styles.conContainer}>
                <div style={{ flexWrap: 'wrap' }} className={[styles.conContainerInner, styles.cities].join(" ")}>
                    <div > <Image className={styles.rightSideImg} src={"/python.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed </p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/c++.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed </p>

                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/ai.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed</p>

                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/android.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed</p>

                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/uiux.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed</p>

                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/backend.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed</p>

                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/java.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed</p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/ml.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed</p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/web.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed</p>
                    </div>
                    <div > <Image className={styles.rightSideImg} src={"/unknown.jfif"} width={480} height={263} alt='img' />
                        <p className={styles.buttonApply}>Closed</p>
                    </div>
                </div>
            </div>
            <div className={[styles.conContainer, styles.aboutText].join(" ")}>
                <div style={{ display: 'block', marginBottom: '0' }} className={styles.conContainerInner}>
                    <h2>Recent Changes at the Digital Empowerment Pakistan Foundation</h2>
                    <p>Read our statement about the investigation into misconduct at the Digital Empowerment Pakistan Foundation.</p>
                </div>
            </div>
        </div>
    )
}