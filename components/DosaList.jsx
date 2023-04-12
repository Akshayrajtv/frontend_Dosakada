import styles from "../styles/DosaList.module.css"
import DosaCart from "./DosaCart"
const DosaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST DOSA IN TOWN</h1>
        <p className={styles.des}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis officiis a enim qui numquam provident omnis accusantium sint, corporis magnam nisi dolorem natus! Saepe illo qui, velit ab numquam culpa!
        </p>
        <div className={styles.wrapper}>
          <DosaCart/>
          <DosaCart/>
          <DosaCart/>
          <DosaCart/>
          <DosaCart/>
          <DosaCart/>
          <DosaCart/>
          <DosaCart/>
          

        </div>
    </div>
  )
}

export default DosaList