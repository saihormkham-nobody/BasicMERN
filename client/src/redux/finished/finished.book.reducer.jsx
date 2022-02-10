import { INIT_FINISHED_LIST, ADD_MANY_FINISHED_LIST } from "../action.type"

const INITIAL_STATE = {
    meta: {},
    data: []
}
const finishedBookReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case INIT_FINISHED_LIST:{
            return action.payload;
        }

        case ADD_MANY_FINISHED_LIST:{
            const {data,meta} = action.payload;
            console.log("state",...state.data);
            console.log("data",...data);
            return{
                meta,
                data: [...state.data, ...data]  
            }
        }

        default:
            return state;
    }
}

export default finishedBookReducer;