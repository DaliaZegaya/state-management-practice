import "./Counter.css";
import React from "react";
import {counterActionUp, counterActionDown, resetAction, changeInput} from "../../../store/actions/counter-actions"
import { counterContext } from "../../../contexts/Counter-context";
import { useContext, useState } from "react";


function Counter() {
  const {contextState, dispatch} = useContext(counterContext)
  const [userInput, setUserInput] = useState("")

  return (
    <div className="counter">
      {contextState}
      <br />
      <button onClick={() => dispatch(counterActionUp())}>UP</button>
      <button onClick={() => dispatch(counterActionDown())}>DOWN</button>
      <button onClick={() => dispatch(resetAction(0))}>ZERO</button>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={() => dispatch(changeInput(userInput))}>show input</button>
    </div>
  );
};

export default Counter;
