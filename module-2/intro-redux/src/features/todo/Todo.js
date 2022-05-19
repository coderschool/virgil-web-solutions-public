import React, { useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterButton from "./TodoFilterButton";
import { useDispatch } from "react-redux";
import { getToDos } from "./action";

function Todo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDos());
  }, [dispatch]);

  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterButton />
    </div>
  );
}

export default Todo;
