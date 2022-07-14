import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, increment, decrement } from "./action";

function MultiCounter() {
  let counters = useSelector((state) => state.multiCounter);
  let dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addCounter())}>Add Counter</button>
      {counters.map((counter, index) => (
        <div key={index}>
          <button onClick={() => dispatch(increment(index))}>+</button>
          <span>{counter.count}</span>
          <button onClick={() => dispatch(decrement(index))}>-</button>
        </div>
      ))}
    </div>
  );
}

export default MultiCounter;
