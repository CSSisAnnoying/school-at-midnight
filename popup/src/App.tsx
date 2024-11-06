import React, { useReducer } from "react";
import './App.css';

import CountingButtons from "./Components/CountingButtons/CountingButtons.tsx";
import Counter from "./Components/Counter/Counter.tsx";

type ButtonAction = "Increment" | "Decrement";

const countReducer = (state: number, action: ButtonAction) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
}

const App = () => {
  const [count, setCount] = useReducer(countReducer, 0);

  return (
    <>
      <p>Settings are coming soon! Here is a cool counter instead.</p>
      <Counter count={count} />
      <CountingButtons setCount={setCount} count={count} />
    </>
  );
}

export default App;
export { ButtonAction };