import React from 'react';
import styles from "../styles/Products.module.css";

const ProductPreview = ({source, title, abbTitle, price}) => {
    return (
            <div className={styles.productCard}>
                <img src={source.href}
                     alt={title}
                     className={styles.image}
                />
                <h3 className={styles.productName}>
                    {abbTitle}
                </h3>
                <h5 className={styles.price}>$ {price + 0.99}</h5>
            </div>
    );
}

export default ProductPreview;