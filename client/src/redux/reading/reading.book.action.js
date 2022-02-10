import { INIT_READING_LIST } from "../action.type"

export const initReadingBooks = books => ({
    type: INIT_READING_LIST,
    payload: books
})