// ThankYouPage.js
import React from 'react';
import styles from './page.module.css'; // Import custom CSS styles

function ThankYouPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Thank You!</h1>
            <p className={styles.message}>
                Thank you for submitting your application. We appreciate your interest.
            </p>
            <div className={styles.imageContainer}>
                <img src="https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg" alt="Thank You Image" className={styles.image} />
            </div>
            <p className={styles.info}>
                You will receive a confirmation email shortly.
            </p>
            <p className={styles.note}>
                Note: You will be notified about further details when your application gets accepted.
            </p>
        </div>
    );
}

export default ThankYouPage;
