import React from 'react';
import styles from "../styles/Cart.module.css"

const Cart = ({ items }) => {

    const getTotal = (items) => {
        let sum = 0
        let tax = 1.13

        items.forEach((item) => {
            sum = sum + parseFloat(item.data.price)
        })

        return  [
            ( sum * tax).toFixed(2),
            (sum * tax).toFixed(2) - sum
        ]
    }

    const [total, tax] = getTotal(items)


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
                            <td className={styles.quantity}>Quantity: {item.count}</td>
                            <td className={styles.price}>${item.data.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <hr/>
            <div className={styles.taxAmt}>Taxes: ${tax}</div>
            <h5 className={styles.total}>Your Total: ${total}</h5>
            <button className={styles.checkout}>Checkout Now</button>
        </div>
    );
}

export default Cart;