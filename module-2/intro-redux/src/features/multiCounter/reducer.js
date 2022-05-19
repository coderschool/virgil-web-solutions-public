export const ADD_COUNTER = "MULTI_COUNTER.ADD";
export const INCREMENT = "MULTI_COUNTER.INCREMENT";
export const DECREMENT = "MULTI_COUNTER.DECREMENT";

const initialState = [{ count: 0 }];

const multiCounterReducer = (state = initialState, action) => {
  const index = action.payload?.index;

  switch (action.type) {
    case ADD_COUNTER:
      return [...state, { count: 0 }];
    case INCREMENT:
      return [
        ...state.slice(0, index),
        { count: state[index].count + 1 },
        ...state.slice(index + 1),
      ];
    case DECREMENT:
      return [
        ...state.slice(0, index),
        { count: state[index].count - 1 },
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
};

export default multiCounterReducer;
