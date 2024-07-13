import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './TestimonialSection.module.css';

const testimonials = [
    {
        text: "Digital Empowerment Pakistan has transformed my skills and boosted my career prospects. The comprehensive courses and experienced mentors have been invaluable.",
        author: "Ahmed Khan",
        position: "Software Engineer",
        image: "/images/t2.png"
    },
    {
        text: "I am grateful for the opportunities Digital Empowerment Pakistan has provided. The practical approach and real-world projects have given me confidence in my abilities.",
        author: "Ayesha Malik",
        position: "UI/UX Designer",
        image: "/images/t1.png"
    },
    {
        text: "The supportive community and knowledgeable instructors at Digital Empowerment Pakistan have made learning an enjoyable experience. Highly recommended!",
        author: "Bilal Ahmed",
        position: "Full Stack Developer",
        image: "/images/t4.png"
    },
    {
        text: "Digital Empowerment Pakistan's courses are well-structured and up-to-date with the latest industry trends. I've gained valuable skills that are directly applicable to my job.",
        author: "Sara Ali",
        position: "Data Scientist",
        image: "/images/t3.png"
    },
    {
        text: "Thanks to Digital Empowerment Pakistan, I was able to land my dream job. The hands-on projects and mentorship were crucial in my success.",
        author: "Zainab Fatima",
        position: "Cybersecurity Analyst",
        image: "/images/t5.png"
    }
];

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <div className={styles.secondsection}>
            <h1 className={styles.headings}>What Our Students<br />Say About Us</h1>
            <h1 className={styles.testimonialheading}>Great<br />Platform</h1>

            <section className={styles.testimonialSection}>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialContent}>
                            <blockquote className={styles.blockquote}>
                                <p>{testimonial.text}</p>
                            </blockquote>
                            <div className={styles.testimonialNavigation}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className={styles.testimonialImage}
                                />
                            </div>
                            <cite className={styles.cite}>
                                <strong>{testimonial.author}</strong>
                                <span>{testimonial.position}</span>
                            </cite>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

export default TestimonialSection;
