import React from 'react';
import Image from 'next/image';
import styles from './TeamSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
    {
        name: "Syed Suhail Karar",
        title: "Founder DEN",
        image: "/images/ssk.png",
        social: {
            facebook:'https://facebook.com',
            linkedin:'https://linkedin.com',
            behance:'https://behance.com',
            instagram:'https://instagram.com'
        }
    },
    {
        name: "Seemab Tabassum",
        title: "Co-Founder DEN",
        image: "/images/st.png",
        social: {
            facebook:'https://facebook.com',
            linkedin:'https://linkedin.com',
            behance:'https://behance.com',
            instagram:'https://instagram.com'
        }
    },
    {
        name: "Muhammad Faizan",
        title: "President DEN",
        image: "/images/mf.png",
        social: {
            facebook:'https://facebook.com',
            linkedin:'https://linkedin.com',
            behance:'https://behance.com',
            instagram:'https://instagram.com'
        }
    },
    {
        name: "Ifra Zubair Malik",
        title: "Co-head of DEN marketing and communication team",
        image: "/images/izm.png",
        social: {
            facebook:'https://facebook.com',
            linkedin:'https://linkedin.com',
            behance:'https://behance.com',
            instagram:'https://instagram.com'
        }
    },
    {
        name: "Muddasir Haroon",
        title: "Head of Graphics Designing",
        image: "/images/mh.png",
        social: {
            facebook:'https://facebook.com',
            linkedin:'https://linkedin.com',
            behance:'https://behance.com',
            instagram:'https://instagram.com'
        }
    },
    {
        name: "Syed Afzal",
        title: "Chief Technology Officer (CTO)",
        image: "/images/safzal.png",
        social: {
            facebook:'https://facebook.com',
            linkedin:'https://linkedin.com',
            behance:'https://behance.com',
            instagram:'https://instagram.com'
        }
    },
    {
        name: "Faraz Ahmad",
        title: "Senior Full-Stack Developer",
        image: "/images/faraz.png",
        social: {
            facebook:'https://facebook.com',
            linkedin:'https://linkedin.com',
            behance:'https://behance.com',
            instagram:'https://instagram.com'
        }
    },
    {
        name: "Maha Riaz",
        title: "Head of UI/UX Designing",
        image: "/images/mahar.png",
        social: {
            facebook:'https://facebook.com',
            linkedin:'https://linkedin.com',
            behance:'https://behance.com',
            instagram:'https://instagram.com'
        }
    }
];

const TeamSection = () => {
    return (
        <div className={styles.teamSection}>
            <h1 className={styles.teamHeadings}>Our Amazing Team</h1>
            <p className={styles.teamPara}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking
            </p>
            <div className={styles.teamContainer}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.teamCard}>
                        <Image src={member.image} alt={member.name} width={150} height={150} />
                        <h3>{member.name}</h3>
                        <p>{member.title}</p>
                        <div className={styles.socialIcons}>
                            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href={member.social.behance} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faBehance} />
                            </a>
                            <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
