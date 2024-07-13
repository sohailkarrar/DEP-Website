import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';
import useIntersectionObserver from './useIntersectionObserver';

const Counter = ({ endValue, duration, label }) => {
    const [count, setCount] = useState(0);
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.5
    });

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const increment = endValue / (duration / 10);
            const counterInterval = setInterval(() => {
                start += increment;
                if (start >= endValue) {
                    clearInterval(counterInterval);
                    setCount(endValue);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 10);
        }
    }, [isVisible, endValue, duration]);

    return (
        <div ref={ref} className={styles.count_item}>
            <h2>{count}+</h2>
            <p>{label}</p>
        </div>
    );
};

const CounterSection = () => {
    return (
        <div className={styles.count_section}>
            <Counter endValue={8200} duration={4000} label="Success Stories" />
            <div className={styles.divider}></div>
            <Counter endValue={12200} duration={3500} label="Expert Mentors" />
            <div className={styles.divider}></div>
            <Counter endValue={2500} duration={5500} label="Hours Course" />
            <div className={styles.divider}></div>
            <Counter endValue={3000} duration={4800} label="Active Students" />
        </div>
    );
};

export default CounterSection;
