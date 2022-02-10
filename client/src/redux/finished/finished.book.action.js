import { PUT_READING_LIST } from "../action.type"

export const putFinishedBooks = books => ({
    type: PUT_READING_LIST,
    payload: books
})