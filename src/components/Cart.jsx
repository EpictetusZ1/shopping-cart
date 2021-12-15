import React from 'react';
import styles from "../styles/Cart.module.css"

const Cart = ({ items }) => {

    const getTotal = (items) => {
        let sum = 0
        items.forEach((item) => {
            sum = sum + parseFloat(item.price)
        })
        let tax = 1.13
        return ( sum * tax).toFixed(2)
    }

    console.log(items)
    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.cartTitle}>My Cart</h2>
            <table className={styles.cart}>

                {items.map( (item) => {
                    return (
                        <tr className={styles.cartItem}>
                            <td>
                                <img src={item.source}
                                     alt={item.title}
                                     className={styles.imgThumb}
                                />
                            </td>
                            <td className={styles.itemTitle}>{item.title}</td>
                            <td className={styles.price}>${item.price}</td>
                        </tr>
                    )
                })}
            </table>
            <h5 className={styles.total}>Your Total: &nbsp; ${getTotal(items)}</h5>
            <button className={styles.checkout}>Checkout</button>
        </div>
    );
}

export default Cart;