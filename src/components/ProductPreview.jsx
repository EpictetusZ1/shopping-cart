import React, {useState} from 'react';
import styles from "../styles/Products.module.css";

const ProductPreview = ({data, cartHandler}) => {
    const [count, setCount] = useState(1)

    return (
            <div className={styles.productCard}>
                <img src={data.src}
                     alt={data.name}
                     className={styles.image}
                />
                <div className={styles.infoContainer}>
                    <h3 className={styles.productName}> {data.name} </h3>
                    <h5 className={styles.price}>$ {data.price}</h5>
                    <div className={styles.quantityArea}>
                        Quantity:
                        <button className={styles.adjQuant}
                                onClick={() => setCount(prevState => prevState - 1)}
                        >
                            -
                        </button>
                        {count}
                        <button className={styles.adjQuant}
                                onClick={() => setCount(prevState => prevState + 1)}
                        >
                            +
                        </button>
                    </div>
                    <button className={styles.button}
                            onClick={ () => cartHandler(prevState => (
                                [...prevState, {data, count: count}]
                            ))}
                    >
                        Add To Cart</button>
                </div>
            </div>
    );
}

export default ProductPreview;