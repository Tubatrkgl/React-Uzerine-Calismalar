import React, { useState } from "react";
import MyButton from "./components/MyButton"

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <MyButton onClick={handleIncrement} color="lightblue">
        Increment +
      </MyButton>
      <MyButton onClick={handleDecrement} color="pink">
        Decrement -
      </MyButton>
    </div>
  );
}

export default App;
