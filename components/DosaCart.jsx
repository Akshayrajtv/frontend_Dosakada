import styles from "../styles/DosaCart.module.css"
import Image from "next/image"
const DosaCart = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/dosa.jpeg" alt="" width={500} height={500} />
        <h1 className={styles.title}>Masala Dosa</h1>
        <span className={styles.price}>₹80.55</span>
        <p className={styles.des}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A culpa tempore unde quaerat.
        </p>
    </div>
  )
}

export default DosaCart