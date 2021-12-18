import React from 'react';
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css"

const Header = ({cartCounter}) => {
    const displayCount = () => {
        let total = 0
        cartCounter.forEach((item) => {
            total += parseInt(item.count)
        })
        return total
    }

    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <div className={styles.logoName}>Lift Off</div>
                <div className={styles.rocket}> 🚀</div>
            </div>

            <ul className={styles.navLinks}>
                <Link to={"/"}>
                    <button className={styles.navButton}>Home</button>
                </Link>
                <Link to={"/shop"}>
                    <button className={styles.navButton}>Shop</button>
                </Link>

                <div className={styles.counterContainer}>
                    <Link to={"/shop/cart"}>
                        <div className={styles.count}>
                            {displayCount()}
                        </div>
                        <button className={styles.navButton}>Cart</button>
                    </Link>
                </div>
            </ul>
        </nav>
    );
}

export default Header;