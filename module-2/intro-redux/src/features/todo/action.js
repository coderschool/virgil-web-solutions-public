import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "./reducer";
import apiService from "../../app/apiService";

export const addToDo = (nextTodoId, text) => async (dispatch) => {
  try {
    const todo = { id: nextTodoId, text, completed: false };
    const res = await apiService.post("/todos", todo);
    dispatch({ type: ADD_TODO, payload: { id: nextTodoId, text } });
  } catch (error) {
    console.log(error);
  }
};

export const getToDos = () => async (dispatch) => {
  try {
    const res = await apiService.get("/todos");
    dispatch({ type: GET_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const toggleTodo = (todo) => async (dispatch) => {
  try {
    const res = await apiService.put(`/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    dispatch({
      type: TOGGLE_TODO,
      payload: { id: todo.id },
    });
  } catch (error) {
    console.log(error);
  }
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
