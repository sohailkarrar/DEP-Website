import Image from 'next/image';
import styles from './CitySection.module.css';

const cities = [
    { name: "Islamabad", image: "/images/isb.png" },
    { name: "Lahore", image: "/images/lhr.png" },
    { name: "Skardu", image: "/images/skd.png" },
    { name: "Karachi", image: "/images/krh.png" },
    { name: "Multan", image: "/images/mlt.png" },
    { name: "Kashmir", image: "/images/kshmr.png" },
];

const CitiesSection = () => {
    return (
        <div className={styles.citySection}>
            <h1 className={styles.cityHeadings}>Where We Work</h1>
            <p className={styles.cityPara}>
                Our National work calls for a National presence. Check out where we have teams on the ground!
            </p>

            <div className={styles.gridContainer}>
                {cities.map((city, index) => (
                    <div key={index} className={styles.gridItem}>
                        <Image src={city.image} alt={city.name} width={150} height={150} />
                        <p>{city.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CitiesSection;
