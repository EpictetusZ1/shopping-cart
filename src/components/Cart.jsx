import React from 'react';
import styles from "../styles/Cart.module.css"

const Cart = ({ items }) => {

    const getTotal = (items) => {
        let sum = 0
        items.forEach((item) => {
            sum = sum + parseFloat(item.data.price)
        })
        let tax = 1.13
        return ( sum * tax).toFixed(2)
    }

    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.cartTitle}>My Cart</h2>
            <table className={styles.cart}>
                <tbody>
                {items.map( (item) => {
                    return (
                        <tr className={styles.cartItem}
                            key={item.data.key}
                        >
                            <td>
                                <img src={item.data.src}
                                     alt={item.data.name}
                                     className={styles.imgThumb}
                                />
                            </td>
                            <td className={styles.itemTitle}>{item.data.name}</td>
                            <td className={styles.price}>${item.data.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <h5 className={styles.total}>Your Total: &nbsp; ${getTotal(items)}</h5>
            <button className={styles.checkout}>Checkout Now</button>
        </div>
    );
}

export default Cart;