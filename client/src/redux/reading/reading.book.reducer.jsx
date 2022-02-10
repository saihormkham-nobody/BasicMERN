import { PUT_READING_LIST } from "../action.type";

const INITIAL_STATE = {
  meta: {},
  data: [],
};
const readingBookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUT_READING_LIST: {
      console.log("action.payload: ", action);
      console.log("state: ", state);
      const { meta, data } = action.payload;
      const nextState = {
        ...state,
        meta,
        data,
      };
      return nextState;
    }

    default:
      return state;
  }
};

export default readingBookReducer;
