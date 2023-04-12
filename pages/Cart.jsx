import styles from "../styles/Cart.module.css"
import Image from "next/image"

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
             <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/dosa.jpeg" fill objectFit="contain" alt=""/>
                        </div>
                    </td>
                    <td>
                    <span className={styles.name}>MASALA DOSA</span>
                    </td>
                    <td>
                        <span className={styles.price}>₹80.55</span>
                    </td>
                    <td>
                    <span className={styles.qty}>2</span>
                    </td>
                    <td>
                    <span className={styles.total}>₹161.10</span>
                    </td>
                </tr>
             </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <br />
                <div className={styles.text}>
                    <b className={styles.totalTextTitle}>Discount:</b>₹0.00
                </div>  
                <div className={styles.text}>
                    <b className={styles.totalTextTitle}>Total:</b>₹161.10
                </div>   
                <button className={styles.button}>CHECKOUT NOW</button>         
             </div>

        </div>

    </div>
  )
}

export default Cart