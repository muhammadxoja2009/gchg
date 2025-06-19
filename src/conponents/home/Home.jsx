import styles from './home.module.css'

function Home() {
  return (
    <div>
      <h1>Bestsellers</h1>
      <div className="ota">
        <div className="card">
          <img src="https://th.bing.com/th/id/R.1210d79d3c997555dc5600cec3219b9d?rik=sch9gGjaPLyHuA&pid=ImgRaw&r=0" alt="" />
          <h2>Product name</h2>
          <p>Category</p>
          <p>$ 61.99</p>
        </div>
      </div>

    </div>
  )
}

export default Home
