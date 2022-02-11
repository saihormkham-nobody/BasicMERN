import { INIT_FINISHED_LIST, ADD_MANY_FINISHED_LIST } from "../action.type";

const INITIAL_STATE = {
  meta: {},
  data: [],
};
const finishedBookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_FINISHED_LIST: {
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

    case ADD_MANY_FINISHED_LIST: {
      try {
        const { data, meta } = action.payload;
        return {
          meta,
          data: [...state.data, ...data],
        };
      } catch (error) {
        return state;
      }
    }

    default:
      return state;
  }
};

export default finishedBookReducer;
