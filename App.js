import React, { useState } from "react";
import "./App.css"
const App = () => {
  let [cnt,setcount]=useState(0);

  function IncreaseHandler(){
    setcount(cnt+1);
  }
  function DecreaseHandler(){
    setcount(cnt-1);
  }
  function ResetHandler(){
    setcount(0);
  }

  return <div className="wrapper">
        <h1 className="heading">Increment and Decrement</h1>
        <div className="counter">
          <button onClick={DecreaseHandler} className="MinusBtn">-</button>
          <div className="DisplayVal">{cnt}</div>
          <button onClick={IncreaseHandler}  className="PlusBtn">+</button>
        </div>
        <button onClick={ResetHandler} className="ResetBtn">reset</button>
  </div>;
};

export default App;
