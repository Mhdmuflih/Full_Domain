import React from 'react'
import { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;

    const reducer = (state,action) => {
        switch(action) {
            case "inc":
                return state + 1;
            case "dec":
                return state - 1
            default:
                state;
        }
    }
    const [count, setCount] = useReducer(reducer, initialState);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=> setCount("inc")}>inc</button>
        <button onClick={()=> setCount("dec")}>Dec</button>
    </div>
  )
}

export default Counter;