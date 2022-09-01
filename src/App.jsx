import { useReducer } from 'react';
import { useState } from 'react'
import './App.css'
import {counterReducer} from './store/reducers/counter-reducer';
import {counterActionUp, counterActionDown, resetAction, changeInput} from "./store/actions/counter-actions"



function App() {
  const [userInput, setUserInput] = useState("")
  const [myState, dispatch] = useReducer(counterReducer, 0)

  return (
    <div className="App">
      {myState}
      <br/>
      <button onClick={()=>dispatch(counterActionUp())}>UP</button>
      <button onClick={()=>dispatch(counterActionDown())}>DOWN</button>
      <button onClick={()=>dispatch(resetAction(0))}>ZERO</button>
      <input type="text" onChange={(e)=>setUserInput(e.target.value)} />
      <button onClick={()=>dispatch(changeInput(userInput))}>show input</button>


      
    </div>
  )
}

export default App
