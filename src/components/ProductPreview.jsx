import React from 'react';
import styles from "../styles/Products.module.css";

const ProductPreview = ({source, title, price, cartHandler}) => {
    return (
            <div className={styles.productCard}>
                <img src={source}
                     alt={title}
                     className={styles.image}
                />
                <div className={styles.infoContainer}>
                    <h3 className={styles.productName}> {title} </h3>
                    <h5 className={styles.price}>$ {price }</h5>
                    <button className={styles.button}
                            onClick={() => cartHandler(prevState => (
                                [...prevState,{source, title, price }]


                            ))}
                    >
                        Add To Cart</button>
                </div>
            </div>
    );
}

export default ProductPreview;