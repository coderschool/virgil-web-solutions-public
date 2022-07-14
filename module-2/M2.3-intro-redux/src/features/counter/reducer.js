const INCREMENT = "COUNTER.INCREMENT";
const DECREMENT = "COUNTER.DECREMENT";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
      break;
  }
};

export default counterReducer;
