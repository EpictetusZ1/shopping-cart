import React from 'react';
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
       <nav className={styles.navBar}>
           <div className={styles.logo}>
               LiftOff
           </div>
           <ul className={styles.navLinks}>
               <Link to={"/"}>
                   <li>Home</li>
               </Link>
               <Link to={"/shop"}>
                   <li>Shop</li>
               </Link>
           </ul>

       </nav>
    );
}

export default Header;