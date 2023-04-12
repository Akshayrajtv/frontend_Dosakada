import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import Link from "next/link"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      
        <Image className={styles.callButton} src="/img/call_logo.png" alt="" width={32} height={32}/>
       
      <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+919895725563</div>

      </div> </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}> <Link href="/" ><div className={styles.text}>Home</div></Link> </li>
          
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/dosa_logo.png" alt="" width={160} height={69} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>


        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Link href='/Cart'>
        <Image src="/img/cart_logo.png" alt="" width={30} height={30} />
        <div className={styles.counter}>2</div>
</Link>
       
        </div>
      </div>



    </div>
  )
}

export default Navbar