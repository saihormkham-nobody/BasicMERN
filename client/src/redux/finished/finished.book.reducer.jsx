import { PUT_FINISHED_LIST } from "../action.type"

const INITIAL_STATE = {
    meta: {},
    data: []
}
const bookReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PUT_FINISHED_LIST:{
            return state;
        }

        default:
            return state;
    }
}

export default bookReducer;