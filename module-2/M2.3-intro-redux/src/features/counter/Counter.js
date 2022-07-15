import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "COUNTER.INCREMENT" });
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch({ type: "COUNTER.DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
