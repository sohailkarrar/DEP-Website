import React from 'react';
import Image from 'next/image';
import styles from './Step1.module.css';

const Step1 = ({setStep}) => {

    function handleClick() {
        setStep(prev=>prev+1);
    }

    return (
        <div className={styles.page1Container}>
            <div className={styles.page1Form}>
                <div className={styles.page1Content}>
                    <h2>DIGITAL EMPOWERMENT NETWORK INTERNSHIP</h2>
                    <br />
                    <h4 className={styles.page1HeadingFourthOne}>PAVE YOUR WAY TO A FUTURE OF OPPORTUNITIES!</h4>
                    <br />
                    <br />
                    <p>Welcome to the Digital Empowerment Pakistan <b>4-Week Virtual Internship Program (July 2024-Batch 02)</b> tailored for <b>Undergraduate Students!</b></p>
                    <br />
                    <p>"Digital Empowerment Pakistan (DEP) is a non-profit organization dedicated to bridging the digital divide and empowering Pakistani youth. DEP aims to enhance youth empowerment through digital literacy, leadership development, and academic growth. DEP's initiatives focus on providing digital skills training, scholarship guidance, and leadership development opportunities to Pakistani youth."</p>
                    <br />
                    <p>This is your opportunity to gain practical experience and enhance your skills through structured online internship. Please fill in all the required fields carefully, as the information you provide will be used for your Offer Letter and Completion Certificate</p>
                    <br />
                    <h4>Perks You Will Receive:</h4>
                    <br />
                    <ul>
                        <li>Offer Letter</li>
                        <li>Internship Certificate</li>
                        <li>Letter of Recommendation (based on performance)</li>
                    </ul>
                    <br />
                    <h4>Registration Process:</h4>
                    <br />
                    <ul>
                        <li>Fill out the form below with your basic details and interests of specialization</li>
                        <li>You will receive your Internship Offer Letter after the deadline.</li>
                    </ul>
                    <br />
                    <h4>Note:</h4>
                    <br />
                    <ul>
                        <li>Only complete and accurate submissions will be considered.</li>
                        <li>Avoid spamming or submitting multiple applications for the same domain to ensure your application is valid.</li>
                    </ul>
                    <br />
                    <p>Thank you for your interest in Digital Empowerment Pakistan! We look forward to having you in our internship program.</p><br />
                    <h4>Contact Us:</h4>
                    <a href="#">Visit our website</a><br />
                    <a href="#">LinkedIn</a><br />
                    <a href="#">Instagram</a><br />
                    <a href="#">Facebook</a><br />
                    <a href="#">WhatsApp Channel</a><br />
                    <br />
                    <h4>For any query</h4>
                    <a href="mailto:internship.dep@depsolution.org">internship.dep@depsolution.org</a><br />
                    <a href="tel:+923325890142">+923325890142</a>
                </div>
            </div>
            <div className={styles.page1ForButton}>
                <button onClick={handleClick} className={styles.page1Button}>Next</button>
            </div>
        </div>
    );
}

export default Step1;




