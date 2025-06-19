import styles from './products.module.css'
import data from "../home/data.js"
function Products() {
  return (
    <>
      <div className={styles.main}>
        <img
          src="https://th.bing.com/th/id/R.1210d79d3c997555dc5600cec3219b9d?rik=sch9gGjaPLyHuA&pid=ImgRaw&r=0"alt=""/>
      </div>
      <div className={styles.text}>
        <h1>Sumka</h1>
        <h2>Narxi</h2>
      </div>
    </>
  );
}

export default Products
