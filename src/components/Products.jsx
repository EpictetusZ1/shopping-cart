import React, {useEffect } from 'react';
import styles from "../styles/Products.module.css"
import ProductPreview from "./ProductPreview";

const Products = ({ cartHandler, products, api }) => {
    const [productList, setProductList] = products
    const [apiCalled, setApiCalled] = api

    useEffect(() => {
        if (!apiCalled) {
            getUrls() // Invoke API call ONCE when component first mounts
            setApiCalled(true)
        }
    }, [])

    const assetUrls = [
        "PIA18033",
        "hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o",
        "from-a-million-miles-away-nasa-camera-shows-moon-crossing-face-of-earth_20129140980_o",
        "as16-113-18339",
        "PIA00123",
        "PIA15985",
        "PIA00405",
        "PIA20498",
        "PIA19821",
        "PIA17563"
    ]

    // Fetch Image manifest and target image URL (~small)
    const fetchMeta = async (image) => {
        let result = image.meta.replace("http", "https");

        const response = await fetch(
            `${result}`,
            {mode: "cors"}
        )
        const data = await response.json()

        return {
            name: data["AVAIL:Title"],
            pDesc: data["AVAIL:Description"],
            src: image.small,
            price: makePrice() + ".99",
            desc: data["AVAIL:Description"],
            dateCreated: data["AVAIL:DateCreated"],
            key: data["AVAIL:NASAID"]
        }
    }

    // Make actual call to get small image
    const fetchImagePath = async (nasaId) => {
        const pattern = /~small/
        const response = await fetch(
            `https://images-api.nasa.gov/asset/${nasaId}`,
            {mode: "cors"}
        )

        const data = await response.json()

        let small = data["collection"]["items"]
        small.forEach( (item) => {
            if (pattern.test(item.href)) small = item.href
        })

        const meta = data["collection"]["items"].at(-1).href
        return {
            meta,
            small
        }
    }

    const getUrls = () => {
        assetUrls.forEach( (url) => {
            try {
                fetchImagePath(url)
                    .then(r => {
                        fetchMeta(r)
                            .then( response => setProductList(
                                prevState => [...prevState, response] )
                            )
                    }, reason => window.alert(reason.message))
            } catch (Error) {
                window.alert(Error.message)
            }
        })
    }

    // Generate a random price for each object
    const makePrice = () => {
        let nums = []
        for (let i = 0; i < 3; i++) {
            nums.push(Math.floor((Math.random() * 6) + 1))
        }
        return nums.join("")
    }

    return (
        <div className={styles.productContainer}>
            <h2 className={styles.productIntro}>Shop our <i>out of this world</i> prints!</h2>

            <div className={styles.products}>
                { productList.map((product) => {
                    return <ProductPreview  data={product}
                                            setter={setProductList}
                                            cartHandler={cartHandler}
                                            key={product.key}
                    />
                })}
            </div>
        </div>
    );
}

export default Products;