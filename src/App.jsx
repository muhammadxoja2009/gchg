import "./App.css";
import data from "../public/data";
import Home from "./conponents/home/Home";

function App() {
  return (
    <>
      <h1>Bestsellers</h1>
      <div className="ota">
        {data.map((m, i) => {
          return (
            <div className="card">
              <img src={m.image} alt="sf" />
              <h2>{m.title}</h2>
              <p>{m.category}</p>
              <p>$ {m.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
