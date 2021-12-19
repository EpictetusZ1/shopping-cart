import React from 'react';
import styles from "../styles/Welcome.module.css"
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div className={styles.welcomePage}>
            <div className={styles.welcomePageMain}>
                <h2 className={styles.heroHeader}>High Quality prints of the unexplored... straight outta NASA</h2>
                <div className={styles.buttonContainer}>
                    <Link to={"/shopping-cart/shop"}>
                        <button className={styles.heroCTA}>Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.aboutTitle}>
                    About Us:
                </div>
                <div className={styles.aboutText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cum delectus dolor doloribus eos hic libero obcaecati possimus quasi, quibusdam sequi tempora ut veniam voluptate voluptates. Accusantium adipisci, alias aliquid, animi architecto, assumenda dolorem doloremque est eveniet facere fugiat hic magni necessitatibus nemo nesciunt nihil nisi nulla quam quasi quibusdam repellat sapiente veritatis voluptate voluptates voluptatum! A ad aliquid autem culpa deleniti, dolore eaque earum enim esse explicabo facere illum ipsum iste iusto laborum minus natus nesciunt, non quaerat quisquam ratione sint voluptatum! Asperiores eos error eveniet fugiat ipsam iure libero minus mollitia nihil optio pariatur quasi rem, repellendus saepe ullam velit veniam voluptate. Aliquid animi aspernatur aut cum, deserunt dicta doloremque dolorum, esse excepturi hic illum impedit inventore ipsa itaque labore laborum magni molestiae necessitatibus nihil nisi quaerat sequi suscipit? Asperiores fuga magnam molestiae praesentium quas quibusdam rem sapiente tempora ullam vitae! Alias culpa eveniet iure minima quas vero.

                </div>
            </div>
        </div>
    );
}

export default Welcome;