import React from 'react';
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
       <nav className={styles.navBar}>
           <div className={styles.logo}>
               <div className={styles.logoName}>Lift Off</div>
               <div className={styles.rocket}> 🚀</div>
           </div>

           <ul className={styles.navLinks}>
               <Link to={"/"}>
                   <button>Home</button>
               </Link>
               <Link to={"/shop"}>
                   <button>Shop</button>
               </Link>
               <Link to={"/shop/cart"}>
                   <button>Cart</button>
               </Link>
           </ul>
       </nav>
    );
}

export default Header;