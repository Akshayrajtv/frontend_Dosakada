import styles from "../../styles/Product.module.css"
import Image from "next/image"
const Product = () => {
    const dosa={
        id:1,
        img:"/img/dosa.jpeg",
        name:"MASALA DOSA",
        price:80.55,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut molestias fugiat eligendi nulla quae quidem ea aperiam minus? Sapiente est blanditiis nihil at numquam similique eaque hic assumenda! Quia!",

    };
  return (
    <div className={styles.container}>
        <div className={styles.left}>
           <div className={styles.imgContainer}>
            <Image src={dosa.img} fill alt=""/>

           </div>

           
        </div>
        <div className={styles.right}>
            <br />
            <h1 className={styles.title}>{dosa.name}</h1>
            <br />
            <span className={styles.price}>₹{dosa.price}</span>
            <br />
            <br /><p className={styles.des}>{dosa.desc}</p>
            <br /><br />

            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.qty} />
                <button className={styles.button}>Add to cart</button>
            </div>
        </div>


    </div>
  )
}

export default Product