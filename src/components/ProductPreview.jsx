import React from 'react';
import styles from "../styles/Products.module.css";

const ProductPreview = ({data, cartHandler}) => {
    return (
            <div className={styles.productCard}>
                <img src={data.src}
                     alt={data.name}
                     className={styles.image}
                />
                <div className={styles.infoContainer}>
                    <h3 className={styles.productName}> {data.name} </h3>
                    <h5 className={styles.price}>$ {data.price}</h5>
                    <button className={styles.button}
                            onClick={ () => cartHandler(prevState => (
                                [...prevState, {data}]
                            ))}
                    >
                        Add To Cart</button>
                </div>
            </div>
    );
}

export default ProductPreview;