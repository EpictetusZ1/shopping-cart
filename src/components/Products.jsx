import React, {useEffect, useState} from 'react';
import styles from "../styles/Products.module.css"

const Products = () => {

    useEffect(() => {
        fetchProducts()
    }, [])

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch(
            "https://images-api.nasa.gov/search?q=Orion&page=1&media_type=image"
        )
        const data = await response.json()
        console.log(data)
    }

    return (
        <div className={styles.products}>
        </div>
    );
}

export default Products;