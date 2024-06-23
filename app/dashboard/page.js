'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

function DashBoard() {
    const [selectedFormat, setSelectedFormat] = useState('csv'); // Default format is CSV
    const router = useRouter();

    const handleFormatChange = (e) => {
        setSelectedFormat(e.target.value);
    };

    const handleDownload = () => {
        if(selectedFormat === 'csv'){
            router.push('/api/applicants/downloadcsv');
        }else{
            router.push('/api/applicants/downloadxlsx');
        }
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <h2>Sidebar</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div className={styles.mainContent}>
                <h1>Welcome to Your Dashboard</h1>
                <div className={styles.controls}>
                    <label htmlFor="format">Select Format:</label>
                    <select id="format" value={selectedFormat} onChange={handleFormatChange}>
                        <option value="csv">CSV</option>
                        <option value="xlsx">XLSX</option>
                    </select>
                    <button className={styles.downloadButton} onClick={handleDownload}>
                        Download All Applicants
                    </button>
                </div>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h3>Card 1</h3>
                        <p>I had nothing in my mind so here is some junk!!</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Card 2</h3>
                        <p>These cards are just placeholders so they will be changed later on!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
