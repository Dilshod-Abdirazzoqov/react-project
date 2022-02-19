import "./App.css";
import React, { useState } from "react";
import rasmSrc from "./imgs/logo-react.png";

function App() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      {/* <h1>Hello React</h1>
      <button
        onClick={() => {
          console.log("Clicked Button !");
        }}
      >
        Clickable Button
      </button> */}
      <div className="row mb-3">
        <div className="col-lg-4">
          <img src={rasmSrc} alt="logo" width="100" height="100" />
        </div>
        <div className="col-lg-8">
          <h2 className="text-primary my-4">React Counter Project</h2>
        </div>
      </div>
      <h3>Count: {count}</h3>
      <button onClick={inc} className="btn btn-success mx-1">
        +
      </button>
      <button onClick={dec} className="btn btn-danger mx-1">
        -
      </button>
    </div>
  );
}

export default App;
