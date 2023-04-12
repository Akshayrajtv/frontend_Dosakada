import styles from "../styles/Footer.module.css"
import Image from "next/legacy/image"
const Footer = () => {
  return (
    <div className={styles.container}>
       <div className={styles.item}>
        <Image src="/img/footer.png" layout="fill" objectFit="cover" alt=""/>
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            FOODIES WELCOME HERE.
          </h2>
        </div>
        <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
            
            <br />
            <p className={styles.text}>
              Thrissur Road,Edappal.
              <br /> Malappuram, 679576
              <br />+91 9895725563
            </p>
            <br />
            <p className={styles.text}>
              Chamravattam JN, Ponnani.
              <br /> Malappuram, 679575
              <br />+91 9895790566
            </p>
            <br />
            <p className={styles.text}>
              Kozhikode Road,Kuttipuram.
              <br /> Malappuram, 679596
              <br />+91 9895725896
            </p>
            <br />
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <br />
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />8:00 - 22:00
          </p>
          <br />
          <p className={styles.text}>
            SUNDAY-SATURDAY
            <br />12:00 - 24:00
          </p>
        </div>
      


      </div>
    </div>
  )
}

export default Footer