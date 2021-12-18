import React from 'react';
import styles from "../styles/Welcome.module.css"
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div className={styles.welcomePage}>
            <h2 className={styles.heroHeader}>Prints of high quality photos straight from NASA</h2>
                <div className={styles.buttonContainer}>
                    <Link to={"/shop"}>
                        <button className={styles.heroCTA}>Shop Now</button>
                    </Link>
                </div>
        </div>
    );
}

export default Welcome;