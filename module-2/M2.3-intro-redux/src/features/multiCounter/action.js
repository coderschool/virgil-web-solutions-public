import { ADD_COUNTER, INCREMENT, DECREMENT } from "./reducer";

export const addCounter = () => ({ type: ADD_COUNTER });
export const increment = (index) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT,
        payload: { index: index },
      });
    }, 1000);
  };
};
export const decrement = (index) => ({
  type: DECREMENT,
  payload: { index: index },
});
