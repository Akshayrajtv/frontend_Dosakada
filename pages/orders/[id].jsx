import styles from "../../styles/Order.module.css"
import Image from "next/image"
const Order = () => {
  return (
    <div className={styles.container}>
          <div className={styles.left}>

            <div className={styles.row}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                <tr>
                   
                    <td>
                    <span className={styles.id}>1267567</span>
                    </td>
                    <td>
                        <span className={styles.name}>Akshay RAj</span>
                    </td>
                    <td>
                    <span className={styles.Address}>Thattaravalappil House, Venginikkara, Edappal</span>
                    </td>
                    <td>
                    <span className={styles.total}>₹161.10</span>
                    </td>
                </tr>
             </table>
            </div>

          
        
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
                <button disabled className={styles.button}>PAID</button>         
             </div>
        
        </div>

    </div>
  )
}

export default Order