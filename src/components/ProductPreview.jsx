import React from 'react';
import styles from "../styles/Products.module.css";

const ProductPreview = ({source, title, price}) => {
    return (
            <div className={styles.productCard}>
                <img src={source}
                     alt={title}
                     className={styles.image}
                />
                <div className={styles.infoContainer}>
                    <h3 className={styles.productName}> {title} </h3>
                    <h5 className={styles.price}>$ {price}.99</h5>
                    <button className={styles.button}>Add To Cart</button>
                </div>
            </div>
    );
}

export default ProductPreview;