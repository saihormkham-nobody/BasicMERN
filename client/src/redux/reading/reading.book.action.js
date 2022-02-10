import { PUT_READING_LIST } from "../action.type"

export const putReadingBooks = books => ({
    type: PUT_READING_LIST,
    payload: books
})