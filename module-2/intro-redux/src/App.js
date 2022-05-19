import React from "react";
import Counter from "./features/counter/Counter";
import MultiCounter from "./features/multiCounter/MultiCounter";
import Todo from "./features/todo/Todo";

function App() {
  return (
    <div>
      <h1>Intro to Redux</h1>
      {/* <Counter />
      <MultiCounter /> */}
      <Todo />
    </div>
  );
}

export default App;
