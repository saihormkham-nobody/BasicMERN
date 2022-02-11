import { INIT_READING_LIST } from "../action.type";

const INITIAL_STATE = {
  meta: {},
  data: [],
};
const readingBookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_READING_LIST: {
      try {
        const { data, meta } = action.payload;
        return {
          meta,
          data,
        };
      } catch (error) {
        return state;
      }
    }

    default:
      return state;
  }
};

export default readingBookReducer;
