import React, {useEffect, useState} from 'react';
import styles from "../styles/Products.module.css"
import ProductPreview from "./ProductPreview";

const Products = () => {

    useEffect(() => {
        fetchProducts()
    }, [])

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch(
            "https://images-api.nasa.gov/search?q=Spitzer%20Space%20Telescope&page=1&media_type=image",
            {mode: "cors"}
        )
        const data = await response.json()
        setProducts(data["collection"]["items"].slice(0, 30))
    }


    const abbreviate = (string) => string.substring(0, 40) + '...'
    const makePrice = (price) => parseInt(price) + "" + Math.floor((Math.random() * 100) + 1)

    return (
        <div className={styles.productContainer}>
            <h2 className={styles.productIntro}>Shop our out of this world prints !</h2>
            <div className={styles.products}>
            { products.map((product) => {
                let price = product.data[0]["date_created"].substring(2, 3)
                return <ProductPreview  source={product.links[0]}
                                        title={product.data[0].title}
                                        abbTitle={abbreviate(product.data[0].title)}
                                        price={makePrice(price)}
                />
            })}
            </div>
        </div>
    );
}

export default Products;